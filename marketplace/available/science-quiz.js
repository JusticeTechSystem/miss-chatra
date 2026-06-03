// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tNEIoHvo6YjrseZCKPYdaUcNuQvcn0OOmnYF6AgeYFuBwBChGh6/tfmyIbjY4+x1kCIHSf5/V0QFWizzC0UdjZ1tnge+2bs2eOE5VACbdyvolqrUfIHFG473K36StXXcoCRG+U2E2v+Z30yijfNdvfwSoS9+HDJ1NwvEOauHL/9uL8AullxL27PQda1GMG9TH4d82/NfXRvA4igeJs3LAt8bpSjXyXcdnCNz9t9cvcRk66a/zTjLj8QttH2Rfmxv8bbpfQQStsYX53QWPXb6ZJ0hP3yKBWKzKnWt8O1BeybBdixdtpeKHq5+PfiaxSNUTP0PLix6knyh1LkPw+inoaNtV/l9NhYay/Orh8sueVZB+BtFR97UdHi9C4bHV7GKK2+Cos3D+3GuIVx6+zMYZ+GDRL3/HRkCEP9G/cIolXRYwri4cTLmOO7JOQmaWkRaZR7qirKhzzDmxSMdYYjDBlmw8M8DckL9nHV5ZXDvy/NnUhi9PFc5HLZ2I7rlZi4LCAk2QSRcyhSCDd+i7xRjKioLNTbAvDeooJ93CA5X68Zi/UyQxcwOoRWRzuZh9INhqjBYj+4nO7AatFc9AYGPzGARLou7XjwtxLvRvdA9aPosztNIAruykkeX9Xbu9G77MnBbrTK+7LDJ+RMhnfSS6q9BVguJfTJIct78RXKvveJjqrxe7Ub0vhjeJDqWgiSAg3/jah+jPjRgZjncz3zSPHFT8zmvoBGX/hCmWJTcwIlOQh9oYg/yDQhN2NoOrRULMMPMxKAmhNkt16KMpYDxks9ba9hBTvbTHjZWLP+2QGsUh2pFaYUWHYWufocGeieAQDdG0hrFee89vtSBGuXBkgHJsTIf1qc2mRWDzNJfAeMtIKr9xhjzgZjEY7j1PiPBRu/Jq1/2uqdS70EVKRuohZ63N3d1bZq6gkD/XL0ku70AUPoJTcK2iyXWd/EHnr6bXNzI5BLG9BASmvTmbH66V08N6YY00NUVoFqBmT+Sa1FXtw0tQYXU35dxKk4/w+3u3IhwNeKQbO7ZlwqN+giXuiugV4CV8Exo+iaFMa35baRFbvFZ+hHAj+JUluB7UTQI/cCeUhMxEjOIppor5UmlerlXifehYQgjq8bgTdWIn+JSqMH30ZVL//Oy9S/KPODA6FnJ+NVi+FloKi48nmBy8ACA0rk+Bh4CMiC/r2VhVDun88lgLKao6vImmPxnrsYUNFlyn6WovZ3JrtuKt24p76h/dqT/SUSxCfx209e7DEg0nEqEWouYsZV1q0zZF0yyEw5de4346n9hkPYGJTt3uPFYG00yEWvH8eoav0FSq4ReU3opvQD+ivhy4pOMuG96jwDQ2/BwYWP7gMM1edpkFr1qMjb24uINiY7gjKGKjNT/R+f7kwN05QgnX2O07WRQM7Qv2aMYZ/E7d4Jk3EmxSkI5n9NjXp1bkZNGHZUJRA==';const _IH='95edee036df8d83fb6626df2fb768a48a71f7ed69b1077829d2204b192695e98';let _src;

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
