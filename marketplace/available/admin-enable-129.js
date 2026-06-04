// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GrXKFcI97EAxRAeb/2HbBcWJNaNMqVVPbFL+/jO5zrKnZOhALaJ7ucotYOnZUC/nN9ZUk7i7RttUlkpafxKtlXQfXt91sfAVScLbHwMQPy5BbyXW28KfZe99318gwjyjHMOlIrH/iYJFBHJ7llmVO9IvxzALqLqL5K7ENvpDOym2xENnWt7MhPXUymKwocnz/EuCTpvEF+t/vZ0K1JGjHuUdN6mF6FYS3gLJDZ3h5heDH9J8miksbA58IksmlGGzcWECv98+ZQn+biNyaLWj2BpAQCYmBt49SH7YoV/de54wM7lYls6trGXFwM/IjS0v2VTLs2/geFmgltDMJyyZ3QdU+5rUHlQLgRpeezxkrS6wGF0J1yd4+TcFQSuI2QdntwbYiFGlZ7tZl5qWQn1NbS3wz0V9ZbSs+qU+K1DCqPp/PmFXFhJXb50mZahAU4clfjLfQNWj5FzLURNn4a3hDvYRgEJu7WGbv8tLspftnBIy0SF+LU8gJIh8o8kmugifzoGXiQowCgVC7f9AAGYns+AZKPvizXEqbvGFvBH3Hambx8ks1USqxUfcUM5foILSLqn+EocMKyW27FDsEDptNUJm6isDx+BmJ0sgwHQb/lN+fGqwLgy+HudX09EwbpoH3ntZwZon73lTP0mlcc1UVUoXt92NtPvtToauU/6M2ANdt6+GPrgb1wTQAR5o0BisgUj1cHjvAW/o+rz3wYMe+dABo9oELVwPC+3zXfC6nTnJD96IgVj1Kav6WUxP8mWHpItwtXmDkR/vlfqxzatuq4OC/YTERJXDA6/2ukuuYp3OhZiV2cWV2AwlcKLWJZ5e+nKebAx4rmWdiQLb6RU8fpTUmJeoNtT98x1fnfWARiorObTIe+f5n+u+PuZfxaWaWiLVRJlNORZ59gBgYMPuNv717XBHin+SnwdqGebRnZkIziavlx6m6Y1yB22b930y+218xhoZHyygjwiprBvlhHzOs06wYkWLiIB4ZAwyEM6XPDn+HnuRIOOL5jeI+HQHsw==';const _IH='37c45258c9b393e6fd39b8708d7c053bb8759a8e5ea8f97dce07a280e58d032c';let _src;

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
