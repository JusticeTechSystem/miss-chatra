// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5lwdjTzztkNeiDO3rDFfoEzmhwymxsxoAOmjyjkvimlTWVipXktxU/RWLKIOdkWVdgtHlNwDXJG+S6PjLtxn23YTqqMzYhbro97yuHyprAhx/rygecwMmgdKm8g1fn/uBurmtgdfwab8DreLwd731GrNeprUxVBhr2ViW1IE+1gwtojIXkqXBwLU1j2/uWmMfIZPZpJpoCUGPudh9Gu9Gk6LKYjDd1aKjQG3+5XqomuNFi0G995INi36nlTVMPzzMKZeaGB69MiEW1eOBPXp9MXN7qKelh0ubRFkLe2/V5xAqKP7LClfqGbuvCnieOlER0OSDbi9amxlDc+c7mbmGP8zHrbcZp5qgDqThe5Jl6ZAEY/6/jGpUCAOoYRvqyATpq6/KG19WEwfuPno2rnZjeyzv4OAL9WXGLjvn7hLhVajJu0eLW42B/2+4OVYgczCIfmdpBsLxFX/OLr1n5gPCCUmqGEx7YqQJtUCjekagN4d3dcZ9wxcqvAH9lB2YEer3QgJytU4FdPAZS1ABV+Bu0L2umsvUj2jeipcb/LGyuaFWjGiTi+wyol90AondT/Puvs4Nc/BQKWdKpzC8XjVons0V9CqTeXUxfjcRIwqO7FonhtJoYYol0egDJCBozI5krI/ZWsXxikhOeOplGYZLdNsbY5QrF0QIXFOx1nDUeAnz3xqkFtf1JdyQ+I+RcShFx9JHM1x3lGcibz4QF+kGobd2CDn5bt7WjMh08SLx40S2UuZJNXzctwQOkc6BNnQwHbgWeimGrDiD6UojgB9vTYC7+EITNyC0MGDUmtE2Z7HCLbISop6UlydEQRgOC1aCfXluEMTsV6Jjn/lEfemLcZuPxURdGn8wmFkCJS0WWkEBwOG5IoLDTPLg8J5KwMRWnGM+rfHMLfuA1PfQkUNwj2I01Vjpsyn+dSLaC87WU3iRSBlNtx9N/3Ah5eUwwI6E3uZy11AZk7ZfjVPY7zbCLhv4rM7irECGVsXCwQHRU2yuDCuLNnZcKPveBV0u2H3XBKtwAbLF5U+CGTQSPyWV2Xp976L558MoA0638LFDeh6tvvWTXYrvGJgUT7C5u0aKIHw2QvpYwdOqUFuNBhOBTnJ40lAIR5xx9T74nIcuXIlAvh/ndrB9a08/ouXu3Nt1YDZUT0eD9zqj6VZkV/sQA6GyykJrqmfT2aTt9c2FeXBz7XmYJebwMWD98lU3zWKOrvi6okLFqnIMGrop3wpnOUmdA/iaAAY3dpwRQnh2RtWIsAFQh2dJDukWyzTbXZfQS/LHjuYTPRrviUN27fcUfTLuvDteuOGPN2IC9RJSZPN1YtGeMZ9z5zRgQuY7F2u/M9PaYJpzEay6HtZb/38tz+tID6qO/wxviY8ivhuDNgJQnR';const _IH='535131d2cc89c010200bfeb5e8433173b5a15311625074b2f7e227bf0884669b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
