// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TS1Nn+7iCMSClzXgBJOgP3gVwXhAKMcxB3uJ3g46dWj60ZJi8CpFWLerbYnbkMuvksSoki88hSsJKUnOHbRLh3cuL/0dzL73U7hj/tMI3CY0a9dg4Mh76UseT2MfBkC51wEO3PhNThctpn01cIvsy/qff6WNdQjfbjlmv9PGd3A7NOO44OvKGFNnqqIs+crXkKJBBgSqfdpK5wvfhhkNKgsltsZSlhSVSvm9j4Z8YGDB356dQHarmiSVcBIlJVNm3NWu6dwHzfh3Lxo0b7l/RkzUjk7Mvbr/R6OrgMPr6fD1Rl1HV5moFkvH7S+i6wiFU2NgLH/VNQ/X6TF1qEcKpMawYCLyVPE1M7/lHC1eoCn9HIm40QuH0xoNqi2ZwThExTfTuKvs8ikF6OP06uyawysuGhWfJljhvJkD2nVujzdojZ25186fGcLf/suuyXQ83Q18105jyro67eo1T1v4+Kt9Q2lcn9y0Fv/Rz5XWqI5AA+vjbhGwgzG60H22qMJQIRb4KkHPX7AuDdJ+upKWX6yOMaMuVFb2XmAFlzMGugItBrX0fDekZXphM2MWoEWOdUeG6UZNTyDdDpihsxpAmwg9AJxFmo/nPYLmYT0PB7B2OfIg5/Av8QMjtuwXdDcAr5rx0boj2cxMkmtwgpwfxS/EMCUuMGwy1YbctfS888ltNPZUdWP4yclw/yGV00kSQ1baBZi/oW+qZTjjrtopxR3uV0K9844iquQPhF52iNuhBc+xl4E66ixqCP4FiFflPurb0yQlcY4luHCHHCnMnEylPfPrOIX0k2EEVcFSbdBJn3LRIMWrClQzMVvEwt4+crFL3alI3g/iBSHxsDTGEP53fJpJ/oUwi6m0Pah0N/qDH/4pfmjeeSwyPBxEgiPg1VWQ8mg3aN/49WKMTYbdBR9MXs+rBzbGPRqDZULIlgd2xbLX6OK41LBhR3BSBFLKU+PvFZuDOjO7p4wpBtIoy33YLk5hlUhqC8mU3jyIyBAGzeVRhqldGqHSyw76/HUa5gqJNw==';const _IH='8057e42b3f6cbcbf16dc7dbaca7a55b6b82ea30b37131d5c3eae33929f81964b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
