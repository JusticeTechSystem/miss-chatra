// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBI2vHT1GW0DA43AzTR60D2Px6RzGs8rSgWsBbES758J8kO6lQgVnJYE7/i0CvZVx899TBKAhgIeeKsMBbrglmZjpkUv/ybjTLYQNrSnAXjlI5GOuntN7ekX6x278DxVHc/U2aKxD+DJgRXjMIaRPQLOlkyULvmrUuOFQy+COuPOSamoL6MatF62j/1SPH/0ikapjDOsM2dpDM+/wbYpG123Hd6tKbUltgacG4Bg0hM2fCyWv824PBfmNyvwPPCvF/MTxLdttSJJ/F0/2LuL7Ki16SNIf8Wgxn6+OtXbRBi5CWr5r2nump43ewcTb5VwhQbqOH+cQs8l5xE7nSVUJ6V0Mq1pNIWjfv2HRdQFaXxYXFo3u8yd1fU4XqQxeAH1Ww1QbcfzQ1A4w9qWCu/vpOZe43Krww514zfhaSTR1czQ3suprrOW+UYdWB7kPuwxv6ncYbzU0NGFCuszKnhYQSOxVB1gFogG5ZcxIo8B1WUuKEaNixfEYYdeKaRp9oM2jQuZ8YB1gWWTeNrkIQ2Az4TpHLLDSgLps+9rp4keRU+Un1QaGWiv59tr7cOmqMmKquZHxiH90ZZEr1V8ClFxa91pZJ+QUsHBjufJlxZoud4g0zCvRI10yg5+p8odsG2FAEXN/T4puc7hjG5ZN0+ZkEwDhyQMgpfM4jsJoB5G6hZIOCP/7wj8nanv/9vnV4A7kDlKa6fFIgepm4j+oBjQ6t7hTzin7n95wHxowPOA1eBJR5/nXrPiaXXLYPW0iqsgNs6X5ZoDLUHJjXpGKxWNYbHvl6RBl1lqFszYAqqVeqmHeeGENvgeoGfI/gZbtgantNRWh9XNT/WAW1/BbVqBVlw+Qbdgurkl+tpIIJVLKloCRqS9+JCvC1y8sZpM1MyKBP7NBoKbOF9XNuO7G3L2/opqjCUjqNDfYOusu1pVptMg0lYO+oUEVLazG8d99jd7EMr3RzZBqjNXuojEJ8yRzLCs+RbP6VMXMSOPqSemIoeu3vDzqnN0l27oxF6jkLbJV+ea912840Q53+RLmAYgCtNnE+zvTNV/1B83bXJyQvVxBA8mB+iU9v6QIA89j0d6yMJV8IK9bJSyC/sDqXihElNZvQ5Wquf1IKdS3vbXMjC8r5YgYyua7+egPQy/qBIae5EPG1g5+NHovLV7t6ytuZXAvs2YA45vjMjAQFALwWTO0kAR7mPWAMjaZEAdvni/GQldphkqI9Vt702A==';const _IH='510bbce1fa332c298bc04a34921c9efcf529a46c19f1d1f55ef24924dac5bbc9';let _src;

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
