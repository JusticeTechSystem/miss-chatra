// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vho+eQvwglT9/ho6rHvStaoES3/eq+FNHGhe3rjpA6RuTrYqLBBV7svzsBwo/hivnG3XFC8Mf8U1qze/u11zlBzFKXvNbl7VB1aF3zA7wuDCJcr3C5qJiE++YOGpRb21Q3pyZsJ3gCtJxs8OtK2axU0yhTdbtaTOQCxOS2ZSmhrIVxu3OKulHotbzh7+opj/9OzSigPozHtOCi1qir/WLd1YflEO6yiScK2AmR2YNc3PtpQsYJIgFa+0KdynzblwWjo5rmBvIfJszwX3zn4CTwF1xtCaYuOGao9jGW5p+WSVNwOo7i1oSmxom60WH9UU/2cNYYAaE8C0L+GQtj6cULn8suw65TVFcAUnqcXkPzf4obrWlsF37FjPsIq8jdXAUao3gffbOkGL8zj3b/+vZUvqoP5S8AWW8kKAxGK/G7GOZhziu6nCC+0WFsv88SGWG2liZOxqPkpG571eV7YvDnzIiHQ8pay7B//mr3Yv7J2S9Jey/TZe1GF7R62xJbWeL4W8ni3SntxuwQL75ftFKVs2G4zPuxIL/5kKnDs1+Cn3j4II+vPO6dyO+rtn+LMwbHa/hL0ELsgywy2m/Ri/D4hQtydPgeP54BFRBy3lY4znvNdnDaVw8gG5O3igHEGPESKMPktC+4URDupUyuY/4MJm5VVTCd+yQ0eQ4ZPGUMLFPc3EwJnmB6UIFHIN6ZSpiXNxqwefqDcY2Tg1zl7LfGrQWKPdLjDQCZJmjIqaWw==';const _IH='99ba91718c4fa5f77ce211c852001485b2461d54f06651c78e8885915280498e';let _src;

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
