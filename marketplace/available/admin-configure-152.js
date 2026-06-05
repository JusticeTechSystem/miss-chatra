// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ABLLSXT8CTFYyij4Dsg0DFuRDHG/gnAVWq16if7fSy+4/MOJkNG/3oUhD8CTeYc4BUSBNsHQpWp8/J7mNY1OLGFRQVE4IaXAxeTr9Yqo+/Ofe3SaajaRGSp67nE9edck7VhpuVM8mwKQgr4MLCykNxxlT7u9O5yqEfUbD/bMNdYuo+HIVGKUHyqL6TswArgRL+MvU3ZFY+myDYo1M8ZvNX/P6FJMoVW/iKtTDzecvmNeUV0IshsYfM9mkOHTZpFruzBzLvlT8MQmxPDPMy6n74Hkz/UUFlWcfYoYsjtGdydOiHlPHuv8qYfS9D817e1msrMNuCFKd7l2InuOw0q33VLPViPKcrRnH+WaJeUSjI0fbaFRV/td4ha6xDDntELK0sX0VQkMoXtpwnCQfxzgq7lSmhbiYmwJdyGm+t8H0XWlrXcZxO0NIwx9/W8n6c0i8NSUHOew3Fu3MkaZ+9Js2LqQtoiYZXmdM5slJ7OEITjdI25Jz3ciEITK/fa9NMkAXzbI0DArUfft2Ipfv6Atm3zIFZQ3wyutkVb9tG8IO8I7hgZUWXFaf/F5xvoA1aTmFB45ggSLnbxAfpFk/XW6CUvMTd3t74bNQKs5Gk+4dInAgo5md3CTA6H8M2tOWLt4X8suE3ZQ65AbD5S7/9nlFvsGjIYGTrPkpp4C56xvmiPVSMOWh37NY+Y3qSj+wqM0PFbld7NRToi+B/FY2tdfuAMq7myMstgOgUxT0fgyDU0MaEzusW1GsbmnAqmaT+jNhv5L23fERSgwzDsf1lSD3GXn7Pplk4IHsY06tX+xcqpGT4/jU0CpPoutNccFSuNm8qYR8LN1UZkMWx4vT0IKySgcLzgWWCHTAGc3am35ccezAstXU/yjB/30E4YlMUcrM1ADP/x2Y67AfYQ6EAqCz8uNmgrT3fLEWubvbr7YAKu6iqB/3GennQwGyx3VzOW76VpLMcl36WeUoeN1kfXKzATQgDD4u/O2uRamm5ZSRJXis/4rhJBpevhqtrtOygF7VeQieZOSsuZjlb9gPkJ0sxjRDErkCQ==';const _IH='0f2474892540b80be790757c5a6424e2b325a2604dc83147381b226c89cab132';let _src;

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
