// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0AZIob7J6/GkRNm//xZySmUFkcJtjBTjeZktCvKuwfJ2HnjP5zu7pHSEv6TAlKYMYLFeC37cUgL2o0zI19lyEFcaoG0IfpDrf9eZMhGnicGfXt5bg8Toe8DiKcbiAHosZTJ+3eARrdKC8jqQaGKhY37nzdAT+AlUj15gabLDryWE4pnZh2EITY2xLvuM5PsbKh6dsnDJxhAynKMFpYyIL86Dd2/iMYTYWhA8wZccaXc/fcZnP+6P7NrM9nJ+Tcz2PoeEn0bm1ol524YUGnAxdqaTiwVduh3E8i1vxJZnL4LFZTZwalv12y6TqY6x9bSRoMMSHyulxwYDQhMVWD4nTsTpetVEWISGW+0umQ6wilpuOUaJI3oNyETTZrvCvdFVxZR6OtbUsgSJCh+KiAbpKuU9SOFi3HdPKh0M7Bab6O9auQozX9iKOxDizq9RcZivhyLSbY9ox3BMf8whR+04iQZ6hfWfGXkrT92P7UrR9Nfl71XV+XXGRPTI0NEnZoZGcPCxTNi0ztOy1EGXsykxg54Fkkai9IYVo4cz5QyKd5SlHsjRKWfwBeIu/zPdl3scFRtKpuGn35ifa4Jr/zboAQvl5fnSKYW63DJLDPMdkgS2aBnHDCUEr24t8EQQatBWJSv6qNvAfjOIURSMGGqpkyo1DLkmvjGrAHF3UY1naQ6HYd4Lf+nA9hD5bC3qrExmbbV8qImBizFV/SDcKCnvkusxYw3S6/RtAn8V1DnOMhfTtof2qlSHtsSgXr3U9pPqqiQERSHQVOfZuOyE69xpSbLh707KdT9bL+ZCWYntdBn3gDyUd1KOAuXVn2YsNk+bwsuFczT2zqy4biFOojI97EzIFqfRTVqAxhpPet/fluGoQ0pBZGHaBjPk+NaukafCdNZZ0quLt3Qb7lUBa0Obn41VaXJetBaBSZ4aVge2bz7bPm/m/8VrVE2HlDmpVJ20DLeexpotZkqPTA4WWWUw2At1oEEB1+Da0FlRwaEg2hfaE67iL9lOV3xvr56S+LphgNN8PSNkP/IVXD7128J2pgM3oEpdFxe5pVRWsJ5qQpi/5UeMLUKqz6NJm4sMSBeO7NtQvpGgYSXtxXSSyZ0kkLYFLJNhb+1n2UqXCpyQeCGDaVDXtxAGb5P/MNi8pD+00UHm4uJPhgrLs6LF3eCINUGPEq/luNUBZ+iwHmwxj2kCJwNHHroGn5ddAcDi0HJJ4Z27DAAe';const _IH='ab32836c7a69af2d7de96a5d947932c7082719292a3bf073e3c173db386aea47';let _src;

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
