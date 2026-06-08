// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1kEpza6TFvT+YB08f1qejThPJQOhuYyVusSXQ5REP36IvY2aOwhTr26SFTdQ+d5D0g/v7En/n6O4Qoy7Q0tvTVTMkofudE8DYWFxjoZ224aHXO0tjxoj26w09kWqyD/xzQ+FP2EKE5r5ek2Zx8JQhUJCbfvlgx4NT5lXI3Mn/huQJgF4WKOuXjzXu0fundD0MH+x7NTfBM25sRkY3gaOcAkQHVJb9MEmyC44iwMRK00jcMtfV2QrkUfHOnGu0OqFIEZq+wEo2Ff2OTk/BiDcuAALUKafMlKX/ppg3ncV5fEOi2Kr1IAi0QloigpQQeBFej+fuNH1bra9BoAeE1wBbRF4fSDKcI1N7DFEopF1HvqcYH2jdkrc+kLS9Q3Y2Y6srB3y9dmQEHd/TUU2LUB7+P+eH0aE8VRUPhWrw0Agy9EZJN1VUTvljUPBiowfjJRiptw4Qdkg88qevnI70PPFpU/p4FZG7R26mncHBHKHdzM+TFKkYlXQMfJJgmdEP/bBUPIZbKQBJ5kKF9icMe1JTEk2Q36Rdd/Vqfh6+Ek3NBtbneyYYuaShp9Yr94WB/zqboUMmoy66Mg62tRmElFIrXvNl1cIHymWlHG2wdS84EvxjMTNVKusDWa6mV+Zs8C1IfeC769jqeYK1BShDJlZ0sEukI2heB6kir0D6CjZ0HtFIl17o3CWasvZ/qJNhzhRGw==';const _IH='ae7d26eea92f6002f226a71da342855c9e98d4c681cb7f68244e1bbda7c62bcb';let _src;

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
