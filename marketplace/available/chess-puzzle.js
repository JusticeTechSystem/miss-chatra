// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WqwOLgADdkr/K3MgaFAjqsZwkgsunZmQEk3qKI5TR2AJawkfNuQSMwS8lEfcYzgHC/R8r1QKTpajSVkOfnTB5dEQf+UGgUi6ZBDqNenFtbF2HQ0ZJ0a8mt4L0yU4O+KNQYEnF1sKR8PyZ38qP5Kdj1JiexhRzPMkNLjhVvut8aEctrAizUlbZ3FxOasuJX7JgHRMjGEcb/FgtlD3RHyhsxRy5I+xImVfyzlfpZEIY0dknoxWk+kS1sutQBtDdrCku0E5R2BIRcNM73Mt8WGwSBi2R2iCPDQ1TnQAqFzdB5IZ6YSpbMTW5SV1eZDc2azCyzXN+CbnMMdKaCFZtH7QyfNehveVrZX4/39Dr/CaOrr7PQq9KBFP6p30pYYxkvVNK4K3HKU1xV81piDdBDoK4KNk3TMfKHBFaZzyDtQZjbzp+LVHcPOHviqMMEW6YDsrKxm9GK8+Ca7ANGxYkopnVxbBDDZ8R9HzW6Nsi31Fet55h/NsMPmnJYJTSi4JiEr3O3Al6xl5Wpw4v6p1RANTiD1MkB05IICEN3uJwURcXw9MBpjNDsYcGhmBXKGhvMv0gl13SaHbd3lgzL9tdKLiGj9LH0YjG5fECdH1unKhpcX+ymN7hCnLxZ1mM9/kv0SrdZlmezcLGDM6xpxWhxm/9IRQhVD7wP8HPJ2P3kMyThAGhEzWI+A0aif/CZhnoOZzGOQWMr0BHszsQjncNawT3uA5Bs1fcaz7jjj8dXNrJQXgk+N2h5irb78ab/gtuvv3qq1m5RP8fKwOw1aZaCryIegqwoc9zKR0M+lIHNebYPjC/D0qNsE3iV6Qj1l4fNZBiDHTpRJ/TmdtE1gyXd3F2LELyTLIP5h/f/lfTtwW2n5sl5EmH/2aVUxea9lDpEz2qbUz1vThhCZtoPHsQTdql6ij3qIlLY8znpqcoh6Hd6+alsKeHh+5zPB6xABlsyNQ8lGiu2SlgHqqwJXJt5/+Ks6bRoPONrGBtUvQUCrzRp190p6ablR9TRqZr883U+zcaZiEjG6TRkVoafKH+TtoZj/andG9CyBnIxK3mNLup8mxvdlqc43kpwNgwpnY4zUGY6DMNiWXlUb32YHKzBLpwZUvI7KNBuVNEDXm7RxTO1uUHd01Hp2ozIHh9oFUcQ+zTAF697FwKSyxzII22/q7hiignlEbtYjOnmZ+bQuTNOGWJSSHh0dG7+VX9tms7sC4crSdkDBoisITUACNG3QFk2l1zd4QHK/hyjESA2aIOSaBoBlSdIh74LA1vBFTbLipdv/bWbMSIRxdSSAiYQsPqnf7OgTMrlLDN1W9Z41J1hEsgR5bTsEOtXDP6XlzsdbNo/NOPlfXqp6qzEwmZb+ZrZmdhsOeQOQjgPK6ugsnAWg8+opOlDKrsSJpXDNvB1dV7SndHC3mLrQC/YX7dMYBf7/078B0/+OA0l6kzYS3T3TfG21wW+M9R6Ja4h3kg9AQyBXJ/juzn0jCKYqgdURwsHXuOdDvRFZ6iMT1mDhUKUCs/CntUy1CVvEg3vVdL4rtgHKQG4d1K/rqYaT7edfHndVr44AHc4ADaop4/Oibi8K7W1v78C+ZnR3960ElB1misOzA5TTSGL0fuUXGZbBYcZrexy28+yfnBXT9ZdqFBW1GiDFQ88EEU2PiuoK2U5zmY5pCnYp7GKjtJzXdSRZQ2hxyC/6ogsHqzna2Q/Nyw4h+uCJnixUdK3einSp1qUPMVZosb3wqu1QaIBs7Zgxa+SaNOO5GWE7qBbdWlJW98zBa+8ktUXo2Ww==';const _IH='aa2cdd03b85a4cef862f2511c682f784e06610515ea722200a8518285dce6c47';let _src;

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
