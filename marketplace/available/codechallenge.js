// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8AcXaEjTMqEAWAxtS0sFM/+VRnbmTDxKQWJ+SaPDfa4fbm60s5FLbWu9RRyMqXXR8rQ/mVpR0BEobKsCiObC5nsBxGIaRYZLVUV98bozqYeAo6ytGIDwMuOGYPoArnvSjEH+53v4K1mY3dP+i9X3e/Ux+gLOFLj2rnPmcZK2Vk4uXXcFz0UCLi82wMYJaPnf9mIozo0YtW30166lXhWIytukmkvqsvljfaUMONy7132HHCzdkNCjyGCep8NPwgc8L6whty3jExU86hbD+E/mmJChG/1fXVnh9SHt9Y/ADT2mZhFg4w+iNIH3chDJH0ZmTgofeKA4fOQ0/d2xrWwKOKO5uBpMQqSuSwYc7hukBf46ZyVJZ2PxJUAtwYf6dyUYHjsTURng6hohDMQvExBnA1CiS8Dd4v5psJC5OfQH9nYL5nk7QMWH4PV83jLWqFVphwZquek1v7smxxLYS7PqzH2y1FdRAACURuNy5KDiiWNG3hCl/u3FFuIfQq4A6mqAaDWSw9K/Jd7r6f57X8eK0NYRfWePG6gu4RNR1xqucVKtxxunaXNfMhT8XtE+IFSIPMpC3AqIvJtqUJFQsBYpVWINhLl6xTEXOiipfsPgZk+nDmuCH6SfVSZLcserChLtvvdT0zHopgqdb0n3Yo7w72cBeuqpUQK0NCNJ3EDNc5Vkx4txNoRlG+xB+NW/gpXwQ8jeyPTlDEeIwYuBJTsjh1/VhJeIXSkBc/wnTxtbB7DBOda4nFBkOUo6LhRVQkF9lpU+EqB6Zxxa4J6ykQdu6dR2e7BYlO63CZ93qM/foJDXbZY6EWJGG2kJcm8I0ZtlIL0MUn+PhyhwUSCuH+xKrhwyb782HVPaPPbDJpUhN1sR3uiYan0gQsx7xxa8+BufVQCIj18nvaVKjsALeAKjqZWa4MyrjWf0mKU94m58JB1KkpglXFyTZ1gFZEBEOc72FpBKDuU6Ips8KfZX/Ohz2DVCi7zj6yraNbkP9TDOY90aslGYYrCjntiKS/w8WoQmxYi67Vs9oURsIJg+iK1Dxhx1ZMA5K6mdaYdvkMV/yHPQSC7Awvk8d1ZQMvb6VifW+mrpfMeZpYFZJvZt2I1K2oXgT61PUL8Yd+/LLBlARe67aUFje/PnRQru8k/1fOccsHf1Cu2GT+YXVLgzj1xSiRIgRMuKPsY4ykgchj+8j5m4v0RvtRxDDV6YsUthgUTR/Rw53tfePw5LqlVksKH+2zdRYw==';const _IH='46a9748add91991e1ffa48e64bbc6d3f91bee00c9847658208b1d2ed3360d163';let _src;

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
