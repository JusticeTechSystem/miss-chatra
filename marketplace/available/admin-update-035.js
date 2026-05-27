// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1WUlJHZezYerGf1Lunpg/YMdOyT/zveRLwkSjkZGjqxLxqKuUu6YkxTjwGzBhaDnLD5wGWSju7h5Hxcs7oktYCDpFQaHVBt7y2P48fHm2st4+JqXDyylA/CPqXCgkk1YlC4DMWNwrn21ngA9M8mPuY45zIapbnFxrQJoYIch98P6GU/jc+TXfQqWEVYqiF0rrEN7ZjZok8h+oy2LOaLX8LlOP0ZM2DuWeW3jOai0IprnvTOiBfDm052hIivckGdklqMquYu0b8I8j42oxbh5kBetjgHF4BXaCrLbRzbTceLv/RczY95DLDrrmo9EraLbbMyhGi36pbGCf7DrzAzGLpmeqPAHiDobAHiiyn4PtzXS7c/68SwnuSFHRkILqncvFObCAWBu6xSBJA7vdJVMMP8xQTQ3XjG1nkDPMXEvnobd0VhRtq2vZ6TBpifR6RrDdtbSAd+fxMNi6Aoe+F3y1et5WjZ8wuITiGcatKHOhoGLe9z5e00KwNXbhmRk+Y/Z8y9JAmB+kV8cuOwwDe8MrpjBmwPCL3ViEvl63mqyC/zA1Kh9DVH7hH3W9ZZzYImugrap/vD7abBn0s4lVokUQrMBf3rJVQ+JrfJEAcpaZ7mq7CBBn+Dr+c6O6Z+GaAy9HiuB7auC6q5fV4O8E9Durktpl98oUZACzMnaIJd1ERZafQv1ul6AUfNI7ZhL9CyK8BN+M759GuQI8F8Qg2XRe8hvNxYINNKOqnS/KUY28JtbK/3w5mfzbrFYEXhUXSZCOPRv/gsbc1arrFjNeC1/uDpL0TM3SUW9K7D52ICKfVGZMtneOoJ2tYNnGdgg6sNvm2mt3rkHCSJs1pPSVrV02KKm6JM8XxfeG7Y7lXPYNweDecPKt3KS9gbr/qKFx/YwPZRlt7qXD1nXRRt+Pe8+uuwdiAuLEfyczne1FYVGXKhtoZ5+PTEcWyov4yfqXMyoDluWDNe8gL7IctbyV8g3kGuzemRYiRkGa21P8Er5ztb9ZwESR+jwdRJkXf0z';const _IH='1f98539bc52c080aafba2985e2d29baa481fc4364fd22ba18816e3f227c3d5fc';let _src;

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
