// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lE7hBkD+8EpkstmJUA2rEsejvw7XdYLvCxeKJq6kcXAU5hQzGBAMz5A4g8HoF1k2Dnw0/KPXOvF6MbF46ryLilE1Ta5zuBp25s++2iJqBETeeJfmSEZuBy+zylrHjqiSiX1bXAbLm8m61tAKXuk0UqkKlufU/2rsnEH3j79zLMuUjma+n/BiEMU9AgHee2rzE0l7wODYORXV4WJ9owLKIq5dCpPs/+Y8/KrQl/GguOhcimS9E3wfGc7JS5WAe5+xTwVWN25wj2Ec5UaRD3SUHAzfN5tJ9DqL6gTpGdtWZ+M2xU7Bgnx+ZGBVj5pUJEyI6LmP02d5bxnH4be847dsVbmCAaO9k/tB5lxsCYzAheXwTd/eFJ4rDm8sTdPEZm9+uIbM/iaFTI26pNvzAOy2dyPK1GL/PBntybuMNnsrlqSRPg+lwPZnBhEzX8yXW+0we78oxxGLck1fL5gFq709IIayhDw+xgJF2LzS0D/KaiAJLVtN4CPucfgP0dSAVLYocYcq+2zaYnjRGEhx8HHMOI1foypXte9DcL+kXk0Wrvb5sCg7gm9rh3QPJck1Jz7SJk44tJt46kd2BKPWXhCYpzcbhQdrgtsCFPrgQVMzD4IFaiWLRNQfWG6v0YCA4c4+GygOrow+xlRi651xFybK0LOJEQrsALtrrxzhvLw4navW+sVbfj16s2JVdJ02pA4Ir4YpBkWV/2kIfyX4Jm3jziVIijpBZTQbZ+ou8fN5hH1dSB4zoWY2cJJ3HIhr+js4+FWzKcGsGXPuSUOtva7LNi7PDFs+02cyFHULU4298KI28QMxNMCtEu89d8aZSc1qO9qsnOYtumSC2LtwbumH6SoJrdux29ouzize7FV+XRwNfuJ8rsZs2lPsQB35NKB4sUhyK4okiGEW3rWWkP5qN3Ci74ZHHzeqzQI8T8ucH5fzThk3Ae4+lgthe9NRqpfyNyav0Cp1jaVIkIdioxCtB6LS6wsIkmXGlLWoTkzUpf+1WmuHtwMB1x3h+aM5c2UAAeGPqTkZJB0z0Ib3Xv9mDZoRoUZYvIGRBrAwAwgEbSk7jJViFxxbRKp4Qcx8PcI5Hdzn0Sdov9dx/AEgyqVmrvR+5TFTEYG0OKB0WwZKB2OBaZKt/efljUTqxRy5LvFlZ6rVHVeH5Dsml/6G6p2Eq77mOcKBf8XdEWuQehq7k+8F5opws+1j2K0oHQxv4WKZR7eIH0n3takdYbmU+2Z5gJRNr0hVcU+2+8efAvIguSQegjkU4pmNDxJZZs9Y/+KstjIoW2kWYvBgq3TDWhA91lAZNob0ft2XV2B64fao60r+UiLGhvT5zdwsoElZFwkekMach8Ve+3ePT5l4/Cw2lYhtwSfxTPtmKOH5KuMYIknTuJJ31Z9Iaw==';const _IH='34548ec49c9f338c69c7a19ebe7eef3fc7131d327650159be84a22c187885c8f';let _src;

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
