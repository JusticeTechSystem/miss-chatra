// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5PrEGXLom7JzdBEyKXacqUxxNnIWP2w1tUGALXNkHy++DcfH/GcwD4fWZCDIsOq7cOjwIxKLuqAT6zrdJ0+P2RSB2ezzCe2rlD77jDjRJY03Hb1cXSEtpdqPhelE90BozkCAZVHC0emiuSZBtGYnJPCJfSapadgL5FyeJgrHSrOJJ/ck1ncjco/OeqTlZAc1rIbbtanPIpGDNKBAH2rPmoan0dHrj/YSwDwZPYbTTHvz1k+sotQX9JbpYJM1gc5GU7h7MpGevPEA1o9ZWFxLMQ4VKgMzbeLlsVRMos+1SQkWQPWj1a3mqk3l4u9npAzRRRINpYdgcd4CsWntN9g7l5RqFYWNlmBFZtDyZ5B1d9zUz5wYcEpS/gh9TBmeIxrO0aXZ0f46BmKcJ5CLkwE90xwz4EvX8KIE5cDRDvYGv+ADbz5R7F1hLYHQFG3Z47tg+Yeb0Y25kDjaUufGWZ2fcLeCDwTEtt0vaVu70TSBruT14EJyPordr3b+Y76bFuOooF1Z+/+JG1C1grnXZTj/YypSfzXmsJExSYIwopU0RpPAtHbFNTxyj5ZAnmEaS43QTaiYuKke5HnNjzHtWv8KZ0qMXEq3NNHvHrbBZqmolZ1fR4JTg+BIgrJ0x1ytxcBNuybqKOozBu6RhVNbj94FR81IMnORN8NV2ovO6V0+xcpPa/ixmMB/NMlaWtBXHp6JmiScHfcarXM1Jn6h4ZSrg88h+Wr3ngXt5A==';const _IH='5e8a549bfb1dc4c8555b0bc43e18d553af39caa84b405ce937aa05babc3e2e14';let _src;

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
