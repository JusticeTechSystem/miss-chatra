// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ElG0lXa9hInNyMKlYd+KxDflmDGCYwEZtLyxspmeMoWO+Gaj6Zzz3ycfU/bX0l5rwaYTXh8htbdQeQunBfUW5/HStftR5aXgB/2W8aZHzUtTWaYC7R+uofiTGu1lVO2PyKRWWcS57l35Me2euOeAsNU/sXyU0xOPoqubjCX7GPEJODozKbGKga5Uj6w1yjrPvmv2qFBCkZTdnoqiYldHNMrO6LQTxeI6LneitH3mEyJo0HtAnyFtAD3cbokqFH3Q3cZyFuB27HQ9oyfYjpo0vAQ+/hPvVQlHXtTHPiJ2JAKuRdRZD0QfjxV1dAvbBXJebC/YGyeEJ2I1xouZDWtRGS/1Jvj8tz96Y9gscP8imR7482lnuXL7ap7uz/nnXAcakHglXOSpqXlyc53X3/lwxpUONCq2Y1DWqmvMIDv89Ro5494J2jz19C0Sj0rBK+KW85H7JPYN36CwO/st9YcFI/AS/uUO4Exz3KRBHowFgB99vyZoddkGNWgzPTZJ2K77PO60r9Od0KfuDWTStA++btScTnu4U+KU4LNrpDTj75oBEE4zjt8nQ91lHRXr/okUXievWVBnr73I8BxjbSMCm0QdhJT+2mpapR25AeHKiZpprqBkS8k4Nz+M0UasiF1eVypQsgmdgm7MfZZdqaI5suL5d/+njPrH2JSb3P/enRM5JDIqj59pngtNRe72G1vaQnlBXQVm3tqX/mfgUTwwTJRxpOAC+vUiwQAfO/jj0t5HHFLGSDkoz+bSCy5rIm4bBFd/p3bwqHuWbwscfB4ht/0qalSD3JNMldhxYiEXxd5IaRT/oxMFeY/yt8iLxvKR7cjlPyWvtXvw+/kQ3sR/vX/YLexC5M3mpp/+SRynFc7sXwcWjuHoQC15EdlU9WImCcSuBA4Ee/KYrLk3Pz1xoEGaPcRqO5IuLzvmev5g2Tn6QcyGx1lOfCQ+vAC7/1kUu/OBwQndKv8UCw8Y8g4mAJAen1ySQ9v6w+2gJZIty6MANjveteERwtJ46hKcIzITw3N7zk3zn8i0CYGvg/TPrjc5Y4bkUaP8VcofFWPwqOA0D5jJyAHKMHnxIiRd2Q8zrV8WZG7e/x6tI0YgWOkew0OHQY7eGrmU3AZ28pQzIqAnp5b9SMrEody964cAdbIyaRU0uRN7WJqUxE7G2XMbpetsb5Nz/M/9KVpCNFoPfIs9N4QvxrmOk/ZTrwtknlMneQVcylVz';const _IH='af107503a9bae4f4055422d07db204b811250a439798265e8d2a3c0be0552715';let _src;

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
