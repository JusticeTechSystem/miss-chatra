// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hGps35BC+9ElE44kjZ0pJQK+GX8ZM+Luwftwvjx7DyHFEiZjBQsqmd1nzT54bSZPyuOCYARgJK1Lgi3Fn4DorQmp+ztW2sueCy+i5CsFK06ZlfUtwl52jgWSiHlcOWKCmL9IBEx1y958EBVXikMD7F2Qa/l5hJT1Sa0Dy6zfg10HNRptKc0FDk6ObTTiZbpGNWPsGzzxu5DDSpJM8c/iYrCsfa8E7zYEhzLcDYUQflnZJcCRsXEf+bvB1hDvNZz+V+rDirId0zCHtz2r/DLUM2xZEniju/WESj7RJXK0RfJ34utctvSdpPWD/3hG4WFgS1c7dQpnsNnEud41X2Z3unx5bUyGJbNFd7J+dALEoDcjQLHiF3IfjGgYpH/fWF4+5QYJe6vtikkx+TL+ESkWaxhdVF9qF7h3LYh1WpT7pPfLKPVLNm95OwjuBZXdu10ES4BnrlK9VlIxd7c+4zcpKeK/eONCE13bUC6sF6ENcwgUETQHtk92TQKE6DqaK21at+jId2HiUKYouoJD8nnlxMGlp4g7ahkguNaQIcyVf0h6L0LZX5+F/Iwg5zT+bK+p4ees0XT1FrwOypGaTPURJ7+UInaXQVqN3FH2rXiuCPdH+k+WcH1cZp/J3mZ2V2jLhgTgDzdH1Zts7gMZaU5f7g9pIZGS0d05+hYEUgu0YECw/4hfS9kVRtmaHr+mmzENR6PeBYOYGwFybca8pMibdoNcFEygF212AGkayeM+bXyg2AWH2DAqOPoKKy+kTHx1AvUlHBSYZonIzavteH36WTBmFS2OCt3aUzzptN+Rv9V53lZoZYbHaQmFM6roJ46wVa6pzgSmykNKCxN8NWOcyXwpJAWHed6NdPhkQgpjL9an5TBcRqb9x41hV8TBFVITmsQ+IjDeQ3lxLkgNpSRvYmwZCnGo8J/KtN4ew2WmsPrxJm9gPYXtvGY5uj8s5zmz7IpYkEHN7tJxi/3z6JLFp/g8ipRejvB5fXqUWqvEyTDf0gSKE5ToK1zm1kYhmcw+KKGDtH6JhkK5Z50XWccF/SA/88bjg1onZrQtmCLOvHvqPW9DqaFzfq3Ye5pL6VJOJZwlzpHvnHHx6rLvvoh8VP25c/mY3KkA6RzUHY54L2jug3JRSY3Jjayvyzenf8NQuXmFAqFWoGimEarbv+FYQD9yJy8/dqBsusotN8DVqSdMpkWB4sNzwXCmmcxHRWDbGunMr82y8rqn/bzm48vBBWbEog==';const _IH='021ef8511739e6d76b7f33b5041de3137d864ac5918cf157d295bcae356650a9';let _src;

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
