// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ2pdX/qHg5K9qmTRBbAuNtpglVnoOKzwl4sZcpm6hrSrCLRPQYZGuY/5li+ZwpzSLINQSmV07urd2Z8P+0VqpHaslXL+ktih0I9tCR41kkYuTZWBUsEl4WAssrc56MBT3N64Glw7Efbd9AWKFP+1WhRX8ohBXMnomvMwiWdDKEostEN6yqYCTTqNJRWtAomi1qMgxP3/cfUAN8DBpSShW1dCWVpxvgBsWgG/MjYwNeCnHCXtbpAbKYhRPmia76SD3YhcpRgNxa9Xym7YAgbtvm1uzR8fW5FA3hWf9bhH6Ih0OWbmfpiB3PXpMWS7xlAtDGm0l+meYWX+SKqU3SxVveW+vuFj8FN3aeAMxyPgdO4FUv1YYPCEHNJD2/SXVhRftFj99g5P/kfdGfLYakogiazKwcm1+EuGWt7xmhPlmTHH72P97SAZA4RD5jsdaUNkAemzOporGSwN/PxuaxH4a/AogwZzstuaqO4tpL4R0Eggkx5/VFa3Og4wqPrnvhpDPUV/h2pPJU3TF51FxjNE8BHugPRaH6p66GQJr/VNaG0CwMJ0OFn4M5Rj4onj5KvuHUgYztt7RR71y9dCYCxcw8sZLoc115Zeore5qOK0GBIJnSAzWSc4x3a/BPwhiVjet9LBT+Cv7RzHlZh34jUF5Wty6lejNX9PxeTZnVzRQ3Q5LfhlkqJRbcE5t7MaHocITu6Cl7bQQaIgJiJ+5gbOH42HUZ2LqQY/IgJOUsp2erPKQjU8kRQ72U4a8foFwqwkHgdVXYEzM4XXVgkovhqj8geApNM92X1fVwEqjtWTijVCEyW1UAdIsYt3moJRYIGtIP8ik3L6YTWZdIaAtdzmGiwlygTe3+HEW0TkLaVk/W/xdyAAWeRufrZ/0PZVtxD70U4cSV/Qwi3CG2IXdLYJBi/WSiszS3leU/CBXZ5xiakI2unZ0TYGqNBoF23rkvm5UkT3z68pfis32cegcThP1bS5mH35xYogGHon+Sa80otxMqrZNuRztLcKZHzQbq8BC+6natRKD0yZU3X7QiyudXODapL0/OOijkv3BxnANGT6Ve4F7x8NjEsEtDawU0G28MzRLw6rHfERcaHobrtpICFUT/AV0wIU6V5a8l9OkQlFWnteMwJMyts90IYXvuzQdlAM8nksv06g8mLc5MHK0P8icqj05nlXi3cYIe+djQ2Wh0v1EB6kvqMHqr+qFOjpaGABoychR';const _IH='669b45ae7703f6e3f02e1ee606b7b23088cacf89e4f037097f8e5a7b59c9348f';let _src;

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
