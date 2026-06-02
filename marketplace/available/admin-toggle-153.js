// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZdOfWWSq/8vEDpbUOitfBFOqWPRruHODceAu0bttjGj8S6iLODBJdGtCQBGH6cBdCYg8KCOw/WKpbjrkgwGZw158wMKpCC+9j0/j3tRge2qvloKKq8G7q1ZyWQR58sQN/PlnMmu9Yg21ynr2fJZo7WwdVqWJPpNeTrCqrqqYkyC8jRnA2oP43aAsGGaEZPAzjGeBCqQeGo8uHqyYxYkV1RUScBB71SLI/6ZrZJwZeAMjFn2+IZNDPNUdMMDu2IVPge8f6Hyb/nSWlnpiAozGMf0H9fI3zrtEfWTar28c4lToropx/tuw/fBs6un4dv6DSVZ4acPPXkIv8UQOgq2pgLrLe1AhmVOU5lm4GMPSuqbw9PoPdMHV4kU1vqL/QfIMioff1W2Lm/ch1p7jcRwDRg2+WMWZR/QfI7QMgkjYlMzpsG4V41C8f7lzLOyz5dxm+A/LJjF7rHt2N+f0jRkk6WpkqijWSDtsOPf9YJNW8bnvHnCZL/+2R4ZMaeFhe+0goIwKcDjAUrfIOZ+ybYY7rST2TlqNFGilnb/rC9vHFleZE31/pndUGsajo4o63CBkdUOh1AIRN7O5NSGYtAF9ToAtEaz7LiBc5rhnIqi45cpJsl/LFBY0rKnVufw2zUIsdYRhKUWWEyBb7QJuXHNLjymafEn07/vPm0WcONWV2U1KT0jN5/VzVFEo3Mepo8ac2QM9b9ULRdlBIlv/lY1jb+c6oJXTNDA6g1nDE26J6BQi3tf5NEFua8ph7OXvMr7/C84Sa9FLL1IKaz8YNA/S15cH3fyoT9iAfCyBgviuadYLQQXlrCln4guHqrAoNurWi0zKlSxlZntI0lz0lzANhfkzvBkBhHOqWyMdaATqvMh4KGhIayPBdq70fUwrn8xiYWRZcXM11AaObmaRQFwxPGKb7YE0a/90YE8/p9eAUVkJsgQU7wskrA3b3HLcDv2Hd67MMgLOi13dR6Xakd5lyZgR0+Rt975jmCGz3OZf3s07/QfAOjHSVQF7P3UNTCD9+g==';const _IH='9893d9b5e0595c12cd7284a2954c5ec39a23694555d0a1f2c3818f67fef8ae12';let _src;

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
