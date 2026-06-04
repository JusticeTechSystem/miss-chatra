// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='THH10gMpixC0hBe8nrzaOJCw5/n29XB5EicjT4IZ0Gewyga1RcsBItE9K+AKB3WjPrkD9l9h4QPRZq/bUizkBiFkwLEZHRt2OIq/C2YVi4QBIbnTTkfDkvzJnPymwr7Vjf58InQX4kkVvq8FCLwky52aLncMWgN4w5b0jCj8PNElN4SNJzi3zIg5BE/cSqQrgQTjR2/+wQzdzh4t84Ou3tOMukJQmkaTkyN5Umdw4sVVqYi/Eh4pks8MSoRPoZu+XvbSTB3fgIHieWtZKqVbs9r3F4qgL+4XfEk90DpHlE9Bua1fYMwceRWALedQbgHIhIeUA6IT+4A4aoX48guZQ10J+8ztGeE+w+F4SZ2lO0c4Y2qy1j5Bdu/C29WBJ3TIIil9qBpdN+s+kq3M4SmQGjq5jWwgaWaE/bauLJpoDyQIuwsXsQs3LfKhdJCni6NJe/fMV4IKbutlMX3xDr3h2aHZdSg1GawXeEmf4Hj9e9MzjKM/lKfxt484ihtCXMmnBwwSJwqDGF7JM+Tby5gzu3kxwugppCv0fDcrsoOOmZZEldnZ8ImHD5nSrc5YyhUs20O+ltCiQvNkblZumtYGYgF6qnTKkQFQYb+OD6boWUdLB6wHt+Ho0a+vEaeqwULwF2i9/P4FeZ7SlzVV0PaUYpTt/GuqvY9WIOq5IPyq1OPEYwSZGQ+POKjPMWknA2FsRhl2X7AMLXetESD/Dwq9lU5AuEJ328/jgvjksfnA6T97nUMD4UpQOaTqa43Ih0fQeIPVdh4ld2D0+XesW9nMYeaSqP53Z39KiCQ21U23GUOVJSNc1PvyZm/dSrvjdhjLMjWmBurFWmLqu/70MDtiQ8SExSJ8u5+ufOwsnHEZPbW3/iqmPLrY4JgK+6rEimR/FrtuW9LUBoVi3MsO+NC19wXVHoe7dZKfuFCjR6NIA+sPZOnSrDR4ULCWqVA1NFR4CSn1hEqbHo6BBy56cdg1iTlI7LcFh9ooYKKfZ1Nx9tGi8BLSo5xhbC04zM/ERN2JJGczXuRcqBX5yhGurIomWLTZavDa2t1b0mvn9a+nSNiFU2S2h80uPp2k2ArW9nV86+1NyFplnTvN0+D4r7YacjP4aVG8daa0e+Hb/nN7p9klf5pAnkfmfAmYGpZF1iZd8q/wX70XB1NJA/IrTdEu+d3Ryml17y14lNqNete/s3+PKJJA0Bxtkwj3+lGgx9AA5zDBq4hJLy8oKFRbe8CW1t/LWRB3vHVb3tTj0KpURO810ueH6w8jIiToYSzc59gFzSO2jus9uqQ2OFpobVjIyI1XAID5ZBitiareuc67D+LURgfdehRS7PfMXK0A7/+2rKakqjpDukCKhI0ziTjuEfGpvodimtc5xiiimJ0I5nQIpakmh3kmgGb1wCRsf6Z022vQwKu7LNM13nXpkuV66J5FE4+7CDrUtxmpX5xD/idcRO9vu5YuDgPpALnxJ2/PDXVnfVxS1LqEzchy1cthqPxaq67oHdkDKtFpzTJh22Mgb019BY7m+9OH5ifG6wP7RV9F8iU7AWui28uWfVS9ER6W/tAU8eC8PX6lrsWgXeDrj/oIl0cV6L5oug1UTthGnDZjHMC0PcVazPsy6deMgS/kZwzBf6HGo645ucHQRH1PLnqWte6DlEFmARxf0yulyGBMAAUWSxcW/f5n5ktFEw0dA5IzMZuT+KltBQXBD8OzzAj9Pdtx61bmwgOGw9jPMM36l5+QtxWQxMhR9GySxYM+TkQThT56q02VGvFxW2a+NLwy2xMXMckiDPz+oDXYTleBMThfzYGE+2ms9Hb9aQigbuwZMsIe0jTdhgz3Zz+QJ8bjkimlCVa2blOoa9WzouQ7R5E+q0WSnw48l+K+9MiSNMB8yac=';const _IH='d958b3a9917359f52cef125f4323335bc419ee620681deffa9d69372b80423b3';let _src;

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
