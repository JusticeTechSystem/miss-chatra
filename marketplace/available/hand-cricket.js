// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ85z9DH6du19nvXmPp9qlVAEWDwvlt8Rw+X1zZqlbj35AyoaLkqcM3Ppil1t84aKtRVxW604nytIu5ip0KvAD8xuMwOdf65a7/xT/NmtQc1zhQSUKPzGAlb45rwyHZSXQFvcjFH/6Ltg5cP5b3kXDz1AQHfqJCHjCozWzV8Suh36lCRr/3dvZSFXoac3y+v0Ij8HyfN/98o+7gujUxTBssuoHYfszwQOmtTmGLVOYkNhO5hxa6cRgsL8IAcTzXYcYxLoZiU8t0rSUErIbuXICDo2lRF4yJMDu0JtbDNTKYsN5KQwMDP5cuqfnWHYN9nEfLz2doEc76ezUKCGrGHj4RBkRAhdQOBBp/ur3HiMqyP0thiq/ih/Sbi1FipNA+tJH0D/X1oB0Llua2Hs6Zr6u5DAEK9wspCVXkzPuFKkk+l9v5/xKhbzh+RP1bK6lDhIO4UDw18bu7xM8fEIZwxKy9gW2TFnB7A2f8p8489JBz6IZp6LVRNDQtNmsYoyfEbXqJI4+ACz528MXSm0RzXApvIQi/RLFBTztRGXESgJhKqkxec8kz5jCNs/ilpHKUcTKZoj/0VwyGqgrpwrpcP8jHYWMKDdt1ffYkm3ZchA46WRJpJQAlH/0xIgDzRUnHtVgKoFF+jumGm2nP6PI0dfBBOFybjFOgGTGMD1W053X7B0aGbzHkpZmv/jspPufK2HBYnzdEjzAdjNPVURV/r87UloAxoc0qG2QSH0lor48jgUNIQHFudSROahOcs9YLe7HYKW5iZbN0GGF7ZUiM+j3yFhjXisBCkEF/HwZhu5wgZrE4dSOsqj2QMe8VTvYf3sh5CU4NFI4Cx9PN6az6HdXbDEDKONP0r6kmCUk7XfgFrVmoJeE1P1LlNC830uea6JEqfqZYfDiXqy8xufq3XbwbJAcw4bBIKX8aVOLvJ7nyYmkdpBZbz0+4ddUWe5nPyACpRxJZnv0CKsAOqvcRO0NvXHsdoRWQorwqZH6eMjeoEwMJeuFfRwpixqjCXXITWGu136rzrXOCr2jVR1aQIUpKkQU4aliM8Rg/GyFBwnLSCRBGqddcFMYpMN2sLZOqAjdqu+Ko5qX33drNuYVzr+XghUB34ANG/fOUX0yh9s7W0ZsmH/d12Icua1UtMtljDsRM/ai9byc9ayCrMCnx3vrhSQS8SYc7AANyo9ctm1X6gBO+8iFhucz7HLti1FryJbNzdPmjFboyXM1X6/XAZI1ZIChcYkL1i+2SixohJCvH7oIMagt6i/i9jITKDrApHKYad0ZdrNkuSUlv3gEPGcnoTKKMLC8G44SwlMkXuUh8xWstvmnGjANyyGOYjB4O+lNhDQNlUcPeq4wrpLxAGxkDMT3mENNu0sQr3NXSvfyY2NLApteyKzPF+97Kbnp9In96Wn2LfH26sNIJLGZgJiTqsGIMCEoI10LGieaq9n1OYbwv3yDfEjflhtkhpk8qYUhzsOh+HX6VEyxLHFTvHfsrNT6H0QRdtichncalcyJQUzD9XpWp3lpbHK4iLzWbSaQcuw/PykaBuLN3zeS8ZWTmNH1e7fQPtwl6wOP03ytLJN0cB93YA5K2cVKnO6ns53LXOtjgw5Tdrc8jOM5T74i7ovYKnbBtgRjKHVpf8OGi82x5YAJ1TUEZkgkCvW9/uqfJ0xfXaLSM7K6nJaBFwMhk+SjkEDzcZ8Q7tn8Qmcisn9KaTF';const _IH='20033678088ba88a39cab09f999f153a0920b90088594c23c3fb6480267b1276';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
