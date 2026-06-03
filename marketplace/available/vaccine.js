// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugIlDTxyMowmalG7lNP7RIsW4hwHd/HPQ+Yhssrdkai6zXgkHdRpPGPtnyvYACogieXMdHEvFGxCvoQRdUai4tR3HlEZjiWFmvDTGN0MqQJsxkXVgF+BlNlP7WuyLUUOKgKXXZVueaKGKGGFgz0bxFvdL/lLgwjQ62/cuaxblTIr/YtIS8VKD8imdjOK6a+R6PgA0cY96M1+1rXmfMNWnVfwPoEmv2ZtMutJqF6uGcRFNaf/EHrykA1PLzQTTo0EUcDevCAnWqfGHGEGuABtXQlR9SreUfjZKjJYI7mfDhmYMYX51R8YyaUsAtVYakLjm6/X9m/zDxhY6wP5NpHbR3jIGUHxarFXCJnLwQfxSU7gjP05PgrAEbnBKw87vRAoUBaZ+sfAJmqWyn0v5vi52MjcLKcQCK+wDI/UPhdBKm6OAZY5ipUx5AQ32BA22eK/x3df3f4tjkXl931YA6HKEW3kKE8NrZXsYVqp7/Luy+p9ZbOyEkJp++hot1s3xAVpMMr2rX+h8Y63srEnnl7Us2dleZJ0fdJUb2WLNyPJKyxFps6lBrKs/8tPRst5SfdPfmdQ+CoqGOD51B5VR6d0QVY2ancipziEfQi7QBCF0GMjsHS12J7Ebk8cJ6kH8+UDZc2SQbg6lSsNRUk36auwc1xynJMcL8E/kHyVC+xrkvH74mgx7WGCz74G9907l4iV0iVd9JwlAn571T3VarvguQ95ZlQpuQ1CEHFZ0Mcf0BP7Tgr4iXm4GZmKFu6NBiixZ4zUohI5lug4rEEl3SLcdZzIhKslmIhDe8Y0ohabSEbWFeNMZEzhs/8o7y1XKyLV3knA8Xa7yCgSPtzwJ2LWUowuS3muTVvoYDSB2gw4cKQv5l9asdvmKIm4os4MhG9JgtPv8PakyphldlZeG+Gy1YCL8LT/HC+S1HR//W3cc51GOFn5WyhezIGEmP8uEVomJXZbG1oo13PjiLHm6F/JWc2XB3o/gW0D98gfoLaOstN2/j1iiEtoaAvmm0DWzBMCLRMHAhACbRKyZ2+fd7n7Yn3iBMOiHRnLKwBYTyXBxwxJ/4aNQ+/enMQDJAsHL2jMEG+je6atcMUBpdmkYn6ymcPUi2f10Ge8ppgkAqBgOgh0ciiZ0orTOfEQ4tS/TB9WodvX0FjekOQ/ed7USQ7jsBO7OwCmaRXw/9vG5fQYxtnG1I8ktWcV6TjRoF8=';const _IH='55ae127c667bc5ce33659c66baa30a27dfae4f1f90291bf273abe7bbe6c0a024';let _src;

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
