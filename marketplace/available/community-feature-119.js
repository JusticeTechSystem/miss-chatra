// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aUsKb4aIHGnHx73OAHBhYsd1oHkrl9tz6otq6Z8GqIM7enAuMNfaZvkAHrb9d1Ai+tb31M9CPzLillearGz0aVJe9YFYsY99rR5n++ft8ar9Dn9xQ56UMoinaUtS6MeWdlMDQilQ66gJEt4SK0MHKxJ4vIEI18FQBXEDcunk/BS+QuC1IpgGwmF81G/6JOSOdfauuaYVvZNy5UK2zWUYf7180DXureJ2ID2rLNvIx3bqY6TQ3Hiow091x5JyaGT7g03ZSddTXZVBPZGJSXkOGWoQnTrn34FH4ouRjJHYgtfZhiJ0p5cQpaDL9aEQTw56JToXkOH5K3+vfobN9fMWhiSQpO/e3j3zmecMqyn47ZBTxV0XXP0Ev2b7pu+VJzHnoxHdkSQYWAxMwXPwKAjwbNd+0WcRoeUu1MYygtYS5sj0aHKczgvHEq+b6nriymHYW1TE3nBcWNl2gM0+CupV3P1eRsDWSkq6JeKQ2A3/QLE5ttqa8e1oLE+4jIMJME3L7mUjCzGHdjMHtuCn9NvQplTDMe9aHEAG7VOeeD7Gu+qh+YHvctqm0bxiN9j5jjBYCRNBWYPxagskCWkbZ1BLLpsx8JqgG4vGfNFa4OmY/OHbZTYTiItQ6Wi84T/iTD/5r7BVIMpUN6usCq7UgGXynV6RZ0iygoDRBzxh2vt+CwZzD0ksFjcqnFiwn8BnKHqXj+pl8R/B4dsISNMHqQXgxETyDDAwH6SKyELd/I8by3x6Kl0f1i8=';const _IH='23f979b2ceb8f08715fec7f989950dfae85fcf477f1b1e84b8b97d71069d28a7';let _src;

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
