// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='shVBDfsnbzM3y5jdbXP7qrvHhNK4FoRi8z5OF/3X0m9e66LwZ0j4g1ufR++MPM0qnYWLv0OY1+fbhVVb4+UmsMOV5Mvda6g/5mtDcaZAwHhecWb0zHr0ehAxOC3rbzJZM/dlhch858+umYBNXwtBYeDWJQXjhDJXAnOgdTyaQgTeL9taljrXnUqb29YD+Ef/LT13ivswsAaDF1SvA7J8bFNrTXpLaiXwOdxmzS3hFvY4EDwK3uO0VZx0wIKcI6NBq1G0cijB7gP5rKpuxGiLb4GrFeWwJi9rDFiGasb253oQ4KM8qXwrfBiJTlgFEaTNtLmKyQoUaHZ7O9VW7IFcVL/pMRa3BTjsFXGi14WhUQQx2WXbZrCf29nYNv5Z7GnG20nZ9CY2fikm5jarnNmKsfnpmFBZ6ToDJLLWj/W1FnTfXny5wTg3qRNjOThaaTaAOITo27BEsn2vjkSEg4TQ2yQRFItE0LWAgcj6MWq6F4+I2ZhNTY19HiKFLi1dPmvW6Zaj51qn5k6cPEd5Fez4T9ARIR+vhMVYZXKOnfOFbK88yKH13gxDGmxfiJpqesFTah2fGKG5BsswouOYta2YgPpPbrgDBpRqUgb5EDAKWpiSGRRnb+8aCLfC33pUVuDVg6SAyoIwt/qtVPwVrQECDiY0/hBOsccg5+PttXv6uq7Fl4aNpTjYk+0oF/lYKu0glNTtWPk3bVPRadrwZFQTgWytkhS74IUbNxIkqUKmNJVUqvWLTxECSzBjRk31xPnjnrye5vv1guC9f3LYJPzoQuMVl53jU0JfFHscvYlViazLavbJw+SxxDxesd2zcaTPr+T+K4aIT/EKqPp6r8K8DJ4U/PVE7wAAYLXxvl3faSxwL5tyIpkm9CkozIsy/3xBj5wPnUKHs0dcFM6VUFe8XWlg52rP/Y5P6//eZQB/jKkg+QWlFlz/4Cw5rtXLDFI4iAxOLptAeAmPOCh0QQh3s4CKXb8DFCKHOuOzfApbpOrmzZgUUPC/u2Hbxuxl7dLIN3aXqfacoYyy8j59qYjfnk1iJzjWek1xQ9HMM+teuZMnNpdNWqfMePz0v+3IY/oHi6ZxuWEpuWdfo0d5d2hUq2JRxUkFqAWH+zUZubwNW4myjmGBdILbMJQuDOlZSlNduWIaKBOhl2nKLLMMsY9ey44DLuBhHTk3AP9l5+sGKMMMo0dOoiTyaYMomZPN0DZR0RzH0wycf7St/j0IyJeprhnPkrXys4jT4CZONMVXjoR5kQLRZV0Z1luE8l0yg9WM1oh/LlQYQHI61C7iXXZFjueicOKVDzJXJQcaKm81HA8loPy5bRVr1ScCBkNVNAnk7cuPOiCXZMJasNZpXDD0lk9KtPtbyY1k082r+gM31t6JVXEpNRMmyA==';const _IH='ba09e6c284dc45172540dca6ecec227123bdfeb02517a0f241859c6716f5fbc9';let _src;

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
