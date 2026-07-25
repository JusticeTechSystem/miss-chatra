// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4JA4RGjDkfuhqnvS2UePGC8FbRpAAwTnQFZM+VKobQzMXkbx75YoC7bJ+i8M8QdM2oJewUdFkPa04en1yWrbZkOjtXjTa/O42fd9Bvw4d3XPRhgExFWge8ZPt3r2Un0Lr8Rq3KYNI7ZfgppPWBUHBS2RdjvNkrd9LfcyIrkv8EvGXKhrgaDCODVd81vZZw4UuuXcB5iqcAheQ4q0wMmyGnClnyt7emx0bTrL165wT3C8hOZJJ4Eg7DWBEMuw/kxmCuLfOSYphikufpejQhcFkP0kAk/yeSdNklPB5gtQNrta+srZU5YvXrJ3iiY0UqNZtFo/JhJ2U8SL0AmhjBpbQlb3bgQcFeNTyGdvmUOzaJxlc88ihRuL7j2x8cia6e2/dxsCQGrhZWC9lx5/Ab3ntXqWW2s//zUE1nhq5J4k3dU0IKgG3Tn4bjKwMCidSdxiz2rKf5VolTlAkEXB7eQ1usj5Mfjlj+w/24ljcnBpCsFBXXMUaKut4X3potVCKJMxGHWcELupZ4KzhXo1w8e6G44K8fG6+jsQSi5hRRYUQKipAY/sv0reZRyK7cako9bhjgYBxZ/zG7MeQ83UlVIOWo1fWKDKlnYyCOaSNFNoMRpxdvNVkvckf6udRNBOMM/rFJCWsiAq088pv34aQKBXfmYjV3my6saMZlYIhwtmkYxpjyVAKfa36StzyKXes8CK/C4tfv5CmP9mVo+vJtHZd+CtDft7W9B3NaX2kgdWBaUxOYyHaq6rg4+71G+U/aKDOU7RwvPA8uEPM79N23OVXxJ7Xh/HXT1vVVsb0c9u2BdgamGDwf0QfBVnEfbfgn2Q1k7KxjMwwSTGvHA+Q94+eZ00cPBvNcQM8AqqRC4DEmCbRfrwpSHjHrD4KOAZoQlLl9nyohbddW2uTy09iDMTMGg7deImzCusuWFFh+pFPZMQU4143LJNQxm9oZnVaQ7T89u7x1aG2I4hQIyFJaDvYNq/X0/aWOh97x7exM033D8K/ARn/c+JmFclfsJDiw2ueXsEJ61JHjcZqY8yF2IZymZfX2YShpbSXUJSnvG8cbC98e4AqWCv4NsphdB0xaUPyp2KnjVptjpRfoFw9T4+9JZS/q2i9RrEIBN1t0kEY4XIj8qTuRZsE5sJ0vvL4pIP75q7ZB9tCk6oy6tvLSFDlpI/kVlA46csPTjL8iWXczswONOjhjNKCPC7DPY5swq4NIzXuXtJfUNkHIsXEnuouZi8yH8Kr2BSi/4pjt09j33P/aYV/Xi55LlXhB1fC0sNIGdiP5QdaYKcbzvfWWFVS0y061KtjzxMSjp3g1mBh6iks9wBUvlUjpJQoiH3U1whhkJEyXW5Yn9vhzfhYhkRcB+rV/2f0FBKBv67k8M2boMzfe4ZLUzanbHEVRKg=';const _IH='9da7caa8a631b3f70463e98627918708f0e06bf5e844dd0c9ec4aa507b8a3a63';let _src;

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
