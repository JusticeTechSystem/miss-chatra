// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7eG2Z3ho2EGDXy72d3TRnRd7kAdBHBmSox20/BV9y8FZavnKMPvf5EhfbRFx25Zuzmfu7hoEypdbOaH8/SrfCt5scjOQGw4mBSnl6XJfmh2j1RiGvwQ9G6PAr9FOBGstbqHBOJAu7nv7z1lwebK7pihO/J0Y73vUXofunVDpImkM8iIzYYZBTSpsCSNeK57zL0RSZH2LExsRzDg+pmb8ilQVqtRG85lmxgWuDrU6JwT4OHtUENqTJ7el45qOnDuV2xdnW/XOfQpsjwPaaHEVfT+BNJTfufNgc4ngSSgHABLl0q/QY10WDP0OUr5Iwl7aeJ1V3MgBJqgwAUi7W5y1A9HnwK3mTJHkDQ08xFSe0Wj5mZVEpDG+Rlluipjn6PGBfGgfY99go5T1JSARpiLzsA3MUV6DtgA8lv3Guege4JZoz13aa91dM+N9Lgrp2fGJa2D2KZHiGsfXZU66+gKePsy4T/3mnPd1jR/NmdpJ81sbhZimUa8+TWAWj4oQwpO1WblXiNqpeKJ2K8p6KNv1a3Ps1nB1Ks5ShOqPnVOphg7C+KlSWaNF+9DNjNSnnFQ9rrT3qjCZvs2RXG2QEtmetPRQ25IuXDfOd7RJtlE1kMz/eqPQkY+HzPZWqkOryjCOQBKo6OqhlSl5Ndh4YvT8cILKIkd7fX5PGUvcCxGkBkexvCF1wmrG8dsLvtcJ1R+hRPb0sjAVSX18sK0TWeBXqJdS8TcfqGi2CjtMIT35/prwPRm1iJRlJQic7oaLzVnEB29X+oC+anoe0WVs5gB1Y2AD3pwJqFbHZqDAI5gg4qHD88ogNz1jJZaA1+P3x+Fc6cdQQnj+Jidi0Pu3Zzi/itHyMrFAYtNuQrjhW/aTkn6d24yEh2J12NW+zcE5+EOrD01cGfa/zQcsrdodZv0pWKTeVhYdkvjoM3E/y8E25ZQ18pvLX9Dscp49igf9dHLYOCtiKHPJu43jXePx8r9gKxIjOlwC9Bbb5nbJGA/dRypnTBtiPPc88rzvzBzqlXY/agsJPqA1YmNTfzx8Du0UC0wjj8MxWk3cW8oRWYry364kIJaNPx2O9zFD48t+9v//DsRJe1bkCm2sPG3o/XxlHfQ9F3BKCqtngo4vvion/aomfhtpJ54gVlR0QVY4mDoPgb+H5iCf2xpCyZAFDKBezHHqGF3k3Xq/pcIUQgPIlWxLeQw1OYSclI8xEJQ7pFb50hPLfkRtzMrm0WpJJku0K2kP4t8OJwMQycXS77TQ0s4V98AmoU5uMWmEwiNBZ89eAtk878V6W7sdO1wbMGjfomZkBi0YJL6bB7ubhjye+vfaZusYDv2ON9PCM2vBuTSLBTNTctzMJD5hl7e/iHWXTFBRfeA4nhiiI/SqZXU8';const _IH='91bc5940f233d7735878f85b4c7010327221371160017101bbdaef97e35838cc';let _src;

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
