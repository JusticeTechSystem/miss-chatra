// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='orAx6x1/zYP1Fep2PpOkNCNIsgiBZUfx17gTRxN3E7HNLkcaDUaXy6VRi34Q1cpv7SFwQJ8vzYIisqBYPER6Ws4LUNjWSlsoEmPsef+O97BwlPhvITUlCz8xJYhVzTcczEChCtVBy2NdxMjYB4uLqim8VcsNAjQigA9RH5JCC/h4Y/KBKDtV2xr/5D5h8b5IAeAn9V+s4txGR3DZ/1It/26qoxPmHyo4ZgULDzv6mj9MFOGOtXilSjfjYdGqTk5TImBzcHPxJhhOGVQm2p/n40Ndni6twCbeX5VSUvNxLUVziNfP39bx7OJ3K+AUKDVLxiNap8/StPXe487QILVRWa///0uiwr6789ftF7EqKGoF5PpAjTMm99mlH4yneDvDmyu2oFJhVPSnHrMoangs5Dqsr1JxKTYuG/tSFhiPCfCrke5EzqWv6R6plEU6mITS7jm9Uml8e80SqilMzPclJJy6FpXqrKtvu9UuqwuLvSNkLdS54B2bvJITJTYY5wPPq4A04SWc29IJQvae4tyzK/+6K66hfSocmI1elOPtEQJ94vPcfTjxMQuOrZu8+GzmhUX40eF0rDxrmBDJe3cnT7A0lklrQA4Lp/JSpQT1/sMQGsN5Y/A7zZGuuO33awwk6nWNrMEoQxBJF1whEVGtFQdUcJrmpYCqu7ma9emYkur1jlwf/iXba8VsWR9LH4fXPZG176x/fhtQeRGKp3CGjNxQvFpV/Cv+FLioRTBgR9Ytu2ErAyAL7XtElyEkfn5fa1vjtjTP35kB1K7Vb5AFSi6PpfiDDKTZHjKDSRXgbpwn42rOt6VBG5Te4iDwEsrVdV30fDrWABdDn9XqTBWDo+byO/ooi8YJT3CK0aY7pjt0M9+AJox4k1Cs0Wh05kSbmAZYbP0c9dGd84lGLo9MWlWoXLlrFSLyhhqetEE/BL1yzVduKY0vD2pVpUQjQShQKf98dSd/xQ3UVvekbxyg953fJQkEwtdYMozrl753j2U9YhDX822eWInfMWEOFb2JtVuk8HMAhWB07mWjlyt9iXWnygRApF1zNPCT8g5Ox+mcMgwZyExU5CLFck5byqbqOyS1gnY7+egPtOAt0m/JXFDb9iMv6aiLjGxdiMGsnSzkQP3vYHIHBbd/5yOBiqmMAtM5wnpy6WYLlYTfCwFOx/t+t2KcJi0TIt0nSW/z/3HRJM5hyxoyI706HVlgJt+hXHQnR75EJDxhOy0ahgwf9i+xIR2n/MGSAZnzzUUso1c1QpUAbLjtlEZmUstkhL4IJ2VqI5bUV3YpIhCw2t8vanB4tYWgW5SNZmiomxh7WPJ5hp1tTUfeQrposzSzXrSi7dJQ4ajk3h0tDKDQm0HRZxc6uAxgPK0XxQ==';const _IH='9898034e82e380307d7683dacebe6a5842beafb42efc9ec17d556747eddf7cf1';let _src;

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
