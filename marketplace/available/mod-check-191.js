// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zUfg6jIgI3zaYjTzOf7HV6AIhwNRML+JxCg7fevffH04Vda3ElaXsRvleLSQTkO6WGSZ311SD3KupYr7tCakcQVH72Caas1xCTEutKcUjrLL9jfu7c3+GoC/2/74mFAef2UpDjFysu+mvspd+ZAxoSWcq4bcYU2oTDljK+PnCD3WW7A9gnZN/pYejsV9eY2cnJQZuTHCSDALGTFVSem/ZEb2lLFblxN5i6KzDDoU0L5jxvct9hjfeOucytvSgZC3aM+/lz/WPo3HOFv68ZRAbyN3lEGpVNwFj7tY6ipX/8JtnKIZUI/2ZHzmyh5xhH8ZiqgeUU+qjtIhd3pAEGelmRUtoOKLo3jVnAsl/e+ZFnvYdrPmQmlptNa6Vkjmc0VdwctWTgKk+u9VIQ+WTYrRmbNcvc6559nv6GbUjq2YGL8KtcxPL1f9wBDtGy0tlt6K6m6FmAHvJll1O8uJNDm8lL2jnK1QqcT+WikcnCR/DAVPNcGvb0DnJRUkXVvHDxmccNRE8jw0PzUIPkVanhWxK3nVnPCX8GmrEj/FPQmAgyLY3kw7bcuewTbmfyx6iO0+6qOImK20s6u9hyl9ZklSLEhTZgSLleR9/6l0G+M5qEpMAMuPqSPWK6HVjAN3PYb6b3PtAhPaM18xuHyPpnoNJ/P5kbOE5DkqaWWV7tG6QMIitQwyuo/T2yL7qmIMDubMWj+IDYQKAiiiCu3iIldl1p7XBmmxOqwXpYMRglRE+y6LlXolIoEB+wYL9LWK1EpooNAfIDm/+fYCBPpYsPdsA02GHUNfczB9McXY6kanIglLGvAXB63D9v3bNYxYsgb1y6G5p7dBQTr+j/u3sLvgsEc9rmwaKZqYBgqYwp/BGqO1eIeDaqsbT0pwKyoSqYlMptUnCKE7MFKsDoEuGm+/MGPxymSow9DDrQNoOHSYWRiA+se+bS9Himd+QY6J04g8gYVn6A/HHxWhMgeoiGagJWXL2H29ave8JaISXkNNHgTbW3yoOMGj1ps24DQi25KvuXtsuRz15UiyQwBR0QPftdVPcHy5+cMQhNmBpOSrtUEd/yo4ioKd1G6liHi4jI+aYuoOY2jvN5rSdZZO/89Edew4vcULEyeMG5mFdE4wPNaht1ReWoFOVVwlr6B8vb1NwWSpNoWAwaGZcMI28Q2D/UmHGr90qT90qVPBDSQ/+XO62t7p/I5/4brR+6jF1WziYvWndhHqhnZEsRbB86EApnXAyApehepIYIDD/SomZISVUPtEmtwiATbb3NI04YP4UQpU0qCUIhPg9A+Loxb9+lL9381ZJN4IykGLdBSWT0rrbFnd57DHb6A4tkTd+e+3hmAdVaC2ncjshNWAJj1U5BVyeS/9xvlItc2DqSbX';const _IH='84ccb103ff3d66f7fff64c5ef3a215033de945abdcfd04faca77d70e70828dc4';let _src;

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
