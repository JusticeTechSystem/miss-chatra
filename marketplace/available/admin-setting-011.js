// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSPvSqyGzyRaygacS8enAI6J2NH8CSCOGjtxw+3KdmhBGfOgONqjDuZAzmzI7jUnxd6reauG2dOfG8zJc1KDLbbDRyAlQ/pdA/GRAqoq+mQ7Vo++aVYwIveIUSIrT0u4Qyen8O/KoFmyxnkK7qqiYi/qCRXV8FvDvQpX6J4vfc6WCOX2O4fbhrnzlPR6SMXAtFPLJlDV+QbZ89cXMxH5JhXMIAcDlMRurANlcG2HzNVFal98okIPboNnS1C49QIbtoaXoouKjdBvxDUztoIlSvs+8kJXoOHMjW6KAXHKolcxR1fxvEhPKtfe+cI97dlulwylItapcNB7MDm2Ox9faKeRtflANqGylzCC6Ay3BHVCbgIQH//BlTbMY/OTdPAUNVnShXu1ErFQB9zqdFWuu5b+hpXJGXfpVrDo/1gWfAzxwQwq94LfSe6im35CRMdrrl0wk1HHEItj1+OzZGBVJEIH8aj2spSR+E1hcnZutdA1VUrj2Kr5hnXsuM9ZHAdMzdVDKYlQBGGcK2NNIiidwAA7T3Vz3j81L4SxitOJ2r4Tk0RJG1jyPdEXOAgnHmd2glagzMUHN65UJyQjSIb0lzmn0MEa9P1Kz2Yz06AbjrA84eWHGoSoogZPgjuQREq8rkL6XE8wGy0LQo7IJHHdS9yUdHzKYMfkgXmJZUEispT/768JZNP/2Qnm8ZWZJvbw1z13p5Fq6pHDeNfK2gBtJHMdrcd1Ntpc+xFq9J120j2uvaenj9XbQfKHgJR68NZbdGuP1C1d5gm6q7FFB+b4JHji9dk/7Stixj7wt2dCoRxVMyAjtjJBQxnWb89NPSn2HYXiqQeDtWhCoSZYj1gjKU942SgmdL5zYh2hc0kZp3OpfqqLBDijMBmshNKxO6JnRXi1Qi6UjrQJHic2FvmekOmZRaN+TvJqR44DFICD6CGYXTww4pu77qI2cyyytqWPpoU6s5QIemtWbxrasdBGxRrBLDiSguoQSxsOSseG4B2GDtd5+WGsaqSYHmp4zN4Yxzi0Uxn';const _IH='588556f4013e27162246db820011f8881f05c48987defa051b5b18df21c35dcb';let _src;

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
