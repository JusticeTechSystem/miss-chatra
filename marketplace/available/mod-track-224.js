// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXoJV0usTaM7UwsrGKMKu9K4qYNqDCjFNHuvDKvG/Kcsq/9TdqRD4mZC2/djIFIQfBg1Zkjd5EFDVW2A89hn9/Y4gJ8C+NTCItH38NU/sIgC7LLl3hKQ1kSaV6CjuIC8DnxI7tm2IrrlSAC/zvhB31GM8ZVtgLnYZFgHJmYZSao+jrdSrIUJaqF+yUVYkW5MlryC1RZK0i1/hxQ7B0FXpyAxs/986B/qvvQyZiJsoqMjpvqztB3MdL+5AZGTCs4D4MoPhG9MbVteJxiTY0N+ZEFdPoa5Av+kEg31AHMubK8QsQfIJ3qYgwo82rjIZeuZEkahwHCQKDFaYOo/4/rWriq+KvN0edT0LNIGCFNe+bT3P1/09d6D8F/d++fd/8HbLqERx8GBW2zO4Y7tI7C+2qW2IsKOL98n3w3LmWhKhEjZti3gcZToSHQviicXuynQtvX8r61iQzG8l7L93pSbMP4CaKBZqwkoWj+7xQVjPxLWmimqah03j/xYdvMQY4chKOouQ6bIKyTmazL+H5cTJFUaS6AKTET/8TyC4jo/lXzoeGR9liffuKkhga0horOp64KhHKuc9Ot7bQ94/pPENDrGr8FvDtZB4iZDLYpiwmAlwEJfDYZtGP0rYmR+0i4Ex04QvLD6+IGQw+SmxlGmxLiNsnHD/mdvM/mJOjEHKCqz9Xi2wKNci+BkUov9I/UAtjNkmYn5+DlhjR7TgQB0XgZhrMI/615GhvvnPP/CVwDW1kCDifh5d8zsiJFJyT6kievdq4PWtxtcbJsjrtS54y+QfVGI6y0RFYf1lJLIkuIjCfmTOvq30uCHXdC17E3yYFrL+Y8/wFdtaCFdjrZvSVFgUVEF+wK/c/aJPSHqyRTdCH1Kju/rwThhHD6I5W3AwcwXuSvD3BBAEp+6VeLfEOHKW3vx7qSwBhf5Ei/QZhT8etfxuDg52bGnuN8tyJaR3zaCQNA0iv1J4BY2jc7arofuP3NN3+Mbfv5KvMYzeQoySZr4iGtXXt2kq/IaBnLR0RQ8sg7bY2GTQjsQaekJ4VCCYcaFRfV/ueQbiLAzZLBbC4bsAROu4Extrc259/5nqEzDHydztA2uhvcq2quiFUzfw7cad9wJPUj8uDl/1bZA6M96/QTFWIAUPyuUhTlIeX06hRiaDNr6fnvTQJZGvfqze9mo25ZG+FcmPM/hmqwSuMu1hyJCasZCnkE4WR94hUr4FEbO1G6hb36qNCjqzufI/gOdvslh+zsmideh5+fh7HuqkhSLSs3BLc2TCJyc/niq4SNBNvpGt5YJjMGBsEBbDbR0/vkTA4dBSOox6UkclO4lq4LEKaOqCjKz8iNmg0rgRmNwghjLB0UeNYSTdpiWsBTZcss99/v22TI7k=';const _IH='9e879257a41af21f6b3a2e441fb3cc0e368076cba2d8c1ed007c198989086fb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
