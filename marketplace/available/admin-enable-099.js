// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d1VUsj+yxKa/A4Awy6uffG9TzTgJXUshJXvgFqoVBE5Qf0AKw85TxJAbi25Dpdsi4G0IkswWbXs+6pMy9lv4G8lpbKOelM5Fvqc99TGjB2jIq5O8V2WvDOQpHPlyslz1eWqwHcx7y/tJKOVh5aHOgBUwLpGkVBGeFfsF/yfJZPJ7Frf8tRJyqyGWxzo7oy8bzuRtEPK3ZkOMIGOyyiCZwIayKdJDYIqMrfNjmhCcDCFlCbqYAj2XjAVIc2IKa5eOt6PytHCboHWdHjIVXeCtf4fN2vLuM7m+ZjjdlC5q1VmPIEb4M56azQYgRHBhhOCgwdbtYest0Ut/lhUWPMKOiis7F0eO94O/QqI7NdkE9bYlKV/G8+4faRFMKlQuKEVDS+SGGCEx53/yM+ET3pFbeLzeHZhRx9Tp5BMa6E/FvuVWYkVR1z7yQ8nrKfanJebVO9Io3/PaI4ezj2aELCK6JVtTRxxGrEhkziRwiWw6GVkfK91jeGB1OSwiRA7A43PFw/A2oKNtH1t6+0Nf9Hr8Fzm0Oq+IRVCwnU4ETix4mw/uu02+CgE99mu2vTU6XSMf3SVtYpeqf5A2CEw5nX+rcyx+DhoqwMy2LZlqsMAv+/XbnykmE5VzD8kDOqqySinI10lEEc/ymgQL3gOmzL80+bUFjAeLdFgYQmh90dSvsSqXvMd0lOuB88oWKQpmVTFh94b8iSNoRJw+mrnwW425budRTzC5P0sNiGmbWPiFlvZH7vn3vHyv3AWdG/+EbauvS1C83R2V4L5Jvu+89crUmtX1iclvVb+FEXtITfFLFw84K/xvDROGFDA6J8S6vFOQkFwLZrd0ltFPEpkJ3r7oFEI3Bi3XBdG+717lF/savDCWDRKh0Ys9BE7pssRrEIZlIuUj387TgpTx5kufl9igXSLof7lezcr9yJFjaKHUdA3zfkUwFrwiMKTBjDLmp+LThmr70ZCkEq4Uh8i92I9rCWIUNJP0VBMnF0jNVCsGp3HsSvWfv2vzRmcY02fS';const _IH='2d66d6b2bd058a4ee65075344336ee7ebad16581fb6e6ceaeee14ce2ea62d48f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
