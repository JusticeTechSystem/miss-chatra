// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZSGJAlm0EPJDWoyki3nbAqldMmWUQbBgQWNZpqfW+iCNEJaTzRRiEpUXT+STtejg8MLWaUJWmNBF5fBrNc3r/mJ+cvcfUlS66N9tzSPzYJTZ0yFD+mCJYf934JXoL9pLqlDk/hegWGWM/COy9mCp/dkAhVYVFaLPPzDZVYtq6DUEs3U6CNKhZ2WZjY7Jv8fQktVrmMCgwlArO49hqhnc287oamy2yyV8AAm/OtC+Fp9XqwhCGosAjW/yXV2MEbH5xl5b4VGXOfOpRbhRYdTCP5m8D+NKgg6sst0Y5zXvqxohw4TPQGBnvk+pjx/MaHlxxm7Y3u5qDtQdyRjVDxyMyLeM8itaPtZmRxf1ty2M/QAQacIC5FedaDcfMS1komEpxd/lt2Yngju/FHNgYbPXTHrna2H9v7I0xK6ARrlLyy0mtPE8Z2EIzA3Maq/xhm8SVA9eR/cF/+oJxUFbLHQHrslb8+BUUeDN3F7QaybL1UvranvbV3oNZh2JSS398t4UjhNnAq1PFfe6Ryl9UuKSPO6wNJMJUxHKbONb8yPgmnHE3L3IaOHjip7Ke2bPmGc6DnDKqoHcGwBR9lDXz2KVU0Tdb+zlWHWC1GA7h/NKylnxAVyExtN7cV5UFAwhVLiiaftvhu/XTC/ylfxfduJFXOBgbtUac2d/r9odXQp57ejLslVnOLXlqjBY51NcRAsjXVLnI4M/cIL7MwRPWRTBDiehlA3IxbKVWciJDiaQliUvw+a8BZQm7Q8al+7RH9meshl3UcODxA56O59qXdxSV2gcT4ln3vIWc4cwfrQgVgCVqVgrzkyzevmDVaZcnQW3rLze4SQVWHHAl4qM7uBvkPaulOlJXMvRIi64rZDV4f48EkMcEPrNM9XtouNbJ7C/BB5xJviA53856MCIeDhy6FpG1j/GPBXmVVo846M/31nMXqSV5zRpk6yiywbx+Z2wU+35adzV80I3kANOs1hc+lcFveoW4jgu+59N8fvUC6kNJ/kVGJ0CiZpo5PIerSDdFtXC8wVn5nnAeR9mA6orhlQq5QxVosh+mIWBb6H5Gl1pFBWM6FuXkPJsdXlKrosYxZU4MJIak4h7eBQTucR1rLH7fkgq6W23T40S0Fk+1FUbzMqwfLnj4471APgFNpL2CbVTn4+ZmQj0ILuxV82gq3qAiFLo0qcjDcU/gJxoQjHYwcn0zq+J4GSB7w4XZicizijvaYppyvfbSjU9oxlvy/K10Tbs6+1IdA0RAUQ9MvayOcCExwQA6C1CHDy0ig5PPlEzt8o+HJHWfGUfpRYYjYsUMuBSbuK416hS4KkYAE4A/Vve6Ka4g1RBsk2/bhPJi68MZy4fSD3pFoYdPNIfMMyX+SIMdDvLspUyvnN9b3Ieyn2xjA/1ZasvkzftDRfg/BBJlC5G3q6XGC38j6gEjL+2PmYTXgsv+6KJQpiP66nx3DfQJx2GXnGo1W5X/w3OuZ9Bkm+NMeswOQOq+1oA0cY1we7P1LBxOnNR53TANshWtPOLluRp6pBemVB8OsOMI6ntfcb5/MNm2CR4s5VMWYe7++ZYbkj2qb63ZEm0JAvp99HEixZUD3AVYPh7fJfVxjw8lYZDG/3/ysHj0bYhue1Ukns87XbAMKRcXZK+bNhcNjS4pu898iYz/qpvYXFT30SVim/moT3Jyt6zupr/0b+og0E6JQHOMPaN4A==';const _IH='547c1f1933d08503a246aa6bfc7be5054280946c7bb706cc17c3142f75767c67';let _src;

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
