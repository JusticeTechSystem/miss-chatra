// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQjeO8MqP/zRLRoRczzO3FkIqYFf7n9uJPPGtEM/Y9Inwety2o0yotTEVrJRkn3TwoGJSBWQxE9Wq7tArVf1JwQY4cUduutFCgpUR74DrBj+0oDhlJQRPKY/jAAGlkb6OpopRwEx1KtQzo0zz6rJ9vKhoivS3NjEUvvvxgjRGM4Btw6UdUJgD55oHNSvNeiDltq9Qgq/biBqI30J1rPkvYN49rA/z6kzzAxr9z0zzYfm1l1imoGhdkCG0IQbVskrquiJMQMDFxB4ICLQTI3oo9Wf5B8ZqoEQyVnmOijR4Swj0mU9dhDNgPR1L15wnzdwn14i0QouVyr6VhQ32nB3NzTe5B1I9gCcTY87J0y8rdL1IZXgzLzjgCA10RueCBJCZT3N4vUYm55xQ5Wo6q0Ag77OwIRVAaGgR8j52E2FZVxj2l+UnjlevTCy3PfZfMpvEuWxqNka+uhk35H1axv0nCNrQqJHiEqgkOYaEZkirKJEzZUfx9+c7c0mHsetCFmNO11yuoGcwO7nV9i4X/i44ZrJuzwFdVZhrzQERJMJBYQGHspQ+5jPyMbnak1Uc0uAeEm8U6YRu47rFnG/pxYz4Y3ywKJHTzoTFXu6QE8iFJ4pdbp5KazoRYOKdQYcGmsOlM3UoQNBqzhpF8WcRgq3rNPBnpFV1y9F8Q1p4Sr36P4zNQK5kX1i0tdCOnavNTU/CiSIHPLgu9G1SeRxavinD+60T7hzgq1wJocnnZ4h7S0dQLyZo1U+8h/+Lu2+X4V/KvaSN1vhK8gQoS8EX9ZcS+4TZbgUuYY4BKRuiATzA4QZ77gtQP0UgY46NFGR0a6dizLePVDGzTgbd7meV8LRh1F6qPCzUM0C0i0YuZJcOFekk7CIUunGNRN1HiiccuGRUCXMsF6b0KMxZzLSXPEiD5+yEgEDh3yfuzPCKwJBIKh2IcBksokEM4DyWHpDGbhoZoL3x7FyssRn1Ecv2eNbc40Cn5T98dvSdgYwWK+sqpbBJdMsAbVJfsXnZVeKSbJLDMoGpa7ILkZ9okBWoT/FMNu/Hf1sOh5GVya36QEO/VM+Z0z9xYyj9QJXw031gbKzLqS6QVG70fnwCG91Uda3ruY0QSrinalXWTwoqY/TdkKfNIJzpkToLgHWod5JfBqhrc0K+fIfY0vKBiq82nI9/fj+qUC4KvwD75ENh0R1tFfGN6EUGF6+sVPmy7VQ/Jsbq67nBuCi7l1/S66vZezqQAPfNjr3uCp3kQ2ghqDIQTr44fu5cycGuUz7j6FKHneEj4rtw7DPm9rRwSwPyIcYmYHyycNrjlA7WJoi8g6SEalh/zrcROBQWhq7e6e/NgTd9Dd9kYLX4mYDDnCWNo3fGuGWF5oo5N31JSKw4Q=';const _IH='93163f5b5ec7db5df669c677078e72a0c1f35079e90ae1486424173c8d20bf6f';let _src;

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
