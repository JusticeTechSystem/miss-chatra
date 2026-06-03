// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lTvkJhHnCXrZKnRc/IUEWE8ie9CE7MlZvg2wyWscSgX3cJptiOc4sTPx3K7+NF8bFTS3231YFKxjQausBJHHLcjQifn0P9/bRS7sP6g6VQQtcsUogX8e7HMC+uRGsRKVwr8nhgOUhmuFoGVjojYUII4jAs+YTg0YLTODS6qL3aFjfVhxYL0aV/+wuyLcjB28NpJUmio0EwcizaZXiUVM2QF15y6isxYAIbCMeorOBVPEEJy39+uhsd2YZIMvdIFW//GzouVQiY8da6k1VYXRjnOC6GW1GSS8Hn7LfebSkPsMuKelnoEi9wmsDL8UJBDrBL2FyZtZ0qG9QYKTS7Rxr1Mcp0Cnq7/7Q3lrpwdrIUk/8Ijp/ZzwNRRh1QLCXDJzADjJD6tk0+1m7Djib+VvpbsHxJaQK+gejm8cpHLzaaix4t2588TUkhRgtEJ3BttjYayWsOV4uBRIImMQ5dux6V3jnNas8YhsLXw2aRJ8tHujIVUGdq4iDx8HWTsalYoBRIVN80l9VtAb3UPOARf+LNaNZ2OWN4D+9QZmoiXHt4Jblq21iglooprAAkAPuUgBUmVviLGRTuuRkeFej6qiTKM1dNv5/uvnWbQZk74yKxXa2dO0AWVXeECWO+GzXC7hoPYPq8hD9ibXnIfgjgHMDs75mJN8pRS1+ACzmgbNVEf8jQyvhLHjZLfShqM+utqTihjZs+kppOzpMxfEQHoRD1cKhbeVwWuaiIQgYjcAHRXNNABYj+JuedCY9kPrqAR3an5l67O1cxf+UCnBuxGLwANFU8vPOhGsKtCu93en9j8c3Wkdc6LwQVPLYkuWXzomaecQkWVd+3nGQu6zLKEQ4txGRDDOQZJ9gx2EmYtgp/KcfppY5uu/0olkeg+93PYwY+b8BUvD3g7G/9Fypzn/ASU5hMxcKWtGxW0RxnNxnWGZ6MNP8Rxnw2CPbxeHVwIIOMnRqGbPZk0fpKsn/O5Lm9UCdmEKfcC2T70HE1b+tgh9TrMjboLxtvysiiFVxfi/Y5huLMwytCQ3hXDNDtJzUVIarPkPPiw1XVRPQRyAi+s7qqEhF+LoUQ2WHmxYTuQ9qxp2pLdz//tUK3Sd68KQwPJSd3vO8ulP9jx0GMxOuPowUcbTk0sU5U3yx8+5UEiCb7iZ5Olakb4hfI8UYrWitutVJP6j2INuLyOEnAl4OQBGCe5EMpdbgT+FDv5CwG02KB4xS8jv7iaqn/Jvz1ja+LfATAlY8W5JVycVepKu6ifpbkhg7SgYImb3qi4bskLhLnoNgcvXOmBtYIebkBWxxfxJ902OsxyJeVpaFWXHoZNW32gQOa4Akjj3MXohMSuCGk/82IIlBJ1EPw==';const _IH='fd3404f1a7ba1e79734eddf44f09395bf606347ff564d7aa9675b48ad8494cda';let _src;

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
