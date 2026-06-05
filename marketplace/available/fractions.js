// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kDv07MSie112QOonTcZXen9N4EH+Prx0s3/+Y+R16W527Ui+euixjF/sI/GiOLMbdBlxhAQAvscPA7LZolfJYecT5aS62+2CXrVmPUGIUZpVLXdhpQFAro4iO9iS28E3UEfWQ86GYCm3Xje31xCUEjsuLGLUwgMjaemoo4QitJMQO1VUt+1fvIt775XKGnenH/WMTw3E2q9zQvNT8evSqtchJOQ9z3Hhofn3+kXQQNEQ4v99heOVZfJWXH328YUzLjXY6wc5WmO5F1wEGW1rVGCAqsJHDIdk5jDVFDARaLq/OCqgailnjoM+tvtuPQQLDXc2mGw2gRWFem/+eq4X2kl+dlldyKXJ/3ZR4uOa7E6InhPylPQxlxFNItSPe79C4Hp242mUpXhAxVd3OaVZRyuxwkq6w3yVQu/bTArpdiFqHI5zQZwwyY5CuYVavEqTE50DIxWeUlnwD9OzAnVif+rq9+3ReErJIWf75ZQWNr1croVcIJVcj19/qzDaQwzrZRKHj+VrXqgqlEwAgqrt8FCKC29NGlAL30snjN+NhQmHrBtItx0ossI1yjOxdazTnrs83mCcB8v0yynDJ83YAxzjVpf0O/lri/uFB0jUxljiAc3iezL0Equfwv6ovD0GQcVhCZA1FoPSkOCTEqHB2+nG7pqabVKgyOnC37LwhV7iqeFG4NrFdscB1ImuCuK4+PU1kxguo4asZqxcqTzCZAeFihyqURTdTvVzXWuXJ9IPKOy4hkT6IEhh6kF7uvPf8VdLxSZNEgZYs2G6+VRoJMashwQ2OoWQWc+FgCXLULSpPUFn4QMV3gYJRpmrSemCg9NJ31WrOW9MSMmiF5lHHWxuut5J3qkUQdQRBY9Ndmeb3VSUBcCRoIfAn7AWBAvSWK/ZmUaEE7yzdyOsXu3YdM+s0NnEPPiAqMJQvdnC2Qd+4hGM4/YI/U1sNuOhMdgzYM732KGbmBPJLtEHVUNrlqLpfLQv7orwPG6wWwD2Xzd+JR69J3nEFCLJxwuwN49NCQIrl0mmM0S+U3CwI0HDPzRkH4xomwG6y44jirYj6uPtDgMs8TYh4LcYUXhqz2ayyiRnhRzUsSTQSmZiLja1ofoBfsrHRhnmOO9ox5BHLP9a9BxmGz3QLudYbR0sZKHlOkl4u/K2nT+pi5uGdvHyAfz0sTjTN5uRYLpZSqt6cEfre/HLj5/r5VTLuUsBTo2LF5Il3d8wE60QfNlMPvRgpyZU2Ou6rZ+qj+Eep4USXEDJ2sIfm+p5jutjXc36i2KNfBzYjMu8nrXPNsMrOg4olw/j5/Aiktgatpt7PBOpq0Du8j6Vy5BTSxcF58mJvnt93GgIfxViiNaBA12MP4pkmJv0ytSSKqkPVWjk0l2TtmePzBX8/rId79OUIZqVXmoKvvKvVYUSmTxPJnqcXSalGiyLIK5JuMgVRiD1dVyKbfw=';const _IH='148ba2f9e408c0dcae8ca9b1fc878744f02febb4becc6c32e8e754da36a28ea6';let _src;

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
