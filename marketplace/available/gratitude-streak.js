// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tu7kUNdJH+JaZFBfruExzjXlByQo+XLw7ubnt7KTkx6nZpmdBZvwexyPnh2DIoR98QflvLlxL0VudkS5FMNJvIeEp6JjWZNY2HV92oA7seSPnb9gBvaPglrDUDrNCWvunAJsN6zdn4I2JCYUPyuPDQaN1PVyc/EWWAcehyoV0whWGnBT9QyCCUzHO+/XrXVkzsq3cZqtQp/Slh0trbYN1aPww4n45PGC9N+RfRqR7N/v6mLySFRlXn3fH5a2V7cjknfkG8P/Y/1QzUFWUKBjPm4AfSqarArOCVyBKtCUT+tPMhOWhPayu7tTLWAh4V2KILmm8XfS5/3ELVp4DeNFGomjce7xej3nsFcw5Fe9fcn/CNIgR+f4vqOpD8iVR1EHuyid9qSMNkL2vaU4XQr84SwPDV3j60mpOZqhtDd5rnRxqnTSzYeVH6ZHbLxPEgXZXO4dbUnJz/TJ3CDuefoIO/4fYJGqYEhjaYo9il0PMlEMODMdeCxT';const _IH='e981f3946cd5077b346b06a4dd5df3256295287fdf8bc4d6d48fb607a1c2dc4a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
