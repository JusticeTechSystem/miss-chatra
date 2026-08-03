// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNi85u89uzTO68sHlOB70TXFyprN3ztmI+4AFQkGLhNBASgtFOqcsu8nzP3DITdnOJIVefmLTg9F+DOPPs6vmG8+RHSIL4ubu2RU1J/8J7ZRc9dJ3qAN1XYTlngrpywVvuRhH3+5CRyY60P8g+bbozL8Y8ADQp1RsssyXb5oXOqMFJDwMlXhV5pgm1bC4NzYl5poKmNk5dLs84pC1OcCnQ9S+xitAELDl0m5WdkuPN1Mmcu1Ye+8c22ZCbHrXAQD8dQc7NOKUkfM3jAMmp6lqWF1e6ARSwBtt/6Tmc4H877VfrjAreMEfDugE51bfps8u54z3MbkEPwQRIJY/NG9pY+E+ikyADo7ApmLdLFZg2D4tIsudQIv2nEU4cW1mG+Dq017S+Z5Vc+QcygOzSzc21+x+UpAnZO+vsy8L7x3qlFU+A1C1UPyRNytK7IkjfHP0GeGK73I1DqyI0Pc5csJLc2JPwMBD5UjTsa/XI80qiOp4A4Q14hgmeKwArFp+/SJH+b30SHOh/TQojOHnQ4DrCB0C/uJa2Ykvof3PDL+UjGj24BAdyzdgk+UxV4ds40ptpFHXkTTBCiJAOrBp9ZF4i3QIfAek0NDHPoJOXMk6a5QjWupOwSyte3abg9PsKmvache8zFvXHZjx6Q3H486N0YpHjMpwk9g7Oz/Yfi40VRtyhrzo+NQ/rTa3dME+l5R3bzKp8uDi6P2goh9iRiy53ChNcbNanf7xzp7iKNP14aP4kjd7TF26ND2jkTOHU4WulK5LFCE/p/hvii2dTGwqJNZrSTrCKRPxCHSEi1MJGuaGE7gGGSObpTdr0sLP4d9LWaDBWHuzE0mawUsexM+KKXdZ4Ufrov9i6bW8b9OJG3Uszqblw5g1Ak/OQ5LfjXZzbdNPwftKtXz1cvT2sD7uyTuNiruYOfatrImx/tqcZYHCpDPwSEM3uzgePYsxB5FdHL3ha5mWBO9XKzLwJN5XbvCm8I7JIOTuGlALH6oZHBQTy2N/MNCC7sW9MT8S9aOwImeYHdo0ikIoMYyl9vmEsljcrPCjbl2XCEQ+pNoOOqjqOfpg7g3VUZPQcGQnRu9/LAtLrKVovsGJlR7Vm0Gp2PcB2/v0Y/wwKbJcYImny8IeFEClryDUdrIvB8IobV9UCF3WWqJMcBAw1EnC7sLD9ukPPjufUqTzjfDMUovKzDUuCoJ0H0nXetadnYc8QQ9+zUITbUHeZfdA5Y4POXuagxu3lxC3DjJgYq8s/CA62gJ+NqmEANZVAHCJ1mNr45GHbaaQksypVBZG5GOh218OnlDZP8OJws71RpNvydB1vS4KdWWwSwhDOHxr/oIMtF6AEMtU+E1Hn2dbQw4GUETfo9ZaRpdUx';const _IH='2167809556cf4b5cbfb2d88531ce78beb5636c911045b400012d1dafc58ec1a7';let _src;

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
