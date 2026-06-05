// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GQNvIJF1UvPuilyXgtn/Pzo2bdi5G3DcbgFRHDiKTSpGb5l27OGOkeu5g8X8Y/Fj8sLkImdMmootVp4RKynZRyxY83Gu3X7dk+14Um8vTwAei3ruGesm9/QCLN8NYS1br+vzVRMEZX8k93bS0H/g5rGvDvCfa/ojsw6PTg5yBABdsi60GcE7u656EpQZLonj4fIvrPhFRc6Xh8z3sHB72iVLEYU77SlFqvKBy6kgc/EiWsJQ+KsrPgfpp1LWz+ypZ7aWzvZEc9TBwNRdkBKrULY73Q6hJhvcvdFuQxqV6YGjUCOzqU9qSZ1ZuqD+ZqHMsU0eysY9oq1jmzEZXlwL0T23XWrdtr7XavXmrRHKfBVgtTiH1VBiUbYsM9BvgrFWpAc/zjLFJVlPa3dn9qOi8Jhun+wsJMp6AY5fB2b4NtJI/yWFt0HTeeceZY+/InYZfZWUYmX8eWkdJZzaXBBawO7gM8c58tw3XXoUMaotAX9+OMxTHecaVIF3FKJo2PqjM2a2ZfRR+iB6OfzyviYOvjSVm0t1wKBqWIKaSB7AF0lVAGzWLnNNsm3WCF6fBFZOJqP9Phq7tf9e2QdHYzAf3m4M4u8g9hNZX9yhqSzrrdyfXxG2ps5XiskJCURkep6LAS5aZ6G1KxvFFf9jxE6moaFNEv3eI3ZpcRAmj2PwxOoKBxob/9DU2rpoICkMOPqALDSOvPEO0kq+JEqYTAL7k9SsY8xFlO7B8f6F7yUB9mSg4KTmq6wVyhs2xbtCqG3LNUON5LnICN+uTLzdOKgYCVLiqnteWpgdQtxNh5IvFq0gJRusAsrbHPl2DwXk/4zxwZ3hqySu4OzP/TZ8oYWzqg1EyfeAML4JDGRok5wFKyBAmNMLCyBoQRqdWSVIVCNwMHKrkL3OAVFPswatX86w8gaak/VK+iXdj7FceYtjppmqmFhv2SbBZhcxS6JqPF4Av7QPfTDFRUTyZQDgXCuUqG+LEMXtdgiCYCWoI24b0BJR0yv6ukTZc60rxsBvOQ9gSNO8zhqnt8lLRDshwZQloxSnXHXZJlOSehZYZ7njulHKN1ki2hvT6AiCkH4U6C1wszrcWpblSt35sn+CwBO3A5gRdOZtbZWon6lYRrOTaGgLgPeoJd7Vdj/qwk92CpclRYKM1qWuQ/DbmjytHoiTFrRtLNwj4Lo9njmc2A8fz3mp48BDk+RVoP/CVJUz3O7b4oH53dxCAwqphf4WRe1oHqG/NdP44dkKHX1GEZw0CJ9WW2hUeI6iiDBHWnDQc8QBcObMZU9SlZV/TQSzPdyiLa4DGcYg/xVwOok+3/qjdW95zy2RlAQn3PYDMaazw/G0o4DObZpqW4p4MUfAAaSIQmGU+EBKDcJXBWTYhqzal+aECt9hno0UfulyzDPiUasa0Xl0afHPPDoETPaLUeLVlk/nCWa7mLNOtCnnAqGwfL/Nw/5gCyfJyMHZSSylaj+Exs9+Cp/E88YMCWPZXANE+XJxKt0Yn6JvEtebiSpOLzAEwFGfOW9PPaHTsYo9QO6i2zpst2wCeRZs42swXqA/Y7oRxgSM+CI/gXLrfaaeoSWi47qTdlajbYDsLWW4wgHzgrtAJJ05';const _IH='c1bf79636f5f7bdbb9bc073ca70f94f82300c8fae9d34da14bb3454957378f04';let _src;

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
