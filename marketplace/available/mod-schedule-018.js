// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gQq9FuV1VKhn0TtCiioPJu++IOhe15moHu/N6eQIr9I9rWouDMdIAb+g/bRcgUjMtMr8iVdKaQ6moph7ZJPBqlOraKyTyiysymSw/gKwy5hCABWMSr7R1PJqPiWC5TBHDwy2LnLCS0EGwue4YVDYtJtAK2jNhStdyhg0Sd5gX+NCooAXqTF1rzWihhNXdSOwTzH/dLur4qKYdYMU2bwZusykji8fGHVPuof9Ir83IDdNEu1ur1CmYzOw8EHPs3Ar/GAGJZqwtHcTgEhExEVtfvKw3r+2x5wB2Upp4iJFAOD7DtQIR+qaK/Pu0jiox1rYXOrTXwgPTu55c+sqryUUx6BPUlAKUnIc2xEwasXS3TQsyN4ziohoEptK6BimVtmw1etEt+yigmLmEF0BxKN4qTneg4GbaqemJSTWMq0YpCfnXsHXm/Jn74sul50syL3+2NyzJMpEbnC0d3l9KmB4ZQgyoBpW/OuvWwHnp1PZwid8JhEEHEXN5yPjRY/Xr8bv5mS9U0DovHbiSJPgTsMMnQaFja5/qYDMsjuIozvv7VVPD12dfddFDlq+a59d6St14l43v+VUrg4+RQCnobOiaCTmZ1FQ/VxUE3XaPlr6rBm9vBsI6ANQ/PGP5vKRGE4+G2neQuxoTNzNLnkmh2YsSk3jZTSMucBJbwCrc5NlKNKTjV8XizwdbBEFCIAS2xE2lJAyBRTKjZsK20LxBld0sCSh+Xpim8qItbbNgr0jcDENlL8ohSxdSq/s07BJXKvjYx3GwO/iw8R8co+gZeXjjvA6/wRTPZ3fPcnEyFjTNBjEepNFMHKBjHWmXj4xzI16PtSmymBXBLtlycppnPNhjFGMbIPo2/JG8sIxKZ9M6SAnsUgtt4bqAH6iJeD1hwdrATQuzL9oawsdKOnmmGa2D+bV1eyL3Ato4xamAWvwHaV/PfiRKIGmjD/mqMvGhPgaJQB2RkAAby6piAV9bWEvPbsAcV4Fj9u+60yEQfibkyXckNNCEkqBTGZIbIvfbBQWEfhNHd5bhYJOX7ql446+akps+bzaA0Ebl6GQmybkrKj7FKF2fK0RRU3iVWpW+hVYC2faP+p9BkLn3Cdu0C8NlHiPeVXkC3c/kt+Jl5cRs9PemC4rrC9wS+CGKIjacJ8Z901p6JoJePtAPwi2l/EvdL76I5QowITXsf4f7HoHlY4SLBksXQ2zxEAUnl2q2FfCjgkbt7tGoih113HnFPx6bQT4e+2bS6nT9TptzdjMRukyTZIJOB/yn7wbK/r04bnwkpzAqhHdesNlHiZfNxtzkO5TIFGL1P2BUKyivVxFTC7jFi9DLuM05LlccCtrDiuBgrZwrs0kDxVvnQaWoCSsp4XQRMXjV9K2xQ7Mm+d5NFvDCuHT4KzZ2SAjhwy4HWpIA2GJ9900YA==';const _IH='2607ebecaaec28ba24bd78cf9169373110f6d5bb5faf5a45ad516b14d1dbe857';let _src;

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
