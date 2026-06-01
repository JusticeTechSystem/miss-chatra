// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzEOgOSYIzt7Uf/3l8abZZi54H61jeetmSM5hr0duvXeRkuKsys3hsFmV5lX+1kmtdLygom1yKWUIoDYHGBbEuSewRd8fwwINFIa9d8dtUB34oYQ25ODeP4bZyyJh3jxBfyQQridqewhEQqFOPNfqE8KisItM8t+By+XD8nlyTMbmi1MQrdDPNfxc+yWxkllVg38wFQHdOcFuejufXrpL/bOhMTyNihQ7U0PduxZzHW5IHCuSGKrX362dEb7JtQv+j+9h60agPIB6/OOdVur30M+/x0+PJF50ySyKzl0LGp2YC5W55/CiDzBGzxafUTe8Mp7JVDsIyryrxCvyioaWyhjgh9HUbkJH2eLHKAtukCVa1AIIAvWD+tJJYw8jebFJ0h6PgNk1bZdOGL7QFnYzVcWJ7Hu2Inh8rm00wRYpChcCn+nbBaaB/Cvnb9SOlzpv5xaIgbVQV+3B7CuHbVf7vEvjahv20KgxAu08faLIHR36MWqvdHXX9ck3BSJeOSi1f50wkF78HSwxCHruix8J2JGLOoFC+czhXVtQV1ZDPrB2HM9f1wHm1calxWICYNQ10UDej1qun0i/zkl3xHDtJW3Wx5JKx3kfJCP3BrFbQiCxnWjOPOGzzCQzwpXiDZfoPgEn/mYFM+hNMzmzZ7jpB9VQGSYCFPv33FSHE3Op353VqHEsJal/SMwt3Q5SUyUX61o0GBETIM0WWC/Bxum0op6W8C6qnYI1OCkNaXnjj+/y4Y=';const _IH='a37a7b6b378ddc53d7c2e4c025f5fa5ef72a0fcb39d443362405a76756d1c8d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
