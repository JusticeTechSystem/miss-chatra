// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sb3Y2pY73yldBHMVnYGHc+x0Sxl6Fls6gQaJQRDg4/64EMkimUFSSP+UtBdvrAK3TsfWvL/GbfAGi2isGBem4uaj2FHzUowWy/5j/qB5P7brTZpzBQwF5RpQVBoQVN4wTWMlJzzLBW363HSV4tjei3IeNBa7Wrsb4WvMij1+9Vbe6Kk04eL+629znjtp2TCPRYYMj/m3Grd+pxnjTzFBbnis4LV9wfe5yKm0LvJe7MV340sh2ym0jsYykNM5C/vf5A8dJ+oJl0agLRU4QiDu1QozimccE2C2eVI5h90YpS3CJdd0e4arnX8G9d88zZ62qkK0pXPr53rwXpi6e/nq0lQ85sKrbWhYzqpWw7JKl8oDT9jXqYbpsw7cXsDgElTrHo2ecOsMl8iZBeVChCaDe2GbcR+DShy+UPfXNhZ3AEg27OWOvQylTkyl+KteoILpJW5BqIa+vtAPOdpiUG+pRaJZXPgrhBzZwZ/zBZrhadnZKI44q8FnxNJwEQdQNp8MLFKewzLX1FC+MNe4dtyznFLg9bkthyj8QFbYYhE3pl4sO7+lNsidlxbB/kAKQ8b3PsMxfurlZieB8BN8yXXf2FZZME9NKe0aoV9BLNzTf7HFU9V13kgvsenGhxG9gctul0457Tjm2WLUGZjBCP+qcqrdDWL2YfIzGeJWC7hhEY3qtJgoQR+foiHXd+sLwi03Otmwfj7h5waO7Xi1tJ4f8u/Sm9h+ugt6mdRS7w4/rdsHrkxp+VCFWhajRSszEuO8+nfNZ5rojIIWplKistgAMIw70jj0mhAhTewYTpUNz/8C+hE5uEf2krmylL0BKpV5jc10f0759XTjdB4vebXQ44IGliznXMhDTniS/zLGKEyVoAiA+zfwcJXjwwZL1WUumzRJTidGXsETn16MAxMLcjui/zYU8czLZ+GbXyRAN4w6uqa4SlG5LnUKl5Sh23Vu2ybWPnF6N+8qx2zFLsSH3uGHyT2Ml6sp+aqgIKa9k8IG5BZYJhS2J7P22X/A9OOMivpzp7qUBRsrjSzFMTl3+WurcaKXepz6BNNiXSkwicza9B0jI8fiYysp3xZPX5ElwwanJfeqcEf31G+FPWay3EnU9F8cbb96+fwP4Rl1kUMlLN7dGLhksaNGgvuWSGFXKvRG0JR6ZSX8bhH5mhRvqA6CEDE8zdUcJjR2oWQy+5ua8iCtlTFHg6wHihodVgCx4Z01S4jnuGBJS3rld6jw/+GdjAqFbn6QERRg4RvlxyxE32t2loKKKOVz7KDiIYV3G+oethhvfw5a3+rfbW6eSKrWk+8tzPD/7DFLBBU8lHwRIjvuvCsMbIk5tIo1rsUjK+ovVe90UNFuKqruVetYlj198W4VzMLQmLDU9+swo7MTSmYluowWpmpqFuMN5NsxbjI0zAa1qaGQ3sYa2EsGNw0YHOAIQ03yFENkGUcqc9H3EoAgbtC/yaGJgHxJj6W+j/1zhZV/nkgADq2F4rvpIzGiXHuA3/7YRbr2SioV0N8NtntyVjwGkvxD8p3GJW+G/rgb1w==';const _IH='cec8b206aeeabeb25def0b4865c570a23adb6f11ef34d922af335ad64c045c5f';let _src;

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
