// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P18enlGnU+YfYyQVGkGe5ZsNA6K7taPyJMr6iHZPd7EAOqaGmNsMizrOBvwE9NCZGvYqHrP9l+iEhT07Sxj6e89A07GNqVeENQ+FbBMRRlPZkFMkJ/bl3+V8l2v3BAvH6kuOxEIAbA3LLAVTyEKN0P++tJ/WWzvtRItECe7ZfreYCYJ9SDVjAmJNH9EAo0JQhRyY+UZh3k/mzN/MiYDIEBs+f/9XAwwth5hrcabwZPLDoYlaa3Fc4AkiGz2JJThHSFKhZqW86fI4F4r9ypbw+gHkqz4ZBfcGfRrkOvui8+qs+96HHk/RF8r7/LYVwEdJQZX+I4tOMk6PZFvipIsRTCTzSIUBMLT7RYy9+Nfe+OK8cKMFj01LV6Jo8DW1mlSDZ+yL1Hvn3Uqgs3hmSGqgkaQDvZuEooTz8LgXa+yWWrY4F/plDMqQcMRdUrwjl2VMx30+KcamBtCVTE45QqLVJ7gXSXbHfaOChj+bNzyfOZw+S6PoQixrenDWQKGB31towlr7R1ftb53qElqlwrDrQwt+B/CNVaJhOerWjIj6L+h1SggPO9MbAXUDLgMjRWfBU6QaqAl6vrHMLmp+dAiurf4TkcoGyLDNA5/PtoR1WkSmw9F1LQmT3Wls0xELAQgBdzB2RVNMMDKSZgcd+FzyPNEucxT/vWrBCCsnCtLigilJwFmarrPcWstazC1Eem9aqk1eby4Qs3hrdgUqwlu/lesJ2HPAsvY2Y0jlKqyVDHU50uSd7XXvUZAJo+uoaFCX2riNvVcD598yw0nZUWmfjm4HQcDAwUdl3bLIAsVKTpSXy9Wn6oxb+Rhl8cwHarArPj7xrHsk/CUgzzfYgNAIovIUEQkh3uJC2lDiIPOg0FUYOSertdleqIiVsWh7P1DAxdaixRS/oh7HA7OegP1/HSLEmYUiy4hy2Iy+KmlUxgw4RTRNTicf/IxKBh2cI93MBYhmRg2dF77hM+AjdlYxyH5a7tGCb2PE+sVBESjWNBUPCPlXVHB+uSkvh+qxOq/hnt2/+DcIK9myngM1zdklM7g7n+mRZA==';const _IH='c5f4dd3906a2a841f91e69113c9fb050c377c0ccea847826780e4f753c6f47a8';let _src;

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
