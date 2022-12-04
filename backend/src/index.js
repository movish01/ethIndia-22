import { createDatabase, openDatabase } from "./databse.js";

// @get ID
// async function news() {
//   const news = await createDatabase("docstore", "news");
//   console.log(await news.address.toString());
// }
// await news();
/* 
@address
/orbitdb/zdpuAujHwQS5bwoe5ZdkiQwaWt8v5KrAixBjy43wpqbraT9BV/news
*/

const news = await openDatabase(
  "orbitdb/zdpuAujHwQS5bwoe5ZdkiQwaWt8v5KrAixBjy43wpqbraT9BV/news",
  "docstore"
);

export { news };
