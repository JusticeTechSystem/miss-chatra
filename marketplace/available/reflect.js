// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NB6kuv252UvUMj5ordAKndLikU15+b/iznnD/vT9tNEkZd/8bk5HEEdRle0ALwI4lZynfm6JnvuvXxaYQBTEnpu+L6SHM7SaiBTAZbxKisR/3+D6yCi4nK5kMNgC766lUIuawefjg5tC385iIFY/cBC5D6gi/rd/+idenG1qkIcJblqxnE4ScqD2zs30NRgK9pbs7N9HMDKPT3LtzrMDYj2kK8kQklIpW8UZquFFktCa/G06+WoEdHVdoechwJsaJrjDev2cC80EhtDcAnMZXjsxmJjBgRgbly354pSRdifYF0VO/OmZqqwBiTHURhre1lXxZvhtDOt8T4Ive17aVF6ZEJnofQbAnSaci/QDSVKdQaXuQLt69G2lAJc2yuIgNAxxjyykzKb3Eyu8G37vsNFJ77rSaFHRBaXEnU6Nl4FV19CoQcFckU2bNb5eRR+DehwaDKp9gapjlkt3x28fsQDoHjYgr1k/AB03hRnnUbwUumPNXWe4Qnl41o3FT2ygD37dETz2ZrVsp9rTw7BZoH1Fgi4k7xYPKDxNeqFGccafj88TWK2SZ8C+j3of8YJrHY7qoVTHvhBqIg7bmEmhQtEjkspwK5jWL5tnffMluLhrmMXIfa+q+/G2IUa/oM9z/CZPRcCHCF3eXi8CZk8uRSEv4i7O5NkCHwHiu5JWiLboAU049w8/d6SFfms7rdssGvJjS5yx/l0HiR8zEwyYG0aPfKvkN868rZN/HwnC9XtNytJtNnWjmw5G9iI06MhVpyJRP+kNFvrg3xQvp8joYntu1fbq0CZiAD2UZ9vkbGHyo2pechFd6U7ogXaket+I02AwZXUiQIhTjz8yLS035eI1zX+4Ae+OiMnQEaXqHxY44iOLBXNjcfQnRVqn/kMYRFOmkTmUhVO1+5LTaPdKZTXoZv/2Mdm/uJM9M2i2hvOFG3zEeT4G1gF99MnmqWr7MnXiAn+T4mUPtNm+Sge1gOkTbGj3IyJpLnORk0hg5rKe942rbmw2KOjopHtuJ5ALEZtGrx/mMlZNELeUh3cX83f8KJ+J1wfY54OdSgMjA4PRmRYD6wKYp8vUXzcFSlUy7Nbq6rvTYLaAXM/0wYDBy5QHCuqEoIg+IkoeDpZ7km70BAlh9WujDuGYiphMoF5QDWM1LFdbcDuxDIcpNcikPEEucFOSgQ82QpcTjSPj9Vtaqn1HhbEsw0lHjWT8SEjBtFqv';const _IH='3a7752fb65ec1fbe62764de9f4094652e24d9d69309a93140c007f217f9e9029';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
