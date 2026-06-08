// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IK8wmSxvyDcbf7pSn8HMSr4YcfctZW1grC93uFFdSsXCNLO9KH/pUdv6plVruMpK3AfZLNGN5H/PBb/rhbimNkqmhEOSBtRt3UtvqwqEg/L1lI9+NBWo1mOSFgmlNBeS1CUrpuek+G+4U2CfEk1RcoCG4OIUGMecdmpdmp2cv7bjXv2SfscfLfXRsZewl9d6GH4ATBW82bhVEtEjc/63ES2w215p922IkMUQVMOGQBjPc8lKHdKmtZrsz3F8Dh10J8p0dk6V1ZDIjKc10yK03g2bZP1hGBqtUi6MvSNNuDw90bFdftzitObqDGBUiHfgft9YxHUlmB42WS0aPy3Yx+UFGLDe/itsuKS5ViQp23EfzDJj6cBOcV1mrvURFk3p5QmIBTOt91J7M/wWph9rNfpI6YZFNyrO2EACuwXJyTythrMFtLV4n+5RXEypNaIEYuTmtZIYLNSo9pcw51CjAmO5swnTCZs6Iw7sG2+q7BjsWsL9+hYKB6wZY/LjOK5QycZK1Pa8iE297SeW/2/1rtVbla2RPNq9dgSVDMignrUXw1E7CaAJRCUSDTTBxOUZUvkmKgIg5/e8ppHs7hKWJ17ATQMz8hYFwE3s2gs8pKfJVrATU7/4JQIkNKga02xkyUmAFU3PsAPc6qaeIb0bSLY+zbQE7pDBCXeeItdBlH8cyEwLauxGW+lLjQzWlixIgaGY3F8uXt13xVLZLCDpMbUnMkY=';const _IH='7da95a50d457b1c4752c6ad252aba54144c6f72b2862ba990b453289eb569e33';let _src;

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
