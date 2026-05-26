// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O0BSLy+r6im+d2uaOF8J8PMOARulmehbxnlWs5LenfwXUkZcHk3vyPz4auU+MhnGTVUK4cKECAtziNjAFhPXK1M8YYaTQvmOzmWmOaWj9ItlpBTeRjIpDrO6Gfr8tmBF0PjfGGUMHYHki/W5rz7uxcmXd9hFdhy87EltMSEXjY8ug3JF8yqaBTDXlQmdI16QBo+PbeC72a3UYu1mzhf92EH9HaBjqBFzOvtQRq8OOxP+wGbieqWhntF30vsx6FL9hdqmBuegqUOEj4kZxehi1VE6Sy+G3lRHO1FuP68uw4LXnL2Gcovs4CtLgS4NSgn9xN9E5hz1GcnXML21saA/NKwrCulzSsl70TdZGXc1Kz+/tlZtv4MDkjyD/3rllKQWfqsX9QzW+cLyZCwwYN2z/T30908eQD/r+TV5n2cLoUKkkV0K23nqejnUuWQieqw7l3UjM1WAvtqT93E68zHdptkNDWTHQT7l+rcQU+fUASwc7uA3NLGbx/c6w4/VaYt4DdcgcxdgrlkO/fNs5/hRFSW4uBxPdgTx6N30A28C8AbS6zFaT0IyhyuUlb12g2/9oKqm9dgOpJujbq7xfXuuwU/dsmNJoZFlIWriAD/IdnzqEhUrSUUHKBFTsa2D4oD6R41BlfVbW6Nd+/6N4wFrwIMO3ujefQmVYlaPi8AXO44DgIS7qqUjedFKg6U8Gy1q1CaOr9Uli+aQqAWIvATALlRYyott/WEw1zr74aH31e/T1q7brTLU4QNIrEeHdZJ44cix/FDlZpONMhvhcwm5qG+86bNEgJJ3udProZ1lwvTDld/u4IBfmd3uX0vZKRLTWvOsK3vIOKuthQXw81bxeYDAwV8EyHq+4CiU8GfjT3mPAJWRKkSOqw5S+UmkBkIfDoW56Ms80hVFzz3u5xrPCRCzAVpQQR+4sy6Ef+L3mAnDFKh4r/cHNae21RXqYIA0hsl8At6Og88S9/RNTBFULFY0WGvhJZYEM8NxOeGtUhS3xnW40gUdhraspqEIWJJ4PH01kgopci13uf+oqF8on0lDnW6dQm7sPIANTBIX1KKti959BeVMSeDBZArAu8bieZAI4dYodbqeXmbs+nGNn3XQhPdzM1RbK2yqlC1hEa1iMo8vA5G73t6+MMqE7pBel5QOhXaxVGDRv33hb3+VBs8qHbcQ3GM53jy1w7KjTsY9+WxIgZohLaF3Dhk+grTtG4JlCkTlgpZQ73zhR5lqXMJB1LVDcWl76+9HdHNjdItnRaMkfBNRUtUQc5JvN7hIqy9we6oU69KMnQx/pMgtsLRnCrWusakj++WYc5ZQUbDVvE/BW4Cb+BcQEEFOvrYl09ykrcxwh7SlPL9S5/EYEzzHy2I/gXlR+IpeUuVOjHkmY5XO+8FLcVH29tpQe4NYq1+ZkMiD14emF4kK+vqEpfvEMfyVwWD11nYw0/hD3gnzHRHeNNn2NdIyCTz7LcYnYBj1MBrQjM94wJ5C98Ig36sn5jtAiFxDjSNuIuCgv8uZ89wUZSTNLfh43iOZNVfpZ1zCxRSH5MkZqUiARB3ZV4zRbs8ccfkMj0cgraoOJiAevtmaXf7mJUZvJaRE71t54e6+cHrzOCWjWX7Luv0I9db1sQlkIEHM68AkOahyzoKAKhjQ+Af4eMV7MxkZ+hFGcRrnkkODvr6CVg6J+el+fvjRbhol3eu++W5YN/oRnZ9FUfS2z5GdjnScir8x/GAZCTJkDnvfHSxeU6WrUwJH2Yd2IWQtPha9YyJJx9trXdtVxio2EdnxwamU5a65OwDtYf56fGWkGvguEN57UxlLHZUmu3ueKYXHowzkaJUKDvAGOOY4TegarTk53BUmsiwMrFVbracHvrBEIPCUHvpG';const _IH='0717bf69372841460a997687bc8a0b1d2b5cc415138c046e73492a7c3551cd11';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
