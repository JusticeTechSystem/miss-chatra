// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKOZSiuR93wOvCmNTJC6hZx+p55OkM/3P3EiZrY9O5iuvLkPHECUtUYXRjB5MdFvDHLaQjTeqPPwJ5Za1u6cDOtiqL5LKrOcWsPVDWKlIQOi+8218eUE1plNpfQQkqXdKBQYYntcbqyW3gG2VFDrmyfZyqXcxYDfGInZihhh2ctGY4zeDgKGnbPYHXLcr5yGCUVl3LZU9FNjjuKO1JWuthyJ7NCOo+8E4jFww9ewbiGhRNbtZ+66/7y+g2y+8JVbNBLKNsXq4EN2aqdk9DqoYbZWbu6JMIPECLllxMWs+LySDKGNiQxwmIf9TA3lnwZkugNlpwRSrlIPZL8O0zajHOIEfBHy0c9xL4FBz+uM+An8PFwPyCBMAUxmQ8o5SlnN4E7N7smKC/9Sp4lgXofwRmb0VU1sEcdpBiiXIFUVcII4/zHp+/EW4rlZlq4C3UJjEhO6JkcVybB+Dp1QnmWzXJ6W31Gix+SLwR8fg1bHWVj54m+foheuN+9XAml89Qf7Bs9JCWmaLPJnoFeVuBSTLPBv9pTleoBJyXM0Lah70sxCBmUPoIPiCev1lgc4FAg6uIk6oK2LlQhKJIJVP8utfmk=';const _IH='8f73591d3d1f948d257d6f956f51fa71e3a722d87de09c7e126c9d92fc24e8e0';let _src;

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
