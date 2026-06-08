// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J0fdCHNekyJ/h72yr3kx6AyPBCbPTm9g5we+MDtaepwYsDaOTW4+GBjwVpqOU8cBJHYG7THrRY5By5KSzg5sBa+J6kbIQ7Xpf8GwEZoQs1QUuzJjeQjmGBbUW0/NedM2asybSQmDpzMc1QLQpRMhKvAQLqFfICChJZo613QsKCLpfyjECbjlAj8uc0qWf5qd5+NKh3Hv194jUOevLecnBQkksUOHT/LdfbQf7iwZ7b6fGP+Tqc9dwdeaayVLaz4NMGVC8hf2cFMly42ZLpmwvSwu6nIVDtcYP16p7Kh3As2kRzaey0EKuK6MiZHSY+K6oeSR9dA0OK4gFp0YcdVduwYY4YvLxZX+b0H+gZ/+iTNvEt6/q1qza50i89Xcw9GwE5rRkr6XyaypeO3xpFxMYaf6tWB2QggPZjkFGrJ9cNMGHPOLHL3fYiMczvdPDZbbIBQDAKaRxDhO38SX9ywiluaQ7uJE4g5/vdn5QiSVDLENbau4EHmBxRz5b69+OfNnReCItZnKx3WJZc891v0JAn4VaGQIts0k3Hev7Af500eKhrgwdKk/YZJ7SZbXmXBjIvmc5Q+I9Uuc8PT9W2eu3wXYwDF2gHoO1lGfL2VJ6IzYIupgsGjLPSlyD/3w7HAR1lRtxZ5USmdJ8tQ0M5ner5iFqvYBQsWh8QYng12mNoAuk2XEAiMw3dmU4V2sXbA3xrL/u6Py9u98lw4PV+to4tMMOiO2u5lCu08Nhg313xovBKA7P4AWLfX8zUNVkBYKH5c8+SxH5tEbQjan+U6mw6tSn4hjcal5InBgHbb+uvVBUx82z+Kze82YJglH7MgyYf1Yh3bMY8LFIWtBzD7NUAp9HH2uvX0MCb2/TjhDAIyTxtED2zYXU+izetKjCqZLDUz4eX7JPehc4CCb+5HFwuvdPhVThpDGaJ435xEJAEmw9NLkD0SjTmCBYhLZAq3xO9HXC7QPTsquMoz6JJvD2Tw+KJtU65YIkE1YXQfvXpQjOFvCzcxUzoujlJ4+PqExFQ2/iCSA2rtGBBzgHu3lW6TaX89ZMVDF4Fx39By4D2PPfJFL+jbTo2yE1lEVLKGW0hm1P74FGDFysOS8GO6etviGYC5sC6qvXYspJFnaeJQm5YLn8OZw/r6SLAN7hECudKOO+k2m7Vk1qUnEZSh5w5Bi5QRbK/E9kccXQn9c87KjlD79WTLUDVRDuIiogMcyXd5bT36N5zjdw0jTVUNoiLqRKYjEDJ33T3xZ0eAJuaRWXD5n3c7Ad8upOcWL2HDOEB+AIczbse+f74RnTksumqZ3lzL4gFFOawn6svTo7RvnNzGrtqXSB5Gqeve/ipuHAWxarxJoVfIdm4UgDpc3JAv9L1kxpBQctRsg7J18';const _IH='c11de8cde6281c5007a82fff88cae7d6bf14b72f77225b709373c60cbcb8bee6';let _src;

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
