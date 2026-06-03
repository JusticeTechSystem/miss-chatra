// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z4zlUxNYR3rRcE/gu//T7L1a5hLfyE7LRz926pd3uOc4x9MRmUtfrgUxx56gfpTJWitNSP9aQqhvUtAXeFDfbt0f78T18ioSaCCKFh7DbQUtdXDpXjgo5lO9AiE+5169RYjCPmAMmSfuZzHEyEL3vKLrlSxSpILKOM5MgU/vBe8l5d7b6tdncT3TceaUQSOox0+i0a0OXfwjBHWmVqoi9FTDiDYsRZfHQCaiuBVZWOanWXoetfeLvPPXY86+n9dMAiArMFUEkfM0GQb8xzjGvq/Ks4+3ff1gzC68IgViBiFrtThH2+1/eAWkMtww3W1UIrblkEhK09VGB6EtcaueyMFw5y8FHd+AeDdiIp44lk43KuiKGPTRSOHJBTGJx1JeB7TTGuZevwXgRd98lF+zLOZ0OlWf49n8QH0/uaeIQ8qx60cLOIWPDbQNn0Zj2XhPXQ8JFQS6PbkKa3YYVNfVbNrs1NjJCQ2/gbApXZXnaUO4ecA7R59ED1+ECwOx7f7L8V1p3t7xh4f4fL05mgQ/Vpvyuq+LeueGXpz24C/3x/CkjpPWA5IdF8C9OyYopdXsgfuQ+uPRHCvwagk31nONqpFU7SNd5l5v9kXJtA1jiiEgxarFXOGkdtPMlv++Y0jekRIvckxJzZZPRGCk+6f8mTz6n9/90zpBjWvoV9eS/9ABnztrDJV0zpOlpAp1nO5B7VGRQWXRD0FkzD40uaSEFkmeqRo5hi7D3zQSDLW3KjIPtJc=';const _IH='5c6511499175691ba348620ee921ccd043e74b0bd3694b3dccd63b74935bfee8';let _src;

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
