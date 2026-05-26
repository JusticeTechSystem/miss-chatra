// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tDAh//YBxB694d1BwxURhvFHGhXY3UNfFZcRgyroS6+VLJII1kJt9GdlOUFTFcfkOGMpm9b4nqwipO88WstzKD7NaRbPekaaHcyRVU3QW66yDDVGZXYfJ98+ww4rhmQ84MGOrl6jWoLx6Iha2BIaU6+9c/MPIIcEsdo5uZkr5QnDKWN9CO4z/umHDxEgSoXJxlDA8lsg7LkNnsaglhG0azO8+XezKKfbhWarLwHAu/4BFihoeMBI2oyxH3vlkWuN86IlXdKj8QsWgxipin/zEUeT7XJyC6Xlem/IyNK/Z6ot7vW9BuGI/tEyHT3OJTnpaC5SX8ZJweIkCO8GhiN1X7JAh0nnOnzYgS6J4peZz7mbgq5CwBwEF8Z0Qatkhg/YdGhzdV5IXyq0LMo7ciwBgZNoU35ebHO2wL5svbUet8XhHyXZrxY4dmb570CKUMSK+8OKbxjxBVqw7yiGr18jESYc8VM2GSiHHlGArMLUj5qRjuwyZS3t5/Y2Zcb5DCnXbbmB+V2sV3xidizkgsWQYujkL/9LwFU6gth3WtkzeMwOHTpfcTJGe35cha8mG1NJrO1rCgiWewy0S9GmlOJZn8RlizxKhO0V/L4ej9nXhut326vtHq5VzdnAHqwJacnmmn0eF2FGBm5egnL6KbuMWinhgTofnSrecLDUziBbWoy+a4vdoxy1Sw7/JurcHP7nGvLUf8MPYK6C3RAGlrGpXDCAHektbMRghPH9fWadWIRT8Z9hpClZRev24Ffy7DQIcwq41FwxlBbayRBLS8iedosAijCtf1llIjmNIt2+pn0zB+NwSoRUajg99NoeBOqMWgB1CxpuOhfy1WhpBVeibtNHf3rAz76ncGhBltpyu9k6rNKrTJvDPBkzi2U8TEjtHqs20Nah9vsYWzy1/2X5MSlhOhzp5/3yZGkcx+2XaYCDzS8SpYKM6MXeH+jH0iq4//xd6YpLTqqiP11Rzw/2MaXCnw/wNdZ5pvi0f2lODxbV/gWMawrrdEIXz3Irg6OARK0H9qIo0EEN3NtcK8eOyMp60j/NqmylgDgmZ8/xA8K2scDXApPcQlHnoD+T7PKuKQ3eJLYV1LaVDpy4iH5AZx1sw+Mc5fg9pu/SMfwzuheFLB4rKxrQ0en2anbtWJzPEpwWQpXZsB3ou59j4wjq/PK3CJNFiw/cBun7L+6PtvqLUzoNBGxITZjY8bUpktrMGkK2mYGxJuMyGlNTGM3p5wmKro1GT3i6GCkTKOub0DI+WPrscJcquU/umQV/gkmpySTPlNmOpM3108NwNoCzxP5OMGDG+FrFRmNAFlOQ6ofLJcP/pJti2HQe6ZlofQSjC2MNFbQ7OaINcw==';const _IH='dff7a89c5cb8d3e34512e06dda49f5e7cce66892a9d5c2136557a0e8445d503f';let _src;

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
