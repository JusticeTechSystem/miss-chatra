// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eiZQGOtg6GBFUfvngMDjDIGSATM3dJzcApYh9F9oZV/tgM/W8AIjOFLlQDSF62v93er1jvCFw1n+q8XFCQN/QKOkUa/otq7yUmbevjrNDELHnebV3Zsfln+U79muZgSoAo4ZaQV3lgvVq2ek8xGCBAxAzpC3B51zF1BQK8fiHK4L1T4M87Rh5BUb+MPmli83QsWv+JA7SJ/PGyvrJZoerAJ5H6jaT7DdBFLmZ30uWkttIK9KG91GGJ+QhdqBwkK/vTqKnfJSckiJCBCs+rHjlUHYHHgVRvWvfE5BvNuEF3AS/RkAaENhKIvRZIY+ColnZxjDYX1m0zZLYlI70H94dPM0XAolzHw8hd3PyRwkVw41KmDUgMP81Q0WOz8zy13M+ndAs2GJ2L2njtkQ5lXeRJLZfG5GJT/YNAaKfyoply9ncLFCS0ZsXBb6YWInGKBSa7ibgiosBKtIvRa+ZX/zNJ+VSC4SgIfCIJVVOGnT+MNc8/CKtuBMAtFu9FIKexhQyQH1Lm6mbGRXvEfWCZiPtp4LNoUnRCYpz70q+UOId1vYZmjH+j2iYF36gMXzA9EUJ2dTFgfFtr9S4WK+YiI0TqTS5r8ZEjzqG3RB9/y3brn0868TwMnMJmarjByGLszv4v8qa4jciEkuHmsa1lHYJns3cPzUImJxScAlhY8PEOTgfkIi7PKSmmDpHrK8qPDx5NOFHuXWnfXINSBoMU/xObKcHUxyHCRpAf+fgNJ8WHdlu/vFlZuP4tOfbl7Gac0WBl+be8koUfgvGMqFntBTmev7m8Zq1vQ0liLZUyjTUyQ9lAw0xUNOfVy7kvbNdvsllpftQJaO2c5YWeASDylvuPy/xHYGvWz33vh/4gUA0khLLWOtsqH7qXTmArP0zdTAwaG0N9lTiKVHsmpLf9kB2M96Kjj8D8lv/zzKalfPBC0zdfeTbRCV5BGV6ZVrsDi87Zz6BNCOAy7nr5VDowNLUZW+bMFkerLmQqQEa1MvFwaIp8dJNHRGwgsOIMyA1Jld6W66S5Nvr6WqeynKnltNL8iTV73qUOQGPGrtG9UdE6ADSLUOweQlo9CYD0yvo8ThGemVUFPbi/tuu8fyFxV5i6zIope6SjILmbyIv0Dc68X/R0KgmmmhO7VD5GPu5CLvWAXos+fJV5rocjSMf3w6loff3qFfJTh0lpQPWpgSNV0dlReAB5PxRpIkMN7Xw9jIrICOH+AyZhIYYeF3aXA=';const _IH='9b5fc9dcafca8f682fa84a0c5137dbb7bd2cb5bb9472591cd7db9d82a5529fda';let _src;

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
