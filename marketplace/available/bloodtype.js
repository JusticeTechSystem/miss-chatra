// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D2h0GSsJb/D4khoaz75fyEjm8Vt9jzy99hSYrCT3Qqq43qxTvTx9ywRcrNZZUcbDAzvIBeKBxySCcVV3LvRoX2XGnLLps8BDWFhm3XrBXDqPf1XZ8BoTJ4U590k/QoUmBLv0l9Mnpm7JBnDn63mbuq7AQ6D5YmMJTQXPesQkOJjvyFfSTerdIFW/1tCLVKR8MOKSkPoswswtzmehXvK9pPdidFcA5TYcUWHQ5bbV4QorfHfEz9YuNvbWi/jlpbbid9+lTPg0PbceJOWZyPdLlUDwdI1dnGWnb4Q61Md6Rc8Z5Z6/DzRrnQu/dJbxdUFLTA+G36CRUMkbzDQ9ty6Wkgf1LOpn8kpdBWzvBYMQZOl4tjLyDmVUv2YD04L5LQDezgOgB4pgK/3nPQOA3j3H2P/RfQJERXpBAQgNRAUCylK2o3CAY/j6yLB7UcwRjItgdKhq0tN7NAmzgMgSkqmDK5VEY7ealSSTaOMdobzFB45RvLcKjwKE07v1s5zTFmaj4gt6s67xEvzpjHGb+TtX8Y/lhk8HDhuINLKB4t09oEaNTO1k7HVRIvGV3c/Fq8tcvmudVYqDEBuOnau172jSbfxunWwl15aicW8RPvmoGQnSlNeYL5Vo4etxbgtP9dYrQmIz79s73Y1g3DpxpEVCleiD+LOQK5IcQfaLYNYGabDWJ1fzLwkEaf6xrzM0fcCm8LqBFMT1dSn7VGqg+SLxT4DSlvbnTzOC1w9GWz4V0EEvMSEltPyvQBynPJ6/FZ32p3TE2ffLOfbpey5uGzhyKt8tcd3y+8rgKbLaBWHrqZAG6q8mfcmrFS8sonVYtYhejhlQG0eXMJX8b6uaEQ3rQ+KiWi4/TQ1Ep8JBntOyDhEOp8Lk4Bssdez+oWUuwB9jnm833TONINiMdsPl3KM9RZUFmJKCUGnirAHsLSBjQJjnY5UZiElGnJaRxNY9nNFDbXeoc5sY29qEsMLYkXHiXz3CZuXP5lTbHKnD8JTi4XJZye6IngkEB8Glg7vsFFL7dYvPHPowwKf7zPTU04cxiIzV7KycDeERJidKx4u7sWbboHHaTDKzNeT7B/CGHRCmWEDNjTcztFQCesI1Y0Y2Z5qUhAt8LUTfDoV3Bzunumy9mmC+uUwm8VfLqJxYPB+AzLIDK+uNmZw6I6QH00GsRiZscqwONJC2jjrt6/gY0ty+RX0t5UHtYWjeuSPhGb2FKrqe/jA=';const _IH='94a238d6bedf59571254118b31c659b974ee82f37934b431abeb9e793767c32a';let _src;

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
