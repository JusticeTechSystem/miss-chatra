// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UYrV4aiLw3EoNto0oIpO7iiaBfSs+8PD2tDVhHm5ZutWFEg0ugBT9OswZgp3eQVaCCpZVKmD0tSQY/GtGkcLKD7wsJl8Ap3qJGiY5TgXxqv3nNO/hfqvXdg0Ung/jICPawq7i0oRJiOtCD8ynmkG00/npX+HtYROOUR4QG0XNoKrPjgXugktNU1OdSo7t4Xuf/LwhNKntO3ggj6Z7a1D2u66wtGeCGRh0mVa33bKlTV6Y722SlIY4N0VcAL2n0rRHroh86s7XiLoEBByzDQfq4H5dsRk6y8vCb3leuoqeC7bobcEpM9Aji2uAy5La+S4XRgJitnUsqSHvW0yJAmF4f19daO+Q0geUK6VhG3wkZRvrtp4cc7UApOf269Cy6GYgnXxsQfkwXN0xm8RGo1pwgIzct8oDLxu6AXwMt+Dfq/fnMFsvmbX2CJpr+eM0vY0SgIGzQTFdoQodhl6P48hwyPk/HjVELRVi+pxKluO8vUrbl8HtV8NisDonQLjXM98/CTePnbPpn4VBThjCpA4lHoQRBAu4XIwt5bbN+ZJxGuSXr1JvYv5uIkrwWuPAahjLjkLBFxmN6zrf39v2hQjucLIPKbIafoa81V5Aoclnw505GyW8+wWL/cb5orvMB8uZNrZjCFr1mGsmFNNphpxhpjyhbAfqp4Mnueazqw0eYLQ4lSy4+I54ewtupi3DwN3YArWq9zNmeJfEOFH7tp1f6qdlGUn1OIUZbCgx5MimWh91QVIdCl2X4fa6nUZvkWIe+P/4hEs33uzl+2qm1zEpvxWbjTw9Nvm5MbcyeqLkB3Hj/KoysVzfJ0JsJ1D2cm63G/eC7Wud3tfQOeJ9bErEqwAKrHY1U/m1aDP9L07V9uXWjKtLnFl9bmzJXv1qnjMVxRrI6UKRAZXLrGAOJYvzBj2tYlYwEBRfVP2S/IN9NH3CXFSH2+6XY8N7KapXo74eSyc5Wc4v9Q3VISCrzSryu6KUrxyWry1W395v6cbCT3NiLDP9iZLFCpQLjp+r1bhFaFPgTOEiZ4d6N8Gks7FgkV26vSw2AH3JO+gPbEMDFM7UX+3VCxT50yddl04YtREahOvHLUeVSvhq2z9d/UHpflWfxh4acX/n+CIse81yv9JJt7rNITqsHL2tHZTGDaGvIhDSivL2dNu6mPXk0LeJZICZhdPFgYrWX3pY2+8YeyI3sK1FGB+KBohKJjH+HcMKaBVz9Mr0A==';const _IH='f21baf29dad90261266ad0d80a736f5b3a30bea90771553af380e1c606a0a6d5';let _src;

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
