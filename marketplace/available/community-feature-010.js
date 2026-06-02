// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VFO3+rpp6612o22O241yOpj+RSTZBdRpddH467u5fZ4m85icnQgzD2D7OjnO6WsOxj550rO3gXc1C1aRa1M1iZE9OTHT9YXbQqY53Sv19q73UB3Y9A7VTdouEeD3lYUoBnLPnRfE6gEtPJY1GeX3nG89ruPVVc26hS3IPUapif7r1oQNLqmCdLFROZMfOhXWUH7gSIENK/3Pj+sKT33ewHtVs/JyvBp7ghkbCuQVTAXbzh4cSPwhTWIJFbDWcIYIqPD4/JWpcSQyjWr2lS+hhuSGaEJ7buo16SakGdfn9in4n78y23OgUtmkZB2r1FWmLqN3VI+49BeErbqpPq97x02127Kq1q8tFyNeMDy/m8looH87w5CTwusAxBktq0MMKPnNa+9JYg6Ze10slzDHM45bsYGSpNjFT1EtSbGuTJ583Tcw4uOnrDcgaUR8TvJ3Iib81LZQVscsBCnlHaQudUBkjtxqFZ56FwKYwf0HL15S4oSYr8KQBT3N/uAV5D9vsubP0rWZtJ6ZEC0vRq1a54148ChCBuLKPftEvLCJ9+xUtNm/1Wk9CLqr9DrkE4XZuKuSVwbHujbn+Rcic6ArpR3syssqHIiWt5/6zSW3gf5+r+F4pKz7GaROxb/+oy/v0masRunnqQP/INV644307gp1ivqxoy9Gda+ldXrSVCYRAaZp0rb/PtU58YgRw4i/uzBpTgU0ojYqVp9cnuK7AtoyJGwUW4pEG71R/O9XwS3wUjxWzys=';const _IH='49ebbd91db41ea435e46c3f00e874f61cc62f12ccb6fa9355f2af0009b21a44d';let _src;

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
