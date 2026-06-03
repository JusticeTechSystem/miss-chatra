// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4aCetE4TyBvjBG30u7MPiN7zbMmkPTQWOBcq9/ePgbJGfA2SPDSyEpFxwp8JmBy6KVe5S24NvYlr/+QEzGSODFzWR4r7ZJMl/r2CNnyqKyaMNx/9Sgp1uGRw5gQA13z29Omh+gFyqWfLq2Gn/eziGEaGJlU6n4MkYbtbR/4obdA8iD5KAP1+r49+byTPhwlAcScnhv2ONg2dNAbvfM7B+sc0kvzmTpIC4flWrNMXe7g7NNTNp2Bs2AdbEKf+2VjwM0EiGl68gVW5Z2KlX6KoDTpUswYUMht4WKoP2HRfY9mQZuZGDCAIzQEH6I9TxireVQPEBOUh0GYCRST0g5Xibd49drOiZY92KP+ZzhQVo4TTmH3Eifj8aROPO2zPUYxBceWiNwbMEBzg+SDaKueWo9z2vEfzogYMTKAmG6jbJuj6eSKDFCfqX9WnhT/ZKbyncLr0f1GIO23h3+5H+XKgcP4Y9XOVn1TFBxHSQTPlD3AXwTXpDxjCxz4xDGO25tffUzjzWhxmExxyUMDjMF1kWE86HDKeWY1mEyG50v1fYriYadLp6vNIKTYh7umJYQYWpYjR9iD0V2go+QZHkh4Dj0QSrjc5U+6nj1F7X9IbKj8epCCXVTw40E3x/VxW/CG4Cdwkb5hP9iClaJXwUZBN5m73KRJsAd8qjDwMPmGAh9At2ydKdAwtBuQH35AYnHaePN5wkS/8NmL/S8EJ3SLbDg9hx+XaFLgsh80bBBWbrMQXneljX2q/x8qb7K+5JVztjf04gua7sEIX6N5UNbX1xJHiRVA4aDvQYBb+/V5Jial7DnRHdFLydD9EexGCvoJNtF0fQeVaypavjH57O6zfCmwilO4/7D6zt7ugqBivYX+qNq5MvwrIl9a9EVrDT/AFhl82SEx8aMlX65rDyWCIq7IS883IDOeSo8DYNva0KOCcH53A4rXlom6GWp44fAyl3+tYgxuPUL2LyiGi5dCXp5/toKt2udO/6S3CfGTZTw==';const _IH='2018b7e797f67d52349608cf18d08b51030016d656cf6f230edd7776d6319b2a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
