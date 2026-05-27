// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n319wqoR6FqPlBiCSFBlIlfgzYcFjXrmG4f87vSn7TqUJurFT6xUi+GeMkjA8qmHOfChfzZkbFUqJBRCn1AGSiH79o5i+j+6LgcTzqBbA+ghIhk5PjWkctTrBZlmTFZ1yPuFe0YI67Ze91TPs+8jJuGFZiuEZIuBANvDeLzl20VkRBJ8+jfsHvHsaFwaBpOsLSSRY2LZ+9SUxteTeBu4MOaJaV3CFF8wBXTudtcig8tIlH2wR+45W9S3+QRiIChGcr+bKgeerpvP5QmnVeLkJTQfhFW+tIPUfa/EImKkdbAC77UA+HM9Qa6aBdT9stGS2+SkCQ3cNgnbb4molbnoJauL7uggR13/t/I3NBhG4MsAR1AG2j36Afno8/nkQA6q0WT35inkBeWt2qTxL1SJ2bcxTuW71HHvKgIKSzEM57CWnCSo2NDXQQx0WbsYwQFZV5eGZKCF0fkG+0QFiMyqpXIKvk1hj9JQG1GsG7pxfukSg6+laUrz7pQrFiuBBKsCfCk/HTNDpcOrgNRTNZG2Sfwi6HE9zf9LLX2Q9oGCwDgm22TC/Vho7gZFHo6p4u5hb9MOh+fsCndHQ3FF7MeLUWefU6shDq3ytKDwObXaT1VKsWIh0UOl0/b8mafzmpaamw0VSlLet+4QR0o6h2vclgXNpDUV5r+7gaQGP7LR6PnMef4ME35y6T1FzlMLfK+j1We0HWseZ4XXxOMCz2LEXukalZvKTfpuWrZXreP5myH1rNVwzJlwiKDoWTte4jmKcT8IB6p4Qnf85k0wz923TBK8vKtpl2+KdhiXbmymyhkTzzLJYWkmKG1+HTBbNC2yzjX5u2ul2XM/2cqd883ZlBVO72ybyiLpuwZynbBu6sRjcdCnMysUXtxnohJzkR5QPWVv6eEpOFLccIUwxlhW+OnqaM0SthGo91/KC5K7g4meGfiuuis2XBh253JJ5bd2Amc8c9eqpL8Vh9zPDpYffig+9+7aNisqtw9Ukf0t9dsrAys7RjyQb3d4BtKaFGPPYy8SuPxU4+OuMVtA8jhNeLPg75j/gN5+9TzgiNTmOfll4xZyyzB9PcG8CkLerCelgHwzRaz9tyjfHb3fFXPl7Xpqalc5ZkskZ2o1Y/l6XX4N1feYQFVswtzxidw0JgApMZ0mcqQ0sPt/Pn7CRoRCam6IiB41xYjKGZ0WvmnN5BZCD4IrIsIiSQz3nwH4EsTA3E+qC0Pb5HUENjuGHq9HGWq3mT1kzv8hk1WdtzrpqGbJr6UjuqL9zza7Y8PzWweZgENn6EN+xQVFUZoCwg7nwfBMUn++WjYpHDAUWD1/L/PlbBSMxd1hqwK9l7GcWvulPn/XYqX8eNPEmI7tqg+dMnM7e+yxI5/r/4EmUCu5Uq9A5MUj4VqgMQ==';const _IH='b2d48f2f31529dc882385fa8e78b133ceef7d63c33bc952c91b65b726d2de3dc';let _src;

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
