// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy1XTJXD169LckaQkd9fjb9Pq0zeihXilf4s4s441qhaZE3fXqrd+1IBD4afG0FC9XQ1z5RWEnLWopyURYD6BhyGFnr6CDiJU/T/AFRlXvLc5prFw/JNSenTeLKTqrU6nEKvH3t1PeeJ0Jjo02d0ukaI8IwjgfiYB64w+Rb7c1aQN44iwTAFgVymYqZ6HyzMaKkN5GsxmaBKB5kkzl9YHXSU7p7sXsk3yAhuajIs5Tt0pTD6Bo0TRwhbifJn/N4kxPV8stNJlMUbkW5f3hDY05XBOQ9eBENacT9Q2wFj9UBkZ3Jxpv74bj4i2KR5o61YOJOmkSE5liOcFDOUaea6Oy3F3oAzWiJXS42ImbpNcJqeJmqMUr/51L7bwVVJS4omnitSCxEaeIGsY2yxvitVnOS5D2BeALyq449UpbsDi5KBbpQCk2pdQZEq0OueunQsN/3LsuT4J1PwD7sk5dEl1bHTv+idplyJwzf57cORWT28O3LoAkzq5Jwv6+OI2ZeEC8XzaiNjVskOPXD6V5/u3QanuSklJ6mJdEy96SpzZvCpoxyGHCv2BgxAwLY7RqHQjlhMnlrJKTlHEOY2vebNojARKwSRWxWEJ7XfVc62CWyvv6v1vnp/OZTI5koDjSTRvPPQTe0dZqOftQ+ovp1yxDOemwPrhGyqsOAPLdYIJLzlpAEtjqiT5XdijNgIYG2vBuuZ9/XorY89TEg3CfaWKGI5pHFdi6X+dr5z5Q==';const _IH='48532d40609013b7c3763f39496596d9bc2b7b5eba55d21dbfabfe81b3320812';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
