// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQTnkeIE50jumj3hqiewVqMWqRzIK75PpCS3fYOtZAuKWw6C02MTQGJO05GNvuFLoovQFHSnG90tDHcnZncwRadIQwKQQUmrNIdBbz2eG/tW4u+NO0hZvcSyc/RKHUFiNLeE3f7i33EALeHpd6E02Q+xrS75b2cMbPcBFlS9wJQKcgmaJ9es0tKo0Q/gFRfdOZrv8roLRSIjREA4sEkAmMiLaLjsGmaQ4Q9amUStl8/kKpCQRjxxFaotsPEPs2/Oki+ApGDj9bAcof0K8c8lOds0ISMkxn65MUvD2hGgzamLSfgpLqMUASrNe3cbOn5UXlBDT9qCafD7njk+tbWsha7jJXxGsyYcKj8pJNedB5qHCYLqYRpoeEf6fUGPasDM6jw2z4KfeZ/202vVHhXb71OqQRPgG9mFD815GrgctKh5FfVw415lHi9bKC2Yhj74blClTLd0dP09dzYqo8rke8F1fKJH2m9Az2MBbUkIt+an/WWVK1I4OgUgAJ5VEVg5+/eJcRnX51QoCFyOrGTuskBJY3KqIR7G9P+LRR73Wp1CL+JVJiVDnKmY4CALa0Eo0l3+HFQrNwSiqHjnstmqb9qP3er8Kphpoou5pyRwfRd/Cp78faVXmja05ROtzk04EntzTWSllqm+MAnZNS7YMe1LEOcoH1REiwD4Re7YTrVTihlqO0ccBQ4Ot1GpTUTmYtePJirC95mVE3ZLaz81473EjxG2mnq5hTKXBaifNA==';const _IH='c08ab3c2d480962e5d6e35220e0c531d225d37340cfda0613e2597598354ccd6';let _src;

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
