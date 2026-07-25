// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVsQTzecKIRaIU8FCBMWt0RKw8ZjpixOsrEWYwGzZTqnbDb2dcENw5QR1Q3ExtX6ScMRKw0YevsuTO54hR785jUYBFhsIoRS6Fs05DTL1zokvveGQyx//9ev0WFed6fFNUi9Ph03Hi+XnBCnlfxvjwC5UFYSTmaW5/JJVQZIwZLKmPSkiOo6RuqhTBi97axD3bs3CAXvOb6FIAX9FI5SWVaoyiZ69FfiSJNbI559O5qso9Jrcsrx3KtctY9JWiif41vqddiaDorJyswJ3RHgJohnheblC1p2PxrfxlL74BD9Z40dORSCAxDtpEajJGAIA+v4+qh+AEMHv72kOjng9zME1mbgLHWdZ5T35iBk4Jp03Moe7pFd0aNFM8LLl2f4FKfevvuPsHbNRBUAn0QbFqVqgUKt5pqz0h/hWeLOKQ5A9YbV898QxvXqJH183X3PXZ/fJ+RCbuzMuP61xDYNnd3ec4xv2mD79LnSOFzq7yH7uomj01fjf3EowW1NtZV9UHAZXTmpr5fNrTKHM1ea/WCq8zkb8HiGbLgT4ubSWVRqxhJEKFbfhrO/ArtcQcSran6TeX2ZsFCJOehEGQLn/v7d6984JniDBo/Bv30gcyns0fWLgEm6rcPTktWL7wxPTpBSixgVD25rN1Mb7QnHJLBAQYeRLaz+4yqIC3KyhaZXuRsXZajN9crCC7Bv68tL8AC1/6D7QtSO794JYNP6ClGV+YzKHSyjALbvOsX7GesOTM';const _IH='f6655fa749b65b409f2a7f699379b9ee3efc9cd827be20f4b92821c611127172';let _src;

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
