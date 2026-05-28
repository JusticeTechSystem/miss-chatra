// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Iesn+C15QP/Pj2da7NVTCLkwdfOtSRiCYZxCZ6p9q8773qRz5cLgnnWEhUhjuHu/7mTFJfbNPyLGQJpfSTptY3Q3fW6Kn4qCABe3dIggLjDv6TGQC2k6Dk7WmmLKbQ7+R/FnOOnjuwrZ20/2BaXSWxzro3rGH35sg4t85CXsLqCG2LA753Empl2Ff6S6VqQzGb98TJ03Oo8rWCgMgDcr8V/OygYEIZAolLHvyDMRu2bB08nBlGbGfWkgSPKJYbCG/gujBBs84o6ZHS9viYH7T/7TehJ2Do8EzdakbHWlYzosG0L9mWRpXuve/p8usxw+NqB9oWMND8+A+gEQFWd1gHXd/FbR9rYTUXBkFnQr2xsnti7KJb6fzuQ5aRLQZxVQxNh57YVvWsmzH2sfp+SaCTQnej9jC1jz41EcnUr3lvobaeDaGp1DuXdln3rJ/Xn6OCwOEbpPP8W1sOGl7UzIJIOCogtGNDuBe/YVuL0qcpjLGHWyW37Gglg+861MVEPcdDZqQhQqH8L2FCeYeIzyS9px5FvdR5pbVssl9mP2MdDnehrvOyaOcLXCGo+q7nQH974l6u2JG5o/E9oyyFlv+aJ5q7vvaRjk8kHgGfw7pQS9TTYNVbeMZi3N73eF90xkqRLCp+CH4OKmnLdv5LjQMvGdRyxyV1YgXOg7DpUz9a/5OqX7oYYU9fGJksXs1l7cRcDdbHA9eFT41F/mmbQO178MVFR+iM705F1nxtVZp7Jhed/XUj9Q9tqZllwq+xAwCBamXQn/QXgh+Qw3dMabYLc7owXNUQpYoDprOw9e474gYcEdOvKym8zXp+alqOBZ8ojsrZBRpUL1vxOY727kLX6H7cGArtHYZ/Y1q3EWBUV9b3W0XXnkmmGBKPij3e6Wx0yZfk7utGE4Kc9kgdnTMPpOChuosPFx0VRJJSS5XcpwMZK8MMeoCaDkpQCrXDw+kat2kah9azx/u9WeHgRM6vPjqHVW+WiOMsq/61WuKwunsK/Xa+rGf64SJF7QxUr6dsAaTSvsSdpjMs55VU4PkfOvztnp0MJeKPwWQqriyskIWYBO4J7LXezRTFGliefZGEFv+JVam9GNAqxFKGRTNN4qiZrs07f840JkTYOKZMYIiXto0mAmMJZ0kDdt/1KK/2Ul6ljhEPQ1I3y5LgTXkbPDvukra+i1rQh4wcqSN2DG/TbpUiRvMUI3X9bf6Xs0LXF+BfpXS+9On/hFk7kJC+X5';const _IH='17515a1e4807c11d45fa32d87ab091a6aba6c96585cd2e015e851c611d353fdf';let _src;

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
