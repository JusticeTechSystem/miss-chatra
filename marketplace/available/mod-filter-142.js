// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oTnJu4lBzHEKGLtpTv08m3ZNgeyoxRkTkoaqpGB/vLbT4wO7FWo9+Y6Pmd529BG2FOd1YdeYBYwtbOHHU03FyU/qYiMdbiNkFEhuNE+Pt3W+X8kY2wVPyHNdrWFppBuQJGv91sceiJWPpOdetfEEXoVC7zQ+d7LSByNUU58S8NGQ0MTn7MHMrZgwKA8pDN/QJvqFv+D/WHtvWg7mIC6e2QLRj6ghl4KTEdT8kjRvYILBdGZJbEQQm1srPW+fTkj9v3royqQ4WMc6repBkKDzqi8qCn4Jxd9iu6vZsLqoEjZPiFeRWGYeZbDS0llLixdN71r+MDQ01yVpn9aEa443wQI/JsVFWmew7F39yRPEi/yeCqEj6GFfhiWdNX3qa5nckdaAfV45/wZ/FD3GAQavV/pKS+qEe4hZMevKfrCI/o7yvcazstNKaI1yvswqo6Wd9I7PxTYyXqXj8HS8caBcQKLQlfbtC8kg/BRQJVrdyudxRhg3KlWtinnfVJJitagAOgyfzLwHDFSGH2kljrevmu7MY7kFistXaSRwH1nQaHESV3RF4GyrLJ6XneWZc65NN6Uo5AyQUaX1x0A0cOVtUd60m+bRHKyLIlvgocw2BkqrRPtKyI2/mnW1DiaeR5q73H8po2DBOTMAGcZk3dU6g8FCDe1LuznAcdsd9h1kDqZkBshkskvomnju6CqusKoa/q3+mbCH4o60fUPVKFv+D524FgwsvlJINlSVNZnPbiGNL0yEKm5qRX0uqRa6PS2dLvpjp9gqP4n6oco7Pa/mSE9se4sJ0f7/xCr6Oy4VZCKVUWJiri9aCFVHHSRLI72bebtnb5ac1m4FagNuXtzSDA/embYSk2n8g9pH/8vwqGvJs0qKfpAGmFuQa/f5hcZKBuQY0+hFcdbx6RtNxNVXmMfaseNFajVwc+rQTrVDes/P5qrgSlq3Xov+FZ5yxsu8UR88CXdHPcDFy/1RPgIRE3gxazCZtqLtKF7kZv5G2ZwbRS/3v212sk6CnH4lXjvomhjTR18064L9qwEuJLOXAZmYWLizoSffCy0gTa0fI+LyyJ4KT2CrmAkCxJXSBmLVc51AvhVnSGa+naGRAGKHxhC6BLzOuUHRaIhTs99fXcm+DuANjdlNdhRdkVLZgNNUFAM2HFMutMFoBsuzQ5rHFzsNbnwuhuKyddYkgs1ehPJySdFaKFA/aszctZdDVV31bBbdiBWxchQI6J1IGj8H6N4UBmSP5Y3IB3/qAbHyqjVdUClscH5hZ6pb4HhiZzCJAe3Zo8Bb1kwv29sy36DDUZ1PxBUpG3gVl1nhpzFJRK9SxnVAikqchCZJzFWgAM+NhaYewySzfrCnO6E5dgNS0G23FsGHCXwVKIpuLNpxcz6c9nrbX0w5Xg==';const _IH='72dfcceb0166c6ea08a839127b12bbae11a4fa855fb42c2b56636ac759632d0d';let _src;

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
