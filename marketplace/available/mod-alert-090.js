// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/PcDm5bhtYV0x+gOKl9RIx8naK/tiBUbMUm4YhbT0/1ItQNUxgbzJG1Va1c4VuoSjQLzBjPZgYRnIRWjptHB3DlKOyixBmyzzJfbMkBW8nU9oddWG+39sceOWAtWJj9WGrnsb9kJjWgLP9JNu3jnNiFMlxq16MGJPTv9y+HiyJ4mnuQlf0dO2jeJRcS826uax4pQXRZsQXdv7aH3QBeBsV4x00VEkOYTZVmWJeOyA1I9hsIEYc5H7sNSrfPzIyYxnO98rj03fQQ8cgWYXKJcZl1lEJjPl/jOA97yx8m7qjKu96hW1aKM3u9+xCUH9U9AipuyOK2BlBRhWAFb2ggcYmfnmqVaOL068PbQvdeGW54D16ySM3CfJ/MqEguZvPXFMSXC/ibNzZYm0hcYMYJI+foZurIX9Q4Bxn37grKNM9VXDeZzWLKXSzXiydaUU6RpkrD3rsFo2xtabWpZ05EI7kAJv71R83TVG+R14k+a3HfEBef6OjIhwasquL6DJViNXaU1asKXuX6BGo4E1e5Rf+O7868K/yva7w9YuJSdK7myQ7qmYy45o/GQfqM3zOBhKmCwgsyLTN5wOYPElo+n40FyM0qtZdtOmrLftVET67tEWxCKXKfW3Spp9K5k1xuFJMjSfqDTmmhwwICuMO9cUk51Iabvnq61JHmx9oyd6OQs46L9g5mYoO6pVenysUqJAsM6HgZtKsJC0gJo+s5SU6L45yc+Tm91JIFbheq/dPYEuPmxDmWJFxhTeennGVaEIWuAUr47zuepdp39ArpicXmBuFveDyBnzN56CljugfmNOfI07tbOJySkvd5eDrmMAqoAzmDHv9r/oM/Tu/DmdvREgfsUA/zkz1zeLjotMvkq8CdguAQtJcdSdMPmgjaeTnz7uuM4SXJRerXymmmDFBH41sP0/ovNYDHaQdM4o3i80P/PjNU+DL0JuWvgHkDvxwsjk+SwZ9KFmVk9M3R9DAk/nPaWJGsVDjw5QOp6Ve4cRA7myC7xo4WOlNAmaU0fMotSyz8+LwCNSg568MI1nGFUVuSa0I8DBSvR3YZZr55hMIPJpJn9irS9io5ryTFWZI0PidodowMDlx1HrMwccUOhmHsdQFFALFtRgUxIS4ZcUCaA8RZnp8ppmL2BaFXivsk2AX5sq2ARFQOtuHaFyNxPmpxhjj9F5aJVVLHqGBJXKuTyqBh8F6u8kirwrlDLMV/wKFdhGG4X1T/r/Rhc8vGm5yJcGaE8AWG/viNycEamccUsSQp0dEH9VxhZiXnHcKQBNg4MVyCXQtmj3FAWBOPovgL29iYhCQ9L1xsZEVMT84VkmHd7zjQJ/iOOkNEpoTUHwsWFWRF6xbWzOnCeViF2dmOXPDbXp';const _IH='93e673b61177a2ff086a37dbc629bb0ad9fa67c4334a4872f69e1c06945a564a';let _src;

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
