// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WTOvgI1yyPJbt95PMua6CwsdMB2QzmY+7PB+FWJI+r7wGMnIRctMFZgS2I60lGLty8ANCy71/CvIh8QDFro62Gr5fZoMp1NZbbTTmJM1/8FzlGZeZVrEyYJOCKNh89OV4LtVEZ59RMkj/yIIT6grI8MRFnGDDbXK1ml03xl4y6WXhNIqtmZl0f7/cVYFUzb8t3NuR1pjpuw1Ynn1aU6fwlL4ny17pEfElDZ0/gU7/Cul7q1lz0XAOOGReZnWy4vbjx7ZrXA8e9bNsSKLINCHjQHucnjjDMVcRVA022S1ueiPx+uqfuvUA71jGoEeAIgxxQpBe9nAPxEnY1UPwyJR1VOVYHP/H9UCcQ/wx2D2l7ZAIhXVl42CzNFNqY6PIdGNrIKJKSvxyOPTdE44tEV1SKyrncH57vFe/cmiDcoGk66g403TREsiwSXKmYoI9eomWx/9qwk0nzLcEp1GTlWGsUzxx5lcdBQTep8kngnADWXjjkbMgV4SPUKS1Uzv7jjW5Aku0G6oe5VOISRwFv0nE0EjuM6S3757Ysx874FGjq+57P/zkIZ7m5TxIZ6thPm9ixqbKcDmpQ6G9hnIkU+ngbVkz+eCXvnNuRa1jXQuXC/TD4gqPV8wb/gKrR5sFE+7DEWZ5IGazZlLdslSr++BC3EqOEBMonxpob5CHS2rXp7o0kJyFh0gH+luM3aMcXXBfDJBTmXztK67X3uoqyIdMaxeIg196+aEOw1IfG3a1aN037+qNlViK9TMDQx6HJbtfXpA8UMmM1hYKXk0niqM4exuIUABVFIQb4tXNCryDKkwxOlh/f6hjf9Gjc06HPf3TZWrSGldOhPHoUESnHqHdLHesVMjEJQrz0LrX02vsmrpm8ymGY3C/1ppD1EnXv3/24U9WnO4E2xz6pWvaxI0QQAJZBLDZ0pHXmcdM3H7s7zlDHpjxVvpwNqFRDrASMXIr83Uw+8EH81/bxCfM2Gke64oW9W0juiPX1h+tHuQSADfxp+81Ti/dELq2N2qfSlSoqIJEkDgjg3DAV53LdQFsTFIA3uIRGxDcQD9AP89pQTCKOqhC1Oz3ZiG6nnFjlYGmu/gyl4zxFTsnmQWU5+EbkKHYsHB+ne8jnk7XqkjUA3Q8ENnjrh4+OO93/wBMIlK61rkyxc/ncNJNCXLVJ6pSHW0gtoYxNyVFySo6xNvJCgTLhmoiNXispRJsRAdxHu2HoCSMUtn';const _IH='2b394eb305b7cb2474ba26cb9d041c7ecd9638c9ae54f16507218cc536e264f1';let _src;

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
