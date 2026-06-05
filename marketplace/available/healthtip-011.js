// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='STwfzG5kZu5YkYFDmMViSV4XdnOr6ENFVWEUoA8pEk9vw006A5mYeNXg8Awq7toNh3xGxVew/fRoFyIKme40WKGTlO7cy0NHXwhIDdJ+yjruzVLY/34qOFO8R7RzBRld6rYy8JvC/+Esus4e6uvkaVgnx8J9HONKXcv6mhBtMOQVbtDgaon7oVJsGiwmERoXwmS2j6S54piqrCMMHPsgy7Va0WGtVwdmo69j31mIp28QlAWXMpzgXrXoMJ3o2rE/MKFpx8bnJ4WQ1lu2lJtZJ7oWZf5CPuWvz/yt7mo3BJV39RAtWqxnSupfcIjs9cq8OgDHOsF9th/yblU2xSauoug42Cd9RQA3gPhJXFm24DeSSnTZxJDYqb6+i4qoQ8vvWn5bw2ECkidypeVHqe69kZJM2yCQQBjNg7H3xHjhv6NKgZ3pu3Iu5W1DhfYnwAFGCRdc9MzPnwa0Gr5mCTs8JqY8tCLnayXsQww+CIHY2No3kQANl9AlgP40HODArPlWp6TrdubDbzEUxIu4bu7+Fri/5Tm2VyCg3XQDKK2UjJwkowllKmG0ZTVSzQQ8JXEV8IV8qpQQJdWkdUmaUhpkdL3UJuHWPBUGIERPtaUAEN0JUkBeCflN/ZEo4KgB5NMom0SK2Dmdwtswws3hvscRmBrakvkjNOez8KaEQKVjc8VAxierssfY9X5/akqKg3ZGCm87bCIRl+BhTZnO5W0Aq6R2r5D5LuyStIXfMTZtt7GAgGo2Ew6kccsrmOqEfhqEphJarbM93txZfbeoHJmDVTsgwCvIxaHU+oZuD3t+8ULVqTAQgh6drq9rQoyGSD9a3b4+CmPy9eHsZw3uJo2NiI2X9Id4hLsVt8SZv703ffdVFRgSvrToLRI/CfgHYMsBviCM4PKof/GNJLQSdSyt1TV4A449zD/EbWag/scI17jfwfW9cR+r5RE5Im8=';const _IH='b505853385b5721e8c468def095f4460f90993e94742d2fed5d9e3d90e73bc21';let _src;

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
