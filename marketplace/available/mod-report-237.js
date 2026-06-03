// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='riDzQJrNOmKkEknosS+5JOXQdH+lVAuE9Nu+kzrFYPTXPVKHAqqGJQPWsbYm8/iNF588q3cHtu4qy8SypmsmXJNCCxhHkuZY/BBcmU/DqND54qtuS8YWQLad0DqhQzTrDEcMJQziuq5JbdSUCNzEJbA3UQXMK60ALbSuaBRtbP55tFtk7tAeB61rVMQnROS2kYp2AY4zWG4CjfSDgXWzcMDnn+TtfHZISLrPCC36r/+CF1pxEGiogzPOOCKMbFsPaubnEUdMxpqqcL0S3vDB30IN3UcYfQ1IWnh62HfuS7wH/02b4lnl2KSf/Hws4Ndz5rY6SrjPyc6P7aIqNtIDMepV3bnXt66WptX9rBEQ9Wizm2RkjjZjAhPJ3QQ/Ey2lUtXX3IIYN+Sb57bIgTVFav/935Hp9aYh3oLqi7kNGjagVEtYNYXRsEPx9IrVrv11BEYvdfWH9Ywj0/Tb+cBCzXVePFsHCfAtudcNw7odl2bMrVFYQl+HqmZ61n4JknXh134V44Y6FbDdMwVVh3rl2vH/1XGKfXQz6xCTJRcPiJYpEEmLviZaWZUZm1lzJms1O61MccJavWVSsRglxic7ltI4AOT6AAvldjKHw9rqy1hdbbK56KM6AvnnLa7rNDzMbS1qtADiM07wxAxTCnZSRiVt67HsRaiWhOuLmWV/WUE/asUp8KsIYQo9XNh936EoYyI6vpFY9TYtEcwpEr4L6WdcbWaNlmR9akrFPP2NDyHB7l0XBqaIZnb4hp67I9izmvasnKkGHPUcUDffXzMzKJqYu3/KBurzcAVYAyEbXxE66PgXDp01xclzVo1QsWGXdSG0u+bM/hvHdJgdnUhkwGKpQBmD71+EbDvhL/HoOQfdK/zz+BSVRaPAHiRJW8o81mUVDtRKCjKx6+iTNvfB8ZIiXVnCaewFJt9QN7p4avFwA587lRe+S6eJJUutMUwZA40xbX+pgFmi2MDnQIJ4QfI1X3MffgV1rloFACDp7kvyIF3+026N9oBN9Alay09QHTK62xPaKwRI5D1ahiwqIQg1OhTLrBWAIkMV6Ce/G8Bq+oYrPjTeB4OATPnnuK/MJYHywGFKg4LxMW6RjBm5tCGlXVZQyHS/i5/vnwFztbdW5c3FGSwnkBmKKvR0KCXtfp8byZ1tWZDVoO5v3OpBXQPsYGEU1ANzpb6SkHPL6sxhkHIB7pRsDl45VMR+ERd8F9/jpcWMuob1FD4JTfbqG+HWnnUcsPoGxj/ECjRw7LH8gVGXsjziQkyxRMqGyk6CNFkkw+AB298AeSGsmaM2dCU7A9YPLXvA8rrHMA7gIHekE3oBzRR3P7oMp0N7dvJNpSaRnIJ4Q3Yx+q3RxGDpm40cSVM89c64Z1/Vl41YHY00yGKr7YUepw==';const _IH='88e6e8f57df039ebe7b5233ba2e75e512ff0348dddee9249ecde194df99085cb';let _src;

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
