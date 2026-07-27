// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRIZ/0bxgLSFZ9D68mwbSoFPufGiIWHZm81PWEppzrjEi3i2NNg3a7FD7mb3J/gM3EgXolMqXjPu2FAPW5R/bA0dYUBG3TMWXV3gN9Fxesm2S/EEn6bcfFH+KH363F/JmGs84Kd4BipNx2N0eO3Rp8pnjuVGEVI6t2c2fMtoAGVqpe/k8qzeuLkh/iyyJfwYNeBdJsRE4NJYI7jKFXueBFnTRCU+tmDx6AePz6okrfiUxTUIbJpR+g+Lu2g9Cmrs0Q4vKaI5iSvnCHIVvSie7SFDV18AYd/DPmoSes6uECENbdgIsXbTZChATTwXQiI9cXPQ+XaowoUfQRW5KFoSNzSL/mrqdd2t9KAZmOtv43iOtcohLKkc9nn3rXEkzsmJJTgW7fCsA0B4MVF6OqRu8hheYHK2RPj35Ga5Ldmn1kP/JoFvXMzLd+tgvZtC3WGAqR0SoOP7ym0SFewL5kknYsztVB5ohnc0Lmafx6dB1/SFSPjeaOL8DGDjKxMq3sc9zSwp704MyWD0PbqWCd4bByfUUOm9/hb07EPLNM6wd8xd+Doy1OKQxI8fx1/idG2rCfkjJGZTI8Yr56+jhPpjwpsulLtnw4HtNO1XIjSMEtSQ0Tx6T1zZwu1naK1grrBov/eJPaQAEKrdhRguRHYtYZTjDQeiEZqhSbLMd4GzFgwTg6ZPRuiMYgvNhAkOs5aGspFP5APrKIMHCx2sETVU/k7LonLlYgUAD5TlIlSCg8wmOghUDoiqWOtw0vKOK8q6goHhruIWi6Aei72rUMq/v7dHwubWuCqq4Wjt8D0zjrUQpzYSLzGYh5HHDrVdZ+t8F6s5ZMtcjK3m3aMDxkMe7nIrSv+I+DjQZ3G/hcIMoIU1ZD/FDhfZoZiRGy6zj1mJdzSBAkFYw7KKfefsAZI3N3um9GAmwPQDleh0ssmZwdvLQZ5cyUHk/0yH8fvU6cYkcq8ecfyaDh5Nuq069M2HGzX1wwfa9tfEEuSgQyn3BsTK81PBspNwZUr+WT/k7g8b39Kls3/ZB3Ek1+8ReWDGp774SNiS9YwJnjqxQseRxlBf84IEKTDYzgmJNmx8XkUtFJ4kKlWKifXLpLAFnCtRMRBTi7p2j0bv2afkuUxVNtxuGFkM96b1YWS2S2Yyex0iFi66Ui1iH9JqYQgYnruJ9SZ8Wag4MC1udClpIdbqO36G/HBi7mGvYl2PJXbk8F8LAxXtqd7LI8iclwPn4Py65JBPPqmm3KbEtk/h+reQBWoY6vKnUy7rCtQ5SDqgkG5XZhMXddlxlaLzZptojdIZG3vDf6owKsBvdQHfqRe5bJHqWqUOt8IGuh7osXlQa2Oxqxj5VOCmXpEdQQgIPy2J8afhlB9tujcv5jr23Tslb7rRS6bospcakrG';const _IH='8a7086deb42181ad993a0cf57b37d5ec1972e614d46a41ea969d004478db7f49';let _src;

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
