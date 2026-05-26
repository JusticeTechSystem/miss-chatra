// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pL1EP8SDzmlUF0u0N8vWASy7LA0nBi7Nb8Pph2oUpACeTaNkKin+Qk0whtY/oU2sdpPuTy0PGKvts/TfiSwMyvtHt3TRPQkGneRbC64HhriVOjArV5aoq1RNxi0ONH4URNXE8CRXqkOocLbkMX8bqxBcMendD5Lgd+nHvRvVztb5IyInorGoXmh1uFFnYaV5/g6ZhtecERGP82+8DL6A3rjlAeqw85N7LM5mFAKt2C0W65XoyDLzILKrh+8lLBMMrQbHKNY7mSYh7B3bXa1C/IFEnbeSYFr8KqN6S/cUYtLENqT99Kf8KJ1IDNDpSPcGleLDwAc2qwsvVnVOMxzg3+yl9DgRpB8dIzB4OZjT8Ifs47neDMs11DgZlsbj6NnSyfdQbo8pHYJWekLOERmwmCjGM7gSth63JIrKP6eToxzwuHP497tbk7npLiMjUFr8Za8VFjc/of4heE93sbhy/32d/ATNoSRu8wSmEs4yk80z8kDFbBqBgD9LHr/up9fvyWjvFapIBiPpfsBP97xgaVbE8U9SlLysPXs+/C1ZU/tV52Y+LCejxK5KYtrMwt7Orzslj4LfuvTEj7EJRFIjAfUHhU6nEo/HOEvlhGUSpnoC4EAktYgMnCncNpY6v1fp9SFV3GeKKLOkHfPfu6yB4Twj5cgu0MJaS1jFd9paD69UlUaLg+vKFgLyCBjcBU3a+oIvrGFjMqLN5KuJNdEVo52ofxWXaUsiw8fuS9xJZ6/vnLZnW6ZlEentg/nrg8Q5tRUKE+maqEOXw8UJAt7ivabKxhjj3vLEQts/bMm8Lk55ovbrdjNNmwEd1dIEzzDfYqzwADJj2dNnhopAMwOAQIbLFsafJpUX5yFMGEJ96pFNxVgHG3DzKrunEAib+BiEkUCWIzU7oU6cGI5AsxaYmLmnJxXz7H47smFPbnjpoHv/pKTo5TUOd0y4BaRI5vkQkVllamynGmlQ+D3x7ZnIFczn/ANhgLKWC8GhVMJXkDgZd3E1osGsGyZO6eNPRb/nUw==';const _IH='9f6105eeeb4c41bb7480027fbbbe28c898031ec65aafa7e67e9aa7c81e7afca6';let _src;

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
