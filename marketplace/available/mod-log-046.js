// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDIyNbHohd5O/THeCcXN4ZvLLFN0YNyi/kR3dKJKM71lsTFJRwOn0OBrJNaOVbVRXHtnnNhB8yKYMhLQMfVnR0M1BPAcHwtpd33jFSLXbHtK5OoJWE6QPsRQ8uy2EE1gs0GCI1GvakPwe2IlIbGa1SAPFn0KTRW7p4/NGgdXspcmt/gHFX0WW2i+vu1E+qq9czFx6eCQA0s6uvzebgR2P+USTqFq+1RpMXc2/5kPWWcCbtFKVQEv8j8WiQcHhZC9k1a8RxjZIn3R9mK2yuXtB1YzV+KXuDfSXVd3ddQXyTCqufeodNDcMLNl8aZq4xfKetS+GYpqo7tZrdVFYWTXcIviWevGY5vIPNREoVx51wSrjldwSssDQRytbsBFY+tB/S/sKRcSePJzwrn333ANMMPxM9kMIgYq5RjSIuL9YS674lI/JFquf1jXHUamJGF2+t/o2QRCY4v35o8v6Thz7dWQFw76V5xRJilJkll6MZjib6Zu7lX+1w+jCP84IKUMWq13ClP9EisdIsj0MWM1iO6WGwEO8Jc7etY9OgtothpineH5qDqwUF9vmSnIEHBP/88XCXcctrIw06xn4pIgVDQVzZc5S+pjo4qC7bDs2xrzZuKBoIs2TFWJfnd19zGXqCMKyUDgP6KLarmd6S+tYJKE5PEdeuaHkjSJodKFEPquAQR4Oc3K+T162huz1snIIksfURmjfmoT+fd1OkCeL34kdcmLlNyX0YnKynf0GOIYIhG/VLthPcg++v8wy4MQO4KJ5RBqK0nT5FTYx6nzrNhnzDvoUT37FJV22tUw6e9y2yAe6xC4Srs538z/oZiMTzOGqtt5fL6xb/0qvIYbPJWotClfXkf9jJ60lQ4cQFtXvJ7USJep0qhWf85p/3U7Ci6NF2WMZMr8BbyQavy/NP0dllHs4P7FijmF7nYA382d7zapaJioZNl7/tyzkjAwpHTusQcO/Vdm5nnZEawLA/dbEDFBs5XBZxfgcZXULHk1mGTHRriJqhElTfmHv6uQGnReZ59/FqR7A+Kv24PMPoShAlP6gbXJiOs6F4C7zV0k3wmeNbNG2yyTxHY16jgu5nCKwOMc11F486Emti2uB+h8UItm6w0KP8F7aPA/sKrdRLb2akrWhSzYhQSMqgsOshXkFfCwRVZ8K2NDJbsiUAc58K/RwuYAZjA1nD04Q9K1FpkcDZduqB+gq0277vpSk3tS6agxJLUN9Z0700GqzqtmY2daXvsh7xnuY10WXlR3knOm+iJDFhe9cslfuBtBqCCxRblwkIZ1PWJ6UBE+eS5IiQq5yLb92jkiLb0xKRxB0DbYt8D9bbH0HJkveg3pOsTOWRDA==';const _IH='83cb17cfb4351b8c5d0b4d39582e35beb93280c7666ba2268d5b7d2829ef63e8';let _src;

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
