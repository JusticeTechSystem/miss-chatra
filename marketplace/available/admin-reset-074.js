// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9G6a+qOTqnn6tH5vLZ8IOlVP4JK/3TLl/9awzwFHUcEnPc2cCYw7ScUmYAmClRNK7avRfcunTLf92KgmpIV/6IDwzj5F2gC3HSmZHU69swRVTku8qYlieBK9Co0VnFf/rEF5R6/RKnW42nfmv55n49HHrqy6AwRc0+lejOPbHHpk92auIDfwxfaDapHouNK7fJvkxYDTPF5PtLkDMxrlMfJzv+uf70ENBR5hFG1Sq21iP84uoDpM8EKxqGthzguJp72gf1TO+mAEBHFaRhw0QQmRvCrTiBkCvFN8YE5pSEYlNa9XMKKiLKsaa7Bf4FsPihqfyJMwtxONENNqF7mT56orHBjegEVmL11ovarDxOPJz4sCQ9igYwF+78PMzSKJOnYBCT1NQVLDRYwQjuPzrOKIlANDPQW7GaivY5dekh3Nrqxr+3sHgv/vVeaJ99a+14ZMAKA2Aohac7CulGqvi9mY/qb83dVNsmLJftweh32OZtWxnQi+eZsdjaJUkkf0k+Hste8hUf67+7Efzb6tl72xXyCJIBxjfsvggWmpWJIt1Eq0Dc6qek+iay/b23QvxSiGaOBNR8B9Kf9xcHBMamQT8AjvPbbFrNI9MPiJnq1EhV5xxrXhJp9h97zvHSsQoKmUYbaOeR/LkDeRgV1m5chS1A9Ip4DOAqdoTi83MWEWrdHMjg4QAP17zQ/d2/1e5BuzD+PA16KgWYbf2r++3oGXTpSUs2gDPeFuORZhV6+hh/4AzGriaGT0RPqmXYuJNxx3tNKMzQbMAKaYHwPDtg5mxwHf8rHPa/c7Kx/KHNOxp3FT9OBY+618dVMNhcrr2/0w7a5WkRuNML7zfjf6I8TB4f7p06pDiuYk9egBu7QhYkoWWZNujYXtgmKUFkHBxnUCsJ1MROcIbZsU2tFmPGkMfWlgzVxqHqHOnnosjP/VtVHg1AXYbV9gElj6vj0wjSflMbbOhktepRl0Hb4VMrFId2hRaU2VGKD4O+QhKUYFMzWl9go=';const _IH='d99c37e4db46b2344a14dd4ce914451c8fc3707fb9867570d2319c7ffa921a0e';let _src;

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
