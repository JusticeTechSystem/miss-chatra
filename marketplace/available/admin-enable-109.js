// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moWxPcThh/UQau5jrBQhkpSP1P/f2Nak6png7TzwuhBPu4qI87RRoX9ZL+NSARqu0qW4mwKSf3Hj20XkadxD63k5uWUXvqLMzbEXFcB7h/OLNQoL7rjreinwGD32bWfa0j7d4K1c8uAMRe/XkHgHGS44mHLmIW6NFBIst7+jBkyVX9K5WDPei+c06TKxR0g5ZdOcERbee4SIUo5l0lgiHtzW4iYHlYfFPhpencTEjF5YCU4LIszXU64W6zVFHouDZTn8YXPs2h8XaHf+tbP22I6qDTTfPJsDj9Tn/3VzFH8RFgVsYjSsvLFyOfnqwbvwN4IatDVZ4+u5Avz9j06myRyYLfploY6Ji6Givhqf9kXGV/8Vh7nYjEqqCHxeCUVWyOr9iQ0tbLPXpMfHNv34SOmKjy0TAgNZ9z5+zNlxkCSS+O5jrkIJ6MpbVmZdNquEKG7AoQDm3xWYeMFQGAzqSpmqM0oVDImHpdgpPWIoTsFN1kYAGMnQLS15jNB65buS9AJFP4OT84Cp1oZD+Lu2QH75ejTLfC6qFJJOJdXgOkuv9wjxLjcFR89rLGom5xBJcffY4HvFGb+twGxhp4WSGdHkNnJxi6PbZkd98Q2fPktAT/Gla+GDJDL3LaIS4kHEqubXkEbUnuvpFmZSqdejSQ6Y9J2IjwO59yzBql0j5HrM0KPSc1bVX13cWIjVKqeHIa6cBKprPwlpAjFpONKr0Skoto7moHLhPV3chi/D8Sps3fNQrLgXGNbKQ5upMIfuTxaOkTScGlhMNLdVQASlZQ0Iw4KKFbjFgTejqtDlHsK4OUdMD3IOjisOvGK/SquiA5FcxO6yU50PGgP8KyraQ6AviBkjmoHmc9cPxgwuDEl+3awL1ZuaRtybA3Nkfusvw6GMAYRunC/1fKImxPwR4tRJxc8QZ0ae93ZB++R3QNwiMPrc4VhsQsRAjnzCXdb+d0a0s/AUXgDvbRS0R685sy8y+DDzROFg27e5x5xQtZEsF6LrgrhPDSVB70hyyGgCjQ==';const _IH='7c6f14df66cc0a011f0e8525b7bf70748c9979495812668d4ac38d2a4915629b';let _src;

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
