// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2CmU01GuXuiJo+ODLbEB/k/TVlMKH8/6ogvgk7Y211C0NO+5YBfWkM+q05moyTcrNr6ExdaUcFBeeBH5NMxc55W8Jc64PwhUevUelJgWMwNQeVaOsF7bpTZ7rqDIYz0b9F0UZdNh9CjtSZe7ZyrKBL+ptnXm/JJAoi9CPUM+2nnLsBYV/FCTQIY8JEBzaNzmy12cU1f6eqcJuKWrgKY21/wjbLWRPvvUc31PzLefyHL2okYT3Jylr+2coX+TDrhRYMpdZazko2OF6Su8LO3mUni/OVgBlQR1ju7+DoSCtS4KvFjKbMrdUZsiGQfcaAB+0VI6k7j+aj+yE+oDq5VaYnFnBMYELqBaqzA6iaz3miT2dwSfzikekz9GhnuTOugiJJSmoLaB05cBYU07KVZijK2Tkd6r5BOfdddO3Mo3NaSM0sIKm7rWngfWSH78TW1MXJ0AopgyHuZ8mlo8K4/RWUa/fifM4ZQFNwe15Xo/AzZyxDFo46cOIUynV47BSuXgwZnzPc8vERBvxwCQ6lJkKyCwWFcNq2PcCCFQAuFYAYfQwePEAefRgEnKAHOP+K/JAz1mtH6BHOjirPBkGmvCzFsbv7TqxUn0iUNBr+c49nnKdwW2thLV0w9NKCfV5EoTvt74eFgL/qSQrvU040czDiCN2Sv3rnJry5d/Na/g77/+aMcimjpIaWpCRCSUQ5OozVEOPW2pLJ5WQhW1TKgardjkhds9ql0OltgMUOXFAgujfFumHmbLeP62IGp1MaSzGkdOGvsaV9+mVOc1xKus6G3U6xm52PFGjNSyE6aobw9EMnwMGFiQD8592S8emgn8PKIsj69UsIasDtgxpvP5D3Yro6Rz2bN4MypACxeP9MFptbpEOY7M+WRT4g0trYllnUObqUv9ib7DkBrw6Y3fCh81YIYYzrB+LSba0XeuSUM79k6PDPJlFIwVNWRkd25ChyMLTOEF2rUBB4MO+aUlDrjS1jLx9yyYgqz2DkV7SgFAWe/JPrPSmHCINwtUA0+g8lgYLEUhZBvr5qrCsSjy3o8jbFZqdgPBBpcgVdIVWsEVN/axpJw5iPnpysdDI+/Y9bTW1jgRcvY0LGdfPHuPqniQcWJnSZzxkD3HYhm48Uf/+u1DoX3YO9Hb2he/n2TSfCyEjRjqk4/ledY6j6x0+atmwdbwGsWEhHM37ta8Gy4Vi9GoQfrz8rs7gksXbmMgXBmLP69TJ7dAm0rh9GvZtmzYoHQFm47itw+63U2GO2bncEzk1CE0zusVfhxJeoP0JwjWYdpAe4xuexdNGaIUOQEz+NJ65dd0KZI+fNxeoh0x703KZhcP++YmrxKMLlnoZ6twH2w8ujkPHw==';const _IH='2d40be5b8cab2bbd74f0349d9da106c508681a298a8b355d2a8bd3ae22124b31';let _src;

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
