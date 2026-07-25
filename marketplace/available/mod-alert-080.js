// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR12OszqpHWiO0tvOeNHSGa3ddJhkiWMe3ckYJNISq2VNQpvHpWpT4BuIhqvR3cMNHU3dD0QmNtKxUjVSgCazucPnGXMO2kXJfo3pkLzaXrl3HQZuP4S5PpNR7eI8Gjx7IbPRBmN9c8xYpQh2f3YS0Nb9P6OT4hidOqMmKNH9dd94UTX+ec3wdaszWCJikisKDIM8WdkB4H5NfIpjOUCCX8KUt3WQbtFqiFNfboqVDZYcHYIfpFr7Rlb2RsjGE7x5l+w8GyYKu0qFYQQaxXuH3DzQLZkdj8Yk2ejNaa/ytsj4qM7NtWj7TBRq5JycLO2npegHvQeVV9Q5/LysA9GJkrvsbtk0diSfqfJvf7twW595m2n0eWTMVADKWb0O2xVClU71kvnpy7MIXKbqY+Pnv0nl6HwlZlM6h2Hu3ChcEh6OvmnoYARde+z/760pCk4ZmvSJ3ii/h9V1yBCZo3WrPwlmqBbulnp8BoJh6YXI91bls5KNqp0CbVYaYbEAkUnB4+p3wyXqDNaFT++G0evOv2Km1XPBwaGizjqOfpMv96VezzNKLI2LrHjN6MQmiYWYKOjKwEwun2sOcNrQmSmE7fKK7BsKZz1ejpaN4/C7q3/qYKGF+n0WsMxX0SNQCvshBaDlpt3YJDp5NDIZ/qP0LZnNU/gLTWnO1Ja193dAyB0dr03EaFwPI8vk4C+KyBet79utzPlW8D86N8t/FkmLa0ycFtvekfE6tmDUVExTdb05+Okm59rK+75+CqWxOMUw2CTGMkZu7iG2OoOlv4+gBfyl8HZsAmXUnze0xzO2iuN3pBTjNNS3Ff0pLP7hsUoaL11Kl+TkCRmb851+ZC1ixeRu5AUpaEUfxJDrZRmNQDdT4d8n+n3fzU+CdWB+bjmrjUlEjEMKEWMr18+1ogldMgeglcH57EURAL9dTWxnB2Y0Cl4CX0Ext/P+QcPHaiw25DuXTigYoDSVX+jgf/8jaYRMwAkq8Q9b7bdYIQsI9vyTyL3AS9E/AtdPe1Ljyh8qczzuJKBDnCDxlWYtAlxUnvXLv4EQQmttI31bXQvgxGgKuiomi8z1r2L5+EPoV6L7tFd0MFfZDVoS3pFDBpUWT0GlbWRcIyKu98WLi0DSo1AEJk4hbXsW/YBIfXAKnUEYfKoZ2/Zqbc5DmWhl8hPumeDEGd+jyJaIQU/9iNAZd9CaqvRGiw6FQh1ibFrg5SmjRSPCZJFXob5Tp/F7aJlmLEzKfCodRyZl8SP/XpLqzz+J1vGwe11Qg4i+2mVU0S5K9jcLtpU2zPJfnUrmNtrc5OzL/romwVARHlGl2kyhR5zssdM/fpaiU5tbO8p/bShBH0E6tQ1zMF3hypGp1VgCBQsDR+wlAX7viD';const _IH='094b21f2a7eac24e8b8e787a0556e8a7dd1c24e38c58e1d9af12b01a48b8c538';let _src;

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
