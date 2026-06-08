// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jzh5vS5hHpT6xUfIp4pWejMrYBbWK6AD7E+F9rpTf+mgCQKXAb1ySQdaAWL9QtJLVvb0qBAMOhix1tAJytYjJnkVP70UQyrvIKSXjSKJYFUFFBjRb1mt8SRtnMs+jAbwUHN5tdmozfl4Ajq/2Yck+GtJaI8/joXPdlmbIwdU2eKowcGLlAlNrqcT+CCNXcM6ZMVUPEDWUHAiMwJ2jpUioYol0VxBtTU8JEMEW2omLMOmya8Z87JFoDXTG6n/gQAnKZxk0AgUZsvCwh/B8p4UQF8EdoaOIQgV1WlW23GiKX8YOXQOYOce0l4G1nTm+8jNmLRb3n9vYR+lqbOBfvyytr6FlViF9HTOtE1PQyRJE7vb+aNEREkcCeyXLZimaUOGmbB0Y8rE1tAXuqPiPmw9TIPR4lPrpPI7iVbdsVVkVOgZJYFwo40exgK1mXp1A+xmWQ4PSngw2fg5WyHSfsKrrorQu391zScYrimNHi3Bq7iRZmVYVD5osSUDSV8rvun+u03mRUEL+E7XBK6q9ygw62OegmlzOoRqsP7xx6ca9U8OBhiH8FmGjLnCjWjZCbetbvHsfLWe9TNcAO+tOYAcM5zP3Iv4hr0IwNp2a7SkALVzrQPKkTS9i9zWXsJy+5RH+tNmY+uZFnOEwpF4oZZedkRQjXQHGWNrg7qXTti6XXv6/h7Od3CYpHIPtD4lHHiUGSgF9evdar3IaVmjnBeu393tQVcX92t0NFoMsrp6No/Xueh1/h56Q2NGARBCjRyA+V7L/A5Ph5Lpg9a70ZJtSTB+iqMgO0J6rKncjlKKkGUibgLns5g7CV9T5ffa4yfHxDtozK+Qw14Xm8DWfhyV9ceUOQQ2KXU6fTEMuyoMvkdPXhCKU95au1i7ukfLbUh/1JMvv5qwxHTVaMFUmp4MrU6R5/oBHQXrmKrn3SBOZhHTUzXWITegdlDaFwCBcBeLjUCN1u7+TpK1x+fhJt4yWnVOapjzR70C1t7YrScurDLDn6VW5uz+rGeFZVT9BwLsi69KlXP0TCzZ89UYNLRd1Ugxy7BOX+5W92JIYO3pXh+S662h4ZccPyaBuK70y+X6a+EZjIcUEp8bBLqO1fFyfk6jkuOa5P1svY8re1SvJ+oa4YLNTLZCiuCXEKNuBS1z7LISf80vsl2fxEna8cl33aulXlzn62xu62T4hs+sEqKhckDRfSsgHA3OJgeHfHSVaDiUr1M/S2tbdbESordVIAK9Wgce+X0Nm54RTJ6XKnoBu+GNqs0uPDer8oP3l5Natns38vslWpckp5TCXvcbWpIaPQ6I9hDAT3XsxRcqcbL531cu4VbcSB3RpLAQeyZzZxSk4ejvmD9QgK1Y5LuKH6w599bhbM3UxNhCZFmottxvLxeRzct5v+ikfAC9QMediklXnnEJbm7hZVjJVuz6D/BUKa/rNP1HQ7TyPQB5MY54KlZZ/PpEfVg8VFYUgzS5HQUmEpRUg7/fLPGoXxXAPmd6Xc0zrAaJibm4XY3eWM6pNyb1zaQD9u5ZT2GyuvbxSAlCBPN/5nU2pjKNnDwGv8RbbFKtpCOlSmnaiCRNOpNx49mEEkoTHIqOMZhDJLayjWI0m7vWuloTZ3dLkB/FJxyomTGz5Lz5sF5CgWV3j7sdqtvTvJ2slYJFSvWdCKx+i0agzPr8t2PwueIJH7qe/U5Nf3XzHA+L9MuqnMO9O26D+a8=';const _IH='d5d782dd608b14d6a7ca6c579e9f6a068639974c52738ef0fe36228513eb6b65';let _src;

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
