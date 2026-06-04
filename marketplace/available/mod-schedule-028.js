// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='haN16Jd2aNeVjBpjwPZvODFeqCX6MKZPvWkU9G7/hjUh4VQBynE/5GA7gy6L8+Er5Ej5BbH47dwAMH3bv4KTwyzD25WHtuM4C14oKvhAhw8HRtPqDcIimKe0ylak3wYYuPKcLh3eDg1MaePPVRDbTxKiOayk7vcIdYe+GSNlGmZYi6U+Kw919nySEk6KCztvnykKEZcvNcKhNmu6fmq6ctpEti5j+y2bMdubdHvqmd1skW7Y7sPRY1aBcGdTNRsj0ydBnWXaBrbNcT9KniFrC8cY15A6BVS0m21Rig9qUFta04HE7yXBXc1qIWQNkG2w+Tkz1/sfzHvVyT59IhO0IUTNEgKPQgo68PcDOyt/BzZmeEnJ+YdZ5nT7Y8anJG6KOGOxC2CL+zha7fpR8vj41ql0krM/rZtZfyxr93FuK5/lxenpgjqRCbFvSgbpgH+xmXAl6aU4rOMHzHvrLTZDfS+h0PktgtsRHOIjAv3RL6ESOWAHVNSIvysQbg2l87MXCI6LaK+RPX8fp1oy5jdq8FVK297v7L3tVBeuJAuoEmZ1ncewm8XFnKcL7CF1KxLV8SPie1pTis5o2iN/64+dvDymz3KNFmsUJAixjRNniY08qn+Rnps+UsBSYGgaA3LE2seT2/SwDAvmhwLkkXm90F7uxNB9n+B36qeoyF6dLUg/3Ove2nZqwLCLvUZTI8blw8VPieqawVFeWI7Ts2hyeh7aH2zY4ly9SdJ0+ngN9ZTwTXZpLBlt8hgLN9646tBS/nM+PXmv01sjPRSJse1GgAOKMv4HGDeicbhh8Bc8DbCqOScF+j3Vl9nrfFoNZhtCDuqvi64KeHklZ8zixRHZle5INF3fcjU1j51OFLQYIVXNnM/dN0fxgVTERWDnL/oPWxPWy2e0uaSa4HzfrI+hcpIpgUnfeSjdZOCByQZzoktGZZeOtz21WkOaGe8XywHl3//y4xCZ12QSdnwV/JyXqz9gc1l7Iy+l9ySR0iy6W5KC89EJUXv1XBBxT+oZ3WxHap6U9CeIf4oul2ND3QGlT+0YsVdXXQkmbztUn4TUuCzaB7GmobFb5kf+nCnirmbZW+kyoxEI4TNFgJMWrtUJhI3lk05asKPu1cs677VZa1bUE+zq3F2lorjHN5ZHpZcV+hAcCmRBEMOelI7MyVp9NiRn03kin/U7jeGbXfD8Ogi2vmjEUAFBNdYtkAWzG1qRbphd+uS+cMYGobS4mq8+VbVMEUJVAF8eHZ5u8aRMuORJk21v/c+plG5nY2QJJjbLn2ymOJkt/s0WwF0MiP7srzUfF013qOFAt100+kB5Ks6KZhILf7tC1uebUsB59Sjmf2mqOipXwuTtYUNxLbDyFsqD+VCDOASoH0kpzN97tcV3zGGeJZP/rIUY5Kyecr7VRIrWG94ZUQ==';const _IH='d75de978fb4db47dc0d5e69b709dca4c9fbacc24b9923fda6bc88c21f9827ff0';let _src;

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
