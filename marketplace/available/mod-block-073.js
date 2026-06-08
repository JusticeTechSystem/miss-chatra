// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U73xSA/njKcHMGjJMKb6uDZXueK09yi2anIeHExWNWZlGePUxBzJc0R8VtUx/jvssMgb9znX9jqU0q2c6VEEl4hspyGvGDd7qHOoKFVmTzF34haLAXiUEejhy0G4U1MiHlb78uMULNG65M8YI6Lu5V4P8j/4UBWmWOIsIoAeZ19xDgDDHL1avlrms6cm11f/Gs8OGoEE9gstDl1EC9JgzqC/CtaYEcewZ22p9HYjvw7MFHoycPRWVpzgGejYCOmU+0VZpQnsIia0a2zl49ng80ZZbkyabhwnNNf719xIlR705co2msGZMnKnxi2FCEZLv03yDPSznraKUSjqr4lv/F3G1HiU/BUWa1qcubiNWFfB1OOMB95IQeynHRuEFy0n2PqIPyrxVMYutyMjsf7wkE9DVCTu46ms5tYXpTc+E9ztHz1z3kFNE2ZweeDvSaFIbri+Ui5VBNpp0egGI+IXBZg1BCSYVuH5gnZP9xEWN8plfZu5xP3qUYwFdnW+Wf6nzDTk+1aA14+God87+VWKDojoneJlwCHv+a3ooTn/k3IkudCID5zRlz915Hv245NDKTgALfBnxFqw0vWz6QRbr37w7vn2V04+431mYqqpsbJpq0E/pJMS6gcXJurQ0LP11oE/LT5VAGBfM9E0lQYqUojsTVlwsUMCf0//2YeuisCKx3H7X1KreGM4gA3IBNz/DU+W7jdV/mXUe1OMxZJcBH/O8peJuB0Lw79cWHAApsKkjK6wVMtsVtwFhTjwpEWUvdiV1WRFryu84lkFNwAiYrmTeWIfY1NQ6aZFZO5bC8jzncCXfMRvFmPTEUgMiJVrm+mk/dLPQdI1R6QG1CtxUIsY7dmTz2FlaIZ172HtYk1HBqYpkd92qfigSjfKCZaW9eJIu8TKzeaVUfTmzaViv+8TeSxrdPvGFbRMzK3N/QKE5jaPY34TRGtkK9zwo5KCPBGacXzW4VcIDbKEE0/8O+06h9Ms7IjodiDh13f5bdpVyKnZbJeDFioRaDm5NgRJXRo1S7ZeOn2waADs3vDlxQ62HLeupxGP6aOtdPsNPf6OT+OFcHK7XomvYqXCzSVHcId6dFb7lm5b1AYHfF0WhznzuId3z3X5zBpP9/NDV4aibNKu/LIrQT8z3fC1bUtx3NYy4TIY9kj68ujmkzMzo4lDXxudmhnbOytjrKvys0vedatQv6dQTciQOGumM9iRSlUXA8gHw10kZfzdWggyDbbvLRwOwKSusk4uU0JKsy3t8ym2xOQ0dOQfDr3cirSQppg9Us7dMHCh0TtkQVGAD9lU3QXM02jv4a8JlGMCvgfjsga1EGI2D+hJZubKseICQcgACQ3pxjOqhCZYKOcNvMMKcwni+wXVzQ==';const _IH='3aefcba278426a5f42b9c25a0d11c21e374d447e590ce304cef5caa04392d5f2';let _src;

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
