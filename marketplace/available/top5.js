// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N3vSnaznsTu+yjB920aG045BuaMcu6LOOaPxHQcex1Ih995AZdxSTZTBGS3BZJRrxnWevuwewysL2VTcrjaYyoL3axe3QrZvcpt19XVmQAQ/mEY6XnX8YdGEE1qZViDmXqxfQ6m3cOWPswsp/TcfX+2uWaam3+tKIHiPYT2Z1OVAoZJ0nZmva0PzoDFUUfMU5BpSBojyDLlocNv+QD7f9pucHLXFHm2Hz/WIE9epUyM2aHGm9/vPTtf2m4iOnQgx+a49xiW2v0+utBzS34j33hHvw5pIYrG5Zmjd6gl2nV/lOxLVYzDtGn0fqeL3r5E/RzIeVaigO0OxPxr3Mhr71tr0EXibA3nKuO/8H05m75Dx06tqPuFc/vUreyvQnXvS5igI6KlzKM24iewcbd16WRWb8WNelhXCO7DgVs65nzWB3h8hPRm5/iMBeYJSTf0tJzR0NmP+F73KCRf5JpajKo4uAY+y5w4j6xWYXs1syFCkOChcr/rrCgL3PoVXtXHJRZKemH3H4tqk3WAQ1eplGk12EX+0kNFRCmD5b+yEDofnXlwIGHk5LP6j1MrbEFLmEZldzx/aAOLQiL0wRnK80YmFUAe2fcGlyY34UqG+4PkySo/3Zo1LOqvEwEmerGELXVPYk2NvtSt0GAQxYR4OJQfM4nhIKE/fN/d88uTaPTDS+aAof4fhlRc8O5iCL5AijxQbPCToRfuwnI4L6ZVr1JlWle7Rg+aExA4QcSoUTw/E3EsJB1dLJi6IAtNG2qUS64MroX8gB5oipxgywpZLmGMMsqxZnPY1J8q/1x0skoZ7RpvRgWz3xqATgvJBEck4GmOh0swU4h/FUgzfBBo9bSpaJRGq60ZPPrISUz+yuNq9mRw+9b6ZMthgq32X0PfdVOYAIhNFuQel3OyltNwNviO1aYcYSmEQ2Tht9r8Qnj/SzmxZjD3/FC2Z9/IzsmG6edg89vFRdnBBSaO8ci++29har/kSXiTZg+KKbK0+FW/RLG49+rpVS7mgg5wP6BhAPcXTbSb0h9J6zavV20WNxIKz8AVN643YsQZ9CnE6fyxaXivFjF2PMz++BhlIbRModrLooyt/3Q8npPCtUdbk6GHW13c36sFCpqn7ZO3ocvVJ0oUJGeFeWjvsgdwVMOpBE/r6aXFVsFkIjhOu0C0wxFohOlXbquUsAynd1hjssLytKUNvlw==';const _IH='51594c9b0c687b5282abd17ae6282ab24c1c790dd6ca4323a36c46aec4a013e7';let _src;

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
