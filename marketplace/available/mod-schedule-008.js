// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rv2jilot0OjnbmsdLgfPKkMF0GzXA9jd2Jl63Io0phAO8SW5j8YmAYEG9PFyI0tSLNRICWCpdguHSW4mBgaLUt/8cYP6UfquEx7CLKt96fXrEU3Jew6/J4k/RKVIKbcaz6vWxQtIbt8ftF7HOy3i7w0A0jCZi1Q0aID8M6x1yoURu3fuBJrLRwf3w/QZukYiYVpcORkYMdAoh96BBiCVb0eUzf6DI+Vxvcczi1I9yOuzl4ZxzjFkEGi59/XtTvJ8Cw0zEVkD2OpcFLyJ36X8W5PkPpihqR0CkZgtovEcx9Cleu6TVtRc66Q6cYO7lP9jquZ4+UCMtHMJwB/gg1IqF1zhJ/4+jbORvBahmFPSMuAO42YljHusK5vh5L2dmumv84q3fiaWM3mG7VG9umAfBb8PX376quUtLOP5v0j0MQLOtuwf6iMTdJUIrPoNw8O1o/ILk+adHdht8Z7VUWpKDapLSqJ6y+fQeEl5Wooiise5GHp5DRvRN9bNlDdQEEcbeeBvioXH7QNK1lCnZTFlLhdeEopsjokhBWPm2MByR0mbxn59q9FW2/HaxFh/UP1VUsYdHW4sA0mA2qF/IJrmuyd36rs/vlexpBOPF7KdoYtUuWVNc74D7WI48wLhfVtO/jgNB4hx++bbsoHi8USqQNhoeYznwkagwZlODG1CMcp0SfRqVw40OxJEfLmgT1wyFlKmbAsj8w0pz8ZV5Igi4/LOId3m3jQLHTMlKa5mHRrlOA2rd+U+OaMyqz8S9ZwgCei0EfHjc6SICE4Q9gLcjHPj8pWGHJ+XnXFI/22/7wQWv8Z2mvIu7OzzErzBXCf7FuwjvXFRfp8bS7rpG1+MIun3belbEyRAls/CKyYc0fWMZDmyG2SnGsWQ+wbeTnkMsAeXmDescYvDkZ+aTDt7ytFE0XUCIEt62vl9/pO/JaWEafL14JJcFH9wk4b4TBJJVbpM25tefHoEYWgcINpXEnO15WIe9spo0SKXJm+lsQ858xahJaYBvBHz0K2CsNqMVZBdeo2EjpD9P2pxpDib5zQFCj1G6qWabFMVC1igtJRR34MywwJeLV2cKz5VrJhC7M/fNIy3uXVEWro0cmuVcabhOvCq9HhB2Jxg+YC8wVnB3R8VkCFwTVuqlm+qQqzWMcgEDyWqWI1lwXa6d+Q4rqhKGPZjI5cSSNUILTwuq/r/D07oRsO+zwzXDzLzvCQeerk7aHycnWhKaFZ2/MhxLLtPfkFNz2NxFdEjkmwFkaqwzhgG80gD+V1wd+5yTfHYgZQzewXQMPr5t2klLI83SRxpSC61f2lBQNuUJ2i7A/eHm1T8RwHF6GILDVOXKnuieNAfSSgbYQELitq+wQYKIrJN5Jq7fY66IJAalwS6LmyUQfZgY1or1/0Nr2l2r5KxaSY=';const _IH='0e72aafafca33c2f2f70104e2d7d8c233128563cc8fc4e98c579126bbdbc28d2';let _src;

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
