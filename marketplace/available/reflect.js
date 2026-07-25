// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5abfRSGxgO0EOvzVm18Lc4VaX+ASWxTIUP4bg/7EeqeW8SuIXcZS6K8zcJkI4VYm52s7sn1my3Qc+Oxsit9yxC9brEUChq4TXDtnjW3+oEIQtWep/rUZpwL6XYKPiOTfAMxfAv/yO0/3MMKX+77sC121gV7T+g2/TW2VdRw4gwg1zR9oH1C0Mg+yRcqXTtdLYgAzwqSZpt8PSz2BTNA8C2D8mcOtgCUq2xThtS86ILMfZIxPhQ+Vhn7ef5E24nALdvfL5JeWXidWvRnURGG1j2MNlaYUXXfh4uBVRkKNdy5a+yNj5hXlskG6+6NqalD/FKbVOTDzGZm+faWJJgC5b7bvwq0ybQVLWQDFbdK707Y99pkKyF2GE71+KfuqfQm5ri24yKU8Z+4RJdZcGEOwcFBISLP2nPaFhYk/qcs9/X/u9j163d6FtacMrUjWKC2zHltjG5zFexHnWnzCW2U23dqwufHdj9x0+GfsxlPyL5yEj2vYRZbckKyoBCLv13d6JIlnb0hu5LYgvYQQHshSw/qIJ7+wBqjoAxpzyJnF5mH+QUPqZl4Tir5zax6Y002XxKk/39RvdQ78Q3HagopwGa3zWXZg0mE/ffGH8NSNIxaBz40ivnuZmiLE+UZFwJgfpFBwKy48ApgrylY3XWjvlw714ydLDTwj46MOoQbzSY7/aEzL/FkE3m6m/jQqAFqTwvuQG0rbrdK8OEY4BIyGS3AZM8H7zFMkgra93UxNZyeFWySIYqEFerHtBhbQxmBSLTCbb1lspFYgCVRsladZAqgnAPFKiVaUEp+tM53g+6t1srFk1FOCvvRAw3TO4T63KehkjDh1BqKXQr1l+azkDpnnbo/d6hmuH8w+piYm49sFCXI7JMnFK2BS0B8gFoI9zVINcy379s0Tf2StbSKwSiIw5VWaCE9OtQfPfXnIG5FfisNLB7x3MlbCfaBYJf9GGPyIqUFvftoK99iaSqgZVtj/tBc86TYFQ95zun21PsDnZU7bxpN397EG8dqehjsGiPb1qBDmgEWt67Kf7s4aOEN/W3zrwj2PACdWPlNwv/58siTat0dSlo9pNw5rVgt2DHI97SZwG8eRg5+zXgA5pe9yGAiQFTBR5KhaC4lL+r/pr5jWJ/6gwJtr4Z3EyavITzVqrskEk7w99drV9bAsOuQMiI+FX80aBDkoFwTOHiO7hXEN4cuCp4dLM+LRTCzfKFwk=';const _IH='7206651520f2acc331b388674bfea0d16210d09688ee67f61d10036d48bfff31';let _src;

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
