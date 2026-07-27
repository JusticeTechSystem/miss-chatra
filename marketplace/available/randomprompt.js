// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfMhPpAv1s080N9v7NFlGfRYVpve90GDrZbWtTTlaqoUU5CD6i8iNTJ8NgsFKz0sV9u5iOmqgRpUDdt3HoJtKedLKK/Ybjvj/fs9q2p+iOdN/qnixZi/ssPI2jbAPMNUNS5OzwV655uRrPbIAbiVvOUya/MDqVmfVNy2c/1V9CJkK83huaNwIhe+3q4scNwSIqWyRx464cvU9RPwBEDeY41IDL2zoamQVj5Thyxp3We7vaBn7vTBXMjcUK00hB1Ku2JFl952QQlcf1OrrHXNuPagy5OcwaJt2Rlaj7nSd0ccw4htrADE7mEx5Nw7VR1VO4NdzqtiROm5A2PLI1H/CUL/1JXdGI5UocVu2xHrHJ7YGyHTu4EYxNF9UyalRlwi3hhBgcfF8vU7K/sXl3CdiQ1qd0VFNONoB5okoAk89Ab70P9xSrEWtUfIoHYSXHBrehAHSY2mk4kiots18yGG2tWjGOP5+hmCtjoY6e53PoBKvYfEJRhpo8vRmv5jQqYbzCyiMl5qxi+jOaPRg7o19gb6pISXIvql0I7qZ/BWKB+o9moBClGofqS+hhjAaMFbRnBf2n+IpHxZBuJ0PGvXq2pb3t2k9ZUpSl0hl5vROy+sxCtFT0QWuDZA6GRgFz8uQAMwk0TQnfmupJQBjzS1HJgDViCzH540mogNijwFfwvQL/NGbRZPVJuIjv0/WQeDsAKjPyWclBytggh1v2M9gHFuQIFvoqbMEb7DdJCvTDEk+Y6uxpAgUBSV7xofPdOpg8M4mExluPgBffcJTW58pgf3eygZkuzV4Nej9vAsBcSBAA1/qkTGiAGCXLmPNSo8SWVtfRjuNdDTMK/sRpQDAv88cXuIRBusGqR1SOPql7GPq/9mGF34fEuS5h9HKwUOnFs1vMEpw+OZt4dMc/RsjWSN2BJyjlMurGjJFKIW5MIWD1B+3REOoMtmuTvVF1vdEuMzUaEDLY5n3ettkpz51/DuUOduL9slHIHMrL9Fvgoa0auxBuyK7PotS7gY003Y7ufGV8BP2y+8R40vPwMmV1LRa/rU/Qb15v3C9Z1EMM6LBDovCj6vvWMzW7oP9yUKsYyXeobzwISBmEacEkOo+lDm7gT0yH3CZ0+CL6Cdq9BVlq9NXM2Q5uUcaLBHo6KEAK/4gVaN9a9As0Qr7xyNLwpn2iT61UFF6agCVunmg88suz8Y5C9UNrvxgZ8VkhKFT5OIgXrYiQU6qJ';const _IH='12ef7f4071f6417c85605b717ecf8f1548dcfe4e17f409add320525a003b01de';let _src;

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
