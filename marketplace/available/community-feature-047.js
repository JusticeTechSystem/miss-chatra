// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tEY2VZkAWhFXuw/RfFKoOM1tgqvzopwH4sidFYnsZCADj/EtBmSv6QXq8p8PN+4ExG4WlZm7ITAWMpsAxoB3HLL3BK6uj6ObrJHnIXVIYTWa1IPmoyRUp7FOAy8MzDXeWRSzEN+qM3miU6H3CZ+qXyNbXJysUJ9nzV9b3xBNkmiNOxbuEfgYIsmPI2epKOUdt17aCofa3rvHyd047ZsV/RFP4rKcuWJD4XgHSIqMlnnWwovBtr/1FBaXve9X72mI9jOwFSpq0oKvIZtFTUBm7feqZjjlc2LfYDiBV5/cB1FReuqI31zGv1mGBsZrpdlUEnjvow1jayA00x+t2p+sE6cvQkb1M1W/29CPOZ3Q1op1AAmgHW/zC+RWyA/w48eNHLOF96xsvQwkKJGhQfX+0hfLVPCZhoHJpNRMS+joTFO3wp9bSljIm5F2XAMQrlBKcfBq19oEO+EUiDfd+Ku7kZo5SFEdsNqQhyWx6pldMEhJJyngnIvY5hJRD1Lg2xQ45OWjkpDH3kG7ISFVdZ6uQ58BI4rpjq+sBq/LHtHDbHufElcYvFW6dd3ULb0ffAUZEloFMvma/UZJfQo0BpE+9i8fVh8pkLsSykn/cAM1Ilg/q1fWukLwvMEE+Es2ecqKbtyfrME6hQSSyTohcjXCcpThanqaybUL4/0g8OAl/vsHdHtiHJTGB5Na3i19q0F70K+hiHcqPAsSSMY1fc+FY3z1G9qWgxTQX1gq7b6Z8w==';const _IH='4e2961fafe21d13d04e89f8fe56fdeaf52f546e1f8469321db6e75fb9d352648';let _src;

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
