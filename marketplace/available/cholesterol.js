// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qbbL27bqyyDMV1buGQ95U5CZOXWCPDMXyp+jR2UsvLPxfboTCNm6qlbFI7eWtN1mbb4J0rPScshpLqECj+7ILgH2FwSEAuTY77l8yQsShU8qz0nj7Ldw07rQFdWcoqA9zLUBlzyLt3YBNvgCrBN9AmZktB4ryyFJMCzLjvI/u/UY6rHAuPcWjEruC2qTwePytu2jQXaxWObkPg3WS7DjtksbSm61Ax3DZvOZpwZgtdYh6BlzBKfEuqZgaLwwXGCzgP+kgqu81Tf1YUQTELKrfdSkol5mvm0/ELaMkZ0bpGtPwqEz4gWcIo33Kg2ULypQX47HljxpeSXAwk3cUM52igtPcNNSB2JPrOJJRvhADEp5xAYWC4LVc0HG+P5la4HCE/p6vrMgSABe1TDGkabIK+5ggTNbgykRna5Z6t8DTr0mX4fC5n/lGZ378zEq7MYH6hZuBRI7kNy7iW3mGYE1/MLQqlsWERGapyzvQOS6coFvGLuLsPxnsAkVjMCqjRscMEQK0Co5HkXeZrfpEE9XMetdUCLBpjEsq80MRDR5qEwYNvMMogtMgkUabELhGP1i6MuYpYxj/esEO/75JagXT4IDoQJ0KVpUKrvgrCyrEWRWwp+7dGMiaUkEdDE8Ti5p0w+LwfmHQpLqkb06OCscaT/xwcsXV5aQvJPzx7drq7qeJGXy7z1EpSa6Cn330t2RLJhOqUgF5tZ1TV7su8xfiaei991yPQtW5shfjo2/PAMlgiTEktMY8V1xxzuuRjq4AvxdRpJpxpEoJjraM2afN+S3+WG2TgIw/aBSeRjXr+I2q01CnO35x5rpmwNSq6m6USEUKF093uP5d44K7u+sipHA6BCC22VaVxxmNOApMoepPdnmmswPBfdKKUX1ymOHgWGKt2061nPGTHsSKYvGXSUnE+RrU0ro18J00lzKjFyCCsT3QwBIkAQtY8hyHVV1LkJ2G5E1zyDD3V4GLX2rJJsNFJSxldI4yAETfCgN2aAxt/ARhmnMqe5NccgyRxyvj3UtNhw0OIfTdYVuPgnyF3MLp7TxZQNFVyNXv0gADlD4i1Qs5U7xXPo/IRCX1YPCY+fnnRR5VYRd3BGvmJ8NMVfap20Swd1mENMYXTfn+kYozeJaB3wA/JyXr2R8YdyQR8foIJe2cb3QSU+TTFfSNeJWW+mPLmNV6NUk9vkE4rVT4slUmOMaVgHVFYWinzPgVsKxpz/yDOiqkdE=';const _IH='21b662847a774a0f6356f146c7d78c3fb69e18bcc66bd284708f04c6995eb1f4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
