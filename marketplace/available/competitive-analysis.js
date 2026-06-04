// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='crbzXycc+kkY3YsMVVA76ZaZi4hvE3nix3531oz/22QJg6F6fDAXK1FfjS3HmFBPKuWlfWuVGi0RtuUbPAjzHSOMk0eIu3/tW0qH/SJZQOhOXlAJjRygP96YwnY0ap001QP4hCoEEm4CjN2YDqz7RSr4a40pHu60zeCApgtehFCQf3q7e4nSs8YnDF3wEjaEuKtxWnb+LZSjffwJGACmPYe8+a+nRj83fpzA1aDVeKAQc3bFB40VVOks5hYUUSUgVIHXP4yjMk6Bq/acVSCGaZq8HWUFjgdoLHv70rYfVkZ/jHBQTVSFDKXtWylTx9uoIhiTIXbARbJuPI79vgELEPb50xoIAKThEpUUohIceWlhFa4kW/sdURVL1X9tKmCXK8oqMLW3ePIvnDcBuGiN+1ryDe3b4k0JItHP1C3P2ZnBCE/U5r+gjgGsb573r0Cnrcjndf5yZJ0/gn1XLHsVgtMlShMLseEeZt3Oply6Ka1LDCu0evgOVSWYqj5bAi2UdneCFe7QDRfYv8x7UcFfT0C3Al/tdRwWqU494O/lB+KO1T8ylYbkWr45DpMwbz3zvVe5LwYICtJ+uGEs3a2M6YRqQ7jlc+5cwtxToe+mHxiJDlyddF1c2Dcxfde9KLwWYu5NkKw7hVgWZBqGNQRaPhbl43V2gbwclqmtxrNFd4EPSdVA4SLAxgOPUUCSYzXnUOI7MmekOrKWgvUT0KYjLeKsYJMP2EX9hGcxUyKG0vhleNAyTmot6UU9mDEOLxHdpGcR5fviB3Ai/yTKKz/G88arvMzUOqRDH1lkFLGV3ktA7Y0+bRv/g8J2UdSZcJrrgS9+mQ9wHDwxItwwwh9ao7wSS6nzzVGq89MASjR9JjXxKgDJ9hE3es9wV7PZW/DFPhEjf/LEONWxbV8zavZNZCr2xLd9FrxjG7LRK9SPTiYZR6nVAtZpOs3Sb2bxzpe0+Q8Tqe19dOT8THltsWYVic8eYgWvZXsUQNZ1LUu6A6StdZfBZL0toVyP8sajvPcHNgKQgoRzNTt7GEdOF3D0fKTyC6VRdGE5yabvvff8mwNou4BIMByr8JH/DQ2V7vqKMkUKrgT7GWTL6jBx1GuClHaXcY+Dhez1/AHSUaZ02TQiGW6bF+Pbg2UCbZWAUXYbDldUn5gc5CSPhTKFkPjI9td/iDwud+oPAypvwFQgCBzOyPRqQTDTwf+gB39WDfY/BUn5WOOUsJldiPYovI2ZpSnUoqxNTkNCaJLyooIMSWWMwSatLMiMsB+qd0pQR5pxVocmTd3SFA/VNkUZhypLj3FlcidrlnfFMEsyroIvJIIPUsuUOBKFkextoSmez37TozX4/rPIFhE8CE6Ip3bub4bE23TRckG0RdbSW6mNhcCThyQTzFexgdYbQhLqmj9C5oED9iRhK7UfLf9rtd1aV6Wt/qh0pFga1PqNq8hyfnRRu3jpZN9bgAWZmy/XstoOnGQzJjY8e5O9GGLIfSiQdM2Jiy41OzEgfej3TM/zQiKsX98KLujrq/pL0pXbVoGdoDH/hai3vRKJ7sLL7anE885f9v/73bNDYw6SpXaB8fDxLj2sRw9LuVNUFEjKs2ezFteY2yYsjUzeuLxB0ZBQnK2CbPtzqx6Yia/m8He6yRbOn70TRsbJQoYu8MVR6j7v/bJbU1g48gTDLdgYSB/SMTMhRoWFQYWm/Y9mwzSkqANLnYQ/UrRUwp3Vq8YG3f0pkeNzutQYdlqa9eY3tiUjHphSSfXltuA/kAnJLia/nchJdn98OcymHg==';const _IH='620b1ebba6bb9b8951d90162021b3aceae58a5e293054d9c623a270728977cd4';let _src;

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
