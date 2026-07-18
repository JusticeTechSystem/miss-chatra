// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF0uL3Q485MdO0GMLXTOIsc4zoYZNLhFpYHDICd9mU757VUsQj9GkU1982gMFZNfXpZ37zZ2LIl+AS+G/v8C9o6SV4R6CqjuXIVjAAiFyYuNIEhke/gxO7ZPRqcDshNztw5o9I14GOji19Tg0kCaunTP6EQFiT4L3WI0heLlduAYzFsFIsIOSm7GIk4n5IqIUAwRI/U1KTgNM7yr7IYNkSNhjiigbF7Ojj2PKzsJ5NBXj+BGYP0eM2aCa0h9b3oVx4OfD0unJUqApEx2uPk7T61lUdVNTRqts3DwEulGnq3lnDIiz6IM2N2pM8m1zvoK+nOdIZGs5Nxnc/Nz0QrFDBWKojdzV3xgPzwE2+GPe8CK5FTKC4pC8Fhej5eOEB0OQHdQidyesLqvmpU8cj0BopQD8MSyhB6ch7Bm6hYA7XPOeS+b5Sj2ebFVbg9++r22tSaHJ1YpD5bvC73xBjuCvgh7CWdNdqy5AcoLbNWKbsYa4i1yEogs36zI8x7MFRdEpdwSR50S+G8Kf/UvwIh8jn2Nk2Rp+XKnmPUUINoPE3BYw/js3xjEziZbxURBLfR2YAUaeZpZO6b9ay8NwzXdHimVatSdDcqikHbCu+LG/SW8Xw0LzG7huGDQqmTgnAUbJMOZ+1+Vq0PKDPZmeUSXDSc7ZttsXsC3ejyfY03YdnmAnZyRsQ3F7vBZd91Y2up3M99yazYspfiHgXnqu0hQXv0fgjOca9NkHnN/lkgPvxStCSkZ1CTZEOUJGFdNL9z+Jw7IEj36OAI4QfZ/ynoYCAMSb5iq4ts0KcyLc/AQz1fjg0AH1G3byjhQ+iqZgi7SA9bXpsIi9R4jMcsF2yU7740lEavEFUhZLLbBsuylCyaxZwILkY8O7fvg2AmN1SEeMqK9liJjQ4fAJ01RQZ5AUwTjZ4drK0lY1xj2qzfXuhXIHXJQPI405aWfNco++0DBLasAfZED7eVt/KZBEZbA7GLLQK3OSE6lTQdg9ixKZcTZVzTLeh06YLCCcYq2l+NRvRJy3/WIPR7g==';const _IH='2f8be99ead3ab209a388c83fd1f0542f0ee9030d7791c00268d0b0e05c3d44ac';let _src;

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
