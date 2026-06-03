// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AD2gUHa5y0do7NpUhlPSoHOlR4qp/BlY8gPsl3D+HWx3g3A6gqKS7WZTlWH9ebWv+TgP1e/CxVHoRfaMqsVwIEvZEdG1Z4jBl7xm/A9sv0qyKvC+Kf8i2pP3KaHhp0sypgkdoII9kMV/6gcwAppj63aMsIWeln26ASXkHFw2msm0wm1nSLb/chBEqdPvS72/bRg3aa7vbmiHNrc0s3i3Bc7PYYU0iuyTcbI/WGruL9n1LMbKKleMCEslzMqkL7ldM5N5ZKeb2e6yq0kyCVd3bhgUN9Q5RSIGnglTk+UDEsH9chK7JhFZbSmTNbuxQYD3DnaEa7B1gyht/DVnZ9N8ZkXqrzVcZPLijSu3VcBE4lqALurfv9qpy4Z2neBiYkidI65kays7nD50uTpbIL5j91DCj6ZoOQIxpej5YCZlRYrY95LMTrQodXMEDimPpGV943ur0wnfKA4xbAKYxsjyOhjaoNHeoZFeXfG+ernjFhmU3Mt0L0ptxtkazzM6g1juZQTTJf4aWRYQc71q9HmbDe6Q6bff6ESpXz/gpbseg1c/MZxSWNCQ8bWbJy73aMLRjG/3ALEGkUlY2kCVHQJPQLq51FhTpYaiWHOw+oc48DVe/jZ0LN57wN/rlhPHJYK+koPTfFVOZYTQ0XS1Fjv7oY4H1HVLb9IRBP3ipaj8n3zFhedGG6l6ZV4pjc8OPjIZOVgbfcPF3qixIW/TkBGQGhB4JXYWf2abA/QVsIZRll2AKE6+W8+HUQCZ';const _IH='2605bedd69cd8018294f4e13f77d151110bc3cbe4e8f8a4b2e886a6a280613ae';let _src;

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
