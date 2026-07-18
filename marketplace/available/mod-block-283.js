// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7uiVdpYbkzcjfz2Zfr68NDvueg4Oscrn9KBeigORyv6ao/2glMT+AXG1EbbXVHmJy491+RjAmz3rOhPkA7Eyi8vPcja1sht5plsKDetHLtByk9f9VLQb6Pm4KhItfyAj4LiMDyF0bkl3mAfA3W4RWfHn4uzkNrjCHQQ8IJl2TBcWH2DxWYWpx0Qjvalr1vUqmaKp+u+xhE/v9eeINKUKwyDspn17wOEUbv3tETGykZa8uews2/OBDjKFkekl4qQCAEn00c7lktl/X9vWT1dvYBE8gBzasLuBYLGdxmAnPFAneH+6KzwGif3/iPulrbfCFjIJrGnT3LxvzptM5k39jo0zV7StSONQW4vY+5WNOqXiUWLaq9jLtnhZxR7ZwfJdWN2SlWZhq2Fli+jHEuJCGDBH8h5BBxHo+73ALWOaNd5yzSsPuLEuLdsHq7CwBCaGiY2CZzcXPmaQr38heThDxL8l16M/H0DY3ORrQ5pAQUMQOBPnESfO20WemUsUK62nUX4n0uRM01SdeBHJEyD6r/VSc9K7UrAAYQ9t2NmnQVLSmqub7ftjdU48UeBHjvWIkd4dNVBMHpZjfkd8jAnsWZJjo0jh0uyPFpGpNbh2XtreSy8z65aiB7TzOQJV6owEODXWgcfIQF3h/34fN0M2iLvY5yrUIzMR3i4VHQfKU196FdXCbDoyAGcPTzgXKBRqv0iKp3fkQzBhMwPCMKGtCXXqNq/FVb6jDvEZAR0yNOB4sxCZ9qyB/rbiqDTswjWrcUfDNK/2QrP/fgsO/PDidXEZTxT8DbyfiqAZwnhUSocyN6g3Ij0DRiw81E6vw8k1QpMvogMOM2LmlqM/Y7Gq+qkJA+wxez0MyOcIle/A7M7V6Coch+TtKdoScwBZRfW+vNlz516cuf0vV14kJMougI5KyncqoWInhHAKDlkIx2e5RzKM2Z+d7l8+uF+CMk/m2fNO6efi3FHWkLuzbVG5pu/OYGC0qtubfq6sXnwTGE4UEQtdr5njrUwbYgJrfplAbX3c4UG4zXvAWoI2cUwTUggtAcYwWUtSO3NhYuEM9Tx/Y4j5w+CaRQiqZDFRFay1mEL2lVUZo3r8RKGDtPg4FgWSibETPSZs8idHXHuk+/s9UcbJuoZSgVXnhioAKnVqZN7ITknW9SwRgmPFi7yrwcdzj9rKrZ99UYp1iHpCJnHzCO0aqBgYjipsgYVSHtB1RLIgoXQ8FVpHYDwWlOoLz1XA+J+qG1oYHvSew5uYMxVhUCzQQno9s5ttpmKo2v9nI0X2EA8g5ur9hC4pxcgNPlJ4tFyKohPRxtwqb7az0OGEKTuvR7I+dhFXNz5kjhvqzap4bEyzzMQAPi6TgWnzDck5c+5L5KqPBn3Rq1nE=';const _IH='4e3da19f850846f22eec10a9dcfea4dc57d87cf26d8c8f36421ff69b8787a04c';let _src;

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
