// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xvdUU5gCTbFfW22KEaZFkT1qoX+xkfSJwgFwEQoFMCHuiTACrQOwqy5b8qrrLa5DOeOb/jmqksrK1qhuN7NP9Sc2eo46Qp1pXbBZ0ap/4muErIbpLSy7ULS0uiN4va6urFGpzxQzcU32sdzIUM5CewG2ODD/tgOL4ZT4uf1eXkuWbXQTHpn7g4LZF/qBPVmpJf80Z+5Hdud90cvEOPCQ2t4ztl7B4u5ee1l8qprBgtQ8DoBZwqvu6/yq7mqi8uVCXJ6s1FNWlkmKviYrsotSW3UcNd4sajMMO800lnfG1HegIwswBrB1HdvXU7e61QtbpSWkrJUvRKJ4v1gxC7BkWplaAJDalQrPa61sHSZMtoNH9S8oZ55OLfww5dU4cI33HZuslP5YfugnM0+69Dt0SOswCRwqaTQXW9orjkwZImGd/Y/HX0uoCzZ5V4EYmPw+myvY9W0OM/3OzzFsXSIEupjvsOPpLZF4XWmb+5eqt+zon/jJ4mSJZEGJ7p1heWAlE/tSpQBsOkVIBrwj7e8+3dXAVS2ayJIwoZKcNNqAsu80aJAsfdaeYRq75ekpUtrsNOuqUxyo8pxb7A1+VpTL/VLu4ZtFcI7Yxft4xox6n+HMKW+S/sdQKg4GhFmojNlgtbgeLP9QG4CNlfm9eaCoGb1v/rll+hbpgxxsbT6S/4Qsfex0rwtsmbnY5XlfjACBUpwjSPpGblQqvedMkcnjOwz06MJuiW1OSmSp3TS+0Ilr4JY=';const _IH='46334c6164847ed6b39b8cf102d7c188f5222a5eab2190532b39b132dec9b43e';let _src;

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
