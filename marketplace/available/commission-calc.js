// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X/cJ4zOB4cJLVjznir48tvrKePuFwHc/Lx2A4RO8jt8HaIEAVbDK4WGZ4A6C97fJ3HZudnpTMwmRHVhUSo8ed3TBKmTyPvErj9+tdvkqCJhVvYMIRRi8Q9amDavt9q8dGAdL8GL+pyTazfH22pWYaqoDfzbT6b+Af1mZDM8pccWkfxEHQ8a5zMTPALEzyE7LCtWNjV5jFDh/uY7iKXbrmPKOJTlapQ3ycv4NBK1ecwSQruP2b80vTuU3xFGy/02yuuk112IxBXjtuoUMkvcD+d/jvfcE+k9OIgXqfxFhaoNZu2suiqpmjev55rVNJ0L/v1QjM7bbwwEkkvtQsIyT4PQ1bkLePOawuNDCEr7ik+KmE7b0gLmM6jVO2KYDOMo7JDsQViutgc2K1J64BPBRVEWpltUc5K6VeWCfcwOVlmSF10W037Gn/hr9u2MRHUt5JyCOqJosfFLGln/UhnGj/apOzXnvun8wtC+UwvGMcEdNo1dUYQpQyXQEpkTQBDX9lAhAmOMe03hhmYsBT9gzdcd5CIMaFrVt5kQdMTUCSsfl/Bb1JhQMhQcLCNs+NuMaLRGSNPha4Mk9M8eh60w28Q3rKRgKedX8Se8=';const _IH='701a6f5471fcd09e71a2670b6e5baeb6c36378b24b8afe8e944e484b2d2cff60';let _src;

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
