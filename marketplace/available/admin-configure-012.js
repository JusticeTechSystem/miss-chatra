// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQX413ay5dFC3mNEfFWOQNelmcBgYk8ZVTQ0PuuS5v+acZ7wauz/QVJqC/BfRxho3BljV0sg39D0eaqtdO457xA6i/ZgcLdOTZ0dLf9hCwtLKdGZ+SKdMCmBvJNI9UfCHI8HXMgDeDWHMeC0Gk5WyiNmEtQK5u+ZMaiG8g4GrucWg8ECtAH5ls65RUuDTkaNgeTJ4QLh8BPms7i7H/axuWTKrX9Lgg2XtLymzovpdoXTbMQyjdK6Mc+ubYjbmkSyz530oBLZgpIyOXeog6bCnpdz6PzbfnVnHCOlA5ODvxKuMaQduQral5qEvc99S1GzzkAs9KZDjBBIjFWgUhBNkcc46DZy1NPybvnMPwgvIrkolGEbr3gGZn3CMQr7TCTDIjA+wVVCeSoBS3fnDGRJf6M1aBd+cSXohyd7THnuGTrJFuiQZHkEpGIN3KXWDjbCttbzFAcSumSTiIkuK6nCGhlW5yKJ3G/BHreq5c1p/fGGvRQUC90zxO9uQVj2FTTADTTAcZX0LuSVcwPbPocdkVjHj7ydVT0a1EuWZ3LQZNGw42OJ1WBcPqRSIxapZrlxhNuDnFtMCcgKzH8QZ1DnLZnA4g7hnHwbuY2uk8L5yWRNznO5lubStWYOaHsQV+uyuKnBpdHucNL/aFqAnRus6X+K1XpZYPjonTouiZ0oeEkuNk9tspRu4oetkvWhG9n1r4apw4/8adpF6f4BcA8kme6WXQX+ZvDjZPUarpQvQ0PsRgqiiWZbnEtDmUtQRbauhPhJIogzYY3j2/jUXdhUVTII23iUM74Tgv0uqOOf9j+9sCCpp1FBcc70Dt/b3CdUmv49cFHpIdtm8L73Bw2TlaNxrxPSSwu8mVuCx605vKwDQSMeTVmWxZTezgIIFPcPquSgYDg9pO5uOxIhnF3do79ffFFdRVSCMSzFWdU/FCYeDCA3GEI3EkGC1kLWqGGvHvZsD5ugU9+S4VSQoRshEfaARtUbOujetKwx7tMnzU+Xl0LesKToO/C8Z/JgtUKpXTx8WMhiU1b4sFpP0qkGcsLGfA=';const _IH='e9ba6658706e7252cb343b63bec06bad8f25061cc7a517edf7746bb56a875f37';let _src;

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
