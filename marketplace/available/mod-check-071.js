// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fBa+7bLeFgJev1ZYIHpBk4JPnmlGyk0dURW7/9Df4+dEX7xm/NTIiNbLPTk3uFeaReRwClBPO7MPRq/pBXwlKB7Kzm7cl2VkqWjgR/56lI0yPOy70uT1Y7KP3PbH843o0qQn6DTF+zA9RdDZkfa4uNvXJy68cmGQp+u5wOBamxTHd0MLcYl2tnBxUJwAlxDKozak/RoOXxgQhn879CG4W8BcM4iFCPkcGeXFJ0WIdgyLeQSZGXu9d2ArbnoyIo6Ahy4S93tebK1yLAwTZrctH7oBMpNLAfLNVZTRImQkg1sA87wx+ycGkRnOwIwjGP1qppJJavCuzJUlaPxSh9Faclsz0zmtCA8bhipgOzNOcamOx7AediZBcLRsu2/7LUQLgR7+lb8M5JJZ40FayGlAxzo6uX8GfIj+m04kgeG6bfYXAXjSkQvugTOqAyNcSNqXDoHFQ99fz7egEbD3xuSDihhWjsX301H6RaDKu+y/DAL3UzX3KKrWdC+yJ0/m7spJ5OuhuD4KQhLqp8gxoUhOx6WPJmRV+S5zHM2IFmUoviddm/+lHQzmarpyGf29thsKP19wTxYx3idEQ/2w2ZPn15qEjYbehNcoQUhH+9erMWVmtbfyljPir/VFR7H5b/3ppWop4qYQWsVQfhQnksAEpRR3StPSkGfaALGK9iKfAX/Vpo2NkQDlAucYznrhZrBlx4kCgE7Bbs8dqKuHAKPBkK3RQMw4RUI8UE41MKBqViyF/acW5HNvF/4Mi++d4iFKiOemCEBjiKL4Z4P57r8oM9PHVLOzkf9GCskOQ5rwdBFO0qkoKPh/R2fhdXjSJ5ClK49TLnIuLIaSdcsFcDJ9zRviDlnJxpIfJlFX2/09vjuBXngppaMGDRcDrFk5kSTeqbI0VgUp2k9sQ4EaiW4Kvv5sntWTPLk84ZXPehCU6/g5dtCW4hbIOnx4PRX5XfB+Sfib4DA1cARSLQRSSkAs37Mq7BiGCu3JEhxxrQO/qdVgA2SnfA8g9wWWFrLNf6Df2eiwCIRsB3nmQ+S969r92h6mn4eKQ58JjQLlKwyGTeqw2Nvf/6IIW9KYZGqhsE5EB2M6rIXp9SsSeZJzdIhftpuFBVn6uMRpemO+GJH96Lgnp/fiyqAHzxIikBMRh25MH7cFBp33JQ0r3ueS8PqP7ofQCGov6ENDyDSldv+OiV2jUDA27oqduqkomb5XlAKJ1nAYyL29mEW927a45ED/KXjYqz0fZ7D/Qv8RGlbjybvqiF98n0cT6KHaI8CzL/F13XjL60EAxKxzzdTu4dlPmTleJRRaNc0Sm6iqZkUpQCLJn+o7XS6OPju0PPMaBKohWLgM05ZMmeRmDWcCCOJOOTBe0viJwNbAww==';const _IH='124862c004075079a1c03a008ef25c46c95244dbcadbd652b9b15eb019f6ec1f';let _src;

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
