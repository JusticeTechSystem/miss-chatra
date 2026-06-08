// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NtFcw6fFM+qqFGlm4RiglnmHSbp66l9my5tbHpkqSzuUafmPt54Ew2aRDArD8zB4DBXZVpobIOrIqukjgVi0U5RcAACx0ahtPGlo/eoOZHoK25aTznRxNOBVh3WMJ6RUnw0lUIt/oEj2Soq+9GppEvqou5ss7IXnfdTby9iPn08ojeblbrC3mKeQYT3SiBuNa2TbDJ1y2Nr/ecG4sAQg6nw5Kkih4F6xETwqWzKPm9ITuLrxwMaA7dcDj4UBYV8vSKwKgaCK1bDX0SZGGp5xp98K0gO67ixYPTL+qlrpkRujIsDfbXRb6L3F15Ix8UZQ0XiLolKsXONkCnbEefjqIY7IxI0rLJqI5q3O+OgOg5GDd9YqYhDJfeXQ6NqznjD2bkfdSmbj3N/27fGrlBugepIj2a5mffVDtKdpKRqYlKRVcmFpCiOqTEDWboLGwPleahm9lpHtBsliI79bBuj2AHHaGDSa8gKaqVDFHy/U3AnDS1CRMgs3Z5HghKEY+BFOPLn8oWOb1XGzDWciArv+g5w//oN8lj32t2MpfXb5nSXUw7IkQ4hJBSpwjtVMljUA0RW+FIo+Oz6vG7U//jwNBZum9KcxDq1RseBBr8IflQpimcom7bkhlROmQuIDBTJICaBO9HoGi+V4QvFHXMINlM/tJRgaYSrGzqqxruJInPbfkixyflN1OZGFrwsgAoyMgC3fAG4xzGOPDNqgW6s7hOKIWoTfxLScLBTm+sBFcSbbBVw=';const _IH='1fb3767808a9f1f3cbb751608600530e26b610cd019877c88a32c2480003c91a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
