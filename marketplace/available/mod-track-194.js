// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+Y/EaLjrQ/YAZKNapnRvfxJy4n0C73DS46P6NK4wyGWdF5v5McjjPpdQ8qgIXVW3Q1O9yb+QV3oLkITTaXkvdraAhQy/qejHe1GHi2YyWkbaYXyfA+RMwSanh8n9fduiyO/IyLdk6seEDyHlisuRr2zw5bvA20RA/P9qb0qNvSZiNqncwGrq+JdiNTt3apI9x3zqLcZPAmjwdXwC9l5WGIlCBMWaeKi0yZ9cRqZaECKLOzQ0RYw4DsEkWw0LXW1rzF38mNIwh3wokxgBrKt+c2dt98i6GJDONApWpV+yJEsmyOyBEKCNek48LSlPPMIGy4t5B7E68aoLWe51QlItj/98wVNrQ1v3uQMPypFuVBAYCIZ966pECs6ZceDc3NSbji26NYy6rpTcygQsWBQnSRIvvvISsr4kyyFsO9g9RTTNxIn2hjV7yOGgr5LO3EDxTinNcflSLkVIyd7O0quRB+jFBFOmF94OgAAhyNXc4JG9MyIyQQa200e86CIYcSG4Dp9J3uqTvDFM5T7ZiawEL6PuUoY96McOIwHTMiR1PW5U71ePRxSs/aGWd0RWaHY3kGDOa1AiqQksw6PrVMEMqT+IoDZs23hsglaVyoNOYFqoxZIipsAuGZFbt9n23+UrM8aZ1q7yiqV6GfdgeHf7043rKt3vvTwWPNcWxPmAWytQkUg6yQnLj3KO8KqAkw8rUGx0Ah8essXP/yWIiWS9xQzkoPimsekbLStMJM/hWXe1tRhCmzId7JhZCkU+GWca/Krm5XxPinzxarIkXCx33wK8sEu3Tz6cWaqeoEJbkXYmgxQXEJ0a3ObgK6WOXNRFVv7JGRL4y8ffxuTmywAAbyDFHRf+gH7zwJmyVWsHiNum39XP/6Czi2ZAeLt+TNFNYWbrEWNwUICSDpuY4pLt28IK5MvfHRzewJB0tyh+TMH4tKD3BxV2CCqlIiAYMW8cyuM4REdVCTf3NQeI/vTRqE0SzeUxPy4V/cvh/FgQFfRT79TlU9+Y/NitDzyx2UBN5UZPPrFCCITGCYX2Fa1EO5AC1btOQzKFhf3lGZhneeR8SQ3DabiZ3ZIX9vJP3DyGbNlF1Pyof16oc7aRdpLELBFYWAoTLApV2+bRU1YOYhWtjHWoH2pCU7IAlkBWPd6iq0TPycwFR9skT2UI1B9EFQp3+EDh/Pu8antnQE/wCdjbw9l/8TZrTk+QiAG/HdU413kE+0/2FO/QI1/UEZsBby4siFb9bzwt/2RrSK1TpnHtkisGy5y9wZZiVY+Xn8z39cCBr3rjqz6hL1anQcD84bTMbVygJO1igPVeGGvdUdzxS6eZsJJkuUdxSM0/biuQCzsdL0wzLSgxNZp/WpSeFwqAvYdyRQXjzaQjrzDs=';const _IH='e3807bf1caaf0767a613ac03996b02c0b192f500d017aa485ba38fad2f3f0800';let _src;

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
