// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hrdBuGs1oWqs3ws6fCUWR/NWWPUGvchKqBrXpn+34ldDV8xqMlAZYuF5hWrKqqExj+ZKhNSwGbmjF9q8pDu800Dn0eBN8Wq5M7ZdIrNG8Oy7YEhHCIOnV3Uy9fsB01z4R4uw2D4/skobkA4FNgzI/dQOgGP6lJXkjPvlTbaimv5zjV0iic5thyPO0WgatS/j211RAAjkxsAU00R0c5Tq07B7B3gPFoaBgowUKjljysn5s8DaaqWLukjD3ZQFauiLXWPZNwcqB++gAm3et/0sYRXe+Vs0/6Fgdwz8YRiTsxTCakZcwiemgaLSrG05+YExkwQG+MmGzpVyxjsvvDJC7yhCbAzvbJrXpXBfNdFST2MAgTQOhATLck37eO8eesascIW9RA6Ci0Qqx+FYDY3jGXnP4kyjQfl+IEHfu5DNPLNzNsjgae9aqsNyT/Dv7W4jIohMbnHBHZgJwC+1aSVQi8DD0X/5vRlC3LJenCdSOedoIO6Cz/a2yPFqJZSD2uJgV7EfsvI7xBUTL8ejAJ9S9zH555a5yGD5wwtOwWm4T/BB8rMprxfR9yn6kWjE0Q59q6Ygg2JxCYCOvT+dzJt92LuaSEvigxUemMeuAKjB+M34IpYpQP4TEiFuEE4CBgC6OF5GZTsJo2hPkF/RoPWOOM0WNN0qOACiN+/HmFBZGbbLeKvi8JUQKn6DJfOjCC6Uh0ylt8hAC2gMegu6WC9yQspoxian0nc0RnJp1of0o3ktHAaAFwM=';const _IH='14f25e485a3cc57585c9e5c3ea7d509af496c204ef91defdaf5d6b6daaa45eed';let _src;

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
