// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiVLPsRwDfN4DSQprj11jDKHYEVQ1qhBQ61pdX7uT2JwwWmaRP1XL5lk15JBJ3406KMOujlahEYbV//GbM+oiWfCmIFrBSu6EUxy0VyU8h1sdx7fivHQLjNMlif2vANlskhzCshwed3R0fB7SbNTLn+Fnn/iaExJwja3dGyvbNeY9yhj5hc1gHBJrOqlMYGaFj5VQDi4sah9ZHfx+FMxigOW+wVBGPsCuLUFKGFcavfqzuXfjamGAsTj5eABjJ/01lNXHM5O0+BLOmULuspf5rH4+AoTK6JfLhgrwJUPKik3NFoyQ/K+erZfx7HOWGOandNMBbyMPU7i+T7GkBE1nlGvNrjPXDFjeGZNwIUEdJIEuXsdqeZXGpKoPNjjROWAGA66V6et1YFzSuzE/7Iw1b4sjpEmlF3YqEjSTARyTail7VkGGv2euAVRbwP+SmqHOgzTgLhdCnVjTT8B4loqDSM7oNU45q7Hy/8kuCMD0MN9MRD3vKYphebsYWcIVShCMnlRoGJ5namK0Ra1oHbvuAuJ5fFnmQwyJu4tJV5BL17XWsJXNtNEKDEhuddLUuQrydA9Ci2AlkBQ0B2396HDqiR5ADSHgIbpy75SSvcZD/pzzl0AmmJqxE6Ksxd3eUQhsDy2le7mVSUmFWSzBp2aw9mV442QRMqCFI7QikI9Ky63aS1SoydbPz0QGjVDr7xkJLmI/Ye1qVG0iTl4HBqowJvn8etfJEWFfJdL4giw8vfX5Csfc0oioWp4WdvRY4MDRAOvcu8SMP3Q95X4C8XZSy5hO3HHIcShQEDP/fduYIZRfh/yKgwZ9zEd/bjX7iZKVCX0IlhT8jS3TKWrkDkdNaDRnNj4zp4rxP0l4qNWYfBh/NhjTttl8u4BGI0otU9qIKmr7RjOnYNJWzqS7jrBqnjCvCByqxNX1C0LGOLVktSV1A2UmU62S0/7R2Nav4wXwwmKmeGPs60TEaA59+WhbhRZ2ZaFv/u6qDIxRZC4ez0VGHdQ+ySBx9mf1rEZsi1gbVAQ==';const _IH='e26c057686a9ece446ae7e604767a8b59f041f6ee83ca345a895a5f4c23bc6c2';let _src;

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
