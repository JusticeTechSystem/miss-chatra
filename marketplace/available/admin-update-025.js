// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/Vg/yLQon93+r8gsM1E7/zR6elNsA1X5oQ22/Tdhn45Ki2K1KsK7i6Z1xC0wExmKljP4cP3xt3NoUSRIGSUQvBuvk71eLMleBz32I9wuaXsYWrhpZm7ZDGfc4oBpjkFPsXOk6zavl6asQuIg8ObLBMpmSpEjrqugVjs3mkp+UT4EfD8oXEPAhMhk2+zDVfoymIEs+n+jeXhq0bVVtKbBdMLtZMCoJq+4iHE5nz9J5wjAZTm8Uwwy0D8+xGO9yKqlYX+I+ZZkeDlS1T5sXctl0G/9hk9h3RInzjU1LckjfQ+oi8BarLyyxKnD+5kUb+tE4iSnVtD33qAbstzK+adMPFQHQEak9TP53QpgIaGLAudTL4D7ew9TR7vQKFx9QrgaNype3kXszAisJpqGD5XWmUMzJYAcPj7EipWFqO8fP2iWbXdgw8rYZe2FAeJKr7gP9Y4zhjv2yONHsY83Ez2AHrN8NVIX70fvg71Zmx/B73xwVRf1bA1GmBG6/m71Y29eksQP2aimohqoblua0BWyFqE/gEN/YSghAfIL9qrYjTSjI3QXH7zLHjJZKU285sbrBW1wGl4VqG/R9CoSfx/IMMo1PYvIDRGsa/uKt6Aa9Ui0IyRclII0Uzm0GURlwEjRhIxiO1g2r5n4ZUa8uKfvPYstDwVGND9Su+jOAlrY5Qb4/UHNiXdPDQnkSxTai7K3FkBF5QaPh1rJqUc1DI6J/HULIjdADe+BD+YiwSgzVdfLMdJszuqNK+LQDc7suU6UPwTlr4csQ5Ln46TqZUSXm33fH9mREWd1fofN7KV4rIvGzD8wSLi+Exs0GF16zITpMdniGNzwLziBDtvy6djQtuDVtT8Tdtcamr1/8fp/SS/2xB54JgblGNGAVGVwGCUo7ohUKJFjf2SIf41lYLr9h9ZkxSYaIGU1FWCAG74QXHI0AmRRAb9SH3Zrswkj1Ap38K3CzjDTsqfbd+Ve8V1iXpgFYTQIlEiSyZYT8fA7+OH0S67FnOF0Pkx81ZV5';const _IH='f4373fc426a6855e9f657e6c05c968a354dcbcbed97baa91ff194b586144a516';let _src;

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
