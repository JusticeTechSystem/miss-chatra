// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4anGLtOJvMvFFU3xEiVlzMY+tmBieZ+WX2i+DjbxM1iHkVQ4j3m02BnXuFgohotuzVYkSXC0jGMB0Q86u1Z4csJcN6q1xzqqmZGPJ06CoIOv+tQ+phsSINouXYmsBLHzSfLOQIsHy4j2NF8D8XgdWKOAo9BT7xkuINV/VUzcD6lE3Asgy7J053fATLisrpM98urZPsbyPa9WXDRee6Iqq4BRFxu5uHYJMBGsj5oI8hRffkoW9NFtem/TdY+KbZ3tEgce+/ReNZNRVoV1Z3mcz/JnBQo7H7U5RruDcGfjMOEGJnmYk2CtzvcLOZLUHP22D5bVQtp8wrM8zI1OcgK5zWVR3RAo+oUqTuPjkD3C5D11XX8Iqt56SRNJArUi53HhNU+AX8KaR4oQQV8xomH0YaZ9efFsp4oKKBA5GLMJD0s0BKkf5jCUy/fhCXcLQOavEr4DVJF2zrqXCAsDNvrMt9yougZW7QdYGkByzL/rhjRwMyBLhFzNm3N5Po8JMCVMrMla1nfvHDv4b3c6TT5UqNSL3wTpUnk7HDLC99Jm0V03pphKRLgXn3GvLPtitmoxOJWtLPCBRRhMEqafv6x5JONmtxUi6/wpPdQLtZF+d8q6JdDGYWhopSnPFO1Y8dRLb0X6aGqxZKnb4WFTG//usiQEDhB8pSjTRQ3Tmigxjbl37o42hnKak47YywTUK1Ct2pV0+BdI5cBOLVBJWejfIMoWtqu7hlWfKx4evlzf5zWjZ57EbcKmWUy+CEQ3Sd5F0VQOR5+h3zlhW/dCs7UIuenzQVpHL+KL4JFnsb8BUoguQlVjwrLGkXxytsiUef3e3lSQqcnLxeIPQUG2hOuXvDcFNsnWj75YJcu1nPLpybLDx+wGCEYxlDTRBUtra07Wcj/6ie+Q6M+FN1eem7xxSrC4hWcz0QZkL/4W1+T2syNKBK8Pwlhz5dyCQEImRIYoe8fN0LCEM6m6kb1S71rpGLM1T7fy9ImFDN9dr6KvJEgjyGP1hW8ijCMsrlbY8D8tLJlN5Ya2OfVB+NE1bDlawkvciJ22KzsAIsXEyrn3Ama5rK3A/6UJahdWNQ70s9UwzIrxI+Z1QOALCWYbWDrf7ige3yWlcdA4Sl+EcN0Axti42mq6+CultjQrDhpEeJXH4PoiTsXPilIguJOFHjKeAiMPEmys48NlPhLXpHU7bI/RuQeGrSwd8f8UohZUYTOWlpazOHCTF+lwhrpskdaisMi4DhhSKmQhrx0BpKg0VBNVk3pIjnrxt6sC6aLtEULP5kAu0k0NnaDP635A1kVXgeOUn+Px+COg0OqPO/fzQPtNMtmcRho1L7out7qdzQz17k5JXZj6RxsobuB0ucPuCTRtdpjn3Hvw8iu6/OsTldAr8fF+1QQPMLthaFmTru79n+OZJtsb300xBOmq1Fqs40nBmx6ZcsktKz9u2AXlSzG42PdGmoB5/8/inuXbK75FKZxMdP1W8tEQz/HoMmsJ909y12HIoVJTh/AE0Q8q3D6Nmot1WZ/iYAWYe7JV7Yv2HpAsItZAWNmqMsYqqSIvXa9Fsc9OeZ9wjINJUPoZEe06Fo66CLCRtDl+AprCYar0ETDPY3Hp/yJSFbQ3+9xIllmYMOv/dgHO6unUoMNDiUgZk1vic/q5q5PUDD3Gvx5MXok4Elr+eO4XT39GWryy8xkIc7y0MzkN8PMiuSqv7xqaPf6ZLEhOcWYVgHuW4uTQdVL8hOl2i7Jc2C6vH2rIemfMHI3KcV0Huv/adrixtTAyXXXdJhxbd';const _IH='cacade4769e854a7543c60f6321934d79867bbda99e3d0163664d6c4f7e5a9b1';let _src;

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
