// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dJwJT09zGaMNoOrTaC2yIzP0uh9iK3Jn8juKMbcO98sKLPEcGVCdBOZb/cphPVaw4H/aBUIiTvMbZPgvJfH91R8nYq1BNm7MEWbrlk1VfDGt+D2YlT2WCdHPtH1ftsAdzRYYAIrhFlS6TIdNq+P16k2nRQ67B4q9nhzdSE1s4HNgUkSd3kfib7Su9kvwb78WYwjyteSpcnBH808elMPmhNBBrgA6A50FBbcCnq6wBxb6e5IV4Rlb0eiKe1iP98Z3GqCIZ6CCz18RXmIgtC2wEPwNu+oCNwnclxp1pEeuldB3kw7es6lwMHySgd6HE4aDak0c6y29A5GJs78aqSW/XLqokIAI1d+jpls8bLfloZsdqQh6xKmJyQCUHc3t6k8kuNZQFg86QJVYlklQu8ktFcv+33y9jJRucIF9VB6cIvPTXV6eW6iN5K3OBox9OE+V06+RNSNLKpqfFCw2gWifgbczDwTbvZbyDw/SoYEm/XxABe2bLEvGmCF6JBqiRTwjzJ/nnWwAbEw9K8QjPRV1niAOjfSScHy/2u6MoOwbcVVvG+VKBfKoOLAfa/aiswsX5l3TVQQqSrkNI8olyx4xlTCs/i6qmnwqlPFPVJulHwar9ffeqrRm9NY4u6Zz+1S2J/0BoZhC7u0s6RRdqVGEKG1vQY+iwLeK0uqNiG1ep1isRM01aZy9l3iKiTUOih8aeWQ8vg61MrghH1iZmO7XO1uGuXiGGTZzL0MgGPOiewOeh/nHZgDLCLae7CPKx/xQtpP5kUneP9jnh0SZdssXHF7tpuSLI7lGyde2e1caHyoMeFKd73F/mg9HRH7QpvVy5lBwCy0pEMeJQDCgj7xtEoxn6qSFcQBbq1ZiH+CfkLOBVd13s6CZ5bISm8HZFYPkdp+eRCtOBL6CYEhdRvGxwdKIgRBD/SsWfL0SPfBVMNViTdlTYKM25vuqA9+Wmeyi8c7sonyyqF2Q3Wug3NSjNgDoTVZ9zkpJEf22Oh24fSmyysFX1TBj7W4pj1da';const _IH='2b8da33d62f230f18abed3a8289a82000a96ae12b74f7a816540131b8aec221f';let _src;

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
