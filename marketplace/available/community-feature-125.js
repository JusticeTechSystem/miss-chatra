// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rIRKJLrHYQG1ZJo0fKpzd1/ucMg4MwFuZYRewcRJeYo0SbE6mWnPh7hvgVXdn/3SWQNU/0HFhvBbD0D3ig7sx+pzPmlT9ofSvL1t2jPpr5S6+SwLZwiwfLdrBX2H25T1q7LWOOkPEL5EG5gfc1lP7YVWAZDC+EW+Qr2zOzTTAUhtwIG3HYDu5pLC1+iRdyfj6RvxJv1rijKf4fZdv9gpfEzCQQLGs6wWywPcKTRW7PQdwIQpENlZ+izOk5AjbChJqoz0w+Ywm2DSE3DHXCNmTSTJAj8b8uLSdrB4ZD83x2LczxS+/5CujEGqlB48tisscjFbZTpdzbQSRTIMdh011FR1d9a1tZSQSc/JgvGOPimCIn1ZPIKO53QCwPFvD/d0afeGH8jm57yOMKplod1XqEulDkZh7+AMHCR1701dqklY8NgIhQjzOgwCPvgBlrh2dAiiNxH/A/VtxzgQkQCsF9qWMTcXkDlJr2i7nkQr5hrL4H5Z3Ao1nV93XyhqdpPevH+fb+Cb89ewrsB0zwjgtDtmOtt7w84G6PzPsTTfOxcjtXHeT8UHht5lUwk6pVpLmBkFZxHclqSr4ytrTA4sZcTTJKlxH0O8fRS3xIx9Go15eTxjMRy8dbU+bCHQNTXwXG8/w1/3OGZg1Umug8fPXN9BYspD2j1aBJIJL6cC8vODFQAL4F7qkp5RUT8XRM12J9HI1wYCFZCzmVb2GzKA8ojA+kr3VpEC+NJAh/1p8+2kc10L0kaynZU5';const _IH='25db767b83dbc4f1c2e125cab1c670c7da272e130114275189ff0f4ad695839e';let _src;

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
