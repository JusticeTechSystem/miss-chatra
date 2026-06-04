// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VF/hrJ9U5cY7Jzo+h/ZmvUR4jsqwtrhxglXaYVDrWeHnuRAppBOjQpCanfmDrwHb62kou4W/wqc526Lx3/k94YY+mu4aP80o9xqNY1MBAX2WkxvF6jbg4gw17mb+LQVGtVzEv1BaICzTo9u2uy5/EGeawENSscjEkMcRRAA+aGlXJ+OTfkoHeQiNB9Ce+Urv42Je623u3cAvdUSjpuVmmq1l0uMYnIgedNX+vArw3fiaRvYZBskuGXz241FfHmf6lY2uUx48FZPCk1jmfjputdT+U7QPhpCzXdlvfXpxLGJaTYcpTBjkV4VmmeBSAWaXmKVJkPiILImWvsNOr6UEUL3tBhVvTXCzxcRV4XrEA9bAZSiRg+QbDzcjjmKd/dAFX6+5VlO1gJZln7PL/bbZZjvQnYTujXs2fo0obiUMuCOgXA7y1Ncmvyqc+iJj7APvDL0PwrhdmOBwAO86nDXK8f2ERjzO7uTpPIiRTpOrk8i9pF41Zd7Y7mwMKNrN4wvM+T5SIy+ZEb+U3IgHxlw1lZ/hmpTOno7Z7z51EuecemWJrAIkOnsnK9vracbV2pulxVPF2e15yGeSBQ5YI1u9tSQR4P8nvi36kujAC9v5pQ7WUCD2vUK4GU+fwNrAetgG+1IYaF1wtl+uWvmeYasExMJ/Cgt1ghRhj9ql1HE/oPJPVS3Aoxquc5oTt4w+kIzlqIHKviqgnuME/0EW+0lGsHi2PsKV/t/QK1Wm09YQDtPYcwpqtylmJGc2o/eBrdslvxywoXJylAm1ggBEa1i4BoxEwPY9RBXwXJSfZXnPPVsbkGTRZorQnSVeVUvMEBAD/qMs8lFXdNO2wTEZLaz+C/igg1wa+jPqjptjMf/Ng2nL9G8Tewmy2RyKDNmJoBiCjz/oPLJX+z6/HAZDwlsS40h+k/aSbJ8LozSBS3SlBHGyKffjZR+osdUmhJZIRgsrC3t+RoNgRI44jtX6ZFaN2RRvdXTGAMZhybos/hsMLT14byAdOeH4cIix+G7Mx+tcCA==';const _IH='68db14350b3c9ccf2f1c32721c9fb212f45b9bef6465197c6d0ac004efcccbae';let _src;

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
