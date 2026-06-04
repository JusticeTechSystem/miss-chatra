// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DSAZoaDGxPFt0vb+zoIYH8jXyCA3D5+fnnK6XQ8B5SzqsA1p1bqTZ4/WjadcDJDPAe5UFMdxecq/NhTXgl4sttACWVkWh01RzoXaJmiNdHVWK9K/eal2u0JkEDA01G6mTk7Y9jJq6IbJnrlr+n07PEDKbk7UMWNpu/LZSILesvfrIgjKLdx5ae5K1c2HenjV/D0oRUz42pw3KisFaSFTbCYQ/IhdZ8gUtabober/cKotFn1/QmmMSjmIu1hBHKNUnJhytYQnfbxLJbnhYw4ESIt+bbnQnRkoW9pIjI7HGre/mUP1jNM+P9tnKGeN0g1GHR2lsuB7KBR0MuY6CPlLn7KxowKIfck1StfWDVOh3oIXr5Y7MSMlSVP3AfnQmtQoZ63YvWNVkGH1UybDnXlKpbiEa0Gp0xZqFMkY4ZAuTrXJU1y2rPPXlgMXLbqoHXqHAGPu/6goY0fD3xdh7qi5DKtXMDJC0blrtQTWyToVgrTSus0C/+D0Ywv17xhOJah4rhyp5ctSkGqeoxIDD7LAl6+lPcG66ll+1PXbMZYu+VkmaHN/UE2g8djGtL8pM+EE8jb8uDkfNHJj0a5f7gqEODZBnDmN+tbTsXbFwt8kV2eIGqqPe6QQ8bEq+lJlH4EGlCyeQECY9Bf+/KzuW6ndzDEfx6+fCemSwb4tEss9bqysrMnUSvYBi/b3v+KPdwTGL48fVlEdu6cEeIZ7Sen3UAMTYDts/MWDAb/zsT89ssKz75YjzcjWvApO';const _IH='7808c85571987d9a02c9ccb472fb7b9a9ec78adacf472c1f7b73e036977edfef';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
