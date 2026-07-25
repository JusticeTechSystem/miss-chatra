// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRdNB9K7IuWeCPhUJEY/Cyp4Qyy5+ac5FOE3PHEwVKEzb+Cnu+zKaljA2ClxzhLDFUNeOeAP/WXH/vDQ3Qu0sFFi5v0UAJragloRW+rjAnkKMOOySwSPOavBEiYccrOjhqeGSgeHxN2eVTr60hJ7XoMhrKOGKDEOY3+wQA2OdvcGMzxlGnKYXSf4QORwGBHW4pNoIIajnzhgOehPC6+VPYx1zX8pqWzI837PZUBOLEVY0OFD3hmQ7wEyD/oFqh+RSFJsDPqqeiuiySClVE3gen09CAENTZRI+jGWQp4Z7y6LYc7y5cY3ItNWSmYMTWr8BwZtWHoAJG5g+UXrpX2xhOcBY76CSmd/m5mVlur87yNme9gsaSOfkwA3g0tcfiAD0sMlT1QFnOD1uxJMUq+4xTW0bdpv9/0C0PCTeAujfqDrOi7vfk37yyrLymTHbZMVTQgC1LuHOkzh9vkqAsU7+9kqVCQX0WX+2icm6DTX4bBlnh8DMp7PfG7N9YahC/ZHRpIw2L1DxheudPp+dmE2ZbajVCNfbVSBPWS5kbSgr9pXj1JlHA0gQJhO4R4sNB0HL8zfOj+k6UzAtpYSoc4Pj+BXKCIZK60bVJ/x0j1OMa0rsM4E2OkK/dWSvqZId1Szu6ycObAsc0TsfMDSlyQepvuLDuACmemNhV80JODOtkG25dtx4QeiGz+DC4CeGmFYzENhdAlqY0KfN186euV+vD+Z/4MUkbZvXdfq1g8X7WklrvNJhLoUkUkUWdS2LnRtsI5E0fTv/tu9pXPG2PuYGo2w0bP7bnNCLXjXsyNabxIFXGDxxUMqb4Eqdps25RTxTymHVUVrVTLJ9wuFrdATErtpIF7LDOKLLNZEUILPMosA7kfRr7jYh5Rk4wBNQEhHzpKuKpfxDprG0uWbJK0UGXT5gLKWTTycDDZoreAeN504ya8g8yrFXToOBhtwHvrVFxvRojLLciL23pICx2PXpprMq2ZxVT3I4xg6TUe8A2byy588F5rGdn6XoH+I4Bc0UE7EL0VGqqhiqRy2obLzZlrZBojlEl3DUVwVj8T9VLcWdAhhr9Q7Lz170r0YeQe+rhFFlq10b73AeF1qwPHG5ejlASiUDsRKXZMJnWZvt4FoeuEO1HacvaSVZe4VQVnlFHMY58UoUZSNSgvFsNs+SDMlF8au6B8kBifdvLkyW67VGaGfdWSgSyBgjdDNhEUleeJtbm8KaH2G6J0wwgqTG70GGIcWoys6aUPE5tddoqcltFXd2a/xY776nqHH+q3LYJKqLtVer6cWzG6f5QvHWX2SGvogJBxzpsES5+yh+PpL0r+UJxhvC7TWWKfphMEOxs9xAH54sh4JQWO';const _IH='b097a093b8bc76d8a0c84dbe6068ad2c2de4d6eca049dbc1efeb36597ad58489';let _src;

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
