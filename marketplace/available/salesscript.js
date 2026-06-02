// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f3+UWlcpTL7huUUsBPHhpP3Ii7ibjKz5sgxgDaCrvATnBbjdbHKfdbiZ10+IRRlCNOBUy3QIZEVq9+su8X6/wwG2fYf4WNuk9Tqys6+uC6gbzvDEWl7Zw/GLrVCjlPga/PizWsM3V2J3fyr1fIofwr0CyqhKrFyUWHj0d+tn4VKuvefPJe4RcYayTW9PVIX3vcmjYL1y0hspEqcCWU17RvHJbQMt7W8LGfyIi2+QtnoYwneEnrpGoGxy2140rwuGNlYZGC9ZSBHoXIk8/mbP4tDWBgvqRR4/OZ9CZLZLGcEJ+xieFiQDzg7195hw2ph8J1xUo+88UXxMIQp5drf4y0eQNiN0ACIXMgbI1c+pZo9SfUW+r8/rWONUMW+OrL/SOUWCpNuHBmKKBceT/sgtl2qBf3lGwX3o4Xh3+QK18bxIlioHLSlPQ1/TDjK1l/WghncAcNcSyrZoP4Pjal8Ty0tRLxaL+uKBhnRI651r1ngjt94KMZpSLhnL5X4TW+lj3+4SDRXCaQPhV2MYrXbP+73sR4pwhBq5qej4RYmDajumdkkkhiEuFXgyuYMrO5EbxlCClwj4kHS2rh/ypY/ITl/mO4uH71dPSNPNQkmn877KzaVChFo4vAGPcG30Sf3ZCS9tpbpIIBmdLtSvms38peJ6CIkYXxIWiNg8F9p60Tk7dvcPIRiRFCFUNBSHrOqm5jWnQxnvfrhZWWWkH1Wlj84qG7fEqkKgJg/AQkSUxGyQ7KXKU0jZ6rb5lve1/9SgyTflcToMcznDnJ8B9ZCyDvHXEWpDi0a9RDu6MFrxLhXvS2hhZukt3TNkQKkb6IL69F/T1LHgM5V3aCZjH1F59bJIGY5O7bvf8KkX5gUAV9q6cUJcSfXoIC8vrmTYEWxMMvTejvGspy6B4LJUCPy/vsn6YodP7jjwVkFVE06RYEAK634JMroEr8DYX7UMakHIDx+0iXFYjtwR9+0uJ43dquqymO1JtS5F4krLJjopwHn1oDLf8h8EbBlfpi55afJSmsP2/iI+4+3TvsaUmil6/DTug/ibXn8G7XkgF6AfohvQasBZDYoOY4g+ZCTVYZYHoYwxMYQwGkduczp98aQ99rW3ykpp0kfalUbvynD1MlC0qd8D3bIiQ53NhYBHHq82fQfj1oFiHLj9BxaI5i7RE2gs02gLXxOO6V0s3Ku/2mZ5C58MrekYTEg1CWFTWjXch9/X';const _IH='ac427bb1a17605c0cb63dc1a0ebce6927b10c8e9e95b42821bdde082bccf38f4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
