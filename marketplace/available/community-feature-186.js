// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5qjMO2si16Ay/9E8fUIMue560aKYFoOyaR6jlPc95Si2d7YfTE3nvSpfcHDDYOfsY/m4xl/n0zvYtcyVOLxRqccGy+x0joSdGGuetw8MTNiR9zal9541o3Nq+FuP3R2CFjrRDyj3hfgVdYlZR5rzzOv5ryKPEgllvbKRejwEhaQo6bOcPMisPhDb7UC91GFGd/y9FAdu4evhDqnMPjHxlctUVu6QL+ZONrpmoV4CYQPdMhqBFH2kJ6nJiREfWs1BnKWF3xOoScmD1YXmBdxixbIXmfNaQIQ4IQZPfaR/8qRDPvhwIDnwsjfWq4GfUEMsZH3GwGSsIu8VxvlKQPiwda7/UWOTbjG/86Sx2187Dg3nNshiaL58mYmbB/HVHQuKnjSY8uIYxD2r6fsNGWpIjxouAbqxahF2L6XADoYOfqjdNpygwwz3gBoeJ3/K2ExoBQwEH9vCoLytmOKPiXKvR3bocNhrn+gG+hO1KegLsJerIHH0HrfbFw7zY03v0Obon6OzUhi1jsSVRcx+Ok+/kZYmx0qerXpAAVhuFm0J9OMIwKH5Bn4JmnsdAyYvHJrgLqi+u8xONtvTub0G69/ahP4nQ0m8WkIhWQdU2VjiKAwokydFBhtAjok9NA0UOv4hih7Kpnh5gz+X1J15T82MlnL3GF6XHLCrjzMaJN0gRLmV/1uGU60drJ2Tw45XJ3Rg4FrP/uCtNubOpdMqzRp7CbW/SXDGqxKs=';const _IH='296c99e20a731c3ef19c0090e78a061c7dd2e7d9faab2624222b2eae15ce1992';let _src;

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
