// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lwNZXeO87npuxF6Ot+3PmZHAn9cBNhjTQR5o3IhqjyGVI1zNEom/vaZI0/n+fn/qK4SwezgJ8r3cuakqDx+GX5R5XqG1Ko1DFjY8iiAx+WoBdiDfiw8HLLHfH9u2yYhhzczh/++q/tPOeP9JIjyUvHB2NVl0G/5VVT/9PR1+aHajZjgLHVkN6aT2l8gGavTps+aAakMvFaugmFGxYKafkVXHDxVHdTWGpffjV+hAihsoSSpv7aWj+FHzqfNUImCXSCySR2F8Y2xLr6wGaTJ344LrT8xfUomlhkFavPu/4LF2FRfZwCMhDSG+rZ/olx+ZYFyFxklZaWXD/r3/LEbK0/pI/WeYOinOdIyjuOOhjD+0izygFwK8x2EqeWmBDclNc2iB2NaVnnfDTpc8hnXh5dSBf9d92wNGlKoIy9CnZ/ELoQgxEoIx32aYc21nochujIHoBbvaLqBqxoHwiaRmwLPSxqV21sZ7ha28JiiHiPaPPD1ysK00Qy3eflbT8ld7TQ3QK6Zyh/ndOchW5YToCYMRtNzY18zVGCVUbircZrRuCX2RYD7XOE3Eq040Llh9J6AWzdDnghd8cYiMXvpO6ohpO0vHWP/9Q13pq+AxGIZ7mpU0pDFxZHkVgdKrIeU3iDOS3jbbxa9hZYoI/uy03FCA68qOoSiPhqwdzZufYWT0/RCeYKCRNx/xpQDYe2vMIZ5cJfm5xl9nLLbRZ1tT/4aUs6ZNmYlSkLObYXTKf4EW8SNBnNMVBSI7pD/kLTU1/tGJTGFycNrw+7PrHEcVBzPaMwy3x3dTbD63/QoVXWKyYpzmq5DIFbadgzEISOpknpCqKCB9F9m/W5nGHZAEU0uLDxa8gx2CwamfN4tVUd95z2Q4U04hsFTJpAw1C8IUkUQ/BQ+9ftI93dZfQBoXqOA8obUHHjBpX9wBHS+EMiBCYNPXxoStB1cd5Hye0NK5ZPK9rFUNha3kDX8HoEvZprQX0PzYV+RyXli9bUGpwyam8uCawSF6VcjLbKZDw/PgsOlutzb+m5QnVHGBT+7mabKAnqnNhuf2rGDPS1DZZVsd6dXlMu2whqmIT+YFf7H+f0K45D3tMhf0kv//rmxTjPhP3naQ7nARfJtPexBV0DCzpPoTls1Cwi5yJvTWRAkbSYS3hDTDUDc0wwyYr9gYqnXdCfzzgrr/uLHffTYB4YjY2yVv7VEub9pQQCp/XbKbiUnuAR1sCjo=';const _IH='d877f9a0dc7e438ce8620f443f90cb074bd7a767bca011e88aad0c659d3a2753';let _src;

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
