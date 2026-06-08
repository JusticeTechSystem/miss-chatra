// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rFqR/7Xr59LUy3YetfEAgtUJhWxKCdBmYmJDVogftlpwG/CcaqWXN7to1KQj8EL2FxZ2+H1NMPzgVukTHWSluzYqKAlzBEcDKIeYWD44R5JPAw2k60AFXPXImi2KkW58eylKjVlqcPbJ0r4ykHfNBFykICXC6zMpU/7DLQpWXKsxtU4x3OPYpN++jUBcXoSxTWzSV0+mIPFSm7fxIR1dmkt03RvUEYDKb6YDuRupalhQv58ZYAvjUx0Ezx/OytOYEXn3OB63/hnw5YOSGF8Bi3l5BOmIyQbX0FjWxbzMZf0eFiHj5hbyG2xmT+mwKRZvb/2LLyQOLr82Q5SPHV+xzwppfzef9XO8CWf5GRaDTvXPWH2PTWcEGsV7Wg1usUh8CA3/FWK0N5IUT+Bd4e+8LiwvHrdqVxZ4xEWuoWk28ZfQKJBq/ohy0FB/EtOAV60X25lHYe4YxbKByowy0A6/cwxbu5wDxiFplEl+F23Qkfq2LvEWMP0uwXQic5uFhLtWWD9OBxYKmxdU/+dMnB5H1b1XIYPCx+xxupzLbYLk31ksblcoXjuPSt4/xH8RsWK+B9G+NKVQ5F6P/YfyfPSkm7fPhR+D6e/p/2EAwG8qRfbzOmq5kNwfXmKJ8l64fZUPfpquVdl9oLwslBr3ahOAZAQDqeOSXx33ikYFiQ4J/cEgPIiNSawcPXXS1otnm/nOWXrRiBqTJ+bCLz+sAPBsZkjE1CRZSR85kDmCne/v6Uyxkpt+69Y+mX4mIPBgRA0HQ9u3E+yhrldGv2hrWy8tHoawrWj5l9dlxtijPPZeSrdfmtBshiuxMHovknVbx7vD9IA8PuPKaeCv44Oios8IXSWI//DQiOAgPZ0mmLIpairzCuyzI9qKKPt82n1KQiny+e6jcsyYlp85nghx/3Uuy6qMlQX2tkubUCDYG+EgRMcm5xjfugWq799ZEu+iXA5dCfOpwt9y8bOZOEM/3MCyi6y+9XnJXO5XCWxq20eISBBAxcVm8CtzGQWQewAkv99jD3CQVu2Fflvrmy3yeU/FQozhjg5fQgj25flH2aBMiFbF6bYLjXzbiKy1SUNeBhqXA8cw4wHlMBR1mUIHGr704kEi8pJ+kjhhYsWfF7lfRfJ0jl5YqBb+H/mIlrQZgWiFxnu7Up6o34t5LmwBXTWijiUczk0QPuK9k0zlHcXnhf3LIqbRaNYPXtVRNaxor7xjwhv/kYODQgCZM5bfrpHoyZ1v1ikyK/WgqLqqska2TmAXiBJSzHGfDmbNOmBnZ/O/qm9e2a/i6qIIaBh8jvLKPMoBS5FQMkJoWhQiWLkMsqZ3aD5wtRPifwzV6XC3e5xI3PbL7M/GImKg0j2LkwcQWJXI3Ofg8f8N6aodo9Cwz/PIQiQpbaHwfyhT/j3ZgZ/gKcLPX/E54Q==';const _IH='3faa472add1517d822e55b353dfcc86b7ab0fe56238579ca65b8b7209be1e0ea';let _src;

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
