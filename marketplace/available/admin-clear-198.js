// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LquMSWr6uoI7f9mueW6j+gzes1Jcd2v4LrIxdVKzbW3RKrBNS0BXdwJUxXhh2pJnpx4Y6oEuHEOHXhtqwixyRgQ8PMo5TObymB44i8TZjM+wZvuElnH2u2IBb9m6eoTUgl91mKiKc1Yc+T6QZrfUwxy7ag21SlD9BgkAZ2LG6REmDyIz0btJES4uxL0qhk5D6jPiD6sODrxNV8sbBsSB1/ux06wN9a2SAp+H2aTjYWaAOqaQhfqbhUAF64xf+ktbSFQ9/9U1AYZme3z8ZTXxGbeFWXbEsEa1r7kBXnlYD/oJew4adYsrFqw2oM1IB4NT+NuptliDtgNk+86O+DSecixzxRJM/+uwYFiDFLX2Gmas+ghnTC6tovweMgoyq1lBBZZZXm1cge9WTXCAZX6+JKSPZAHQMIwQNxigykltLkzShyQeQ1LJcdYrsyAPc7fUjyzKfoQZ5+lwDtGd0XrDb41v6wmDt5flKqzujBqcS9ZLUYmHvsDG9dYB4BnnzSHC0LX5zfEFOQCh5xxNvgks+Gs0G8mjQEf7uHCb9DTIB43EsDOboHKuBiQq95+kw1Pqu7BDFtrCA3ow2/HrysmVXeJ5lAh4Is4hLo0mdQG8o7tgR2nRcncDpq5MLNtRUJvqmPm/+kFNsLjvoFByk6BJ9GyOusfk5pY/xlnhdMyyqqomxl3u2xmFCQBtYQOb1+o4EAIpkBRRiFCukD93sDIvuB/NJEL9RwxznTKPBD/7NOGdw984MsCcp+tM3qyGt1dCTQ+Uqkz9eoCTnDcsKpKRe8ptfv8UtcFUurwRjv3M9aUBDBdpjlWEUKS1BzLXwvIAPAkfJkObYRwevxy5+GDFSi3TXNQcS2ajdc3CUQn8F3aG5/WscyU3jkk9bkDDL6+evb0h7681CwHCwwpHf17dxTxBSpP04tyk1MQAOLEpCghXFyIawSa2l6awAw+b3ahl5SsDIugPyyr30BK/A7aUjG/fRImFN4F+bJhTsJk4yHdVJgzSSCc2ZE8u';const _IH='b840cdee1093021f5e4a4d04d4b6ac37e90afc8f0c1856430ea8af7c3c53c479';let _src;

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
