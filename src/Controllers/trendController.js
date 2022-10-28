import * as TagRepository from "../Repositories/TagRepository.js";

export async function getTagRanking(req, res) {
  try {
    const { rows: ranking } = await TagRepository.getTagRanking();
    return res.send(ranking);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}

export async function getPostTag(req, res) {
  try {
    const { hashtag } = req.params;

    const { rows: tag } = await TagRepository.getTagName(hashtag);

    if (tag.length === 0) {
      return res.sendStatus(404);
    }
    const { rows: TagPosts } = await TagRepository.getTagPosts(tag[0].id);

    for (let i = 0; i < TagPosts.length; i++) {
      const { rows: InfoUrl } = await TagRepository.getInfoUrl(TagPosts[i].url);
      TagPosts[i].InfoUrl = InfoUrl[0];
    }

    return res.send(TagPosts);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
