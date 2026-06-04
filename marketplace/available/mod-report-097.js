// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TqL8WAWyeyIaF7NA5c+D/vK9HGhClW+dYLoJEPuJ2igMMJMpvH8jvndBCTO5KjjeVEmraInmq8tDAnq+/l70yo4nO2ugt4zbznDnJmTK/JoOHWwHLnj8ov7CdeHXOd1sI3hZ/ITvgRNE/M/9uDv/hl/e5/c7CzHWMiCZc4n64QwLp+CHGsbDiah+Ge9f27/7ojHas/6bcrjLOfqa2lozpNtcxzhHZquww8VXXOTLoqQG5X49H7Vp+hHwYfwnsikJp8unH93Zz4CA/Wd3KgEgNwZLW+6P+6L6EirpUcKG+DMG1mZYF8S9dKHuCuBR4HgC48+LbBq2WsYJBrNgso5FxoY54T6g/Kew1t3LfZZIpM8G9VycmU50c/P5vuNaudENDYjfofvY70YG95jAn88KsWIUWEVQSSg7T4waR4hcRcEb2yCRrzU+bQPqqoRn1YLsO0yTbBW4VxFiSC+gHp2AD3lRTzEH0oxnnK1Hn4Cs45w5f0mDpOcl1yZIsqlnvo/OKDODyoP7r6Os4wIGE0c7/8lCy8SZUgXHJWHQ7JGMYI73N1XHBkCO8zqIW8FhEgWNx2CQjaLQ89zBTQtm+g+dsWIuhMQTxvT1WW2vurFXEQzFBSHt5QR1saODbJQUX8k4Gnixc+IhaRHdJ7L7qZnSFqaFXJuvjPNJZqKTlq7QAacrzptonKmDUVON4hvZ/4aWGFxj4kAHMimPCL0CVgEtkXk0Trv9VlGn5XIv0cyZp6IefG5qhnFcA3ubU678dAaqBXMB/4bcz1cljWocnhwxLCUGZVqdOgHNctAsLMz91mhr1X4kSaU4lmo7RNtekmZTtvIQU9L6p5onoYVFqAVeAIyN6vkW3/oj3DxkCTg1dbmxKPWxcAU/4SMwrDfO9ORwNcF9Ut0whJmz7U43TLPWeZ8NPC8b/fLqVidIwozwFpnwkOeke2Z/rgnZpYoOfPz03pjc4T7ZaW1Exl3EqOBaMMjIoYkPai9SoHsMQW3FbxdzJQYuZ8wpoFl3lxP3/alKWP8W8owXvGk2wyjVwc1ulAh/14CEowhqrj4Xc95YyFw4NTD17rPuUdP+TelCByg4D9daL1Faejt2bWQJUFYeuoogdFmruEFxfGAiQAyyfL8OQ3YNp1ZLNIClw93TgtMixbON3DF38TNYF73beZEueXuTm2rQsZccwJMtCa3AkUmEYY42EWnhJsk2A0dmvPujBaUXT5hw1HBI7cBMEs8ZJbPIeh6HYL7tUFVK57N2zDnOYHv/RlATEzUJg3f61SZtCtHvogQ/HCWUYD78yeRNWna8U+3oMihpOh8iszR3c9MWaCvvPgwXrdwWYkOQBSXaHqxJFqzs6HTIYZkbo4ULsudH08pJXHFEdR1btrczuA8Qayg=';const _IH='1c18008b55da3a08fac45554c63f6051a019030488fa979f22b27e8767c2b4b4';let _src;

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
