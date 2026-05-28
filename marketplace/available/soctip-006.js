// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lsNdbYDlRzM5fryjWF3+3Swmb71YA1288C49CNRKQSFkvSXH+UKasnHAvptBQLZIiqguKaE4q6ZqS8bqGNcXX99LNuBN/gEOR8CrypTKxiFbrudZDYGnsOrBwVa1LKq0gXaVhSPlntaH1SGCKmTiXgBuUIELdHYnipsd0gE4qM4VFsn8XVjQgUtiSNeX0O/reaJj9MFxkjqPjj5xD19uK5NUsCac5z0+201nGmElxcFjdMK3NVh33niLNP2dZBJ5U9lc7PbY3fVtggyPB0w4R94uSB4QBvLNXu4Rmd8+cEoSyUbUQ8TmzWvlJH8W3g9QcQT0IuX/Hiiy47M/Cd5v6uLJwWyADobcnGIkbN7HYi/N9TyjS+nFOd5OI/z57J7qbrQL4G7N+w3/oBekHHAMkWDYNM+b33/osBx38J4OEPSHJ1dOh7W/vLSu9iyoHf+OO6sS2ZKPlvjVnUFxWoFTD/X9/ujNWx2PAt3NzcmX5G1MhsBmGDhostT6FqbFsDIBUq/qRzBAWzDNdTxWV8k6X4sUVewCy15S6958HZg6zLWrOZAwbHXkJlORe7dDvEFglGpR4lTI7A2ONjatFnMYyK6/Dh0tvDiixLUFAnhpNTXHpuzZjhpMI7mZy/j/lIMURiLsJsIE7e3mgyz84Ew3DqkDUBttVT154pbdONirHKGfcJ1DPR38LPp5iLbfz1Z7BSkiBz0pT15ZK/Zg4OxzpQjh7b38G5fysqbDxDKE/rRwZy/v7AppCi1htgH073ZCNchP8YmJm276CEngAwXkYM/kCJw/h2mdlLAaLPwPMWsJ/qvwDGj6nQGiYom47OFilk88dRnJu4z1UUXRguEuEgiqWPC7d6x6uOnluM2USP+eIA+wSn0c2e8VZ2UcQs65B/XmFW+xuwKvX+daD+lq4OBaiK/qnJzAJvhJUUOO7vegYPHSeLh0zL1m0v3/DuC4QSIlcH3rMpkRhL/pOsBvfYg1BbQvIgIXRQ3m6hgX2Mnz6aH2R2WFKl8Vp6fwdpZqY/OsXTL1MR/sUPam++3DyD+t3I9DRhwwAiNREj/SzLyjwGTDG2vhJXjwSQc9bA6idza/VtJi+4NW7AE=';const _IH='8ee5dc2ed1a83b35e4610e35c3eaa282918558701a1f02cf526ae5fd634c6811';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
