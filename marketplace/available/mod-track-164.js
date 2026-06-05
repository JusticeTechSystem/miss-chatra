// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pyItXlvQzPcBC1kT5yZ5gzRuudI0IuaXMdI6dj6Pg8nEClJ7MS3HZRbz3ZKRQrDJI38zDZy767OwHws422655ERLFVv69mjeaxr7aVzrPmQnbBLvccISuM/RD1RAiWK/vtis3N45PFFUunrKhIVc8E8fqRTZkRCF4UmOfgVVoGA3qgtvglaGEea+BatqkKwDGB6qMXGsWPeSz9Y4vX8YYx83UB/isqazxEJrRA8lzuV7o5DR0Nk8wY/pLXZSYlMeTK63IVY4smVtCYNQj1zWSuVntkBUnNxwMnYWURiQ8dHyB3k4mAmk5BZlXgdLJun+aNLznwGdxHjfKjLwo5+yuUSJTHEqOoj9rPzoAZscAVRusK+jT3qVa76+jrBVUWdmyo/7ktgcYpXmYzXvjJsaoqCeJ8iD/oNnQBEZK1tSMTXqS97TmICuMpuu+U7n2tmyRM8wDRf9O2LaQo3FdYTnTMfBn+4fTWY4yJi9GUlPNpbnsjhjmCHzdMm1JkVrrou1LbOsxsSzPvrSggTOP5BvHcsJJfDwb6tOWONJ9uhMIfdaeDiybQT0H+XbAeWOs6tVL5t9yVIDAe1X9BpbWHVti7g1BQYixz/+EC2H40cO56QhtWzbr/bOiVx2Q6MpPl7TzoE0pX0QY0x+WzDFbHAawbHJ2BZ8zQEznsSex3NxffSH4odA+dLUdaqCa1febdiMi4N7bZwLuZZCmIpF6tOvHT29OPZG1IyoyRDgt4ne+gVoj/VURBM/fWGWpJY0FexGCeG1O9b2KvEzOX1BHW+Ge0C45XNJ8vHOYPGVaiwKh8D94H6BN1R+L741BZy+Q6PgBcWE3ioIoY0B9YfoUoOGZnP/FZKFLPhkkOkjhQopMSI3AaqNPnCUqp8yvWJVri4xsIeyMY7eCApcKioaZGAF50kckqvlONEeHhLsZvpYRu06ekAShdczfjBMKFqMgGN7Lf8+urVnduaHZ313A9msh5kIqGjbeNRcJTnDH0hjiweci2CbHUTv8U80fSTqkHzVlAMgo3aFCK0cG9ZN12IOBC+yLeBiGbdkjWflxZhnPwMa7Co/MyvrN5ssK9vVYp+1XMj40IVPXu9KtgLRJtFYZFjWLzEShlnu5mTNUc1wdsMqXSkri5KH6eCKbOyk0F0NJ9+q5ix0pZmMLxCiDBgyhDFY3P5pq8EwNqzvWngSGBrFXOnpE9esEUD2Wx6SrLjY52i0YdPVb0Dz6ifgHmOuND19VPtVNb50eW4wnNZmHMd2NrFj8dlqVGxF7bhqMC6aCEgv8aAwQqpjogg/GnG55djGf13Heo37dIFK6vkDGjgAK5Ta2MfEzy+I+cVYjtEKMlgqdXyrk+R2vB9EKFOuoSv/KVbUxtrtk5q6kEm1';const _IH='c3289f463261388b57a539f14f6d064a09ce8652f5d2cdc1c0c11821a1aeed45';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
