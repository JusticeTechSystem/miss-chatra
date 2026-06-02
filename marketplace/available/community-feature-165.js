// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='isXhC/tHBxFtlD94OmHedwnGPHaJQC8MgF65eD/p+79qoAd/0mAUiOEPY0iEAnIr6OYe3hL7oIGIeZi/6okd1fSWdgEtUNeGegqRFSioC1KbnhtbwLhzwHkMQeMd9lYluC3TaZ9nJbat7Il7vOegNYWJ9XltDET3lvdgJ4s6fB+lGzcUL3UK1glsG9rDHjV6H6pW9D6LX5JJ0c4lRb1dy4wVtONrOvJclTMOKaQfeiGVm+sEtTQvGiQQdZj4GVxyYurII4Y2uahSZlvRHIvoOSp0W1hsnbWQzQgJ8pjab6SuRHoxcjee+66RU4v3rqgTr08nWE2JLMxlYJvjw7csC/SO40sSp0wZ6wG5aQfWC7aotWKyYH98/RBf83y6IEWo5RG9NbmFJVJj8GZjC9z6Oop7584DVf6pVIEJ/9JmoPH8Syteu46p0bNDVNsbYTWZHhdCfdkZFP03Q9AbCkY1yZs4sdKBs8bL7NHJy/e9uiXC51FUqIqxgpyZisVMk57bGj2vfW5gUimyIsC4AOpXEde4WFltq+GOd0I8GNZRfJq37Bue28OLWMgFEFvLCvJyQLRdt9KbZy7viIcsQSx0fiBphUvGpx5+iH0Af+gTiwrNWp3whTMF0/QL3zxZjD9RD43ucc5BjRGaLrhSqTrCCy1wusI1pvsuU3bGoDMckS7qppPJeJMyTnJ1+nV6tJ/X+ZagK8dsVxfPLTd8fPcoAdPvQdW/3HUhu7P4IwHpA5GtdGcocoom8kgK';const _IH='d9cbdb531bcd7d2f9298826e9f323bdb54ee7587d1a3580c891ac542fe7f9453';let _src;

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
