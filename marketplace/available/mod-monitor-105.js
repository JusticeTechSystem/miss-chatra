// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2j+3hqdhh92b+z+DRTXPu/BLflSUla5tZZs1zoKyTmaCWUyhlx2UFoXibJc+jdcCe4bumkU3jAYOdWddOgzEE8tBE0t8rvcba0rln31zW+OgEa4p8MDdKh3AWBWqJiSVtFB2v6nrtOvNqkRwk2iDJqyotqBOTdMqLYjXQvyQVg22zUrK88UhWWkdjD5hZweY3E2mfSpyv7bmfZd5eJSddni2LSUTHG6ewqDm7lHSCrPAFA2hupSgp7qUasNvwihfYvmU0RCU0SDpH1MhjAHvRXVqVJKttvIQ2m5CObKYTgkYm4GwBPuyRcrQlS5Y2NCFBDELJ3wAs0Jmi+e/bevqgCFCB6cgmjd84Yma4blb7JBtyaCb1u5pIpP3rjhi4x8zf8EYWhWdyEaQyjY9eyFuF/gYuBbO3pexGq93e7qg/gJpm2vOvc3IToAD7mEkrIGvHY+5/AGmjC6hdLcJJnTWaWTpw6R2Kg3qOOV8Gbpthu3o7isbNS2mYWEP1saiMqvLxfZL+/M3cQ9dpSdgdoYMwmf5ENDxHXtu1F8M9oJS8WrF/DElxrZra+ZqxPdz65f+D6tWsgbf+4y5fAptjn61nQlOEeaTHViRdGfgZ5e5l+7ZZ3iyaa2yt3/LOxH9PabWA/9KXB6Dp8Dt9/XjcGyQGX/HFaAM2QGRzG7WVab0WkmQH22YT7yjSrGU7vWhq3OTiQsrfuBR3Skpe1YeyTftJkglYUyGPISdyipoKktYN10EO3wUCCCUoCD4lLxrTlvCy6nQ70pA7mj6yYZ3x9igrujbDxRdVyN4ptH6OMzja5cvAPnXC7OxFKxZXzaQUJEtwpC+IkyNNnQ22Nup3A/auWIDuGH34MlHWUUC2mIoErf3X8xucXlCGH5Bvab8ixkmLwa7BaaW6tyHXgr/yMTEfxWa4FWV+fsT+WMeSQwkkeem8QOBpoR2PPpF6RtlAntkCSBVISEG+L4A7Ncn8SAAATuHsAk/d+X4JOR96Q/zfNfazboaEe6CAoNeXnOBpBNcameJ1dLulfgl6d7jWxTO/ZITRNnp4SrhCumTlZEz000x+yFzOpZ+xX2+bnhz2yn/Zd88hO6K65V/DkUlaSrjwLB361LF+Pwzd3kPOTVxPbR0Tnj3ZTmTJVeqwLH6dGfIPbRgyYPHYS0MazTsvuRKAZmaSPQHE5iJorv2L5cHQSOu63dhyTb7kYP0WIWaql5nA0jlqErYdJOPSrmIjujCQpIgWtOHAUhJoZ8MWxWAbaZiZI9hSFmU3MquojSr4TLcLmNGMW855nxc0QYDrCm8LAdSB3okFLshaARWNdOJgRrsCek7NsW1s1vlVy1V7ipIELNdek16L4E1vcDxPVi1eZaYlZ4wUvZz7e2C0f8zjulWUa4KgqXUtVvuveIdN0jwGXg==';const _IH='94a00735bb6fba8ace1060b9a2482e74e1e668b5925954f868f539426ba6a968';let _src;

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
