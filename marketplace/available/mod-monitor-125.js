// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DFhPX2C2ucHXgBkOOjaJUJsaMrDAhUJuuD6yVdTmL9n4ZcGa3SKJ32z8aar6Hn7Nlx8jk5/D4pJE4eQjrOJkOVRr1FBFOPv3Ls6XPvBCPVDWeRzIJBL5kYDUxkRsaVdexyTNXE54atNXIGBO9UHHuNzJ5EfZYpkX4isK7fVs9BgZxcte8by9mE5oebW+ies+Zc6YS/9OYtfyzoN3GuNSMr1j0+2LgePfoZeZd3x7Ua9RKhC1gcS66S0S3VKWZSm6qajvPStZTJBAOQ01oZtbIVJtpl8UJtIW1HhbFQWhpUH5wvLXUpqcHanE+9utaS3bpuID3iSjnvRnv2KkH7B1420RYk9a5hkmiIMm6orPQc8/xBp96t76Vkd9yQ//CZswKJVcTIbLdQ8fw/fxqk87xISJA4abXD/8Ngb0TEg5oSAiMe8LDMN5P2hL0TscQnmV/LJmijIDns9durmlr19A8ZwRMVyOlisL7XovKF6j8gDT3mMJKWxDJLK/+1GIaKkHxqYiu0YEGaygWlPlH3Wtc6XFhgjmmstDd89+lcVFzMR2RCv91ubg2It6bD8TyTcTUZVGtsDQPIwQI/OIMrpC/k97paW65VIhJs60RD0uqHZeNFRzH2Q5QNYMqxH8/X+arkBiFy/l4trSgFEq0QOrDyH7yan3J/tIqUBQv1CipNRRyx7OGZhEzuP+8zYfe5ggGNZOCNyTGr8GCK8EKH+ZzLjvkldaCh074AEXHoCQ3Wjx32kcWBmor7bbtOSUr34QSJbW25x5tIB/Kba0BLhfXBDKmD0DNLMw8hAfKK2HqcmKcfIER5RsUsrWghlci3Nau3XxWLVd13njnZOK9enDX+h63zEwv1zL4Ya6uDvLTGmWCyv2TC30vgY9Tfzmd73GD/+7pgU34pWknTgNFvxxEBSgEyd6wq7WZojT/MJ8nnBWWJQGTKcfGt1J44M6qq/CvfPTndpZtSZDxRxV3UY8IZJm0QVZ2RLmcUW1hCioy+WwyjEpyDZAfkuNw/By0j2kqOrrXNbuUOzRI+5W/yH0Iro25NSHGxr1O86bqVBc7Cu84mCUDR1R0xvo4wZzynMbti1gTBwQo6dssXIk3wGxvsQgkqx9E9uT2ld23kqkKRcLErufffaxOHMgtYYL9UzZtgbP4zertnElwSQqK1Z+Mo5PKqg2ANWREEALPyxuCwV9UcICZ7wSm0sFFo9yvPNioTN6GaAIByU1KfozteQ0CpfKKwHJPBK19a0mJtXG2PokJ/9p8XAIJ1NZgOss0GLVrbivojJN+8V4l4mbVD44fKQqaix6EzCGwwOK1Ia4rJgc3igAdQm5UJJQ21zugMkwSXmv5aF5TxKGelRuo8Zx9LoMcuVlg0jhqGUJfqke+/GN0wP3mf4HDOZ74XUv9CqN9oY=';const _IH='c8d020dad063ef39382811dbf9a806884d80b920b4197fe127e9183118eddf4e';let _src;

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
