// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='64bHMN6S/1RwIjpudZnCljQ2mKNqsxzdvi4yCJN+r1+iHd28ihjHaWQY4/jW+4IqReLtAhatgqiGfE5TMTd4kIDSWq/Od5bVx+fhv3SkgZxV996rgand+ZgzYgk8+mwf4Omn5tj8qu9WtCrMVJWlkOddzaVbDYONiNCgFyXv8822lxTQviySN+RJgE9VKefVijU/zlPFqKDLajtsx1LtelVVHI4+zyeRsbQwfsmrdFaQ7jk3aLo3W6VPToDhUqn8gQPCBkKV3NpJWNiiXWsT0nyrJN+nVxrQ9QCHGcMJZFw87gML+KVK1c6WCjL2x/r6tcvpKSo36ZUH/+TIk+Ay8kBjA51e28JDlfb+9BWiDhGfopFJ/3TRfmCobgLxABbrBCZpoUtCMPXb8oC5pCnrq/ncSagQyVFZS3uj6W9G2LoHqmQ7WOshGOVtSfnMpvpGLet7mFOk3dD80t49dsPzW0Tm6ugUQtXnncOH7OjQtJ5ltiri/jFR/LuDm+o4hteB32vQ9TdU88njMIFAT6BmTwM5YhADwISU4gu8/ZXspHD0F7iUxg3rNiy4VCRplSXmyW2OIOnSF5YUEFoyMAoMw4EuEiclC5JBWiEXSjGdlfkiL1qGjKpJnmaQqdR3+UgqiPXIZJXAKnlAGrOkHCN9zai+jcy91jc8mYsPaEp6oOjgb8wNWRiTc7/Z35W/2X0AgvMPULulvNRH6EhWkMw53EWhkLh+FGkUzorGeVTjH9uIgKzIqr4XQXpoh+3DPfrPnuHvfiyXXseLvW6CN7H7IU345BK9R2iDg9LpAQB4i0+B2kgGpwvgUhCQHGISJ3OXJPqi681l13S4e6MFSvhqdZe4/5C88hYv73bX3rMZPcjGtFNGTBswu8mSUgnXipFRMMIVzLza2q+6Ux39fBcOrpIu/YGOUoiAOelXUy72JkWCYieFa9PnpTL0ikAuUb5P6S1H2Bwkyk7aE449vk323AcrtIt4FaOZ4EacbbNe1bUtkYR8+Rq+xvJGPyc9XZmE8cD9OA==';const _IH='e42ab5eba6d76f5d23d9adf544171044f87a707b9e68985112fb8547a88a7db4';let _src;

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
