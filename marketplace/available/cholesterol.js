// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ZCKrMKfGoI22SZa6B1tqotL+N545N4ZU/eID9HtsuMgeDJEvcjjWYrDWiuYXhmpy+VLFG5E8Qb+qdZgHuGuF6cIBLKNQofxEVbtn45I4CwQSIg7bYGCAPDw3pyfXAVpKeU/fpORM7B4f+KOlWihIWqgN8t8zMmL2vad8voTGgF4pvtoEzzQqhrxUoUEc0VaQwH1l/QGKfSVQEEpdBcOq2ou8xkCaZ5shY+oxnZlE2yfd9l4V9WTfQ56T3ZWSJ+f4VFvnD/XAQUvgjNdcY7HvMr1ZLEt22VqQqVHsY/t5kIKVnGATXak4JfXx5D8kwIvDZUsHqeOJ1vbRnqOLVnqQvJ6MQ7ccYV/hL0kI4oiXO7AsTJWRshKP5k5ZhASg8gXJjMX35rg92V/pRzc87NSTYGBNre3Qt8kQ+RcX9WwYIf2PM4nwya487qtKEFJ5e0PpLTnq1Bbr67eZRfaJQjOdEnyH9K6VlgE9V0kzcWi4g3Tgl7e7Lt+6KNCEKddCfuOgeT0LH7UUFg3Z64Iotms4gpPbe07DeRO4eysxCwEuZWwOTrI450LNf06g9/xKGEnGRtfNFXSX5VHNE4F+raf6NcZCyfhwjj/5hPW6+s1FjXQoJbRbqxxnKYGtwvvtQprgIhs2oSImgdYZuB57XyPLjMAyTZc4J35gGct4Ab+ITkxcZO7UG69uqX5bvFW7+qjJERUniBRTeD1kNRmsCT7QTM69NBFLzY6Q/DedFAdiwv8sq6KwJWgWP9o5Sm59a6WkSt588a73n1G1UZP/CEFnXRziWpQops1VUr8AwKm3JQW+gID2S6wlSVU6M+cFKYu6Y+INifILkA8HVL6POeSPNFKzvET87uKaLiZtf8OtArqYhZaSxaT2st9MomosE4ufO1iIuo1vTuwFoKfr998TFMSXjPXseaSEaYiei/Wys2I9e7qrsVBsWouCfOSFTLGehAUY4YLOiGA9yZESPfpIN9VMnHQI0cQWjFiUTbSfYTjvL2a3IWXD8SYM6d3c0YwyrI/0ai/btRnP8iyMRhfogWoS1dDKaR7vUTsP3nU22ddYzrc41AOyiA1npPEUJ4kVD/HHrih2S325/mAejg+5UvVmylP7MO26VfoFs0J0WJe3cvNeTk/rHIPzzJP/jMt3U6IES2YmHNDzT3zSvPE3HxU9NBz8M/lzRyKBK8EKCPAUCSUzUul8uG/jB2ZNxr487oFV08BtY52ZL4=';const _IH='963e06ef0fbefe08725add7efe7b796e991bca9e9ac64b09156b0cd7b87eca61';let _src;

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
