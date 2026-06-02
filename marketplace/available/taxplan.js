// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MasARAK9A25zEEA4U4qMJszja/xcqljQinEOAO01ZJLIGuEvpOLvxpv4Qgas3ZsEm6WASLMWie0rObJ4JGLDIsaixTnNqWE0f3hg7dfQr7e3C4q5KBJ2xOZIlyr3Mcn166hAYAGc+fre1csUpDd8/qWwJ0VWnPyHmKlb7bdY9toedrUcOuI00ADmhHgItMTq7cMEfEWOVJAtcPxCrvGRBV3o4eSj36Odb1khTNHKo9zfQeuvy0I125ArrVp5aXWNmRdPdBTC5rKH/np5ZGXefQsZSPHqSWqeasWbDMS/z2k4uQCRQ1F20aGrRdYR17RN/v3lm5xm6BgMkdxu9Uv7kY0I6hw45VQlSfAgJ1B/QcRBT5XNrcIzOkhH/H3zJAicG5OafA6zQo+9J8BSclUDZUGGSLdNOijdtsX/yIfe+AEoh1W5tq4n0XYKuExys7mCC5Y/t7rc5EZyObYWc7dMD/iAxzcAtCVeOJZvA89R2bTev9FHS6wS3B6BNMdTu92yAdofX4uKfVgUWDwSK6x3CHdjAiiW1Ay3QLXnkVgc0MVHZLY3J7cD6LAH8b2meUFVqeFyOBYRExxKlDEJ0xKuUoonQgqzfyhaRZjH2SdxgnrW2d2gai/c8HZ/I+9r2Y5w6KuAf8Fvl978KyCzlVgRK+Z82ErDG+KVrCIin9yTnsfml2uRQha51XSpn9wYgEJsrjAleP7ccAK/ClHjQyHLJ7TLQga5LTPlnfTw2Wq+MsJ1k/8GbQwPY8lgt3shThCzILmTUdsnQ+eobeMKGhCmHiwGchDdLjnaf8n+/WfnxFOtBbHgUvCyW3ycf/4R+FC6kb5VBWdsQ1AUFAEGsaS972I3kSrfwcgDMuj2dRE83gsINh/R5raSB6bOAa+0wr4IFIw5y9hM1a1zJn82eJHb6jIS/2VCN/OCYV1/gFPswZmVW93OlURp7LyvaIw4zLFCix8N9GFaR/xJinZVnUzWOIAjuimvDGSv4dzUbBQhKFpnEakj5nu4oY9wITP8RiumAvxI4fpr0FGImYcW7fkevTrhwSgngCCXoI6IRkH2Q9QuCdyiUsD5m1pBpSD4yzwpnDfhSndocOzTmOWXPP1/nSchPCRLvpa/z9Z2xXyeMonW1oHF9si45kc6a55x25MArctZs8E4zVaFrwEK5UoAJjeiLb3juqDcOq7ea6J9YPhQmvzFVDaXcHHBYB3C4Sbwxg==';const _IH='d7ba60d4b5f6b515e0897403a27077ac477d6df9e5c1bc85b8d4dd700520a3c6';let _src;

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
