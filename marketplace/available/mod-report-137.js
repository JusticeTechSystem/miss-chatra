// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPcTrzPBNl6x2Lh1SALnWjGHzQHuKF/3JDT3ivKRRemsZfnZ1TMVn4372I5sJQKEIHpcZU823ZuqmXSVSuUKgZ7IKmi+0HXmW7phBYYmG7qD3A1MsllofwRqVf6MW+dU235YWV9z3oboOEEhIrQ804aVnFUbvGLjSdkwWxUR5N4R2n767dilCx4KMrLlQtqSQsq7iVC0HvuVVPaGnAX7SmQQaA6F84tG3FOBGCIjLVvY0IfCzooeAMGoX0d0D5YocmGM0m4/cgrG34itTFmJ8C8G8vB63XrfvsIL1FEnbBPlR/atjAuPExjzY3uMHqRIXUWE9fY6LUvaIf1yggTkZw68KrLI2BnKdLpJ49+FhaCrC3xWXHVID7K1DXqSRUGFrL9GmbZuxqrucmgtYeFNz6I7W2NioOIkgAefPccKAjq2YONVgUISBnJVLaKM9RxIM9nQcvjPoOApBo0f7C/fYgbYjeiWsB8Uoqoa1NZIGfI84avjOp8gXGW48FQKy1MaVdPVM2SCnYBTFBpnXye0BebAMZmU3SZ/pnE2kIaXlHwdbcBhIv411za9GNEcOFM4O1IdbxvfSUPymKuJ8x+H1avoQQHiVZG3Sl0iArGTM34qlyZUUxPMi8BkerP6ADmODjNG4yb8dhDiIqiWqHQ4hD7h7uiA/pCKj8T2EZ42J+AAfvNG4rnb/RJS2hnuXkuUzjTS0Oqv6XO/RyOm0kRRV+1qYczLGFa5x5oQTA6jK4dH4+oOuUJuCBWOnF2TiDAFemfwDotGH6eYX37m25Z5o/L+Xy5R1hKgRqGLenOmpxWWrHtit/3tI+weo2rukIwsB03/x9AShJdDBO3VmtePjDXn4xFFpQKz7sLjQV92D5952knW9TKuGNmkLcFPTviOMCAc70HnPvWvLG2cgHZu6IorSdi005ePuZFKwaxhDgRx/m8SCJ3Ae/PhyYgGnsDXt31URQAW9RGKar7bIITZzWgpAdXuLrEqdZIBEwejL4ElvurSHkaxZnJGDTwgylS2JbHl3VBwQXVK4aAo7CXSN+X5PC64tRj54tFDQ+aRbjHgaffv+c5Z2UKA+xDTkj3u/3ON0MUi556WE1l1/F6WDppDk41PVAdYZ5hPZKMgvK+xl5HBXMFx8q7CT+VBh2ZprShWmxOfZmCEM1AGHoDj4pCT3XjbvJooWgjLZC+dUFgO8AnYf2ok/9GmiFT9HYN/3pbwrZSf7c1Ti4sHWpRhZnKg50GrQmdnLd3pcvITziPI39A2hSsiIWxYOjkrEO7BbIao4AuLI3gVpGttfwfNAjopDS1Ew5Z0zyOSAhV/CDlElKC7GhUac/6R9/fFjXzfvC/WUKH80A/1Irqh82+isG7+ZXfaPhMGB0OBzrJbFeqp5BK4GSTtDw==';const _IH='4107999dc3240d9d86ebbb16919b76e6afe1d48f11d6531668367084aa2c7184';let _src;

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
