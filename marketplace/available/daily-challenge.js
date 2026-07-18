// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDI1S3NZzMWO+NixI8Zi0IM9/M1sYEHcJzLDnB10rU2IFDFf9OdjgQ+Xxtx9+gblgJkQi0rAs0EktAHQqJ2rUMb2KEjxkhWmpR2NzU9tDNBeF0GnSOf35U9BM0mncJ3ADXvL6rwgGJaLhSWCERyTsEs5aGURjA1bdjCTFKk1t37K99dlV1crSU7DV6hXDc9WFrfP2Bb0kHYUxZ/nl9O/YHvwX0323zD4VdigVcBmQb/flfyDEcIK/XGs9f+Vcr7QGiD5QHNNlIAAToIbbu1u4SAdtlOYg/ilXyZbz1Ko3FYhW1h99kp1+tERC6hX1O3Qc6zvEfImOELH/W6GT0NzKkpWvrznIj77HoNPCfHCO4gALCeJgm3pJAUXbCa6CJlyuPum6DWGUyhfN1BUza8mmxKOPegSNZcMjZ3LUhLkEfwMsCCOSi5aRueljBI/qgSpRw/ECdwiVs16qvsA2gRXyExVZvPB5Wt79gl/bPdMgrMfiM07WkOnZLqECkxe0Ovv9MrNCUWP2OHoJXsZE5wv4Esd9Q13spSrKL8MFhelIsK5EmX/Nblz0RqXTt4CQx5/d4NvYIkSKiqauC19QylRmQ5/qNTtFDwej8zya/QQR8W4Us';const _IH='ca520d2bb233aad25ad2f049fd09d67019da6c84d602cdb50f584678a1ea3cc5';let _src;

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
