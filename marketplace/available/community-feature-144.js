// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y5jf0ci1InRdQ39tmlD5LDnCLn+7i7+MyQFW6StgeDxCtBwpfmG520xG+2Jd2NtywKy/Que71cZkVDefuoybp0uvpIHLtEiESvRKZUPNyIppTp0+VSPkRGxDC31sOM8u9DU5drPJ4IWjyulevN9qnuR5/MGcvhsx23YkOy1ADYDY9PBW8oABg0ZsObvuJhjua+DVv1QCcV/GKmaucsxEWZHGXWic1hzCiHcbPJvbcIjt2L/1Tw9Q6RcGIb/W8IoB/ecil6Okn6wlbBSyCvIp3cI0PvwpQ3wRQLWlTk+rUqvcCWp6ARQRhggEsdr5VwzA30XT0+ad0UmPk6m8HyApSKE8SwpycWJt2KPTepP8cZz94uNnctjtGT7XScZr4n/DwAUY5Yv7tKvxxVXjUTMhAhHdqC/0d+h6vkyG+3i1WJhZJy1Glp2ERuVDLwW0QEHlJGSGM4jtEgMwZZeyRu9PbkrX8ImsgTJ+hWHqDgBKjvJd33ODO8s65kXdC6oncHN6kn1nZPvE2u9WyVnQ3qQuWOFSWEkgDv5oIT+W1zk1d13wC0wPFdCLxiygmfdcM1EAnU6iKs099o+E/xEF3t6gApYUOplZacAbNhXcdAo3BynPbqMB3r1qlh/OgXor558nFoBARS83FGi+cQ2Ta7gaYg4BqmjXMlWKaktynfnr2qc3lrKf4fl8U5hWd6Gcmt59urXnMGw/n3l4s5ct1OR8cZAf6A8bjSKuQdkAGC9U3wYiZy67ldk=';const _IH='71ce84c57db27bc78d46b9f25550cba4f5437bf8beb65e2a986c2e40781a2094';let _src;

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
