// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLcc3xjLZlXkDOId7y+b7R3w87fxS01TM0V0QWoHgY1fdGb44xnUjGUtT3XUTEoMELao8viLnUC/J5IPyfoIG/nnhtb+cOIUOczNH40utQq9Tylf77FHdRFC2GKmEAzMgGhoka1BDxaJGJpa1l7zVnyniw4dM3Jp9w5zR0StX6+Z2W7i8NF+klz7lm/pvPQtvZlkdEfI2ITlN+d49ruI8uuIhHphezy7UVw0fO4yntHuGpLPQcdycyzkZ+fUiGxRWuDAnofaeHRwMMRNiKeuV4uUeay7TIpPv0iupDZQlrDw7eRKGX6wO6EitMPbGURIu858U8JfgxOxmAPsi8PkrmdF4Eaog0dWrFbTCkeuASBmoFQES1515ArHFGtZ6PLWNtJQamvpc6daDcY09Rd3SkjGDHpR/HttRRZPeJ/ytj7PDjVuXfPKAd3Y0C0R9xHaC8Z6yePuG9+MwOhzu7jyFXZLyHCluckgfl2+YkvI2zYOoyBPiqK0qbWbJ0Urfq0IwxPQsmDc7VdOOqkF+M7uz2ry7ZaqTZyAUlfAyvrMIiZeaVoebLiVa4JiUQjUrZGnnuGCGSQP5IfN+BWczpwL3TedyVFGiTuN7QNZ7IOtl5BRSRabtjSyNX9zc62LKCwL2riQq6Ws5/XC7CxiM2pGmb5VK28EY2IS67Z5TcmyBTFuWWxMzxJOXxyEREsWuRsaERk38vMJ/c4jfXiFQ1FUShEEIFPx43YRdkhF95R5nZGrxWhTrUKbxUShEi6fXTc2L1oxZQ12eVfe6BzQX/+JLGOXHmnVCOhReL3T8A35NsATSrIm8zo7BYK8xEdSXmF9KtIsrPGGLtYsxtTKAZAD5bjcmjkGwb6rH3MPAB1sct2XfvuFkxAkUgmvJeNh5p11wz/8XkWV3jda8oZQkrJN/ruPNy4W5h49EnDcrojxzRQkrnhULxKlM++QqtpKPf+oI3tLIIyjzNuuUwaUPcrlruL5mq4M5iagjcOmCCIgwZXNA6UGRvSc5CI4Yd+QsuEPvfiESRf1YbrkkUaUVRgYFZdcljZc0rm7OZwFkC+enKggW7mzLObykeCdBCzC+Cg03zArn8pVCtcA9OG/Jka8VbGmxllyr/LKhgqRrH4ePCB3EgxsI7l4JAnl8BQ1KN5lCQYmi2kLBxeWdnjADRBBzO8zuLzDBsJLmIFJHXa7o6v4gAmkSC5/sh0WQqdpzZIFaZ8UrFWJ8nr1fR5fqasuvGft6sFad6lTHHPcuzV0aBjh7lV08y04ZKqpaz3f0eveolVuZw34KB0paZuqsIeOcSqBySdTE7x4gdBlPSZRnnTqi4vdlbgKcTJYYXUT4aB/ww/XbzGlRJst/KfW7S3APReDV5bZ2e1RfmXf8=';const _IH='6effb07c922e3fdfb7c91e5c69e28e08c19f2144398cdaaa7b07a2671af7b17d';let _src;

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
