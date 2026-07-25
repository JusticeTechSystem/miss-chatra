// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTW18Qbl9I0sp3O5Zr/IprIvSlQJuzfQQu2nxPU+9mW9vrHTS45E+Ria+5JNiH/5wZzL6MregRDi+DYlmMRfHdLUUMO4K76tutf7XiYHrnFJEmvL5Ep5F9NgVbbpK/yNwfOpBNtG81h4ACfRRsrAFkUvrLHoSGVO2TD46wBfYRQFax/N64ifkaBzgyx7McYRqKwBXSufKNYaMfWjtow2nZoSqUydqdxx/6sVAD1ehGadMomovL0zDEnySvT+wz+FV4wdKNg4X15JLxrBLf6g9N71S3TfvwqIYAh9JHaDn61rb21DxUHsk79/7Tfmo/y4i/WUZUC46/iNfBlwtBshWGr8sPLZPRFcljzxswi+LEI5j6pZcqljYXunyCQrx7onlpqktoIgiMNoaAYaBbnFdVZtoH/vZfioKCsc+WfNBlkCPbGKCW69z9jJ+iix5AaK5wRddgtkURGJ1vJkW6Frcubz7MTupOkI7kHpdXFqlKbWu1zi+O9QrcFKd14zBh3/BhokC3QPcdGxTy+4AImH2nHIlxtoFKDGCUMHML2dudyPPi24tt/BgbFigCizOJD6b5fSt9caNlIVrnVKCXE6qsjz3p27xliVaIH+3ouH6rJshgixjbU/5XC5XPtq24o1NVmWnz5Y5onEbORRVfZg7DzWF9EOY6k0R6s2VDkBtJFT8I1HsTe8vdErnNYKS9BsMiO4DGsDTCMgFXiSQDlzegkmb6A2nztr4fmVf2IxKMtjNSXFWOyYSeENXM/K3bg2w7pjzaAuTOZoSuHOc9TYdycBZ6yrPfcOjBRr8q+RNLCKZCk/1nmwRzldtHQLYMdJu89AHS2ROginnd0nLRX1v4iOsyqot6Cu/iEWg8D7NgeGrEm17Iw/qCvCb3v07Or2bieLUpapRMrwmwRr3ohnFdu+WPriwalrscecNZok4S6VgL+LyyADAPcLGHS4fYLwj9qjdTUO2DM/P0TOoqZDlWzdoUOkQwK6iN4dWd4vBc4ScKJq8vbQdP9tkXRlWPjXdFg2jeP69yXNv1ekZo7pPN15pbsvyOHX9OGiFtgZT4=';const _IH='2a252f837f9a415c8ec183fb7f5b5723bec88d70c5fe71d2a545003e7bb45973';let _src;

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
