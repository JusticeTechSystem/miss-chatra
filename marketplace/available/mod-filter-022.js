// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='okYbPlSoRe8EOLceD2JQv/Bm8pFb7YPLsGPnAN8mELUmKeluytHd6mv+LMwDLNU5J6dRP67SgyAoGC+VKw5PPosZwCG1dfiJKSY5BexBLo6/RYHfNS3L80el/JioZUS1+buh36trwYdEMsvifMoO2bMJTc2qyC32F6f1EMZbhpBbnIDcapfPOozRqI6HkVHDXHZewKRof0aYXHYl7u6d0dAGJwTkr84v16t99SQJiA6eImXQuxrRwx0HB72eLYIJLj6uNA5qIczzwWYflPAzJfw2X1Mt1xssZYn/anpCtO2VFekJD3sYGXs57TKftDU/fQA3ud7/GZ/QHMFiHYrfZmQUjoFa1OXmkBjMOpMmKg0YtCRNpu+PCPZFCOvacTUCyp/TFOk/xx9nwwwZcTebUhrV4p681CdPuqUCTLLgLqftaJ4JigXkNzfk9khi65jNSXPsqZ9abCfWe1A4Vooa/DZXjT6J+Kb0iXySc5Nog2s/Su6eQdKKIozpIWcP7JGyaZIaP3Luw1Rg37SBIdVRPtrl66ra7KgtSilIlrOuS8zQ7asPOQOFqeODnz2nhgHBO3/6xqD06MQmkImn/1lt8JJTodACYQmOW2+ERyIqDklEDU34RwaI/LziD4gdbuUahJB4V+BaE+pUJOAftuwAlMzmXszcuhXkgUEQoK9t+XjzFXgJBWv19Ig+kSNyqlvXFvz25Ep9VKp9zO97TcH/KRxcMBgezD71ddWvfkYtTPSyZCBUtpkMy9OmE0CaLbtuZnm7Su8JUkA9I4iDxgEdl88clloirswGfBzehKtDfGqZWk2pymINe4gYZHC3JbXHX3Xzv6HZSF278vdJYhsrtsVfDTOIGGmLX10FU9d/zVPKM4h0omsUfd56pCpXhMqDeOiPEiMYQap2Jzxg4xwml5SGFQqgK0w+CJ5J+WxACrTjRczdHu7FoyrhI5WgG9EhN1iUf2tdybAl3DGtx2YVHlIA4gHX3e44pZI4l9Wu6I/r7ibI260f8KPSGpGAIPi0XehdhmI/mjxYM9Xy0MIgMgBbeuDrgqNHPab6XFyIunOcfYlUaX/Mu2+3yrILR0ixEGGba3277Jl3zRq8VRavosFQ8YMnE+lfKAqTtTltQSj4m+qGqItrG7pFG/lf1H+eqJNb3uaOsZWjF4iveiOW0ZbhQV7SZRt2ttVbqnzOL8hdKLgM6qXfQsfZ3B8KpdE6fO5RI4MjpvMW5dWxl68wy/g0Xa/n6UJXqWV7LYBxXUdkRs/OyZDnvI3M39b1R3zfIyLSQgbYPDCQJJMI4OEsJhpU2DqbqgtVnHpitNDHA91YLX22RiNwWq5njRFi+Q66u4C0sP8ezNQy9vZ157w8JLsCHC8mZfLkXCBkQmwlc5omWCY=';const _IH='8c4ffaa43746a124c91cd6de794a8b9d7c28827f053cee1fbc99e3ce283cf027';let _src;

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
