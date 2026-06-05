// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7v87T8ceAo39wLX6xNhvp2tGQdk7MvOUrm4g3K95J4AA3b56VnE9ffDAU+GRSmg7uvXM0WN2JThEN9WbfckEJTHIyXyYa1myyGu/FpHHLSLp8eeY5avPTCUJdbn6L4mL8vouPYCtDPRh2oy6JwaEyj3+MYZXnP7saEt+bgrvbaL+8AISsClqu+WQYrQzWQPp5aNcQIwL4eOcd2CetShC+5F7S5ZwjOvxMz0r+YblZPOe/Po4HGc79idVK8IDv6+lUZUauIbVbITAwrxwTuBQk0tGLlCYEMBiZxJrmB1BYaVeRuxPBUXwpzO86AwaEae8DXKXzxbaUFHTtAC8adcQsSGDwIrZ0VWfdEc6JGUUExxySCFwmUsteEisFeJmw8f6avj2nARbT1+m8O3Fvgs5Qc/Cvr+hxgc22/Vocen9fZQ1R8Rok6MineCHpzL42OKamGiaaqLHbGhgaP5ZvLh5+uHvirL6zfpgpwTR6UkmX9oY+49Que7syP22/AWdbZtc59rNtYqBwkt0j0VUSXUQA9m5i8ZsSyQFTmY8UslsHXCDpO38jmOnoecLz8iYYwjfMXpzOc9Xnft6xNRQY05s7Y9Dn+IO6f67x1NNCA/LRl1bYBIaaPonGtAWB0pe0yXrkz2/h6EG2K9ilC4jw6BeI0nKm+Z1FZDceYyNoc74sd5OKs/1BeGdiC1WPAbGXdQHEmnhhJaYWEF/FUCT8F/HTuQ0l/XfrE93u9yCcVlTNeNjSzQiihurWUr06Tl9nZ1IuMpbI4sof+YAnyU2ijTGiSShHLu6LhYBeDTDltsmzzd8v1Hw+4Fp5JjXcBBheUlxVq9tqQoXs7S/cKZ4aLr1J5KMkGzXI5uzuMDSLqnQdoMBR2ADtRVN54lTNuAiSZYgR7u9o4LuNtqPGKJaC8aFD9iqEI4h/KX8AmNi+j3IxzgJdjyTQhEREjQ6UAjDRExKJarH+RTLsL+At0/EfTyKND3s9sVevH/wus4asdJZ7zWrgv5dRx/p1q4Pf8T5N+5KCsNpsYm4xr1BAYJMvhL6x/dm8m3E5oEwLWBYHqpSW5sqvqGdLmI0UL3CAhJH8Fl2z4XSlpuFvOAK767u2Z88Z5r48xOjsTbk+aH8FfmBoZQ/6+4r0Fc9xtZyr0F8iciCqRBMjF5y5ksaH+iqlbhQdtBy6zDRlmRLMTfV9tvVvGZl/RsHcmXB/sC2rLYdp21WdoRPqKlPw3tvPbfmfz4WGXJ+7H+6C0cRXD1jGSKV+5QkQsGxo9dCFCPxt7gJtLN8gSQ5+GAO0DoXOL9St/uHp8Q4IHto9wMNmMJ0XZ8PHk32KlK4C8cxl3SMDOEx67iD46bbFagw2bJL1SAoBtdjrFKF905FYKpi7w==';const _IH='d1ddb21636f02b24bd8ac7fe71cbea562e15acedb64dca4116b99e02acfc8e62';let _src;

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
