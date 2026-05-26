// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OkcbJM1Di20eJc9eCk54u798kdZMwDaLH4kvUYLM03qyxK9N2FUTyFRHNPzIVABRH3+7GPm/3jIZv2wIzt2kENz6zntCS3kokkJHWE8APGit49R0xUG2ycLVXNojJxCRV+XYief2sfCFAjvLOq0fRHiDQj/VgySzlUKiSNYe03Oaj23FAmv1JWm66/y2Pu/mnWP71UP9WZVXjAs0eh6/GAqi64Sg4C+h/1Cxl59CXil4T2iVCShjj3t9501QicRoM0oUCF2xU5+31yP+lE9U7ClvGQCiNHExT42Jh7+u3SKPu1l2UBR9y8XCL9GwYcRA7sqe2kUF0wn4Ad7izo7oiQS7RYJnmk5IXEWGefkXnIVmO7sI731v9YUtZ7qH7khe3Wuy6ZjBnEhJuGaXXosYI/Z+wATw9IqIKYQyVIfeWP8cZfMk/Qx9h+g3ZMKUrQYOBsjuXKqCvkjS6iFQsSY/nO2Zsl6/4BzLWyt3IA1xN4JuAajRUPSEC1WaLZG7pjKFG17V6w3aRgwK33X1lhoHJJAyp+wmCgmSxk7SvuY5yqMo2RTzoRHpvB8N2eUnjJ2ky/c3MTmNSwWEF4D/fDrpfKaRMC92+mDc1V7gCRHxCuz4M8NvIGrb46d7OgsAYznopQ6aagTdGIsbbifdyEOLNF4TKUc/H5FRouDHwsm5VkUzniNj6mrQFsVth+kg+3AFxw1eAxdNU3HN0mQnk+93X78NMn5Rr00ZEvdM+aleIg6E4jzgUeWmu3eFBctyzgEEMHdTTlv+SvxtdYp2sGXUvu4EOTVzyHXUocfexWrbSE/JQBLFX/LYqX04PMvVKH1JlomBh/U8PWVX6YGUbXOYTKuuJjhcbgI0QK/8jje7dxyGNozI0zbHbE6xdAeeavYwHqfIe6Z0exPsyOfwdZvGDk6kmMPp1cVQORIJaBcpobtQwDTSERgXIDCKs4lqOk/QUV9XrSn6ovHCFl7MwhkCP7vyqDbXljMQk1uUSVGfUJ4fSRLSBXDMHwwSSUuBCxJnw1UtbR3vhWFA/c6GQDL5kOFLNT5QQ6YGg/8gbXIW9lTtLE2PYP2pZrd+byuZYBk+GNspz1sZtgzrGBOJXDzZRstF4X878U/DlndbVVvZE9E2JlgZE0o21+HaVPnDjY3ZsnvSg+9rzkPyKJUJmEDc8c2c1/OUlLfUyW6STcb8rTLFaDd29Wn/cm2HySnSqY7CPikJfixuDfilIWGs9IOWQ8lYHltL+wE/uHjdZwfm56QFug93tzenG+Tw95yRFQcXhgDdnO2Km7F/dJKJ0NCNev4RNl+18zibU+IyRgd7qT918g5S1gaakrQrWBA059lpVBKJqp9CqCE5Cp4Oc25Nq065cht30GLALfz0+gQjgMU+lRWuhtYF8lqoRIky5jpiliQ=';const _IH='00af30ced5fadb535ec83db2da5e8b4b7f7b3575e77df13e362fd76f788db46f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
