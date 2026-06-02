// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9zZYpcfbDNf/NxPosC04EKvCqTxuIOvXz4mDxBUAel15PBcG+NgXwqlsPGHy76/TlYXzaJtJZ7P+lWOV+DPHIEN7pMSquRKiBgJ+QM5jUaMoRC+pwSltF9Bgfny36lpHXN4jllDWxd/XcHkqfK3H9N2w0eFi2GJNaY8iS0cbxgBHbtzKllfhzJDZePHMt/Mbd5tXUcKkeL1sBfYFeDzxibnheXCgAsH4Y8RRfTFxjW4UcUyg+I5j9cf+UV3V995ZtKB0UdPOrx6wN9lQ8lsP76KxjXBIkmbgevTx+ORaxoqynNd379ATh6MWgnEqFd7VpYrm+U4hO01o/J7oRcF/00+q4jvDFh6puJvYk0y8MJOVIf/t3vY4O0fGFAUzuhkoaQzW6A6wuKvsv26mRsjkb/BH4LTTM5+/BnJvsa1LXl8Ls6zLhc7avTphMLcWzzSE0vobwH7I9HdaHRCDiyjqD0UJRYw6IA/UsAZ9RuDSlO8s/dC+9xzhcs2fBwtanK6xOdhMORRxOsTuSZ6dbX8OXuT0GLnqPDHNUe26GROqsx9ef1UiYr3jTspLx5vfvUMLh1cBjgNPRaFTQsX3tgZGIpNqofevfLSNykOfDwvcfrEJPJoOnApMWtG9BK0dVi3wfKAbzNkeYbAhqqdeiDvhLgqQpYNgLv9rpbnehr+hg05qLSFab2g5AO+s/h0Pv069VYq48T+iOtNLgCqUicTSmWMVmHvoDAYWaDhwT/nxSTxTnk7n73z7m7RDowTW1/OvV2n4zf1+Mo/X02YyoM/ALc2DbTXrL8jeih2EYqUcP++STczqa0aVidma5UZehwwSBCfSvGBDvPderDYKzMHvt5HJT0hA46y9yU086+6ux9PzDd6ciCaZ4hTzDkfkqKLcGXrFBvVAG6tiBlxq0R8YdLmACyyyXYY8MUSm2N9sZFUaG/1aty1Zs8riA55N/lx0NCTxEETYQNuuD5oiyH7NcsgnWDFmuYI9sGt39gDCEg/QYDASXLRQ0MPx9xqPbwd+FrUGa4k27KFOWhPiB3T72IbDvKbnlTG88HOgYv/zU6mwImuDQ66fB9wo4khHCRwdgS5S7vzdKBd83TRQrPjNQamJEATkWR7ZZagYZJjadA9WXFB/smajEAAHWQ9r5BFDXwryGFgQRGFX+YZdyWKt5yd0htvc1XPzy4seDigCKBur+FGKNWpa9rWfa6wzckrMdmqyRrRpT+rd0qf31n6+A1f0yAWKhX2WXzd+h7fENJd9bT5wqdI/WzV84XmbSUFs6Sc29C6c1HEFT/DHrGCii80h/0IMhsx0hKYEStSH7Y5JXCPZIqsqfMoNG/4Aj1/KklLMlVWlBugSCIHws0IexXUlk8SE3s8/Xx4fzaL85wWCl+4L0N3zD+T1Z+c4GBUp7tXVtHmA4z5pIq+0eAY9kFPGnMLMcyqTX31iw/WKXn2Kxd6eixNTnpmodRG7FFGp/a5+27L2IAEwlbHuJ3Onb13V+VAEG35fqmZR1zGWycR7XLzKLSH9braW6dUgW6dFHoI4u/ud0ySU/XOuoIrNqCYKp03zsdo5wClS3QtMd/lRkNQx7TuViw==';const _IH='8eb152cf125dc00b1470d0df4af9be3d138ae894849c1d5671f75024dbadf431';let _src;

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
