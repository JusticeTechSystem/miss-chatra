// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i+1HN+jobV2L4lUcIy34FVyJIElaXDfZIw5bddbA5FOVqEXQXfmff5lZpKDivOdCKK8WM65/r3D1TfCRhBiRVVvyo9oPZANLjkNlGWJ9Il5tULGJjMa3JeTzppUeveAGzg8rngcNfEEaSnBQ167Hz2UrN7ti7ZoNhGuUxonIkkN3+0TSvpV4ry54yEvpk1ImLiFP0sO+KvDar2O5KTgFgArZFOArIsjuB9JMJ8XNgcEUfvd4cLoX1XFOlaFkjaSxiOfv+magytAAQTy0f3QWemJNLUaagkQ1Xi2SH3Z26m861CzI0B42Xr6ojxwjB4HBvAUf970xfz+ymGtS3LMj6liHJR3ShHB6zwRo2r90DwgPR7HjHuYHjZEbFJ8kQ9cdQRgl6i2Yjz5Mml0IVqhPNY/1tJtjgbi4uSUcUaN9v4+BO49xuu1AaO18AcsSAAKJ0v+5b795FrZEJC2Y6Ar0QRjUK6PhZ4ipmkOpGv/RAp6RCTiWZx/r2kLNo25RaIer0TDI+6Z9eIV4fr/L2URQf1xbcohQ7MyA8GKM4+KztrTeux0hm2/+Q00/5bZYZf+4VveiZUEX1bysAlUaww3WVyIRNxPOu/ai+qezpVS9Iji3I+HXPffnrmQUXbOg3J5oSWA8H3RnX6r/9d+HNzUM2kDiwcK1VwALdF89X52jlwlpDw1v8LOezAoHlv0dERmJETaOatMiSTUS6EZqiTjN7B+o1VABucGSpJfqUEd2DKNpAXbxiK6wnRDj6CojJQqPBvx8x4m6h7SqduO4uj1p+gssyFEw713qJKyMK5Ceu4YgN0bJ9skTpaPEBijjlptoA8ENKaGaVrsgISiPTfQBaFtQMj0PRuVsWk1lHx6KIjsNwhlsiRJWo5/1pM+8xwSfYTM4pca/KHYzXbX7lf+xvd4E2wrH01SC7Y2QoLQq3Ap1xswzkxtPo42Gw/Avve2BFbQREhf50WE8heKDJ+KF4zpKq446As7DOmT2EOUIYplgJi6YcG5kvMC9rrK1RwxUUF/owd+QdOP/aiuNXGGcz/isKai40RYq/RD4+u5hbu20yFDoZMx+4VF3DcKJNi0hjXMWYiFn6SkciIoe5BDRezKULota1MSCqp2HNTcUWZbYHb0qoCE1uD67tb0KU8XQPKlGy0UgEUQbQeZIn9OPD87BiCWz7AJuzQ1Dtq0AjRHvr38m8g5RTDoZk2BCvDBV5f1iG9jLOJ3Jtwp1aHN8tGVJf5OqV2Q3VYbpf1Bbe5yr61rWSkAzw1k0rvTP31/hnxCmSCTIh4rOGPBzZLUZ8qJpXqIymvFMZ/EvW0T9A0rHlCrSoVgW1/yVnImf3KI+XarIZ6G2nNQRELT7DjUrAggX7C+xuuceqKvhOB1B';const _IH='f389a62d47437974d254911c44712509b9c36b8e6ca63ceaa8af6efbd5685dfd';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
