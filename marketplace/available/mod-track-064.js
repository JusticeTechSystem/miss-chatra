// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSrDKyJMCKcTyDSEE0XddDFWlcBPUPotWi/FGZypYDmUhuwgFZwqgkS59X4QbWdRTjfVuEmocJ2emaaOP9FvCRGZTHkDZzfvhFaXZWLr+oBg6Gg+lqTK+odkaNc47aC4AurqeOb5TV4YE5U/w5NRJ+WrNOvYyCmQEE5sCYynM4bwNOfy3tzQ/6WazU+hT1TC4aSoO8RWu/n7n/r0hZTwFwra77w/qISNW43wp2Wwd6pys8puHz+3dZUUMC62SVJwSHvTaMCGbeBjNYPlQS1MvHoL7qEqeT4wsD1wmnDB6Jme0/yFYSDdllzoMR8/gLsHXAGExuhTDh+aFBw33CMkzrFRIRNLeCMGxm7FUPSvkV+6lVCI09ZphwfocLvwkk9nWIPbvnj77oMEklZuz+LdA83Whyl/DB2dm7/R2GkD1UA6/8mylDIkSEuywAF1OyzdIAovSJ2+gftal35LHTwQw6hnrEjoyPeOpx6VceNMvn8UHNtABx1UctajUESanzmIlNUI9zB56IYIaQ6eJM2QpDFvX87vwD51uVEMUBhYHWZs18ngzusAKEhynvk8b/BGU9Qe9dZ9gm+XWZ02dJuQpeAtGOab6VM+0sUYlruRQp0I0YRZb3Q2RHY58Ko+fOcFJFwP1jKgBz6lwwkQNh5PxJeuQx032xTVsA4ViZ+qsOez9qudCKbkKPSYL64MJoI8E1lgpAAbhVrNQYYcbCjPrURv94/ZOIz77znGOyqQcTIdb4CH4q0+Kn4jyXyjYSUKnX7eh5BW4GdSoX1Fx6StF7YzBz3ag0Agl7MhYTtnmA929PtKq+DiAt+2xYrhx8sXHRyZQnc+mF3oMM4dlJzTghfjgVT9soYAR/PXQmt1JLTYoooemTD/TXSeZUkCAEPS39W2bCjDD2qghDBQJ/4b0Uvy/R8ZwoGLDhOVwCXhIHcMbdXhY8XhOt63TYQlg8CKktrnIMLeEnV7zuLILeZ4jz5CrijdgCwH9ocmNlfLIV4K0o+Eq8YuYIKOrex/tPlytvCFKiGIavJFP1kfyvOWv/+Z/sGAJlTSUGxhXSUSaK9QuWEgkwFA7gEju01angGp9+JmfWiP0cH0+u0jVUaIqNz4JIi5jJTQUMo+XtaHXEz7lpQZeRCBnJf5KDxtBM7Dm+Ran10FEyDPqA7GNhi1omWalRJkVd1aCKrtjiLwHYOU00CeUwZ9YAoah60HX6jtXNABMeKYGEtrBok7TrW+Mg5CDV97sRj9+zyJSm7ZrqyAKpvqMvwORaz032VJVUr4NWZi9zhFDBQ6Zt6OULf91FVhqBzSjKcVY2QLzmGFc+TNijYsMwQHfRXpl4vx9R0mSZ/9ZPIFo1ATeeVxNh1+htndnD0EWRAkcm2';const _IH='b3a2f64e355f34fa0051370e3628673963438103e4cd56bdcadfe589e328ea04';let _src;

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
