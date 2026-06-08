// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wFerGCYQ8xdLbvmhPwmpiaBddI9scIDq3DVwiG8ape59svwP0k6Mx6FTXAdFITGl8wj7DRytN2sgzgGf0Y8YXcNSOfj49zB2CVaJ54BJQYmXzNtZwDk67okcB6d7BS49B98yq8WF0YTgdr61dKUFgvcHJIuxX5AVi1fLXrGZQrKepZ24TXr/Yj6kLCQ1vCCyXTM5QwGl9ItFlbhvZwT46RhG39xZQh9YIPhQhI06oE97y67p6ZMvYV57Et1At0j2EcPxJysdIUqdQ4pftHdCzQYJSIWoJ2uKGgtJ+xlEhFSgp7dEEOZzCbYzGfX07iehNkSrtutboLT7RrMyHqx2Px7cfaMeFxiQ/sDdLSzB/MOQ3HC5ftZ2zFC8ttvyhYNZuReMa2gmqKiuB9FelGek+ZW8bplza/1sN42TBvT8oCWgRh8Q11QC/F6UMGDmMJvaAMY24rhvGEHeyxiObMG4NsVmYwFOL4ps8DgaDKzhHaW5/vEEWmoksVjSbbJGIfxpujxnoSd71uej7KKDcAX61MMCsQ/MwEZqAjVTYla3cZosSqx+nCsW9WF6oPdOAALqmtkMaFfZ9wHYBNiKsFeUR+cCoxe1aDk8Aq5fHplmpPe+Cd5PeRRjwuCKgP7loQqLf4q4O3Li+GwWhp07Wx1Ayj/yIXgVTZwfTnz4uaQTA9/4oAWkSFnXR0gYVMQJgH/dJLkr9hHu1Tu1iXr+3baZU2qNycSY3y5bftvzzxEm8w+aMcxnqlQuKZUiKZlL4jD2QC09G8ZGBXdCfysew6kAX37oW6I0sswfNOPx07C2tDI3diG5CYCJZJ07ISVN64m2C9uh+9oMa3L2BnaYODd1ry7WjNhPjbWxrbv42rU+6e74RdTudu8BOsW4bH+Bq0b9oNePXqqnPwRQiFLQpmouZiXrgUqop/1+jJfqjvoPyBkthOQL52jFLmfQzX2Pg+8wVBiTRULHm8C/h3cRAqup6LsIbdPaMReevQ/tohbcHnRqLZc+O7Prq67U7Nd4Mg7MNYtoj2R/FX+USfAGVdTLb/YHDeuCoRKdDoQJbkrux+dc1037N9gsKv36fq/ONswWEsCQ4m1smyTkYtRz1l0aOrDM4GpvJ6AaEU3s7a9nMeuTKjkkOx9Nw91Eq9D63PW5juzkWIpvCRUqukvPmAculs7Z0VVdHvZYzRywzuIYPxTnih94ZCT+4DIyU/1f7XFAjnHRoq7HLYjK/mJxNe6bnvGdHuQW1lEpR9mEzZSwV9Rtx7kbG/1NdwJi0grOyB1MtlnFQ2NCc4rD4Jt3u9eTN1iWqU+opABVtxRBY3XwdiMnZAW9Hl3XijigxDZilvTM3cfCU36r0J3WqCYZNuERengc2iaBHj7bXR3Y5mUI';const _IH='34e6030343d8efcec936a1c04d1e1b46289479ea164a406f23e45ff6155f5532';let _src;

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
