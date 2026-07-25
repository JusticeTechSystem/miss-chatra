// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhNCqyX4kBPR30vOprhQguNr5Zzp4cXUW+r8YKvEyxTlfIn3Mct05I9iNdWLZL3SodIYbgVSrDBYX+ziKb8pPAvOazmRZFI8mhz3KO2Ujzl9OjoFDmisJVz/vqi3ziClThrRYC5NE4YGB2U1lyp2tWdKeJGT2fvRrork1jwHEQ7cx1P0HeHZCTpU86R8ik+fMaHgC0Z5jPE9FtXqeRAQWKVEajvDPBJWi1fwXCMHGnO3E+wYwDodGKfuedD4locoDsyKZVRwkSzHkofor0jADuED4S8gyC4q5g02k1OKGmEcIpyQnLugLQK4QM8ZxCccCqZFJPup1g1mLH11eposSp2IPoyVXrF5Nxcfi2ST4FklvdB9iQuOdkCztABGLLDn0LsifuAzokU5kcajzzFoNfkEXfb372hEBKRd5z/2ocL1mIxK+MMb/5Z+AfUWqiegD2ljXDoJG9Fbwzj2c4fetvvKmR0GkLEh/nQqx4dQT/3Sv0z5taIRU3WQnR4xxYWgd2osrjh/KHcQsSOYWx+U2jyBt1yFLGDQskLRJugJVE8x3BG4yMll2PaP4/KqNLyTWRG683NU0SpNOS3/qKLLSr3yN8GUBN842mx5Y46F75Z6/rvLFPpZXA3MFzLy3f0MBM2v0OoiGF65Go8dKtTN8UYGBcRSOfcUbjOY6JpTYnnVdRDj7sgIYJJp3vMrXDLxwRelwdqAS1uJZ2eUtr/KJeuTA6M3dCAS8pgU+ibQv4JDqY';const _IH='78beef308633f284bfbbee4b893e02cc4540ebfde6d355e8b3ad614ff40295ca';let _src;

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
