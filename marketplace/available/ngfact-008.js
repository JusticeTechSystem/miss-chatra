// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrizo697hyeDCyU5nFNjwQBpynzOpsbWC2YQx8KWMzynSDWNBgjylphXzcq4iJp6GMZK9l1biQUt+RqVYot02UJ+6/kz/DEOy5G3pgVaPEANNfDBzTTvEEEObDUTgHnK9VutkUSd6t2xtZtybtpy9FrKoJhwBMRE1jxgUegNL8B3Xaje32quaRfcj6lPZN3BmS8F6XZVKv2vc0JEZ7S90bIrg4Xkdq+EM2nHP1651iisUM3CF6MXW9gGArppZI1mPa9hy6f0NCV7GtntouwTzEE5ARE/223n2wsPS2tYlX6+fh+51+Nb/41Xt7i5JmidMWOnD8iGTej6cBliAmEyo8Iq3rlCMp8zkdQND22HQ6bZM+IB1S9aAVfEzXX7TClOWvu1Jo1PQG2eDPvkGmrf9AQ7iCzwRtTvDkt6/c9bwJHNESE9+CKWSxt9/ZdssBopzoogSlHQmRaiLxKN6tZNqOq7jA8IxIGx6n+u1345Fo0RM+uoltWUc3Ki17IhTOBeGNZ2EwjNlfUy4x1gYcR/E9EpUrh33uOmDCQB+Iod6y/t+XEHiGOdGfwRYkq3RbA4nXI5s3iN7nMPMy4vymtKDrUTNiNdrt8/j+sroLYptMZJblzLNTk+mZ0OLksK/7knaL1uxtL1trxOOIUdKGE+LoENAmTrMxDf6sqXtVr6z3i3cLMB+izACiuW5M8fm51TTq6ye1TMpCY8cXbA==';const _IH='4821a6658921fae82c04070374c05a84c5d372cd785376bf400551f03b722176';let _src;

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
