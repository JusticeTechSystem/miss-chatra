// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSy0NWzeAI02ArqFWK3Vl5ci0qYDuPexoxd7PL6PnQSKtNXseiCHIti4Eh5upWrqR7dzOAmlvkSGixhVN1VdLwO/Y2MeOWykOSWCDL0BrF0QYmAOjfk4QvBtp0NoB33qO7tLYpvwRO/RVk+Bqsr/T8I/zthx/BOjTuVpDxlahZg5U6GXvdUX7H0uA0Qw+sh5umUAJa4mLaM0mhI/Wa680qb6/+iu+Q5dvlY3cXQCQMyH1iO26dRcOvhfZNEcH3fhVwkgUubBgfyK2OUrkdUT1/+7701aSmGFfK0cDWh1pmtYUf4uDUT+y2gTu5wUPupNk5L8zBeodgkv2FlA/ph8I2/2/uDV9spAO1cHxhtIOGMcxNlbZpdqzsYq3y/MosTTaS3OwskNF/D7I7Y1rfO+WK3Tzhf9nzSUMFghllExpxb40jx2ey3fYwGrX2FI56UZPcrSKR5hx9RExdM5Y3DLq+QKZLQzKAK3mgocToP+uS3vpnDJL7by/SJfaOCsmLmeYH0CxP2WojWCFbDv4+pnV/ZpqC3VfQe0nYv3ezdbBQZ98+SVNe+WEvpx7YOz6SGYPXCHH23pFiA9uZGSXF5ZNP+fmnRPvvHwjzqdxT+wygtuGSWvc6Be1bxCQbXMaPHBSBLjNFsjF/h3e+NVwkqiobTuyqv4FLufIy9h2dmIcngIG+MKP95Q8jqiQSaoD8J0sVOep4VYeWwyzZTs3k+7dMHfDSmiSR3WitmRHvhlGhFW1Y0wXUoSaBsm9DiIUnAZGqQHsOctkV+KfYjlEtXdcpIi7VIJ29ohQ2aomDRfvSupLe2YR746Nef13wt2CInJkpV3Tn+5JhCajAuKyRu+6UPJ9FDCvuE24jtnNShdT9KM9o5zHb/LhoTsprdC+39Fh/wO1t5u59HqZxITXUJnM/0LhDz8h8d1HHfN8TkLNr1ss2xwoAa3uQaW88NiobRfa+QvS9rz2iwgYREzyjRaAbJP5qVMHCz5f4tR6Bi8oTbA191PRQSiuyW76rvxClkNXkDBvKcvMA6qVRZk1xyQak8CeMFL5qiPHuhsn9w67NMxTd2XFkmmzLY2W1qhpMn+lBhJ5O7NVFDTDhYreC8Um5oX3r02Vb8CR6Bz9oWMW0frNjSrwZg+bOqoI+NKoIE8B45oBs05sqsq40IS2cMZvH3mUozxTb6j74AT0wJcMvAG96Vf+Cj2tIGvLJAEFgY88dOxBii+gFQ9XEKvOQKfJZ7XUMb7B1290Y0tjuZNdqLfvcjdkcAtHn8ypVI9hoXr24eZ1cZRiUNkeF+X98g9dlbyCxSwQfYwSKFTZGXKTQuEqF7SLX6nPWtl9wli2IBYPGGzVc4Au2fiUqxdsZJ93HZD1acRNkpYFPZ40i8RQcKy0+Iy90Upc6X/pPWIx9tVq2Qj5Cn3F78Bl2HBOhlA8a8DHJQ+mHPCtICoD7m5B7R5rj1FZi6rDiUCwrPHWzLjREkuCo6XzLVvUSRv5R7gQwtuauiyJjvZjQhfwqNb4h+VwSDJGRBEvbGktg+7P5b7IDethJqqxrbcC7uhWE=';const _IH='8b57bcad47ccf0fabcb18c252d0a7677156361e93615b4d701b88f1a5773c464';let _src;

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
