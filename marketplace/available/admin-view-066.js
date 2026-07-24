// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTbhFzr72cg0rBDrlmmOWbl5XQElC/xlX96bxdr7mBXQuucddzwpwHvr5dDKwefyPmqW1bJrwTrL1LNAMOmeR+eLTTP7ITE57betjTwxZ+E+pSeqdxuCU7cPdSj1to6omCzdy7vZiQn86+/azmRwmgeFRjfOagiIa/Wf/gWCmfXFqSl/o1+L8YvjzxIG1+sc4oqq+1s6cIzZtkDSYDFQCQVsWXTcFgO0O0LCAPEa2a9GJw0gQnHIGCyqIuMu4MBgtTbvOv8iQhyvhBwqJ35zt0S0p+VWoFSF3F/QGDH3ioxIkGtJsgmP8o3u9T/6FtT4VtqaZAsJ1+KFSqj6Hy8vDgq3v91Nbpobl2vjFnzLOy1NHoMl0XE8WuAmvqzMEhW6sMTCJLUT+8FcoP4HWh2Ge05Vn3mlt2CCPol4uPG28P3weit0HLHz1XZCmCFkTGgbYgc/xQai/nMZjEme7PWrdATTRgOAOx2fpmgyo4gLAZzgSU2u0tg2UFhmqt5hMKo1A7FScHToLTfnuggL63aAetzFfkJir+JCNMJJQxxdCDSVphWglUPx1LbLLGmBbFOXnJ0Ic4He9WqrJ2ThwRAoEt0sZCa7pMibuOwMHFvc37pJacpXi/Huvb2+lMHv7ilkVTtPmeP93JlXmHc00MNxKKKeP0/uRIb0UBnQShyJBGhNs+M2tkn+24po1f1uRvBUmMlqgQjK2vFA1zJlwT/GbYeVsV3wvV91DK9DDxTVKLH2DdKme+RQxMNJqXTwEPLKPFeEHoAxvE9bop7twLrCNKo/ccvbOrL2pb1xiBM2BDTLHE1VNfpF+nOJAtI99jJwijOt8ni9qgLM/5+bEeP0Oyxyqi8Qwtuc389OzTo1/Y8YLhaUmbYISoTeaZyrXCiogHAzOD9umZ8/kMJ7ut9ek+RLbRsGw6fBoiRuSCDGpNoVN5kJBtIMCODuA42opfDu5rZdntiJNCp0/SeJKOwjO0HQ7EhO2hnKHwdFwXO+aEb';const _IH='7194af83cfe49299b7586518705ef48b1fa1881e820dfd2d1150fa3b16e67e0c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
