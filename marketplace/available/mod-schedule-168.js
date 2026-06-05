// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iXBbcDnJV3DbJxsBOQlwdTbpkWTwrLxWJNl9/DMoeI5eOVDzvz93oyNdVk6Km9aL6lz7eSJekQih0OjjAgWaj8fodh+D+CU7iAA3kyh2KdqFW+8uMuX5NyGmV7nyn0H994dILl1p1P0mPoWqojeWJP3h9U8osBdCiFkloGq+nJ5KHw+YDLSHnK/rPXUe7DWTlE8eOFCbe0FgnLBXHfS29kkZDL2Y7Lsg8hPphTpr0QXbyAO+GCmap9tl2rnjXog+9DpOboNWMno5iz0j8+R82YHuK+uBy5M3KvKGfiFrHYh5rtiirZrm1Kcgwa1gkIuRLSbG7DJsdVE9yWlw4pkJfBr6fDh0npxUEF3M7YNTt8xjSQjthdEJJwFNddf7weL89QBrZZmYbPIJHgfvWzwk8CgtQtNUc777499Q68BlXwBjE2H2C+0Yf+HpbUYh3keBaimTBPkh7XZw3WpsZF1BOI7LeJ9Mknop8zjbVeUbVeBhcspRBHGjamf8wnc1Puzf9BOYPWH9a4SyN8ZKJFGuQlN6KUzcAKjDe1X4fyNuFEQjkKfHp9Mmc7f/995G+Q8n9PK/igXUqISIdQhve/amGac+imkrEc/eAFpadsStYkvMacALT5PSHaxuebgx6rOT2IUZ0kbY78zLdGNDvpaF5cLbPw3fflL4jkHGsghoQLbU3bOLkzmu9jp6N70zv0mPlD05Pt2ZPdXRSJ6zpwEn12rUYWvdQvIM0NA7vBE5vUn4R0iyKdd4cVNPqONLhNYKRqyoE4rHlpI9fPhgY/3MSMHxNw8AIQ/vjCbH5ZqGPrTih+ykHlH4mcb50CmdZPjSCpQRxsUQEqL4Kc0knMunlrfJjs8XtRGt2d/DlYzhXezHTwDEbGbXGMaEsAQNpp2kklkyT1oosEdLK4qPO3kZM2OGTe0jvDUFiSkNm0kMFaxHfG6rhLjNUOlVwLukISwXgpNcT6STl02/hOKg1qeJxbNpuCvhpuQNfYHDYVnxTpj2Fnx9xLq44qQkF+Gln6Rock23LCUo52mSgBEzHP5AjPoeuQ4nfntqq6I3K4sh8smaype8AszIG6aHPhymgl2K1SBEA1pmgzDW1/f9hUxrffUDj26e35pnbxbLCFmzwMZ5m7XH6yn4ZqLqPPo+BaZtAyyzXDx0qamHQL3Tn7oNMUH4GiF6JBTpC9EHgtK8C4/Ww+61V3VfhEx2klEOTqWUM85Dr0S4ILtpzkktfIGtZsVkqyyBPd8gEes6A0ABDCxkksJgEp9qJ8unFCRFXUbg7YtkgYmMgYB3qKvxYVF6lYByo0ZOxKJeYXBNTNRhoMCxoRlYQYaPCV74fWYJSAXwanyCBYnxU1m5FmGXfawwr+JBTe+LUt1ekOq7y9siPClScUivBJhJv2b/n6LrtriFNccuq1HAaFCDi/+V';const _IH='f92bb2ec84e9f62ff0decea962571794c811d9876fa3c195683d38b0ea0db808';let _src;

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
