// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cegcKi3ZukKiKublblA7Lae9Mni0e7klraM+UQo9/5KLd9pZrJi5HGxz/OKzkNm80HSWapHuw5S7jqPXs4e/zekMLt7nrxaIYw+3fOIUKELAWqzXNXR4WF1tibkvzHrS971yKz5qk0CcMCDlcpklD9f1Vto7BkrWyNbq/1S78OX05PL8h6CN/MnJt6/XyFPJg9fZ07GljMsl/lvsNEh5i09Z2z5+zIrEbPtZF87vu4fgCzUSjMeTdQeN8FDn+9JAOWEamZuIHBJEy6xAWPYRn6lZ7xQsrXgY+5hsd6rSCmYMVzgNz0tn3Ob1nnLUIRAHeplJ19VtDa/3ZSMv93PS51lpz+ghcGpn30C+Q80hc7uL0xrZkMU9JUbAvsoF+gNpacbegRmyVgBMPW3KktBRI5r6BJtqJkw4a5B9l3S7FsfMPtRwmEgKw3xx3l8rWC3u/kC95DDh+LsjpJkhXmmw1Ih8hlMQXOfOAW6/S0yyq8Q95MAJWh92qZVOuh8V1bK8CogZyTVhzfLg16hMkJmE3LTFjhjJ9DZK/jnFEwW1gPtQ5+WTMHjuhAULfYaynlXtN4G8AJd1MGi+ZkiT+8lo9mPxn4VJ6xC/lOs9cwx6aTscuTd/l1yw3ivsoA8APyMOVHt13qa63YglANuYRAikcX3umfNN2kSlaiDW2OMxXS0T1JozZmcmiAAXq7EZkEDfFUX2d6Sx0SfGvEFV+JHsYBaAnLvyM7KM13s77Ac8PY6jSGKmMWYpewiFKxVqwIE3G/Ykkbe0fI/XmQ2hx/ub7WCSQpckr7ygMggVarTIWm8S95GKXVUfVFz8IzZTmO/jMrqN5s131FOTiS0ELnDTKNHcIVC7vXT84VwV+0cg7ujQfob9xtoYo5gwOkXWEImQlHYklyQRqBlBSb8aS3vHIIwzBIOtiBTL0a2MBQAMMIrkWmD6DCIScrYGiPPbKMTqc67jCiz7FxYakMMy39JwjGCptZJD3/50ncBxSa9rybXLMNqtkzj7x/aTBxieWti/mpAtnb3Pp9byvXxVEtBvuSsk';const _IH='bb6753d63164eab4b5f43156ef8c745140f388b484065115144506f16ce70cd1';let _src;

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
