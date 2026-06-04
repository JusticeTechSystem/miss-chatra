// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oavAampfpZYgCEPDyUUvf5yd4EpP57bxxAjl2UQ11zRs7T1pa8hfq8bJw4oaOJxsVHBlOoEjk3sNNlUbJTc7OenkoXS1hdJyhPwenWJbfpwkRTJ/hMzcSxISllhdr6xbfx+g2eYBjbqJEdNY8U4kFoKWDK5h5A4OX0Q+bWcNuMkozlYtDvmfQIcO6Qr5TedfS1Kvqs0tfZQajbmvVy/lkII4MLAycZo3zwgZnhX5GOunnv6CP8d88zkQgXKU8tVE/ecuUbV/kW1+Wc1qJMSZpyLHSt/9Os/FoVh4ofkawlTUrCzfikIXQDoAQseVJQSSYrHcf7khvT65XcSYw44aYg1Csc/YjxA0KkAxehW3/JjDItAA1FZCVmryHy5ZM7925llSmKpvnsJWKptXgDe5Sy7JSOnGn7gZt116rfb/VR+Q+w6Gf7QhVRFl8v0HG7h4QS05E9W+Rg0FSbbYKfZ5rtTK2ZSpTr0rpTYMwvVfUz/qDJ2Lytt6liWl6WBGRs2AL+1e/cds+bXo6qZYdKBzR/jn93Cwh/PSTRA/G6BVjLI90Py26bTjQmdqX5rW+ZOmkOuY2kR9WKAMeylkTmxnUI1HmLyKJzos5KYNqREUFpPF1LkRV7//awM+QalHrD8LeeYkUMmDH28x/OUKmqPWczflS1BCjupELiJVbkBaTP1NJu/qjv6g5sH8OnWnaCJ1LqaW8NoGb5TNckwVDHtYhZjSCgYyvllMDr1ytssNHKa1mQBa45GzfGYanEyewRrCl/T9cC2qubphGdoFAK5cktEc3FLrrD2uZgOMyMFEd7+Xr4lnDgImwbbm1nR1ur6nvA7FV2zz0TDw09ihzTAKm7nqZ0D0AkJH+AJNZd0/7Ea/jryQ2s92sdRjALIFZI8zVsnVpiq4FEzHNFK/PFLHO1HsiTVKMFq905z/Jvh21MNHsjQw4QKdHAMY15COX+X1tTbacQRt+K0MDDEHQ5Qehi2X360g4Y/rjs1omgLR96SUDZaBxwPKX9J8ldaXuQfW/bT0fgohRQK+WAE+e7u8zEK/9fWINd7xGTNuY4mgAvG5FC35OZxmLpyI0VPhRv1Oqy7PFKeLv21nfLyHgh3auGhz6Qu35IyYD77u8Q14uD2+d0NktZVmYxzSdkQRvzuGWypqzzGkgLv/kjz7dNeE9TjDFkHbkNjWrDxFiFgYKkkCWlKYo4f7rT2LGa4wCHWyWIk0YsygljKLaDWfGlQF9g9GGPIr/r7ZxCdfXai4jJEwZxPguZ1WEYYUTlrq1CWGVvXSQVK9k50sePiJOGoyBEvfG7dE13xVM+M4DGKBsLQQWz7+7D/HuoFFf268TVglqlVBLlcLeeqYdoY2UOoZAy0T/cQ8ddyPccFG/e4vOv5LfXZ7YvaKV46Syx40rKleFwUfGXXNVkh2zcIAMzZXhJGN5zyrY25Q2Xl/7i9lUvrXFGKbUyP43lCTkJy+KTxUdoJTQiLcAt0YvKyCY9aL0r5aF47yacb4aHHi+CKEkf9LIEkFe9zOp+hwSUrdHAf900dLEOsI0hwhqooMiUAoMF5dwqfWDnB7qyemH78Sym+20LxQ6TpZ/4P/JVVgG6h+23GW9zvXD9olnZ1hYbkn02DUhEyVREHe1vqTlsqXWtJI/nVzu5mkaDQroFEtDYUdy2gmDqurIlAwuvW0WJ0CEKBqmkLOvXPp+oYivcBijNPFtw==';const _IH='9f4a7546de2c649806076ba8d6f1fd40c8b2ecd057523058477ca3ca111257ce';let _src;

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
