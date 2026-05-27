// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gdyRRprUzCTK/XGOWsp0xQ2bik4zRd9N4s4vmGxDdTtKBw5yTJO9L1x/C8FNO0dZ2MJ5EVLm0+3iRHVEg7PkMA6vHxICtqfcldkD/2w2WuAaKDM8H0VUIlYo9jHrIeeSj5RKicwstatBwk2mQczT3HwTxfPPKTcrEjMvp5bUh6tC/jkvOjDnzo5Q7trXtjnIiJ1BKxKBF/ewl7Ifbcbvza7FDJvAwVg8dy/EH7GwMcBuyCRKwkwophGVYhhZ9HJ1qVgulOyBB1DoYNHAMlxoM5TeVPJYjpvAtnXfs71rV3e4oKJFMiKRZIaW30YjyN4GDWJK3ePZexn+1PO9NU7iDsWW/TnilhlP0xYBQDmpPoRzBKlpCdbIl9Ti3fhb7hudFmdlN751AZiasCW2hNs2gxY5I5oM5NNdx9dCC/90MAr+QsBP48xnyLH1LiME3bP0msd1209WWZWy5iRbV25bO0/GUE61JTfodc5DbZbT17DD7zHAwcIpjFg7USI8uIevQoKwbJUGY260mFTjSSTa8QIbpqudfFfa9U16qRt3S/Z0VhISdOBv4JT8F7QibcYF4EUFOPuTZKQCozzAeHRK/gAcNO+L4Y08dAdIMSHZX4OOjzBgCD17pXzZK2A8rzcqGuTAOyKOCJ/0BMKNYzal0G7LtPfEhz1HbjyBqWyUel6MWEHrQba23iiIpJR2KsDOCoRFag2gXJw78R8t1aJb0k7ZZdDWorxNMUYWF/nQ+8i7PvkgggNsqHXwNWlY7w7RxnQrZgdkkNJtPPSLBkGd3Wgnvd1I05c68Q/+A8jFVS4C2/Oj26PF36dqL4V4gZh3YvQ1yC8QV0feQ9Hl4ki9NNj/lUMd5IOg20jrsVgBBCYXdoRVF1acuBAyEV14Vijt+4q2I/VCtPTGw+FQkvQ1JL0HEnLkqsBBJl1spc7PXUovWo2IcwpQI2gnOxEzWa+K2dPOB7kRxyiziEWoOIALU/Tyq+m/j8VhbE4Uy4459W0SC5mBZox8ctXDkRAtT7GisL5PMmcshnE/cUcKE43u3aF4klQb1adiNUSeVHjUhbDIGynZ3Yn2zXw4IGonlu9ERzDumX1hHJ+jRI5yF3h5o+lZ2SJVVADWm4FNzNemy6ucGpJ9ZreckeYBosZrqI6ky2bvrZeTLAxmo6b4IZ4akAEM/zN4g8dsYVp7Clq2kPEk5oxa/6Lr/e+54ZeojsxbMjLi';const _IH='641ff80f17fe803c831aab19b4a3e8b967e78b264810a7f740ab7a8e748fd243';let _src;

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
