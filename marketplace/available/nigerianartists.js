// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KreLnE61bxsW0UdqtmdCLDoQJ3kKXb36ow6l7enWfvABDA5M1VwzQPT2Dk/tz2S4/wOtIWsJ0W1uxytZUaLTehBU8cFldwpQhifCMK+OdU1+GGzolXP8gJo7I0/BMsf7ZbnILDH6Jm9ayScLy/VgyoD8skphltZp0PdUNSmov/sphA00ndVOiXQmcEjUTkXuqaTgMMi5ja2+Rk6gc4DGpX4XwPLCblI8v1leKZmLK0b8JIRwb1mR9CDmhzXvFe5XhHutRv0DxIizDdJinpdJq5muSYsBznYb8Rbw76XsnJ/SODv8cQ3iAU2l9AxYztpX7eJ6KtyB1MB+BR/F8Ui7vutq+WjUPa0eWFLrOn/WCg+ao8KiUVA2LiLNc8vc5jMv+FCNe+p4fjeX2SVM0eaqDpcdENrS2OyIPlhwSEv46m+Y+hscI6EjDsX5oXM/4OxjdC422b85lwl5fYmmm4AWjFAauz7+JgaIAOKrl5Jl4Z5/l5SJ4FwU+nuxVAgREBz5WnS6+S+ne3xnRW+VAbrtDc0HtFo/nyZ/9mdTVIZjoOQyaZVqlNwjnSNL6K7Qx7yZNL3udu8Jup4Diy1IsIsC/pPRzdqcRurZMdmRK3Ur54wI+CYqw0/Rborv6aU08MTenCgMpFWYplwi5ppoURxFsGTAcKRyOhcN+8wE1sdayibDYh59yfH6pP2YetdLiqrkpQim/3A3LKDryy3/s3hNuwqwxYMFvQBk0LZf7X6zY1Xrytoo9oP5bq6ca6ZlRdKOfDOQ3XqfPn5GEyXehksjxKjVDDgYBl+/81b0t/oo3eMusiuTZmEHBe+QEhOrP0+CV/BUf4FE6JPAF7Sizxp3MtNHRziBcLGvp09P80O1oIbmsk6hRDNI6XJfPM2QzY3fA9Z6aafdDbfEUpDV/Ijf/kVScNRgwN5Yk/Yc0OT2Oe1EPAT4XjcYtf6Pd0sk/3ARWrDCQRW+uT12NS2c2wFhh4P++vbZXVBm8HKmH5SM+kquH74lT+UBs+0wUOCNw3GZpYr4CKyurR4hkwEPxk7aYcIr2vH0zRp1Msj/hF6hJ5m8HY8yyel+LssQ5fdS0gBWWCVnqcrZk5xfnNYusBMQP6TuLW+Hwu3hzs3qSd0KcT1YSwFBqCwPeNLKY0ee8XP55fP7qBXH0IiDs9Gmf5ZtKUo7aWSEPDiRb1JdsKNZe1RKxKM/FpDh/O5v/axxspBReCUhvyclXZssaM74WEouee9K';const _IH='8ddeb616464df24c3e228396fc143e01a92a8ee077e8cc86c65dd42f96cc7aa7';let _src;

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
