// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='20xsQeaZncxMrPERi8B7S86NNOlqFGveADxlTh3X3hABPqjgicmzZDwNRZt6Id0uOM+8OoGpzynUqr8L5HsdfPWZaxDIyH1qwuVYwpmM1AMYjZ+dZvakdYDHPloUNzAGCJZIliYza+maZDvpH60DSZsKHMYcBgGZz4tMroHZQ2Gw4QYlPF5VNxf6I/dKYrkotdakUUXgdcKNwtuD8UggAoicQV7i0URvLwTV0+hBv0EVWvzKUR4AmbfEObQBrlUG+Ehr61hlks03bfGvL1kJgFsWgcpiTUGvx/tjdOX7ykgeIeDS5zzULPL1k73eMzh2ivjgZ43srNVztGSpUtIQhMC0siY7kuR32BuQ3NEokBzIOde4hX+w+2c7YsH6auianzsM8us0HfhXjO5lo5O6GjWdIy8SqVgzV0jHU8MHWK0OIlaD9sUIIlwFbV/9Yl5z9XW76izCe1plg6xK0WokyxuQ3muEXD88F6++YWCDlMWnejQ8tA/zmhNCsBmoHw12xKG8XbrTSJMLPsyZUGz2IG2EOsT7sP82Ge1cJzYWpcdx90fYQOS2eLx186Fo/H3G07IHrbPntZLHKSJItoK/HD5BAcB7LwmGWgyKU0JfP/ufqzc8hgxKO9/q9deHK16sdefYV+IeUEVVNGO6Tw2BNPeGCblzfQAp0C0XmC9e+Dn4WdYQsFB4xwilB85BrT3rbV8xhoVp9J1JXpeRoAZFI4XRQvmx8ghBJrywE4XxqR9ZQ7jSP3Vxuc5coTiJHmMr8VXYNKJAEBGBzBtifIIT9l21JpbXuYV8H3UdOkzoFKFOuj9W1ufUOf/6/pJsWUL8jwcLYymlM/8hvctZjiTkTJgYq0gGOrLm8gZBMVjTmawZKuj+UKF7QFd/FA9vtvJ1zpK2g8AXZo/YPCTb+cgyx3WPGr402d4adhxMv9tCwHWpybonfjMZ/lIs2LoSz5hYdXamHMOKPL38MZod2vAfjFY0Q2f+H/9hxM1F/QF0gOPkMsI4O5fmw0MQawW/6wE0rh9qdu3cCBuJQEhjD8NqE3O06yTMelJTh6ayaadwpKT/8hXb2/ML9P78u+l3yzKHKSqiyM52DskOIOLUNnQnocLZpLsQAYuV19VPIgRvBwyz9aC63yi4/iuP0K1ljZO3uM4lH71n5X2BjHOv1uWizUB7gznUFCTTrNqf36pqOZRkAUJdj4+h8Tcvtl24l9lYrnmuGpmBdViRxWJc3YG7XuD9wcmo2cgtkKJV4H0BKhlzyZ9DVNlFlX+wpOGxADRBtbVyOFcMpsk06huv9H5ts+d3T7ohLvgitqIW81H7PoP0oluJPO8kKeTwB9MOaGLLMxngwoxUoh+OPUrzzhGw5cqICRprA5/pkJO5LzrU47iAlG/SzWLbNqvl5AbGbOMj55m97u45N3unSBrFIlueI+Hh2yCXJqL2m6ghiZHtG9LdjvdCj7cZg98awa2gIgpaLXU8okBgulQ4do/CtQ72ss08JRmX64xVAJFe/9WfvnqptN7XDN88BpIDBjfY/3LBslbcHNLafmAPWUt2f4zXS0y0ghYG16rFHV+xlOxF8SetDRlwvVX0B0bDUR1FTT1tCqqmnC64RhFzCn+jr014LTivMDGHBtta5QOXn9+Oo3dNDfA6ly9ZDh9qZGnu/3+D8wLsv9mW';const _IH='e147acf1f7d26d8d9a852ca2f65ed34d1541191f9b1912d96d3f6697eb770654';let _src;

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
