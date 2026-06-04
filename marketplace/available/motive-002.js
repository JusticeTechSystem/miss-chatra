// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GIVdOfuAi0/+OFKG90s1grgXPE0wVZYbaVyv1q5TxRe4+3SjNWTKISqwRqWLUtEQKqOeWVKQRTy/emMVKk3TIFqQ4CxW0D47/AYXhMV+1SkJ4unjFVuIdzJN23sOfJyVQfDP9aLjYWIGFZjMB5PIschFj/N3eVUmY88Pd5Et80eyXTO3LJBeZ8aHWzY0SJWRKutzO+6m7zdReIfAencaWSr5wLMJt7YPFBSfUGszsUXkWRbRvUbX1fUf+KriMKuha6F1VqBXP2mlgHo7YNVTZSoL9S/MGJ4LxGJw2CNxGWlv2ze4l3RHtm3ARbFpG0pOBLeJeO9gSMZkyWB/JOHGYEtT3B5OnymczHV5DCwU1FiNwKOH80rXxuFNLClVr4rV45zQYIcrAj4dCioT4PEPv8GgyYETCSK5mCGAQd9I3jDXQkfFuTyMHEMIFEnXSWgQm8xZwOLJSMU7aQTicliU4kP1cSSXwugTITf+OM9uRoafvyBxLenaoG67ctzAGBRz+pRspYBglK/S44bepJYAvqtI0DQiOFfubYevFwVHqgge5rYPGfdPfK4LSIhiu1jKP4Eo6ta/vNV3FEs9Vg+DpSG2b9q3wgTgfAZWwPFXCjBIDqPSOr8iBgBduqutwUZXCo9uideLmafwNS3xairxKlSzkYhKoJxqMFN7STzPYnjMYbwgvHVXODRzbMssb5IfL68/a9N7HTzc0yA64frs7XLIWi39Acz5maBry9xQn7il0IH7i4ZTMVgg+U61Msrk1zs6eucXjcvymz6lg1UbTnFGFKiXAW62rls3hvcb5OYgNG51XJ5f5LzdaTmbzi/MZOtk9iLCR5GDJrbhrBE77sXz9mlsgx/nIHPuF3WweY+eYWMUlgBvb4A0u8JMXMoIVlH/A0d/ON2QCnEO6y0jHTL5qj5JukAU8CtFiWB9/kGzJF11kjwKje7TWC41qbE5aQIgg6Wj8MD5QWCpWC3HTEU7ljmMN/pM5oUCWgwGnEzmvfZ+kJ20ToNVCURGzFtz04YwDCRo/wMZFHFnzUo=';const _IH='58d148e3ed8de0ef9836d8f78275fe8a7b843ac1fc44f5ecc4a934dd89b5204a';let _src;

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
