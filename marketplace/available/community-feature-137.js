// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTqA4fSN0Rgtg7aaH9j/2i9PdomyHJrAaVx/7u/BdUM1Bbj3hG59XGe9COkl5uWKwE4548vifTD0lUcwNTDCjqCxb2frfzZmioAArOWxYA+TvMTylQYLNECiHhCJ+tNljuGO6ZO2hcB7L3HpHi208tBTHr/9Bu/sHi3cQfO5+ZM6VTDrnTGc/RtwZ7jG/AMsQm+OJ1CQuLC3560Wo1S9iZbm4CdTZx4qxOHkCjGNX+NsjBd64TsS220D0uiISFPlQFvkToGVk9eZoB2vq8tLkoF37C2s82Jy0aAa2AEVmaQogfViIXICGqgG5RI12UKxcbKVaywMC7+dtEWaD70VRr3wrrFeExEYe172c33DG+qMlDsXtJwe2IVYRtvw7aJS3Igp96mP/wzCPKgETV9MfxttNe1LkbGqYNHnKlreCt25mhVpcxDl0IsKP10hvCV86HnwXqv+pMkVJ4Vpi5Y/J/iNQ4ymNbexsWGTduWwgD+WGVoBuv/YuWGqKx0jOYM0OPwt7YmkNusVvhJGtiPT+YIxJ87RrpRhPLRw03N6w2WrhBp5eKYenkvWLKu/duZNXYi+SBSoyJsjoJVaEWFlBmVb1ZlJiGlZyKJ9LOpN9n8z5e5zaA7J2go/ZBNjmjemTlnhdi3FGqC9itRz2ICPdJnUpAYpDH73kH762vPIVfjCTYI5XCFwXNGmYpBQzm1dLwP4pBKR0mGMVyxT87+akPcQUnY39bkHHCErKhSD15nvsxdw==';const _IH='bc0467cae357f10d995d5a46b9732cbd28fed13a92e4e3d513fb4964d19d8a4e';let _src;

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
