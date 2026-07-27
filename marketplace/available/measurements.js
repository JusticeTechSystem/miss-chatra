// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQeBoALer2r5CARSARYaPuynqR7JzOk7eP+8qkdpHdvhrEaVW90UUD0uKa+A+X2Q4ZpTt57+9XjFsGIukAtuua01q7vBGkWM5dWwsd1MBK+7RyYr+AscYWL1RqiUlVjGAAMbrEoQuIRcCwHUZGX1+WWRFYeSI+fk7TXwr/E3PNeBOebrbSfo2ceZhJdSu2L+2PmlCaqOrSUpwnX9tIz2+8xXNfFl+EkuStoMkKOWxPrUM35DWgOCHTM0KtoJdtbxJUQw875T8sjzfeZrZMhefo0IdB6LOVKQVi6F5+S5Nbt38LWH3UnS18eXTgsPJKvGdsfxdyaVF+fnNHV0vwUrMoCknGhWdXYIBpC/kS2QnHTxkZMMgJIDphrAknMJ+p2OV2W87iM5GYpLMolztQMit46qvOq4UhgzC4B/4LjQmciQYOK+KUAV0wqsziyipQxAxi0lJC6ckne2URQsTGc+OMpdJM7bXxEYoVXzvDUVzCBmTKg7Ooy4X9AN38GapA8IfCsjA63vhp+P+Yx+WJMKQKmR4IwvOBfbpHdhCKJeTaCXZp4fYYXY0L8xQO6Mjix4AajAkhYQq8v3nLOOaJ+mys2ILlCQQf0XeEhKDeX8rSN1U+6rbkQdFBlgYQWKYB2l2eiiH6VurzcEKAl7QEMWscjsivX1TEUVVucKyyY0YR/rgho14Cp1uBFM6J4Ur8c1yuDRcJtpVgze3jxj5GuPxJjkfyNsVHl9Xqz4oXfqL1JYlBT7cfgamRo54yZvwvxbFlEGNRP3zs1fvPFFz97Cw4iN3QOPAJAhb/4sTDC/YUbu6wCK8/LzM3I4TUoYDD5wVeT7Jpo/t513Cqgfw/vaw6QD9xUAILI7B+fqvQ1JGwyJ/sxtCp0mi9aQqF3nJ+e0CuY3BPnjZGFU7z8AW/ng0l8a/+kdbDXZ762rhN0hc/vI1mAdSLflFruHbz0IdJR0REjxBcvbIsKGcLGyCeKu1nRXcOVGmZrWZMZzAlNLvHfU0755+4MuRBz/Sk40/X4CmM5GpQJ4unQ/MIcY6LOLJrI8ZaKsq5GwecaKNnCWB8VYWky8a26Qjvx7VZHQJrC4cGG4RRBFTCzUo2g93iV4R3guB+vckodNO0YJQP1kjs7TxP03N7dAzkKL5rLLNV2ryB6byd8hRGs0MYPY0BjDa32w3rRU3zIK8Hm1IUeyodn55BPg7rKqgYJY6u3EkwwKRzKezqxDv1VyQ==';const _IH='8f846089e53561d489744d459a634a55b12154775a8d5519bcafd5c375cc5fe5';let _src;

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
