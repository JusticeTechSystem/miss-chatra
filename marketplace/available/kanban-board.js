// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2fL6rB8S69uJHhJA9+SMFdUcj4RvKXIIiXBdqDhJtPKO0hogTJG6Rw8RMtshkfDD3x/oCbtQzKJvyABMPrg/xYvhXbVPUxE/GwvJN+7Ae3JjlWZW6x49QgA/7St+/lctUpmfzRWOrTT/Lf0O/JF5wWwpoKR+NsFbMXKPOGxoKzUtwG+wZvh+CUnrczQdAUnKSHNEtwNfqqiETS6WA/YyCub4Fw0c8xiKG0J/z9oNGobrMhhkGylLpfk/r5t37FO4DDxNSm0BTf2n5UbDK9FV7qaVC4GxUWmgPZMIUOvBvRecnSCRPhhRtwko2k4slc9ypfWotV2228G0sI3Fvy7k5Q2eAeXEbKR3H79/np2r1AS064MZoUjyLzun0hR9L7yf+K1giz7gv11dXCk7wbyYz0/hov3EiDnR6qZKoKXQt+kqTp/KzAfwjzMic+zH+k2/5JW5u3ykF+FLkWeVi9OgxfviRKoH3WzknzM0JVJZZg9H06+o0I6yOUL7HppXbx04gxmAt8byDfAlucNRR4IHvZsJcziGwHxvL2Qzi7r0sZENInF+HJUHtpLqNs/y3ciPFSpJHx7PGIM7v7+k';const _IH='988f795e834de2c7123b21b4e27f75885b4d08b9b36b99b1c10e85eebba37420';let _src;

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
