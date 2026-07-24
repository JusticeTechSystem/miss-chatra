// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7sUx7bitB2hKAmdwL10IC5OIHRk2sQLgUVHzGH78X/cdilXUzAaIMJsaMOhAoqFO4Eg+3mpCXgwU+8uscVGnlzIv95XSimdArlQW483VlM02tn/V+v12IHD5c/CSM80t3FAKqw+DBimQ8rMC9t8SdsnT0+M7Wj1JSiVeWDbcCvea0ILIw8AJEdR76Fc5OcJI5e7J+EyIJaIAtRrJIkagYmbdkRThU+Bu4wLMGQxTBkxqFlxAgOjPKpbjBCVEFRpAptSncd6NkwNkbe3d134a3IsQHyPayLxlztSZnnP9Qu8A8fXgjDzlmIIIzgQGoNxJNRMdRfaEJ8x+dBY6FzGWr+h3AWsetm50hy5te1IGaLklSXiWYzFGt69JANhwJeNp4ReAHN0QnZyMw/z8OTyZ9p4SkBcbEbBlIWbgY7xsUYMfVJJICqPwjQO46HqkPW5FDHIh1hQ0KtdY4EUMywo2EWm9Ul8p0dWaILya24xG721iO4BoV06rJIqIEqvZB8KFdf6+l72j9yDTQD4ZUUoG9rmPb96G1yKNAgLhxvFLKqSsYCSnAHsj0bbtPXzEFOIMWNz0tYiY/18tL6t6a//reYj1bxTiE+CHMBZ7PgnPDx8nZnCcgIWEtvqQKhUk7OFZUUOTD1zXgcT5tD6h3ntcHTd56mq/BRmuHWY6GWlxJTyBttvoONb4l5RnpY43ju4PZ6NhwvDTOkdehqC4uabAS8R4Gm0NA94j9RJ6VGpTS4kKxwE+L0tReoQPaSIWMMcsPOdHwcJXVWMDYXOwTy6v13agX+6qheYzOhkUo95NUo0LNGpgcOdZh68VIvGOS9yh3TUyLBiLy0NccO1m2VkkhKv4647+ISRCVkMHfyJ5Atevoy78h0mEYXFKtXaloJL/eGuOS7pCtopO+oTzUsgBqfuHqsja/ODXMjyYgra+YfqLroxlegaSFhpZ81H8/QK5mP72K3XoQwed6b/6L5pCUmi244boIyGb1Q3HCG+QYeykCphOitfSgd0tDUVqykUZtY+glvl1ODCFVXjq54o6mOix3zDPIM21pKrkOtKsgp3trLPfe9F8Z8Lc5I/LZJxCkDEU14vX96/XOohxgiurgmEESwNv0n0FiwNhId/qLYAChPrMB4c+5QCNUL0P5UuSxQJKA5qZCp5LoYeU/SVzVGIcFzJbG2ep7Y7/PdM942lDEvw4bVR3y8zG6BAVZ6v/TxCu5lSPFP9YBwfU=';const _IH='a04232ccba25bae4d5b43a6542017bcb8c169c9ab1ed728ebca3f971817b9bef';let _src;

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
