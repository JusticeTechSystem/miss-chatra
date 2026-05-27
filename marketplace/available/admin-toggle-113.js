// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bcfVBCWLAtac9nkmEnuLcpp+CxFHEaLuDlkCWXUXPkNp1YDI82JLrmxr/eBh+b1BC/hY8s006m/+9iK3p7I86YKcxb/2WmgVmELjK/4pELMwhIMPpWBfgwvJOdJUlMyEMDmYh33r1gOcZg1WMa8NqukG0fQxY0gi89LplrpJfcIeuhgs+wG8zYBwyR61ud2GThh0efBD5ZR8kt6wbRkNR63ogHh65R0qwW0K+IRelirxpQdy33JSYs0MKm6M0Ia0k6wLNOlmnuU5Cav5xQ1I/Dx3z99wxKiiFR06HuzvTL7+XxCcJEkiO7Ee+yNPKp1fJzGJG4eGcQYe5MRnQ+hqY4rivYWQUeML8dsoUkID3kYeN9GmmiPwB46vqSx4SkHVpKQDrDnZKSFXwDdTu+S9HbGQO/w/JxpRt1uAvYU8ywE7b6XlWPQAlW2wcBRY/YRZl9hkfpG6DgQRpdYX/DYUTsBLuKmuNoDffd6cuOxWRPrVh+ZZQ7H3Qsnl4i3NCSCFQVuqg/Vj2mHuB876+rpg0HgAs3hjmafoivsWqZT+9d58cBg0w2CZ9Z1or+xIWEjoFucbecZh6vvjamPrEU04pvn2v2TZwAHLHm1IftHsAc8EbAHg5xqUPoo/AnzxaDJFvgWzl+QPVbgQXZ3M/lpY9x1qKafyt26pxxNEQZxTIvA/zRa5ebotiKRiAsGyZXVowI5P8lU09Sy2REX/iefC37j1Fm3/8T9Axrsh8YMXNldbvoonk194jPZjNXuhhBx1YAPfS4cjqv7eAjzl7z09YoD1w3DpTUcVwvuoaLN6PqmFTYD57hOOxx6N4QNMfAAO+qZzywJf6FVV8zscoGTJRDZgbR5Iz+9pgXvFV+isFK9/zjELaJgijlP7XUlD7+3CsrDOk4KXS1mLgDOGcAqXVVoZxVBrXIRWPkZUYv5GC5Gjb3E7VwlfSJBm1L9J1YXmwXzzZ9vSw/riaTjkuF3mV0fCKWBlLaDFLo5V7uZZnlpJ+34F4Kwd8i1bWh9hkcq/qw==';const _IH='dbb4a25d2e39fcf3e5f4ba7616df9b9df0a09b328e9b17f3833d3389078d0753';let _src;

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
