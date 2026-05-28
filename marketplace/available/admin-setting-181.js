// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ii1ECmXoSpLfBvu0HHujOYOOT0HXFprX60OfLdcKd7vzTFDxTmmelDvhjwc63QEVY4Fj8r6ipno5MpHIOS+LWZe5g5zpUostS2WwdUFyiqmijr4xojbE1hMClD1v5UfSC1QIeX8MmlDXWm1yznj48BbqHwRjVhmp1sUkSvR5ZNsMBV1cx7R/b71jaH8mFdSP7l0cCaKHNxLA1UrLZEHMvzbliIBsE8RUN+mKaHCucfx4N53O0rr3uC99C02waA5XdaLfkgJL3QG3g6WI6zT6xSvQBbrlqrXZ0NyP76GTIUEzBFbsxLnG6wHZUF70IMqhSH8vOAnjWatNYETgdS1CfiB9q+FCS5b9keyDZdDfiyc4fYEnIfxfpE7slFPzKJlOdwGgVrqZGCffEOCMRibRqjn/Xgxao4a5lmJHnvcBLUrwxvppAUxoEt/NG4WqijIs3V4m3OwYM6tpqb2ZZG4yQR/1TiN6nFQSjIF5zLwcjQRPIMIhda7gqg4LxRIDoB2vkGHx0/081QmKYow5/+WSilgUKjDZeqJqMYk2lXwVHvEvB3mLork+TRqN7j6z5xgQxCRAHoqXYLUVb7tCPbxuk9S4OGI2MwQKfZOTHUAN1pREEzcDMu+/4i8MTmE5jkKoGm+qqO75grDgFCSStbgEBFraXdOBWSAkqiDGRDX/MmWOFTvS2DJcgGh1YobKJAukRSwP+GU9nqldtu386gACdGHphG+zuXmimzjHWin5TY9iygFliU3eB8MbKkqeOLoJEIZXJFCFsGQy5Rav4Gr/OCVi/ecUPHCVHs09k8aUdqPMp38J+5YxCIjUv01zCE1uMxISmb38NQd5a/0HlxDuc5NCgWbj6/GSgQNLU+GS4IqY2n+3qfsJsBj3n2RSYLunAf8/MKahc9XfLRky58Q3Cmz+mi0T3eAwl+25bAWT/5YifeYCYfiaYLBzAvZ7K5QU5WeptGKV6D/QGAriy4DtopGZW426B8uxrPmiU1/j1KUfcC5GyiQY1haRlpN71hHsrjY4F29meKU=';const _IH='1e1a9f7447f8e5e64d38f22eba80c3efa4e8133f5971dd85483142440c73edb4';let _src;

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
