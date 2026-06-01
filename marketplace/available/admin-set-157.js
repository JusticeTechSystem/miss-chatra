// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzyL+iDTYcuk1xKR2by6Q8ByXhCi6s6jgFRr2XVxkDF6cl2L3XFsxtPEo2IOuPCd6j/p1apztHZYhKVwR8zaV2danIDWNPuCvRY4tx6GTVvvjBHmOijdq+u0dCVuLS4zo2jQkN3Rqdx7xetsCuW8rcXAf5ECUqDo6f+WB8mpjuXqVdJn/UFCIhakIGtZmAMIgj0/AtFRBbNN4yjRJLBsfRVzqmcwLN4GNbpxFFZFGebwUZOBr6Y481O7tdOsMXCI2sVG250Aifp0oXJx3q52bglEp24w7QsZgauLieEJeEE9W+M6+AXet862ECYVC7fXG8BWwoFO5HdMdtHaYrQAUeuRHmY97+brn9jIPHqvKlV5Ubczl5Xw4WyosoCUf4Sa6JvQg2XatT88k8KG84HQN5aRfPZzVi74zbmBfOXEFIYM3A/d/vIaKkQPrCThqYME1bmwHkieRQB+uBz/d2blA6otw37HTXDE/hYshfoPBa/vii18YJJDqqLHSNaj/JYegSWsUWyk7cC8XRIkk00eq9Xy5q4C+K+vy1cz+HAql4afl9ZwL6YfsMq7PeKS5lBXW16WQVmLIcNE9k8TZGWgY+uul+oS5ygQEDpey0qulkFx9VqiHagzRZIW7aRGkwmS7vIGFa5ugweUqmTZn9ri2cSxuvE3p5eRUg6WJNd7AGAwHm8U4sykropoY0v8GytgDTltAtQ8WEDw3ZJHQUMJhJ6jQAZV8Q/OZlUCuezPZ5JC6S22SQagJSq9kE6pqHbt0Lm0DoAVFNyZb0pzBYW5AxEZnb+Y4Bz+eftWlUn6JumjmhwSTi3sWGpxHLOiLxbSrmQ46KQ8vsqgfE9NqCjmCJbcIPJijPV2/ivhzNclR7V2vc4GjIQGzOM5tSAq763vKD06HRdGdpMkTaKOwwuXrog8Or2MoHvBLWUcBTfOQklzGGi1HmGJ4VUDB98M4dJwxZqC2nRJpXv+uunUf9dAgztCFsnXDKNvL1Fv8OE=';const _IH='4a0b7bec88fe08c68e46fbd405227acff97ed0a056e7b847a57dac88cd26b828';let _src;

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
