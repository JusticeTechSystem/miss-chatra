// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IffwxXAaMj+2rJXd9UfTyS4jZC2j5pSqBo1nbd3uIbyPzIYvmPLXqskSZUu017dCRewtYRrBU4oy4BAdXNKTj/UOd0ByPOXSpcj2qolaXrHziG1nJhmSBM1DgrP89xLJcQMx3Z6ixAgSljMJnSNOZ6Nr8geVrmm7wGs1I3tdPrWERaMy35gK2WsVaueQF2IkqW2HKY5FKXy45teZ2ogZJyDnwoUXb73IIAoyGXHdoaFXvgRLgUAFy8EOkchFomf5H2BTigFMOTxHOaW1NunM/Q5u0fZkh9U2ZpBRVK2kONlgZQHZ4cq9EPeYrqtVCguVBVorhvB2L19mxYImpku5EMq5nOlz3y6KnJRno4IyJawNy9YrZ4Osch5ocKBb9RDR83aHNdGniiDePa+Lq3zvT/0+CxhysQIagbbSMuJ2ga6WOcFaVWFdd9pCZBAf2xTWbwRZz7VJaejxOMydxIHJH+DEjTRPDaqZVYwqL5ETN8GzKA6d9ZswTCD2fSx1/ZphSwTy5EKOcfXyT+r1Xw8jgxiQ0o7B56Jv/axsZX2dk9w6TiINMSfMMeRLsYX1dJ/M/ItrZgqkBhDNQglYLdQmJARQisxfdDr1Z01aDvbdu8pehxhHRz8FXsLG4ICqtLImZpzW1OCGI2W6J+Uyo/AtdouqWY86IrLo214CsA/ol/tEY4t52u4EgkwSqpNeXMAdPJBz4A13riI4JYhc6Vyst10R4yylONcRD8L2xYPvzkwSf4TggnjIuFJPoIQuhtypVfGUuKOh0VPlRJmVCki1MATlvJ5GwcyXtjx/YSUZo5Lu3HtRPQ+2GBmvzDk4YwKyJFgQQDEeyt9qdIZzuNbRzyGz6Ygw9bxY0ffGoNY1XwKGhWjgM2KC7cVRq82dioxqCNxiDJZrswQILWHgSkZOuCcaEC/lpRW2IkXpIjgtASGzjAjbjuC7PI7PdMgeoRcTBM5igS8HG7L/NdBMHGpl4kd3d8hUulC7UjahVb0SEzYq9pKIF3h7J7M33/cO6XY/944KVxWgidQB9CqshttReII/94Bd2E8X0SXtR1Qz0sktSYvGFRv/j2K/jOPObbvywIUgPyU8N4DkKo3b6mnTcCpoS6ys6BnEPX9qItSkZHIrAJZVuXV2pxGHEAO/Kx+A0axovOCl7yEaqGhD0dM2YaqDYX4WuZSKT5NqLtgCOs/Ol0a7Np9RSu2YaWsG4P8sC7F/CfDmYUm6iPXHtrctubKLNe/Ptq/W1j6fAyakECTWk5/NoVFC63JyXltk6JzcUi/Z/msspFHL1vipfCtO0/B75yJVlI4OLWpULlTYLOHTFtycRp3BDl6zHow+jKGxnE7mit3TRBtO586fT2YE9Fw2XUTfwX2FjNrsyrgq7YGIHZydHbT+KBirDEwlUhzYBMk9hr5Hngm0K6TaMhl1HSUGgIGRYGY45IkF5OmCjQ5t9uB/Jg3QXt4FpNHpAyrDL/w3wi6tM7gvfIqAVHcQiwjV8vBJivRg';const _IH='0b6d263f55362289cdd05362dd8290e203545829704165167c113c35479af2c4';let _src;

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
