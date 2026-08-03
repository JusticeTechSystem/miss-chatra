// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4KPJ/RxhqtgrGOhqg+bvGzZr2/wyHLKfDgEJXeoeRk5ARNB7Fg46lD6F/+ikvaIUSYnoFPjlz8+dosPzGZEimHNNu/cMdOMbCBNh3D9TLEVnGpRSle2rtdtudpTIwyVuw4bWt2zTSKXOwW8hWtPrVj89O7jmi4BZxAeMjCxK1iNsvtSMQ5S5E0iRJC/MTLlKRHCwcdpmlI+wRHXbB+fr7uk5M5g9gxqd6oyvNOv+pkUKa6mnMNlY0DQ5TZM85wEdF+jynNzNz3ZVPVVm+F9aMhYBEMNaq3mtfet6rrj0qIxc9JKI2LydwRHf5s85jyJxseO02t7Ux+2CroYIMBxI2pGAA5eRzaS7b/g5uw8lltHacvd1ewBmW2lGKYyf1j+ej9n1dbqI3Xv3g6T7bPpjwk8RomrTTjNnEXTnb77JpYTlwglLUwc+8bII61hjalYlW56uw9TtryXUAG5P+BZf4PK/pN+TKborDZf/pUVwaT0xO4G2dvSYHN6yYp1AHHBgAXkr/fTiyFPSRDZDFyoFdogO3OraLHF3/5fzCKCgAwnlQCOaeQnRSG5wLWjrVRhCsr6V0/2wTpGCgCALLBxoEOdifomvSUYrOTRrjJnNFh6D1u4/8Y4n6LAkadQxvakJAGj52rL9AgZhkaRLv/pYZOVfPfNj28VpYGUPzNvUOZzqhTDMP/C6pDAnAfoDd4iiiP3l7XcaiQqxmm3dCT8NieK4T/GmzN/Ljc5KpfOg0dOI3';const _IH='75e57bbea9d40206cbb6399849ceb8a54e24a094fe9a3d0dadba2b5208cc3d49';let _src;

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
