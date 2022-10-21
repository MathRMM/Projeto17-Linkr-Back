export async function testando(req, res) {
  try {
    res.send("pegou");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
