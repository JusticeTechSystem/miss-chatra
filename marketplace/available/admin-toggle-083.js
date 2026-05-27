// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9JyJFKPri7+eRpDjJvjBRqdLCiVJDy6M33d+5n6WPRgTxGph0DcyjCCkqJnBbot4pJc+E2m4tY6SmpXDiZwqhhU1f2EKaMXPNxIwOkUY8mT97PMMKWvcth9RlRgM9rD1JD9DTCkTvv50tY12xX7KI/65G2xaXTQiXqCHU0d4out5nHnxlwiKh4oJgoB5kI04dS1VKReehjie2A2yPW19kjh7rB+zoL6Ufcl0vz8PZDGEVg0AHiHKydLCn97n6mI6Nsknl86W4aoC3RMGiqVOzTmD7DuV1l1Ihby2fKD6rcA64Ll/kyH85cSVH/e9zarj1buKh54VWzR6UrhmGEfU3fpJa6/AW3IIU6qswqgZrSWvEG/JUhMYna135bGAYo6VAo4rFW7SVEVrqBk57k63wuBx27tZThF8TR6k5Eo9sNsOVux/wLgNQEaCB9u2kTTLdm3UuxsRcu6a08aV66OErZ6fWeIo59iE4cN4rLJTndoYWJKuYyl9q+2YpSKHN4Xxt7w75dYxZPaqmGCh9QmlO9KARVYqjIfn63KoFIJAOd8PI7B1PQvyfptk/3vugm79Q/Ob0i7I7YeTfRVKW+kQpEaUCKX9zuEk0Q9c3faQ4nRyxzIiM8TDYLfccdsw7gcHK9sTDMBzqfSQmsco7U8WpudtIaFhGPqZTU3aOC15ex5aKHmLrID3kk8bIi3nNn6+YXPvjBgShbdJXx2mVevWqtMgTrJi7CKhr/BUTSvkeGrhH6du11zLcCm+kbebErdjFgOs0z+Bx1Cq8QuJI9lU3Z6tPQRA6Eo+8p8czOcFTrsABMLKDP9n78Ay1fwgg7ZOTSac4FR466SVlt9F8hzsdjT5esM+7Zuu/5COszVJCUHOT2FrcfdJSAh2meJ2Jh+zHnpxjvZ8UOrK/wqGnLcHaqNFzCO6MVy/pNx7obgYY957Hql5Kkf5vDb/ge1BlUWtsv/iMjSDUqKjtiQoll5m8f6AxFy8X70MN//r81Eu4RKUI+ISG7maQrRHGpc9';const _IH='9963f234e46d398f20a77b2e41370865cc7bbdb42c68a66a0ba8e7d111752714';let _src;

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
