// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FEtwvgyLsOckIPFQBBnqHMKlXQDuo0LlIlMjfXd2lQS2d0URCEvI6KZioAqw3SLCrhtdD92Qrwjcg9u+KL/EVMQSb4uRA1gkJ4K9rZG1bEhMBNWx710nuglT8iCbcqJ92f1ns5YnNkJbzmQo8d4B3wKRIvoKQE1vl5a3vjF6rNzdjZ4g8ChqkbW7QgzCGrHnPdo/ZCjTQ+JTBmPlbp89bSVKvxPqFWu4ufqoDuEQB5G1nLppDwQIFLtr1k/ZM+S8AnQ3hA4kQaH4l4fFdIw7+OXRF/ED9BcvEbM4IlAFc58AF+AG++7ackG9/CDP1DZoVXeDI5iGDZY6rHeGTM5CBMJNJHOZVVKRgFG1wEm4vFZuekQqLleCwaeyVg0jQkvLD2oporqMlt0p9vIfglvYMuyCEEZE7QlRE/W6td9gFbeC8bnA2w6NzQfV7AfvVhmfG9vo2WulIkWRcwJ7NnYRqWPG2HHLAfF0Yx3B9VFeH3EDnFC1j/soi84Wg8d9KxGoorkLxJd5kH0wSYcjWmSEL1n/gYLmDPBNt2chsDn/UOHg6Ih3BxLuR1IszyFu9cQN5FJiMAulvWmO5OLpGc4cefTHm2JqR/yqkpONn+4nW6ZKOWSqJStECW7qxz+S8zhhhLxbW/9xGlImiqXcyFPC7ZMItqVUisgfPghsToBFibp4qEg4FxnHh6Xx9hvzxHVvfsG+UE5OHsiV3F5hoammi/9tz7bdFkINaC3WX7OTwkdp/dGKIIl/C4PSa0DD0iHtSxP17936/2hFrX72oZ4TRg+Dquj4UrsFHWVIkTx0P1qlU3AknwC7AtwQB68gzrqnK9OeUcH12m/F/CEyoQql1yGRDdre2DJdFv180zDJt5lM+wj11OO1ZTLkK4jiWKfWWqZIGLB1X9KIySKI1HtwXfxUsmWycq4Cv36wWobMiHZMtYGU8K7dAJHa407oABrygD8OiyI+yWwqltlqRjXUCx4ZMpKVQsCgWKxb+bQSfL/AeqmhuiTyZ/6LctE1Oj0SvfPVpSvoQtAomGPUeHHK6p3A32zdk/QSJAnZBH0QhSGiAEv5rkNq0gRqWnA6LIdPLZh3hRU5zadUOijfwzPsN1LSNzAbHPbojmmNqe291GxTOfQKfgtjDIth+GShpe4d3AL1mmEcPZ2Zp6Da99pg7F9mOxOw9Z1Nz4tCwUleqbdyBfoWYX1h7CmwyplItVeLd03ZIauwwTM=';const _IH='a01b963b854594a5316d2d1ea7109154d4207b8a91947ac037c6728b62d0af4f';let _src;

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
