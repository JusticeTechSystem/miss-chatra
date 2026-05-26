// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z51t3SWf3i89MyIBktfUioHcnzTYmo4wsiW2juGL/tPtZOidz0LNdks6mwTax9E32B60ub8XA9Gj4CSs/c4kuhfqB6UohIPqXziU5M6ZKgzAEMe+vjCZ5ncnT6dA6Wbvn6SuNw3CbKDokQhjDTNkKg29624x+JS+sBKmqNBplKo9FcQmsnrsgqG4wd6Ew4oOfWSC5bCCaUOfWELMXPiP2jaZF3LePcxQBEumdrhMRZdEbFp+mhaeFYTWVr8qxqrT8Fh7d2bltzc44GnWbSW9qyAthbfUjZgAoD0t7A45Q15KRt4HQYk/alpPvJaem6wEwbUV0Wd53NnEDpjD2P4TaM1iIteTkKJ29IP96LrNcEt9nVFrkuAXo0duk7wRweYc5PLnpIxjvCH4ltXIkb26LC6vndqYG0DSPuyhPazb0l7imlj/bI1zjTwrgcr2XlmTOroUk9xPmT9SA1J5ASDtjd0zAksEe+G+LTJeWrcbCwlNoDCziret1eN89bb0ndj/40/+4L3L0xFKOnfgt7KJ6Fg6D7gfEEO6Fop8SS0vmLZd8GPID0yIZPvqthpfl4duSLi/4b5LJl0yhsi61ascqLt4n5ms8Qn1b1UuHeBbkNqFa3/TAlXayVuLoduYGc5qVOVIahRUzIogzG+mQbdfLRAoWJsCmP20W9Qf0NxOrZD+8rFzYKYPcM/z5SWeixVQikcP';const _IH='bba3fcea7b5761005ed3c72be01026f4d5649a612792cb5cc9aedef7ee92d27a';let _src;

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
