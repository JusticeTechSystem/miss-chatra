// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8iI75rghPMSUGLhM2irsFEOIXtViv0gPT9shj50VcsStjRk/eww1qB58f1sHcc38Gvo4HT7hABB23EdLU4bxuorCFD2B5ecw4NJiTaK73o2iaiQyKaom5Jk0qb/ckqCs9YslXjMTSmIKAEAeESat4wrXJtLMSRlwsqfS0Xs8aRXK8Jqffn0d+C1VXcSzWVz3ktnKL6BBFLCFuF0fjD63IyEeso2nkmrhUGFLwQoEpZyNit1DFg1C/KXRU/vi8/lFObhZ3ea7CY7S1QbFcu5OGX8XegyDeIjbHBzYnmXfviz+yO8X/IQphcHo6tse+/KtXSUQseSK94/vz69F3p9MdFCtYdRmvvh7FEGnGYZ9JOJukyP0Ne269jCea+SLCuwBNzyIXriOJzIULjspVDs6bGDsX6g5cdxBwVtS9mxsR/ub6Er4LE1O6pOK/0rvXp9rCD4gtYbIPLiWTaS/lNgDTRwZ/ePAWfzMG7NU9bsuk1WKV8IlDDOzK4q0TSiu9n3+ILThnFUMCApLNCOuKC6U1aJ4qgDw9jSpWAjqxie2xYK8N6FLDQF9VitV2qmfaA1yVUSIVFuB1qvxbmHzKkX9TGIg6fQvUl+ix1ev7fee2jDH+nv3rp70K9iaMo1TTDyvb+tUH1I0Cxypuv3CLMjIpwdN1MqcvzFcg2tmc6jGEDpznpsLjP2NvTsAJjw7twOxnTknLBDZFdpR56b7ldaqpgs=';const _IH='13c967dce0e3ce4d2c0a50ef7e86950b01858e5574ce8f9953ab7acc42a519e5';let _src;

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
