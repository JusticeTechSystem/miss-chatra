// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS68qZKd/AlN+gLzIbRtxXxULtD7iqYPcmGCIe24IPzQsZihBoZn3YDpO0jS29UegsShMYMJDoQSpF5r4dPWKnVrNplsKeJKOInXwGY5YQtwytXCWcFdKM+3ZrRM+H8HUqvPKZU4BcrJ0DN3NUC4q7IgfFYfZ6BIOdbOAdyWPhfBJ9lltURepdWqIn6ktmaR6Qw3BJmPBXRYr3zzml51RMxIGgXKYGd9RV5e4INtsM80QBGfFHVbyNSX2LY3UPBh9oq99iMhuoyMk2hI/jDF5kEn/ZaWqATS9QJcvVe9YZr+joL5+ebIAmTd+dGTj5uAxWLETFN82c1fXJcZbqz/Dhy0gmBAMpAAhrE7IpgWYzaEMwndPM0TjqKI1KeLMc+yvmtKHX/+f2TYSwHFagCDzFwkM2S2QaJ+U4aRQIgFDTjuGDomXSph77UgCu2RxPn3bbEbjLkJNgRfxXS/23TSGpRgOHitCxZWFOHlXQbX6cF+QcdRtP1sxE46ow26aljCAZUWYwFKuWojm4FqNCIcGSCmhaEICjA/FZwabQWfGGhk5ep+Np+gt9eh+MAJEEBh4w5YNnYxwKde5JfnacGEgrBAUUOYVgLr7yiKLgHeRVPVknn1alEMqeWF6P+rfcdwlNt3RETps9PJUHn0nee3umlkI44l/p7Fc9O7my6Rbb9flO85R1YbSzLYE1I+hAHIhce0UeAXahtTPnwYQWYsdTHmAvFIXkeQbByA0k5KZYU63Bk4XHH+Esm9dPAcRptygWwBu4pKdV91O8qdm2dt6EY3TmOqFBRtIlrC2zUptorAyhRrPdVaeEA3q7cC+8voNwfBr6XKI3EK3fq2OWoOHrvss4j6XNfMLM0ZEXmdDvI3919xIzVNS845tXuVqtonIgxpONhpE8SSchz8X3uoO2ee2v390Yi+H1fK51iZBO3e7pZMmquBxhn0kF0L75GzPNfkb6qwojLsCrtzibum9MJOtB9aXTxhPqNgaOLFrwEO0bCDjV/8G9/n3WfApLjqcasJ6K3';const _IH='cdbf39ae6fad70687289518590ffe97697d88787bb03d30eff64becdce70ea7a';let _src;

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
