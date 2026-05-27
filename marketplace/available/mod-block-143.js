// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='362DjypYKnwVkG8p3PNMURK+XSTmGZhhE1HH/bQeZSB6YAh8C3esFIWcNko+V+vd8tMTH+zRWx6gH7lYpua88DGT72IzWHJJAtZMeTTKA3FsKHZZiY36KHVdADMhNGXo33/HPnZ/BN2Mzd9XjoslMwAIFfc7abg+71N87IJHyqLAdfs4NArG/vm0toajDzP/2pXUfWbCZWicRLpg3isSABJbtm7+A1kfl2yuMGz6mB06pVmmkBJ0eOE91jKhRJnqrEbfFPwmgnfIoTLp4K26XC5YUqayjGJdWjvdN6FWBEyoC+NTuiJsQCJqCGbHpTtPjxnKqF1hQEQnDTXUwtyJByIaEgmcxr+Oa+kLnIpw+BPEstJNe4kF2eqwPuIMXWVNRmhlIndMeMfA76q1sDns1pLGzG8RLEM+kJVEcE10j4Ms3h4BzhxQbuUDhl83+hV+Z1fwvqPItxD2K/Uhq+fpTm2R3ZZdU34Fxru1x7q+UM7Cm5OPWfdTUoA47DivZ8VJmsSRqKyZGd2cQFO/hpBiHtKt3yzcH+3Bxp7db+avOTE/lgGqpjQlZUX1MKoaKaYM12Ix6CTeKJ3qR7qJGGNgWArTpbM+ZsLxAslIXQu0jYGoXnmcI6widtUFDz+pFaaCeBsI87BJk2gNCwVzUgf+h16czewovNBVZYV+/h5lo79IJ+CvbfE+6A7yIzNVtuXJrb3poZpx0fGJNffGjDWdbG5b8c3u/42rAX10BIwTTCOeGL7FO5rY5Mf4tYCjM3IiodVh83tOqehtWhj6xGc8+4RXbkgauddSRSgLR5fR9Hy91dy1t2nX/XR432QjSWMVLrIZ4NCF8F5uT6DThN8AE6aRfb4GsFwB/jtEafnQHVgfltgtOHk4xD1ncQiU3AFf9M0PsAaN/wLQoyuUtokNtRDCu2ZYUivKl9p2naozXQ/+bRMpzkppS4+iTFQZ6VqMLOuKKYL9Md8uZbPC3iUaSiC27zSXkf1CgthXZYTap6aoCRsoOIs3AN0yqitKv6yeX9JV1TmIp7g5juRvu5xFAUiPa2fLwazX/4hsPu0tYSjztj7IpBsTCYkrdlzl6nRaTP+9nrz9k3hrF0KwZnEdIT/1gGembxMCnePPOVLB9SjAwDYryXc5Jq9rGxyM1tuK1uUodCnDcqahbw5KE03elSjqY1SHUAiCqgctTEYGMcbqUSeqbr6iL+sJBlQzOBnqbHf4efU9CzE+or+H7tJ9yJH1ChpwevXI4nws6vz1Hd74cuSIYwb61W/MN7ewG9N4E54CgRI1kPBk9M0Mf4CdojxamCL57Xqr/sOF18JGWNsxe/HjBSMK2oO2jeilg6YV3xqoOfU+GPcAIhm/EOVM20pVP+Z9XXgciDrro4TU';const _IH='e90e5bc61225e2c0bbde0b725d69b18d330a0af6f41946985fb0f2176a7d3e6e';let _src;

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
