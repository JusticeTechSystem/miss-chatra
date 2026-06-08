// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lZOpgSkAqyEXEusVyY1+JmtKJXXus1i6uqzynfam8h1atIYsK+ILhI45+ZDaAEErTgAJ2hrPr0YLbVxP3p1hFUnxaStB8YhyUwGu+cxNb4MpLupjgAAIaBCpGDyETSv+jH1b/WBI0QSelJUDksPJlfJCpiptQUY3FTPTnsi5+OYvP9OBm/DIamkch96xj6vL8PkahdnIiCvvOAPkPGyzr8V7ooF6pXc+jXVrOGpZb3LxrsEbbvq5Kfx1qFxBBjjVC8+swIASAOvOYc65NdUAVtu83+M5rVymyWMZ5maF1Om//iN87JWII1aLNtbkT3Dc3Go8XdSgy8KoO8Q0K9eDVEOhbzRqAGQYs9G6YS9hWEm9+zf0gN0yqTkOv6cvnkAdnC9tgAjS7e502F9wKBf1+b1w1Rs5N1iCTDqPhS7GH42mAv4ytXsjZKtI70UddaD2aisZY+iuOsnRQC2g0+Ed3fzOKv5QkbBzNDFsEdJ0IORZFfoCKCCAS6ln+qBBD20pRebEMeW6oG78kBvmmb1G5amVkhP9bkYZJgIC9fAOrInODHGENyIkYrosVUL0qA5shQSb2OfBgvkoryHMSCGHhQCXeHuYOD8wI9oWz3KqtPq7ZcdbrX0HfS3ZpnJCkCVPWeLCtWi4k19GCRmRcKnUNUfB5ZP4g/YM+jdAAGDXlsPpU79a4/PCWz/4MexKkGrnEaTe4IoFBEvnnIXAM/x0cN2DWsEVxxTn50lHYBBjRO+XDklWUwJaVyNdby1en4/dsBlbA+h1zPfiOaKH9s7ih70tn1uoiBjuNHw5qyDiGMFIglRRkAQhe4QFB4MwlQS+n447fxBQETXrLkLJ9QNg2QDRUp+5KcH5mF+RkLeH4/bAeQEPLcdGYBdZFaMqIsYVj2kRehSDy5QqB+zSSMZAB14QdJavHr4Vt6l5dsX4WFHOSmOPO5DXzN2IKzWu3qhyUg9VU/+YBTU8aoN2zIqw6ylh+jNzRov6Vqtd9cNYf0uinC+QsmW4dGscBAoY+BWlVFDsQOBEv3IH9FlN6F4DaHlBdHSB5uAxsqg1GpiniXvkS1MgqPuLSVQBSHltMVLGehk0AkehKvRJkf3865wA6iUf2UhuoluU8OXIop9BRfo4DK8Raz9On8Cu/3VTkCxBCsSG5wPDAw14nWZKQbKMusnzhrJRZpocWB1xrMiywFfhIEoOiWhR7ac6hZuKYD+V9ma/4OZSqm9wZsopkTMUhd3e81uENsvOMpXIDq2d9KSxsnMbKRwBEuNQRTXfHyl9/JvF0ELPWBVVOWFSVuH9WaTGeF0/gWZCoHN5Rq7ASWaYKc8RBhrsanECZKKA8IN6dYq3zGGS/pFRWEk7CWfh9x+m9Qa3dVfBMETgSJG1';const _IH='a4d077b74f7051c74de6d21ecbcd23cf1b0c3b9c1fcaecfe293a90abcbec148f';let _src;

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
