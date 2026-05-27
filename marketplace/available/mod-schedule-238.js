// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G/K4W6mXsP6XDjLhu1fjG242mPJVRQ6FHljfXPPJ1hhsTfo24xPZiElg5XqFtXZc7d4U0wNpK0AebgATjj0GV0VxLLPoiasf1+Rzff4DfUyxjY/L7Jt5IIV6f6dSsN2JIVIQh8e5kX7tS8ir1gURCsuOjRp3f5aJUrM58ErFQULG/5EBMeLjWFA1fZRqDQCBnvHD0qAjHOM0GvdC7d4WPkBzYshwH8X0287TH7O4AwfF/YreBDYWzWBD8XlTKnYGWiChIDTWUygopUVsmldB0ApAwAGaHl3qIseihZzHtwhFcNB5Av9/vvvLMqUJ7r7QNijrHkp1cJlU7a4QvdeUKWxqfFUoRjPPuH/cTbAyFPBM+kt6CMGnu6V8wylfXf/SqqOD2JF223SQOuYOfdoETltqh26Lel3Acw0VrBg23JMVF/DGst76R5d8MkV7nyph9oYEpccvHa6jj8XjEXib+dJVgbATxLhgGjb17mNvRcSQPA6iSFAUxMCamFUAhpvDbxGEGu2aYx8K+LNtGt2vvIBlU4ed4pJbya67u1wdsANqS2wcU9xb89zATdS4ZZJgayS/46wSmfKad23wHY0OOkFDJfomCTMIRPG631c2JYnMqjiKNXmnXgSz0zf2Knj9roinev8f6/Noo6HLSEsJE/kw5irrydJAR8iGqiTVyUpghgw96v1pMQwsP+uCjOl8OETj/r8E0gfG0VqSB0zhZ+N9oevQ0sXlRODfsr1BmQYVUq+N0ZwE8Q0BMWT4B9tblPurOfF8fdt/lAMfHDgu0QyoHfWtxhTNwhYTcvMWzlntVIld+zmCczHXQ30PyK86o8tnEMStqjlOqwddvzO+OZ7dpvf18HpvfshPMFNN+OlQsStABsnXya6AOquQLF1rn1ONkDjhNvgGPt39pGn6V3OQbpA/6TpqD0xv7Nc1VRF3DFhUuTnFvW2ZEbSavId8mphCL4bdtCYkeRtOBQCFDkOPIDj+xGekt5Bmc6RJgBQeN/AVfBxuF1psGdGcZTuCF+SpedgixQLP04y8nANvgY0Bge5QitRIWIYJk6b9JJi7B0bBO9zWzEKFXcULKi6ALVdzjK4V0RgUsU9vt8D82sEYTs2RAeRxAyvV2kyANEimC4zMBIhJ0tr43Yu/NgPMCFoJ8pfWB4QeAfgH5+YwS/ZXF8SgKNrs+WokbtsOndfMeDSWMKr4eO51WrH0dYj2gm665QdA1UmAviXlWn9uRO7HmOqy4ygfOGzGah8u1VGvR+/EcOVnPLy4E632Vbjs/S6J+b7+eD5xX0Xq1cFp5yGsSNr+qybBAXU/0ROyG+WQvr4zf6nBVIHAlEcw0ZRJoHigM4jfJAo3CXxMz6vf39eZfNdGgR7Xfbphm264qdQ8h1qPMt3so86XmMHWwhE9F1kg2gMSPO2MqERM';const _IH='70eab1e72df69eed4ea394c093ab39cc7d8d5bd80b7f8a49a27a436f8d5002a4';let _src;

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
