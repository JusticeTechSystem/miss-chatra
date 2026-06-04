// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TELR3AugiOU+DzZlE3t8Z7kkZttsgVllID+SwkOYJ0WGEO1akH7HMd2BCIPMzz4dvIQ96s3FbgHnpK2sKOAy3+gC+vkWXO7QxyMD/Zxh3QH/Ze0jzilt64Md8LsH8pt7+ixSL9rsG2SkNsfsVPs9jcM1GsOwSNzvojCRdknuGSDnd/X8nrZeJKl7Z3HLTyGW8jA39I6ErP1KW2FVGLWJbXVvrnCv+k1BXd5ddRHd8K2+j4PvdEHeNgX43HYlhV/DoxTC6BXTzgTUWGawKskfc4cGOZwhgdyy7woqbsCFPDauLER7lIqAvu3TFPpqypGWSF9BqpIhO4K1WlhikFDx4qQkuruFklrIjkmUUTpzUKwC7ZwJHwOARWvnn2tGiLNT2XbF/GrWULF5qth1eUF97ODjQhAa2n2m68Wo7Jzd03wwQ1Ysmd1LvVSrr45ttTuJ2DXUF+nxdAXthD3T5TaFAVMXu85kwoKqqHe1hk2riLInspS85LYdGk9XpCUfAWsp7dgGrkxDegGJEX8PMjKLdzn9BwOW9kp4iT0wsOaC6c9iVyBTK+/jM+vArZEK4jEOjVE3f3xPNI2phgrnS86DteP3LmjGb9b0eCQm9cO7//zqSSvJnko5y0s2GDPpKNw7T83idx78LqGxlM0S7mq7B9DKYcykVzSIwaDuA4xx8muf4s3dXsFgDzJovgfMUhz+84AcxJYI6nTG5OMiTGyyBocYMHiRAtaxR8ci9gMOe/K/M1sGGoYSYH+v';const _IH='119b8d773381508f0aebe5e8434fd21ecc2d6d630b3c281fcd2927e59525d338';let _src;

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
