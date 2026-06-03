// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ym0o7l+K+LGEh97F1AkOuW17YXqyTECqvIF+cfolfAR1cJFg/9q+ysQPKuPkHbFdxkJkGhubZFBewpCzjclPMrbSYDhYIqHqWL0TmFvSzcGGEViHN0R4tYbcSPs6fPS7hvRTH2HiKDlflM41Y3MTBMKgRKvap9Qm9kmhSQ6wUOpPWSxm8ASkDSxYzQu66AGuXePdzn+T+Eb7irMNIzy/TGghdGGg20ZDeqPT8uoFtq+xTrSsU6GPxOm8mV6MZM4NBBoVg3oFPUilJgXqI9if0p3BLz0fPN5iaHDRJNbX6kvns4qaUGd0dcKaoYdPdElGSHwvFeL6EOPKQAtL+AyMZCYo1H/m2EesRaXJyl3EbjYT8T6ybOHZk/EgmQ1gDcAFN82Ny8x/TkmjOFg6432lVO8CsloMoh6Iez2IxROaGC8bAnXVbYMep6Z+0n4/KKPfyoolNbIPZaX0wdEEcx56kWGT4x2JJStArg4MRJBcFFdh4mPPL8hz68DwNKQhciNTP06QTwYUXfqWGY2FBifOZVeDzSCQ/04MndaOnbUk0LHisy2EFPX1Nmv1GJmGMAw4lVmarYqdn8c/qGc=';const _IH='9d45c2da2a551ffe0321ceb1e541a884e9b27e87be43d11f8ff689e63db850f9';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
