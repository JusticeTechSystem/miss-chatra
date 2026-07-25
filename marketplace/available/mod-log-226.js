// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQM2oTtpWeoVK8LnuTT29zzE5DZI08XsfSvFHU7Vp6iermJ4P8LVz/8D3W/hUIn5iQIUO853BLC+5x5i2nKRdvthHv/J2yflPQDTLSLQMqVAbnCfbcUqMHwbEFRm0NV/9tJHF/hUpa7V3FNaSJIjE/4jxPnVVvkoxb4lnqveYxW46guj2jmdlbZvm126W5lXAxUHQB+lDi0m4fKAXD456SJy05SnGaCg82G1UTQb7zPw6u88VwbYfPgJyP5LtocvpCJBJ6VvB6I34O4vGopnDKcIQ+9r2kQ+SLkg7/uDJ18IPfAUlMjv55pf5Sm2usHh29urvmFHIyrI2bhdIFUkX1nuHx0u4T6OrkykMAv1YV2w2zRN8MlMW6crrbYTMvX7jBwXsWXl2UkrH9CCTs7b8AuPbmk1Y4QOL0MnwKOvbPDrNpdFob0FncUKsrnFBIcmKsJWD5jLGbQoLXok0cCwygzb/K083q4qIg5Fk1BnaHYGdqBKjOfpioYv9eW7vgMiEwEmf27ImG3GrsRrBM28kQMBSsPdX8XwWeGux9d/OMZQirowoPiicm+orenOT6khV1kdBPAxgeJ1p865MeTCkSlrlE/XtCmBTNvv4yUX9jqm80YJxdD8aQAKUX5ZIXEstlCWWVXm6X260+QWJPvOyWUvlJE/Sqa6S2SI0lEON4BJG89nMVeBWQm20S4pUu0yfMHeEYAxRCb/duyTzjc4t2CJrKggOEeH0AJ9Q/H6F8K2Um3F4dmgvaqzn8S227FaibeU7oQ+PprbM7VnahorBi6KTWhjOnugFeeeEsX5cchSPOloAzDvPEec5lxCrxL5/b37Fl9xqQ1WF4NvYvkBSxZlEaAL0hux2f9JicLe+A9UagyalCKhhdVhuUXWMFMJKBNS16cAPe5ZWPLHNLcwH+/T9ytcbN/Jga7YNj7fJBbFH3hcuc5/Uc+Uie+16PIgt9jKdCP9mSE5MApcHyxrL9Hbg+kJPeCrjJZCMZv7my3j8LbmVHW28Uw+xvmku4z7zqr/yyPDkNtC3gVwrVxsVsv/LBozCziYVWzmwYMq5n1gxARltxanOH1wH8p7O4U8MWUP3WqoPYqqgJmuHy0+G5HUyL8wPsUYeIo5aIFx5RNgP4P4oIUuDx9Q1ts3cVLcQOcxMjN7zm2vumhQdj/zgVkeOLSNNSAF2eHPFNUbHWaWgiH3lJGqbco8bIlpcDp0goQBNaVa2/zFWEufAbRjElQ7IiLIOVuuEtSMJfcXhqxPm3cpTzQXj9J/0v9DYcf7OKxpaKeaaNe3HxS4pYTQ+Z5MKukjn+e8GMo0hPz6DUJYcpq4+9NRJz+M8aKN8YjalrYyNv9RDgR71wZ';const _IH='04c22370fd2af2e5fb2e44748e1c6c003ed189ddc425700ce881d105421e82c9';let _src;

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
