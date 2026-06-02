// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D1+dPB0cZHRxHsrmQ2i+mfZZdoWINd+6Vk3KKA+X0dNiaRvrDoQ+VD6ED/ANIxMd4RDm7jGVB0AOk8/VOeeNpmetUDl/VIFvN6TIQydRWSt8VjvZV8jq5QM2yATvYgT3boMqAvB+4Yx+4fZ50kLsmHgYm0W8r5mkoBJpHDhXhP1+nNvrPC5cs0vNviMVmSELJJNPYJhN2RqOy4Oqr2MYf4h0egBbhL1kQ6c4Ub1XPVeBmWnzkUJwMuu0hAsQlPpY9QF843PB4pbmJrPEipgTHg1mdBR8vd++dZIvI7wLmDoYW5f50o0vgnJaGoslyJaDl7E48R4CN5hrk8iP4RsR6VaKKQR5EExBZg7jpEo/Rv8BZqmQXLU4Ly7KFjFKodntBa6vmCDSSxH+kFbgIvY3R0tYL2U3oMPP+wQ3EAfHTizj9FMiYqTRmXChvQDSMtE+dJS53IBiX3mCrXVeGqllol/d458cZ2qCmMZXNnjRrPsjjYPXojNTO1x4sffKYePEi67wLNwYxDz3tD3terN4dvXyvAIXhnFWrg9daoJB3xXmYlilhztZaLoy1hjaw0xopm0SD8IUNBe/+ZjZmuGQhIL4jvax7mMkLVrNQqXe1H911tgB1KR63mrujFcpt+mkhH8DH585d2+qK2K22SKQ5XyPKWBnFCZ1bi8DUhQqr6EJZJvL1eYjfPcBOvW3PuM7MfQq5PcjfCKihIA/RE7d6yPg02cQveiFXkObaSHWYaEpA85kP+MOe4u0/nN4UXyd/xJKxehF2oBdCs6aIIJ1n2mAbgPf6KquedKapaOGuRfjMCOsdzzfQUjrMFd3Fb0uY2h8snD19RlR/UbdNcDyov7g3gn6eBrsoKYQPIhzmN3ASNdxiBwg1PxziJrUiHtLnYmqkGZ3XGgRogSou3O9i6yOTVlRY3nKXq9YlBxvnJ+JLWJ5PAZIVh6zOw==';const _IH='5de3db0b8c6323ef4fa7ee4c8bec8fedb5f4da6ad5420e181e20ee176c0ee2cc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
