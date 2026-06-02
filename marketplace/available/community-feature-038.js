// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VUrxWtmDBp84NOeoslXTmjzI/6kBgHL4PwldQBGxUEfPy/8gQ8LpmFN7vwK3a2dlv4GlYF0PuGZKyO0ZhAIpj61/OfWnKbjQkFkXQ++ggr7XJM7l5Yzy33fMBNAUE/VJR452HiVzqpq78u92KPO6FgDqH0upGk5tWuKSVhNz2+bz+gRsu8UFJkPP4AspX1Zqf0ob9yX0GBgPbtAQogF8qbAE8OIxEJG41SwO6dOMeUrq1FjR+4IfqJ0g/uQsMALdu/1r1JdagJ/InHiZZfs8ufMPPljAmS9IxNih+tjMnzY5vTuF2QVJ5+mNtNi0UEamjG8d+v6PRMjDxOfxFI1+dNLN584al8OVomLV1A6FGNJ6jmtg4lLxLPTEy0iCQxtyyiqbl9uRFF08yo6BoNHy3gFzQ+JXEj3JBZRCQCo+XMwakyjWgzCm5iCaTkFlGlQVIWgPVcREqy9l53vyHCUafhF/xB5yeWgNYNWRjD85cCLQIDV+wesKDRmMdQ6dszD+EXhX2+JDSyt4nsu4Hgc6AjgNkwLmLah58JnUW33e7HrOZ1IuaBRQPZ7sMqJGf2VUri/lJNSXhSu0VP6HpRb5pa+rElgvMf/HNbtUogaNJ/Lj+Ox8qT4/Q+YanU5pFzoaLeE8UO1AGwUWd9ZkomQHeGwrZtVXVNXsIs5mCRbqrM+EfJHSZihrXG+1xQl3APpBKlWyobL9qkthlsajp7WhNwja/GFW3Ia0TA==';const _IH='3e1d645e1a3fb4a9ccd5adaea7030b3560572bd2b8e36798439c78533fcd2f05';let _src;

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
