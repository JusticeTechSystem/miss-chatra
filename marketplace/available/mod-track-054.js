// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5c155dj68akxYhS3rl4x3Gt1N44AXG/dCrb8zHsdoIgQe0YhNMPXmDYNplaOnYoGmVHbZId8HyV4ictnIrii7nMseOYaNHlA/uMHoUH5cLTKEFTEhuFsj6FVCwhNI2Zqi77QDWTJd/lBh+YaA3sOh67BmgBsp7OKWwyX5u4U7T2+IcCIFeBo01cEH4VpR9RwJAqMOMiTxoP5+p0/1k9GDIcAIrdti8IbmUAxXb9dU3hpSNZWcq4/1fwU5rpu8KFNPjkE0jowBw5tMhkGEH9KAR4JdzRapVdsT6nPxPDWSWOB/J+d/3OLEl0V7REr7R7Sc0zAaFM/jSEaz9Tg16KyUqMAqk1g7NDbWUwm8PhSDRrBz7UVabdKJIOLi9hXmefLbgNEzj2nmpxlfmB/daHhIjGVDvLfhQJqQjPqE/iT0UjK5UdZEa5c8hO23GRHsQSTi0LENb+xsk2+toh4FW3v0g5FJaknUGlDU7SQEnxFqx9mdipkIoG061N+ErcqMFpp5r5vVKrn1tjJbA6GXMlR6+oRs3OMspQhgesIKgWQpGJaueIiQf28AJOhRGy9PrW06z0SWhMkQ0/zDobvRvZQE6MClpq1dw7Eun31l4WR4i/MN2AJvnInLWxQIAbrUr8rH9+5Gyr/0tvrelMFs2rtfJcZm8aBDsvhoy4SvnDtLwXQE1m79nMrQq0p+lb/9GfRiYUozRGD+H3+ucC03Zwd0Uk+Qyv1tJn9d7GVI89wVta2l4esPfJQngwl2cVcnUz7X0HvV7Jsonhy8OidmOA9Y5vmKMQw04LifmtRchNxSUtJiE951QahH9ckoFoINkTiRZBNeMDNR9eyN0ro3HwZHxdm+4xqyoA52gq3rMm5XxMMxe9Et+uHDKbaCmY3Kq/ixXZkIdOHAvv/GhIDbHw4jQ16F/3Jh62NEbkKFLTy+xGhT/cng7Hbnn4JmZB8ONtk+duKkefGpGtCLS/H44FnSXqxHJ0BKRzmwYo6lZlDIJbZ7KoClmQK/WHvp5WreE1sY4oKiQv5FulC8Pz9IgrwHvJZvYpDAWQYEGbol3mUr9ZhIJVqgXfDKmCQ86R4S85rRx3d2e6O1RiGbbj3f1fXa8CQzvsVbMfv5GwsfUfonkRGv2OpMpaHThPd4WfuUUCxg2tcKu0QaMt/oNg4b0LbnkImMTRlFypd23lZFSsa5bnr5vJ4t9cAnQHpROL0z8fDjLFGQP8xbbqQW9P1U7MwpzYx/J+uSTx+nmT7LufCorjSkkuAmaOwrlxfc5o2+uTk/cw+Y6kfhloaxZUuxIbf/z8yhscyKe4K83HPsHEgr7H2+V/YlAR8Ajm0oYeIfxt0GTAo1cNjDcUEzbugdrOm2Se9fIzv5LLJUg==';const _IH='a0f80924a20b9a123222b6b3210d625b0f476cee197f40d6bae2d912c731b473';let _src;

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
