// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuMkNE7ZnOinQqPqBDMz96Gz+YRhsSx5qBuSOOaPmlFbquzu/pYq7PeBO9BKwJHuXQ435Vp+uZot4lM9oWBz2wteK/t0Yxi1OE59R/uVc9CAiUs49gTLbR4sWaPQi+c441KzfPhXlT1KvixrPt1kmthdfrhV74As9iJT5STuG8OX1S6Kh/40fovM8tUbcTuNbGeYwtaUPZJpONfTzLy+iQlJZ8LfxDa0KWJQxu0EErAAiZo7KJ4fpNWHpAnFlW0dSRFiUWAQJiIEh3oqSLYFEJKgKbFLSDZ+sPhYB/X2eQb+zeU2bbczdy+6UzinvarMDsnP1rfy7NTRhmWCcZJLMx/Nq5Nq4plsZeCZIq9SYPk1hNuTkMVB1eGuNLBeKy1v1VcymveZ7BO+/kemIVqgoY7ekND0R/cL7EjoGQsxGsfyrCJgwip9LLeP7qw0ALImMpPAsdC0jGSJa0tx84+i9Sqembj/HrB0eA4eHnBT0wc6zKHugPVzAwj+K59pZiC0spG3uQGgPEWfHqrdaF+N49Ip5vNHXzMOvvUdGcv24FYln63fH3sjEk+ATXuo9TDAR6N4nxMkSYGxGcq+AZ4iIAYkiagrFH9WK5+Ftbg2FWMfKhmRHd6hnxd1oFf+c95MUzeWb/NyOm5AJdPf0NAb9vuGNSguAY2dSielcbih6Xr7wa/shBRMefyrxOazZO6oOj/4XD2r+c2k1ZANylLtjpAvNmmSkFAAWJ/D7eL8ExH02pfUnSLDECHg3WvHTQZVQET+x3pRBBjuV+D5frLNHfZmod5cbf912NIKYteQZVonFthkslUMgB15IUihXokk1TNu1iEK3I55KMH7xaUOu53Ig4+fOqW9UYkL3Og0guoYR3oJbh0SeHhVFjqaqUnWUqIHckiy4DurAJr7MQF+3xtPJwruTeSD5fpwZiTf6YwUmmtdBj7fxP8z812JthDx2s/EUv6gyqqYQZwlBsDl/gBRrOwirYPqk+2CJlINSUU1c84dEtaGWydzu8HauQg0uW2UwMUUeYHM96Ig5dPawBuKsgGJ+OwCey4D0QzsuudIMzTqHbxh6nlT8uYVjg/JEvmsrQ2UqEc5FBxoMMI8IHkY8bqNgIvWyjjjZWpyPyL2iME0nZ/Rp2JRto4c+m00UdI8rYa45j5mFGeCCYZ8ph0d8wOKjkEDG/4uydPI9U33K/KqT6MgXEtdQrnnpluQCqbpYr6RGw/Db2VoIEcHwmLGyuzQv0MdJ8vnN+Ksi3Vg8yQ/8HbizjNZbLpPyZjDI++6DJmxPAE6g6ji+Z/5gNTZe0PbEGZdrUBNETaZLZZaqdX5nEuWe/IvlSdvSCimDXVI3+b30ApLpRpsoRmSGszJYWrMt8C1xS2oQ=';const _IH='c4cf5632349db291bbe8fa19f0ca618929a0c8ec61019085f7d8cbb7a198750b';let _src;

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
