// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQNCB2oVQuYs86URw5obKrKPE9+5Q1PMFRDWuxW91BZF4ljHGBZLbASk6FPUq+mcL99k9zY+Pgu2ckNCpqDdKd5vAGjfvHIEujpbfattKekWP8d+LYg8/RmjiFzAl/WWxN5XiBi6hOnic2kV+yAJEtqtwW7R2hkRNpI7yVq5fMVOwePe6Mp8HzrSp3vqNBUt9hOTCMkBFOlZAN1wp3ujaWEyf8cq7OxfrgiGFOxM2Xl4dEZllMgrsOVW37bIGCCNHG0ZLC5gowhuM3d+Zmaccf6B5YkrgyvQ/nw5nADEpLMafaZvpDZ93Hg3jJKiK6rDM72y5qC0ZiuRSmsfX2ttBK5zJbQWJQZF4LR1YE4JCSt0CvOZBG/0gSS7gz3FSpne386GaHzRIGPx7gaYLFq0gsxXB5BaApqANc4pw09D525vdXkUICEAteVywzwxNWMyG7vrRj98s/LFX0zngqAp5GhMysemvMuD3HppqamNry4zrunZYMXj45ynUqLBHW9IFYzlJMpI6usPJmscDVa3xjxXFPL4099YSNq07eWghb/LZ+Otd8jAbiHUwH5C+v+q5FLXgJp+GCJpTAF4gpvpXHlMqywpIfOBu/gsSK4qsTp2tk+xsJMokNnoW3ISg4/TGlXqRRH1T1vv4GCjJ4qnX2aABDXBMmpVl1qN1vtBk6cparCmrWaf8FZYetx34e4gDapJLwLys/zwSYox4HLeOVbu3RvvxVtQpoaApAbHDuUP0fbfRildJZ0oZ99tUQCG8G8FGnMELUz1Yy4JTFwROIyDWkVu8kVbTKcMtfr2WlG4kcovLs4sJzxBAAjtsBLqIB5nBRHFHjOlSHS2JW91O2T7LKpcUT0zCtz+fnGcbRMklfwZKW0DbFDjwJSCsWQKtjm9n8gYNv2g4/TAOrT1cNvd2T4h02iO3sz5O9NQEsNFET6CqvafasWqmjGH0m26dU6GL0KH15BEl7NbO5H3xB6M4lDI+YUkAEllXpzA88UL3mPCN2nHXaFuuwD5Hi9rXZLAz3lMbmi3rb3GqpiU4kfCc8GZBqdJEu3qOm5Zr4iRoB7oEDE0QvRuJ4PPwG0qrUFiLRB4L1r4XVGs9Sf1Yjz0U82EOz2GBKFgUAQBqoOmDo+8CVNS4INKo/0cLG+CbbOuxfoAjWQTIMqg+F/YWGGjG+1UQxoOapTqRwqm88Wkx7Sh17bZGiXFlMpqRTzYbGVKqvg2Qu/10q2Hlemua1pvIdtLlNhztbVPDcNrKP1wR7m7rV00Y9HN1R+UAQ1lrCsb4nP0pwDK67p7lnndUTl4+Z292yEmZ4OZYjnh2pzdSSZPr+qRVfs6ja8i7BEvFCB3JnfpVWRafepDV+gPY03CZLI8gUU2xe';const _IH='af47eabd640c46f1ade66e7f8ee83d6df6a2274b09fd359a1a22509804d2c4ae';let _src;

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
