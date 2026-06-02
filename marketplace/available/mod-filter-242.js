// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UXniw+zmcyoswhf/1x8+OkXrLDW3lZO1SbtD3opO9tnu6iXnMaRw9SB7UaiJWWQIsxx4dl/cbTTMFJMYhIZEc0Ump17CIYt0XGlZRdElPoKm2g+PmzoxX6ZFlHKxSgwEhIeioEqkec7rNCFkR1/xy73/L+bbqo6gTpz8dNeZPdw7BAp/BvlGaBS7XVn0pi+OuVvY5yem9XAO7NxAEUkQe+QhMRvTC6mrG7XiZKkiMrxCRGKBmPTvaFGVT1rnGPHyUfe5waVNlA/WDN686yNfd52XGQ4dtudPnsGj3A6zhRtNAXE62PuUyZBSIbjMhgFP0f7Mmk6prv1B+jAB7T5ABGP5znWOjlCUpwOcth3aKr4mIEYaB9mBan2i6J1XDltNxdouis2eYjieUcAp9mEYBwALCHBFdTPavlwGDxtxbJOnnmXcPY3O7V3TDPdi6vChpZp8CTMgesm3E3MKIx5jOmom3ydHeOaw8BSAiPYIWisKp2zygyDnRBTGQoFwC7/laWVxcJUN1yDaI6IQlVIECeX2Bhx5qStXuv4u4ffpuHP6vD13VLJ+D1jEFFo12GKxos4gB5Zfp5bVE0xYLC+55mUa7xZIo4PNwd6/9C0igIyC3gDzZfYbRzZNb2CyEVwohy84bBSjf2lCRl3Pgk0Ep8JBGn+0LP9HSgND+I2efRbOBuKVkpYrsmWMEoWUYdl/chmsKKGhXzjc0iVKSsB01Xv1EdzWAZf0WkBRBtUDiyvu5Mu5l4RWsG7dR8epUpqpjQCS4VX07ff1isnCJSnpYYmD4tidf7uhYBgK0iCjsrkMpZRhi3JeKSid/WAfYgXXHISaZh0i2ecWXhJ8k6YLGg7WPbk3YLG+WkClYmNQH+2Hltuomjw+w0+s7KnoEs/NA+8q86smzSZ7aatYbdWU3cDJiHbBFQ5LsE/0WteGpT1bAaleR6f0uF6/1tiuBgNnY4uUdCMVsS3/dtYktjKItPH/wA7l+hxwhijPR5DAGeeJ5GJRBHPQn+/Mk3sTqfIHXQSJIXM8zwjcF34zgWTasPRX/k1uxxH281ZI/jcl9EKpZ7c2QaxF+0BPrh9YebFga+/PLUegUuvOYHQE5KJPw2ITNuAZTFtgiew0/bNrpwZXvM8+Keuz2kFkyG4vmfkKo7uIqqEUvzPlsApy1DVtHj3VlnYRq5jPrdh+lgwzDtOD+U2ylhq24NH9HjKXqjTZ3oVecf4+a/7jTixqyDRp7Qz4n+vcdxVglVE5k0Dmw8Dqy5drMfcUtNWLNAvZExtrbhPKl0ZccaeI/vx9JqoPy5RL/hqWSJg0hLecUQ0d6QsspV2kuc2hGKcVMnc/hsO2Iu3G3oOscD5GrHWyktJtS9p/dGbm/OVttjsi6Hjbo/UAyt8rIAr9Qw==';const _IH='97fccbc1f6e0020a8361f0901ade0249e26d8da5fd84f8797364729f37e0ab58';let _src;

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
