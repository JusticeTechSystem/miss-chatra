// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/pL6fxXpJMzzbdd+00BQfcgbZCDGbT5pnfoWlLFOiJ0X0XOkQ9MdmcfDFpiWXxIrkC6W0lPxa2TfdRCiKUadKbbH6oWOX1SkWWa0HaPp7+RYYxgg784t7gkkKgm+a00Lcm4m/kGKrQ0ZdTccaK4VK3/pwij+52rFb/ckghCPUMVXAKyN2b4hTdwqFRbtKWbPyWsr4pc807NzDyRAe7VhFBQ3wqF5vlK+Y+yDmlfNdmPcMgg4Ux6cIZwRNtWe5fJFH6rYttvoQhJ4Jr/cOGVQLzvvm0fqwMKJ7r6sNgjiAJ5s9R9QPgAxTaQEtiqGPxKMvyqcuEoEtuXHjEI5ZCixZC7UCT+gEgeia0/emIbjQ3EWNh+WROU2ydoUk7Mz6QuqORGrxk3EBRvezM14OZk3109ebzAg2gP3TvdSKyWc8nw4A3fh0UxY/47t037ZWWPWCkvMuDn+FtYNOBAWCuGf4EDNTVkpY1yueUZ3Tx4ccbstd0NJwYHpaGlADp9X2lahLjDCTVoCOtILrAimZHY+F3bI/H8M0nAiQDr8JPGGVilUB531Ah1YOUO3IWmBnUmAOKMbAbmJQ6uCT1kjiEoTg1MQhFGiV4xiUUkOkAFoZ8mBzA9vr+efMR4Xc1E2+3Np8JcHkCy5HcSwxwaQbmiXNs/zTJGClA2wamwIfwZnkIC67a4j/DwUtNB6D7xjjurPmVDX8DphB2wFlbEGVqOnyVLONjZebdyqRHphVk0wZoGjGzPqeS9sYPdPza7TgtvUm8tk+eV+66obewG0JmQfHTdeLSoOdkqWaYLB6IbYn44PuyKWKda6QwXoVCIKo5VhUkV7YA4D+dKmexUUkbfhiC8uZEkpkXCIhUTxEsQGv5Z1nVD0kr8hnGqEJgHbelKdH7+asWpiV2muXGlz1WEVQfvday3K3RFy3V3iaz9N0sbOjwg7X54pwdanpey630ecOofd/1pRUkordjiZBEDOL3FDn6PzvfD9YNxDFQujcYTab4kTteS+tC3CJnAye2IJ0KGVBAbsyCAv5VyCJHtOZu9F+Jn8Hv1madwoUnXY6a3ILgWkK0VzwP7cHNJLRfylsXPREwsKOnxeMXx83PlgUZTVg97RdOR7FHKyaIVV8GMBrI8XSaT+RbfHhVkl2fV9z8AxSnla1H7/Zgb6bXKTkB99vW/0iP7U6jUUHGq1LWs5WEnSkEQWzb8+nSlpkwWMges266DOODBuJsCozwPz9vS4ID4FKMcO9YTrajeD+S5IRlX5QyoSxlq2hER1Ho0DnE1Z4p2IRMv9nhUhkgij7zpDINh0TrWcD23WYpz7ueOYGakGrigpPxKWdvXaXc/cqKZ6FMldKTYIco=';const _IH='ea621bac612e146c1fbd395bd76462f281bc33a5554c85f611c2f29f19596bb9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
