// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9lxdCV+FCKq9nrFEFZO1NnAudtl/tsvQkzLcwZ3d3VkC/NSuqLpjGxLhaZ9CYLhAt3ysl4tm4PQFtR6E2m6xu7faeN31hJlUe7BpHRbERgPSSyO/+au7zvEBv3AdOlZ6SgeD3oLms5i+uGWtyP87W7cvgev0en70JRIjf9JOLuWzsQ0kFryLOS9aJiCvXR2uLFBTJRM7wQHX6zBTplzAhQT8ChI2REjjNmym2cSMNt/fURDz6yOFtRUqkjDcNTIy6buo9Fpp/JSggRjJ0DW75NqfMfe15+/H0JI01XSK8tNEeI9tzP7P6nv5O4VrSc1NKzdCYShmhy7aN3Hlhb884hdCu5TzDfnQahrLMEeekJcNWoe0BLyZ2NweGMjGBLRLVOXcpkILrNOwygtFAAssOG3ibuKgh4t4uqa5L1F/dvzqPN8QUV2HRCVivMh/9SFvSbYTJhoo4KeiJAvGVjpCpRff2c7hdOhNRDQlmvB/gpyjmnSqxzrJdhQfqPzhP6RFH5nSyq8njNnjagIdEwIqOefarb5ax5R0ZYfcmz1hs6STnTxeywRUhQCpsC/E1ve6LZ6C+6YsGNftEKFhkUrabVdfvv+EMRrweYEff0rNamU4jiwriFdwX8m5hI/n+XsY/w64g6OmlJZoZViwXOZhL39kRtabZOzakoeLRGQ8TiW2cX1aGoWLYgUrQ1uyOciOZjfMHGrNReLoKpt6kZ9XSW/Ew7Z2cDV13o17ZvoeAUMpFWdX6Fo4l2zWOYrXlQXSuTP5bmAmgJmlyNcRzK4pDIjreOyQXJsPZ9e9zcH8Z8Z0z7pfBbx3yjAXzq2qmytMJtN2oDl6vAXJE7r/yGaxjgF28a6v1c/Mk90mmmX+y056bEhb8ymX5vtLXQhTc1UShRAlOV0Y3b9pwV+/nfSBhPDf7lsu+gSPVc8VOl7yXPGj0UWpNhZ0R+2z4Vj3kDCbv/1hUVcstxlzrViiA2ASeYk5G6N5hCjTPSVTWg+nUQGjYKhlX5E';const _IH='0aec5cec51f764d1e0af3a5f0473cc538f67a2585d0325a4623e324fa3692539';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
