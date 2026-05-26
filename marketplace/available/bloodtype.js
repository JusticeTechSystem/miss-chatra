// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1rIMDTzb37REduyAZVB2dPbp+GbG3LpSFEZj1cY6c3+wR6GKGBiG0MNeqP4ozbIwEJ80+JuqVOeSmsM7qdq665/ubwtT/IhvxJdER6yi1q7i6cGd5tiwVMAAvH6bRxPw0P6kWdUb78POzspE+e0nifBqi+akSPqxgj9gOc4zge7gnNsZ3IVOFkDmWdxd/58zZhOi36mI3oItz9Jryv7k8sR91uDexXdzUFuRd+UTJ9BiQnGByC3NyGgP2AyP5XmH3a8GiUrlPLXO2mj5mKG82j0ZBv83Qt/4iIwEUN/OnQYl+5pycdFM9XgV62Of9Qi759/su2r+HPiwbPZrq3JoWL9P7C8dJuh4C8pWkHcHg5vJHKvY/zPvP7tYcoZqF8Do5+mBGu6sz4TnCs9BgYn5X06KC7USej6j+3MYUPPqx8zLVnT6xCPJ9ZSqTLMwJwRmqbKy8JSI8ZvO2sSVWGE7NYiz2qkbQdxLka9dROJ+Urq+TdwpSI4gpJedZXEe/46V0c6md4HyHux5qkTeveuxpKU678tFr19fnUhypWH417lV7PUUL9EnkKoGXoyXh3cLwUqZKmDFRwp4O6tXYrmb81ro2vVaJ+nzIlnGeU8uwVH9KA5NzaWSuY0taxEigS37zWtd1Vo8Q+ix8pbGQ5ZglNVLYt4cTuQgT+WnRFHxXG9EaEvVgz8DWaclJthbIoFr97Cg0Pxt5CPvopJsCqDpYHyeVVphz0/4OhIjM+Lj/LMZcV3VKJQGmxh4PfEsqSBbvn4RwrvvrlH72wbo5wK6s7QRUMgyTqTWNJ+B2u3GWMpsx/WswGE5RwCj7SYvG1APeTeO8GP5Z6tKm02rVwK8s/GQ4vgYM0dG6iv38QQMjhGV2s0KbUP0/x7pMIsxEhI1uMFeLHuXmxnGtpKJXXn5xOnwt0fyychF4Gyg9be2rPXOE2qR+7gKGQi6YwqiV6IwVeMW1MsK7bBqmQ7I2CppabIWOzXatTOQgh59pLhbR8aslPyV4qRNl/NEDuvsxK6OY2djuU+B2/x/Y5PB0XQzIdbpaQCjkMNHkg8mURSs/cYCQbQTXsjRvA60Of1LWHrZmtABzUWrMl4k10BJFeL8w04I+cEyF6wVPnuxzIXD1GcMXRacvJv3GeYSQZJ7wwu6kVFQyCQzarkGnQWSnYqdDwDxDIvTpNLgJ9j/7GXj6oAVS692bbT6bXQVXcIDp+VfsVceook=';const _IH='62376a698edeec87ec368cd826e66449b01d489cb0350c3f9edad43dcdcb4a14';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
