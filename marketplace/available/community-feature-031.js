// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQutv+xDauOytTKUPfIvx9nuQb6dMe/HSusPgeOzveVRBPHh4DjtumCKvsJ7RZlV94LjhVQoSRn9rDM3bkkFAMxOptlJUvnOR6Iv+DNgsWDHRBEgUVxSBLHY29nkgDax7mSStcriGGwZhYTJnZUTYHacoD0CEU2xwAaih3Q5Y68b/mESiuH0hIiGTvXoQz38VgREihsDwaPOCHD/BmC54b440je7o9hCocZImX+6WObna2ccsX6Nlbf9JFP/HQWD+F/7AM4YmCvla/fKEwhpLTGFuYujUEqRzk06WWdQ++sr3bSGHdu301F9/JbdSz+ZJ+47VxGVaIO5lXAsOxA0U+BgR68kdc/On4GrELnHaSUVAWGdtlbGokMmSSeNqiLlwvtmkrGBYT6l/lDxayw/W04hgGYv6ROe53YhYbIFnJub7Z378af4mPV8ixwRBctRXKg9rdDR92C4C+wo3tCfbwRBBrmNaL77MRMob9IM6kUX9DSTi1RP6Bpq06MfGbOFA3scHegFREJM1l6SAXTChC4d5imuoW8HyGJs9amgYmYqHYz+iqEdoBBRdroS/uuUk9lw0cjPB1g51pi20d6yUwVdSgY3GYKRPNVXZL8hJssA9QzcBh287G+06sf63MTa8dPr91OtgHswRtiEE+ikQuj0Z7kZtVjYQeYHbRngnVrXUOAekzN4Hk93w/4Pzzenmpv3GXTs2yoGmGZAZ2o/sQ2';const _IH='f943ed80014dffe2e774b074abbb962a9be1af619ad7dccc80e7c58151fbb451';let _src;

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
