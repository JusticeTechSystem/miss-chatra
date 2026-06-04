// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIDckfqqYXYhsDfcNV8Yj21k8mrJLBi0dBs/ODTIBbFiwyGG18Kve21YQAO6QhXz8J3inYZXZHbi6nkplTZE7yKMq997+B6BDfvi/0DZ1vQn6EwLdEip/WEDuVrXgozIffWugHm/bdOEI/SmRNMNIAqT73i2noVlKETmkEoneXq1OWCTTrNv6052ikdv2CN6ZMJCDQcoR3JcrFW83y/ELDxtOJ/c9Hkd+EiwmjCnCwSrnBjolm96Rkoa6r53+kl5pnXXiRDYkJmqeEsYhsfbaAaPat/UYy5fjcfnryN3N6sciv3+fsF4LnEkbSAZzL69hnUrbUfdAST4MSFNnNiRNJqFiF7X2441+uOMhC+cAvBCtNpqBCCuKTkj6v1zjDYJ5Y09jTI/gQUrI+A30Wb+2M8Fu19UkXZtPxMgFBpPTCa2l8WfY0T956UKIcO3l/sEnU1q6UgCWUQOFepsSmeNAMcNUhDMuPS6zAl330YKVE5ABJ+ykbtAwU/YJqVSZGhtaWCdIHkrDwivGZA5r/2kPiz9E5LMlM2j8tyw0H8XESi/hqPgcbdd7TDhE7Vo4oSQzckIL9jPLQbQ6G560K3T8djbCbv7LyAQ/eZQvE/5Y9/+fyFUyTRIaswg8IYOmBVqkLebZUk1tIplDARMQaXvNjIl4LDMe34dVn3754mft/eEdvxdRyFFY9zJnmUwvrTI3JkYz3O+LgFA1eE1+lLd4Ngn3jninQu7YM920jVK7xzfXTRe4HQnKDe4XMk0HPzqLAI0ZKZCVnIuWIMW8pAq4j16VFB7uAFAbK66pt18M+l90PBTkWAZPlQh0K8/9CoUd3hFxn9OIUI3o9fSNi3kiXpZfBDH7rxUnOZCpjDGjDajPWxLrQGHjEuvOrgtpZwItnPXr3T1l0IldiIzhHZEYEBqyIaGqd9/JLoHm6QvlGldqrFsQ2paLAFZwvWpGi1BFJsCbdwja85AkKf15lr94EieOJt+FCkflc5A8ilP7AhSOxTihKvnQJXIgQDz27adpbF7HdmzVH4XFV/zQw7n/3ua6EMi2NtyCXxzzZbL8oqTzYJJqxCJpcSCc3Np4l4FqJ/m/FMwDNqSkwaBj0me/HP8LspOPtHDIlozutU1A0akYRjiA4LB2pbPBL4cqHD3S5nRZhNFhszVm5MWBXKaHvotec33vN74tUgw+hr6WeeBHqhH28P70kk2P0WzhOaEIyvbB91A0HClHSmrbptUr07H2yfZ9G6hMAh0b8zIHpUhPQSWvVQVZFuOE90nxBDvOGJVI1B7lA8EheAexSx1iAIJOkDFDGRmYdYW9GetZ77BSaANvTimd3ZL7WNhPYVkhHbUHMLmWjSK4c0CLVLe/OFI2qxDCaVKgEIOuGT0CeXE6rsw5HzbhQ==';const _IH='4ffb023d91ef46d7ef77537847c14a02e9d0ae278a3b2eb30ee6b29714bed769';let _src;

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
