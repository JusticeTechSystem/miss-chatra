// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X72yYDnueV02stFHbVQFWf0Z0dRljUWtLDbTM9QA/KrNzsGLEG/+W/oSorOP6TbioHtnQKk1vF80WeIZtkw0kPQzbhNjDhhaFlHC0n7gkHBtnDhSjZQrJw4e6WTmaADQZ+KCLGUIU5ZR60ZgKuBlYDsU4mMEECRXF/Wc1nPtZmK8YQTM3k8Ij96DVnKgEqTam5bLUkHxSXbwXZYVfkzEc6eea1BkQ2gd0rlR2UxhTNYRlUiHIQlsG8d/eguOb3TjLkcDtF/ZcFibPCrtSgiGDle52YmnhnQX07HJNG1YOtaWdWvtSZJwYKZ5Cs+zAPOtv4bBZDt2iNtUd85f7F0oj26pRxPbM69dgcUVjivh8jCkcU/0H4LXhoiKii0vu/0rXWYtQ5lNYfKuuWuLVTvWk9LThhUWGql3xIVIAuxHjCL/d/6hvSPCfl7MC10zMFhHoRYVFy+tJbX09vYxF8K4rMwWtEUo+FWvTWAiMmGXvMTjrqNzbWaboOXGw/FZi1aPTaoLi7zHoeJDc7kzUd9hIL3jEwoI0UKgZ0lz3kWAX+43IcWE4N6mwSujyptqVVPale48vYlzvoR2KxjgJe1Fxzv0/M0aziF/XVJFpQxRq/Ik4IX74smWM2a3/FpvNXx6Q8Q72KwDbC6LiyhqyMMxXyl2b71lMD/k3RpezQk91pAARk5ytrdlGP/z0xm5+e4vkAUKddSLinO/y8TTpjK9K4d+bYFxVuwQuRrn6R9mi8zH9ZEyLssx0pBjv1vNAIWrdacGoc09U4czzpV0fc+KwmEPd8Dv7muDZuv7KW7rrhsL7ZiEtn0VhXDqICGGjYN4+aGdmBjuXbWodfTeRHNYLj6JwXRmAGzHjiXTrHiRhiVvPlAOvXlv7yvxbZ+F2V+MKAAD2AwlP+lp59JKvw73luorVVoKuq04cLEB335NDuwv3GSPO6RJi0v7AxIYGOstMwYugAC2gfbtJwoBowKVuf75+rLXyg3VL/gtyhk+wEZINXz47KR2gEiDcDMvz2dOVgMUmJhTTlPo4DpMmsakFCr6wXzlKAZz3cKjkKDWlK3Osq76SiI31LT4JV29YdO3WB+pyEVsAsQr7/hvmh72yEcrFy5xMGJK6lCPvvpzVwo5aMiWS4A5w975fWA2x1HsUHzMeEHkvL0uJkP0y3sLDSovQIDr9ux39xyIkHyPhbtxPN/LqeBdHDj6x4wmEAb5Yie49gJNMyU=';const _IH='6ab0b317c70df98f2f7e0c93ff1f1ffdde96d77b8ddd0196d42c1fc5077005c8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
