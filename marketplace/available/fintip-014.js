// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CXvGvh5+g/DiB9s+FCLRqeqMfCtSVe7GxGzVHvT5coZu1rcWyMBSgyAGwy4zkDviOvuYxycTJ7jhpPKRL8DWf3s0yh9ilaLLjNBlmNlYBjvhiXZ48KMAp55cmb6MLjhYjskeMS4NtD9qHSolOfGYkQKesmVGrSQ+hMQKK+QQiBZK23FdyvczBaECnvG15CrI3B/EbsNBm2XeUwfLx1STm6d++ftke3JGyQuhB//c8tODrXMHS69iu9VjaSGZ4aLrpur5IjcLECxoRdcHyOd++hmaVrAe6m44Kps98SWHSPydZlA0nvlhUTsEoyZOYZZawmHEdMPDMzFGhwSYnFLhaz8tomCLHFFa+xRPpmse2aQFk/t0gfJxpLkYj5yDOPSgML0ma2Sq0R2xZNoUWWSZgJxErfApuZvsIqiL9xVP/ZxD/tScR5bR8tai3Cb56AgpW0pxcKM95yF9dXTqnV9L0XR2JywzOhDhLCDr8KU8bJfzfqJDK2VJKhPwoG6dZD0/1O79l59nuJGVJxYpPqkQQ7wWyQFrRGdbhzN5fhvcq1kNj3UET060cOk0EF9TYd46DHohrVtIVs4bFvrNEAMwtZ2MB86x2fkD8WsCl1RNmZC20cp+nLGUSS23In2hBx52uo2jzGTH1/bCji4Zx8ugen0QjBF1Tez0St62SgvNLGHBvZpudMbvHc6dZOzPSP49Rx7tOT6EuIKYYJYIUw5bZdcjnQjVOJXDnTnry6vd+vsvTE5i8HhfEvR8ybvldwfKt1Eeg8SEB7RwyH40qKNzyweP8GwWVCQ+ISwOMhMsYC5ZxllHw1dPnjHLB6LKudZU0MBR/8sFX7pZ9yDPCn0lRuIcGR4zGZhgBEMx5YKRk1HI6TZCmxeCI8xDAtjYYYO4uRI5tkrarChWI6WmwvrDa1iSEAj+oScTJWz9Aqt2DARCK9SlP+ssxazwwa89geRpFfu6OiFZ78I3IzxIzy4wxC2AI0ddY5OuemAI1NbknyEePRpaHxiVEn+A46yGR3lk2j8sBwKrWMTYBeGpZir+LGw6EZJwfLb0u2AHPpsrZ8RwvQ==';const _IH='8781413dea8348062ad87d00d4fb5dfa20ed78868c1b2eec57d0b2145ee5d5a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
