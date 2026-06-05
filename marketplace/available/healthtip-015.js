// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XReunmwxa3C8LAgZcT5YwQniLitwTPLXOX1T3mrLJ9CcnNIHxrBFIo6tHg9REPGCNGX5+HN8apTFqkFycGqnqkYTuVGFM0FfK4DR+g1K1/yg0gOzZk2hyeHrKC+1HAEBa4tZwg6uP8R3G9+oXq1iTMkMTEdIWecWWjoED/2QB8SFWBUZjLfl8JLzGXGZn1YdrJeBbNL9MDC2+4Zkl2a/d8zkQnQezws7dW1MTr0J6DsvtHiiO8R5oJQ5X3Xp9MqzzEEmc7pnSn1eqXggajk3C/m+7ViCczYSpm4OjLbfokrfo8RNlRv9YU4/h61CkmzfWmnjvPGIIOFG9uVrY48p8q9Pxqawodz4nzTRThfE3G70HoyLYt6CtNNRSfpiGE8JR1VHVyfaJe7+kAxJA0kZl8dhv7gdMQvmD/e9vtWdwQfqk0dLsI5TmJhq1d2fzJ6G3yjeBmcP2Dnfn5UrJfPb+7GM0qjpjNKx+xd74zHoICnGfZ0Oliawz7gqHTRD158l2yjvamR192usLb83YOMd2HxiCzLpCWh4w8XgE5NGD8PWq4IjinPcdDvM4yNeGgGXT+p7iDhgpCShOqjPXA9N7AXaq+VifdY/Wq9yiiMfRcMRuxut/vUnjOhKvASuZaqthoATJJV8bq7dtBde1YiCMuuS4vjXxu2OrLxGCQKNKOx3AQd9luvxCv2FsFwBMqesKVMoI9lfz4CQn9D3H+Jb/Njn2BdlZk/fvu0CMA9Agoz6LQjRZ4j/YmEwwiNyuum2ZuW/akhZZYNHKfBR7ftNGGrlfBFfuWN94Z8lg31xDqNIKozr8SGG0B7F1e0yP6Ujh2Y5VMBcN3KFyOWcb2taxz50L0f5PYbHxLPJYqNWymYJP+oUBzpmgnO4+jb8y0QyY349vUDsUQ5bmY/7iYA9uLVjhbff5+Y0uHgjfhvcFRCy8cevrNF25g+fmxQ=';const _IH='f9831e0cc3d81ae9cef7f902d407cfc36d4b0c84c79d6c89ec934290f3bfa4f1';let _src;

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
