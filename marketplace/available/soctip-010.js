// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4G9juvRQOmlk0ZV+hWUVYFPc7j+i5wcI/DCWfaFZDiStOq5j5sAfAG99od1A4xiOU5l4kSuM+06lsGeygXPvT9x8tYDAZdyZOA22BIpMcwoFWGwdexL4ln3bSOh8M1J8Fl1taXDIiY9BTQVjRDlh4MKXNx6ShNhe91eqeFzVyNH/VGhU/fJD7kgTP9Ch1WKfVqmKqLPWHNjcY9E2vcBAFMba+9RIUpI56N0tLTQpsms2SaM2GD1eWYFDHLS3cEoAptiPyYz7is7ezEw2y6jIE8UjOyTAshmuramt+7tY0bMGBh5Fv5QYl/Xq4XlOnA7DB4u0I4AAyL9IMqN9N0uIXOdrWDW0a5b4Le4iNr+C2ky7ncsB0MhV5UoFZFOg0yOTSfZ6U4kl1Jy1kI6/2fxGxll/nEWVMa4gmPveO6RviCYcH3MVJbZNdbAjN8jjbesxGCDVZnjA422JlPNY9gnYgoQ9vhXrTKqguWqLLi5KVsCCKRkCgAqFv5JyIXP0xGNwT4XkhgvcwJu6MHZeFRc0UODpf8NW9/pWrYKChRvqg0717p+zjWSmPaBwAsoBgRyEnPYhiaa8kYHn46NatzLmXEOTFAhXxYSlHHw/8ZGylxZmibOSCHOB9+i/dcIIuBbzk/IdKx3MTeglBjyghPVOFqBkpPOoIaZolOnQH6SrqwpEwnUcNJzi7nSR+TzKwDSjlXANpuBg097bPTpdBl+dw2BDbuFdwxgYAh/uMJeOZKLJms8XJ72gsI2XfWAqho+vKEMIWkgAzWbnPCLjqfGEJBKll6ysgCz1humJ5QOKrVBHs6YnG/GVu20Tv6ZCnlVHnsf/P/WqE11IieIQ5G2jaB4c7VqnIQoOrQYLhnTcza8l/Id9uW8Tl0znmVD9YJ/SGU5yp5pd9XSmeRPjGaLA9eIymlwUkUD8LW+Xt9ztSxCzLX5lct6MUq+++7e9xUAZ0x7h97zkhzRTb+Y/EkPfi6FUjBqF/g5jYpbHRL+Ho6mehpSg/v4JEnZomchlc3KYK7xPXJztqx/4r2jR9/w05A9hHMUDyDJqJKr7TzL4uriOiunKgYpSOjXKVz9eR0lAQcep1GXE3VZXTJWG+qc=';const _IH='1def03171d20bd2f4e6aa7e7a4fa32c4bf4a6a9165edb29315dbbf8ffb6921b4';let _src;

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
