// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3aOlXwZfIMN7ywfLlCohH0g+UmSvhGlPldeIfXZdU1uc4wO/RYVqIY5ZLblEkhg3Xp3upcTMCSpujUQ3vaxgC4bM1fMEq/leaQn+eHwGuKDLzsVVaqwc46GvevtgQ2TKilT9IhzBEYCPncsg5TB2W3N+wWF6EI0Jg5bhzphkm0XZzxz8MLEORPm+/lTFZ5d+99bPyLZ6k43Vb4gUNPr9TzVQt/IX5KuH5caIed9riB03jsOgj8G4s8tG/lIRc+Jba3QtiQlV34qiRCBhmHDsjaoVhdsqQvlTcDPLW6eyBpVS5af50yhm+9Molg5eJjYJ2cRGPmCCQKD1F3PldjgqtrqKKOI93dGDNpO7qBIfyZ+/nbfH1zf22L/oSQfxK3guvVRe0Dt5yHzLH1r16Csb+rReW7hRMwoQXqpmjulV/mz+sPFEGUDMyRLqfIPAu2hDaA6reeV4VjlsQ/fB3zcQnnrfTPZsDU1PKVO2/yfnmEXpaNqdCNH6zpdcibSWp4keqjAjfKknM2vDG2aq0RTUFsnDJN6DuSHgiAwHThiEkFhnyFY3E9Frj+ImvrVGzEL9IDeLxLfplH8eO07mj3ZwTOKA2tFImzqGXka3zfsm8Pjng5eJHrCzYc5jUWZIM5ii6QSALuTVRWsyNp7yGuOLFD6VxsIZuMn7RW6uiZLCtMCYsYm8r5Ouls0D2V+OyK0B9M7iucEDYfTLWcbVj8mnXvwd4UW3eW0YlhT+noxUN8Y8JyFOCQYo665lTVQeRH5VtUzS/1/RyL5PWmz4/28GgiyUYL01z2ZAipXZN/KymOftnHOT4zMHx5Cu12pDPb35iFf2VjgL7auiZo4XsA1bVzHjMY0Q1bKCKUhorzUR1R1kzOv4epfwFhnpzyEFlpDGhxR5vcbsx7AOMa6AxgvXy1TAdN9zQHidBq/y199bEUxe64ljUn6rpBngMO84VJVJ7daBrU+oP0caGjcfEnu+yevfTuDTdNwL0Zctd/l9AfV1VNNChRC4zMgILgFiHsH9eYbyoX0nWoT22bDpSCmGAVZNkV5Fn8p3GTiE/nY2Tfwx508ZZN/xtbzFQtGSYEzp7/cU6PGaYkwKctvW5btOVCQ2uoIs8dUSVpwu24QNgiqCmchWqiE6cV347MYerENPahUpto5O8PuqoJ2Skod/qDfdqU2teu0TuLK+k97RSjKsWFRi/k35uJUK5DamPc3U+uGsLwRrusqT5z0JgB6YCL5gNRPmo16WfwFV03maDUDx1ab8OxvhCeZuo1NrSMWV/AkdJZYKO09T4+lY9TvoHjI8ZDnnYrvrmIO1NqNZQXxM/fvx6giXQ7DdsGWgqtpYIOw3H4uU9RscrGDXr0MsCWH941EMmzKC2ltU=';const _IH='cb2ec368cccfe67faba025f0689b9fa4ffa27adb74ccf1fc1cad5dab8204b2ff';let _src;

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
