// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQw4vBzyItJJmeUuXDGh885hqg//Orq1aKNpKXw0zP5lA6iYvev1NvVoX9UAmZmtXW6L4IJ+8/PXvrgbLTtGCSgPR88AjZelpRdnxgZmEHXiUyXK1UQewqPONq1bpuQJIzN5sB7sfoQbJty7dFQn8+9DL2SiyiQBy6y6CSDzRO8NSMarjPcDs+ujCL/CIdzWDiykqPrnerx4fXiYVY8JFL9fusrh4jhsB0R3dtRqaLmk5Xay2M6mv0lxWWPfZN6V9ameRYEMJ0lsEC82cwVNShFOrHzoyh4yS04f4USPvkpnkfxNB4nt5NDe2J8gPvlcEjTJ6X3DTHJvbmZ78yaUwPDeWGDEIVxsNA6F/7Q9F5V6+qWuFOMh3UJpZOuDL4XjNZ39P/gBSRkV/+Yhpc1KcX4KI0qh3uL0+OQG78w5r7f+jD9MK/0JHqYD26s0GZ36iDhHU/7WCKdS7NedniWOAEMxxS/dMWdjaH0ijKdVGMdugh3s39gvNzUMT4baYXkD7e/55CdSysSr32iISNONwzj0FqNC5R+fiUw9aYv8RcFYCf3P7/AiBa8exFdkoonjpzm2lQqfN+djCFv55k2g8W1XEw6JKV83OP9YYPPc7dSFZXwvkKakC0duQa7TiQZwVjcU1yn0CfiNgZkROmfAIi9qqztTpn3GT+Kvy7oonPhfHlS2AK2/V0cg0ZbZzaAzkFDY5dexsEOlJBJF7G4OMAYEV6UC4FI4WU8KJvV+nplcgaD7yRna20F4fQkar747MYr364TH6GmpG0NjCx9UjnDxirWGoJw5qNCU64s4ZKlBjARK/xkgeUynDHlAboyk2Au44VI2wvQHlxnM1pNdOB3zwGC3SEIoEGO/lItv5LqEqAWuYaEYVYo0KByUP3HMebXpRH0CsayAOsEnzooFnmtyb9l20ghsEswQsCMrr/GN7ENTpBzwta4zf3nsneBwH15Xr81hjPmJNpOcx5xZVDoZJkz4IgzD6dpGsLwVZ91nzcvApmiSXamjIpJ71cNHetj';const _IH='25af04cfa279d1dfbbdb98b5a848a444c970fc64bb67982751ce5f16057afdd9';let _src;

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
