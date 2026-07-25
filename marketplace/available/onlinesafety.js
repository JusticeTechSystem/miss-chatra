// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLbNmmzxE9TCYH/MyTO2LsaFk6xUiuzHPk0zUpjG+KCAxSsWr/KesmXIpS1z5poccLMb71kjEADEr07v+bX20WP1QY94ZoHXmhFd/DVK0a+xcentCq/gjdhFhyCkvLC1gF+s1acHfhF7IcNHWkVQsXPwbevlS3QlIxXDV33NmOKvY/lVrV352Cq3cFL1g+9KNV0MKs8dq6lZUZjhq0RvbXScExAKLUPqOy4QtL+mynD0bJ6iFTt+HqVSwMuw1ROfCBMSsL7oz7VT3Xo83SHceR7BzAuxygP8SBWvG4LIlzhuzxC/MwecHpv0LsZv0ScpBKeobuUsGJ0sQpvygLdxUk4EsihjUfLxTBDlwanZhPqDF61I5MKP5YdOkCf8F/6eqFc825pCahnsQOu1iKw35a1tYwzKIbHmbGrDWNs0YQ4djxJ+OQfjR6bE34H5YJulIRW+v4TLHtbhhwZpRyuFB3srLHj+fTxBn/J8Ou+mhvVad+YRF1iKV+bNmE21cd+1lTmbziPhsQiVeeUK0nuRViy/shSzYQY9zZXIAI2XZtQ+jLgKNpeRKaHoHzkXA+eQNYdcaNT8szoaU1cmt4B1GB+kivVOcYoMGpGxhIEpylzExAVfHyNbc/MfYKYTzpg7N/sPBn3fdGVT/rlkT6vYiY4S+kOU6iszWfuiT4lUc+n9eEnd0AXLuDOpr5PoR2u+l9tr489GsJEu+7Uy8j54a3/VPDjuIOB2hprlQxf2SBQdTGilGlncE6nsw4SVff8x33NjjlQqvofvEks6MkSF3S9DG2lcvI/QmCULdC0klcvWCicLu5FB7nah3fExYJB4Rci5kODCAlbrLRzwJ/D11/vBnYYBRby3vyBfPVp2mQ99LB8FEkiJ85yBHbTNeEZLgKRx1hAg8xaI0n6J8izObtDAl9ZFUfujTxLZthRxzRDNzsnNtevXgFKK0d1jCcFsObv8PHj+iA+3wB3iNomHHLCnUFRUzveIZkSlNXRONGuy29eer6m5PaaNTjWqQCGdsf2mBUd8az13EzNQLNxFeVuM9IGXmc+3GWHH+19uCoqOU9bXZHWedW21df7gY8SFtAWz8GTttPytSY/aHSGGtsLu4JXJGbO590QBlGTF5EYROaK1Vi2LIrKYReJMFbRbiZ/ta2Ir7x0ceFBhSZ1cnuHJYXDhbhsam2HOdWHI3O+L+Nd6BYzMhXjBd6WkemUf9SUcasbVukW08=';const _IH='49f4d0bba49278285fa40c3cd2a587ad7158139973eb23103adcb0157afeac69';let _src;

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
