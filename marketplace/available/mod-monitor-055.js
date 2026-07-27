// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQScTVSKC5WYHxP747puG5lQFIvxPaksp9t5+oOC7cw2dmyEofbfqgyS75MVwTN32Qp3TrxKoF2DNC206CYgXUekXuMq04tqwBfpsIQ+VO2W9bhhqDiYq6fJvCOi0HBaALIQYeXNlHnHuF9EXM3vJY+gmHmksK9/AInHL/Ly7mEXVioWcQE+MtEDK2jDSwR0sLqT5/CZE0Kl9E4qZrtMU6eS8AcWr04RdHdk818qujShLlzM1eKPIILepraEcSE+glxgiVA6m/gUxBb1dg/EPP/u8EYbMQoZaW4o5ae3K3XvwPdMBBIIsl3z5a8pFZw4c3XTjUPRJ4wOB0LewtZol2Kh8qOWrtDOOinjbxu3SlrKof6KmsOza3QOdN72sO+uXMSyhcoQb+jmnRJ/k1NvzfYKn3B8yaNnCxqOs0KXL+v1Oy6VZiAvdLBil24Upi5vUlXhLeqeLHeejJHQ/pLou8S/bYP34hDEq5+GIy1beVOra8m52Td/mZXp4eAt9JuzSF23pbySUtPAGvaAoQfpXRSUSgJGCFQNMI+VM7P8vlCKWblELJtMctX85pDJkZ/1IlHdeJb0Lf31qX2jQCrTGqBGaPyxMMlJF6M+TF8HDZdEjUC87EDnqKpdPFY/MeKgO6AsWLC8KXFxmKChHwTkqVYzf1mp5yYpOQ4PNiuUMc/HjTrN/2g8ZLKxGlhGvnIHiNnyVPRzJ1NUuHpMUN45+17ZgEtfrV4X9aAQfjUMYyc2Q/xHOuBpBVD6hz7G23zGN0gGTK/UaG5Obezv0nqhc2X2IkaJmxTY9ucOmJyQTcMGUPwePGpKxFAh4OPTHbvHVlQnJZlZus/BXmA+OEZ0GEnDej8BQXDRLCc1e9bR9R8221W0Wtw5R+o+9vj5Wjs/9ybZzW1LopD5BlG0jvXbqjE7gO18DthppegztlE1LJwkEqLDw3RdJ9fVG9+5GWomfCg47rjzHUYyEGYd1p4kZMP0rvsUze0JekmgKuz+Raf7BT6YgRaETELo6QR05r45Z8lEzwWCUvDV8Di/vuoxEu59+ECUtEIUxJ/sGPjvySsFGZJBQfxsIGWmdOVK8mQjx/PSwpYN3TeTe8q0YItw1QPwDWzaEZ7HGIBoXe8vkrJc8k/9DqmnrcMy7gAk+IdvpVVWH7puREDc0SHqlqqfTkqqj+KlTQ8mMU5khBdGOc2YgnwXjNEp1V4uET4YYDKe6ShqYXoQepd1BiZQyXBXCwSmLGM9T/gIJlTHxzLKxUdT/MDowGWXlqqqDao9DftfN6kQxfQ+7CEUTpwFhwa0+SMoy00ZOi+MSawSLYWlkeMzhLxRZp60FqsuMmhw8UzWSj08DCn7QsgQ/zWIslEkPPV0UVbkI9PDQ/iqxeUVnB7lDeJxJsZXq9ivvnjzIk=';const _IH='183686d26e5d18f29a3e29c9c227bd573d5763e21997b6e5cee9d1a6ed6b0c4f';let _src;

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
