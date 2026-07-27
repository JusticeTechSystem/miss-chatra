// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBtAU5YztoONoHgCYOInxOyk+yTT4dIYmPkQGBXf3T/QQhdmt60i/3dOWM3spfIw/A4Hbkiq3f9G5kWTr4ConQGQ4L/LzEYOGQoFLtYDgZCbBMHSn78Py4JHySX2yJcg0DE0xKAqdpv4ZW49pPdz83hGnCYc/9tXFFGMwylcIaeZOGEwv+WUcZJjw1y9F2no4H3CsfpUhP8QxseqwUmJk5aoTddwc/yPNIXs5AQGauEOU6FK72YzSXO6Q2VQlbeE3WAdkpc2DEtrxE44jcIJ15js89rDMclIstm+o/6ia5qY4VBg7qC935DE6McE8SCF60pQ2d5dM9iDfDcMN6gqXU2DmHlNvXcUsv5z/gWqAUfRzauic0cXZSDkCKwyMar8f/eiube5/y3gxy7TK6oi9itRIyZjQDjB9lIx7qC0mJavfd0aU4r8DePtVz6DcOU8A23fmh9deYmtCGvDkG9jGDmH6QhWI4t5zzzCCr5HVeYZuUXl78uEBHfgNLPbGD7js621llyJq/FcqtPO+R8ge2c6vhfNqiQg8r6UXmgFXddaEcDkdUhC7IjKtGWfgTG4O4j91ypmMOl4vcmdeGkVpZjc9psI7Ud6z+l2f2vH+mCvagT4plgtq5GTG8O1IFSa9RILZDYBv9Ssj8H00YbJk+Uwaz5hpa9XMNC39MFGvzuv9X/vy5mMAsEhqfNakOjBmhfj/WNrCcrRNwnpW6q79rDaZWKtlHhN4=';const _IH='516a2a8690b932211d7a71054dcd11c7c479f070cde0ec31976d9224166d55cc';let _src;

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
