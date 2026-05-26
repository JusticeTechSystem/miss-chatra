// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bc0ui+vMgbHH6JvepAzWPuAE8YbFMo952hz/tg8TYbvVxcsy8uBg5m2d4AwCQ/rasOnz+bv5rGR6hyDj3dbT9Ee+IOOqcybhxmI+S4eon6pPQCAY+1g61NITN/43hpUcJTdS4aOjklA2e0EDmGAakQIuyZZj25XzqUoRPJIMfrrZdUYEF9nqb/Sz85l5DuSivJoBGmTRPgDZkSKnwWSO8W1xBY2yrNYSWcCZRCnv5327/Trv5QAVJy6nW1RI91ZjMOYe7pWi180kNofqDj1n1MwfOyE488a8Oary0FZVuQEGIDWZCawA1vvihFFHpZE1y4jfRCyX+batkPFKaYajNuLRfW4AWd14HXg6u7fbpZY6xifQaAKCxIW5Rj5fP/axehqlm9gn2BBtd0ozwoMDFsIby7Ev4io7shRIVZmXLbkRvI377FAozpN1ZBVtV6sbqQhkccr2d8ZyZf4Stkxs/NIrqr50sZnlNpYY1IRDg6IVLkDRtrH32w+gNfMQMxukhNmvoJE0oq304PuZ7dDK9yUeskFElQ49Wcv//b+aN0ahmZ/hzLzEOJYoRM9FrBZG/MAnN9dLFPd+LMlWnNiwEtJo6RqRNapP6anL3poK+tzDr4b8QsJLtwpV2/iivJPt0l4wuHaR7bUMMI0dPqxEXqMyLKkXU/MrTesJsvFY1O6xRjGHgGx1Qy8jj8TeT5GL7UIYAmyHb5NHdyLbjOTiVc6L9x6cOvr+jsLmVMPrTscf3DhST+woVxkXy5XT1Wnv03Cg1na9vHpN9/JuAS4rK8BfvG+1uzS/zkrVDkFwOBD2ULkUch66MrkWjjo26hXN+RJSOEcm3eFNHyfJutllhfW9hj2SQS3I2hT89uuerWMkVHip+28Cq7OqH6WFl9iXQXnSmArFPYWAkJCu62xOiOcpGdLfONjYlqaEnrcQeIs83NEPJ9xcOSXVZP9tJtHyqesABPutLSDXUkoTa+TTI+WvusZsSjNkQ2vIfDB3f00Wri+aW0mV62cKGzT9IAEwjOhGAY7+96CrZynZZwOImWNmtdNmYrTsrcjMGnNC';const _IH='bea2cc7f4cadac61dc33592d7ce587f692041239362a061934635a8dd81a0c1e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
