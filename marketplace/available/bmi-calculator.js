// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxm0KSMoGrSZ4BL/jQ8Z0jQiBRicgmgYn1MUKPNT/PBE0WxThF2VIednZAp7pecA1iMW8ACSeKKiUvEzzRGLa6qMRtrVwFl42uehAg+aq5rFKCJ9+Yz0dzAgWHSc/FJLMg2ccv1Zxdsh3e5RWIBrnjIOqsCxWPzm78o6nlxalDZm0WJypA+T56PzcHm8N2Ra6btXlXa/Omn919E+66pUv9iwy5rIw4oE0gGNmPE3gFGlDxu2qwjmoL3B+dMM84ZlrPfc2/iLpzOFq4fN20TmMWBhM15ngu9OJBnV+e1XZkVQCi9R+voSYMfAfBwWOb3YYJJT5m+5zioLGw9LZeF+QhJw6WKdNTsX5Mz3fjptFRqrdcrizAJiln+NN7caNPcj1xj06Clyg8jPVLL3InZ9H3xPoc/tjHmH45cce9D+c6g6mQ1Bbit3V8Lp2uX+4VPvxW/qAr5eaHxSX4PstRAw5PvTHBpv787Unm9Nhx5r6qtXvEfC+kTr/aUchURjHvCzLP9PYZECHIGUECVXh5MCpA/poVsaELV6WHTg3Fjr+MFmF3zo81Ns09igUZdmt0X/IPopC4+jcJCnDMSzIqOrW7D+OjFLzSoPSdnSgSKI4UgS/dDSIsVxpuNLdfOyKJxheWSsFE7g1+IaY6RXLH9pSWc1WMhe2SV1XZj5H6EC7Epar9Npw9Fb9UZRJNEGHV/6M9EmZ5VMDKavy9or6FhVnRJEpLHn4475Bx/G6GJWqFmXxSJj12fLb0qwQJDnsjnKpg3spP+GIkVUQyZ8jJiyxNtNQagSTbzw76Mc6D5vPXJLoaYh97myy67o7JMNjNhdILKRrZYRlsuYddNmgUzhr2v7UkZ/+jGZQ5GmT3fcvjkQdqvl5A9uLRvfKFnMxO0SRvbBsxgEqI5VDhcV4a/fNnf2URFX8kZwBWwNeU7cXd4UGsYullIyWTgeOrz9GBZs3c4SSI7PrrMSX0+uWe4TUWQACFJl97OihES8yqNAYdHfJRxRjpb8JNz0YrksTpJjBwCJ+2qgQjXE3irBqM5o6liVw1AIgc5rWIMk1gdcpgzDTmIXsvmXNaGtaf7mNFqs6m0nRIDCqDxlN6Nkr1po/nDuX8CqwdxIwA4678nDYaxIav1ZJnQECZAuSklL34FGMMdzjXIhvQTg32Rj7XnED6r8r1NZiHxcPNNC+88Ji/WsFs7CFXkITPOPrmFZNzGJLyuCWVVvD6uFQB6nywYnMCQYbTSEoq2mhEq1QuFbtwhNyvupHhsE/kuClWc6wxkJAKtH3Ib0dzgjrj5tk0JoHMTlhzNS7F0sKba096m2TxxxH5h4FuG+/2Un4XXMmrYI5xeuO1nYma9E8j+jPnZg7LMOs4zu66412IwsQRMvjrqp5R2ItPx/eArjok3qc6d60W6W7n8aYdh3NCNMpA0sRoTKtN1X7w==';const _IH='4475bcef4608c02367b4cd583fda788567b51332608e5e599a96935c33387674';let _src;

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
