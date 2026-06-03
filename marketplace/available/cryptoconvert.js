// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jyoNpWrhGkdeyxVoeUy1Yp176JF5y2N6EF7LgG9iFcKKv6b6f+Ipy8MgfA9dRwD970Ur5ueW+SdQGchQnNrqy1jenFdXYbSO6Apqry+BjuW/DML8ZEFRrr/8Q5nfijZbkzI1f9dDZlpRrXNob93dpSO70r6vHbI8r0pW9tpvTwaclnBFadKUdWT2VH4JCJNgS3Lhrnw9vAvzIMu6eKT1K9KUDH0SRq30d4MuTJ+rMDUXfPNMtmCb7R85wFuldS6a+VFlsz/kailCWgsiW9uPvNqqdDTrGSisjqyefEH+7s0oS0M6tCs1+IUuMXEI7ozKx8EwRWnwls+fVUW8TyX5eR1zbttv653jPKjkRJ8Jqj0Nju1qthTiJsra6EEhmr70r3mMRduNOblho/F2U3mUcsNGi9IYakc7NkifD7QnAoqNpkS49aZPzIabruDICcDRv1U1zLRucqtSkfWMxMl5LF6Pr15lg2LsGjVyZrNLJezOvqmg00Arn2h8qBImuKcm/RF/iQf3r1ddSK3cnUm8TtFQCVMy3sGBY9+IklRwjQnU3rF9Ugf/CtsBqbUzm33KWkdz6NYokFsrNWO3C4rChEXEpvbJ8L94ZLJdPtR5qzdV61DzHcMMwnONtOCKAx/JQ8tGLNNMsFuyAo5//frBVtfTH/PupVFgEdDnOmVnBwDJjXzpmhVidHKThy7A8kjwvvSPdPtiPiQNUfaWv8MeKmFtFuziolPd6gqZYhq8HKWqf+maWfwu4uXuWKv3/DYgTqSEolVuSwP3kolSagq3Tk0kNBQac1m7iINBGvs8kjLSyy4X/vu7+oAo2X3l44YS8xhWSfgKC1W+6/NJ/Ol64UxHBOlwcGhyfqYEDPtdjuQQRrcBCu36HUodV2KN9N3Y8Zkw3fzK0roMa2p0nDopwjcVtVuT3izoYQPkKPyeGcB+3jvmWRQzqJTfPnjvM/LC07t/YzigzggIGHdRny+U72LfNQx7w8YkNM5GKmIYWuKFUT6Ym5Qd+Q+yUDwP+J39JkLBTyYZjS38pIO8OhJSKIlV+CVXFjiTYMyPD9fDw6sgV7Fm/B8P5cuMT0AlfnZJ4W7zG8dHjjd5VPXXHlb7UGVXNg7W15e/MARp1tvoIF/m86yOVLXLS6vmL0gQcGJzi6F7xvTnG5lrqr9+qg/XRufb3ijA6lpUF/vT41KTNkbJp8MKoH3ba97VxtlIrK/XoUdvlfIGYke1tA==';const _IH='a33206b3411f93b337be2dc2d619a833b3fc241e8076ec6569b8b7d1efc50b68';let _src;

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
