// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RdZ91aJq7x4DSNPjKDeERgu5FKV3bZM1HbIf4mEwAFQe4MbVouevnAdWDoQIBP7o5Vy7r/PwkSsjpL95+o5FC2HdyaD+DIeisI8CYsM9N6DrOtPtKWsmxN7OEcgnFBqpQOZykwciO5PRL1NkXlTYKCZ0ZA57RtKMtQ7xTC2SfBRHUbhfLZ0bV05ns5VGjN/FoG9Eatlh/blNHlURnnZzLFrNK32ysSfgbRIYqPXQYSWJEvqxPhxoA0Fze+a3jzJtXr7B2teFKNOBsHlV8w4vCVG0nwTWoRARjc9Qpu1ODIQMMPe5+8+RolwiC/8fxKwQSZrQ9a47NgQDbsRm6JNWWzOx/qIt2CTd1kJQXtAZ4iX/2+pNYX+wXTjmdkOXQ4q1rTgxBN9UnLoz+NM/RgozuCczlpuK9XClcQdPY3iw/tpbRsPN24ckoJemf7TdYcIq71uK1b4P1D0E341iJX80ju7gIxi00e/5qhsUNw7dhRyVgSxfmbM1v1BQr3Hik9CDTmp8JT3IKcfIA1k32TBLHlj9L3L2FU3Kfcd800tSehJkj29DMi49PRBcYTnCh+L0SBObw5xApCaLmv23xfos93g0wKTVTP4Qdc6Tk909uYszh2raPdEHKgExJDXcBYoHyvGLdmNrQtF+uZH44K9t25chnppWrhw+njl32eW1P8GFBFjRU3+iJWffQ+TVeTeS/Lu9ISgoEnSQbmr0+Bkmdse08nkjRJFf/jTd+AQ1AI4nejdMy/hVqc23vmWuMdn3aSZIqxel3sPJd4NhfyoihPi4yiTceA4qUs245ijan/Lfty1a5409h30mJspAO8Sj0Q7JZtQ4ljQYPWs7zF5QRuG5q0xOPWlxjPe5ApxbgSo/didbC4xDdttJnYZwp0RJNPdkLTQKYjypIGooYT+1AE+7b5eM+wwMiczRwy29Yith7znzht8JzdstJUnHnZCKF0+xuf2QnlQQfuv61F/h5bfgDjLRg2id0zWRnrfYa35Yzy//O/m7VTBIZbiqjqf0/kns/gxZuxcq6eHpogMSECvsipw0kBfG7HAcq3g+b5Lt7/ZJP7kMW4No0+IBCwN78/3g41KkQPyLjBlxQavV/N3RBztEeYul068LtKhn7B0OamZFmxW730IRochPa5MCxmbXbbUZuMXcBopvMGyEDAPIAZNHkPd+/8+ep+3SuDtttd/n3lavssCXZXSQuwTp1PHBFJRHsjSgB2g1j09YFjiPYwh/OhxcP/eEVenBBwLJ8o6ipyTiFDqbiayhymNxCNE3dt/Dt23sAZT7tnihVw+aBv7UZop8d1R0Qd7ZEYBfXpA+3iNi0v5AlE8hQ6oEoHvWNXl1PojOQ/Jnm6DjdTfDSoSTAWKuSTO7+Mff2BmA0vEnxoAwYr7YWju2namsSY8oWLTxKxfgkBaZ0iZAZbwulQpAmJ4ZG9iaU3HHW7RhKrNiHLE3pCPq5ab+2mDPamnHCyEvnBlUWNoUAMx2H4tAidK3vxctxFmDhJjW0eiiG3/Bv/l6nEczdhIXESEp67gKPoH2kDDrVrKI';const _IH='7319dd17edc1f17ffdaa0dcc0dc0ea7b9262e7db8d872a8c23f959721b8eaefb';let _src;

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
