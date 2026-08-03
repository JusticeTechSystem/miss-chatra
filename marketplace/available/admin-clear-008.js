// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjInBqwP7WuBqR6JtBAqWp0HvuhgAPAOeuF1+t1abaPutsB7/UThO+JaQ0q7fopPcNgmhdQqZEfWk45elg2etUa7qWpvtB5IlGNse1nvrYiSxzmQiTi5Kx8PKTuzqe9lJXL8PttwQIUFc21+5nFGaJ9w+r2FKHsosKt1er2/zMRb6bkQXvXwbzNLMb+ltNH1hoG66Nl6w1a3LHYoCi1lHAc1RLav/tCN1CXdDlpcsG1EcMksc7xJtPXHgGbjasPzgZuyQdjRSz20ZMOv3R6rlUfdmhcZ9B3wIIzy9Z2vnPKY7QiJYcfWmYHekFS612vQnepfL38y3OrvCCl0ke+9u9MnEEQooAfpa3/Con0pRuGMXC61uS/oAL3Hr53rSckD7PLTDeq2ldm1x2G243RH7nfFBGyqJp3mtut6qa+rzU+siBQBoLI0ewrHTgRWv+G901w0D5zldR4L/9cQ+UX4gialT1zRYV034uo/JxemZpy+KmdOKyjaXersZDvTo0GQn4dhkUsrSI9VsvR3hd1ZWDP4hHhjorWp0XUZ9nzAIX/i+Bw7VRNcQBfiVMgRZGfKGPzL/XqOyJlxumR6UU1OIDTb3TdOQLkxBiLJ7LWazHMVMAGDqM1Gg6H6InQfA2n23FFGEKhEa9Uvw13rDfhgy6DmdT93XQgrI5crz4ot4tzdOlZ0K9xwVhQ2vIdAPMMTvXo74lsDZIp0UhrrxsE4GqflcNoEoOYeI+1JeMroWitmb0b0Yhj9ti0gk4bsV4C9JTRa6d/fS1fIqT4MEFvcOkPP/Jinrpe6A/GOoXJdjsiOwjrwbjtLko/PHK8Le2i3rI8y1Gi/pE3VonWoSNogFfX3yjDnPww0k7+zimeinvSk8BIuubS3ql0PiQGSVkql0iavr4qiMFwwcTARvwGnJPZ1czzUd5jNkA9oaSNhAeqqAXPMzAaYSp9isDcL+e80SoTDekyVTu7LMoYYA2UOdbZI1EbvkgkIWhLvInSe+EcQ==';const _IH='0af071ae02f2ee29070e5f0288d56cb4cddf114395d233c8f960d47c9ca7d613';let _src;

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
