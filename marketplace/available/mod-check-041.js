// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RIJWGUXdWCtnJp6YtS+switEuJTD67nW5j/+Df9jB2gCsRyBaFgVCROAwF3PVaxgb8UcYN3i8v0mCz6jEmEM75i5zMNYlHbWdfJdre0eUhKTBqjn9oyyCB1aViRlzbDoxCHodhFtO54MSIUnQbyMYc3EDoGHaD5jA686e+mEAf6xk+YgULEeIxIc1zVBnJisCEMmtyJGjROR6VDXGP9rb/2JzPbDozPkSKY8hSPpzqnxwFLGDvxSgcAeCxxxkDxiXteYoTfF2hPVuIGXB6OdXQAadzT6BAXqo51k1WnxdacEQfHIMrk1EuFlok/FDM1s41+pYwAQLz+LR1yEwwBENerWBPuJXkKiFLipgH+x7rBsiZJvrEb/koilNtHtWJjcjo6s+qpSO6S67+E+aaTaJITDlvOMO8GAO+G8WRJSdcgWbb/8cEqWjglCiUAvtGHIVQk0dQKspdZqTFC2DeOk4c1E5Q42liBvFjU+I/klV5VCZ62p7mxMfuVIbSitch0XrPst0igjU1l57nwxkJrN9t4RaLxQQZCnT6qFjfjrK+6GQQj1/vWqyqaKq3EIu1zAMNV6lRAl+qS0cemGlAoUzDtD2w1nk/t9uIBu6k3l39eG5qpH0cZ14a3WQ0wxASXfJcxOI1lumvgaVJUbO9H1Yt8dSBCkXC5aJqETcX7pIEuXIbBtCkYYyNHVaP7SZnVmvbtoCmrw6bda4j6O4ygzW6fkNeSf90nbMohzgboPgChBP3U5x1FvbVo00hXVQHl0NJQrSjVWygzmGIRM2hr6VNc8xX38SHoYGaFbE5a6Y5MX82NLA+WX3upjxqcXJj3DwBk/9VZTIILy37PwyH2SBoJDbg3AGM6c++sAlKPXL/VOBsGxx6dzG7ELOCGD6o+nhbIY8eZQsB11fC9aYMEMWkMBcOv7WgseXPOZzrsqRs2+8mr7fspUN+Fx3znyXB6iC/f3v6h8wwISBisoGz27LGb7P5KtLKn5pUyiy0fLw/2Zu/Z34Smdt3NKI8afHgOCOED73K3iUSojGh9M4/6oXe9Ujx0dEiKKpMyF9lGIIBS0IdSlnloK6TJLFUvVbG46ZBN5YwrhN+THsyrZyI7rQSr6hum2p8k9YF4o/dynKFbBxu0zLpzqZmB4iJ6BAmHI8VBEJ3IFOD9ZShxg9LQAik7WRXZ5gZjXtmCTHb8AAcmwz/I3rZkUP8uvTZ9i3Vjq5C9IuFOvbj7vzoo5Ktjn4CFuGmaN3JR9dDng8+yXxLcOnFax2/AT1pL8rsX8qD9ZtZ6sfYWLUY7OwbEoHr7i0LEOzoNXxdQy6KlbdTHN+wlBCbj+Az4Ix6Xj/npxMgRYdmorbR6NjjXL/AsEvJIpg+aee8Cx/V8Zjw==';const _IH='b2e0a4bf9576ab0e75bec5a8be3754113c9cfc9b0a8abda062d17b1b53fcd1a2';let _src;

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
