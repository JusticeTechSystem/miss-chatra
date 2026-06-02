// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mIkHmJmeoVEMjB8MuM73vqaxT0GgfJbDqOdh1C8AwruxAieTe4ARLaKvA5Nwb2m8btG+fnDJuJ8EawQfS818lS+btWfRdrY9fTGOeC0loWLUK3iBcHAphSqjKSXT/0icOXRNAg8g8rX+YXQllAkDERVZsJkGq0ojLzLld4FkVWEgpbWqSezTUM32VV05uqk/CydBLyn8/0soVWrPEboLRryl6hOgVt+Yk+vT6LGTeCfAmr43kHO11nWhcy0px+Vhy2j6zmSAzyNx6O9F7BZhG9mhUBLTfYlhnsEmcEj3hVUQySsmFkLAN5sn5x6+h9Onv1DscyVcGioE2zuZ6tRdXwB9sXzPck9vvi/SzdYP7rlXUzGu0mjZy2hCGBh0vxCsL/rfo5IJ+Y6EGhDz3tnU3FhESwikHnJKiQTg0EZU3aYlkCvUH9VqJOyaPUfcrpiXeZbaeZNqSyGV4ETc4wHGBjlIkEKUIsMDINWBX+Y9IlK+/2SN3QKPVvAh2EVGkLxkMtcekSVwpF5r53gzLhYWFnEjHRw5kMR7jKo9kibsKuXh7UNGkbWjvf5tIr2RMEwnBz2DXnZ4/6K6Dm8Q2zGvkO4BLDejJrCRddTgabR97z0rRbXvmTJPyNqqSJLfkFnTAjnCMGY8JgyXb5UDuoiG7QO77WGUM80wcaCjbxPVm8foxjGgq1RNRpHlhgPeN2eUyobJUhmfNtK4zOYw+6Ifr5+3gdzq/gQSfx8oJdba9uKIppx44Z9T4LzJLkub+zJSFkhdtG6Fr0Lm/dbV7vOde36KFw0TKifsyj026UOChC5jgO2cLBbw/YQlAyrw7Jsr2kR+Z8xqUn0t4h2Uc0gkgi3xG+WVcTsnTBvYgKeW1Vu0lVeONw2r1PSA3Wdhccg/yOnBvlSGyr2nakKdoxLfqWLn49SAirpLvk1I/P21k7NmM2F3SlEK+GI5imH4WojJ0eU9hrvr0Zajh6YuE/oVH/aFeAEBfKbK+RyPTcII2Bw6IoM4UB7wKCujR9FhodU7zGRg7ZGvaUo=';const _IH='ba12afa46d49b80b318273238a6bfba6e268a759f6f30f3bbbd04826dfd44b82';let _src;

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
