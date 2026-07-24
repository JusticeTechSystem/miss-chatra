// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZ0rsUo5be5Bd8TZklC1vBlLqjxANcI9abqNLVMzsuISQfDxJYfx/fpYHlUl6jD/Q+bvj11JSJp6dH6GSSCnPTGGpcI2xfoDR0Eu2Ohvk2CP8mgiMhqcEXJ0TY/rCkwk4ItbB+5DeCLpD1kBLcE3rCW0yyn3OZoVFxahLWyMU+CrSgZGW9rK42YvDhJPDd87vCB/zKp7Zrj1rfNSDtdDro54Bx8c3B8470eZld7itZClGTN02RuO4zSpJaHeKOHn7NSGl2bHjXatFRDRHU5ZZ6DaR6BC1qEPJbJwIU7zuGV9Exsz1cdc2/cHusjdjfDIsFxD7HnsRz3q/K6Qh6bI4u88BOJ1dLC6ptsTApIKmlpFZb+LQLDgJoGJqUKBGwugG8aTSV65U2oUVsKjhTtznDErBMBkN1tZTMHfhe1vUwwiLThjIWvKD9sDrPxhnbx2YIVQQzVo+0BrataWBX9Br2FYB8XNPWZ3yVUFspOHUrFiZQObfP7xJoU2AaszSVgRnCeHI6qflml4znLoL2c+ab8jwdws2SaS39/2tnIN58n8Yoksr1gMnR068L+WHYZ6TalDRPoH+8Rxv9swRoPPlGaPLPCnPrNQur8prFlPglMB2UBNAmlGaZqAmlQ/56fs7peCymDeCKMKKhyqISnxW+dHVUJRRVVf+Bq0+BQPQkm0ac6SS4eMWkDeWQOPTC/ujVhFGtuKcyEcZ+5p9KmxSkAav503MXZLdLLKHVmvvP60w9HuBAJOZeT2SmvUQ2Sdp5ZRB/0/oP9qyrhhA2NokGn1L5Gg0bGPEdiYkkvp3Rsoi5uUKEQjavM1dYsFBOG0bGLlQ8ER/snQ7t7xNmlMAGWAUwwSlqKJFbiMODQEwMd5lilcHaKAxlo932V3+H2+orDPn+ObgioBpKM+uF9+ZzL292Xh/zzMScbEalGE9hDPOPs+JOR0NhwKd6qi4zF7TsVuB5kSLQod4mBEVN4sGhiPK/uV06WafHffHq8QRjMMFIyedzujTI+zbMAeRxlUIOD/OieXj1zFwa5Lk0sDZRoZU7usYqJHYyLqaCdKU8sZUbylkQ8TEYHF3pjOtYwxtTAsz9Oe8WTJ0sLQqy0PdXSxK9Y/FpRQZkFDi8Q6BOS8ka8eOeOBJ3FE8iwoB3Mi61XBiSjiJag0smruXTk6vb/n2OUAo+k+GIwbmsudXrvz5dOxj+/e6I2LJmxIzqvZEYp5Vn7JebWv9RyDHBPyw6VjIBaUjForfuq6LQkllx2DtQ1HxMtpHVY5v5hrAEC87Wy9hmQZiOkT7G8msrlQxTvOvUVXZjs9TLaDWSgGSVxGw2oeiqSqvgVEke12F964ypSUtxIxEWYAN9dWmM2RAO2KqNtpfbX7Z8vPbu4ZaWDEbyWaiKAYlsYnhOGeO+YNCU+gRL8alvNNjqjyLzYX2+7rl/DGzhbim9X6luAatzJH7UUrwzQGL+mIKKUGFb69GF3wfJJyAn0WUsLKTB36pGXtjy2v/uaHzNe1azxM0hphC7sqpxiK3SMrr6OtVkT+P99s0vvkMTKNLPGP50Rphl30f5hlBoqtjBh52DRYnmkCI7d6kFbpK4NxV02dHQZnl2yeP1sVrbizf1O9Z9t8NBaJQ0oXaiN1XiN6FyetWWy29hSQGaDonGBPZYydJx4FaTzLaEYe8z5rrwdauMweM2Z+Fc2oXTMgWEliDBUdwuWwR1VuUA';const _IH='b25692cd7718c0242e2c9d7b4059f281140e2d280854b50b5d6e0b1fc242826a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
