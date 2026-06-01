// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQziu3c1kPh8HqdDoVDDW8ogFiPgwIJ6ElDT+cw2/UwUsrVseUwr5Ybdy0ZW/raPYlbA7GE0YrpCQr72fSR2jcA0P+E8AROs1mOmWnffHFuv+iH/Zz0txkWb28u/tGbuwSkapNXtxqD6OUmBegHcLiEgh/KQA8/cgkueyzKVX62Kn+DY1+cBMereRY7VRfu3Gzt/PE7HGmfPMekqT4wh9VGvExUgNEI6/ch0H7KWhGgmESe7VkFVu+bmOEpSLSi78EtUDO9LY8MDvAy4bWTT3dhnVG6tyXaq4k2yR2bEGgLWolgSw4quP0W9RteibbSSL9xhCwEFlLL4HkAaPCJ3X72zRFr1Y/YxUEBSA9gZy24HeXb29+CZVzjShy8HLE/X2bSoC+wBU8Nw46QZ5vWhJ0FDrr/wdn1Ef0PBjMVUNzsNDckirQfWuSFTg9tWWQl1UoKosHdzAIMk8T0xIdZ/i7A7yus8TmkuUmILnb8vxNs4NVSPLN0FxzEPYpB9oAYtKkEMuen/d2IYlMQLwivwIgc70cs2A/1fwQsiu8EL71CRB5q5G4gIcojID1Z4xqoXO+L3o9NG5JmOxGQTvCZG4a7JxNLFbuQ6BC31GVGoXtheW56Ow6zQ+qNY28fZNWHGwS29noyClc0nBqUWgigQR67d2NNYLV8rb7wAr4DaRDF2ju5Hf29YuTpBPg3FZ8LmrHMWlfu83InlMsZs+6WYmDnFsF5hdXOUhpV1UVyV4iVdqOEwxuWjq1JdC+g==';const _IH='f175bdf3f064f66caef965146a1a8675c3b360f4fe739357ae2d95e9aee6139b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
