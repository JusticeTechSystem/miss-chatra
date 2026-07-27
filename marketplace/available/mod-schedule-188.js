// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT6OBt0etd8gAQALJqXVsE/yV1W06rPxX4RBO8fwsdzFaltTy5rtUCfalBmH7YDGBySyM7NHiTpBBriOj++XmhqB9XexZ+ArntEo4v1XLyb4q2iUl4y4fNQwV8XN37hjKZJik4UwgFzwEoLg3ua62sLaklwZOQuJKPPTpXwvHzQnQ0aNjAwX3S5teIuL10vVMZ+IZiiMhzGLEBTxBZLpeHi0cIxadn3n5HkrvuTmS0L3XmRu5QgVrjkhvvFi1v3z+oyt9PT+hk+3oWjDWNAG4+3v/OtNpPRbii6QijPUKCs+ZY8dvqEKEJeL080PEp33/Ra7hxA6X8owz82GgX4Gg6+9VVlbrazR678BlJTsPP/lXC3pktJqUr6Nc6hwoimZ+jy2KaiJY+AqbbM8G2eloJN1ot1453wCq2+ltul0WOwtcOXvUwLFErGameNco90Wf0bF0q4Vu81WRokL8+JgJHs1TjKIQmzQ/XKhOqRTv3WCehU6OMOzyVmafVAWkMQTy7EMaT/EX+V/ezvwURkhXJsOmEh8M8Kaz5+dwwpG44CdbbVXl9XtwJ+zf7ZpZk+ZblCOA36lIutCNNSzOqBrfA910paEfbrtu1J2CD+NnVra2+KCrn33PUm4AulbPDebiam3P7zPGbOwhgerrPHeINe+6HzfdHyHRUq5pege8DTOQGJgSDsmFIpKzKDhoe21K5JwmCUkmZrWSU3IHLqkxNq4c1x/Yzhg7pPo2U1JNms/20sHTNCSYQVr0Pa47b4p3itThvIgFUIJrzSDzZk0ofGSFtOYL4I7xvG+A8cpkVd51K5cBBw5FKKioRODkerCeNbRS1H2TmnQ3Y/uAYsZ9gOUcnZ4V1RbgCeCaV00RXZXf5liiDlgPfkaAYdp05kyBy72U2iH7IkVbQEn1p7q5C563sBgYY7t+Koy5VwTwbEdmRSI7rrehnPwEnnmF9khHz0TW+DILQ1dRqLwcHbPvhi6qVTtAjZysquZV+2SuY46H+nrMBbBBEw9Zl5CjbK4Kv/kG+ymw4DhTNZMGioLMjSAzmOEB5pUE2Ym8iYxtS96k/Zw/4V8VpipYEOa18ay01OSXyD6GK0NWryPyWLCHv3plIc/GXcT5f7s5D4vc4fEoPBRcgcVUHjw70RGmduDSToFPVfBKt3HEHC6/8JTLcftIztr/tpcnIgyGuD130iY6NBsKBBlCaqdDHYZjwon81dukARBOB4SY5BUWCTvSPBDWHarlAHm1tdghW2OijK9YxP76KEX2frlcJUHWyecnDy6jc9eunzdqbG1HCbi8lnfq6Ea+eY+WOuB1j8lqAXoJzteNqZjJJLLbYNhNRUBAL1qbDHTMTybLe3ehJcheoLRgzNbTQSJGhxRAuY7INjBhU2Ul0vk+zpg67uWuU2Wk2ouDZsdytK0iq7fRg=';const _IH='4be3246b2bcfd382e125ce50df4cb6c3c236e3568c7d9183e3d4a523d7093ff9';let _src;

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
