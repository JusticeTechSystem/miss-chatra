// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iPM9p5jUo4CMwXt9a7ByCHRYo7LRK/WgLvrBqdNLTGas+6ZscQ9PBGYS/T18iMohEPZeY1yv1/+f9AkPCEi7WYQRAtL9FNCdz6Usoc4HAgkB0jqID3e8q2xjxfhxoeYfBb3d+1KHmpSJyheN6hdypax2iUG+yZwipiM936InDRrvSa4IlW+f1OAngrSOIWTerhmBwKBqvUMPJ7W7kaCsE3Zn9q+gbYxcvaZPfGPli/CcaOLk2L976mTuunjVQO/jQmskU6WmTmOdTgumF0uNsII29b4Gma7QGnV5OeVIm4RyCJWS8ZzhGUPYwreDvDzEzDmLTPKqwZpDtD/foYyB+YN6LPxpbtFj0k9dPQEGZycjw/13x9ka2Xi/jfh5oTYRhkvVGehsSg2aD1xtYMwZFaztpwkJXJmmRrpJ25f3N/u+ypD7/kc8jWSRdgiynAmysD2Wmk65jOS3hAmE37XG3kd55A5FxzPG+Vov+jWSC8fYVLqmLWpCR3YtxNQhgtB+yfxMrW1z8u2deSY/HzffHZvJZcz+Se0Dn00M2i16RZTgeKmPf5EAMf+OwG8KQMg1fi4eTCPtIfTZ6t/uuPZ9BXrUkIREvEHvz0+7C79CsS5qzxJkuoXL4sZagnvfMfO+sd/YdyhCC3ZZXokn801u2hr3DqOnIQrgLpIZ+EsdLfeXTlmMF+agsbhJmbvCMM/xdP0cMh3lYyEP2XOaNLSW6hz8VB4moxkvjiW/d14h6uYCJWjmtXfFaWhOiSpfedOuO5qYR3FMeVmGd1QRveMu9mcgN9hffDtcZhdlXdG2k3R+zRL447/f8N8amHepmQZ6hPVgJM9rqzW14z+k4I0dkgfgbexlx/HLolRT7niy1lOk9lTuBVXLBe9iEqaRy6zTFj+MbnlKm3rlksozsZkhAVk/lbwSloaCuCkjuMrGp7VXJvZcEVEzfNe0sv8WkxPBDkhnZjTJxJ9KvJIPBrff6W3+YgPh0sVn2N4pe9+RP/BJ4gOpVuNqDypW8DneqLR0kHaMUkTbGRqvp7++mIdCOpHqxsCZrylOt5FxyiiaX2g5tAk8S4R41b0Kx214Je2iu8JJ7i+GjN7PnCc=';const _IH='66a0d4e3e85cd67290b26987582064984f54321f4121338730fcebdd08d2fefa';let _src;

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
