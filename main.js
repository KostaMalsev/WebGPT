async function get()
{
  const resp = await fetch("weights/tokenization/gpt_tokens.json");
  console.log(await resp.text());
}

get();
