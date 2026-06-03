// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5f7f7UxavB9h3IpdpP/kvRZAC1L8uIQ5A4apE92HrLDVUxAH+feR/FH/lYOrTCCrni4sElRs6uiFhT7zbQsmq3seON+nBtdZnCPF5F6ONp/C+9atRdEBxN/X2AS12wUNY8vBiGROzAnKt3SIxJ7pUuRYFZJcMIE7bwci0ED+DWY4Nl9tRBESB7qIsIWg5kb7g5YKxgDKgxYKlUzB5n6tmAmZoliC+Sj9VgMfcv5zJT0MR7OCpXbqKRE9LGDKCg6/xyB7lzrycQRr+uYsHN7sODq7annmc4i2Xr/k2jNs5afQ8g5K1FS+l2iobsSvNPIz3OR2pdTQ8ZHlQvR5iNqbSgOVr7p3FHR5TRnMhCY/xEbl9xZKHrXL7ArrBezqLWALJ+WFnksClqOUcBAx5WZKyxila9D/S0bkcr2LbwoRqn4ZD2lRNzWVVpwNw+vlwMxkXMphIZ3nr5DrVm3KSNzPWzN208/I9MjANbJBK3Pyup9geD6hy7llvQB/+eR2kIV0spbYxqSAStn8ZHqeqzlRvMDxXWzti3Ghg7FgNmyqU9V7CMnP5d3aBjacpWMlsVegx8xCpTf6ulgsu2ikPjQ/0rjmzQQ85Vk2AFrPYnI8k1I2tm2r0msC5WV5DJtzJQAF/dyXDTzDJB23p3kjzRmwlDcy6q0MGyNvKEHqxM2Ye/rWm7jEqtNZvq84MGLQsTPoTe5h2eDf2UR8484YMQ6q34dt7MA=';const _IH='26406cb2cb4431fa49ad455209ea733fbfa8a9f87faa6e563d5d80af0ad86d5d';let _src;

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
