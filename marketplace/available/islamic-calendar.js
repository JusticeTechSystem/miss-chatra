// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='emL68gESuqh48t/J3sTZt8VH4wqVUsuoLR04v0d+Fu6SSV/gON0QG/8RtzK8KZvJ6VjzyoyYW6hzRO0mMBaZrQjLS/KVtX9dmu5TOD4MyMPjBuSz3XdzpOkkvHlxjmeYQXZFLZi5+8wY1RsJXW8elid5e/354LBfQVGPjsCCKdmwrq00N+XUxL5gF4TbslfwjQdRqnxR4HX9CACu8zLWDl9QPDII6srkMjcBo3OyUr0IXMvMzeiFiFuHRlgLxZkkEXzdrxNzQtRm+BUoB9oAbqReJEjkNLmg0ks6cnhWAZ9zrYZgETiz1Y5DISwHvEMoSOZEr/DmOxOX/c42aE5HsUAW+mM2U+zz87UCVI6gYSAixmSkHVNYE9mQQsVLqOch7MEMSwQbu23L5yxJeU1+GHsqclzcF95348aj7U1+BjpJGr+EDEV7vUSrG3nlPX9q+txRnOLAzC9YJmEKuXcimx3/NK55KfXDybMLSGBf+8F8MF83lmBLgXa8FquyEnusxEY07CuIedW69ITKiI4mZXk8hczxHxTm0NHN61IiTwsN+iaP3mKrVLkLF57wpRbiLo7/dQsxsBsz4Emkl2t4B04wvcVNJyw1qdVqV0FtfDPaBDaGiuVYqFwNsR8+NferyPKkMd0KHx8KLDXpYgLvhIXE0Rf+N0cGib/tyf7lqIxiwF3Zdj+JwNpd4UxiMssl+9q0DxC3e+7RbuB/flSqFeVeqynsbwiCdLTuqCwWRkunTcDrWEy3mh3ujWhtCv8tWa3FJLLzotqoZ9eiAPPe7VXYlnRqsfEq6UsYfd+LGFawgQT+WuZqeDXASFlVU0jlgzWb9PD/DuwORtH3EHExoCrT3udRwpm9uY4bO6t07I3DXAvl1IyNFsJwCVFcGXh2WFfroGBoMZpqBMZ5SMMAdCWR8T/utogiaI1TINHK8wjkuGO2XE9zQvSNcdm7azM46Op4MBrVCat3oLuDUxAb2Pn+udspM429vrRvbERNa0EEnJrZBK0r/ReLLByVhE5OmjKhLwXHTMTH+KRVsNoXeuIlThyB/pEiU1dEvHiwX7nHBdVmoVMNpLtQjlgbMTH/5JnLurvuJGy1vvvEQg7z4dCPv61u6JGBIFwLww/z80mbarUGO99i7wwXksdG77kNfAelW7KajZtNJkw/YalTTIYkAF0e5Y/biZ6LYSBDKBoROrjutAxOnOuX1HFQj9NPyibLx0qfFtClF5VJy7Cwl9z46gMTHaampnTGhCMl0tJD0BX1dPgyY3rXQrls17qZjfQP7Qi6oswEXOHDdTImBwGn0tAOlMdtx2Dc1YCjR+HjWal+hhokbeYdnpMSSSbfxGSKfOrDPBnbJOaRW34SZxcF8KxUELWdLF2STcfif9QOTU9MEEZbc4gmBySAf/8fwX9I9+jUpG3GDWmsBnetq4d4gRRkSnQmry2m6zpMGXtK37CgYV+O11lNKA5cNZt0uLOx5YLFfxFLqNuqEEIqwPIcldDz';const _IH='6176d899c0cceb8dbf1b4fd6084b5d49ab9b9846ea682dba294b31c6dc9668c2';let _src;

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
