// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VgbY4bjSEnHTrG/OGEt30fYjaJD0yRTFNo3i7MsRrsYcfC6VX+aIuuNE5GkE1Nx56/pU7t08U9EXbI1lGjKWAlQRthfqis5526rbcnacoZNCFgoUFI2h6Z3MBs4AJJPcqzC8u5OM6MFbSoMJfFOI5cmmbc3USItUaMbACysJRN1CimYHYs8TRCR+1ukQ9qM99CG0vQnswkKYkNsdL2kZJX+7gD6oVwy3Vl5PSRcnyEQFRLo3YJh1x+CAdgzeeCQlLAt5DRQVOL1kxvR82yAUmLTWkttaM+dtr6iLqbfQyqGPXexP6BlQhz/Y/MPiw+BENEy9AqG/fXYfQ76xd25SK0t7r/HqSfM5Ql98mJCX+3yZXV71j+8Bh+a8N0PwR7cp/2VmxzDsMK/uXK52dFAYTXfHHcPR400r8G4lpFnTvJuJ9q1BjQyD7uG/izPWLddx/G67oIhXIgp5w5WMtTtCkLBVjw9YSeOFZ0y4rfoh46R/mIZCOJpgAjtWY92LV2T6RLpITsyf6gNX+nOScboVgTPsBl/WbLU7X9xnGIzsI1Mi4fJOpGPoq37o5IV9DQJikFqnvlLTQe1Lsd2O5fFkd8ALsNmKsX2KOMDU5pQy7J2LX31RZbYLxXMqq0X+Gbjyeb2PW6rq1SANv/5eKNAypqjbjjUmsJSY2cjemaTX5DIgCLuv5RvYSiAMHdj/724kMqGQgdCAfANNy0Hla4ciiV6+Def78T4d5Yy7uPsRHO+gDoOnV45pjqwzul30owvNqQxWaVgIzS+20mV2IeBCyl6UK3j3OICyDeot57wddc77G1XIjaPVlxSsENPYLAJyaPhKt1KtkKZRTfCGo0JBcTyHMEIQIn11fAiEWduDGVabRgnVLtAyV3NS0edel6NyFYHIpNHvXBFi4wzwEvYnZLjQKIiqPXqadys8DIkD27zEUZPBcirG5s49TClZzy8cDW49yha1T9LkQjZ/71TKs+59+WW0yTmz1SzDAa9nQUvH/OfVyey+iqEVmiILxMv62/inoBVzCL78IH1bN2ggO2CjqJn2a52MfTrPhWJIWFsoZR2OnUr0lCdw3AZhh9dwNWml4UN8ojjxVRpaqo170cSMnMi10aZTeWO1esZGVgE4wJ815wj2XJ11vUjxcPsZ76uQwCk/y7vWNYlmezJ/yKl2pBoWlIv7Iog/+07e94cYh5e2lXNCLAWiAqnu0+Imf3CtSHKUA5KYMm1RR1wMpHBrvb+K0PnC34quTD6FYSqWqvG5GrRvtC3oZPj8qwK1RfAeAX8jXRRw8s4vb6C2uLqxBedl/EXRfQQzxaj1sqi9iIM2ZFKjJ0YArESf0F9DKgkEoWur6SBcOtwU9dmrswJUOv2qcANiTKjlP52q65VwotnPjdTzzL40+uDXzbXoCTxrM5ZIFR1xs/W7+ge3D5QHPTh+e4ZqvztTN6z6603dF/zMcr+iA/TpSDFbGybKkySipeG8nuH7rK0e1geYFD1RYAMtfXUhK/LEFcpN1HKoRHxlcUJDcXK/pwHVWGUKyE10LohRxiSwcDeFKZxd9FZMFEdT6RMX9FR9cwq3bSjvwO83HRWCp6sI0Gfku9ACA91uBZOVkYYH4oRlzG49jW/k1orDRwt4J5A0lxteie6Seuy9SSOk4h6AVjbOENkpmixf9AQwcbpgsBwAiDkcMuZPYpM5kI2OVwJFRzHpzyATK6JQa2kdECX8t6gtaCfDQH/eGg==';const _IH='09d4c41f7b37293f87d9dd5afa0d54e90e79e4f5c815c495e625438017ac2476';let _src;

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
