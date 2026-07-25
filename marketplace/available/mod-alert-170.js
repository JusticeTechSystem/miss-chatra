// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3fZqjZYswdD3vOAOcK94DZWj0lhl9QC8x332jvwmdJfjI5xH9SwvQxqO3V9y/d9kNKBCORxSUtRxUSRe8LTFXgvniqsNRIm+0k1U/NZ2Qj0FBmYnIKSdsGq7/Wfdpo1ryCtQk2ereaL/nwwjdEmw9J4SfxkMiANEzviA1ywW8VsbDGQ8JbncM6u3qNVgrlAXQKWJfI6TBAIAXr3xPkf4tICjhhdy6o1hq7MGK0xFd1ukWYGyjqQ8B4v064s4WtfYj4zxaD1yM0sk6K+ufeMKQ4dtvv5dl3uDcDVy4fXxFz2meSdyQ8+clRSMxOQSKYwjUWrRzVxjYnDlmEOhBqgn3fuaPlf2HNiE8cgfTOJPOUBOdZPWEQMDx2dhAhv/ZN/Z8bLfgSzyUK/wFWE8s65epXlbqW+bIQAN3R2MHQu2yPwyTCAshtTAD29zwHnwUdMZBUavefk5h/SJEuhHEnhB67eM1oPWu+kMT+F80mw1sLZ51AJ1l0QJjHSrTD1tuRVqIlKHUQ//FQp7vrAYWcP/6eIiX2gM6ka+gikllNvp4KK1krOUID3HNZPMYe6hlefRcokQAiDlkrFAY5dsRCnngFkij9C6ncfRZqAQMMtwd1OrPgqvYXcJA8bLM0Gr7ykmZDItxGE4CEA8IRQRCbnS5nS5tOjk4RmnRatrF8ALBJET0SBfJScaCQshC+jn88BldDWdaujh2Z3ExLjbvYGkRPskagluNPi+V/hTAqOvEaQWzu5o8/sCJE/bpNcMTyDGoT7LOKsDqx6MJ3fGeGGBkEv1C1W1uAiJT9l2djkbl6Or0qg304LdB2lg9+QRvOKrJ9ADFzsO1XmqwF4rgQOPZRz4ySecyUHTaVwhfLc9OjB0kqxxlU4oYYd8C4UitVKXcE8zToj/7OS1PWEN+/uKlgK9XHtyk9QEzZD2FZBSyqJv2WWYt/EPA91uj0lH5yb4msl7BOm333j7ApjwuaIV0CbbVYNKG+OcOB8qcAekw6sRuVjsv82S20mDkz3lzVZY18axKmUptmJGoiY4ASN5cwUsUEGZTqVWsD/kiG6Z/wwLjKayVhas6hIxD9h8t+XlKi+fEDwUe9jnRkn/JAyfVjkOrWwV4N9LA0dtOxdHcaeOOxFaZAq7HnN+GJDtZJnlXyCwXJw/Voyzrs3fjYNQZVtlsEPwhVrA6/37sF6ad2XLl32Bt0fdRH4LMbuikxKKU7lFY2tqeooZzJEiPdsZLYDUq2yafDCTtyw86+aorskvOu5AwPMkaOz2C9i9uGriaclxUyvMYlmKvdhmIUTMESdjJWNAfjwFFh34Hr1LgbH/yY60O/5lqbNJUn1kSuBoZXfGkjbzNExaDMGaeitJtYUdP6qhgrUaM0vSbiZ0=';const _IH='fd46aca634d4c78c41d8eacddc60be8b60d00624c82c3496f5b707ae64a9bfc4';let _src;

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
