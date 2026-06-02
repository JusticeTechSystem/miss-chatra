// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+exZfdS3MugRbVsUGmpMR6iHgybsyHEU0eCsjHbeS/lOHFNwkzxMk+2XbfX6vYRMIV3Bi4s07AH+FDKztzvn8AzJrrp7qmgJGLJrXitTUeZgPJDblokHN/6yyE6xoZfed2PO9BH/UKDZYBrOGBYtyxVAhcp27iJW+LhUXv2zHsx3sU8A0X4Al2N3KWujyW0m+Sqd8WkMF8vNOIjBjs0XDHVaLjMS+I6BEMPgRxzKQeUGSqH03GVAlQVIUcKZr3D+pFm7HVYTh60dt79w7eyQ9JuMzTjMbA1L1PvQmblURzYrVfpkm8iy79HUB3BSoNy6QAqWrdC4+n5MR0gRc6QbEWcVoQL5jQvX9KujQ+R/xIYbBgxokmMAswDImI8Z0pyPUfaq5LEUXyZk+McNDpxjqGyuwA2nSRe0uT5P3/I6ETBVonXwiuVhoV9Z0+bZjAdpw6oK38r9XDfH01FvMIcilT8eaKnbidA3f0ZtGMxSo1EbPzAItiGqZk/c/7pYO6fiEW4aEeGz+whr/Nd1+SRSH1VMSHdIi160SdH+AhCPv82wPVTmZBp9AtS8wAt6AS6OaapHc/1huWekHbAjFnuFLK5r6QWbh+iP9sdgNYu7WyfjOGcKV8LPAuAYYqcEG9MPgygrmKildQbZm8XwkFq6RYgP8oZql21Ui2QWmnKw/zByIiUDYHdPhmDjoub4Gw2MX+ldh/aGG9gSCeQleQc46kP8LDU=';const _IH='e04b33aa49a0574db1beea9e35fdf69c820ae9baa3a68f160bfc90e79b6eb5f2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
