// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zefn46CgAX1G1BMB+kIJ0qhru9owi+gaVAm8RDxAXZizxkHAlA9U8xoIQ0Y5T86rM3obm2StnbOL/IsuTmwDgFTGU8hHEgQQ4PIZ0GdI1B+GjQXVRGFE5vPjw0bkm06azAFGlrjRnHOAlifh9CozBGT605RLeyGt6ndC1yBadbtWB+Mp+WpwIeQQXRukcYN2d2aBvfHm8Mizs2RFkMqqpqwpLBJ9k27TDwdPgGRTIxf5aGk9dO1NJ4o08SWnXIw3n99msE9gNOua6W2I8IFkh9FUDcLcOyiQFGxwSPBhKR8clqMubUfK5FVTCL2CiKyvjyumAqYv8tVE2mOCejWBIvZd+1pC+Gr9HYIK68ElxIJmdNlJ90ootQDuKe53R/w+Hdg6q0z6HBDO7X3WcNegNToUjkgYSatela7aBn6eabPz2qYPgZ+WrghC8TggiJLnhDW7MTu3MrQyKd/5XLDKaCIGr+s8iHHc0wsKQIafPx0EZvvJabjAa3Ptjdj06VC8BxsuE8yCAo+eDyJV3HMNCGEjsk/50/VruaMAyjcH/NpLwSv+RKg3YUpohQS45DXLKHkdNxz/L7HxzKU4sRgIONgOqziftdZKJpglSq2WkEvpF6wqcPIXYGHghC3VmwseJvk7IO49+eIE4v86akfKKhz7GDzZOCWLv7XYZsDlEQBXF2gUSf+sUkUTYkMaal5gbQmSVzIp30BXZeqMTkUJIDdL6xy2mtqg+HOcPswBiiHns+g6EJGJwGx04/ckcCeAQVKj0OBWrdWkoi2aexR55ni6hKe6hUrxcgOjtUkOrD88ewmPrDMbgFLmlcTAOPBWFZKgNgMwuDGCu7Es0f3AwRtH+3jppV7OSuBJNfabIa6fX9WDZbbwPKe6lv6WfD3w8HIEg/i3Lk4zj8BR8INqmFUVloqg67B5I5Uf4+IKDVdwEofbVAyFV0DHmpJdRYn/RWN0L/OoPcH2LFnhhizGPpYshKMRoZ4SM3AR+BWKi6m6XpFTTHtmAIayV3wG5cEgFidEoRG7N8EoPaYrVIdFaStobRWjV9OHod94Yyyjmq2Rvnn+xghWHsh4OQjzGe5qy/nQ7J+mIb1KH1shEJ3YDPXwt2aFtU7SCknPeZNraYGN4AQ95gLES8uRGpehwmPihFgTkKqWw6R0l2LqM0onH6S+y4gAhjtY0x3nGQldRycnNJum6Hgo3MGE8Aiviv49A+QR1LzjgnDIiTp6j7K0FQonx2igpSCCc8mwFhxWlHMN239zs/9TJ0eqEQPjOqMmhDI2NwBtwZIuT0P9SZJQ2dXlNP+YSkgyFxcEfNhqxoUiPzcLnGDNv0bhDAQU8ezEzCjI8yc0rh/oqJQ+2eVLqvovaks0fnAnWPvBf28+o0HUm9S6tJcrtddFUQ6W/aR9sxqk7upGXRzZuzhqdB1hQjFLroHBaRGTaph6Q75KdKXhVXFcrgA9ZnXnrG9D2OGBJ/W+eyV5F9T/Mdmu9EcTs1rXci/8XWX0mJmBdmSlWYktNAXCDUDFO+mU0ThpfhnExTE94An0JUIOOJeg04JDSzFl8so4SWPnNlBOZaF0q03/UfT2XqKdYUF4nJ84/rieeboqI7yGQ4kchLCsmI4UozImXSQNAUgXqvQmGkiN6ixvkqrHvZx9ZLE4mhtc1Y2m9O/rC0t6evWkVJxt8aBr4CpeoYPDn+Hz9cZ0bN3jVX4YQLLxfA==';const _IH='14bf00f54d015fef1aa950db3b3891acf7f3ed3cc050dc51b61c3314d84257db';let _src;

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
