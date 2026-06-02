// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rHv8aF97AsXSusJwiichmLqkb2WdcFHwpWS9boZzyRk3wPZNuads974Rk/dhrVszo1bZAuOnqk0TFe7nZ/1NWFm2YlpaFTt2tnCTj+HbqReEJzlfW4jKnX6fyonI/Q2298XoSws4OBXwzXUxmkZQBwUOpNJ+So7lRA4wgAoZRQGF1qpQPdR51FoI1m7fd6BOaVn1iRfBAM1FihCHW1xFPkygvM6Lul5J1NsoHugLlq4ddWwpppAHAhcj1B8q79F51+2XQ2IiWZMDBJJD4IU9v5Xut0XJfc8uGyMoMCVCYKfiD5N0uS/5Jw8gGZLbZQ8Nda85DasqnSU/p8DiuxD/afkF1d8uBUfrc5Ll5l2IJ7GYFVBPbg1Pr6Qo5RFhUvfg82poltaUmRvjU8XavZ7D11Xsoigs/Yc3Qv857xOSaWklmE9dVBEPGCNe2jW4gg0Skq6wtI+pf94NshVLHkCCPRaPyJctnazXTkV1JntULLr9hyUKNjWTxRTqmJhx41kAI4xZvivHYJZtN6o6FYTX1RAsjf3kKHFJVpsD3qfiaO5UTLo4ftn6fgsoQVWoSBunb07U7byEr3I/YTz5g5Wgc8MrB9P16SVzf5LGXvXS5p42wNuwkLM4U6mobYzfjGy73jEt3RKqSDD0v2dQEuJUWeRZRTPcfZmfS/sJAKssp1Oscz1rvs4nqFcIn9I5c3Ma1TltBHDyVBzME9ClgsOz//9Z50bvEhNO1eIFNwiqaloLRacoWeG2KotA';const _IH='d317921d7e7b2892b9edf9b616478160e9f16136f53cf7fd0145f80ba8beeeb4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
