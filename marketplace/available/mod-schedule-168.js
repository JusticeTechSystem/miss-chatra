// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XndgFQ+aSUjfr/BWqlX5rsdhAyklFF1mSrs0zrUdicrUjT4tPl7mgJg+K2p1UNq7s357pi39bXNTZat7GG449GZcjB1ZtRdZK1TaOK1Ua0jJnGMf6GSaaz6xHOPYFT8tAvsN8JbZm14r/Ax/GEkubh35UuuM84kfhyYWPgl0zW/1pkIiEk8UNAAyQ1+FWOwWwcqcMweIxjEYWu8IVTwjEcF7/xq+v8/44rvpSCNKjFUiV1KipgmqKLPn/JmIHjgd0RJO0EQlV0/CbEYc/HseLiEvDQNuSoFyw7WdNHx82IoHzML3AiqPzT+YPzVS+XXYDW290OpVN4ywja4DTngHqAuH3PR9iUN2128vA4S2CqaEd2A6oOMiZK+CX/CJ8czuKt7uzwzucs7uoE5M5WCGe+W2FEQuLD15vjSbBTZaTxuF24i4Ryw+TMnFBQHojsv8RbMOBbXp4vuwYaKP/60cKFkxVnAxVeN4m5Sf3xw7UT7mcdufmAf6qYfyqV6RK2jdNA2IExy2oYfSwt/MHEzkFbUUoKyymx0F1Uj5DrtWrAWnHYf3IjieQh3rPqcgm/DR3JOjT4LqhqYKm7yXwievc0vTRKTVHcviCtoqqhAWXlEptnlKYUyC7fh9h8dqONfC1Wi3OdwqOpkewOHv08yoM7RYZ3bt+rKN0+u/S3cz4UHfKOSA1bUU50zPkwXKiqULHbjDg/T06Lyx9ONJ+mI6ROc+kdNRQOoQaosq1uUIBzVfpXldg4Ha7J0EOgEwqN/+B5WtevfpQmN77Nasu2c9rCxLKLxXaL+fZMrZNi5XEo0aRM7ZCEOVDVyjvU+otG040vIO3eftCBJ1YtxrSyXWY8iCtt8MRHOiH/u2zoFJRC91SRYLd1W8Hpie4VBq9NmCkSJ8H+850kv1p4vY1gw29wF3BsUoAt3tByYn1n92BWSS2wc6fnygcd8dzahI09RnA4WNW5O1Rzh177TSrOxYnkSe5YFm/zdrYtiTWu6UoFuxxY7aIep2Zyeh9aGnvK2Rhoxqf7C8B3iYOrpI3UMvNlNC3sD2S4JhRJ7lZzWP9x/JVGEe/EO/V2SGgHsBEl4emXQA28HqMDMrjiVfH0GN/PDMUhZiT7DMah3bBbeuCspEXZRdhvsfPYuLWDLg7XTB6K6q9PuF0vZhHHznTCzqWMQuPnrIQi1AmITCsETobLw6DvGqrzgZc15aXXUNyxY40ITypATYEtCUd85z2XAc3npQSTiMrd491cH3csRQPUb5KvYrMAtzC4wTxcYsMBT/sPApAuYmWq7CCncTQT9Jk7oodGwk6AlXLMTQccg8eu+vpYN56AAl1GavgbEFcuhsCisu7cFAEH1ph655JBxIiOTqB7TXHopCXT8akkOGi0Hx5ETkE5tpO4HDf0AfI6VKCQw5KJnzqZXl1Vnf';const _IH='a7e93a7471c75fd12660aa0bf09025bbe1416f0c0b4454848f14edeb92dd8a1c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
