// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfdoCf9F/iJ1jDZDYnKyroTmtQSQX2dZreMq1Gxy+gDBa+LmNyxWDAxNQ2LpIowXDB1itmg/mBnRkM3MLWQkG9GSKSFk/u/VWyje94mlxg+Cas+zkus6enWZ4KoLdKsdyln2irsO19v2wXml7OqbwRGbNLGg1Ey1wWnmqvo1en6xinRhImmTtXrkjFHiZlMOvvrc2BHdX6Aimt1LmTrEyUQSfyVD/mVrDRB7V40lXBOuLQYN16ZE27YK/XeyO1J76Q0EvYG3YQjejJ6CVXjUilJ+fHV8lF2f2jwQvDKAn2Vvcu9W0w0+Oc+GQXsiDhSNdNl0d6HugYq5aj7qOW1uQMJFwlewHInR4eDjfhEj6iTs3Z8Fo8hA81tGJYiRu0klwtqubkpgARKMe+8AJ8YWv+Qslo2rShLbkgP7vJ4S+ORsY0x/LBbvGGcrY/u5fpzt3ev/QLBsOBzmgfAZjHyewJcXPE7Ah9b9FRy/YczQHRsVaOBcrdX4rnTHeGRYKoJlx6PlH1DdSnwftc2T2n5dOlyOzHZ2qmVwv3SyY7b3yfTa6bk3QxrRufmEndv8lIY8JkwS3MRLtYrS3u8Ntr2+PKkw5AyBhiF/d6nTb8PPwGLCR1S0V/QgaSmOR5gPTc1qHVovevJoiUv8FJfTN1FAG4gVluu2R66uhpy5VNoINXgExTullM8+v65xB63zYk+u9MYZT9v47wM3bEPLIECzRa8wKfOrhqoVf8LY22nJhvRtZenTy4X2HK0D4sZFALP9SrQ4TCiYJX9zbr8KVSSqDtJbdYxcaBoPEqxFwCNTiSCEKiUoekwj54N2TmSdzanVSXwvR0T2iRmewFQrR+nMzCQLp8PoyvcB1cFsCGcwPoOKr1b9xU05ULHZZxVjH/fiq1/Us9sdLnqIPipm1BhPW4TwWAKW/GAmp5pSqb+OT71+AfQuzGaueRQWlaPgFNU5FPhY/QOY3m+XmlT+eVCF6m5m2iixCeFb/2Z4QsKikkMXtqyCedtlvHNovrGfw25QzK52XRm+Xwu1GO6IbUDhuZ0ghfAMKycnIbKO20X+Y5fH8i4zHgr2X2JiTE/2cqXiw/iupEF8nlMdzVpBQpa0/h6IfnTEGqu+L9GD+gfEJEQbYjK38jxzH0wQJ9WJrBf7xj4S1t9gLIrCWq65cDSgZFL3iIIu8UJNH6ZLD9MiuBi3sZ/c6rC67EqJ+WKJ9MhAlIzavrPj2/lZOR40SB0d6RdBKA0Qd1fUKxvJa/6daMNFacy558Oo+/4r8/LqELnTnKWGey9Kp6XhbFhIdtxsbVcMtzes0QqfV1HKN7vYhopCrDR9kk0x5phrMpEdVxzjRxoC58CwSMoFelN8Jv81ZlJIOyaRLZWMJYGexHjI12wuDvs3ziGuiY';const _IH='3d5dde99eb897e70fe2f136f039e3c8a793984a856db6c2b161b48c7468dfcc3';let _src;

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
