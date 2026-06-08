// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G/+oRwYVUr2Y0xPER7hTulFvvrNmicw87FdApsDzJMbUc6WmxYgm/ilhj21HHBzUeSUhpiYrKXuLskYWwsUs9ywZfP+nlYi5Fp0NKxJEygnSc7qCh3ciBHzNDEiBCzulQX9c6HiV8jInBYyERPizEgPLGLNYYjFUDiEr8qtQkKscL6QDIVwYLdf8dGNq8pWmSq01rDzPhycAFdldNZH5+tP9yt5TAOzyz1K5o9B7bdG5YRBMMBB6wCM4k3PNWPTp/prs0BXTx4DQdO4XX0vFup8sPRJF2xO2Zm378vKBjpmz2J/0j1bdmfxlRzn6AUdswfqQS+1f4XK0ibBLQs17spRBD+7gdjafi5N7ZFhwhZ0BzfedFnQ1/pp3nMxqkpD5oSQW6iPP3pY3YGuodJotONeVW6GlwLz4SiFEoeJ91HzCn0JNRWslq0sAlcnOOrbI8chrixSUAgHGUVgY42WaYJdAdlWXEz/JOaICkFuTJrPYMcgpLXzP9e/ucmosMG8ylJH/L29hdRLSLnV589oNzLlMfIqY/XCkMeqx+jeNIxeGQtKAgQKkYl202zUnDAsaaJCggAuoryQD5SXCUGYvWWUKUXrgUEQ9SSDlS42gcphUIX1qHTpOivBxMuH+6VHA9l0fKJvR1Yv7oYjFalCP3Z8CSh3C/Ip+OzYpqXFXuqzFp34GLUVTb/86aTyQr/UxF8tLn5NL5F9RyjzQMmcHiINmg0bdk+/Xz5gzMo6ijFLIMTJ0AyZdgdBYFF5ntlmgKqUYMcP5MU//dNR/vfOmultVefcKZHDMZL4QGVODwFJtNvhj/1LgcfW6CwL5bdPr+GogY4EyqIAWsVzh9XTT99dKGMbHuCmLJc6dniN5rb0kaEsUSa9l9gSrh8Q1EpwipCnkY4kzrbJrl+eg3gw2JgWkigJaNUNvt8VcLDjP15eQANxfm8r6ew+5CWz7fskIeakVDGM3iSRRVm5xdltByHa1+o05+NqA5GKzN/C0ayIUeaqil1fwXwIqGER6GMVzodprzj0jsY9/zj1IdGsHG6HJTk1W/XIbqsut4FQKExrLagHgyfj8MCIb71Y2rF6C+fXNs4aJy52L9dhnM7kMT9SOre3VH9WE5WHakPCCk3b90/0ihRTvndMxviYYhLLlCAssAWjD/HTROvQUujQFjc5fFa/1tovVpZkivu9bCJyE7vnBvtuE2NReIkTQz3gESbZRYG0VxP1Kz6TEtuc6RaSFiAWEj8yyYDIO8xp4heCzth7HIW0WW2cCkdPBiAr4IxNFE75bWOcmfOohfDflcGvT4aBqHtfCPF6jtZxvpL2YXhJCTFh5iMUbD9470+zMyimgqfcYcHxDrVusRX0QEuEGQ+vPRErWdtqbb5ZQI2Q1NHrEP+k91g==';const _IH='a6aa25e2418ea71db6f6c028b3e024c7e046bfdce6c08926d68de305500678d5';let _src;

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
