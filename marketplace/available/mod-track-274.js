// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VI8q0SpUgpjTyjfchdtam4WvsFJuzI4yQSABsd/614xajTXpWiCVPhMgwqR/dNZmCtszjPExk5jwODiJkZooIMDIxvddmjwonBSiiMsWKeBZdgHRl033188LzTpJNTlCGV2WU8tuQ1VLou7jr0HM0CQjscblIMiHJadtZiRMnsYZ82uwz7gU5PJ1FAxiTGc9ofTB1jaT3/jZfoxE5bBSSBw2Rv4/ljjqFi9OtCJhwRSTZQU6f9mosfLJCuFVAsL88DQwx0BdkJpbmYkKtiTU6NXGYe7prEoU1xUK2ygKnanUVAnMqZx6s9HxXooBUYtuIEHvM8RCEhy6kbcEtFykSSafYx1tLV0H06LQn6sF93Luymfz+T8nfi4VaB20h361zRw7/6SZ847EaXoaXsNO0EK4/EG+tkXFCmPxVeCYIXMoE9sHdcdnSljofjdmBIwyb23SJVwMuMqlJRCxQ2jV4P6+SPd7TEHX5HA9NKvorRpVw6vf29xe6rSM8Z74inIS+oMUzsvo2QF6S4F+9G/0pert/T5op9hy/kPdYFXHANA1Orc92zTysM5dACPV8eWIG96qJg6s2KUzPIeCBoivl1AJLxtTpNAzhtOHjhujO5hCTmlzQ/2SlTjQQ6KEAmVLVMItR1JTZhQDpd1JTM01fCyrxFcd34hncqISfkabrxNzlpaLendhAnmTIj1lY9pIjpTLW/9cnklMtO6QGA8fvIQO+NIJixpjPPFoG72/06w1kKP9TqkHbUHCar31sPiZfwUvs6Rmk9hwUZ/60vXCy1EdcYv1opMyTW0uhRk52MRysglBHQVTmhnAk+lNKCYsLZYOKJCHAry9zucGjPRw08Ipxgxyzntumt8RKYXtSvv+/F2iS/98Uq+hQ0iVGOwsdIhOkA0E61JzpGN+CTxzNsNtNCFWDDqvdY3ASGKYlDEryPF0u+fZ55zC3A99oBx9QYtCLmvu4zx335Xm840OKkqHauhOg/WyyyZi/ASdmXT/DmCQH6l700Swcc/Oz1z/ryk+ZEXWRRkdhqAkZhiq2li0aYGUGbn5GiXf49vkfw5pkP1w/kppoL4L0/DsT3FIX1nJ2aJQebW68uINCtP5OWxGFj50bjuaKT0U/WfRq6nVEJk59nX+ccY7Cf/ln28/2JeCGEq/N2BaOb/cZ5RFfpItU0pBSRKGF0UKGuO4EZdsdN9806RbUxPQUMuvKu1U10KMeqeFB//RmA/FHVHaEqFs13m42yjTleuiJ47MvzDyBX2LWD27WE6CBUvjERY+SB4tXKmzwiCC8gDwDIoYweSg7U3rFZdBZtDCWwpe5u2TEXWiZl3FPmwdULxl3BqLjOEAqvp2AX8XgoG2AZ/yALek1nQxcGN7HhQDgR/R';const _IH='990d5c3a8a5b44b6bd887d4a8a4f0e4456a8ae162cd41d1ea338dc63ce82e71a';let _src;

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
