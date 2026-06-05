// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vRJEsbJcBHCtplBjCf1+VVUmbYKzwOJ18z8zCjyPmDyAUQeJ6oDXFpo0XoYXW36BrpuylGnMipTtVcA2cXe/c2QZbfmPrTQnihIAB/f53gqUD4yCkH61fFwUDdAwN/Y5A90as+2j4NgeLXQDA27bHAbmqr94qizKJoGkTrD/I4FleA778Ck7cQaiCIBshgRbSSVcxiys6ns7a2N+Rw13EQRzeWOxvELCbRqOsGqNk9Iq3RqLcTbHYsH7xWfuz9hfNFzAiSBliJAK8A+em3pKg8gobeaABYu8SymX2mka3tK7xd2lt94JcJtXGkNIjxQJzYREPxnQY7hj8x6+XDISnrzjWRMH/NP6pJJ5adXjls+PT+V79dtsOHLuuNLnUjce87/bXHmJ+xBXeIFxtXJifXETXzXUN/42lxIZ9D9dEGDBcOlnCffqVypUJsmnDa0+GSw8UzgTq71cQpA8x3KsuNEKA37vXszs/dWp+jqyw168hKS7dIuRNAHWgBOt9VoqqYC/+R0/aHcwee6TniA1tdP6oxUkvA3DJ+RfGylbeqo6YEVm+FlyVhvuI+FO6pS62p8sDVLc7OEYODfGtvkl4Kzl5tMX/CmyZUKVIZqMQHgTlSOUc6RG57hmDpxUpZS9E7wzAY1hvPaw5E3u2vO7zkyHmI9uXtUatJrxoZf+JJ7x4DoIJMXTuc5Fpvlf3bhMV8q2j8Awh+juvGRRVFAUBXS/GRyuNteHzOhdpzPe4Dxb30YfKy6dPtMRSK5x+jIUwFfWh3MbwwS/yH1GSYe6RIZ4j1SggQ/5Mz6Gnnqxl2mgOf8br2KLgo87ZKHfgbJG0a0+tcE24Sj/xM5NYjRSU+GGcGZSi8Q8gso+2aOoHTuwC+x1nnvrtetMjOiothxCZh9Nv5yl1UMV7JvePHILSlTYwD0RMTMrpsKhfirslGIESDonDHtIh9SuPVQVniV0DHQ5v8gl8g8Itnt++tPJRMdkIRugFtf4+R9oyXd1Njmj+3vNR2AJktCfaOg5';const _IH='392c1810c6c1175d1a1235eb9e650b39dfd1a2c7582a0657bb9b29337b967eef';let _src;

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
