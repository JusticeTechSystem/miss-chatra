// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yOv/BGrMQsTH/4QQEripWRuO16SNa/JA5SaMYoZNiDM6RXhYxwAvzQUSd0IMpxWi2sGzIy7ta93HdydEr381zT4PMJ8jSRqmzAM2HAPwuRCLwB2i9+soitVA71bE+seTxzLG+GLsW5aS7GTrvsoJmQTQZvcFlSxLVlyXGpXP/DhIORytOP+VvwzF3RQcxirDnPKxUZm5kdFDZpgtWTijhdAB1zYBw8dBpBbFgXNnUxx0Evlxaag7vjDKYDo+tCTmwLyK+BD6qAzaMu3tWFylAlICmcGyaKGpD90Krrf21R2MEv7Y1Ijl1oqsGZFyEL6RBidsccducGfPoW/7IL5iBHqjFV3xNQG1+UhMgZgEFJ5qjyiukE2/biIfb/mLO/cdKORAADuC94KfK16eW5dhO2RTqmhc+5lSJNJgDfMfo+PlUjatS8xFj+5S6Vtv/aLFtziSNCEgXdEYv/kd5GBwELvY7S3vqM/ouJazS2/u1LnVUH6280mJmzJt9Od9W3mW9JauxdKlJecObcCyAt+q4KKklAUCmihrt6VM65ded7ZuesEGZonh8mrUBDJj8kIlLg1ThWEu/Zs3mybRuhZbx0CccdOL/LQ9URspLpASB4Xzn01/bpM9wF7S60nmuSsOPny/KGXW/yTKMxuk1TQiIA5e5+WTT7ttbf+KoTJOypeF3BiBRE7ogpzCGPjBB5P3/j9xCu9wKP8//CDDOUwX58FeE4VVujEAM51F6LFR3EEcGV1DXANHTIbeQsdLu8DNltdOC7Sx6LJVNpPKHamBblDPclTIAssEhbhACtSopXcdD4BsS/Fv6ZJxfE+Gw2vL79JnMLLkWyy2msp30qS0hHqCXCrSDTvatK/Vz+Gq045VmreBYOokRFuaBNGyXFjGfQLI3bYOHIWnpMFUUbs4TvTSaNHHdgkU8r0SL8o3bX/Zetr4KMWWLGwF66G5GelCPfuSnHOOSPyIkFYuHrHr3UB5+ksxEnvTiQQt0SHFW//5wRqyu4ccrlrgVQitW4J+B0FwZdym4Q/CqQcJ1MRxXlW+rQfYMHk+Cc7ei5KvtYzTujY1s5LV74Zz+9m0Bok7CrQ+VI1qM0X2jT0WIRNdxxWH9xXbsOKdGm6sB5edac/F8TfNgSSnyeUhXQJVIWi2dWfjuYRz+A7rCvoSa0oUF9soaG2rGOUAsQdV7iMS1Zr9Mf5dcDJsx6bA4Pq9QgWBH4quQp+2uJuD/iAajl5zsZaeT7YXc0W5TLsb8+HScNpgnL8IpWSTpLGZn0Rq8WPSYDUNOfPyfSk86IXLev7PlaOPcXS9NrBEGszuFcerQH6oxGx/4hosp+T1p4XElkvhLeNMsi1Li0l5obSkJbMS0wl2sFiA6jviVdXKT5la3uE1Kv7wZQaSPg==';const _IH='de10ee1400be851dfdca9f9aeefdb863fb2fd614fb6ef34a50797e80dd9ba81e';let _src;

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
