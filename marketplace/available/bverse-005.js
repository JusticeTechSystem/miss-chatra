// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRciXMbEANaxwMCH416KloFrYch3sJAFVeq3xsN4vuy61uN2zTdQsmbct7wwfzdvuKS8HlN9g/aX1DlNpOdk9x/Zmq53KeIovCgWa323ALv/AdFyGAZiGQLJkLyN0d28Zvmia4/jENKR9fGBs8ibL3b9lQSKbPTEZ18mxnn/aHFT6waB0B2SxBOmkra4x594rg+4hpMaguTu+aB7iOuGbaum1IWlxBpa82gGOuHw1SgOYG88ptkZGTDsJhk2idz9hrlr9Bf53G4WwxV4c8mm4AiydNyZDdOeFv735O6TAjFppjrix9S1KulDpeWaBBnVV7F1SM9K3l5uWrE6avx7yH6Cye1UPzVS2LSFzObWnOS1k8I/BSUkAEkKR9kfsPk32L/2PszVXx2dDV3wfoDFalm2/SWUiLNqBO7JJ+6nwpuIoeMiANIx9phfZ/2VwSlgf9qBk32EQF/z9j01Gf8XHh4jAWUUvCjs2Sok2mSml3zBopNmlWYJAm5XktsssaJsFbiGg05bdR9LrTa87ytg4753iJjJdF3Wewza4xyjUZg/vF+HIdDUSx0nEDLT+ryGxH6npErkSBPYz3rLZ82s5qQa6NMpbB4IQ+nYDnHfWp6sIBGBaU1ytn4jipZL3/VZUMDFkzNyVNGoE6943C0g5E7uvsRdYS8cAET6+UQbmAxUgs+BtSnsmCGwUMx+A==';const _IH='d2eacd7be0922666208ea71dcd5e0b329096aab13cec50ce9f71edbb789f7417';let _src;

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
