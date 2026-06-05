// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eLFKEhuQHH+qH1kf1AOg9TJrr8HrfmOOy53+QYKd1hWPL3T1p/dssd85g4Y2NDOrdj2d/m2xeEfOf7pUjBIBZcU4RWIXaZ+dR06uQWBHkpRdIE9OFjj82y0WJuxQWfIp8pRUVU3ete1tmbO+mPsR4BW8Q6ATxd1medCBVReD4ya5NahxIOR+b4JK7o9OdQ4vlMzDjgkhdH/RUZ1tTbcNYYEkVesRgNAwes0EFUvpf0LWzC/AYQfk+a9vu5cYAdcLjEf1t5VBYSVBIrb09Eqwb8bYU4zv50ZAqWEa4a2j2z5Glmmzfi3BXQ6LJG+PNVMb0LBofvCslHQYEN2Yr1FR2v4rArk8lisfz1NTnnORQGnYQiLZo4zl/9MwyAQIJSI1cRFGUzGyieQV+f6ADHTqTMXP9lw+xdpfLhuksq9BmZ9XYQObR8+DoNPwx1zVnpwaKI8GEKEa9VQIvnNdmANLGuXJg91phmQPeDpCm/VDJasKNPLiJLaNvcNkV3fJSPwOKlQ4P7pWhKdE6y73uNenX4AADEXOdcuLKsnu0aZcNAe9r59Vn+J++wF+kE7257S4INlfgskX/kshiq7bW3vne03rbkdMD1Hl7OlN6LcPfaVnxcTwRd2cAA5AQii2vJ0ee0N3SJc7fS2NzkJlHY9dx7wfiKHsPwUmK2mJuUksbnuxSz3WrieYZMaX0nvSoUvbhNHYoQmvEjqh8FLY72wZeHPSL3f0WVI5liONF1v1kGrnB3JEt6ZLTjIm+uIP3EG7zceDb7xgAzZz3A9d/Lsl87b5+sHxRnyIvPdKFSBnA/dLCAXvnl6I2iU6D9jZZTCMSblznikmasddkWjvUtM8iT6jZWRt7xHoxjYgWnUybAMM8Nd1NvrwoJ93FgGmbiBh7hWwYm7/I2FopCw0B7LPg2REWCxo17fIHcRzyysBUfLP3U9kq4f297zLiHtwyf032zXErOgHKnFCo//zx0CMCMY6Qd6CgBR1t+E6i7Q1UgkfEgGBqP5tS3UJZrxT4ohoJ3T0nLmz4hGyLQYj4arWyRQWmtoo5gJiNnpa62/t6LXvu1r+46kH0nvYies7tEEw+R7OTRUkkomYV5dbKY8j1HV3dTWbf8gFByDYuPyA91TYvdEamD0QLl1UMWADgE1A8gOjIfBych9m40EJRlGrCnppP3WdgVhqqqUX2hlDRcE5V4/nypg12bzlEGrQ7Tx5oVUAwkmxLSyIv8IakeO6v8dZQcUmASm1sYIh6VJdOtnROboikwMOhmG9hmExtZMFs5uVlykyR90glokECaT+6z1E3KKoRDZTqfbIwmJV0piLRBH7R6ypGgDwfC6plk47dughHZ0gZdevjfbMN17muzrRttPvrKsOLmussQYy';const _IH='467c6a1eeb593f5488cf11978ae885e62b489a10b8dce84f71757920dbb04293';let _src;

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
