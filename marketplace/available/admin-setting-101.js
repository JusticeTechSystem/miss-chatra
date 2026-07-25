// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2RDADK2o+yARbXc4pRfrbDFe7D0+tf/jhc978EXdMeTHkt2Y81PulzNZN/e2yqFEaBkzSyqSQdcw7PdkOto5Ue32pIrf9DnZ+uy+iPG9c3dPyetQpC4KMbXdNvE0EKGEimbo5/JqvZsBkujjcZjTo0yLmIdRMJ+doZdp9AKPFquXvx0/bmU/Nx3mmNiVu5dPf89mDHt3v9DXALOhqSCtlB8eyyNmdovsgDaSX1oZL7TCifVLfCnHqDm6PgYSK5gQtOPG6F5+Il24PQZEnzH5ssajBqSVGhpWBkMyqFCHFBVxK3xKtYpN7slLc/KOnBwX7z7ZVGXfSkIxoL1dL0Fm6RaGvWMEK3CNAT3nZTC+msWsomY71nhUclDIs5RtZFtyHqTHrPfVBWDUrQrGd0g/agk9W9yraiq346aGnEc3Lu9F27TB6AvWKoK8BA9E5iELOThOqETf8/UNO6a9IfGn9ERlxXMpRLLgKfxsoAqGx/MmwApyivd4TaRbUArfUt50/ulUfks7CD/fKMqFUbM8EqbpqbJGsdW6iKVQDlGQvmqSa0V1Pmszh17UMWUYqQs8Xrn1YZXoLmtiT8gl3oaYoe3xgMT0zakagJRwF9wYIzCJbZmpiFtM07IYjPF71V7uuEeYd3lv8EVQKl9eiG38//+6dwn4Qr0nS5FU+FZlR3bqM7JwAPejfuRJn4rKZMgIQAn4VB1L1HxZkFhhHgJcRvo64yDfL26UYuDPRXSAtE7AM+1gItyNKtXXZPK/CMZ6++ikBz7TPV8H/d7Wi6hRaE8yDjw76pe+xuYmftKIIvpAwzDi/5ZY28d2KSl2HpMzjioFYo0afhbCRjcn5AFOKGIB73wbNXphgDXLWAt22soSf9qQatYxQOJQcWYP24GyQvW/ka9TfB/Z+xfox7+fzUQEdzh77/Px33MvrZfshBs8ZubQvZSUl64d9A8wiDG28/gIW+VTYp04LUDDJrPaG194nrgfa0walXVfXbpamT01IdepWjtKQ+qauxfjt1X8bJfGcGloYRg==';const _IH='e2050457bc6a0edd38de22e45efd4e9998a185f4514f5bd9e6291d929d83b0d7';let _src;

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
