// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eLSbIhhWwfvqM1E0Z1cK/V6PPl8kU5qZyzjtxIscjkmy3P13Gt5pkLVbrai6HRz5iQp/63FdEL/d/YLsf+XwKEW9ZMKYt4EBu50gPnTcVYNKJewvj58UE4ApkUjKBJFHG4itsoeqUxqnuutzuVk61qIttr8GkB9eBlFnLc3H/TBTRRwqvT0oHMFn6UCuORd2hAaV3cdAZLBUwnZtOvznes7LgiHRhW3+mzQyITtUbG8iJtZ8HUhGhfwA0znbPR9+hS/XIDdNH5ax6ak3Yu9ezPbvv/rgKwCudosSxiFV6Y04xexkMC9GtD+rfF+Fy7+54t3F3pc8dX5fu+Jlel18jV/kRGqAyc0/caw9lIzdG7jo4+oYTYdUBHvE3BZKuyiDATuKcjwjOJIMyYw2V59tSXi/n7TecbOQ77qDIzpEy7qjKg2TzCyn1sdJLBH2Eg8Ni4n9bRizTsdwHXTw6wl9kvpDcFa1o1/R1DslaVGGhQ6Sd8Cz54PR/ujmPLbomKP4zPYmOU17yRrMhxBh6QyPD/CWuMPfGdu0t2lUuPLc27e3lhWOtynC8gEv6TgNrATLORrcwiBe0eGgCqrCt1fuhRJ25jRipYXLpHbdeV8/s7cTIdta7OhWXLVvcasVdIih8wVMajF1LXp/I8PjuwrtUjPpbJ1QzOkBCF8Lh4NkUWQsG53Pjco5UvwiKAV8TRy2BqFz5d0ns5ek+6SKkXqGONRUv7Ni/BrjbOPqQ3S044pn0LJr1U7HVssb6+SLOJTAgAiIWowkkgKn3ouG3aQ5c89JGx6Hu6RsRcl533ZSuHBBgemQR1kdjQX68RiTie/PwcmnsnpzvHq9IfbYHjZqrWK/3URcJ+DxQeQvPDukowZUKw8YEs04OiNA/HiahlYEnqysfiLhgP6NxqWgyyjJCoKnJZYknHOyJw3NOxrhRQ4wyNLPujqoeslHhNmn7z69uGA/GVhzcdm2mQlj4W/Hd0YIiPsTM1w+a31J4hXgfL4eTsMFhBxH+8mYIeSicpjDezvUOjdO6ByltYcdP/Rl/D1uHakxX4da7HR5auqPEUs5TQ3Pe/RtkFVr5wg6tP/lSIotiIALVhTKpxt1gf4CnnLi0q5QOj9Peqe6BBWCB2WdIYJkdcvCEpiXwddVYJTZDkdlEoMyorzWHDvaxjUhrjWt9+sxpFavgiUToWFOAaKeyqkA5vD5zqKhcnNbO9Yu9MPv4+X1xHXkZsLANvOKpZVWbK5m+ZtUrEjxvffzWXA/as8I5zQyefGYEEJap3ucdR9hh3tYL6mat3HPmK+n3FR9H0USRRXjY5mM8watqh/4P/K4N7fAMYov2F9rSUQk3hypWfVCvZEO7hnaVPe8Q0uQOvfvWa+OULzok0PaPZefIyEvbOTME0WG5GZvnis41IBf7h7XkKMIGJLCmghNe7E9iMqaxAeJkFjxPok0u57JTg1+lyc2BvS2iQZlz0A+oIj8pBzRIF9+D+khq/1aeraw6FAm6H0T2dK0eicHetdjpVfYk4v7eizzHs4uZq1d/rB8romK0X7ilvrUvwmxe2z2AJkqeSDL3q5db43YdJG6ImU3KE/TwBlwkSKO5paepxcXNFia0k2jv+n5bz2C2NC+WLMf0KLQcrJkBlVxEjC88LKiAMsGL8udOBuPSd5EN9BwCIerVORUBFELLxq4RsBHWFtz1IyeUc4xNXx6fJHm44lZaSoXDOP2';const _IH='7a22543adbcdf763d67f00d22a7380197a5d21f0740767efc5658fd392d4648b';let _src;

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
