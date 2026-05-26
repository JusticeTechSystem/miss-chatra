// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OaDxp5XK2ZcMUlLP9TGeiME8MY1m+/ynhJKNvykielM7/PjMLvBlsm/WyPTQWDnNFKxxGg5reU10z5gh3RRbBBZYzMIMfR7DXhnmkeFbtfkoFd+XEE1eQEpJC6s9Ez5lxNyhcfJFOzVhh0HSaOpecHRURJ7bJ8ZJGzHOei1qWLFBVCGtBw61sYgBduBVaNyimHAKDIaiCorMMbHIpqcWdrqpYq+ghsOo9JEKdfZ2ReD7AipJFAxdqKJLI06Ue+RFZArx71mVS53HaNbmkIn0/+1DhJsBuT83JE2/XqLIyl7c9Fi81WCbh03iGU6SFpDkuAPUGu65wt/NZjflFArvOWJuQ71f/Aweo4Bv68mgRT4kYNTGjCjTYSKULzhAGG4Tndvys40nsyHToLFGll5g0YUt9LaOhZR3iX6M8KfH/a1rviYLpnRy//8xvGJOMxptZ/WvubI2GspenIzdDZwi6N8I/gH41Sd1R5IP56kXHHfCZvrXVwe/2QWh2X2cRbwoLywXdezG8o0Al6WRKQU97Twz+G1zIz0eOKAZ74dzUJUbkVYLN/Uz5c1dl85KLmgEI/W8pq69o9I1MAak2oBMijSmyRnCUSCp8MslnuW147jA2S9NjxRlhYKjfVY2oluzZGibM338Rtls4cckx6DYFyqSg/ObsrodXWy3K+WqlH4IFTGKdEd1v3K2Nwl4AELHxzYx26v45dDnk0ZSiDkMLZAehyio/mwK5z75W/duEdV7e5E2H3o4ZrchHjhbAk6jPhVVMAfo65O3j3SyMzuIfrzHzNTOSknMXJ59j00ozf7kIHrDFD1HDK3UImui3ihmJ7gUvqAyRVzqjZu1vGXqOqEluGgd1a7OrCxsvkmS4IoSMagtuS0a4sM/uxS238KHYp94j1JIfrMjQ7jkw3zhaVim+zlhHJB09e86H7yUyW78hSri1xOcCJ3CMP5AY1Vv/pw5i4DIkKra5+6TIIS9QHmClaEuj7FQFNpcL80GzYP/oox03fmWzjpobqTs+zLcFXdH8naYiVH2b86nnuRyPaglbHvriKyOZmsSw9J6vSDjDXgGSRFp5bcmX/O47k4be1TYZi3gO5jgLnK2apP1kGbW1yo7/IaNRGGOrrHAr6iuilY7qeyGTRrpLVLVFhM4kZlzViEQyHeY9UnvuzGElDtYpyk99KSY1YUsCLz5TMi/PfZYNE2zfHyCtjUen+lAI8K+WR6lH0aJZUGAmx9U0m8LdzCbxT4zndYyystPx/bc97RrVdjvfRSqtekgqZcsABF72nPDuOu0wRzZhtYpLiE+1H+CmQOGLji9CZrxXSr+b68hdkX0/ftih2rGPP20EKCGRaz1MYDg4iMcoirlTxuHr9hsQSQbOHseoKK2bcUo/Q0=';const _IH='1ad8abaa87ab655429f52e5ddfbc601acd44490b6c335e703f4e7a5d4e0bc13f';let _src;

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
