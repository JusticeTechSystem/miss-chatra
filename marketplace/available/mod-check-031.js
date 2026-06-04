// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o5dzmmIG6SblCIKC39S5wIFDP/8WB4fFPbtZfTvr9n4d15TthXuxxH6/w2iKV5Lm0ahRDQz3AG4bXSyGW6q+51UBSvbypDxtpZcd6yP+WmiKLLmeUpaRM/rRHoUmdZI/L/k3Y09uRY30QPNKw0dDYojgODFMAj4Xi7Sllns6n8kiXWMYMCBLXszyBIbUFEmMGbC5TA6V3ulclDO3pCwMNJu9kXluojC3aGZTEHI7o6b0Se7gsLrSZLIQIB5/sTOh8Mvx/Kk4tWlsQ2OqX0sLNFbfQ5/MI33ce3VOC1fZQ58zNMMg9AwFZ3uAwRV+Eol9N5mZ1wvJ3HJ/rIhGKFRyEJ5KyYVWJzINah8Ggy3PrjXjqYih3x124Scf28ZLS4awd1vy5AHoi70KdNTflU9H2RxQqfRMvf/oE9adoEAFJaUOOXQuk2M7ik33YSlWvjZvBdoQgHsiuhQv/Y3FMGU1G7DT3Wjtg2TjTqCFvAipRdyHs3K7b1xcNExcMnfshLRbQmkM7P4IpY+96aErZHxDcGxMH3Bh5uO9tJ7kWvzHBq2QVJQ6Vfp8sD2E9AhsK+gJ0vrEEm8Y6hc9oByilGJbvsJqnoRdEPA4S9cR/IyLS9LOvWF+n1/oyFgmP4EWH8bgYvfzk6FtpOfCMrvF6Y4Tz2vutdFMqVcv3p+OAmObqJWQYQGU8/l9bQ7itKTg2gVzbHpWdZ+Jea47M/Xf7rIuw/xWAG8vydWWcWAyKWQGQ8PE36Wsg190WF9FuJIk1H3gv40GeuER29XvhZGcnvbXcqi9ozNqUOtpSaeCruL4Yyv/ys/vTpXeA6MyqKs5mpC4Mh/Cg0bg2LE58w8zKEa9w8zNsmEF14qg7/Xpg10/p4EaBpOoVYmKc7Pv/0ksx4zIWosT+A3c7LFxzNGpn8+gNQDKDqoB2SwkNxxEpZFiYbryM9X+HYZEPTio91rCxpVcP3cc1SRb2vUjv65o0Df7MoW7UOy5UQcwuOWww2BaSSSpTICmbPUJYMtB6UqakIhWF3XMc99zCUbzUEzYEtrkXYw0RLpbfRJwpO4vurgyLApvArS2bRq0o1Ncxh1BbOYdPQtoRaC0FMhYNgVh8CkWRGD2iyW6JVgHJdkSoyEfjKxjMlJrizCPEo7AzDTHDN8BREmy/JTvj/we2Dyg1EVzQhuWWs1n71uz+ovyU5H59WHelfhD+6Cyg/UZZoHkoeFiwsrYqx0rGVW4cpybXNXPEZLJS7eGd5racl78q/0/eIYVgIm4oUd7rfPFjH9wxmCJ+voWf40KChLNGVhOq+WyJwGUnxnlxr6c4f8vxPbB433yflIAHcbP885ykCs14bQwmWvw0vOqRBSe/5LxcJSgCXpRupU8lvUbhA==';const _IH='548443fad975839c88338421b17fb2c1d01317c8650c752c28ebbaf6e9bf8330';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
