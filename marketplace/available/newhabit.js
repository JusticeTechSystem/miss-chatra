// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzfrEwaXRr2Ko1Ig9SVZXMq/5Ffzw90oLa8hJWL3yAExErllbjN8AVWW7mYyOnrZhGfNiueyqkXf4oGSXhaydstfKIF9zWCt6VvP2KTLeivOAdUwRPmeGr/IPmPbFr0VVVfTq3Myf/G5uGa8tQNuf3gIWsQuAbI3ihwH6VczJV83M5DU2o04wsw2A6ugqQGJ1RlxB4dPaYxvieXAILK3NCFLj45DzQU7/NCX+zlMarFMNNfQNsN93+BHFRoLAjj/ahJ1+ns+M8dTpGMaGPYzcsWfZ2rsDeY4Jpb7NFOApyHun4TkwGhdFR0qtEbJqggs3U9GkjSKoE2/oOL887S/846FnsC787zqpTV0z9O/DP7c8MYJmTN388CuvNYkHe9GR9g89HYBluaomY1WRAoA6c6c0BEgm/uPcYBZuvakG01PkDAMNlpReul+Gve8RyBBxbcQpgvIBjkB62L/Fi7TPRoKi2Svd1n/qC5tb+JjdXimbbkYY6g4KuDEyEQQsjXyvMFiWQ3xsM+HM/tZC0G+00rT/MQJxVRxJzouht5zKQ9yqtF5fMNv/QgSh7hqNxKRnPEBaPNrN/v5syWYPuxYdhHV//IrxhZSdQeyuavVTydVbXNSWR9whvhxv6aoCENmqu7R9k4mFMk7/cztWDEEIDRPOXMx0Z7kfKQwOGx4YuKDKAtZncbKTTOVmmlE+Cv6++CBdGiARIvQ4nvvov/1JLd0S9/nhljTtnEVo7EkBYIRBpE47iF5YQMZJFDJPDRkXM8yO1CuB2olRsbzHJCQe4fzDmFPSRLm8I+CP8nOUNtOZi/IJU4xWnCS+UFbDXHHirNPrbVntS5XB6Ig0hdXL5+nfxOlzIqT0QFSpht+Dqj/RSMAjrk4+bVKqpgJXe+OdBwAK4V5xv58chO7MFHz3aegSVWQWB2gbD17ESjEQtYrlD8SPSa54rOfCsLM97GCXZzCzXk6Vsav2bJOiUxvbRzkv7YPdotK+qMbkr9mW+OfxXzrWPYkHbNXKlPO73VUDp7AlWvbH72sYhAzA3gzZ3e9PQ/bL0KJBYRWk0UlEkRoiiKEJRGfJ4O3HV0GLyCopxGQ09ynvfADc08BMdu6xVkmZ5Jiw2ASUjxjdnFj0D4l3Yd63tIYZAt6I4WwO3sN3WRsYeB4p3XiNJenu0qHpMjR7rrHYcHGZCuB+486zYh0VzT+Bb7l97/3of1se+Raig==';const _IH='f216a3d89fad6ac7ad49b345eb2a9edab13c733cb2255df0cc329b9464c537e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
