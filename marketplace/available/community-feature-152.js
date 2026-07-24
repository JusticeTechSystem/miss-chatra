// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAJyMdbNNfM7uYOTxuLrAPs8FfrOWJTbpB/UQWeIQLANZEfxGG0cp8dWMy9Kr2m6IbMge887ezki614HPp0FXDyrsqs73NCPSJ7GVSJuh7LedTPkz2t2yn22+acm+uKGZ9EgCl6YKvxhP3xf+75/I2RGCI2ky66e0oG7htnKnVEi42+v66WQl7m59zKsTXanVhCx6HD4blHZLsvYXV1Z67a/sJM1zD9HxrYMdfhmleltHAt9WZn2IxtziOq0AB02SL3Q+3h7XVv3TJXh8FUnZI/WdWn4rTNdcigiZRQNC2FaNziYdtSm+UhzcIq4yiCS74BSoh9vBblnAr6+JqX9+Jv9a8rE0s17NH90qAN2yiphyx8Ddztlk0iHOfmOGgmHeQkUyGrAdFEwkEo30kqMNt1N1xnH3CJdoAbf5CvbCI/mMZVU2b1C/FryHHZM9An5Z3J6bwBxJIrIqssgx23NPwsMdXgca3/yl1Ijvu8StmH0Z0wcaNutp/800pgo7w3dF0l3Xdm+vo67MOBY9XdiTapIfxX1NerFdPol7kMcdtTyVSbV/VuCZ39yWkItBh6aMzOgMDAgnLEdiaaeRMBSNk+52kM3syMB+Mk4dqIB88SH88A4uNZSQSjIKCunS9lAtXPz6veAe9Ra1n43NS88FwJsuQShqa7+SMWK8IBwbk+XSjF5L+o7VQiyyYT6N7UD7KJli+N4auBHPupzz2RJj9ZLPAbNFJFPWfJFDZ1bYS9XTR5w==';const _IH='431c0af1b571a9370d41da053eb00cb47f29c32c6fc926aabd37db758ca10388';let _src;

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
