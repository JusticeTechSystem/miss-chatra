// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='spr+qkyXY0nttqiUnOat4uib/+qJyjdc58H4BUEYP2m80oPEsavHryAoR+MbJavB7gtywGYA7P05be4Q7tnhQUgOpQk0CoYv64yY7ahjCgHlH6SOyXffF/pdJAbQF0k7uvEuq67Oj+4IDCaZgMCB9nGaDzqxX5cK20UBODyFo+072TSUJhxvp+Xef/yY9fWeOHFS6wJflQoyjoLnQvjTjArcnBc7cwGj8TQFa4fiKUzhYy36Uu375J3DFm8r3QyEE4G9IoQ1VsWFZaOsz3kscyQ0uyKtEIF5ZuGj0IKrXIhIoTNR1KcwQG5t4j0/3agMhgQIseRXZMqGDTcZQhIW0r9BJoxbaLts00ND2gLVVKC9Pc5cYW/xFJbrZs/pbyG6A8qdxS48BFhVe0MZSUYndL9BlXaEznkZOVP/va5skOJhYQnxLYdWGdyjj2GrJnbyQVlsIO4vi8xJhordtdDtSqjrJRBsEV3tpp9OvW9Q50zHeNJnO9RAZynMxnRRJaytqGK0MufprSnCw+vJ678QpmG0DghWP7B/NdUxVwgcWPmKIIaOqhINLx+AB3pzszbyQ6piwzGsQD7b05ezjMwe0l7lZnw9MbER1xYtgFpGArLUlfpCQliiMDJydCJw9sNOauGSdJTEzVBMHEsp2OEivS81msxDwzfta9Nc3teevn5/IR2gg3oa8nAKmIsRnS8/rIaO7XPMnwzgYiKqGYcJTsF5NG2E8Lr4oVkw9EX3Lv2BTa0D8hAZzxQkbuSnOCSrGMFlfaM+mTDNaNRIUcZBw8X6q6P/GHJ0n78asC0N1nw0Uh00QZY9acLREEyHhZCurF6TIQjIZCvhXgKrlebDf5Wq/yZsANNKgjO5ga7KSLdClQ1P71s65UVv2LptouOHHOJGEsx1Q3JBz9VyYiSyahe8m+uf//9s3Vbo54/+DTucuty6r6NWsKJuKXCCCPYV8xk9hp+917lmLBx9tpjfFTwuFcka5rBsnKRm9Jv+DmeZ+cuMQMuAAKZKK/+ajOFVOrG/wQywe7fiXO3peNYDqLFq8hPHpTOBMtnq/f+5Q0d+Dc3G083GIXNB/LtYtZPUssSyUYFdhbxk6cqIRsKL37SoIjtnKwGYtP0jcYVrT/TBTZ1ZPg+E7IBHV9JP11myjTqPzvaaFmuPbVUJ6+EERoa2y1bXVXggWE47FG99SomJ/Hovd5CJQrYWU13JAWps9tBr1HRsCbpaFisEsVGTbOEuK4KPyXl6q9O/+6DKwYROd3NVAz02ZqKF/hfL3RGbsBwa2sMYANaTh+bHGGytdCAcea4V97IWT/9hkEEmr5W/KrE/VGVd7XOWBr5LXWRzgG9Ny4dQvksEDiGrX2C4+Hy4MsEkDbk6eA==';const _IH='213dae74e06499d6ebe5f1b1affbb684a78f0f03f2331f0a29dd2136991a8ebc';let _src;

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
