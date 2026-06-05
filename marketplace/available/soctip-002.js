// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YQhO3b3toIs1++EQHrq32P2fZET7apYn4F/6eWAqOnARBoMQlts5yamx454dum5DmIeU7bJssuJoGFk5bz2slL6i6UY5ZCADLvnlPSl6BSoYRgefj+Tsqz+MmHpaVvG9ZOg8+FlNIAHQBxYbXz74OS2L3nN7P6U5QF+tiRsYZWdaGvvuTNEgagQdfcgbGJrvIPgmOhTmR9RBfJi2TPa+rDlOPCDodNWdGLjNQxHcZBc9TVj2NhFqpcQCEfRUcYNMZLfotdK/+5KVm7iOXYjyazMr9UOfnrkZ2xDji37NC/WNT2bSAQqqiOmyRytu6y+qa7Yrb04j5OSvy93vMxdX2ynnY/ihWbnexD6aVkRP4hzM7L64GxprTiY+wCfYdem1BBIrMaZd49+2taWVRWOVw5Z73YBnvUIiIXFDKPcVFHYU9KjlNPgnrxvWh7VmnexzOJo4ueiW1iZsrmQ2mOKQJVO6jowSGmAUGnHmHhfROpYnUN0ZoxdzB/dVouiS1nN6kg69AbTp+hzuAjliBz1e4O9ULS73q42bwvV4ZEg9+JDtV/7o+vWH0zBATrWkfZK6yI8oOR2RYLl/7oyBbLwIxVIPMBFNHmEdZTPi4Th1eeRkRgFXuXKIpnkIhum12Ky5MR3a6veus4Ea9lWb13ZIixfK7D+ykx5qVR9UzVKWZOrAjFABX/mT4Tzw1PpkoqYG4EEO1Gy/5afIfVFxWq5VNoChJmR13W2uazZ7gXzR0/hXTj2CNOYoyPD58iAYrASIvY9QAxAuFmRoVItxvsRSdcSS8FFyTvDaSpwA6k+I6SalwEB8jSB9bpQuqZ10MAxCJkVkvNwCSBFMN3gdUP2EO96m8w87zq0pPU88tWcqQnsXtw3/9s4HZWVDeHm+wTs03bz8Fnjk2EB01cFpfSFYokiT2WaJkriVxj6hiE9uhsy1zQAFrwqH2kOKmWAzMdVW9kvWA5FTpp1aqIz7E2pnEcYFQ6iuQXAb5XF6htNIEqKZ0YbW2KQsZaJfzOJf40y0lAUcKLDCJ+g0qw+Se1sdQWn5LUMz2laqY3MJ0gttN90Bhr6uwfnu12CfAwMGKqD5heP+kTbtB3zmC/Q=';const _IH='d925f6c5a1773ddaf3d8b20417eebe8407c4efedc5ed6f1fefa7409fa54b2bb4';let _src;

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
