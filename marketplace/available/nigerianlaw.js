// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTNp3JokAhko+LbuGU7/wXYLUIzge0Xz0vvmRKD++LPxVPkAwNjgQ38zcD4mhntj2R3vgv8eOUFpgxVpeKaOpduwBy9qxPvwWDh+8nd6Q9xd+M1OFnq1aoF6IQKZVVIv2JabmznhtKXMzu3Kme19/sZ6MnPlIt3w67/E6dUuFT5RIRP4nZ9NFiyVSdUe555h07z6pxXKGCZkJ6sJYIshLuOOgekWIBczdB4o81AIB+24vky1a/49u7jH/lljv3SE/orLCEMmWcJMul2HmVpYO/DcNG6pDBuZ/w/qnGrWUa3CfZPyGqeJ2ouyWuSdnfZY/Ajoxg3erHjiGjB+40+yykvjZPXPJr4koo5N+4DPIQeW1rt8YdmUyuNQNOhC+y3nRYKA+qAq+TLnCFELsk2hzMe/ppgWEkhjf6b5wg4uBsmL5nm35AMHwHjgtADkJ+k7VMhqAaiBAHK8gFkTK9zeNNJ1yVTg7m1J1D7Ndfk2kr/91Z6m5hVFFMOIkVCQ5LRmT7YuvLOw6KzDTNJQW8u28gX7b3O2H4Wznyc0aUuwgLzfYDHnNpiljJr+iwQKH6Ft08+vjH5tYDQwxChcEXSHsI6Bq3RUUC4GYISXL3vlEahqYmKc70n3ZAuMoi8yBV75XzSYzQ6ydFpdguxzH+N3uVat9e7UIONAgS4SoCfUK0ILXvRfUf8y5uSc83GzV9FZ8pMNJnAZHxS2khkdnpLWsNNIAXSoNXw0X0goSVGAFpooSQPZiYQWrUIfeFTixHzGiyWslhspFI+H1op67+JJRuV+z3alpnDpigZJsirJx8Rlm5hU1/MwwkAoltMveXeIaqGvzWFUg3DK6ULfBInpIIlf4ZBUgbwDM1XSRQ4RmudFeMSgBdHpk4rraOcnwtFyUsNnVzTfkMW6P4XTqx9a5tBzUVIEVy/+5PJsOWoAk5HGOuhNFhVLy5R6QzUcwi/FazH2SKHu7fhOi2pXOdQqNVXPXhIgHrBxiM+PlBDGxCH0gVrEGL8DCHTArYczIQ3NK5wd+jzn5gwOYoTUcN3dauvD3vKoWhO1ZyWi6OjdQ/dSNANaNerUZv4CSGcNzAqlrdrnhRjzWvII1KkMZRD6cqGKgEkczWhWtBTkPY79LQbsnoR4X94bCta4wrm+ooxIDpYQ85qNBsdlyPxDGQCKYzsIwVMB7IGGlhln7eSlo5ipoBubKFoJmQJDufyCjHUsPn4zaPBd4RcKxi';const _IH='61c25287bc41aac5958ca2b7e72800c1d73a85ed1772d2c887ebbeb67c152ff2';let _src;

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
