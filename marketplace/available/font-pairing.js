// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9qSUVVOpbwLLyVUxs5+kKMZUL+xojTxwLgQwD/eFTtiOv1IyycrdoHwwkLEgdoyYVstKqMqvDWsJV/wAqmdTXC7CcrAEqiKIRpvfoshRp1VlFNIdfS/IHg1piptVmDcDr/Da78VbQ2tu2kEFC1Ob4bPZx5SX6HJOp2QRcuw9AZ/kqr0JVjRGRaImNDqRH3mwJppYD/UtNp/uX9w1WugVfMEu4IiNhBgRGbN8a2Gr5i1epFgKrVcy7UXIaMfOtKHQ/KLF0qmO7pZupTtMy9XucysteOwFcPxmKTpEKtTYQjP9sbi/UgbN6YwxGLJHoUOwjYjKVHhby7res2G/wF2X/hL/tv9Yrk8/VsC3BsQ/uJkqnADMToyjGKQm3pwCbE7TVKClK6STszObdE37AVHhqEwuH8aSgDJjAZiMPtIiiaTB+SQ0v6U/gj6IzyN4gs1SIrc8r/hRPxiKkyJl6GOP0MLbRYKrkTDFcK3zvc4+wheHH5Xy3ZXJMelQsl59km2i8OiVTVOvQm04bJXyj5Vy07ojQqKZhNRXrS3aBBQFYI9ngrOcB/DOaULbbTzwWYWZPwY4XxV7qn9bAtnpcq1h50ZXHaD4L2FwYQFzw0yrhu33U3ku2XQk77yTGCKhGJWviPB0re0EqGBiiQUe/Vum2F5dOtanq9rdLYIWY6m1CPw6voUIe2JcWMfF7b8Fvay6QikqLKXYy57qTnkTMNVRc7EMxTw0hTwT8Cp0+GW+gAQuvlrHCDY5a51H9PgI7Vwdc7aJk68aHmPdP58BfzfhX8StVaXFd7MVSZ/mWumShyNGuWW4e+Wg1Q5UvFal0ijQbnQdAB2ANnhCt3t+dkjPyM3kRr/F5a4CvPhodprEl7tECrf6UFGPxWNrO2j8kn4rarprOvZ7rO6UBFToNo0t9AeDnrFoAruVMtOFhQq6QifwNSVvLNdii5U7IjyNqj5CcYbZevNmaLisCuL9qxtCeGBRNh1bqpRwJMkf8pB6zKsx2YCczFhezEm344FnBQ4Zc2/jNWngD3U24ntvUCseOxuDAiZ8NbLICY2H/zQ0oRSc0QQkHrPoWmN9C7qbYiQ/Y2WEiD9xSCv/DwBOmDeOjp55rin7Cv4XCZFheJ4Oum3fYTfWQDPArul0pMMjwcj0ZMOJVqlrktXQJXdnhstayvK+fC+NQtib7bwLQo3xpNVDImal6P0a2BrrSMdRugdNBwUkq3n52tEasDZuXP8LhBAO8ZhceBFUcYtJHqP6p7DHTB1t0cRM+Wng9BcU29klqy5ggPlAWmtCljnfQVmXoJ8StSgNb/w2m1t0pELeVG5gYrcjN6HQF5ehSZPmrw2nyOiD67OoExCxKv1d177lxfX7r9qnLyH5xAM2eik7Azns5glxnXszjjIwCk6shOCoOq6XqDQwE7A21phIa874Of/1/TbXMnWXaamlHgz1F77LZ3O+cJZELeprxSwnQLBzH7Db7nHSptqYBIK2Ahdig/x2aJeT009XNzn8/kmKifCYK0EDvoA5npYjmhiaStIGwh5nch/ItGDfZwhE';const _IH='5c0b70d8371b8c83282326b5d2e255a18889b3515c61b0a4eb60bfaea86aeaf0';let _src;

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
