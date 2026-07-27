// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTNkyTVOC9xmpp0zbRSdh906uTYUWV90mpuvoqc6IbqddVSsfmcIMTmKlcenMjdROEdJi8VLBxQZGoskhU8VS61OdbbPb2rCzoOSOJg3shtIt6/QBCIPjSDeZB6ZaJ2GtcXuhtNajC+p1TzYw06YdpFtG6sb+oCBdQ6ads1U7FsCaenAf+XURl/iGEgT4IUIoK7RzQ6mbK0n5PBFiVQEs276nPvTnHDct+4xZLnMTVDkFk4LbeBSVPGUJ7lTHKWNj38a1DZFqbDE0Cm7AnOLbrJlu83TJulRbVNcRayNnzjs714Lu7lbWH3PBFrP0jr6Q7QUkvYLTo+kS6NOb2WLVF5yw3wFAZdtiguAUSSNJIyxc3Hb4fUW2jQ7T9/seDbMMX+XiskNF3MHHXXjdMVH7zFR6dzJMremDwQnLScnqZjz452kzUk4coNJGEHKQTWGXECRbTu5bCtPGsFzqjYLQB2ZxNRLtkrsf9nmUL0+TVwNpYDRjiRO4F0+9OSphvOp+Am51bVYY5xcL59qOmt3qBIUPwXcGdMMTKBP/RGyo/xcDVkc6NWOnf8L4kHgM6oKnv5zDBr5pV6Op6lIrlifJ7hpPGs//G14PjxRsYJUZetjoBrXX076JGlwfYw8aaeqDtFBcgXM1nOgVwpc0uzpEDIUV2bzKRXfumL8Udj3cL0kOvXCyFqY9qSDgcspCknol6ENeRpMWMP3jGJrsXhDWXOuglt3Uq2R0AVNyFQgo/';const _IH='508ad9c559f9783b72af316e5d9e179431be7d6002bb495933c89655b32b6c0c';let _src;

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
