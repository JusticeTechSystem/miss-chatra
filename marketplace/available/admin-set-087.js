// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I9JLZA/d7B8AugQnYJSRSmtS4eZaBPBw/v59xIAFnlx0X+odAylHWORt5xBwx2GEqhlFmFWN95abDTYFpwPSe1Ci682kiVd0yNdN8KFs6HKnQ5RCMmi5U8AjIRif6coWtMj9fuyi0nT2e8nT0kPmmy5rtDVu0acX8+edTYr1aMzyqv3Rds8fa168J3tXBRFJHZcICmRIlCQN1HveDDA5Gh1VongIZa4CJ0eAZ4itdUzhWJ7dX3Xr34XoGNZbszPZdOtCMnGO8hHNmiUBt4yzy8Do/Iwf6NhGAYU0dmY8YpCErbbOkqPFxD/1JJ/y46Q8jaV/QK9CBXuWZjukmSnOdxy601U36001EX6CB9VL2U8uLX+hiwpjIXPrgieGRePv66dXOS/srvsSKpgMKGHspWAwWrMTZ3RunvOvIRXZFicqsVTvS78YsQkbnVhOXFjCRAxLmszaxaZKGH8MHzyNDkGWjb3z34Ptpwed+r/JTOsgEJxqvQpOabGXYwK7a+er7ts0GyZxeYKoSNi6zLAJTlaXXxw3DsMleQbTHRZL5hP+W19rFO+cu78Haux3kLQFSqbDjzWsDm99aWKUHxzmOtFlOp34LHH8agwywXV5xZpIGWdBMQw6dbXMx60qS+mPxNr51IWRUBZOKnUIxAbki2C87ChN41D8QE7rdCmdThh+wokfjGCMWKs2tHTcq+0iGbvDJqYzSgx4yaxSahLoBiY8ry7w+LVPQOXl90PRsRh0/E69SWoo6m1NV3IJ9dJL82wTP2b5QG631sFmfPVK21XdmbjpRoTw3W9huFEOpiSIo8A9h+bdlV240nDtVZle/cGc4HJXADwlSvc7s/tNGefjXE3lcjRKV+/qWG1yO13bk6TCwXf8FBbukvMRRBETYHE9LWnoyz2WEJBcc4oA2JGD5I+igNnPxdqdqZe0roRgRF2XI/nLxbZIfG1c3f/fuB1S75OErHhZ1SlusUcRC2yLmgrvvTfu';const _IH='4da53a57a836c7d5c4ef7d90a1a383e98e9e405d5cef5734e4aa871b7f8cd194';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
