// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSAZV3ggpwMIOQJxuqXR4Cy4BAyZ5QVm82IyBzebuFt2QPaWKBpbkhhvP6kU0heWyrce+XwAAEWey2uBOiWb2StqI7liWjn7jG5t8fMo8an/i/wAofQ35b1MY2HPLHnhz811xCMoI7PwxCII2RfUbwWmuxWPxE7XBKjcqnTEcBufDAQHGqR8Zxa4F4DvAgXBMa2lm5hetStJf9wHTLEP0ZpWr3fcSX9tbgSJr2bDcyQb9Ismdc5FQF4FBF9WRbDNTouwiSqL4sUXeidVerQ/KJw6MPvRwbTslTS2qRXOW7HX5sdeelEg8Hkc7DUeDQsE9/Syd/Hodld38IgYtDn+1iCTXKY14YGvb142tSV9O6Jd8y4eeOnTOkbel7vPCVgjpABvu7oCvrhw25ilu8pstInoDvdhnBo184W3Ajbi8aV01I3yPIUi7lnTwRIrTJIA6RXVicIZOg1ZZ1e8/U5kGis5qUOEpxHLOyC+d/jsGTg9t+hQQBTp5zTZMZquATuwAfhCa4/GJS8GytC0YlHuyzIaSxi/OWooQoEdcqc1j3GoVTuPfi5lRYVCIx16h1c+EdT32Z+y9RVuysA2tTB940J3G/UwaGRsoRZd1ALTv8960HPz1zraGabpJWTSbl3ninz3FQxe2vM8z4RELJh5QnNl+mg1mOa7WKL0gnoMkdHqKmhKToQS9BcGEP3boX/QZovh8ipXDDpI43uaLUKV+AaxywwdVLlRiM+Bgv3D7LYmJI4DOD3zH5BVgKPsbZx5TFzug7eVYWCvbM4TefDE8NCbfSpZvUNtwJJy05xq3GPaSj3f9HpWtD94KEwYk9R6fL3+OJst4a8TAM8IUyFvC4nTS/KSgmjiwhisumhPV+6ZXmasKCYxWTOhEFo6MIeUlRV+aoqArQf3Mg/2VXYsgzdzDVSbO9oFtkEN7uLGHhYb4qOdrNsiaBL3cMHgoRqFPPCKmcGLgUvfawh+JXQSFHqZxe6KlsE3nJs6bXodMpbH4MGbxXkAb/K0QlkMALdaDGFWZxSqg69sO8oPDO3cbPU';const _IH='39ac34ed36a88f1187010d484119b675e4e289591e9aaa86c938ed751a664cab';let _src;

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
