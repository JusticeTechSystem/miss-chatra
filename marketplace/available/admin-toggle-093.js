// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRvoS/7jGXrdA/mmbcKr+DS9oenUiyWrDN9hhLa94YGfpOzFcYzgNivhz14FqqPOHTX/DZa9OLsJeWZWgHzLRGSKOIl4IqMng5VuKkHYLNygG0cgLCgKE8aHusDmIVDsKwI38TSYIIpt9eJKUkeyOHLSUHgdeonUSZC9rB4fahYjprjir7Y5lyKRuosavKGnlHyhgmrb3pqp7pgwG6HjmLBIi9i+iKO3xq83dZFqktEP2xb8yCduxomI9rptnh2NhdoaiYDkPfxIZRbBcSj9MUmQ/342nNOGq1iDB98G+PvqAiRxZln72mY56lKGvl7GXXPq34lBwB6wMZn45dLqkv7Tl9scP4B/HcTfouNSdLtmUctSagquMOl6hQh0zCDFJ/U1lR9c+daUqS3H0dKdFXgetpH0EYvKqOiGMBFTdQghT2Zokd7nax2qszhaKkMG2HwGeAEBybGr9iOfXnDRspC2P4Q6oHsBw9X6yleaQ2WPZUWILbNP+WOXFRZBUaZc0NPMCvFKNXskStDcih0128MgFvDxtDDLuHKbxgDhletOdh5k9LaWrGBjYS/LFFdkDBItnHrMEOorNXBc9vt6yFLlMPyael9na6VksaXHj3muGDfh6CsFUuljpa2J/h4N+ceVcqZrTyMxTrGD4CWb5i15pbXiAXzVC2/4nfd8aFWoIXCOxGyxn5GR0LQnfmy2u5ewzoqaYoEM1DwgO2ecNHYk50pfOm2IpebwJreT0xU+pomj+HyTFhuCAiDoZF655updbkpEqo3LlR4zxAkrPWfQH7sBIXQxygCLB6EDODVOTNWmITfIg07nA6MjXNwBH33cGWgLxmjvN8mMp5Qxa494uOi/LK6tdf8s5P5xopl1Wreuv3/6AQD2SVBitMUtLphXYyIQA5ZTx1i8RsvnrhsKlkkd9+B8Xsw1R9dUoZ5HiA9Fubmqz15oLTabwtY7z/PT7QuUNB6D3m9z9BVQTc81KwqnRwaqy3znHz/ehFIHNqZNlYA3caX4cdKXt0=';const _IH='5e2939b5be4eea078161b703f26bff389da8570eca3062b3783c36b294ec0082';let _src;

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
