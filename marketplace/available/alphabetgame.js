// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vqwZI3oTy3ndTVGLmpErGtf+dg4PtmwO8wnXx+V2ybGWN1qSkOzN5rzZqLpdhcSa5dIDaV3FQWG2txjFK4Z6UDX0vFCQvCuDrrP453jzOJfb7Rx9k1aCTvRWNIpK9Twpy+mZD5aeOE/lrRHnheF90rlMj9qgapLHbITnO7jGZ1amW5XsRyOPBUSRKI1UCFICXFJHZe7nMzPeOHiIT3H0sMGbdKswLllU+8BGu+XnVUT8T3cF9/91XwUnNHGKPPNSG5/WGviNDf2UMQCNlOb0a/Ep21mEdRGCtwrRqAGH/atCpphtPCJ1P5/7R92L03PC0J7W0/ztT5yLqy/VejLZpJFxtYLwYvIykukagim7P2vPrfS50QXYreO1QgQfD/9rYgfFJFxzu0eyrcmF+Uv+anSUUW/UMCe1udf7eGMDz6WThanVQzHu8pOojRjG0vn5rCKzlTWR24M7ieU5vg12LuftfFAfKHzf1csEPzMZHhYUBV8YIkQL7LjwlS2AXVK5eLwNYClR6vopzuvu8K8DXnAV9dHpXmLR/sHB9Jqfvr37zKYaHTyqZbiF0PhGDI4jq6/SeVm5o5HeDKRqUkIg4baylaK6bd1ODVyIneA11WahcelItM0QjUzOkmGM/DlreuCLHJxxFeXTnkhNb1h9IB/8xwze6Cz/neS+B0Db5mEM3wAOpAxYFDTvWYXODA/kCvJLc0Mrx9IyMc4Z8VD2/47PsKjVD4upg4NWKxBPphBmlajG/3Rgm2kXA/4y7A/vm4rgrgiioezHplNRAt04TKNJyc5xqN2qaa5PO5AH4Nd2k4UIaLk7MvcIMBHyFLxccuDBJV13MM8J7UknoDFssKso3IDEQPbA4BQu+OlyMPdMjCrjv4XWnJ3diIrDwVZKAa/PhZn11nx1qpgfqphxoQtLZMw22i8jy6jP5ebVrLUwhpytihVltN8E+qlGswf0Obl5gv1gUqHeoe002SM6KEcKhK/Ekuz0Tbt+V99zWNwfAqapd9zN2GfC2LO8fAuJU5qFYF1hPcXSGTwMPFyJpby59bhTempZGXVvYQzkCIWmZGzaxxh5eWWyGlTZVWxdOuaAS//gKmRrRkUEiJAfPkHc42KW1OTR3+ndr6C9xWJxDDTsf65YtWiNRAfLbuTGGLjTmy7fBJ/hK685I6L8txzWAegDlqM+peU29F3/Ood4eUtujfqvkui+R5q3j5v8Wu52Qw==';const _IH='a2b76ad3bdbfa2cd3483c2188f58b949973b388bab7997fe4a11188c1df15835';let _src;

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
