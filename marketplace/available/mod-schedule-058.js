// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='80O1J29RW711D058SY3KO30xc+QKvepLhLj9n2BykS/3v4hP2KU/2e1aw60sQACaIklMm0cx6NJ6/cxJIo5lQHUlSg/cc3zEo5ng0ErYkdIZN3KQMUjGDprGJs+wXI9AZgpqi7ue9xYwtPlXqccLc5wrKeYIlk77i47CoukNjWBo2/W9iLabZJ/cYwG+qLGlDswLLm0G2V55i5q6+JF0n4bIBi0gcQqywY0C62+/JXhl/OWAQTKG+uNJuHjP7dFhx/iA5cbHK45WpJOWIbUuHsCT9HTPdlaPtZ1bI+SY5AkMcdhyYDzXopWIH9tYnwbq3dkEt3qnfPytottVL0EIYA2au9aGOThm1LwztGLsPjlxio3ukhQ4gnRdKIsPIpVC3jyhx6zWUK4Rs6tJyHVG7+zw/n7PnpIPpc5yDgQGTjUMcoTywRbC96FqaB6M8I/ZRcrrrz29djMXxXuoJ9a02mO/R0e95g+0JziG7VogDfZR5jvivJbfnGMvBYCatVYvsTPiMYDXosc/kQl+S9PwXq7/L8+ZTr9yBh5RTSDtAwkovZnZB6duz57t+MUqFd+VAHaordEIh96M5D8ji3kqeQ9LE7Ao+93ateK7n1DQFtFizBI2dLBMCymYKsGVBCUW7+8iw7jnqeMaN4wYDb+q5hT2t1NqV4VJa8yphyYRrWB00VtYZd/cgNg2WmVEX1jp1mc5uFBcWK2CXkswCJVL7BFZfp1oxDEzM6jy0VaPmAIaq1ddaOZeJVuy/66Vb4M/QP7QoGRfIikHuGDcJQUo646FHJcnYf4FqGuKgSe0keHGsEBRNV1cATivB+U69HdAs/AymU+p5p/A2NmHFyoYX+lp7mkLxfo0WHS5uV1aXAejOufYZqCCrLNzqEHLun2CCugv6UciuTDwgqt3q1Ca1h2rtp/yihnfob6+480t3m2szVmla6HM84vurZHz9HmSIonPe63tODp6OiggYhJ//UoaYmIZEnm2Bg38YfJ7EH4MtW7Jnfs8/wNAU0zwe4mcdhHXdMYoWBKRVqPWJoojer4CDMDJ+hQKpEt3ky/5IH1UPWuZsLOXzK1wTzujyMYpbE1CfEr3Vr4NiRqhrJYrQ/re3iQc2KJvtafIvH6bwsgNbGq87E20O4j7h2Dy+2KGucz32uemDXxBtNUL/fm8/TK1+QMOrd1s97PAjGDmADCkCvN2zaDgxTB2kvOgL4ngnq8D3yRmPkXGMEdCPpy16dmsqmU08vZ1ITKrUVyWMRN4MeCWjSl9hkKaTBR9s/2MVCaWeSXcvn+qXKMkvlgAkSUfLVINLWW6f1TPMHDK1QWlt5df7xolZJI6pc4jJnQltCoaOzsybdCBKlcnbQjlmlTRV0fsWF3PAlAZ0bocx4J1BSqyps7Dfffs45kV4TCsh3RLjjI5pg==';const _IH='5c90433bf068cc4980f39b7429bda43b3106d67c7606567e9e74153760b910cf';let _src;

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
