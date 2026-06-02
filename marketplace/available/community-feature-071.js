// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/hnOKliwCaWoFVb0t4piFuDellekBHdSXQfb16Ku2y8w3nkGTxIuTFgbibmIMXTqNWaLct+vp3lezy+irsR47bXgGndLWXyxFcaCYgunYh9yCF3k5r68Lot7LHqGxRwnxoXzDZDR+WvdiuqobDTM5GTBTMZ/5nn+SYgX/lUuiAYkADSbJ/Sq20+nAvQb48bwUhEdZ32sxZ8RZYuZPvB+XSvamDon92PpOZ/EPEu8Sl98UN1YHsbGjnsgtKNsvAjiXnHmvAw4KTboz8Fbsm7NTOIOqOIxj4tTfZYoi4P34QjpB4lQpD2OL3zTTGxxq7CimrsjJ+JqX29zXwDgDMOl0gR7Ptr3vJZ9Ds169kuUQb1QsPnQz2o1BetAVCDk5RMNhkV6RH6A3n4lvovvTWV+9JhN4TRieyhyL2HC0QawAx/kji+vk3/D/hxQAIHL8NNYWdVr6PKrLeJSsvNNXTjdgj6YO1kWWIPLwl+fxLnOBRaeJq6li25Y5x4JIJa6uwwjPqpfLm7JKsJ6EnQ7cYNGVf3y2ZpN4MogQsJXAk0v9QqCYnb1gnKXM7Rasi+HJPXnYNkAHL5XZk9wP7PZTFbElqW/pzTbHHId2J6CQVO71zNarQD1CysuLtmdG3LV8BfNSJbmmM3VnYon0+5SEqe9XQDdlTE9OSrMuVDxNXgitueN9eLyOikVzUJ7DOLPHY80Hj2KlnUG1nyahmTZpZqEBlAlyrA=';const _IH='4ba477d2644962b9a3df5d5c72beec6aaacb793a72252a6a80103d9f4e84846c';let _src;

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
