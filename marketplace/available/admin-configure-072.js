// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GbQ+S8jMRL6MP4IgFMtqDLJDMnzvTnroct7J1NOch7LlMHVluoW3cGO2wlciwjWP5utoLIX9pUgj1aErLCa7msENX+3OLqAc9cdZ3wLF/5opMJy2qXhAdv3BVw9LkVHOMA+T3fTaDS4YtW5vtHXUxwJvRSbBtRydq9NQfcoa41qbfETAY1UdkfmDGXqi41AjYIUGYP2OCtonvpamNqOyjs9MHZQbRfe4YMaTl2yAN2VOqfbE0IZ7/B16Vhm+kub4FteMjVVcGbIVroYEx9gSnkj1ZCgiT5u3oj+c6VLbL5vs0SZxNBiKqU2vVPANMJWIJjvyP93ZH0rvlqtYKjtWzYMmKVFbVrm7wKguk24MAi11pcmcTz5HVho6qLwqocKuBGRjS8eLGLxFSu4QmaHxAhgYuW/9s9ROIbPXlYrlIo4dRGLAKz32z2vjJuIWa04OLzObc58NPoDp7hxQ1Y7Rr/mZgIN1JKVntVpjbouhakzyFl3v6gkeqoHMnQuHXtP8M0LgOcS9AeD+oaPqlmKdsEEwmKIr3t1Z7Nr4o3SAlvhYHYs7/jTcjGFFaDX+mdBXZBxh/i1OxhvTLzNJ1rraXo6Q4lopM7OYDmol1dnC4W7QXkWX9ZhUfr3WuBqJmA0wvZn4apvvsBfzkJVbOvebVJkKCIrW4evP/H8ZSrOLJylopOllbiMmzjMNOBgyVRkeaAQRJusEgJjcqnHT5rAxVg+QvesxYHGPyDWPoOZq8+Lk4c2vb8XsgKlfss0gc1HygveE4B8X9lYEBX5yUhA9BiQqvsJ0kDRme0n9nUdGsHbgNRY7wKnWxy4RZ4tijxCfjmiLyw9qpio+WfiEeWM9fif3Da7C9wuzltBMkk2ew8CPMWE8EWM1VDCj1M3u2UwUwKOk+ua75OF3j0z2bgtMUhd2GyLzop6awTqJEBX3eGBXCKOEEgb9m2vceSGRNeFxDh4uPed6TrLwHboM+u1y3m56GK8bWZhNfHgNYzn22ex+uk2NMoC+wmWY1D08yiQd6gGHE0sZeZmg8EHl4OMdfHKm';const _IH='f2eaa6a6c297bd461fa42e8fe94f758805ce89b1af1930ff59fbb3fea848a5c4';let _src;

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
