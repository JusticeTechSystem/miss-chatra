// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGUz0SHX6GC90M4ZzEoy0VgJgSdIbBlipPdM/kHPJ54hBJkmbR10AbwOClr9zcRybrXX1SXY+Ey2j51dXs1NokKxLQztPxobq+UC56fjlDUfsMro5hKtJhOP65ED0Tz3l+IuIT4WVoVQxAfF40jPuiU3JZZswyYglJ75Nu8IEMRTyQI/zyjDqE7//mffzW+hXw1KHGfi75myiTL2LGJDDIHoyJJmCX5Lh5Vq1GrcLvV7vYefs8vtbkf1EFEMRPHRNIYCYJsEfUBqHt4oJGJ8OemoN7WlxjiWVEJtrBfe9hG5KMxVKMB9nlaqdTk6oKYkPaI9X9ZaL4KgiDwVHFyvbMT+Tr8qi5AVSUtr7R6dSoY6vaFovHWhNh1KlQQrWruaxp3Jo3hkahxiSy3c5hQ0It+dZqBlhEHhhBR48ic0gcaJZywX7oq1p2JlLthm06RaLxYKNulUfBt6uIsDzY09QuV+kcyhKnun9QHWF7GLFhTwyFvVO3xE13jpWv9bf6WIEtXh1AUtbTRLdOkKDypH6FIjVy+9MaPMkrA/EQV5S5I7HOTpm/cDdxzrFWGuclugMYuSriHn6n8oARdX0CRbZgTPAPOPDn51Jus+J6qdPIItYklHWJZVCNYDuQbOwSlasFApU5l2PAj/RaG4OX3GrGQ2xmib9YPhACUt/fptC+gPJfCUi0AlztP9Iro7VUzenWwQnU2guxvDrS70SNCDIB8zjRN2oAfT1GHCwjavukynC92EYFaVI/IAzXs2H6Z/ogIfbD3n6DCng/d7VaHXzpRKzBelv6iwCoXmgRLidclWYiFQzCfyqIMrdy1Ef4eUp7kU5sYYgatsFNzDF9CFmnG7npJSavhaBaefTQKOuZske/8wMapTe6o2mMP5kWNCc2X382o8AkxptJ+o6fqIhQlt8vx8CGxENhHb620eIyZnhvoE+rxTwrItATfhL/23coHpBFjUAydW+CvgfqE571rJOUEQjOFy5hsbWmG0Vfz1rvkH6ixmMyYKiVMnc8ONA+NKIsnfo+ZygdSIozTYW3qP6t4UMOCUeGnAt7/aA7T1kefS+2o5aKMev+2Rco4q2puL6xY1ioyY3snTRxqmG3os1mEQrii1PccguViBQUlrY56u7nn32+SZI93e3Cn4kqVaoCfVYeg4K0PGRCveAwl9MRyPioIyHyj7siTiAVFvpxxyEpXx3JN3RtrrGdjCJEpgaH2WZPB1FnJgcIxwuIrmsuq2na+MjCBIjqJcxH/aR7NGvJpsZ+mYNd319Gs/PEK4mEGMt9Pw1w8+ztGTH/x8f/1rhnW/FMwkCBjRAJHRqP3YQYet01rIVtJjXDFH+IqOi8TK+b/u4kV2LZGRv2jfDxlnZB8e4iP6DceMpsgNfSCNRmoDF2neXttEIG2w/EX40o+ew6aRddhWuz1DoRroZiO8lcDhub67r46/dhfZsbnG26UEBjpUIQ+VkSFsm30lwkvKXxuigf8qO8e+FrQVr8RWx+NLFt4CMhZNYn8IbKZULuoJwmzk0qIRbwfAKo0BZW5LNvwGihLiQXH7AmkWagbGYKBGKqxN4MOWKINWFUiPaKCQTfuTdz0h/Vm/d4fZH/NtJy+ozT0O170LrU6Gd0PrvfP9W9Jan517gJwTovTYjk+tOeaEcNT6Piqt66DM/95dfrlH2ufhlNnYtOT7FeDfHgrtldLiQ5RLssffRgzU7EXiudMacz';const _IH='7c4f30c191f3c7bf7793822285b61ca365c569ab1f82bdc58c16ed86333dd86e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
