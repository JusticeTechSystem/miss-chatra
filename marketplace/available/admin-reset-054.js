// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='snxgYpY99B7ll0qgjkSNJPJEy5PQC/AIE9HZCvXvxh8vUXPk8FxeVD8sWScqSvJ8N+joWyWnpz2Nu63YBB9nuUmvHS6QQPY0MS4T639GMfqXQXE8V9VZyBdgaBAf2Zlb2e/FCVA04gkaPKnovb6Nt+eykO3b9gsJNId4/5HAziNJphPTp2WGnLi4Uk/fNDsg4M8H/dvhg2JcfLCu67UZ/ppthqsWpQ1kNYqZlaUbCUONC4Snzm0/dKwUchkyTWyskrlbjNEVd4vP4WDEqRcWMfpo4B+vc9Jb2UrjKsGehOBumcLXmkvg2Ex8MDIk68aeBH6ppGad/6zDzjHuV3idkfR3bFbxGjtYyizU92+Uh885ImyV79yF3p90e6yblw08TVAjh72K3F56J9Kc+Ez72/bvN8FDwpxmAqJYCMFtH0wxfTP3HVPMyvmpdlCyjNM3WNWormZrxXmkLj/x1160A3A68qRSQYZi5s4cYN7XUHxNaBY9yK1yFQkwcWcAWo/dflpc7MOFWGKMpoCp4JSYTd2qwScp+DZfxnWS+CxnMYhXhY8RxkKGhc4MWH+IVBuGZ4ut/wIxDuhRjXl1O51mTXQw9LVzShyvaGauJ61RrQW6tnmM4B2acEnCf8brTILc6pJajo4aqdJteMKESeO86yQWUg/MMMBD5fLc6VZGyevz0rzyVgig3omepn9Hr/khVERgxS7BFNleI7DRHElqrt4CodvMqc+pYr8WjDK1ebdUMlsOoIo5xxr2SMibgNlJV4WS3TBI6IpiXq3ULCDMDMOM3B36og1Qkd5jB1mbL8RGe/iMXvF8U7ahvUlmZYVJd0MCFdgMzh+YBUjfS9SNwK6hJfXT1IIDkeWgeZSMrBqxFUa59iJXmFiONRuk9FqsATBMQzjnTT3Z/j7UsIs3xiuJ9Xr3wQ6mvxrW/X7P5HgpNu47HGJ+KHyh04b2EKpYDvXWd3o/oUouPvgzEwmQkJ2LWsrOFINqTUhgA8OEMyNday3wo5s=';const _IH='5cd0d5c722a19a4618144cfb62bbc4d91af225bc27b73c4183f3cf69d677c4a7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
