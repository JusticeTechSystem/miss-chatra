// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0jYNdlhuLBcc3vIiRTeG/2DWzT5TXvKWe7LM+W/6wmOMCVEBQpyh4Rl6HPliTW2uMT+GzW4gsWaG7JMC8oybbvm+uGIDsWHpCcIR7SdxjjaP+SNKB0XYUaGfq+V1xt7Ba/sWwTp+EUYywfp4MZX6P9XEB/RDCwlzWiDl+/FTqXQcXaNRU2ANXXPn7353feF/vL2NmkNlDvufriRiLmJclYJeExJekga9DOSyQrn5F/68sTNNmavlXxgZCjWdzVs56oHPfD7JRD/JiINpEGLIz3GENNOlq5aAk7bTAdX4+fQQoVWoSHglsiG8inuHxHzgm2EP1zlaHxXB0UJU/2RlBNesxSDhgMfyIh8iOIy8Arz6vfBPjLZ1lazn409bvJ/Xc0gr2m+MWtg48MMeA0Y2vmqjcTmO1BH+D5rTxpUwE77Ib6EMqAcWPS4HmSafIRoIt64qT5ZiYk57J2OQCnkukXRUG7TQNdikt8n4/E8il2j1OSjb/oX+DYkigRgwILHGkxnRQrIU3gAvMWr7xUq7EYdu1waafLO0j9Jn6DCo+76ti/8wuYC9az5Rfe9RnYI/OYYxvctDrUqjDuuvZKHUW/gv2vU+mQCs3j49zFdMEguaRh5zgG7C2HpIh9eUx4O45QE6XSqYTPlJL1tAngLEI0kWqfZKlicbXewWBkYQAEXRD7xtcmt3sdbZD4AQdllMLpmDsW8oM+etjRi5KkjgFwJVC+o1eZriCdMDUO8spYtcf/6MLBcOvIAuqb3dFCgYfqH6nxanUYbKRcn2CYCW863WQpXjhGWSo1shPTGEpHdT/VroyM0pE07P/c7pX0j1WHjH6RN17kiC+j8WNBzKNV+ezvxZe5EJxVELexjCEGOo01SYAEV3mst3+9IS8weC/TUYNz8fMJ1jur+CIq3bf/qQdUSx5TqgIZ/A15w04/2c/aUhYzEi/AcAnWLz0TgVwHCdEY4yp8D9SlV0sSS+Uab4WG/StTQfpBr7zVHGeWWe090s+3Rt6jsx5DQ75kFcwkGRwkf+qdY/rqnOauZxlQFxC81Uqb75klHWfYXqRn5O1Hyo8DNkfCffEU7nEPFdKl9GpaiqZqb/JbFOK8i+xW0jg5+nD0wLgSDDwCeKYszAyDqevEd5qgZrUVzKzSHbe7qCnZNjqMGLBBXiKEl0oCS5PFgI4P+6jI2yToRgC0TvBhVjvFXK1WfQYGun+H9vsS4dnR7OX+mF2w/lOJ4Hd4gaXQUpNzESyY6TLJt7v8UMwDUVEj1HgCGHKp45o7QzOiwRZEl/jXzYfyOQULrYX9/Gwx8blzrZkxUokY0VwZnWU+uwRvXR3cR7Kv2yMlvHyx5RB1U1aKaJEp3J/0KMswfXAnz3nYL7tfUAUsLFcemWOx36loR1zg==';const _IH='7fcac9acf4e8a262e5a3fdf48087178bc57cbd6b126c3452d2bca851bfc0891b';let _src;

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
