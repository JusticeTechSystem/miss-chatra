// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NjRsxtsTOQIx6NVFFW1f+CnHRQhPZcEyq5B9l9hS3FVT1YJ+sQPck9M8vBrHtrJYT3PNaVMhTamV2FckAdHqlb2STKZ1jQ8yo7aDatGrDx43Az2cDwWQiOfF9Rf8Jq4W8vl0Vo4DRRAQweXR0OQ9kD1eIUK6LWT2O9hHqIJR5BCVphi8lszIVCBX1Ux2jr4rxZhWEG6sguHBA2R19QrcddqETgLMjcBASeLVvZ2Atz6QbO+7ovkVr7x8QEFkkt0f+2eOXERltRP1EgRkS1kVNOvnl0OGW1yS1uQzce5l4bCd65Rr0oYSbckrEOiX7RTWdQsEBeOjgjHF3266IpIOQXZLJLUNnxjnoXpTzLSCGvXDLNEZTOWkEmM1SgHAu/X0TUSkbkX0El4c93BFfqFHHo20oGLTQPp3dwf3K16WdUVw8Vb97iad7pZShOVNVw9z89pdlzJiVmRGyUBWBxbFq/K8mZ4GOhJBIKbJ8zFwVcsnUpV0MmJSPHrDYmse3tYKrkgpfp6Sxgyd+V3dd29PiqltpOMmKmTitELOu9e8c2myhfROkYJt2vPSvRvGcM74rKBon143w0QGddLEcCPP3kDNUMwieSrri4ze7G3hk2HFHNcToFIv7Xzb2XaADmACT7JTVx15B+oee2foEO9CgZIyrw4BPrKonCS1o6qBGjD+FPkvrTl3wOL8PapUxUPriRBaeOq1tlkn3aOAHfEuDCNab5GQUAHNxe7eVeLw7ZSdixn4KISQnKjUcnvgoJzruH5kEpxpet1iq6+N34oTClU7joqzvYpeZR6gkUbPjtLKOu7dOStM08Arqj0AQamXCnY6xrzIPBAAJxkzXDANUvTjEaNWfn+++aP099GXr4cYSTWpUb98b5OuA1wcQY84/ZsbNgwv9jrYJvHvyo6eu11oQOVs4F3jG94uWCOiyzAGVydEpcau/QZXlUmL9FPDozY2Vp7fFDOOg6XJ0JhigACVomWDuggIQxzzZexC/zwzaXcBHO49o6IGW3iEJJmBGxodSrtIC2wlJKbjOivBHtOxhtBDVRBX9C84AVPVfGnV8gmlTYgj4Zamlkv5VQ+7SSCo9fKoE63xvGOPSKs=';const _IH='053c026e8620278d463613936c0a96a4250ac988580a0f05cff93ed44b633549';let _src;

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
