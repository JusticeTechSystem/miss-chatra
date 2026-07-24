// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9ndxMjGdZnhVJYcvkPHO3IceT7hndP0LWJq85StipBTpDYhPM2WCPtA1Qo3CIA7WOhRg1gNJ/k0cR6Mq7sRZRduOtIyH322q25zEn+mF7iGuwpaohh4ZqkzT6MVooaHy1ec0w1t+lY2dtKjr2FsQGNbwORDahkaNX7Q95YCib1OsWyLvsEMAIzzOsogPmbkSyR6fQiPLwmLUv9VsGFDTelyw5X8sUPdDQEt2vrSAjNOOqMbXALi1R6h1KO+H/1xJhjJSJG6KkYiGwteKQQ6qMx4ooGp1oNN7b+ChFZJxKVQcqWlccXPDaSJ4YnyZ+04BHdoy0nFqP0AUf1THdmOwNdiFXbWRaQ9aKtg7ppEKrdZW0z8G+LFLGe/5ft3ZGR8eIHGZcCb6qwt/vlz910u/NEcS54BxFu1wGVHZDBnwS+U2oX4YO77rQiBAQJuzKNYbMPR0TnfsY5kIIHs461ImZr0EGdZX4oqjJxzDf+Ia0smQ2lVzitrIa/3HlBjzs586KuXI6J8wiPaSXTuHpZRq24qEdXeGGK3hf+6gHk37FlHjNVNygbQQKEPN5NqcMuG2zSzF7M0rRpEYUnTA9qsSd8EcvvkIcP2RG5EcsBh2aWABKMlQYYo8CQZH8i+6amy5YyGowH+Xwzr15kTdnNhcOLqTIAva18CCpY8+HUayCEUxGY2EBCjLNTO7Xue0YA/1HsrNmjcbFtjuirDtGKP5+LpcBrO+7CkMcuH16MsoE6uAS7Mvk7qv6Y0rypH+6vlBPHAUNkPJ8M80utBD/GJ56WJcwmRSg046DLQXJLdW5wN3kfDVFbDIM8UPVEoaoWH6Th3aFAwMiTWYoBiYM49MkvvJWYnPE31X6MVBZPmz4Qlg2xz9yOfuJb/33xHRueUqEwQ5qhStAwXxLKhSep+NI+Wapkner2EQN6zzSERE21yVaJX4uE0BncQKYNA9ZOveXkONUI3MfcPCwnoUKs7X5+M07HYG3nc167pzBhDWkOLDPEGLcacdbaX9TfEaji98G+73R89E8ke2j0h2SGgdqj9GE0ogr8C9pIm58YiO4682hE+zBcz6xhJfO27bMLD9e6Mm1a7AUMvA4Bnk59CT+brECFM14J8wUwC3f7O0rAKg0+85pXrl6oh8yxAUWuJlaVbODYz6R87+vbrc6W0HLkoY1acehyjuveu+0cbH53nJ4Ie3RzaPuxQBb08OXIeAE87E1JAf4Xdod804SOjGDwsJNWuAqa57PbON9AXILx+h3a5EjRsd7AlOfkDIi+8H/E6OVdO3AEj1docBoByp3eoCtbq+nSzHIkZfLl99PDr4Bk7+TVxfXXDefEPY6Fx8GTKTv9ik5maoFWYbAxFUfcjSBdQZoapEx+1YkMH8=';const _IH='f429050895d4e93ecab739580ab356dc41b1034555ad100870771b70c21e8a4e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
