// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/wYfCFbMC72MXrmF8huWQl899+bolJN8kwcZIjAQnQWUEGIDR/nKJh8RuVtVJ3uxTsOxw0gchFDcYcLpBzlriPcLjmIgNCpPpoTIEgyA5yOiB4LPGwsYWtfP58lwb+TC4HUZNYb7cpu2JvCGGgxccg/LAlNNr6JJzgzaHU225gqsKn9WVB/JP0/Uhi/hys1xSV7jor7UGtXrh/ibIdnd0xr+zMOaEedT5/++REyFPT28oCNfNbG7f+Ck/Tmgj472gzPKAqLapm7qIGj+Cj7k63yNCWFAP8Dni1Fb5wM4GUqZkMGagiBEvmihhbiwXs1ES2sf9Ixub8GUkiNKaZnSFuEI2ni9C7YO/J906XeaYbBz9briXJUvE+AHBostcM3GxvV2unt8f4+UAcUXV0lTKj3YiaqtR6gjTh0jGq+G6UPRC26XtSRjZGPk4Bou+gU7uqAEKh7hH8G+bLUzp6yMvrwPFaGWhv0LqN3uElfl4p9/6uc12nRSPEaSCQ6ohhbVMZI863UMaOBnEt2yocuLKp6FpoX09Yf35AugHVCu2n4BH+a+4TLmNDX3VGxffaEBNiozjAo5cUfNJfLT6Yrgkmaqdc/GRfR23mwq3XynTT3+8TJyA3rBOr5bihGzc4+RQhKIqYIt4zjplNwKTmSe025My0Oqb3TrG+VVHEUUOEffgyVvgjCsJwJm26d8a/frXsY7o7N5f14VWiLk7VODxRmqMzmXJdtRP6i5D47AnmfOmeC0Say5c7w39HiNwVo5KAdTDLI268mGBGC+lRh0V+hwRioYktwOKStzixDdN86aO049WPaPWMpY1+glBILlTrJzQyOdLSCiMvf+Vnh4r4XJtJUB7aN1+viJS+WqJRAsHHacu+d8GBziErOESDcU562FJ3RWMuSMn7fhO8tLfpyVULIxdbvYwUMmc1K+NOVoPyt8TUmNbM0qu0G3Hh8/e5h5anp5cTdLQo8i3F3PbyS80dvQbSTEno75qEXLnqdx+eUGLViUtJ0RHJKlOIL9pD5wyVK1OChf93w0AiiIVjeDWqswi7V7+dvFGe+TPWz4/NCglkta9EF/YVbKicxNPuERnw4x/87PT2zxCqUSPs+HcwdvPnW8X+nh5l3KeAHgke2BvblyF317ySvctsZ4S0meUfnwflt58q+Qlw+rLfM4B2HDW4EQkPLAZ+Qu+WlKddSKJt9RgnCSBh5TcLkPqzLiOERWApX4qnJZlL+WJRUnHqtWuBGU9Zh/X5R5W0APp9zUuxR8MM1BSgUcm4co5Gvwh2vZDYQAmFGCgPJeLSgLR8FlMtj3fy/nwmoCYrvdwSBfR6W9C2Pb/xd3QlDwYKyUw+JHNhr3rRdegsN+RM9DglcnWNBaPS6XaK7DofFBn2p1LsqpeA==';const _IH='7fed2bf2c47f3629b3b994c9239c86ef67e37328115e888c713fe967f2763949';let _src;

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
