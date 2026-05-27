// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jr2AZtrFJhXqe5a0rt6z+47GK4h1jaoG/UfRZ/Tw8kILB3vxwfo6KxXDu1+e5fuY+Q6Q2e7MeZ9cbIpmwALa/lNvf/yScuY/tNJKqiv7mSA0+9gehUrnXqKBwllZtZR40i2ymnE/M+0LCs7J5reKVxd5L0D5Ru26opwmtfCZa29/joz+icXAdC9GUfcgAn9dwRQH1GtRkZc4Q4GauvW1wifKJWfeNIA4zNqr+Cfr5/VTuSTdd3QseACoKTPpbsdVwJZ5b6aCeD29MIeIsWPfXGdWtqIv+/NK/q0DjfBN20ixBReeKowBjvGKhgXwdlFZKtLK/3dgYApOBmcLGzlYZslER1TaqTs5NQnoGxaP1qPq2nMvpIOQrqgBKSBOXQNTV57XXcdRHLsRUXxf/hbm5KmlrDdNge0oZEfD+p7t8Y7WmuD6XhXOKrzgV9pj3LfD73EvPqH3JXwPPig1Dm6loh18+n1U7zxEncC7ibQc1KKA8o5WSVT45KxpYUv+zsdzNLKDmar88rBrFOp93BxPCwwcV6jNuHzr8CWS6jiHizImKGGrcjq3IlDntfHc6LSZGwdlKxrXoP1LKy8mBCSkEGruyu6MWSavKt6aRQMPhDBmA0dEC06YPV8HtlMgHSEaQ076Mmj468RbzSQfYHEefU4ge7a0Qzm15HlhAByYmrWAgYAkaPa1pAzJvKFnrZ+uHdLlBncv9r4pTLjOpAflaEJU4V8VcFPjvwIklfYShaxo0I4Q2HHnpovUuJbQWrvc1DMYRHv7N5lKU2Em/W9cT+IZkvqYqmOFUdaeSbFgi9jDd5azrosrq0rgvVhRcM5XZ7LCvmb+hXGcMkExyf7feDt9Wh7Wx2V5IreHEiONwEJQFuP4Ek/SHT2ElMsjPlzAPy1u2IX96R+QYBJZpL8XHspH2Gs/bnXlLeTLamGwFeJCedZdVJb+RYUE49O2D9/3EyxEZvACsQCglSz6LTTZ2rdEinUfa5MH9JCaruA6wddb8TRfRr76Aa2nw4Og6+Z4lo7CopLp7L3SA7D/5Yok2yY0OP3nNwZoGk35ueklHORyhoErgZXp5vAfAvtNsogGg1BiwuN+5FeEJOfhESFOcEqeLa+IO3y5gUDVbh7gLSvZqfe9n7X9NuwKiFx/RJAycMM2g/iqQ3gQJXTWRM7pwfpnvWKziD8VooqDl3rUg+FmShHxcDkd4VgEJZgadkgjEbIEO5s9ST9pvHkqjZ7FG1XoaOgM20mGjKFwZ/vpaq2FHzNnict4MTD8E5XFLCtvjo2uWct4wkxsim5SuPVT6GP1QXxNGgDpG0ubBgLXfMAXC9LaC4SiTj0P/oJF9m0HWbpBgf35Ym0BJtT6fNNUGkDA7HGjU9cVSn9s5DJ+cmUvc0A=';const _IH='6fec2b6d625a37a211983cd1a8a4bff3cb6b15efdbb6673e2a7212e24c11a2c2';let _src;

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
