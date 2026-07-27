// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQG1An/izDT0yVW1tbc/TxQxwEQMkaCAGsj+8wVICChwtE8ABsmn20oxdZAG56V3/cb3tG7z3an1mXcYuc/KaOLRucBuPTfhr0bW5Km9fk7qhKOK9OGOV74oWPC5t7pWMTgVX3+WlZJrud5CtYfPHjJPMMurGO6+i0n20dFVm+lxiIUK52+ZzA1TSoDM7zKffPEfcgqaoyJQC24dAydPTjEPsuJuWAXxZYXaBLOntSI0vVE1azbZsae0XSjQOWzh0OEy9rTXu798qV4eqc5VykYYowQIJtLKhdRG0FOT2vZ6JLTkNt76wILb9dt5ZUtKH8aTTxqdG7vM96qM7cbSEchIzcuzxa4f7HMAz/qP8rWUcBNHqphXX6169CnUGjdZ07iRmmv98Ixkcn1aujouno05HkwJUOtl9GxkLMIHx98NTXHwNdUi32h8CgLNhEr6siQFjGUSChmSBdUsJIRQ65MJ3qM+eFYlyUm/7teN2WxAzVifqkrszMYuyoGOMUCZaVnJhUh1SG140gJuLvQFgD31nTgTNhDoGcnUQsARysDcyYqlevgbFhjhXbRoRI5L7QQQX1XTi5GhdE9+MJXnTJNV7B3R4F8AbhyBA2lwqnv0H0xL8dRnd3u9SIuhac1KjzNSLsJp6nS6zdtDpXjjUEGK6Wzt3TdLKC0N9BJzA0wXNuSvF9gWbHOySgm42B8UHATlBAg5A83bxTMm6uGRqUlC0zj2qxyMssX';const _IH='b712b2d952386caf9c4a2614e76142044d22a8d6b1499887bc11283b7e6b71e0';let _src;

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
