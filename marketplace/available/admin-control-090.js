// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQanEIdGAeZxbVv7Z4KO4+XDQTUAB7sPFfhMDJ9FtjsYlcyBGCxZtPP+cCJbuUzi7lwptORhKMwAMdkkUQ1QDJ3jFth5ZcWnKg842UR/TUuBTiKGsC2pp3vXoKyiPEccXqodMqIaXIQ2G5ZF37blVJvFXtEMn6A8zeddp8jyrCAcdS9ZWmWjYGvO3zqe0XCW6rbSppaCO96MYPleQhw16xxhfB3NBLDo5yopv1bn0w7ycHYeD3i0zW/3nQWXbhjwXPNXXJGTsjPI47VsspGlg6UXwaz1HpnMZgcncPd7srlAZWBKBIBLOUhFK7L6fnVACQ2hXPiVCu6naExXOx98AfVNEvBXrKIUrJKapUotIAn2xfQpqXRDhIgcEaYwKO3y2FbAmiBVlBRdvoaU35OB5J8W3IAZ/o/Kg8bfg5KM8CuEtgvkMhj5c1Di8IXzJ+YVDxBZ89pzkE1WRUPnmjEyRrqCfrlmidDkL2EV3zlbHAAJkiuQQe5f76e/+llWAhvAUp+BwyHKPgkrb6l46GdQj5oGiIMP7CnL8fmWwGhLvx5xbj+VuxGsgXPkWACoTVONVIVc2G4Q+xv8rkYOIQHI2iL6LA0osu+eDJAjZoIJJcNXNJFtR9BAKHJKlrc9Tz6UL8gYvD0fMRVbu2AZ/g5bFkqDvULYGNh0PDceyT8Q6dtDHtqROue63eCQF/hGLT/lCefJ6uCJRHu27chg9g+Iz1DabRkxhk5bq6P2am/VMP+FOT/hi+/1wSA7xYQ5YP6DSGjeCcekPnKPVs8ja6xSv/yMRcH69mIKomSYc7JNJSKCmzr3/EiiDK1ivWzA3malCL6Lkgy+uWna7Trg9qULx3Pkep3mGr5HtVvZI6ID9+rSY7UzTzxG8ZowasyPcBwxrlnOth7eoykSGluRz4UhdwTaztgjpd3xRDMimGXWtkCFDlnlEa3+nD9t6FiTaGlBc3OAvFjFQEinlyGptS7h5IbgVzXyBCVPQKsvPFApQgoSkfP3qymZ192GIJUxTfBRJkB/HmL';const _IH='1433c8bcfbfb7e63e3bb54bf8d96acf1b94cf46467d7b889d45d003769807f25';let _src;

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
