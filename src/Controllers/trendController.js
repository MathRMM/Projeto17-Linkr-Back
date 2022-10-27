import * as TagRepository from "../Repositories/TagRepository.js";

export async function getTagRanking(req, res) {
  try {
    const { rows: ranking } = await TagRepository.getTagRanking;
    return res.send(ranking);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}
