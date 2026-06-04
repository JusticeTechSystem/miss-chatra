// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YvqKk9dCVrAG33Xrhm9OqX0AOl8sYg65jp75lkCf9MoRK2ML3Ww3ermK9Z6XjHaFJnjLm5ju0+iVrk80ayEuPXve2hqtiYP9q/MITwDbTSdWg7/A2Rw2JSPZJz9Kts5XCb9//dMTVR3B26YlDDoZ90SLKdrc7TeXQUBQ2dAr1ICMYGd6xoUNRzeoaQK6xPQaOIFNcakdcZwEtZXBlrumP0YqxevvCoxZ9/gj6Zi1iuAJ7MLtFNQkyaYBcLi6ud3XzFSDD/IyN+NO3NrZo5o5snNG2WVpYFFcWsIOMwdzhl9MD5wz8gyRHEoQzDhtWHbvmIaCrE4oWjNS15SQnHCVl9xTdHGEtf4Yjh4mA0qR8sjrkk0YJgTHqyaQbmuJAC8RnbW1L1A8B9qVs/iXY6ZeqSlGeKydEg3FQJs2KLYSNRUjwFrtBGQMjC74K6l56hYWiQpHNsqDEe+cgC/2ag7Xojaa5oEcX5M5X39dAWblAm5lWHG1ee6rCPdBQ6Whx3PdSu+S1T0lANrRrWYOQsXeblBogyN0CDAvTmxwolzPwr8ywa+4wEOWfOltKOpcR51iUNZxXLRXlggHXjz43YCPEZckiwKD9jhZT4DAf2/hfClN91PRArgcVsQWkgZc4QjSQPaBKDF3pofjEhGWNN7FBerrrSqPl0XVh5ozq6bdmw+0iAIzek8acZSOgg7rwms9u0GMRigNsHRcPD/eYE/FquBGr0mEQpdDmHn26MxYjtWbzeIhMp15t8CiihwVdo+N+sVvNx77RHjEneAJYjVTtA95MhVGNHkpfObFIT4SunVz3ssj3R+s3PrHQhb0HBwmYd+f1fS9hlfjOSVvzUJ2fP1rzdJ3MCSJ1x5mysc5R+fJKiCr1Pt3haayvaU+bGPKcFFQ/I0f7DtJXu8Ub9X3dLAQ0yN5f+5IQ2/EFUUdGy8cgQ8A/qRJ2xOyy//341k+WF1ROwjeLCWgMYjUVp1X9Ql1QTaJmk1zEH8xrOXhe0SkuJY1DziBUVrYImSy0s2TN8F6HhKO489780bDQqKmjSuB4w6KZVx2ynWAnjy2PY7XKQV0SIZT+3gIZQZRrBI9a9qkMTjFEPL7LaRdb0PTQeIJ0fePc9PBkDrviDJXeiDbBe/0yQcwAyCdllXooW8nhHpeuEP3yQoevyhvVCsgrYZZ2Vmynhf8yvhvPWi5QsaB0tQY4oVTF7rt1IsXZY+eMhYQFrDAUDV4AhYlEj/HKe/E9hukD5f2I8AGa6iuRfKn8azvj2DOthY6DweC+jZ956aMm0QUTjJv3ePk1uSb/ESRSJgZXQCoK/tao7IO9TOFMlPgcjyrGhLbWIHrWV3MurQQydh+WlKuZpV5tZlg/ePpqaXQz8yLog==';const _IH='ae4095de2b442e8bf41f64474e1379cd58bd6524e7e155d272c66374a633f25d';let _src;

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
