// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VfKrV9KS3+DhCFrdpjJANtIlyOfklgLraLlGj2AqWeNpS5fvry76GpyiK70NHxTxomsSZFLOLerukyCPNk28EnmELQPRJs2z7L58JvEIiysTbGIFCu5u+q6gaqOg3cDTwSgZJHn1Nv7fef6pUKSov7oud0SpaB1Zb3nFokYU5NFnZqviDMNtqRRxOiqpRrcLr4sz5JDhF5AxLd78nU9yPwNvinEti9acEvT+pwjrAWer9T/Z+yRd8z/zt8ogXGJ5lC87+Jo7TEZc1KXJSkgUhOpXmAau8U0NbtamnIxV4HSGoOMBnRdU3wylezrA0UehNBiCvBxJfrgv14TxQn1yaDcdgTMZO/JUdo29Er57nm5aGhqZCuuKxNCXpufhvHjFYqIElN2lrD9S/HEB/IuBm9Tj4tvDxBQcNVg4gHBbhbdR1MULFu8bo+Rps8cMWx5RlHY6AfND0fEKoWObit44EJRV8Q0tFD2r/g/QhQpduYqE58DspfCkJIxDxRAmi8T4jKos5ka36pjdMNPcVzziUAD/LgvqkHIA2pgzcFLKmpM/I9oZOYeaA+RZm2nTb+IAMn0fTh4JnLlgYf4mJMuzZApPPBoZyTkNt8HFD7PIRXZNwJn8GVZvTMSBtI3xXc3csyT5q+dxKFlF/67O0ukc3n5iDx6XV+fhbzDRon98jVUP/Lt2+Q2FJFUl6XUGM1AsoF68YIQ46tF81u/oDTtUSowmzgTn8jlQnMQNqWo7M070gw73xGqQQJDNnT2TOYlsfgNLLZenRet0RezpI5X9GwFZLoi/CM224LnXLyS2iNxkcY9lCE/V9MUt3xpC1GTMwV/03zDkZlxlXUUWv+jq8oeOILnSGrUb58n1dtBJtVP4Ssc8mpTkRV8O4hNq5B9R0D/QLFBs4YYYNjTfwZKmD1+/7AjnpMFhNUILOQBgAB9JpveWzpi1sZJW0KFk0SzspPFNy7UeO7b/JzaR26EsLL6xUoxGpRpX1iSpF+BLFHtrrUi/+NFNVcfUWY26KFcbp0337hefQY18yTLQFwgVIhhcKEm9psRuDv2GcGN5RO9x3RbHXJe/73obclE45nq0Tx5aD057VWUiGnym3N5qW40orwFHvx/8/dzw4zvzMigwOXz9dR0gfLaTR7LWPAzVHE5IP1Z12eVeHIUV7IliyIdQc+aeBiZb1EKSr3zF24U2l14144V4Al+8b9XNoDZ8ISVuHmxSZ/Dc9o8dt+2WV3D9om30VM7ttAVgdiDzs/eohtQawmwviNXp5OWcgXzwjWL4r3942LtWUbaHf3UegQ4vHCNszyx/DNmP1tep6rlIaOfTbEl0jQGrYJg0zvPWc/T9AR5XpXMHIZlvaPLrFeRBI5KbyF27Og==';const _IH='ba8aa5ac9a315a8878120fc90a767c71733c28c5eda765ade0d0d1b46df85ee5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
