// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTXq0W6XGlDFjju7iC7gXMoyUuWjiLNNZcGV6TS1IZ7kJ53DELaUz+b1Tj6L+ldo/X/SjlNXyOBL9bc0RGqTk8XcXtyhAVbKWqVWBI+xWEu0xghoLvPlLz7hvOcbnhvzONq/zcgUZ8Wk6v/bqSqQ0f62xhoJRF9zrJJZrE3jHtzL3ceBlumdE+mWdcD7VtTTmi58frxKbtGskYDidS4zyo0qDJ3EHvzRoUOxuffrpUL8gos84G1TuPSfHVd8QL8UX6nPaYVNRBBN58gJ/VFdxMzHuo+L40bUtrE5QtHcO1L5ONxVurFHwsOzewBxW+bp3BmXfxsFMVVPD6+k3TYcMT4NobU8E6uLnUiNmF9q/UMID/XkpLriZ3dmNFtvE8XZGyBE/Y0Y5CzCVNqqzAlK2BmyT6QBcHBMEtdCjp9XGqlyDeZZtfx+6KuYw+eTQoLshtDHe6ZYAVFpgyK1xQSl7dhgVHB9xWx+DBA4653wYDZetdnjOWjH5lusJyqg68rdiNC5PE6ViDkIFo10ONwUoIOx0y7GsXx2ALFQzgheG9ntqrgiOcl0TPELVU2YAhQ41FNoS654aaLmT57vzn/S8owTY0IoRKecDpgF7VCoapvlENZI5HbjhpAg8HVTF/FR9AsNNLVNhx9sbtMzQF7TwmfbbV4j8hzxzeFrqUxRKMIc9B74zRG2cSSYmZQaMX/ldET9LtR4vY/TV3B6/M3jFbkGRZQ9clPtVlcAD9dtU5BpRUjqpA8UwClMtid9EqCC61aOPi6/cbLhoODjvqEL/hwKoPiJIo+4D1tuRVX4tk/6XrChjaxhB4+YCZK5ImR7yL1D21ZqGcJviH/MeYwmkKQ7P39sxd7w/btJkOYF5noneJkSSJ6eTFp/bZRFAU09Q/lr6/DMttSDRKSn5oHCqoLK5IwF7zd0hutaZHnPD1wQMRRgfwit3HCMzNkQKj1smgN5yhdgkRLsrjLtzRBUUYQ9UGJgrWbjpjwLg99C/CbliXXmF1YNYTOIqHQocp58PUxJ3IGsiu5HxXOIypXzoVxmIshhV7CenECKikDA4lxBs5Qq9D/eNC71QdFDCezv66S4xLKd849/g08wkTxJ3vw0icMlNEYGRY61YFf3nxGsDEDhI7ER3FyuHGwDVc+JbOOR3u0E66HoYnnoAsm/AI4uaMYBax4vuBJqKHv62wbf8NK+JevXkTzh53+uXTXMEF+N0FHfHWnbo+4BQLOD1XYj/3pOs8MHC4GLZsqOu/d0HQMj14+MpVdtCfBnmS+CRIXOoD0G5vDSjCtfWsqtxkVM0acSFtE12I0NunoJbNIC8pABZjgrbzLNL5h+zn4OgT4UTZ/DcIEKexpBJg9otgDB+QS+H01G3ULzP1nvFLsQ9+fgVTno3X6phCprBzq/u+Uw==';const _IH='639fac968205396fe0da790b332f09dcafb2ab6e3bee1cfc091d7727242fcca0';let _src;

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
