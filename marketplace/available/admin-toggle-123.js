// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l0JhcHSDO4s8EgdVEO5AU9mF68UaOZW7rkjBTD1Z4FwhShBgGp8diCnsIn/nTEQB8cluKckydfgLbCHOk/c0QalGu9O++J5Q6KJqgOpOHWa1/DpVPacs59Cc9LzQQWBBat78F+NJc6VSAT3Yfjx9I7STrIT1hcIWrRXIE/DDm7ccBiHPg+kTGU2/mKD3GtgkIdj5PYO4Cq/yFenfh0l/yW0AuYJOhTUkzR7x1ZIJUAXUqxY/DauhSlnE+WT94PqWbRBSPFBTm/Np9U0KyvqNelOvHg73AZ/d1Aq98/W72U3HFAXW22A1yzJTY//Zf+whfpY6dJ7E0MTBMwG5LnnrSxM/38PaIvew1BhC30dxOG19bgYhQQVUYaaDGuK90I2xcW/k65i/GJEEk4JMRcLdTKWHvlhdZpb0d+1nc9FvUMAN5n9NAAJuztSYEDGsS7GGn635oHvZL88Eyfubj0xsh7xCdA5nV5wAEbk+jBmov7Su51ddwsYuWrl0ZJ+1qAQhMdlI2ZF4EsrMgAjIAqn1qIu1Jg8YsXi5nTY0Ol7mRBm90EdRSaw4MjeqWporD0C/WMrw7bCk92x+jaojEcrkBRC54WpsPA1GDPjULgdcHl74vP9MlxbTbLiyNIbOxwLcm8E3frYu3M+I4bVBspOzUbBpaaxF81oQaJDTjcRyUESx5jZvyURsWHUkYR3j/88pDvoM1UxdH6wdAeuZ+nGRT7Ezu9UQWyWRpv0FzhLqL6Qodzqooxy8TSyrW7b9njUbK6HhFJdUdC7mmqobyF80kVO6hTpB/fxbg85u+T5TDCLqofEwN5Vcl1UIVJ0YaF40Sq1GX/V8D1iOaXtlWIYnApXjWpcZUt+TNgaHyAngpfYv47olhxNhHx0l00eCo2Dz7OEJfiojUmuQnbIaTU656jX+PRawua3SOXJOHEBRz/Kxe4vzVd/UeBBZ3ffjtHp+WhkZY133Etm2BdpFOn4ObFZfCTunfLzzhtP4Xz4vZ93qXDOfzjCCHyk0iqTnCL7dNQ==';const _IH='4cc740308dc29255ac4119a8d5dc0e37b8dd1d88bd29a2f58ceca34348a8c6e1';let _src;

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
