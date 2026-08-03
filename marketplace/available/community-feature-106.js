// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3NRJ+7OQB/KxDIj/9PovuQTgDrj4FvOaWgoBDzkzBTP0R4eL4aLigqmtobN63A0/ea1Svaw4CXz1nmFXHV2QCfEbJbxrMH3qMcWTC9FUkLkqXblsYaYKamDosIO/W8MMHGIdwigQrxB0wKmVTGMDDUycOHZJEKpaq00PigF/TokrKFVYhBcgognxY5TYR4DHloc6OtEieHyvUCh3PE4Mvy+EBBfXYA3dKL3iL/d3ucVmxpDTC+KMPO5v7SVh8KrvSHWDDjxVzE+n0ozLRhNGpiWNHzwGlq4Bg+VnvMO58U+nZ8WxTnBf5StINjsC4jeDfrwLg4clkv8z10V8fd7l6WQSYrKfkIFJdnDAGx8urGFmVj7z2nZInpfq1yBH7vi6iRcgM0VwB2U7OvcnXV05toLN+Efa+yXDmjfUsmAyj1rHtJLD3WDuV/iZGjD/MIhhFaNMwrn4JrEPveU8j2ACX/EZsw+mToY3sdU1+7Acdfr91YWq0B3E98ln1IsPnpS4dX8LuxWwm+j2YtEy9zwCzeEPOop3bSsbgTx3PxbQafQNR4AVnvEC6EAQVMuI8CzIWE6mu00KiUBXZlFH2UO25kG5fNMXyCKqYjRcsEFY8unKsVk8Q/bltiE4zE+hVEPTUXaG0j/GkGA9o/pm/y/p/IWfE9q84DKLppNnYqm0DLyFGbFRZ46RxtGoy/7gM3XKmDyLyqVKhqCT4C9FkrwpaaUjf8g==';const _IH='3a722db1b953234cebaf8a20690555e60345ad653b9e9315d2c69d0b9a3bb5cc';let _src;

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
