// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='22mE4g3jJa1sZNycLcK+4Affy9qjL8eEr9iAGbNZ1ly6EcFSNSAl5stz4HO8cak95ZgpL/5FDUt0UA4NWMBcVPIWOYj16tZtfSdAo3+12srGe9UUBXrgqG2Zt5h3oaNdjx4Edri4jta/IO5fGt1VSqlPkAwlC4lj4m77tPmnsGw1j/TvrD24Zimmwv9f0RGU/9WDpI0Lh+OngjTDOtDFZ+1iTu85ZIro20mUzzGcvhK+Yml8KxPTKn4gkEhcUQvWp7REz31myliRhuq2V9Wlm4xH2KALh+ppauAQ6BfhyUuVCdZ8Hx8I1KAizLMS8SxhSdeR5uF9H9RKr8rafp/uQxzg7IuUxE8C3VeE+3TtPdF14588aDed5z+/z5EUsNJhSzqAUprLF2Dil7MPlPi1urWFme86TxMOtMcPFdnrPO6pOT1RpWJJnT5q14CkZd+w/78lT5Nj65EUCL3jmGGdxt2aEEWmqKKpQk/5OrsyaBME7xkK/vrR9yXzL9NlA553HYCbZ0KkqgPOWIsyeWCpx2Xqh8fdRF5otC3xAabMs9ZdXrwJZkBcgkv+LldAQKkSJ/lJgRm/ZsbUKVXcRT7uu2jCG4BrwgQuqzdD2VtR1UPFQwplQ2MvnbUgIQX2w01F64bBAiV9puG5S2zBearjWqfpyavZFbZIJgO9erVVTvpF8v8xFuSL4nJnPLmImIUpHmxmCX1wpX8jy5CH7M/eXCwtTKkGwKTOMltask63KbWQVoDvuYf/0yXDqsuFP+QfU7n1CZpJ/7VMV1QjiosXh2uCEwsARhrdXKPWDGzDws2/Rxc3uB4YgX6fdMU3m8AqfYMjIsjuExI1FLE2JN/0K4vZxBMm0PDnpZSa6D9gInse7Vav7PrQKTwjsCTtur7gTiaR/7adU2fyLE+GYvvU4I7u/O0wedzyBQanD5UNpiTV8JfMpKTzYrdm9RoOH68HivO6c8FVxt90VZMzHD2LstTFCG80ZciJyQyFOQ==';const _IH='54363a0b8b4fcd7bb66b1f32b041c82b9947452e3f0c0cdeac7d9470a92116f1';let _src;

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
