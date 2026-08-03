// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwB5RspaUnwIwcS/P9IOngOLgErCInYlaMcZcNamrbj5T55FvHdPtAv9+ngByW0qGAu/ehPlvc6XzNy+m5H+HSevKRQLZ9x92LfjdDzafNH760dMK69OK+4Y+w9XhzPXt2d2f//ocaL2iNgiUj72GQ6emwfCXymCTWqfWpjoDbmLifqM1ZGWuM5rp+oRdyQMFdyO0OptK3K/JtK1mEnbdttHacCwLS5UNQ2rV70FFzTKcbmqLCEOymKbpxlDbDdwZ+PGg6JdVi4iqm0EqhbbiNtsZCoaz4ZKdQIpBNx6ZNcM2v8xTNaXOvfWY+pfqgjVEbHpXpUsBjfEXiu6+Jebn0VBASpHXote85ku+XchyTBcRCI+S3nnKtLnxmalNNpXsr5hVTadlB1h3QZ/Sb50yaDTXzMa8emO6nhBfZkE6EMCnJKnBBHzlGov39ABdcqf1e7PRz9HwWDmaFm+4DFWnxuD7RLM5EfHxT9dw2y7Juatkatfkj6AjHfyrc2Dz0njQjbU2REtNUhCAgPjCPtCi5rUFif0PWvRoIRbHA3AKo2rt7Dzvjj6OhnjIb6AOm+PFFc4Czw/gYFBVem0loKLGONKW4O2I7GLzjjC3pzd2dWh8gDw7VV6wM73MuIS8TgpHrA9ghurTRLeF4Omb8XYYT5A2jlFsBWVJRZNt4jhyLBZl16BQptdmrj/YEE8WFf7iDrLXewV7Cweft+HvUWOVUgQvCQBpFs+mtAy1B77oX';const _IH='16d7b8b09a0a4c01f00de15526a21edfa903df08f3d325261cbc8b57c06a16c6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
