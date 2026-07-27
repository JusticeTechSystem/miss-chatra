// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDfydtM9aGQ7K7kJ1RPNsvAV1zlRbdRx0Nn+Cn63/NdoBK4LvXG4i/KWjez5jULcJ7hgxHAtUkusWQZY8cf2KRcOCtOMv2OyTv1jlfOibxk8ODXpdqkHAWx0KyxOtSt3Gfkt4U0faoVAr7xZMjD1rFbgm2Va+5Ipx54OoQEnrVV/PT+6nYOL2bg2mCSiNZQXPdm0ZDdBD28gyLIhXyKmCUxE+70AcZ0lh02Q2+WURK2onMwHrnYF83WuoXyGDagUvpNl1TFZCvLAJCEKE392mN4AUnpB1HaV40f7ExJuuow3d+RdblcmL/z5EMs8WGUCQtYu7Oby4fBpCGj6Rg7uJUxFT4b+GAESeE8kzkuFRBANpxnXsbrqllb9jaNdEp+/VA4OFDukt6o52hwiFbZtx3tDghA3LfipFHOszroTEbQ1+YRiN2glNRxFqqbj13aPtKQq0VA/Jg6lOrWZMcrn4lhyjzUpfV9g+1Yuw0RhfOyHBcfXg17LdAvvKJ5w3rDC9+pmdi63JXUntn/ttIigeMh/3SIKjBDn3vxPFJ7xdlNf2kzgrtzN6eNSDOmPFx6C80pEmSW0tpoLxBCG7jpwX2imVUrWeeKeyug4DBkM/WdcB2VBeTpIN9XtLSwMULit2iTzgqqaIZHr51uJ/rE5X+LmMLtJd6j6ZidhpxXigg+8iWdZ4J729vJx6LgBXdCqK0nSKj8v4O8cwDK8tLuMJHf4sKUOEGzlBFs/CP7WJCqf4HtXKMzg==';const _IH='7dea6686c11ff9cfafba29cf5743036348db076b1ddc033aa64fe0eb254c98da';let _src;

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
