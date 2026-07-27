// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfAMyhhfc6Tn9Zmq2mwoxcGFmRyFTORZTaTPUcZ9KxZGuaiSAUjK/484hP7QsEVLNLew5VfpdCbhgSm1nJWHjvrjG5qw3clJsKgYbhgPN5qd1r4Fqy+n1TvNxXojlUrEdcCcmR0nr/pqZDcU8vPEBmsOFxikybhIcjRc3DrvLaNUQ+IDAkRjKsnRkh9IQxYSlNjySnVpAdOBmnLIpZ20Z5Os4lAb+PDQIHKRIefPZt32L7hKQwhQhUFaYjsikya40/yksKyju0F6dueyvkEnIHrdzbW1Qd3Kv4Cj/MOUcLCiauHqarMzY3LwlOM4diMNQEyW8JZP6x+NLxwNAgaq9zGW33oxNuOTwRAGb84RBqtTJKVFEbUo92nf+Ai4ShZZQDr9Xjnt9CpWIE/iI2sNhoQl5O60IyzgcncL8m5QYbsoPz81W4Tx+4czIZgCEwfKwICSlezC8/mmxDXOpagWSqIM9gg7DJlmWZm7wP1toSEEn/OIRDnmHrqP6wRWoAtTfphDuuDYzv727RaOF9tDAxKsxZHt5xs/kYhZJFbAx4v6ohQ9sFvmg9v7ssQR6YFa3aPvgLtG4aTl5lOHvEhC0Wes9/cFMZu2tCi4rqu5ifTBOk1abaPEaCXZTYFqG93r81Ljb/2ubyll1jE58z8k3xt8b1ohUbfkSf1tD0avFMYlq7Bwlxto4i+QLyPNEJ3Q/Zc7JR2ESwcci8c+Qi/BTRSobjzOJojCq2EL08xvh3MX8kO9/Rdd2wQu8hoDTo2uKr0ZbfK3FaLHg8EF+HiD9BsWnkU0MghYEfHHZzs1R5IQBeLEI6frOAR4nlwHxm9+6jakn8zBbaKwdwJ18yvYJjITTyukbmTYUdqA35YcwobLSA6AbvzAX7txeC5LFi1Byc7XuTutkmaZcacBiZ0nnlflTpwkm2aizh5FeDjimZkKOV0npVbrTFO7M3xA==';const _IH='11cb6f36bdbd8533ab014f339cc7312471a52553fde52e4508f648d66fcfc6e1';let _src;

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
