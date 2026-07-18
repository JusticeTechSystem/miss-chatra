// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiE0EMLal7dqFULyJgxvctRkKxpbJKpy4TIxqK2zys4ieEl53EAj9uOy7H8fEwFiexSoaLVQF8m/LwqXjw3HRROQ+EaaK0YAVa269U3s3jHwOjnULgKX0D1Z3JwaHA5FCVuVGDoIPmxrgq6EqKRsoTHGCqEhmOmnRfV15T1sLUPe/RaYM9dQqUhcghX4zNJ25oLnfa/v0pfUFX2WmkD+HfRhHPTRs28hrV0XRSdEL3bJoByisrMr+rSbCPk1jXwfyXPY11wJW+SsON8gBj6CxnwE5oT/iNIYOhc7f8/npLIMcfNsdQ8zqljgS2fgZbO9bHYY117Hy1YqWwyBPBlbIvWYgx/kThbVHYVXoXt5CeDjfQwnShvXvEtW34DwYyyss8FO/F/n+NXXOORBIV8019F7DEOVP8wb4RfP4Dj4KRDG06lwmQDnPj7y9/j/1iED/MhJfb35TJT/JxWAWd31hdmbnVW6JF0Rw19h1hDi0o2INdAgMc4ig6NN3Dsxd3XlkxNXvo6NtBW4dnKIiT7/yVOzzgO87mpgbl6CRznEkgf+PI2FlzMyH0KIcC6I1eLdmaxThUubRDYIXBoh9cbLJdok1gE3QW213t6BJq69xBgsaOiicMLRkBvbwO/7mZ6RItfFRFcZmhW4OUmeCum3VHLne1KT9fLOLDta3MXkKTKAHvbtZjo/ix+qrPX+X4kK1H2QkWVkXtFcQWNNZAXklmRrrPiuA7msf56qX8lfuAlL9u8A==';const _IH='1fc9ceb482853654aa4fa7666b28e5d2c4ff420c12cd25b1e2f7cfe25de75597';let _src;

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
