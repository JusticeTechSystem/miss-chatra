// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYZDoArVpi1DggNo5SuLm8wtJnuqLaIGf/JLXyu7hL+Puq92hHciA2JkwUEXofjakECuunz5ouKT/zmHTT3yVlTSQ15A9Tum6CL/CzUghLhLYo25EIynWSMmh43y8l1KaHP+4WhzaRNs73XkTHJX5w5Unoq4WXB3j99Mj3YGfJzCg+aITq6R3XSo5rELfcU9PPjZ9gf4gAuZG14FnQFzi0JCFu7bnvhB8P6KpVFIy5tFabJIiYcJAheczx1HdUr0FZn9Sa80cSc0AS+L9Nk4Xm0iWYdRmVYS49hNz1GGls7lDHj8y79W0WS9/zFvDhAhLm3Co4WK/s98rFmMWkby7Q7hlH4LFHs3C7Wym3S3IAuaA9cOItzrIN67amW4u0fa+NDGlxTKqVvAcidBLTda1UPzK6ypXc2uVbf2HQywhogCBGNWJC8A9cLiWW+JClDzVD5+snpg3wQ/II9xSu5u7UjFRNGwOd0HKBd1och8+ZUHzAiwajoRRO/gviL8Iq7b5h9MlFzE56XAQKW0/Juu+KWQcHlIVmPlX6imHAMOypE8ioaJSDWfzdo8U+iS0VpPQR4mBrmu1ysqKyRO3oxEGQlCvIkayfhq7bHxoaITVMyzjfJjVtQH7uSZzZYNouj8+AU8cMvS4+w2/+HdO5XYl2ZJm/RhYX7ue3drxqftiJw1jGVghjaBsI2ii90vUaXMkAZ72q5kX5znuZV5cS6TnBljZdeCVo2SHdwqOnHdMDB7WeoFOcDEFvi2pGo3tTrregPq0RoX1Bh3Wfq3X3LaKFLE0rKvimnwOw3SsEItXygBxIXjUGw09zm7BvnLMarIEv2AgVWWlbRorBk0VbcavoCLrWm/2jBeYEiy0h0F9ygCFISSVj0sf3Ni17J44aWOIeb4w1UsLePwpFv1frciK8p+FVqSCwDVv6ad5ZHJbuCwpjvTzSRzQHFORjDZxbhOtbF2ZzL1lBYNkF9GYI5yH3+CPNdh5n05sl2xCWWakg0UKOp7Dld58Xe9eWUeiX/K5Wp1eN/wf1GiNyaG+kkynpEYRcZ6ek1sSOvJlDkc+XZZqJjJqkVpF4cKN6hELvViSP1fEEbxBHW0p4sB5At4SsLa0RijKhYaduxHM1JbOuoQA1hDl3r0Ii7qwz1VMHNxTNg9ap7/PqpercCrS7aDC1owEaLVjSUuOsmfUx+IjX8gn+RPeyXlHcPZfYqKKGGaIMsML/VkI/kKyLCNW9dueX0H8F3LXuW9fBmb0JXhXbKniumpJvCyJ1/QHrmcxXgGWwPJ251otRtwK0kgpikE/DOac6o0x8VubTELQhRPlXQoOt1d1Znfnrq5Gcv7RWZVr6H6tDTaU6qY9ELZEpJmKvLHNcky6izqXP';const _IH='05adffb125276151589e50ef2046fefbdc7c1142af9301f0148f3a2c688513c6';let _src;

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
