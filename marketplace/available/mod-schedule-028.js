// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQPJ2QtrT6JHU79sxcKA7pZjhwuUpV/CIMOJzJ507bDB5xoJ9PlavxRz0EUpmh8J+7OSASo/wd2Eqrvi4cEi5vDacyK3X0XwOmCic3pLN5QGOp3T907ltpAk8X2egl1cXR0Xabgw7PuOu+nObhOW5XCsmRp8DusgqezS8jG0RncRY2qHA3gFB6dr0GMkTCnsuBVz8LFYLXLqTJmJ9vjdUVSqE7O8uEVUBvKROmCDyNZhOTkm1aOkgyBDsNG89rDH+uwOyos4f0DKSc8UUfo7jHuVLZ0C9M/bSb1Jo0q8/1EKBJ/f8hTbd5MXISb8uLFhIz75Q1R9N4kT0oHshdcbVMbhOmQAMbkfnKcsDOIgtRaA4mn1WbDkbGpCHDBa8kGccSc9KWdXzEVP3X2arAUUs294de8WM3MP4iL1l4Ne++aU/QJbdryFt2UquVE+b7H96NeVoYDrLC84oi+liz6hWnxZg0/8p1LkKuwS3Q55nsD2mqfn2Xoktd602GAx+6uftUynYy7lrUQJL9E7DXIrOU2LSDC2OIXD4KEFSwHXgTeAcsL4OLQylPMnPnvw+ttScDgurgUfajHUCLLiuBPSJH/4xZS1/MDtIAAes5FsmtgUkf8QHpsYSfLOlLeCbnwH7YPJ4fuuvJIiwT2z8K8DYXpMG+qdLHdELnDMZi3YYZ1sCElW5yFk/lL895hJGE/lafVAU12lMgBsu2OiDdLVjpsHkVk5iMW/Rys0n9+dwapN/P8US7tBHIj4vQ4QGZioGClXAZuA1l0w+P/kmVAnB1cZHGeQRV8dfG3FJGm/J/I1VYrxIgYuD5C1Wf3VQC0XQJx4bL7n9QBBHAyv15n+ZJWZ78rkLg0kuSXljTPo+8dJWFWrqHkiAd2VwDUwXrmMqWif+M66gK/GDCSq8BR7ZxLSUBCxIO5+LdO4n9DQ5U6ihBWfOyJAC7M9o73y8CJOFCmicJC8CL+3bsHBWAnzfdwAX5myZ0OC0EK5VbZH7fcrHRKFNoGBueElUgtCX0hI/ESElMHpTUGMFRL1h9swVGOSun5MNIW6d9TV3zR809firh7Pi2GmLO6/7XLWuxxl1i3J/bIRm5OgiXW/ItRjYjCYP0fO+vmbZBE3Tolt8tTb+Jr5JQJ7uThIJioFeLm4GuGxW80N9koAy8fMWTd5GcIYJ9FanJJCrZ/qkDV91el9N5OPTbCHXU+A1R4I1jmXH1/zaFvmuYK4+OP3BUEecH06F1MLOOjlhfudCTEvAL6gxD4NQStmidomFSeHLvFZZF0k5Ktq/NppfEytid0eN99hLhVu+/u9L5Men9zWLm5uZ3XC1PEuSsddTI3ulLMkD84a1vfHGedar6bhX4jH+DJ9SGqRVLapevwijf8bD2Wpc3J4TFTdW6XvIJRR6nhiU/7zk6n6z7';const _IH='15c925fa900dd6e56772e502350d721c276f6c7acc66e0d57683d4e66fc45018';let _src;

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
