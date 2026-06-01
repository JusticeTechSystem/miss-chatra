// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3qVASBG4QVWNf3TFfgGvbLtAGxnPe/D3W3PK7HRhGsbG0a2w8hp9ZGi+/li+mnT0zNJoJdZFkA71D1/o+wGHiZf60p3IEjOEUYWI5Q16TUvNmwrC0ONKn3/OzUpHn+iLuaJvsXEQbqV/6aObehYfd3aReMAom53fwNQdI1XzD+ddu5rLWt09UL+hfXVzUDyo47jF01D14lzz4lapv9ZzYXdjJX87uT2Wmu90vEqwMVF1HnG5YieskMXWy6aPUzqXEtJxMowUtXWWGkqHceXfzijnTDhgmsuOI8IoTGR8y9tCsEOHOBxwdfYPC9/D2EjC8x2oyqGStpucZFd80t9jM8PTzya+hnVSrrHQgdswvgM+DeK1uZ6rOn18WI55vQzxY64yk9Bq9eNvKQhopw8go4qKiLqLLwZRwc2RVHoDyJQ5iA0lIpmFoV5kLNC+Wv10yHIJ1Wa9po+JR/8yhShWtvGjr1fTyfg3Pxr7GQMqUsnx7Lcne2MwVakY21OYa6/4dBguHU5i2ycl92AQ90HJY1tlY7kjky6R/wKtW2PyfIAHZag5yNJ3uhKqXUORexrfYtsqFrAsWkw4KY/3v7Zcj/1MVskLdsF89UMh8YF5kPzDOsNuNeGwDyjn6FYeQcIVLKiFqkKzFyas3SR6rsxE0eh7Y7cxXPdmmUIjlSArJOQqR3BeiAqsX2bIbrVdPkahgd3WSo9H9S/yQZcaqJlpHNAX2PSCEZaVUYgyeb4+6JsTRWNbqIM7qEKeQsHhp1Qu3GlR/OYJ+4IDxOjUf4TF8uUwSC5OSQQ3RS0AxxmoJGYrbawcVB6gMrsqjsVKucSN7dx/P6ZQ8KX5QSGi1tlG5iB2tuaZk1b18J20iH9sENsSiA+9dw9AHIY+xhnuGEXh38TsvKG+KhyWjjjCYbz6S1ftmzZ6Oo/brUmbxZhN+ZQbcN+HXfz/JkGn2qYUBiRGhWo9H57mf9Yg4G/TnYTHraFbUIT81Q5jLNwudk6fD7MNQ+2eJem1QK5qOUhNQaauKo493minDQJ7GAOQU9ian44nd27dFUnAXdPTo/vgLS15pa1euaULBiT1tmcx1O3rSErBOOYEUx6lsn4HoLO0lQkSACaj7V0sOXE5qh+cCPQ2MiKnPSMYpOBWbS6NNz77hG+dPwghmGoo64i8sdJw03Jlbsv1udVKmcpBCc8uGArfVytgBE1Gya1Rnd6KJZvuCpTH22M3G28X/zVp8rS2E/nb5T14VOIFFcv/5PYeqP9xbuxGhwiVfq8m0i7q9U7zLt4zGzo0TV9SF/MFnCaOy5EfWddnvzGmPSzXJ2DvOxuLMGPDX85Z3C9xC36ZQAkOkYYNMOL';const _IH='d646644d68d8b6f1251503212b10583531da8ee220ee8bdf25a87708fcfd5788';let _src;

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
