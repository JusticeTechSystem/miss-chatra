// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jYIjD+FbMnxgx9q4i2gzMNkcbXOc8aA7vCTWS6qhAT1UP5+/X+JSiSClTibP/dfb2Y1puBhSmI3kdNT48cq9I3/s7mbDC0u1x4AcEDpfDx6RUF7cjLbIzfRDgErYyIJRiK7uE9EB7bk/Aufn2f9R0rAv9psGDVY3xIcn4YxgMx2zGQzWfOBDHhUHOZak4xGAU8y5lQaQOyI5kbH/FxqurX+H9bE6UUaDhi3dYfAuyxTHbQntaNpQJFNCsTG3/EMmX4fday5UXiMKwBSxxUmGj49yEPwgrGstpteOilffY9Y/mv7sxpartFZdepJPWUvhuWowo68sJoDuJA9XExKvaXVNUqmMhhNLxk16iyKVT1QeqD4mdYDNPAOG8Aa80Zqap0Wl87PNRph5EvYpBp0msayfZ2r+WkpP2eK+h+4HxmK/uwqdw78zf74zyxENjB8qiK5VzWE2BeiJmeSemTqVFw4pknpL+JF3rUcZsZk+NcDRiUyHr3Uyci/KJIEt9bSo8B8AgUuBiK5Hkwl225fcTULg4mTe5Wuo94h39n5HcfaEwFLB6jOCzttyZrkIW1PidhY38T+6b+IlcXQn/+4mHSW3t8QWRVL93sauY/2+MRbQfK+TyRLjmgh2f5c9aUu+lwkFvFsfWdMzi7myqYaoZ/76n16L80SpcLbCtswEEbvjlnJ947qBShWrqbVetBZWpjCRIfGRClstGdrgRlQO/0xIcQzWQ+mneQjeqrv1VlborZtOV44uZJiEnoA+OUzWsRpUrVulMYCjymVQ69QaS40MyXuOiKk29c8bQF6zPFEfpqXnZ9vX1m7UA7DxSAAmv31LIyq+Wy9CNpJPNcTaiwTXioXqZompi8UvgnvXzL+oCD78ZcNE8cUYgJXB0a7bO2KBRjLKKjUBvdeODm8xHeJ2yOGOp4OdvZgWqjICPebo6Ba/2HUPV52y0w+VhIu114PpWqC/UgIGrizXueck/7W6eH2OUTin9G0viB0aiPntOljSgBqCjrc2r/XG0X4rjgynpPGbpm+bDxr+ejm6kq6kdhL9xRX9Tik+TkZfYsmWjxWFKybNaxKEKKhkak6HYafd2Z/hQuKcxuHhFnkw+umaDvPosoaNeV/q3SlryD/yIcpT2aIJqninrVZ+xXi64A5hp1HTnTnjwgM3l/tpZhV91WjZb/OAmdIBv3RiSWYAKla5KAzZILUFMEMV+uDjqQGt5MifQWY5MchG1oPE0/rNnnv7UxrMye2cePS+98Vw3ZnMTS82jAHJUJPWwwQHK9s5N39bJC+ukeCM2qWPRiLRvfw6u6OP0ysyypqdnpc6064kQouM8EK9WZTdqgX02SxKUtVU1MplLg==';const _IH='bcfd81fb4b44bde063d856f5ed192102b9ddc4b43615225d3983bfa9eabea04c';let _src;

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
