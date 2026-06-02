// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='axhJEKXYXkEQBp7QkjyA92i3N+Ika8LbGCE1UGWXKL+b/1JUfjh/WB7N0xqEINdkEjVIlcn8t0YfYwbGuI2GyChrgNu01IaIO8b6mLZSFTO1OyajqwlQ16qPG47NlaXD2DgR3bUP+2wJLoawSXb2otmwEow3pn3Z8Px6KJcXRRjSyBzrhbrn+s7ALWykfdGQJp/jV+HA7f8bnOZUAsSDFsxN22HUedCupB6SeTMCQHnEIvhgPlmWDIAoDnz0QFUw+4i9HD6+JuQ0zyxpMPcBNzigep78Js6G9eyWTvtHdE/7E9VYeqcZG4kYezdrHCmWcbxjHui7R/ptYzm+eV4dl6NRkKaaUCS5jqhn2r6W+p6JqgEzsNRt7foZM7yUlOFtTKdP04pfFFJd8Kj9XsHeM199pzuAiVntyHFB3XA0WCbMFWrtt6SzJgGgQXosoJLmjBupBEhY8lqo9/nV9cTZaA/88ArOrzLQlkogW4eGfi6t8BNa+bkDYHKkhwGpPSHrkYyptCQZsZPUYIjjANVFYXPlBIWA9fbiuoCTFbwCRl8SBkxBwTMBJ8/7NMmoFcPZi3NQgxtI7E1PpJKGyIEkZqcddX6zBrSCisLmB1HhrH+ipb9vpGydvtDk1CrHqNAiBdo1w0hE05aBybuAhk47A6B1OYIVtaDmTd3WLk4c07guFpG7wkuclN7RFqUFTlFiS+kDPjdgnAnKVn6NPpmn77ekBSBXJ8g0I2ecMbIiui1WePWg6QBCh/B7Y9SZ8xtOF21o/E6xLEvR9+YHckKNP1WPnpRupOWamWugzGAWGiZmzomAGIYfERZwM72zY+Wd16JBssnR3w+ARYHDVOxIhq2BkY3o3M0nEum0a3RywvHT6D8lRe5jAENDzwU62Vo/zERW1VCnXiL1o1X9OiEOLOynl9aRTDwrjM1ASwwZPUDgiYNo5jSKYEKSw/BTRkNrrNRAPrQHI5eIe+gcDBttkoG/OzPLdFFUc6T3S0WldaSug7ObpV/1n2KVT8fgN6r73jKOFQFcBzu+QRC7CsA705IUCgjjjwsaKFj5ZDuEZ3rh8E2WEtFrnQawefhGuzw5xlVv2J4uUYWWNeQEu3xwMrvAi6wH01AxXT4uZMdKhwb7bbtNsp/Ej8VgfUJqAl0XFboTRU0nPkiTZ9CXq+oTitnujdHmmLRUbGTSFjcPMymGilnup4n566L4jWJpTRCfr3M+MWmqQ0vECUvc8Ux50aIcVGSsZkWtqFYSwIcKHM992dSXHzkvpNnDpAZdvFPL960woJbQmgISIuvuDommxWjRqoI5DTEL3fkhnE8HXg/f0iXMh6I1ZqrtGcVfYwIreOuO0H8hFdsVI3CUPKOXD0jWKOJv34YsqPqKD0qU';const _IH='f4160baed53331403de68c73a9dcfdcfc7257e8db6c64e489af1adaec6ad2444';let _src;

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
