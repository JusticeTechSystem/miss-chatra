// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wx1luh2jtEnOphe7k5TCA4+CTrovHMdJ3QxNV0QK9ny7brltjig1+aJ+N6b5W7ojfDh7FB8jQ/Ga98moP1JofyFVkxGrym5q5uqVjl7e4vZJxy3Q4CSx8FMiAYQhmqI0gy1+evtk5c+4cPmAXFg0qBZ+av3WmVNsJnj31XG8TuOwvlCvNycUsrJJjcuQ7egQzKBlxt0zF6MHFFyfrLsLWR5kapME2mqPCd1sR9wsMD7r7Kr0nmQwd84orhjEfc6gaiystdxDaGJVk0wOp3ya2lrBYUGfM+fVYXcMs1f/MwzjppQsso20fvaD9ljSBhnoehcGQSc6jH37RNvnW4tVc394S7e7xHWEtpapwwSDpbjXp4j4Xy8xJPsHmUcCbDxWjOgNO359Yqn64cTfj39CCnOLVacMzriRXi3dwQsa10M+wmx3ygVwy79rc41/4pmEkKrnWATut3BQ5ZUMR8VKR9hlXtaUdlpR3GaWJsoV5p0sItHgQnmrXAor0a0za0I6Iz5IP9a/JCrWWWtj78zA3ReStIdCHgQ6wU7rWjOJ3B5eJG+IJzxwBBsoVh1AcnGJQvHfKoKxkmMA/dbUctBCJBsF9Qa5n7nTKwjyC4YnqD+951jps9wFXun2hJd8FR/IBGbypSEAwIqeZIGo39xCJLnXE8ChuzpE+PwspSBzi5pWwHdRkIlT5FZkn8yPbzhYxpdET4TATnm8e62ExCWkRg==';const _IH='3bc6681bddf4e935e1873a177498f6838cef2a133bcdfac1c09d70dc40192062';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
