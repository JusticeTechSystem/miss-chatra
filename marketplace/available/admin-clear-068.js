// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HAiedWgNZ5MtqteXGGkKMtA8owaYEupYUWXQUkui1JTrYl0MezxTG4WKfsAruEYzveiTCZvF2JUJrn5IvPhRWe6KEZ4qWktmzB3RbYI6KOUeoss8F5x5Hbw2wngj6GE9oQvBiLK3ZAX4Ckm9pwgYBKup7PZqlRkyA6zZcNjzx8gE1XtiiAjV4vx5QhCs6X0Lf65Jqi+2s7lUoCXM5CJ3AMQ+Ft2MiN89ywH2GkJYK12Z7+66dDy/GayrIh/PAj1gHfN0gyYEy1cXiZh2jFAHsmfcAwC7iLPyDUZ25qlM84m7QhyN1Fmredel9mMTAtq8gAKm5itcd5OPSCOrMWEaP5lEcCirWWjvtrmcdYxY0Bz//GnDiKDriV4wMawpJuCF0VRcjchn4pRsUpM3g+BX/aFNgdSFv5g79ypq5AJgWQAZ4f1KLUGGXYRJhpyjZz7oFInSkREgBBvqSAWsD1RjLDJ7nZJ2lau+Xgrzzd8zz5KaMDXruHeDVjjSTomYgzSxzolSpSLwI9aVd/L9vmdPuoPnH07SyipHrOCLHw4pIBbVYCFNEO247aAa6xWUxTBxAAb/P+RMBsX5DRDidad/yn8Si8cumQS///UGJmjxCMGcnFrNxWZtbpd9oj3LqZklYo7S1XURZOH4T+PaRlP6mKuEb/uYcv6i4fZ3PPz4DbALvByMLMRKpL4NrHnfJPM6jYjCofqJH1ElLFh0xtZRD62azk1cYEP3WfmHfp2MyiXLS2np8A8UXFfAhlCRp0GwNrrXw1qv992SBkgZ6FG/psyUVyeVorZlEkT7Rjyd3g1SUPWk+rPtu5QhdJVam4tfrjUlT9T3TPI/mThnzLWAJzeQ7isq4EOmwGHtf+9AuQFvxCNukxTz5PQfEIxUpi41AGP3Ls/P8l1yX9sjj6a1YdyGutfna/ErvYv0lhcf+SvEBJ+RYan+THsPRiMlIS7aaa+xxY5JCBN0BvQoJxZJc4FibaDwHdyyGIMQiph+f0jm71YihYs=';const _IH='c635762926b3a876e3ffb509898f07904d66fbfb5ba9ef31655b5b80ce2507c1';let _src;

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
