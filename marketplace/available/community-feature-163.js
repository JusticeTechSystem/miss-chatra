// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/E3j0vM0Tum0ujcreylSnLpD6Yo4MPjZNDaB79V4DbwoxRVJWTWxn7LsAsavtfSFxoDmqtKnrqHttSjSeRQbZJ6aM25YZaDX2bNPdrVSgxukEZT6RS32E6c5xXFnBje7LBRNY7jJgow/tvnf7Arg9Se3Vw5osnsEZMyOYQVMQtfKxRR4kUDfffy8nnUVD1eh6jICTumPAMLfhsxTa3qwVkBdXAk37bX0clayK/4fvd5zum5oHw2kD2hxhxZQWRRt6t6iG69V5QCR7os8K2ItW/Ofc/77LMiedE7VW+e3EGSHsHhmmODTX+k8SnKW7n4OfmzAzyuBbcZirWkZC+N/Rz2D9JqPW/67pfY6uDxmTiHsikB5azEB4xvccRzQJ+zYPXy+2jSzzAE0r6CDlmhQXFqAXJk+UzfxQz6ZW4OVch7VpYv0ioFyZvLkuS2APkCFB3f3RZVd7GrWaMxVxQOW8P9Cn2VNyWKqlCHtCFfks9PV3Wonbg9hrD0KvnHtgYqlaoTYNcfivAfH8j+LctzBYO5esTj4yYdUt7lB0R/tfYay9+V/fQxBBo7cobecdQkaa2tjiq36MFrqv5o3m8qxWE+HQkoJP5hAgeGWMpTcFWRhIJiMf1oFqmH4FW8hG4icDblCGbrOQbPWd6x/BROleR3BtJ38txxOvPAeun3xI5Vf1hz+/m0hwfVuiEFGDZ4IzSYsFKO/1xgBONOIsVfYaERZBEMeq8D/t5kwtI=';const _IH='a5d6fdb885b39508794e9d424c98d85587c19c91a6f573b61008aae6227f115b';let _src;

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
