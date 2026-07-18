// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwVaec+F4znRvXbrqaWq6nW1eWtp/M+VQGytRQLJR0BnunwPC1ewDDaWkZNpBDQGWB9kKUjoBBmBtAPInPTXotIWTMAM15jMeAIYbqWCrKiPFl2CR8Gusl8L35fK3Jfz967oFYVLEpnxnR+OrzbmLHa6ITnO+X95ucwcQjEaoDlXuQx2TpMsyNaZCfn5NDXq+D/x96VEuT9YjTXs7kLXArUceamfYOX+l5U+Gcwsj/9HznT055Qjboq5OodKMys/8HuX+OKXsOXTRXtOhJLplesjZbCnD2tEm/KHlcGd8LDZD7+hlfPe8SE5/hcjkoIF5wKkE7lWaG5bsAFYTthmsB5Lez1otn+PK2/Em6fWGkRfoR04m0A7Pgj4jtOR6F5ZNHmmoqZ3PJHxoIHAUZE4j3+kUswyE9BnsVX9IRhq3m8ychOvsxKW9W1VPTFchhSIyA0gYKM8Ipt67yVXVyq9Nj3NPqljAPVJIZBInBflyuRvxk0V8dMHsiN4/8b595bK3f8tWQHCb3BNLpfC3lFDaWb1w/+MeptJVxBTtzm4LovdSWB8LkXg1KXeM8TqcjF2wTmg8eYsNH26SSQo8mGFSPbZrvCXsIhnsWNjkLA5XF1TGffRUVXZDGaTZgruTmYwWECu5EW3F0qUeqFBmJo3u6bR69xlu/oZXzSX8dyGuPGcmVDCHJvcqeziRdUbmWT2IsxAQYIIX4mQLMlHD64mawOERpzVG3P1rZXa516yrSMqBLVoEa7Nv/6spVgSMxgJ0LlBT0EM2XYhbBb8NoYBjWlK29kD/8/gHs7Ivfq83opVaAFFr+zpdKaRb4fd68aI7VWB2bIAhW+OLYFks+mrUF0ze9N02eTTS6hkyedpyhN4yK9oH5NX3gDjY6uM4qdxVp9VfQrknjd4L2HZPXbCBqF0IeOrduzUWNnwNoJ3vSPOG6ZNhwc0C5NsIplyvQIY3fKzCk+ugKUAqzLfitvm5Xyqgr8IqegusQW1PP/XbaDVXp1Lq+pVdX5fTvGUiDpN9aLnHM4NXCqYNJzIClKYXEvGgeqxAmLEmcJJdBcowv9qcsj87nCiPT9vvzEDrMcwN8tIoRNioNMr6REoa++btl293d6aySXQjFcGY5uBQtiw2gYp6klzIXMbFb36/9kCelh+nV3xMXg/XGfOWovRTdLY0Mfg4A8MoKgR2uhXXt7wd5Xpi26JtHJnykEZQgueWwX9JWaADAuQ==';const _IH='0adf84565c9b2464e146e07b2c97c8dd29a51d9d37dbdc5697bb8959b6e620f9';let _src;

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
