// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQd90FKOpLbqV7C7efgdPoDsDUXmFyJzk32fSVHGw9WrCA/WMOyGbrIy0owEnieF5FGiCiFrlOKcpifzrpWycdSrZPUeDF68s8q1zsAbtGuP34TnQi+vwi4EzIUz32vez2WFtp+kxQxRXeuyCwEFK+wTAtxpZutBu227TQeE6/eA61MedMlEf0yqlCK5IjZ4I/PhXQ1yGeHwVYCvQrYPWIjPPPsPmCFhrQBlcY998O8/N3UTWJM+S9TEFdZYuzzCJMPokSioNy6VUvyWQMORxCcthUmV6JANFcGIPNMfguNYtrU7UxPBnGYaMQkJ/Pugyr/OT0t75fhIpijTBvbmz0VM4A5vXFqaC6QGK2tKnrMmpx3IPpHsZ8kFEAg2OMCNipoXJaofLa4IvzM9X4T2meIfJJ+LJSn0C0dje1L+1kPMREDvCj2u2R5knIuiFpWy35VskM+1SIf5PjTHfeFuv4mVtPZjJcMaJR5INHhBhT3om2KxVIZLeExZA+DMjeeC7g/jHBloxz3NhXA65djPhXWc7ugdiG/2V4O4S/Nxb3voCBM/0mTEf1kFrUxYGmEeGDX/22arR2GDq2zmoFVPjdUeQKEOxaOI1BciqacDGc9zqz9q6MujorHoYe6LeLkp9zD85LCUjU2LtWWQCZy3NBDT2kXJusBYPImA5FZuWWS9pZvx+tJ65K0BCnB7mXJ/mZ2AWkGvugklaqBs9GDQ4ncVLFImWdNorp6DtpTy1NH9NvG+IxNVBSBDY5CjujigwmTwb9MwgIFsVs7pvow+vBEEkFJJnGJyAfjCM9oIh05YYW3vc3CbVhha9vOGXIttVZgHzPOOj/QHPfOLGIkMLcD8zumzfs7YDe9gZCm9qXq7XAfotMkof9leTXWxk3kyyOozxdntZKageNxMXmGovYrfx8ym7T2YsknjTday1chmUq6x8PCAJ70bgoNnVqvVGO01X+OuIGFYuOS1adtBq9CoDlyUz4AQkk2PWomhAcVi93jXRCWG11JLszWRTm7fXGt';const _IH='a025110a46868f9bb40c4302c900dfe51e93d22a53359e1a57281daa439faf0d';let _src;

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
