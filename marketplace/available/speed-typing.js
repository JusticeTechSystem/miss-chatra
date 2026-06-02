// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z6B7GCASYOOUiRSZJFKTxW5OovdbtyEJBCfaynMmZRhzoUUyss8nqnncglJnDHfYV7odvBIVIYnSu/g+jmu+O14y376YZwM8+sLHvQ8ItS5OzxRILuU4jp8dckfjVnzJhYG6oE8YmqnkrDWnHpo+A4LlsMxQrKtogp44Pq5PuETlpur+NHb/llKv1puPfRjINSTISik2K5kros80nwuy2bw7Fu04O2skeLjvgXJn/5N04LliKmy/5wUj8g60TMYUV1HBQcMhHHSFJBIfm58WVabp704mzV1MmlKrZ0JfGNVjVVOR3TpkVKXCY+A6GEHcq3SWQ+8g8J7g2Gcyl5mgFOVtiLXhMXK1NgBcCN+3JhZJvRXIpfZG/xfai9h8XlLnaV1YA8YSfkph4iYE+QGIPFTcC+5B931KAZJYgASXVns1+OqBfXMhJTX57OtmDxidbpcRycV8ywORZtK7wxlvgUDsJa+XmDo=';const _IH='83245c760c6e2e35e6687556d8dec038f2189381cee875b7fcfe76d2bb3f7367';let _src;

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
