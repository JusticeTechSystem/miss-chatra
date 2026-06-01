// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/EuZ6UN5jHPHd30AiYuPSDcEsTmRnu8n46xTsKngvfKMpjuV3cDW6IvFkQm0n17iS5XEB0QXDaQ/F0BqL0oXWUTn31GgJAi6t/CThNbbXDQqgB6LfclyqWKJ+eJICYcq8ZhfE7yBGCN3Rd3s6rfxYvSBPRbV3mVq2q5hoMlOnfviZwkADCQhlo6Tr7+2H8Lbl8+kbVGFiCSXDDU8N94mIJHPyo6PTQ5PnIUgh0JzIhh96U8hdvcP9GZgSpI8SSkaRLiDcLE0bILKeeGVSZFd3noz6hoSjoMSoQ1yC6mFgt9MRpXjHcvv0Vhvoorm3T4SJqzlNOK2ANhD0rVb54HDX7mnmqHLMkTIRGHPBvHKPQXNqfFjQRNoFIqLLEm8IrAVwMqIBXZX3pN5vNTQ8RoC6l3gWvZDzBcjA19UunEGYsikSDLpse630kEjJFD6TQ6lhoRlKAKPmxFe2zDA7a0JpgVEAMVoRL34zIzf16QdFszwADRcMejv61+e+hxetAyZbsC0brmmP0q3EBSZ9eT1N33w6BZNVayoYwDpl0qL3jwiY/iHCDb8XS+hjX/g1lb9XJmLUvSBXwHU8uBsJE9bI10AXwfjX2BivryTdtcPj7/4aYqgwP6RKeMzeBTXatmi3lEbMhtleg7v38tI4tJZ7BfQ+qNVUSy/MjBOFpb5XRzXZwEgZn+pLZNmZltjSmM3cDv6TIKAOTMbEDECFsy4nHk7Hr4VX0nO/YuIhoK97yBA01ITaRYd7rTKALVzjXOqxYm3Nf+B1NF2eURd7CWrKWoBFLoYQs56XHvBpZTKNJcQlsE3hbA4iNDh9P00sh59pXe5eUfpH5JpznE3kn8IL+LeFaTl1mYplgdVFnTAFuJh4+f2fKnnb4bNkAPziRqroWioCzKNHskSrCuAfaVQ/SS+NyTgxmhbtahS530R50NnBWJFvgn3usydW5xAtAQGEHBQqXCytQaN7+z4eaVxj4/oKQZedOKAspthyxk+Zwm6Id/VHreCmTMSdaaeZ/nKBKs2aXWuoUiSP6LNJV1CruZQOaTEmqZXuicB8b+TAKFWmMU6yMoPsS0GiUGJ1Do1x+I7QtXJv3/CcXZOhcs+ctV+Jy8OS8dD1hZkO5xElDeDLXhsycf4ZfEMU8Orgsq38cOeLyaCsNCAJx08n53SvP7LTyVMiUn1O+nDZPTxTdyFm/XDpqAn2hwN01jVs/ZZcYMQT0qj1cXtaXQgqAQE2tjGNDXs9q17unkFgLD3N8gutIqusGF+UBuqg74v1We5yTqLFDbqowsxe8oP6LSNMh87NVxZ+6M90xWfFU45Wz6Z2ecZkteRl2dJ+s76iQHsAQ84WeeSCIGKbvhFO4udWggyNTi6Jf8Tf00QGASYZ7cSg2VIS3L6TbZPqAexVze15pqpBxf2r4miUIJSTsVRktPIM/3lHUY';const _IH='6736bfa84cf2ca7e9670028c18fb93f2d56d5c724efafff65fc6427a9858df8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
