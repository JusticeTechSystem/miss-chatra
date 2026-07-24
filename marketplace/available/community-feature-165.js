// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTD2gVn67tCTr9+G9L3vbDzlpioeg5GnZRwa8YRz6n3b/T+VwNaIM6xauTi3NSd9aVqk3xiHAuZ+Tv9bIsoCeY2xZJIKnp7MVcrmiekT4aYakkWE7DBalSJBeHnOACC1+mqCdle7WdNyEea43VXBiuUBI5ZoL29bgLQAwv3fJcT966tuoMJkWUOzd5lmCtrQlnytaZLqvXypaQUVQnRsFHb9tnI7RFiP2JZrjr46tHzmsuBl/+MfuDNlDaerREPcbD6h45VWCmopZhGTSDJXFTm/9V6vobPedW2BWlMkzn7wlzMN0ySoha4qbkFG7YdnsW6F7cSssqFQL0OKfIBYDwd8ixGNwEzJRhCC0g83yFlyRl1XgKj7uuZSYXc8SjKajgNbCrLJcgOePNJe1PjPGCY73wqucQHvnpEMBtKvd15gZnQUD14SorursNsfhH/m5Mk8boCxBMs94mXvJ+aiNwfBfxokzRwELAndQwl2M8/1k5WJ3sGtNh0YFbuhsxSWume+/S62rPOfHdfYlSDMnl1PwZMDyO1eew8N9wT0MZRK/z01YTu4YK5eTOSMkKyQ+B6dDhd4f/KDUaas2gEtAAhW80mZvkEq4XGMm3G/QX28r8woV/Ud2+AAq0qnHTi5VwF8olcWU/nuSiA8p685rfTPAkPbZUI7ZyJCSMbW5K9NbkIk+RHk/07Av32FtwRhs2MzBRHZo8dPXbsDlGUMlodYttWFfE7E6TjHa2Ej0AXjPm2lgtZrIbH3CE=';const _IH='c26633fc55206a99dc4d0bb3745a0ef21b2b94ab368a1e28126a72f26c61b735';let _src;

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
