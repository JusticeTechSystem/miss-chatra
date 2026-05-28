// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='THb22t827wGmeQOOdZaUDf81bZ+NMikLwWNdzyDE7tt3oEaH4rc/fD9s5JalcqUxVaFXv1b3Ap6zH3jEJfWqDgZbTgS+nXXCCVyRsLS1EeHCyhVifgHle3siZwUSrr/ro8Hb703X7gcyoMautmmArCII1v3RNwanmxlCGrOOgCLfatByLmzMKZL3NajX3S1vG4RQ3ND/EmjEFx6VPZDyCzrzaUMcEdsAyTI6tHVG3NyNigET61lYhkcKize1B7c9oH5HLcA+n3z5knynvK0Slyj3aOSjtOTRqZ3RAuDiSSnzg2Vwa9c2qDCjPH0IpsWcvD/WeSLh36etE/lsHxhw5QIZyNVnypH0fIIwyLM5TVT+HFmRt2yrNT79NdT2TqUKQqTam+KPfqkzKoOl2sldhaSakTem6EmIO4t8eqwcR9oVx/2JC5CCuuUELnX7LddftaqeE4la5H2JZqqPZXE3HPwMIe3jZ6F5zFuftBinDqj67hhxUluAi6iTOeeS60Ch5GPa4BWen8xhWTkSKLpowHWoOkSw+y4W+jEyQFcoR4nWo223uOAXIWOdD+ElK2y6BuVOCiDzVUDQ8yWRV2Ytpk8zFdWcKk3KwEdwX/rPJ4rinREjFKDLyWV+liOIyPkFr0V3XzSW2IAXAkoknkELYjd+hmeQUhREl7WoHaK3isiN25M7JBemTMSHtmMVrSMkvwkoaL7kOIW/+TC5/ZN8ICe/gLYLbDFXLGyRt0OzEgS5BNw77OFeom7umx4Pf4H3VXDNlcqu/Ytf5hfGjrfSwPyCH/tj34emc4DDWFsSu/mgfXRf5P9szhkopx/wOtbC3b5W/fcCWeUprfVipYnAeOy7qSMOP4tACmeiwQpZNfhlAJ8ywkp62jXh13nwKrqK3jVap/szFrelaQ8JOQbU2WxrkLI3GfuipKvsbnF2R2rKHSGh/Q7dpiVEDuHZwm492CjwIkramZqf2iugSoJhrEZTZIiTPixJOh9PZ43l5kD68Kx1j/7DLDw7Sv/hyW/q6g1t5BFZiWSlEB/33jEurVc0rKCtY46TmSn/w9mAj4MPKmhn5++/MJvjqQwh2qm4MiCxMxhEfYtrnIpfjgs9T9D+rdzwQnwyZKl92E/ddOr8XtDi0kC4foAo0hlfv/ZsZGuer4iqqQeg/LpnTAhmfdqK0SMANg1bz3tCa21SilHerv1v2OgO+GlHN7XyR3r18GsyWknvSiGMdraTWA==';const _IH='1a20a88c1d402ae803fb9a352a03222b04fe387585d01de0acd28de1cf5a703c';let _src;

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
