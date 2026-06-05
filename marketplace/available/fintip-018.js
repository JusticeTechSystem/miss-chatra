// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/fVVBkcHP5ediMf8F5+ZLsjXkx1dmsEbncZWIc3CIjFbxyDwegbKUNDo5vMtFBrMPcpJpJQz5KanLwojiG6xOa1BWYkD/1FuCeiz13wOAaERXyEJ1ruPXc4eKYW0MdXKqF4r/iZdbQXogzzr79Udrk8mQzor0NFmOt8YLTEd8cm6oYylt0WnQpgOX/mEl/BNH5V/TMgBgMkOvxzcks6dzBz8ZPqJ4MaBHBhie1Ogr3/lN9t3u3l181dpd2AEOEgrsaPqx3E9veqt6aA9bUISyc8AoDiSFyi+aL+STu3E3d6neCcTBNWZD5F8w8bTdHJh8FnjnObduo3yxPiR73gnvgrH8NZCkC0HyZrxvw+rRxDUrgbCmxJIGtVU/KNAZUDfDW3P1AXeeMz7lkqGHcKV7t165DyK1DINeAPQMA/RhY8slS6fmrgOTXzvb4iR3+iyEkvwZPUNnWJadGucLRy2JACWxd4VnZmjUPXMYC1oNuFeZYZe+vYWnG6VNAzqjBrH7vcpaasxt4psv6hUfydbMcGvNSqRCURS5NttuBnNa0XnI/QRl1H/r4Lf65hutwxiee/IGv5PAaTaJJBocYgN7g+LjDjMwXpulBFLV5Y7lP8B91J3nMiStgnkF9YqC0FCV+wZOMKuG7J0DHMpRfhgd4lTM6dFve9RiqG8sF6rsCDWkR41vpY0xtYew+DxFBaJkslpqh5ixZRLEn7K9cMLRhzj1W3vQEMgpZrEpJK0EB4h4FKeeTMihYjAp7U3yWvUJSmv7iIqMxOt/BCugzdiOJXlztTGpdDvFHTZJa+CL75careWmszR0PF3tgDkE5EYBAik7bTcyMWHZHasYEdaUlol7zx4mfS5JJ+SWtIHmEI+dzloQsGDo35naNEIMHTite9xvPQ+WVOxP3dvUeVywTXgV8ScJutJr/8XfiLMYDEiuO5/lJrI169pROfJSRRgvCkqncEcQ6R/3In26esyzUqroxjQ/3onnablBMcBPYJ0rtEtgvDn4z2IbKMkO04Y20/SbvM0eRkXrWizEo6U/JOA+cRTQtMvWKlNBpDQjhVRWw==';const _IH='090b7eb87499c1568f8a0b78434c94e42677eb5cb3d0707cf10c0a1af804d1ba';let _src;

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
