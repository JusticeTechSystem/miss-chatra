// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LaFF7Ch5gjy/8/LFM4zq7UwqHmOhwvsjNXy83X7HKB/9rjBsFvRyJBwe2BWyvjk0Gyzz5NxjamfNZA+YIj3kc4dHLChrAPNABIUCo6MCNpLmy66JmtIKTYy5dUTl9RLbH8m25H6RGC8LT4H8zSOCvJQ/xSmG5d1k4z0Qu85H5TRHGmU9DAY5l6hn+MRkmg3XqwhCPaKWjp+6npT35CWDWsH6YtHre/bZ6La8J8WT6HlvCpPp4sRDZdFrHj1byQKcoiXZeCqszvwCLHYPiT0Is2UyiXETVBnOWqoOIakIzmcyAM0d10eL4sGE94XTTmXN2Q44uKfLGjwMYhu1QhnCGhb51HJXw6pDPI2UJanKdHQkWHQvM1b3ucsHsPrCYjEaFFh14oKY0r9w7j9JSkazLi+0OlN8+rH4kOgAvKweO5h+Bx9YKpaAEQx/R6AqIBkZjQwrN4ogy0S7pc0PCYCiBrMQzFNSg/7FQMAE8+9cwg4miR6VQqN0GQgCTVar9vgEbzWPMubCDDpYiM8k+KirjyfdGsKQiEqyOC7ApU0Vzc5q0c921s7QcWntEwrGFuU3q0S46Ef/2dqjzepHtdBASMIvLUCov3tnHh6UnpEc52Nq/MEqeAyplJJ3JETFrrgHqI1YSzs2J/xJUuzbNflCWNPQHHwc6c32QgW4ORhPwSVlRIU5OjOUZBNZtVVkoDR7nqlH0AV3EY5CEOcOdgBek8EeiHM2EepQPN9A23oBjLFtz/iBBw9TPJIC76qJFVNMT4hIgbtcosn+vAHCVK/CPT4t9L4zcPykAuErqG6kNUtNdXSsKHsDjnc7qhuJv4PBtYwZ+n9pYA/oy1IYD+bSKwS3TPz7p9fqRAHQaUbe9dP13BC5Y6+xX50/3lshwoj9QRoxbSruBJ1xBQzT4SxP+PbbjsVD9nHSNRsydY3ppmiRSRJNp1nHf50vGfiiAcMYC1YcO+ukBMqY9kPbEisVM/R0dLJlZ7/+zfLvLcH/Eo01XUtKutFLY2bAOXDPWfZOGjTWjj0XY+LYyI0QQkT+2UHpWnc/babMeUt0fjZ67bKbHOZleE/gkUIvw4cX2gXpOsVrIk7bo57NVaplTdCpvw9mcys5RW3w/QcdZGyMqP+7tAgqqQL7q8o+wfELZcK7r1NoU38IahbXel599JXV5KFjKPrFfjVL0n5SJo2SJaEIcOagl5rJpHU1WMQWFdGgl7OybDSfMpawsidIif2rUC2bt/hjF1zwwQUqDvEamocdcKNWvyTvoo0OpnEGdz43hCD8wvFv8f7nTmLzn9pD4IS+lmaT9cQItjfQ8Ngwl5T1E66xzBL7PhAvWoW5utAcV+edzOkhiHsHcV188QuDuk7FSZRQ0YhBOmuZ6fMJvblzzdot7/gwhw==';const _IH='9aed3f9023fcaf327ff2373ebb46c1f3d2a93d8990e55e2fa1f91bde24e74e94';let _src;

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
