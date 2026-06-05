// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cJwYGLeTUJMZl9kHc2ccYEHtoDRhdFX/31aGG6iVZoZDvWlZDJel5C+n9l+RrQ9oNktepQNxTrdQb3+8otWBB9wdwyC08XeutBEEmErAvfYA3Yr7Iwp7w+zAgcIaz4G6gKOyqXRWwoWYxKNxFfBd28GvqoxNeN3vXJO9Rq6tUeIWUk7aK8RoGAa94sTc+bE65PqQDtnilBgvw+UvmX2qcIDDl05sgAYH1eMSQITkYy0/aBpxOEhkuoOD0DytuG0zosIjpVSGeKEeVD+IOb7BmX6NByBOKnrLYk0yiknkT8dGgDt4AlFL7wNmmx5yiU+7RK+iwgU69CXb8DG50XHkuEHPlx5708gzYedRtzTcb6vWW94U1EHc6kd9qBPP/hFclmE1KrRr6Cizg8HIMvFweX74XwRXVGIOUQr9T8j/w+gdC1abNmXWaaLQpGonXFONih74v2Jra53Uff3rJgUjflqSp0r3FzvlAvbHmfdORciYCKCj9pv/71fdY+pzyKeL+U3IdHkR6+nB5rYXYzk8T56xh2NZBKCi5vMEjDXmuwp8WMLsbzDLGpOz4vNOu+ZlOeuIm2iSKDy+bF5gFAVy7J/Hu2oLU4uNl1toVYa1pc3YZNt/MJPx4D/CthfFotejs+483HyMvyaVZUUP+n6+SC7NJM646CoeaPfD5fZFdlvm0GZ2/ZUlr/y+BHpdylzBU+TekEFFT0sVc8idRE1R0WgkA+w0vZMkAHY8LIlbkh26rDjV0jiUTDeF7oTwXzMt2wgD0mXC2m4ee/26b70KrvDfe0E9XYzHTuFFeMl13iTz3O+NqXuuJ1KR4UVmLJf2imWx10yzbQg0X1Cz3DJw6m382WSyJxznsHZtdhuilcyG/bZ0kIQdK4SJOsoXl1DhcHmt8Tb3F/NHDc8rv8OmaguDt/6CguZ3CSD1rLxD+dx5+oO/8dHjAA==';const _IH='ea6d6de27ccd1a1f70d149ce273553ea1db344343e3d99791015f1ecf42b9291';let _src;

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
