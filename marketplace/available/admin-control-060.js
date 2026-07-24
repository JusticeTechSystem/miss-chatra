// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQds9RTBhcV6OOOchyN/ph2VwMnB8Q9uXaPI//BoEX8dlrgsw8XIlu+3MyIPcTC+oMtkSF4seyONzOCpK5SlngELCzaj8JfnEvzjGbAe8uLzNtroTKCSFgF1dHlOEMMBHgZVa6+9OQ9gSu5Vw6i2iOirQNw+ar1g9mN0EEpvDM8zlwYNgDlJYbfxICRI8sfxVjoJ95wRQHH3dds5EK0gvcuHj27gFEQGP0ENRJtlQu/XiVAAYtURL1qN1UxnoCMLrWydABa+ZjdCcKvVuM3d/H9Uvl10+dOxR6Cm8RGSQFTzi5GAhrLSLxfSv0xIX8c16uWkt6TAZITXSEq2ORoaesuStc+9PjnMhKJP0jgNNvg4VzBuLQqoB9UC5I7D25nORSI2DryzEx2LWwZ7nCLsHlld5uMV62qqo4zQnglEiDKBXGPWOV26W36gCwhVph6K3A1iPTg0aqeJiApLowFVEg0fDc7IVUl0640nkJUjGL36mrq73DVD9i+/ojDuXIW9N++bJZzSEJ8mycOjssGT/69UNZwUCy5SJSuJ/9Bhk1l3Jhn0yszXr6HFrX50Yr2sKu7Fgq9XIcJ1wHMgVqOEG1x64B/H6DzdVDsDwrVBiGzTWEr0o0ni3M33lCx337rRoUEFT5JEkp3heJNg7W+uDpBanrNxWt/1euMVhjweZzb4sGSby4G2To3DIEWqIteEQBiPcsr9aAecZbl4yunwzEjuS1GOvUyTXYHVjZzUIap1scLfWQoCxz8AqbaMYliTXm3ljP/4aP1gb2ZnORf1Ml9qBRYymyMxgriRVBce4G7DG68ty+MZBz6zGyq61IJ7NZCtXPelQUfFrLV7EcyrlH+nuB3IyLfzt2ebEd3jqJpvJfHGSqdWhWdZLB2uGtSGzb+7J/FHzkXJD4qFAz2BALaDmGzr9AsCLERqGkBY/drhzShlnMVTYN9lP6mtuWUZXxOiJkj/TInV3ueWjDWFgG0aH3128Xd3TfTMcza5adPHvRhtRanc3Edq+qnOB3iDM7CBpBa';const _IH='b01604f032a2b5aa54719edeedbca52a25077e7796ef88e5e5eb8e27edb86623';let _src;

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
