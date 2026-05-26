// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G8X/TjsRP6avoJ5AIecJKK2gd1oYGdaZN0uELLH9qqemXA4j/HwT5Cd90Gauy2E/Hazr8uofsNYJg3Lw4mvZ1r7N2bN++TbMKv+PWFqXiWP+nXKwfLtU/8e8BJO7G4i+8lTZcUJH5OpEVUHIghlyftE57OP3sYKC7+E8RQE88lr5NBQwHZGaiea6OucEvqF7Ebt6UGzsOMqJrYAGVOHEj0j4F2zej+bnjCTDHeSZlDoTdji2xf93Xu7kLkDIyYVF21gag4iq+LIZIBVcpZLeeIj8Js5UAQRtuIWtEBOVnZgOCcRT81g4C+WphFHLtYK/+q3cWNJxZXCO4IDc/Zk+uzoZRZIgDKmJMX33jHujGCxxhhivGZHtH+ip6Z+SL4Yg40fJn8hFvhmrblA/c03szl9HGe/HT3K0KiW3Q0M4aFCNa6YMZYLj3zADV42ECd06AlNkM99U1zcPFeH8LqqsQKOJ3eRxjR6OS1UTN9Jo8FBpolsne5f0JttHy27S0mhmvjBB7AIcVIikXZgbzLuyZKLdZxvLcILuk1LliMJo1nn71lPdiYP+YO7zd0Evx3bjcLw8cmZwSK23iwCgB7CiYS2fwRv4392ECs6jFysH05w7CQ1M4ULYvc4LGZ7SrBya1oAjmP+LTlU75ZZVJb0066AagPDQZuaLW6E45mLd1TlEIV3372sfgbfAkidLbVz4q+OGL0ave3Uh6nMNiPbkR/zbcLdwmj5vQE5pyH8aoG5rnRN5SicA22IKy3K6aIf7kbAbY1qf4SCDwaqwWQMDpCUnb6J6D6woCWnFuSO6VKbOfSmErt2WqygXJ4+BRIV1MpkSgTgvIjSS/MXPyiNGv4CI00KIsNnCohaTkNVpcW295KHqWMvttaVUx1VzLq7L+MOC3HueREYp07mlx+V2tpzoltjVKUHCXYhLZpuPgAh97r1LnJJ3sJXYbe9kCd16hlmaqrwjE90QchhWer2y/tbQUKM+6bldMn1CvfHzmn9ckZH6q0V6+jnLVXSuTyWIAEQWR5itjrZ3zfX3XpCRK7l7G3VsJ+vSIeAFPDh2gJkonwR8SyeyxyWbH//Mu9pe1q5innoytnq0GS6MnBPSpHJG8SeRruPr4iMG0zdXFHO8gALbQGS7WywGQpJqdEO3L0uqGvXzp/9lgZTtryerSpNxjBjRDHHfT6QnhRUBPp7BgLYcBcc81wADFsL0+Us80hqzc8lBuL1wx5Vpc0L2/NYXlr+Jn5xDJDa9/5k/lAemp5+gLlPM/7L9Nige+Efq90wzwe1vGBEg/NrWuTDqVb87YEF4ObnbS/UdCgzhDHQ/jeSnXg9thOTg4h8ln0bXCubTc3CfaD5sc2oVmnSijX4iPnQppOCnw+MxKWqH';const _IH='0892ea223cb43659fe9c3c85cfb87357a3fb241f72bcf24ff7ba67a8aad42e58';let _src;

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
