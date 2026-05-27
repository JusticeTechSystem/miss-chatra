// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6cG0hMl86rBI2XNK8PQW5pNJBWxwub0kxYht7J2pxgi3OXiALAZapTtsdEzdmMDUWsqwde+IO0VstDE7yHqO9dp54Rcje5/LmS6TDNzHZGaWqNJEwRUdXS9eXNJmT07F6aipytliborVCuWjmZIPNYNm46RwHHRlKBEDJRdyrkCT7erOUrY3MabE8EmK2680D60XHasTWSTzFAr/lXPCg4Lv5lWhKX9eJ28fsrgzthioYfFDO4EugRYZkY7EePjqbJ+JzTxG/+I5HLZ34zOj9FaJaEdPAnK4e6H1bY2+HVg4C9m4cK3Iq764F99v9P4D8mI6KK8H3sEGQACqgws89ZS0Gg1hFPAYRrwpXdTdV+te5CmsWfSpSgMyUtfrhLc7/HBqr7h/pgjOGxD6W0RP1fSyt/vv0z9SSux2sglBXpwtFQr9IB7KUK6Av6bPALHotZ6hJhD4/Mb+4UWd7uA4psFeKS/bMexRED977Z3uchv7h+1Iu6umqzWtlLStXEbKq71QSvWcsz/+DnB4ve9F868LF2pZmaplSAhlSkNCwOPK8k3GHFviqo0cQM2HqeCtDpXvwMhk1HL4W9zWCn06gVsvqRt80auX/VkJpBYl3FotAbuGhO8Lv2g+VvNz2Kjo9iDH+5iWi9tsWRFwzM+l7uK31LizHgoj0BO//8t2YlRJixfcmTfJA4iSVgAKISSrm1fIex8F9D9T1fjrooS0qQTLUkidEAMRoo4ghg9lX3Kb/NFiR3Y5vTOxKyQ55Q7QJRV/prjrseWl89+16qfEYkOjU2+VBf1YgAIJOOBJPLCi7DgW3ASrcZXv3Z1VnmxraNkyOOXnafOGDJ5KDc+c7DMxE1A6dCSBNfd5E6J10URBM+0KhDnQ/S3w5kPznYE61qx4k/AnP+F21p3IagNyNqR4YrmliQ7jpZ30KrZrmMlI3KKtWk8eYLLm/vrwvuw8tXPN49gDUYXidawB8tw7EQkLVX9+RtVz+gwfrFQZ7uvfgki0e6Rc2XaJljUAqhBIaoke0sa0GUNVfTm4eU9FW8xH';const _IH='1345316597c58c521d8be4d007557b21ae7b224c8dc2a895cda203f2a8c07276';let _src;

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
