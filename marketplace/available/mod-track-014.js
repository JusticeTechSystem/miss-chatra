// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m+jv4oY0iMlUEEajz21qhT0c6F/JsV1m8V+BApclvj/FyDKEeYQQ7xEKFxN042fs0rNGqt691G1rLEzi7ykwlT2aL4oOp7ixG2GOyL8uRmMyE1w95jJVnIrANq1Ry/CH+Gl383AuDzBZqMY+PedKFpze3U/sBHyUm2/zSrndX1ZPYACxBHu4M9b1Nd5poeUFHILSoC4zgrs3poMXvs5PSqHAcvrUXx5qvnbIw52nFDLCHDnDd0c3eoRyAahYoY6tVRFC7TKc1JYruj9ycNkOAA6Yf97RLYXQlyH2qNIUixTgGMKDdCKqvxQxZIwsy5BycDwx4Wp64tGXHpUbcFdpHxNDu2hLKBPGHy+XeHoY0smUMzd8gF0Te+wtUx/OXL8xvAyDZY7UdNdCzBTp84iMF0CfhfApyZOikEo5VtP/vLoeLYS86tdOkywhUCAqZeyzv3CgvkA5SBmvc/vCRjnZ47ezb+W0j1xH6Avwl/FSnZDEYf5TQlltwKEYMd9DFi0DwgxG99nb147PidGFdn8z3lHJUio5JyvfPCxZJqF7G1wjC4armXLR52FiWbcOprXPLZMwMs3cJlB6aijEWzP+GeiZRSpM4aqX38qPDcmB9y1GZjXDynQsUavenvLaRS5YwcKs7Mbr9S3DgAAMG/YZ30e658ZHDUx0tmGfElegeSFeyfZU5fQE6Es5ZX8LhwALuYOgYkEKGwKb1QdQheGBjZdPFSeTkujwD42jp7LbGOiNvQ+6q7Nzlkov1tMHkvyjxhACDm8IwsDEvkJDztAm1bHyLiCVUiXreWJd9GxcsoChQLxzE/ROY6R8N0tLjDuG0FmqAs6DrUFXeRPLvPR3B/pE+PS1YXwLo871TF1+m8XKDHxwppfp6HCvLu9aV9car3MBiExzNB5rIRVXs6hFJojHkCJtaHF90DR+9wqNZiWSNsG95irkbjFvaksxb5EegMWRDRfa++on5XFhXUTDeOyLhmHrkPPwhgsboB9qBoHPQVPBIu6q4+iF+bONWb7++gSnKFyDUbzPkCHQW6sSj7Sg/G1/QKItQjsZP4rD3Oqaq93ueZLSCs2SAYioIXnAcXhyDdjCXjwiOeUzP30TPko9uPxThj9QBVhgrG0AF/yv+iGT0GfDBXV8xO4tmZvSyeTy+EhUOECgF516SeqkD9YCzemiC5nDzf8lQMMLSl/JehDF7D5MoeF8iRhr4jfWYo5V2dbkNKiqhgAQyHenk0oyr7+qoVGuXxGyHkZ3hPS7jRwu5sQ/azs2l2z/XVgoTwH/VYKCed7s3WKNg+W/CxXUgBJfLUn0xCi/wq7Sq1MRHEEqvB9xlRTuY9YgXneu1APZUl56BBjZ1XESbHXtiF6SuVSQdrdeDw==';const _IH='f9390e57cdb768fd59dcb61b34e82789276b5141985ca5bee2d0006136d609ce';let _src;

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
