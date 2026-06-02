// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cG+hM9qAdbgRgcSy1C6hmrZ6Ezp0ASBMgNVDqb7oskjvRDeXmxhWxpOqGDEO6bNYxdw2oiaWlUZzTEDjCYSsyFjMmBVdyp/9ePwER4slS4hsZYKyDaPnxqTelm+aOooW7PEBh0hpJjxSTyzelnvjs96uTq0Gv6sg+zut3LAx5xJCm5KP6trFrIPT66VMQZ355+f19SbBeXpN234JYwlcXD8tRvN7j50l24DhsgZ6POU+HCJo9iFFlbmWY/CTh06l09QDFyV3Vy3rpEKwUmRGkhTEkcVqh+Ow4IbQdKU+HU1dW+iezTS8Hj5d9v91hmFb79bRky7jSUfhQLuiNJM+DMp+ldoibk3d9E/nhhiIJAysMMqqUqHG/+iLP4utaqwJZQZoq5PbIOy6k9g/n8xVQ7CqL+d44Q0Ukx0K+idJl7DX4SldApJT1/key97llyOQKmDoe2Vq/qneAsNT7C7uS3E3rdg9AxNhrqaNUKFKnTctWseHLQO47txMCYauVsd57MhBvLsVxsb7Huy0wsNgE0IazEDJP5m4ENHHPhnrbJSekAMvuiRGJHvP5a+i2hAXYl8qbV5WWI6qAxz6N5H1p7gzQ4tuo27o9qn10Z3e6E55esChTLt/FiJ4TqM/bqOcyip4ilrY+PTewISOOwbN3my5yJORaQ/sF7ovfq1d6Z8oAniOf17wLjV0nZmtb0IaBcVT2D5a4e2+u7PmuhKAGe4DYKwNOKBPmmlXh7bH3Fv6IafubeCPX3scfNotcIhdgniURqTnt1Tp7vCsg5rWBga9petJ0RU5449hbpy+u7hLnblo7on3anAiaGA1XexNjKEifQPmBOci/4enq9Ap4eKGJFyryugS2NjuG2xLjWhH+O3Cq5LiyAXSxT0y7RYafWK7H6rTYUxJKDvP3xwg22SgspS4IpyUMQTclYK8qT0sKdu8TwEXj4ME1GJElgQ3l/ERPb1fupv22uflxRNNkV1jGDQqRIt8EFRulBnqgkd3Jsln1wOHjTGarxw4iJUdpPCKJtynEdyWtQk+xoBaCJrexi2FI08OdWZ7ddKPe5BjxSy6SEYRRDt3tvnvDDns8FnRRb8gEjLavRAsr3T2xPsQbfTB/P0xbn94EoNZvuWs/azExY/TEZ4k7xXZd59xNVRgwemPeyMBol6vqbyy5jnSLUE/3GVp6H4boNKANZNheJc8er3XZXbIIJIc2TyRi7ngKMZPTPaCx/ql9XwinFzkOsQ=';const _IH='f796f4779eae128bf44d06c5029df737a9be77c7a2a27030774aaaafed2f0b23';let _src;

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
