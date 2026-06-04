// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y47QYRxC+f4JUFcjJ0sTkCRU15iFAlcB2dykuKV48Bm6TVAFTYC1poSoSt/0mUypuDuoP8R2VWZr6dIGNhIdYM7tRKj3ypMyWAtkEsZ9vwNu8RHM2qFCvLw9HUGRUl6W3JInonMY2pe5Y22ofC0JtcRmoEstcA5iQ8lduxjzKEQxjTQlh8yjn53enQCe8+yieTIEVHbA7DR23WONEQg7/2ZgiFIk36sShQCEzlp4Q0yqhXxXRKW4EyYEHGwsLaTsoeDFdvPHNNXZMHSBhLr+0mkklqZf2jASR3Ptl4dgWkO6QcVUtHAeD3iysokqE4+XducmvgkFs57OvZ09NN2a/ekPiNGx8159cnFVRfolsp0zZAplOZ6W5/tjYYvblPxgbEMOzMjwFON7pkWKNvQzhBOPqbiZuDScePH/bTs/fOpjZsODLbBDIL8H0RcMZsSR4pdKSHbp6pN5kysE/yNoDyImDCL/a73iGvCQ7dqwKBmlg+f/JUyKUAm6i3IgqHEvAT5TSZ36roV6ziLV47XCQkEt0uPIY051zyBfysW8f9+aULnRFk5BRQMgeMWldgSFOwoEcMuUU4N8502QYcjNqP9Anhx8X9VqdlqCecu0S4r3ioxliUD1PcXsDVW7oInZ45uMYttlblT3AqF8tetKgvw34nstaBahdFpleOw+EiVf6C5lMEH4zB9NQ09jNMgTdsFXy3fxsmKMivr9t0Fz0aZ+ZpegTd4pumcpoy937NfiWtd+VUPB24Hmh2DSEaMZJxmZs+bjBsWrT+ZDdau4W7xGA/fnN06WRDcBf7sbPwj/aKNJRddA1AA16BnhueyM5fzgmbJKOGBt/yFFiRAcGonkT10TFJB3xpHaOw1FQbLsxUU7xdPcLxwEqCMAN8wD3gKMlGHU76/48oQ1vimTnNFNXg8Y3E7IvOXl9si8K60yZoTmomCKeW1A8IMBHYP9+Xk5uzBX73VPj0L/oorzY4RWmac/DobAunT60HUCUUWyVZk+2l8CABH3MZwRsP7+AKH61nlTWau+isLokeEt8IOitrveFxPIl0AzieU/pW1vhfni7aNWkrrFlPLLRpYf/5YCpP/RM+STm/QrAme/RV2qKRzHDVIM9D6RFZQf8a3CkxoPBecnZr+xJHFpc/7/Ur+dp60GiEsAv6oh0emzUqTWvPyuzWafnXCapF6nS7n/PyCs4wG7gBotIGOOaqjrRQTIaEwsb+IvYukiPMVPFAT2QBvSB8Jq14aHnU2tpblMSIVhH5T/h3ER3SvrVQTEBA==';const _IH='46ac35551a46ddf5d83b4977b19dd0b087dee9ff72e4d5e554438e16e6fe78cc';let _src;

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
