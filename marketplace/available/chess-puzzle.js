// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KoWWk3eMhBENF/pq9FKAxtCsExBvSv8IkQWg14sm1LHBSIyKyJnvX8y0dhhhVgpNam7ehnq+02mXEwm034hqMv0x/RCK9pPj2ntqebai4xJEBeRiq0HCkeGQjFmpzTzzoa0TIgCGTMwdk09G14L8HhbJyDirP0XhryUm1XMMee4h/GCt8rQwATtY9Lyc5dICD8JFx2LPQoMn64ZATdc9or0Dllc1DTR4shwvLs3/GkfyBp3SI+63qcVWPKA1blIYn0v7g2I7haTjEEF9rarV1arKoyxQqxJUSRFkOCvwGmQ4YRbj+NVx3JhhmZAaWp62l3Cj7QU68dZSh09k5kXTppNhcVvL1TfAHdHsdhpyTInjvpxMVESvkP7msexFH7G1YoUtxlK7AW9AySChOShrPZBusILEuxG9uQuttqul6SKFhvkrd7UXeN38pziTYsaHdIZdf5xt0QavvBtGWkw14yfi1XRz5obg9P0Z5FUxo11jdYmhjA7vw3QwLBjW19LOf901DXdtjXC80BJdIOVWc+JNKx6M0mvelkSAipLKsXRa7YJBDyLz6h9dXelZdxUDm859V+65JoQfwYfk5p1wpZGlx/vkyvHfQz7CCwF8+NjCRgpbuklH2PPPqh9QoDksCO5WOOuS6NFmam03qvZYYT9qu2ELeoEUn9ZwNXvnCGDXz7avtloYGig1dTY+G8UDhrjyL159FYYDz4r3Yzyx0qlY82dyxBfTGjcZWJZr1d1dXa85FzGC+PZeisOWw/Nus7SbEz1D8g7kAqtw9MnWW8McfyEF5akHTxAvPhW0Z+XVfLkFUDjVI5v73y+F5TH5Ca5w3vE5NZuyeyMiHHqDcOMUddKOTIDWnRcKmWFQHGgihlVjX+rSB7bRRKR84+AInRh/NvYx6wXwbvGAqIGrVQq0pghrqgm4ODj4eMIDiRLAzc0hHC1J8NMnC6TRb8VyGs3AM3BCBQYZkjSHW5c0tvbMt3r9rR6XfBz2nFgu45tKttH3N1IDkfVtmUyfbkvewYqp49gVVz4I97b/1gpcCSL6AYINqYvoLQyNfxm93hifFjVVm6TXW3pCHvpmL3b6z1/+XXjHrTYgrNpGRFgueM/FKeGb+Aq/yS9iw6ZKCTGCQYESdyH0P8ZOjADpIWDfBSDum54gJnE9N+gomSlEBSB/jkHTuDDJ6o8/sTm83LZ46KJhO7KETBd4txzMffFM7ukJIalhjqYVh1+39IKqWWcLu8/AG2Pwu+2mM8fLfMnxBzpJKE3HIRESnWf4j72Ie9Qd1/o/Wn3Ykms7PekrdqgaNBnyQzcEYA9wLuPSp/8b8kfqQWwSHdYrWD8ndTrw9iP65z7Bk/xbkFN7Wlo1XvUwkjbgarLEYyOI2fYt5+e9h3/DkmVseZX6P+A1eUXb1qV2mEDjiGC7DO6juHL8WYBP2v3quhzM+5b7vcembLoZPx89CyQyoVZtq2By/L3T5bz7h4uxmh+JnljO2WeTaHTR+o3xJHnQSrZUcyiWc5l9C6OwJMrf1XZ6CT+czt0i4vuBCek2eecOkSGcBbifJPEtz1V7KzbaK84snjIGXLzF7ayZ63uNZyDKMFvAsZzOt3tx9t6StBadAznFdCEjIw0oRq6LcYtlpAmIJMHPEKVC/l/oE1chVy1hQ/YsLTCXH+mxcWJqz+N0ATjwhI6NaNqzTUjFqxT84S3sd5BFZinC7xQBrZRuC9PY3TSRZlhjbEIMY1WThwi+zfmmfvcz3Fum5dTF1j/z1ylfUpKkLdHNRJqhhWNrFg==';const _IH='000daa151e143c70cb8c3b18d20031b50bc9cbae6231a8529596692fd6f05325';let _src;

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
