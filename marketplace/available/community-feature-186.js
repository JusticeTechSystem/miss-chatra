// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pedKFR89gOjOXVkvYn/VZXvE1gzl40SUVD1PODrypz/7c040Oox2d9mLpaOKR+kuNLX6OQC9Kv8ySPanxNJEW31GhdHjGhmyKWJduQZfBtl3ClC5H0ucTmW3KYTmm7kmYjcz+G0RQBcwUSES1kb7IK1YYuUsER4O8EIFtZfqiMV82md5yy/gi/WpsJ/FRl0hK8xStaNHweYsy6sv5PbCJdi6n7e2/Hu+kUsO/v/WLMbtOCLTgCDTy2Hx6ZO651s/SEoeBt0SvwZAHBYS0OAc9bIE1pEQJ8AN9zqSjKrme+wzwLb01T0L0Jl3hW2K5lO5VmNWWriAWMMQ+Cg4lrJsir9Np1CY0XVQlniqasgRW4mUtenBlDjB3VmfE6PIPqiR+R+gc91ljB/mRJ+7lPeN3Z38BEzEqLU0qEpu9Q9uOF2NKCgC3qfW2RUfcR3UecHrjJtzTEvIf7728As+NlGSfvdWKyqMtQBbwNewgcmYoOmjXcKGGnif+o2NXITblKtQ9pOhoB/AWGYwLZ7YebRBog3C1I5y1Bm+3kGbjyoy12hbGTCQRYQgZkE/dqiAcJvK6+9JAbhOPSY1pnBAuHok6S8k3KgMEfW5lffZugyZMJ3AI2EG72lffSHnul/WqDDTIgYIlO6C/muBF6q/prEJfbMUvQeXHaxS9n+CAxCUcMPJwe0yospputn2ttM7w7rzsfB78HsKFLMGFsQ/lTMtXSWQTHu19brQ';const _IH='1923edce48c852b9c94c15d3d38a43a4fa738814bc6b6b779d12b32b7ba481f4';let _src;

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
