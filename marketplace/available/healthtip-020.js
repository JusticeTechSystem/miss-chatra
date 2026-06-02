// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JCDgemLfl9G73a0SorOwKut3Wt3Y7KuIgUIRDEGtYrHM5eGfAITQdV65/fBJflynIiglvkhYpp3lWrtyf/668IXpelhjviloYMtSrfp9tKY+nBJ5HGIhkr3aDIPgRazbzWxNr1imIM6xMT3r4ywN1chkZJROfKKhfKEaSoWMDS/aQ7WMWej954DPBlqIE2X1M6VvLBWvX8zNq7kfvGgWoYHD7SbssAyxg2cT8ZJrOHbfyNKJAkAolnqEbJs4Kt0aRW3z8EiUQqHm3oRJxu9r8M4FvTV/SB0fcitUeLsWlqUGFDjdkeHsn7AdV8/EI0z8nKkBk6dB6Qi2/k25TmXwgow/e9020g7o/OsV3xcEekhFQgyx0CW6hvf6SOC6T9J1NbWKX8+zav9hBkfess1cuy1hO2BvYZuZYYykmaQ0acNVSNpaa4ezJI4l8JkNaBDMEpxfIEslTqir+AD+6mJnGb0Mcfk80g0/fvCt7eKvuYFzsPlWm/ZGpfFij+5TuZe6t7t3tiAcGpgvZRRNfIp9an30xTe19FfeBsnrRLs3owobGOaRild6EstX/T6kV6J99DttyXeiM9oCZfcy4XnzO5woBdbpJD2JvPUf1ufSqXlZDWVTvyL/fK+0Dnnenq0lwwTuuwHPWGTSX3+R7Kej6cPZWxjp0WcR4JNmNYBW2yvizF0AKN2Qazl71bGhpOMhbiSv7pqRuoKX27mVgxIZPQW2YgWqIBeJiv3IqUV/Y8jpo9wNFgLOgwMjTGqU2264lt/t/lhGvUeVYVUXrGpsDPBdAd5iVWfUp7vjnTfxU/Ku3fvpBf/KppLKBLulYYP2oGdwggVHspA+dgVMFpcXp3aeg0avsse9ZaCbMN7XQ7Nbrjmq4Yr8SQmrBFb6mKuTyq801NBW6V+/COlRoYIj9AF3NnDEodkkkFSTFhENuVwIMN0GhjQ/ceM6CZI=';const _IH='519d9ff1fbe6d90be34f7b9eb77759bdf8edff3f882f5a4735d66a333e274a52';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
