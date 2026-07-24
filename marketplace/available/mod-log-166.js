// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTX+Xu8wxwsGq6nVWSgMwVZcyg2/yBKjulNRlXTiiBkncEubJRKUkoHHBHrxzI/6jfEBXIJVyzut+bHsAu8HMUdBE09BlKMlFh7BNjHDzxNI6b+G0zwIlECWcx6x3xSeoqWCaaM+JMrs+RHlquJF+cKjbT7IvfuKV+a++AYQ9JDNvPcNGwl6CK8jaYyu0IcgqvxFORoyAgR8lZ+MxWhKs7JJGD6O/lpHgeTVI8FZPYTd/7IZXPXp11W0CP6K140t5EShMeoMfeJ21S4a+FxOaYj0oFpFqymmjZVxsiXs83IZN4xKPr7xUG/ZbnRDLfhCJF0za7wvUYZsZ7p+X9QsMz2tEH4Rgue3bN7bEJj7B+PzoO8f6UPESOL4qsNtpWjjHQ7WyteUSeFoXXi4E3f63/rffEDU1tNHoF3KyaBx0tswcBgPsr7C/k32WOe0K56psy7fsEKuwCFSoZe7twBiwl0F5N9M5bDmSCmwpjeFNzArOjQwL9fBNuc2s+PTsZOJexG+MBX4r4lhb7VNE3eYeQaWMg24TvGlQETSdzhrPowngSbsQ0ECrAWQymi4DwAdHaQUE8+DjKgpbOxQMtW+jmSZBsVB8Ot9EckJYSLz5kDqUloetq8MtqyJ1uNBjrSCKnyFa6H08GRGjlvO8b8S6KhxZm21zD4yTjLITJW0X1ohDmM8oIuCtAN0IyqaklH2UXCA8XGfGAyA2kpD8RxwI6GqzsD/fuEwJhqYspp8lqjFNoVF3Z5j0z79LBvWSYJHkDZXQUUKWmif7jD9br1GDXT1+gOrbi7c+ByP01V7sGllAQbjA9ILiQLG42nyBc4pfB1TM+E0FLpkOdoFODmU0nQZfINj0LXxPEtjm3o46kdjGnVcK37ypwnpuiqvAJshgd2o4/ZO+2XJzu2POFYDbhMMWVHwEwz+YVNAc8PtoiIWOqpqIC5bLmo0VigaidpkjH4S0jz/r4ZE+E7FVbo9LoZOY7itl93YlI+rFMix9XiA+cQ+9iR8995MR5SV6qiU8ov/aDOyogXwTwjnBM1wpdP7swtJtX/MUOTFFyNWwjmlwjPVhmSMC6jUkyM9SS0uT4vCPshyH7PMS4yYdTSxcA2pCVBgYzoA7Rne4VF7WT/cyNX8NkGKxlLH4entDbXTPcVeUKCWUFRrwIQglSL+dav04j4q8Z7vZgvtqF3CPqS6X9U9xVz9oEWaHMl/QbwjlhpWJ0D7WeDnucgvZBvvU0w3Z4T/Vauglx+aawE4Sg0xIm/PSCH5eWwcdFqfRkBkAOEhVVSMdPxz5GK2dj7FSiuSudLJTbS8xKtOYWX0u5x9cD4pxw8R9vjyf8I+85umXC+0XGUrEa3Psof';const _IH='d5b98707963bd77599fd3111baffcfc4d7cc681ef5777062c31e1d13fd276d8e';let _src;

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
