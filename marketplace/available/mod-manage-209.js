// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7M1fmpYGVksfHMUuWbbYBm8TnsBv/rFUBnICMePCeESoXRIECTs4RmEKXjzlUdzhdhpUmxC7l1HaO2P7hkqd7/RWVaFqxF1OEbdaK0aGHt5xJxEm0vNM9xSbBnvtZMeLT4Zt++VAwO28AqDI0CKYZxQ+wN/ce8cfrMMGujOYs3EhfWSBDZkSJDv3VFAays130fL0uDZQGfIVIbdZHOc4Oak2Zv+mHkOiR83uTR4wVxfc3HbIDsGGfbDt3y4lji+9gny4Ve5o1f7H+qBZSylj6UIM7irX/jNBQ06XnBXqR1k48gc9i3Z/lMSq/0qibYiagSTHaQ/rUCnl9fWSYX/UihqtqhAvzJ9VucRf6bQqsfq+M9G02J/UZqFqhxGyIcmvQnx0nMvub4Sz17yA6Ylu18QlSUhXW9dhonrll3JnV3vN9SF0Rn1tdMfwyL0RiHPnX2ucCis6qC9qo5fd+e8mdbO7oTcdLtZGBV0fi1tYSTOyTwGOHSovj6HeWKH6YfiZvnTt+l+5ELu+EEescwIVUVHtMMfKyXXe90giKoS7ABrCBJIrUqHkfNFLOygwcEuMgSMlujJ9kTJIb/gDa+KDSc4uaK6LVs+haYbSdjrfDULZXbz7nO7pS0+IZmC+ZjVrz/qEpLYltfhudZVOSTYmhGnPfJZfqvGNtlJHZHjsYIUpD4rBq+Uo53uOGtLdrB8NNjKFzTWHVztGI00d8u2QMBJPbjtm41QgGnuEb17Yd0JZhQALgdgkhHyXo8qd++XnVeWruOPY8EOnVkAf5VvMwfXA8F2R4Vp8AteLBBba1Uu9BcvuZIzukyI9yU5m/1kOplMpBwpj+33bfqrJW1MgBwatQnJkPNtpAKm5l59utXoS4pLassCoumPgg08ROeJa+t6mBYe5n72oqH9boNLtjG5jfdZaipNWQxXdo1987rvJPHIhDupZ4Gl4P7mwcDPYq3FFgU1VldhGlZX0V9Hi2coagF0ot1hfp/s8cSYbTq2u5iB3W6ZcYZ7qhgLktlDlaONk/wBD8IYjghVQMmVgCoDbV9ydyF9wF6ro0MP3KyPQx5bzr9jqCn4YFIGHjHSGv2gEHQ8OsCoC4X9ZAA+B7W59rL+F1zgi/yZwg6zeLmTQtPREsyJFEmiQtIPVC2Swc2A+wyXgY+HU3lMH5clVt+JAMnKfV/LJx0ybWxJbAlR1NIbQvToOibYnI2rKaD6BlZp9FUDVimIg4GCzwC9ikiFexkv0sKOLXKYg/sdFS+ElWACWqLPxZm/v/z2YcVL43arpQSBQJqGUKBwGJKnKixUEALIxK0eNHuvFYQqjijYcbWh4u9DzGBn4J9G5hHVdogAZXcKjn1AoT0B0MduMnqj18c3+Yu4sWBXlbkupBFDHT3VzL4A1Kg==';const _IH='b65947e5479f143799feafac74ecba15cf65771f8bbf71a9e3520e69ac99f3f1';let _src;

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
