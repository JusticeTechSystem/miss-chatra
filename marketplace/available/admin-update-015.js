// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8GMz+uAo9sODrm8P/bA0PRr6f4Y3rRW8JYvAn6ds5S66cIT9b4QwBwDQ5+T1msf3xtAkPcd4h35SaW3wGtkir2EMyE9JPTzVDbYP1R21RaGjNcETpSsZKiNVqtRbb1Drt30NZZyKrjDCVMe8Eh8w9OMnJockWiJGgSPBGmTsX5U7j0FMNit/ZhKa2+iOJLB2RxOP03I9lRh6mBVJzc8bLPb5Sy84t/XnWpPJaU+oKwKjwo9RMi8gK1Cv+zi0Oydc02iuAQkXBqdI63AudqXSAokcZUconojnBB1uX067IxeO7XLy45MRzJ7+t1QiChqz3RiKQqPltlgeZsx/2/qXqRM16J54xLTxMO4GCxAb39Lz2pHGDq9Qx9bUuRk9icWTCoajC2GQbONUWGlhI8hKQoQ8RmaOrvNFbxVSGvYkIug36QvLgA8dOdSUrRtcN1X43xEzvJcVR33nagoO2FGZrezW2jnertFkOkdLNH2zN2bFWJFOeNzv8/2KNPMrOWSxPwj20J3pYjXVyOY5iNDycSHnpJ6HekO9gIUTc0KWz45IGuTEszxM4grFsuaYJbydcZeAtofwDfN5ZTVWgfQzxsyMD7FXAlD58g2V3C3EdJnWa3lcIaGpM9CUn7kK1g0REhkWO3wVPAqX1YUNrOB//uTS/Fw5QFJSqDjVKHjom9Zt0tkg4nuZFf6sXXjpfWBUJ09eAiunY/Z1cAr6V/IQC1ktDNfkTg+SechMi/sn3DUwL6X6xesXgUV6cLni2kMr4DL6WJeObhDxg2jzcvro57jtN7sS3jDON3x9BkGuNRDtWhcg9F6+ro3fAnEjN04E9syI4dQpEsNcz9xDNvQuRobSwC5r6PSXdTSaDRk9oAzuD4wZcOPxa4YVoe0oxGZwbXLAxr4uUGJ5aCANuj5PZZZlW8BUpN8Hof/tXKRDqjvKHq+uy2BjtjrK5wpVlRPIYqRj2EBZG3WzWjiYnd9EklKwmGCFj7vokkFAtmpcRuBrwvJVmAMCMudD/gmN';const _IH='fc0738a547b564cfbf86776e0e74917eea5bbae3c11e43629cd09eb474b003d6';let _src;

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
