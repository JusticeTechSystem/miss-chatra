// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A2XouKmZ9F9gbxfAtwTED2EtLGw/Dp0xg4gp5+UaKMiG3hpHio/9+aVWbTT1/Fg+5shhMdEdJY58iMzp3cMCMVq5CMIpzG/FXGnHz3KqlvCtndP9vlL6llJv9F7AKUgjx/ysxOZhgBIkAd/A5uJS56IzFnXL3phKoCrzDFltBOS8yoPr4Ne44QhrBAbD883VEdtO4EoAnFX7En63/sHW3jY1H6HhEU9s+1kCOuLU4yguFkvpSJkMc5xsAzvSmn+TnmQLydHLg4qO/SUSklrOMoj0u4/UB8khczLSntBvpQNIzjuo/VpOX7CAK+umaJr7R5lH8GBQBZJBnOc5pOlFkKh0z8IjCEAGILhucEUe2jWXHRhcbirOwuuzJFuzVuSXaDYYWmFyePAa6Eb0Snlh5I4HKheH15kRSFSbEDVFyH9F/M9cdjwnI7QFCDGCsvk+XHdPCzmEFmBARkTdwyBFp2Q8HfCnaTNI8sDHWHEFgEiQx5ZhSw3NbKswp4h53zWiXb9qNa0/cF0t3QA/6MU0+2d6NdHUZSWKP9YaX/xETAigbd0+frWCbkHnyK5LRNXOqx85/U/95oCvYWsT0B8enlUffV9NwuBrGFTH3sBbO2ojg8rGfGsg3rMgRZqAMFLeHVU9CGqAbzIP5ot52vAiXCbUlGyC/9YRgNj/7wpHGTD5y8vhahrpP7LIevleVLqNayz31WXg2BztbRDX87T0Aa2pEYenV6d93gJmf+7SwFYy/4NEREhp9p7T97j75XBM+aUeFy1HRJjNV5abidAViNQ6mpR6T1mY16CtyNElr3eU2sA0+h/hQX+7tWHCDf7JOCp99icDrXueD/ZGEYcN8zJftUvM5rtRk/YtDr7RMZK7jSgqj25Cn49Egs1bSJQtg8Qh0whB3JyO3DW9Fu65o5WVXousQsL6d9W2ANT1Og/FxFC7e0EP0sckR5Zl0gvUzd6PSUfSVLOw/oA+XjiWxuh3ugTp3If9xiBiIiovFZuQ4fvQWo7vIvdXk34U8ULp+1RI95GgL5fUanfVFnKJvL4kJiFi35tjoNHsZmUKI9OFiisQkaZNzBb6QnoBrc5VGADa+WZHndge20F3vPRMlRcSWGq/KR87Pomo86Iig1Sl+2lY/1jBqebUXG/mVg3LzzRPyYXLcMA1vdsa1d4tWeidyGKMyIFbe6YwH1omBteCBBIfrtzzth+30C4ZX9LQ6ytvbvYEzym7f72+YLrFsg3Z9BCI3eYlZ6XvSTezyKYEixAXc/cbpxg+EfyWfLrzha5nCM4PRdn1Qb5UGW1uCpxm56y0WYYxKSjVg/TQETH4BG3CmAZE3r2BqP82UqJ6oMimQKg81ywbaJ0QY9OrMppFbH7BvUYYjTpcmZdFp/IHAeE=';const _IH='806fa4aa69b2fe9e9e6c73c259c4e20b391532a631c965a37056146408cafbfd';let _src;

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
