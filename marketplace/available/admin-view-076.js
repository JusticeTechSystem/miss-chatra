// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR18Dcjxi3fgbElZA5Ws4VHfF7QneH3lzQ1c2YEqsbINkmpYONLXGmpd0wky34A1XZ3DWCWS3AjmMzublGPR08raIj2j7NqYcfg9r3JnyDNUuV2HHrBNuFYJYVkLM9zcR8a7BYOq/ocpWWuhMlu0PKvOD4JrUc1VWEvG52ddTwaGix2QRy2SErqgtzOswsnwBe5mpd9ulULeXRSfnQ/JKaqBDBU4H2YxMDGhdwyOvR03kmGFjOw/y3QGdofVbifvIFCbzxaUkm/jNjgNoEXSDwjQr/o66Z0mfyd+ZtotdPbNQp7hP2lsr6/jcPNP5FYxuMfkeMxBRPpAUsgt8bad07MnHaftGm5h/LExvr/1wTD9PT0weYX8Mm1f8mC5/hKrHu2oimgehuQr7f9VdEokda+dSLgIeoyCIe2qi9SZiZ6YpPVGP5CSbZYPAlXy+beOGrJvy3zCLB2/0cF3N/9fuRb4fyVYUwgxO9+/jE6ps75LnVjL6/M8wG8dozJ/AVNlgcFw/LCap+Nw8iIdooFvN5s7xwkGCXww9YxZgSmS/GqIwYzm7N61pGDL/bxY6evpYiJ+T2zOIVUzAojN4vQ1jygxYSym7UQcbl0XOCm8amEbfxSEmOY8//sP6M0DAb2H4hPnrI7rHmUUqaKGimIBmpNEUFY08avwo0oWcUSjRy+NsIIEkTWsxFDg37GUwV7c2Dogqh3lddCZk31bubDXor4Y/vMnOrRQaPFlxNH2zaujejJXHe2tEQIrds6HRblmwu4IZOFk2XzRCBZqmk5aWVpZxU2UMqh43RSmXxFFQyHLL9isHSIKvxSR3FZYRNq6+ogPbeDDQqIhIvEeyHPmUnNtpGODXHoNkSNfciSndUhL/5O4S+pp8VIYve8WZz8eueBximhSCaWXCf9bRNaarbTeHuf58SG/vXnZ1AJ9nVp707IoHKC2RmB6ceV9Vu5OztuKz9mTSOw/8UV0SFZdNkTLWVeqwa11tDwZfG4hMnF';const _IH='3b08c04973d6ca4ba5c47f20a62e5b83b848f4861eb2c067f8fcb457b641d809';let _src;

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
