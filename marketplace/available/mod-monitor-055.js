// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LucqdWSCjZ++dQ8lgaEBjbp9pKC7X1zKR0r4oDlmAYCrOxMP96SjCjZRWEzE6UoDRv/r4X82NBEAnkIOlhFEdYahnE2Izzg2U//nzPUuGDMsPYbop6LIHz22WSHqNujWgA9Si+iF5elg21SQwhS7246YO9EniTI0bXlfL7jUu60zPoj6IfMzGV58INCSdtBk0bB9i0kkUjPleRFo4V4mpLFpepVAatSER4leMmqBgbw1t6MiEXsbgE1LUoBOoQrigNFB/XtpuCDp+Z4MYnY1IS08x9eNYd+HEaf9YlMEFY2q+Nb6LAvSoNXPFs8WxifLxnbyjZ6mltgUpm1cjwvKn1MmizivozU5eruhjF01ZtRVi1hkNtDBQTPkUB+AQcifHojRUjS+P2DsN6J5Wf5IuwP2b+EWM9u6i+N13KON1mZJEQJDAjPqvOztjvxT7FnH4AUQ2J8yotlcQEQP83fbxkm4frJo38Wlh26g3/X3o75je0zU00KNuyULK0KOCrNA/3wBqzZiPbj99JOBr60rtfOctVZeIX3YUMhwEYqlaAt7KkbHh8s8vw7mZYge5O8CXY4zXxQx5vHwrsrxxLl7F3XSYfumF5FMnHT27HisUupNyn5RmsPudYHhInXSFucSkGA1Pd2Ioen5lvg+p4wpuBg5Owg5ZMcADP8SR3VH/5SelJUi5flDwCYw9g+s/876SPKVl208Py9rg7yDJams/iyw+AKuVZ3QwvsIctcYNO9PWr9c4s8kH/i0UVckb3L5+/zLo/bDsAYwv4qsJWWeRoYKn0PVgjb/Pe7AvVlyBeKL/hkajSD35CSgoZx80kB8P7MeX1D/CyEmRFVhnrDVZHSI5/r1mbT3Ko6jfWNeb9ki8qqdIZJ+QCIpDf8IcnMATK6OQEO3aEHkdCkumNcVHPSXAjK/zAI1UVgn+lBOlCqhP3CpmhhhFYZTMn+/X6L9koKBZdHiUba9P2PXgeS9GLUejJX3kRMMaYToiOYvpNqSaskrSSOL8nsngb+F1nqEpJ8QSN5nQZr/FG0CVzRowG1/D1/qgYT5IF6XXYXSRYz7mmv3ucMc8fAFPozzAegLQ8UDJGHSiSgeGyprFXV8N1eQchb2yBy9TfjhQ8Tpu8HIgfkHWbbXHaR+Rs5HKvgScyVKXPEuKtrPhRnA956FAjaKIDyIgK3KTqfs26WnMBuLs2EQhSFCzp9HyyzkoClaq0FWkZ970apxc7n2mfDR5BIZhdfd9dm129tKyrKLO62DMge+qAbF8i6cx3mujK4pIhxS9MnYeMCXNlbj+mXGTSvhdbstqr9JKmPp63CX+f10XcNJvHr2G19BEcb1q6eBNK+GS84tM046eoPMjgt8VBk94W5KJnEqv8VEMt8JYgVVrxTVj1yItdawOvq8';const _IH='e30b0ef5ca15cc0596dbf592c6d69263d4774f65a3574c22f86955377a0490e7';let _src;

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
