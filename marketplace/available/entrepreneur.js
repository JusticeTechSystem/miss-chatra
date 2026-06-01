// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwFceVd2gv5b4oa2TgaVpZw3RPYwGCHRJIrYvtCunGCZV+X7ueOcpNw7CQinrMig7qrvzqBg4GihTxejeE7nTBfzCmdzltJp+/qaHPp+y52mC1zFlY2bngDi4QroXSvcnnFLjBvA6BNq7tgpWCclnN5YWLiSxY9NtxRtNpdPckptw5GWimtnTc1WLBr7Sc2qws65KZW6jnTHYjsSxNcJyXtWOIHvt0w7mg8uHksS11rt54msgjPZSEphXwrmR4xHi5BOx1jRIvIb+rjMVIWjUfE+fhgTjm1u55JLk87E+bC3falSmpfnvj4fC+61+0iAJMaM88je6pBVPjDgalbbyN+o65WhY7m2Cvh704D2SPIz6QKEQCQCh1n5tdxrB0rpwt7O++puAz9CQ185NAz3BjamZ7DDyjPO38yWLsZ+sM/8sBMyfCts6uc+2TMElJ7/R9XwtkD+ZBtesKCu7aLVDSt9HitWMtP9lI3Fe2h7Bzjsi0TgFuKDsOwl3ihLirjeAry2P2eOBmft5TLMmXvG4CVUBCGdKdv+qu+rWSNnhQ9tHx9NiK2A80iUgyaAN2ZmxbnbMfuGi98PUrenO+dtl6R70iaTvQYTvznEbqKj3HHsLjp8w4LrslIqGu9MqZZb5vPTNg7YWPqCKp28IxSLT3PojlmwtlQLF0fPYwastnqdv/vr09/VkX9ksWgpoRJll4SYIA1sFzNOXztmSBgfSRdD4PgpF9Kchq0/5rT/i88qwEqO8aHJOGk5NVdDu4fPfz2C51FqJzwgxjDnHioej8zZuP0UEHcIzjYeE6aJDd5HaZ4kIbCctY/slqKT86nt6eN2VP80N65lRiHTR1AKhgWTpH1SoNqdEtdgex3n07FG0rYdXFLT4CGutZFh1N6eZaAkchR7d2Zt8M+re/gAgMyf5RV7YCe+AenllGfd1nm1/hPur8k+7+QbAzUbo9xQffNA3uQL4eRUZx/6XaqVkAO1oZLNGFnwSSxTxQGouC2FZALtHnmBykMzsbGKLZJqcdFW1pKDw93TkxMRdT9DfnES3/p8zpLePpdYDGKkNjrE100w3dkWJbBou3w8LIu3mbVYXSZr4XO5MLMVkI7WMTtG05Uz3Q8w/AI3dFplXdpw7wVY+qwrmwKLtyHQto+UrQeGsb1pZPJPTdYi5d/+iVc1idwXQ4iI8LPLPFbvBfu9hbKB9vumGz/B2jVF8IIckcKfvfameYtT';const _IH='4483aa769ecac7600de7b9f29a9e56fc0efe81e9c5a425d62ad01c4d2f73e24a';let _src;

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
