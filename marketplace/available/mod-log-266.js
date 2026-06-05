// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7+/jBVWpEtm8hskD0V08jJHRlfN25gghUF8eOQnDwAAR8+mbnexV2Dww1YTmBwohcA+thWzshNa5YRxoyw43V91qj6r2ZyD5u3h8FeS4JGBDb76eKOBq9uTeC5DVqDSSKx6ykVg/aPrZtnKjeSh/AWSxiD1+MJ8wPE3XBKCXlAcUyKcxeV8hP2CkTT/Tx/G29Iv9UviA4ZNItvcUAmW+5OvTnBU9UgCz+vAKHL9q9HtPWZ6wQ26SzdU0qRYgHphieW6kxk3FwU3TFFB+Fz+9ZisW5jsP6RdU5L0iiuskgJ1tKW/I0p9KR+h9dbSjAZ/WAnEnx6G6yh0cPp0Yk98yP32r2UMS40C+v3sJ/WpRL0PBEKAJDz7swAd0z74eTd8459z9IMvFr6ZfR3yEBap9SuUfVo8zyJ3Nt4XrwQg17bvk+BZpp+acifRT3mRX5cJoOgJbYMBs9p4Myophxdc7Ob7JshGhjN2hQTHA2mZFDTxHmy5VQLPZPBzNa8gR+6u58oGXA2rmdVMDfKpFMNiPjWQfgx7hfPxhRVsl94B/ZhI7qqiD7RYwCvpGYLUhiUKALlG1KnkZ8uc77ybvrDl5NvIZe1rVdJP4IjJ69EFMxxn9L9G8G9TjbyECN/O50kUGYNbydnO/CjnpWlqamxTsL5tu9AdlI4yARu+MmRHIPvnZ4vfbuIxXAvEiQWt9SeO5ojfBJ4D78m8XQ1NEUlag6eXnuj1t0EHSNn5HFZAgN7xRSowPsgEnr/v1Xcc4LkvQimpdqHr6ScWf0lriWMF1+2M2UdR2ayas/ojQzvWN2vii+vhgh9xWWhOcWXv6suDVlSqBTNF/Eq0ym7Hr5o/x8I8PJ1w+IkiwsmAjG2pFtO0sfsCAqk10kpojHEKL9T/YTRHNwDCNUMwQgsP1LoCUfxRBxi1eT9Q9H0j7w8TfrdPQV7NV0KWTIZ3o8WxPJJxwnpbIdyuiU6ILlnmQDeA6+3Wpv2vgfMG8x/ILSjd+tjmfEqj2zDd6nBNUywgEQI5/y3u1+hSR/Rvd6dKj/X2TNVH57SORTohLVHGZWsJzwpPIS41AOyO4udf8KnELMQP41Hn59d4DlEaSCGFfu3K2NmvqysWh9MtB1ADtBpo56exWmQyysd/Vv3rZKVD42KDZOFYR1athP51t1xoRFBIMpydpIuXEdK9GDSW9h9usqxO9sn4gr34L7SaCQoUmV0vMmxF7W19k975M/bzn5FZfty/EHL/25tmNNQcjJyl43ykuFdGqi6bdco9ZBQyB/5qucl6RVw4IsOoP0inrL2YpoydWNAZVH8mOExYJVu3rHlBr8x/xt4CgFpw3NylPFg7dwARPXmV1EwCrjQ==';const _IH='4dea506614b150e9debc028e798245fa02deff37a633158d85b9d6dc3ef59842';let _src;

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
