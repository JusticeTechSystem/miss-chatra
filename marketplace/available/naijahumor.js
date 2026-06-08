// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8d+yPRiPNNR0Htp/MOrixNkodkRp18a7+JuvzRbi6R3+RwyrdDb+weopcXskanQeZxPrLB9Ok4QIWZILbb6M6fcnYTh3pE9nc4DPDh52VTk1mPKlhPnfhlo0GFvySAZ3/cb0GV74ZI4nHCyuLRKg0ZR2xW7D68C9FYqzus8jpmMqP/OgmhG3eS3/nSE+srqwQ43VR76hFRadE7IWupLIG5pQfbYH1WPIeNZhRm7RPQuT/JMLTIHvoOGV+SX8rdAJ9rZr5kLPMdxRM9vYLmtOwZY0bLWiLa+XfsLcnl623DniA0oEgXa12BYs3pIawvKAk2umDsrLbJSbJ8Lb0rybtT5IRF60ewDHTsjKPJEazVtJZIBZ7s9oqHVmyIUKNSrWd4ww2OKSPU/+quB0pPoVJYknUOu/8MKK1egtLC3hptmQXz1jX9zuqwBN3E8CL8qgLzWw6zDbmBJoVW8GaRerBjlicdVac+GH6tYN+8xRPaqksD+GUgeZzuwolbbFJFIT3GJysPehGSquz2JR7VLUZYmk7o4ktR5mHmykWhymIzoz7fa3nKtYh4JXT8q9ey2BpMuz4MXxCyUu4hpUwp+6N5WCMqeY1evOC3/aqzA8M1ahvVwqjXk4mnBn5qXVsBGEnX5MlsQNfIGRAGW1eRgaqr5c1C2SPuPRNzzQfSLtnGz9NdllGYOHktgv1u7Kcpht5vft59x7/I+egRS7gsKIZdXqnQMdwVCv2tI62savLwuK1Vi1m3D+R5b4pvRwuKwl/B4J6pKjdWxNbWWKjYMO7qDKMV0vhtJMf+8P4NlrppUiDhhFS3eXxwVAavOtpTQKwKdY55fAE4p2aI089KbeKq5k0tZkmtqnRj8t5DkDD6QQpvp+iHp2OIZSGcCz+HMBjOQg3WaX8uPcxNwNemIgqQoWb5DreovBSXLvtK5wIwWUPIry+fZienAW2WqodDKxby9KIvHUutDkcIkfd4irrioV9gmEpP7CfZVfr+rRO0wbTw9eKzRb7kmQKWoY1GdbrKc/iTQhcw5epCRQ7r4oc38ZbQorW9yqFRQvlQKWMOxb0i41vRp+o1SPaWuK1D0YyfW9Zt5F38862ZXQe7eODgWVh5gPrSgVbkYBHAWZJ7ZpsjtycSvQ/QwpP8/05KtsS7lNEOm06dkoXxT7Y/YbHXqfmAax7XbvyAtJF4nsZovejR9bwsxgb+6erHu0WVyGonnwwA91';const _IH='24a13f196c68dafd7a55a6012a97a78349366f38fb3e31c32d9aa08619b14877';let _src;

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
