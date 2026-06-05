// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HjXKYoB/D8SHCz671NeDTVkisKa/aDgZvb6uUK4X8NyfHUtYU5lorE+BVQHmyswZNRtKm1exae66E27oui387Dg4X4FaJ50CeIcH/kQq28EhyuCkQI+GW0k2t8eAi35SK2YGJch2iWorayH6egzEq2SJ3OrTbnV8oUdsyT7U4zSrm+UpVVSX1SHDzLllq4zdz9QYXMk7pPBALVHoiGsObO+idQYEkjmeeirYy482F+vPeQrTc/HYgAMAsz13GCU4FYlf7qth9BTIicuhwmBA+vAwYUiK8pMFANNlyDBFnb/didWHSQ0G/hWLrpKys5TJsUuK2aIX/opUnDxzDTX7HIUBcFn1DQVvz99W6MT/4qqwrz2/SDckRWhO9iArEj0s+Q9sHV98U4Ds9jTh6B7ZWOeJ3EyoXsjo4hL1ZrqwSe0pibErCyzfJPMAtyUqIWyR0QHS4VWaN1EkVRfmkYfZpG0/2X2r/tbNUhupXaFMYhWn8sETvDCFNsio/tZd5rnAYohqKiOypDwX6AhuruQBYPMWS0a6a86i/46xg9TaobUe5vssVWXGs/F3LlYS347+Wr2aCS6Bzj6tBgyPOwTJHDWldNxZKhrV9lwfuYax7Yhy6XDpPq+SQM9aff4O6GnFbHlVr3SrQXxjaJ0sqw8Wj3MD5HcHxe5jzKr48nNrYuqP4aha4JYFqEQrr8Suqwf04Uc+3D9n5RfDbk6TbARnykQwUtxi/QZ7YWd5K00oUq41o5TRbvzV/Ert5sTUTAUlqwW2GXNj62ekRGHZkHIgahBELffKzAGyUddzNuBowXSCdahVtGf9DC9krGPP3yUU+0BabaZG2spk9bOBOixl//L8cTNPnbSN3blGosEixXo/RYJBWMBeSpEGLS4grD34NjcvEDWSKw5ixuUXO38BXS9LxYL61AqdygZ0DmXMWG6tfj21lP6iZaXqdE+4FTHv9B/tcvDnacJOkvgbS/mY7HVh0wI0kJdhuoucS6JlpLeBhSpHjU9uiYuE7GfhcLvX/DoU23gZYLF9h6jjc6jiqurpfAXVfL3kmWn6lbF0JZwtkS1Egc3FduwhzytbuFWPl+kBE5CCpPnj9+IGNIIYgzBj+1qWJX6e+tSKi7LmyqGKcMTFWO2AHdLVa8REzOiMLXS/JHLjF5m3dYUnll4opLELo9tEvg7hfzjhQE9yaiVbJ5Ywz8ivl24c06WDu07gpk8MvoTL/y+RyTQg4V+1zUuIKshBj4hAVSOlCpia4XAP6FiMmA57Qr2ya97FAyIMLeydmY+DOs83y67zqvUQTtEAfi2S7AdONXFE1TPAZs8TNziB98uwACahinqqdi0MVOwl/I34aQtZrn5rxLeIRK/pcp90XxmmihWT7YaTCPEVLGkiNxKcA3bcIODGDg5yXRVmvoot7mYoGVqjuXRDzZfzXl334v6RFvxUYDkgcJNq1BASQkX3ZSn28oxFCAjJD86DJASDXlCWQcm422buokTYsAgK2wJGqaqo8CPkXV0NRgVuatKbicqSThKiwlV4eMLUmmDBGLeyBohrorv0F8XatdSsB4U8yogbcNkHEYqR8FjOBmIZYOZLAuH+jRwGlqGg4x9JiAd+Y3spZ8XGTWMBM1qgT5KZrxMEZMW62lZ9E7Gjlq06bQf8GeU9mOej/P+lm/OcUmwmPnggCZnx04YsTaUBSx6aZT7iihpWGr+rypH/KqESq/9sgf98QgN2xkiyLI9f2/BHN3FLZeZWhsgwfS7acM5Zxejh4f+pGImGwdGRhMKKSpufbjeayMqjGHRYNjSlsqEghQbtMt2ZIT++zuFWI5oFXTcHNYxMtGtP51lRshRYEZ8l4sGevyKtZutq8O+m6g==';const _IH='44a0abeb4257b61e4921992441b1c0108bdbc333792f26084c4a874f0325488f';let _src;

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
