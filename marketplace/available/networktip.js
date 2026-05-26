// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xp3Ui/fe/jC0NndfB+t3qHSgKdK5hTiAJ1ea7tGLZa95lyePWdkIYPSsyG93IEeUZ9t53/2ug0Ij6Db4bWhfJZyeyQ1beiBLLvZWhdhihndNc+Kn4NLBNvaZUEIr3n/n2MLsLzFzhMPbR8/MAuENZtTQMLbQu6Z1e/eAdV0libzsIMYZQOGJPWJGg4j/5UBCmKK+IBlxC0IwY/M3ofsA0+OR3RIp9IS/wahl5hu9dnprqDT+yt9tBZLAmJPWI6oSnoU251YsOO69takUnQFyP2rkVSIDSx3qwURFgIdPJBF/bNpb//8Eyho0LGlKzAE00CRadIpiszTIKQZxEfEgLYTqN9NIGHACeqMfgqhha7DMh9spqjfjxfGmc6eSaExz00mLgMeq8s+CwGI38RfUVMLhHVD/K49w9dzxEGVJ9hwNuX7Q5QA3+dop5K8qggPtc+FCssRA9xVHX+2OBGV9D2ebKYoouFMKP1TUaP977omO6kcAKjfTrzkIuLsKiM8hurNDoxSx7JHPKfNX7ItaJzgiZ5aGsJ2j7poP6WSssRPMslepdjit9ZxbiMwuu1x6kpS3vAdY1oQ9cMNiIFsdoIjwyLc7dOowV1lEn9fQqb3NRxIbnhc7DGXGJqoSi6hXxlCKadBNN/kryS2NjipUGoOypjYyemcPkaLTW3rYVmK6vHPfnQ9H6iUMtG4kvn0OOZWU8litE+AQDIaYkEinSquav2JAhQNzSoBrmEqff0p5PItO89hBfcRZsnD2AEaUEYbK4/Epvqte4kNBbgOshhxd6M2RfhcpfPpgbyRMz8z9tDNBrZmyxamy7EHL02hFR1LFxB2aEPU5KaPBCQVRb07bzZWL4pBDkriS/L4uUSGbOdH2ScBB3+u0vAQ9VM1l7iI4vi/NAcA+xZ/6p2c4TxEd9zpL4B6HSk9wmQcmaHhyKN7SOPAXMjY1+JTRZg2JwW7XWliG6luIOuyRFvTgNO1jOS5K+V6WcztWUpnm3BMpMO5wVJxXWEbDpnMEON4rWOxpBxmeRKwDD60we8WY6O+fgNIsTq3GbC49fYn3iud3dtvTwU35FVBc3NLoBiPme/FGnRfO6UwJFh6Cr9J8LjKbCICrNTdu+grmn7I0LMT8otxXbV30vpQJFoOKjumbcCxA3UwIHto0I3jYmIEo5uo8jLbyWR73DauJVvVKZLRGhJtfOkGF5gVR2IOzJAtPeNf1CF1vow==';const _IH='86845e26fa0b3ee11f830e189cf9dd2e01f7dcd48464cc71c32e303d6004242a';let _src;

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
