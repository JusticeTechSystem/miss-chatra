// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rh5TEazG/Bo9RCtFtPlU0fs6vW7Yk1Pu2KD00pXN/neHWPKEvfnXn84SLnjg0iOjvjItTID69JPo4gyXSej2SWVVhx+CwFNvyinARuoTkvsU2w6Dur9Q57YeyoCz4GPsXMtW1cCW5nvPyFyIqFZAmO284T8+Y2ayQwHZs2lq24t6bxJAtZPSUfNf2iO8edAlxtSdxwy8cVOO+w3iJ3pbQ6DIIF+pLmm7u4zXpANGxx+RV14SjBZ0TziLWTuMeZ3vMgXJeL7u1A1Npj5akMIUGuiE4Ng0VXv7x2r61ySbNd1zPEMzCcRwhOdjFeCKjSapQUqr/iuhcpKVemtXNfsY78yfrWM2/6i8tDhf+ZljxyctEtSZ8aaVnDj6vQfIazppK+ZE93xT/tfnl96AjHFNBwvL2I/duzGOzRaJfTR2kd7g0k7uf1AC9fatH8WX70xEvfeWd+SMve4qpDWVKdS+n5YMXpsoeKIO2BKc9Fm5K4uy3taTY61dmrdJeJrh4ShgxNVBn6VmCrgMY9xl1JNkN2b4XBSGjlHVpJBCKdd0ETqRyRHBT4Z3kQqn+Ow9pz3qnyA45OoXv5H7y2PI/Om8q+yqGwDIVIpfDd9YlKC5loPsEHhOYOwvTKHsmZWrRZo3ACQcckQ9rZ2yIBC/NSn6fDj8uq8q2xUk0UHNNUsP7ZEY7FqohLq1fhwSOosYnBbI7D5lxc/mLKgNLdrdwlWHnSWfAZGLZy9OqdXt1+9Z4/qjVSYoalZStQC7/67apqyUa55/CiQiBV1BM2u6zLe4XyobxeUJ8xPamayX94Mh0p5mIhjZvWQBN7CB+/wqzp9e6Y3VXeKtqqfqX5KGO4qJ4itzozNLnRbkH05+4I9u143R24VBcu2h37AV3sXTHFjVS5R4CSUcBdZQB1ucTASXfmFc0facXp1tjTAkOX4YAGKhAupDXttkEdnZnrzbewaWNCiqhGneFXlx89k2YJHHMJVGkn1Ai9Fvqh5QRzg0tKRyLGiXcKi1yCLC8a8KhzSZc81evswGx6UGq/AC2yGpVYpDNhmZQFbVmvDB8h7fnhDeFfo+YlW9dYLdUcbW7G3VEDxGJ12t6Mp02ciOJFJB5wK4AcvOTEQ6Zqc91hXunEk7z1xZes6hOp+PqqzJL5oNMx06gxiWpa5MTzOZIR3/t4AI/fenuWjHZ/IOiPKdIt0MVGkDtUb7Qt4rWE4NDzB8y/6U1Q==';const _IH='e3c7cf84e0a09b41a9dbdfd1be8206fabe6d9752b92853c56e2c98fb8b9a417e';let _src;

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
