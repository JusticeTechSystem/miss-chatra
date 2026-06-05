// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n40rjgogHiEyqvkLfGOaPDM8yPuqP5I5LZbDAZ3/E17Qna1MtOtX80394USu+uqRdzIixf8vUTmmwI+ZT0t7K2TCJZHzxDIlkJwNRZJWBV+tzouXE3x7MKfs5ak3vq17j+AZnkQPLHIgiRjZ6250CHevvjYxfVZNIRpS/ctbMHbXhfJQoFoaOo3E3dw+hNJo5pCzKCVqPyo+vqkIqU5CJx9SmTl9YSCUpOAsL5XwSG7sX2T2IgwETqRAnwUqWAfzWr5k2N8/K5wBA33mgiZGgZicWNcccKQL3QBBiIjayF3yY33cUh+3X7xLv4AknDz5Yt49XGayGujWxLIGU/jQgw6bWbE3cBt5zz5yyrPet2G25QPfeDWPw0biIP2Tsnb+PC8S3HX3k5VYEg6uABOcs4hrjUhvl6MhLKzBKO8DBKOESkPZBlw2lSdJJYqz9gbcs9A0pO25o59WMNiXVKvwQ+zEls+Texes6JWHo8F+XS0TPYCbaxyBDwjOPAkgOsrsi7yY85SdGGX81EI4IMay46ml14KNCiktSKUK+II5SyG7Y5J1pcJIbDVUC1zMfBNACIf+9j43Pks3GkwwDPV+1CUHHIFgnepw/c6HGsKKYslJHMFSOM33ABe6PRxg5cHC9W9gqJtwtG3I/6u/5r22syIrvEx5ZzSpHzqmZeRo55C0Thy2ZA+TdEx5kQnGDouVMjXmGbHWiiOQE4SKKMLObyq9xSe+1GQRswFE/VIYhxHb5UBVeCNJ8nz9e2zxDUf0on/LkpEKEUWHuTpL2P4vylZahDZ9PlVTBuPfTrrHMjB2VIl5+TOQS1hzjDaxIMs6I/ULRwxJYEdTp1g2S/yc9dfnaulnPSpYr7lwY79LFi5TXzSGCXU6/BL95IRvfq7gd6B1oThb/JzUy2S9iaQaw27gJxbJuGEn0JWascgTCdYPNgLtKJdetmDrSGZNZtzFQZabnqkYKWHZFNGJFQWrVzFoWs3VDfaTii88Q3DH1ycDmVNQH7+dNvGJ6eduXwbkJpxeGNV4Dr983VEF98GQrhyUnUljLqSB5GKFnnqhTsIvu3Piu68QJ+dPaDAuAiw6gnFlWh7/tl/q1Bvyrv4rOm0TVJjWuWbXtfWEaKAKiknvCL4A0cKJDOw+mVy7/CckMaqUl8qSAwFesCOXFW55+gAJ4w7QC8Yif49JJ1z77/8Uf9654tpw6N2Qk7dt1pjYVh02kepLPcfldg0Ewwp5nZK//VSfgkNSCcw+WsmgGuiywQlWaUgAIgohPxLk6ldx+ybm5RSpg4AkscIm4TcNGXLOgCx7tRy1VQCknnrTtJkL7ttA3r30eG+d4ZD+v7Acq2XwLSFVdvAw/p0wJ4/oUudjuZfPFJj+HA==';const _IH='e36bcededfff9a03126b808723d2e42197ad0a2a4ac848d3fc37ba60e7553e3e';let _src;

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
