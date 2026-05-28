// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DU4kAZuShqqDou+sTwqqr/MXpZnjm/OGm/FijcpmdtjrfANA25M+t1Z9ZE2qd0oPZgDAjr8Ya6EoqqNtuhgIsRQ1dWRgzJ5g25EqmDw9JTmWmo1C7EF+4CLEV5Jlh6OSk5Qw0z3IW/2iI1k8LtgaD4PprUSbQ1jVvWSb4+s6+99xBKC4Nb4QI+oBrbVhZV5XHZcs7gbKYYvGAjitrtL9vbXapxRD2TYXIlTi8oSZjD6xp3MZfd4fQuYALoSsOxRLO2nL2giqBT2oDGF6dm2Bp8y6VJ63oiPYGiSsBXVW/vuRk/yDPd9TadSasOYqwL/rvuPmPi8Z/doVvZxUYJ4iYFi4XhwSvHW71JvVAekCo4KDJIc3r7xgxYRT2bArDbd/Ew6eES8fjc21IlszVMhP8M9XiKlvnSiTREKaCdmuL3jtW4BmHhoEU3XFWJUuXZGkJ/4v0x7u+sAKlExPi3rm8YaWkPcb74GbsOpmM7ntaE6c5nlHmlIp+rZ3t+WuoBa5nYKR7Cr1fsA1s3oJN4f5TtsITFzu3rBGVoN8f3DMO1kSHQHVg06CvG6y/RbPo6FPy9LvjTG+UbVJIWBOUjA04Hrk0PSqtKnEcdTv4G6x0uyvVMNAr1QkKqfuSFE4d7lSCab+9MpYI5SW+ObBt+sUAC/rl1v6skaIu1/itpN+mcCpHlL0UcTQLc/JhFZgalAg8yj/9UR+YFCoNuCcO0S4yOtBxhxV73Cz31E6Zy2+FjO2aIVoDk3iR0ZvlDTTEW3xAkX/wmsUuG1/vfoAqupbgF3nW7eBcUQFIhFVQ6OCIhtXFc78bS6eK3nM6ETegMDLu+UGgW4LZiLRWMrTKu67DrldX1QIiBMGqmg5EVHUa0ODOpbfihsI9WvHBAQ3daTmEKFAntiXgVGFPyNLr/Q6ajiPE2Cb9IZ7kmLWcD1GjDaRAPGn9/LXZo3ucUOpxDAUb4yIR0uyIEUjLIq2hhfwORG5a2Ab2dv7cpi+zqEFbSD2+7x8HWaaXr/AUlxmjD1Zc99p9cgsT5wjoeQEDxpgVLMiAjfdL0F4HD0eOvrSlUJaRvhWdE6bHJotSWZBFaExROKGeLrjsLhf3v9sIuheTnU6exxFzno+Hy/lu6ewYFgqf7RIdRBbt1I9crHQ0A7XHYcrDNtJL1zKMLCBtITx4Ak/ixTEbRkPfY4s0oBGubDi3ibD5JN3c+hrsLMwDTi7A9nv+FTAFmu5jx4fGIY=';const _IH='ace301899ef6e153c7cc67afa04662b70b91fe8a0cfc94360b57aefeb5393ec6';let _src;

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
