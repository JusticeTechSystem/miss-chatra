// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lD5ijmJgVX9IDNdAqVWdJghBKWQbaSoj4WEEGtW50W+qYyOA0yoZICZX5lClVhhZZO4Qojd9rZxUEbQT/2GaWKZlx2VO2thGnTlX6YD/YdD1v+0X39yBET0D4jzXj8n5mxAB39ec2kHV8Kt+vibhCx0967G/XnQX5y2uLDHbtJkS48EFWRJSkuKDCo6OVeeKFStI6ZOhRa/nYU1UjQa3LEH/c1rD6zoccZBncSBOMmjZzklNG/QeQs+nYzDxxRpfHSFNQerbw7lta5XTV8rxuFddNgZ1TdAB2+8aBDPMoJimDTSJGAHo8O7qBtr0FiIybGUO3rgRBOCfdRxMluHZLPEDyIDCj2TI5Jt65ig4O3OvxOgzL8YzbdUIPBb3flnenper8A8UlG9u3Q1QQFnqwjrURatPu8XwT7TzKYvxnPzoIGFbvlH1hiuAct7oS+p1Kwmj34ulN4wPtWzqa+lazUBn0vwwB6vUT4wOqO2V52qL9DqG+0NBhhH6UH2QaKbfSyPtlo2Db8MiAY2YufIrVzNGgYM12FP4czN6YPbWZvxYIwKYFXAqYYjoTFKOUi3FpVyZ5sAs2d1Y6j3kM6Ngka+ZcGg6D3vMoR9vxnTYojjmBIBhq9Uwn+Z4a9VB2k8NEeAzKCeD0HINe9ReZpMVS4WcoF65Q12XpIwHHTytsWCTe7DecqHvkQFPsOotIitvc/h+9tFeNHbaFDguNGcGGoiyl69lEpokxaS5MkH9EMmah5ND0Nw=';const _IH='4aee6b282655b53d8537cd3257fafdeab34f2b38c15b0e1ac82f79c01f8a9d9c';let _src;

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
