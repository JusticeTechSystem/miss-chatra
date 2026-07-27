// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS/t4+r/5PBaHDYiQV1rbcBZNYUlNAAmi9d7khr3MyQcvGb6N1q97ty4+PuWBNO3hzlz1+xRkPJBLDUEH9H+q6Xxl4p9vpzmNx76nJpQJG/rvi/VIHgeHcwatHGofCYCkd15ySvVj9NNQ+BUjYwcIDRhOFsyS2WylhUdByq2qptMlvaopJjetjfKYM5uKiQiCsKGquVYA0hMb2zdljABEuizuXcRTcs/48eSoRph/a7h92q2bKnyCfpxB6zraUFyKCs35hEehXStxHmBxDLjzYjJAEfpgPRUiJtcAKqvydleEY4YqDsgbAv1wOHMHj/OnIZNbJNeJ0tJfLSQrirPoL3+ZGbidMQhJ20EreguxrqKxirQpWUM/AKHzFdQp9+0kZ4jTSz7sQXB0x2CMcYkDVw822VChUfq4FqDMcK5yYWqk+F7W06MQEDoip7eiebq0GZN2XwMpyNu7Lw+35CY8Ij5uXQ/hCUzSde3VakLExS/9LOCYttLvBLwmyP/xsgYXNUabCJz75VKJRU4oW5Tb5zi8A72aWjqTcMwj56T25vO+hbUItlvKbCsUu3UpdARfIh1nyL24Ymc+dUzqcu3mQHHE6B0rJRHyVXug/yNM1//fVvObnfFeoXS9bUGYgASJ0zhfjsGIHeaMNLv7X3TayKjY4EbAuSU0sClC2XObTuVMhL9yzQrMZ0Y8qVKwtxhwPCgwIJLQ+vva8TEzuH2yNUSJAc2NUcgQbWP5Auh2+7asr9MREOicZmzlexjlBD1zDiNcybfNnVuAL0aQnt7+TwoErLiBXe9kVzmkn1KI8+nbAlRArWyJHXcJHr/16LfmL/BsWIHW+HZZGf2DNLK9tREV2bDhQcUvzfZS5ih/69w8uvCKQuxXd5Q36HUGSk+bCJafixKbrfqHPo7m+m/xVYyKg6A2lGzQEv/y+1U5LUOug6BsiqZ7B1hr7txSHkJ+gdSV8djR/QHtqFv7Jhr4bQi7nDliGOZNG1M6b4lbwOPUJNJt52DqUHp8UDF5YrgeQrFfB5XFhElw0AjFbgu6na9gGcxmdQmyW6bVPo6LW1k/MZI2obtwicm6YtEqyhsdHsyRmz5/qaFx1iO8Fyd/FtMEOQC8hat2IEyYLL4Hc/IMn6jDmXIEFbSrfm2tur1K3MML6+q6m231ki15VgTy/eULmQizLvkoiqYZcMoTgd3uSU7nbO9f2qOq6b0ZqP5wyaSkO1usMYd4IdekMHGOhcgQk/jD2/HQZAAVJld97AkgHp/ZKWahNYBYnrrLrCQNWHWIjhQcDppktV949uRVWZP3dcd/jUX4tuitGASm6z9Tk5wQ5ubEIkHELoZWaTlnffvRsWNl9TVvNGSecXRR8NodtdXbS5ymAKx2EMrMDJyae9a1SgJO6zJogLwJGGpjlD75ifLQK7Hz+QFTQ=';const _IH='7dd5af076d243dfaaf44d47bde950b03291ed8e5862fef8e3e1edfce1eb3b395';let _src;

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
