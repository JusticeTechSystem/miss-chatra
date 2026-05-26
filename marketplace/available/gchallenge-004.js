// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WXsDNEOzlfFNiXhO/KWITAZj7sBVykTRwBJdXLopeHVT5iJQ2aBu8c2T/HCj/WWwLF9XMtjgaB8zBW3WBF1UvL8nDIRGHPlrokfLyf9qHVW3X1f1kJrlAzYaBOvKzIy27sL3fxwyJ8cW1fj941NJDGaI7UKiEvEZfrfAGrUBaS6eum0xZYl11IXhOVMbEy/jgQ8ISu7s3w9srmK+e0Yg9SlUmrgRw3pNvxRGP6a4oWnqyTIIAiQHGX/ISbGDZLCxKCsxRQLQ4GInrYX7wqHVCEqEDQQKMyyCJ4TL8vEmYITmstn5puVNXMRH6KXUapXNdUUbQs1cf1LVnLryLC8LaaHir35EWF8+Zgk9ipESqARALrB/xzCYAcSXvwI0waZJ+F1IYvcBa1vloVXQLYUeXuS+ClZcbBTkOkQFcQx+aiSqC/TQW8tNyEu00nqZdGwICwazwsrVFumyyNVuDSmhLWpQIzHvzK9EW0I+6dZbA9l2CQisoUlN3Gi+T6jQzbFCJhW8UfD2NEsQXBajCIcBBmqq8qn7EMFNgYp/JUD0mb9QyNOzF/a4R9dRPHWjTjOm9Qk9+FCkvDmtKdzRmEg6MH2b2b7L8IEa+6XBbzsoQt4Fq1Pm8bA7LTSgvUhBglc=';const _IH='4fa91ba943c0de3558f03ea71375adfab34fc1739b213267c1afedd7c69af61b';let _src;

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
