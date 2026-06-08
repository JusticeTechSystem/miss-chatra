// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7lvqNEMiG0VNK4cNTpiQ8PIZ1E+C7PH9U6NeSLaGoQaHalWMhPVM+uHZRzOff1rPWtMtGW+5mv1ZlYopWaQG5DfBt4ymUIUgi/77sRQsn9hAwoD+sTiW7WiNtRundXRUGUygNW9UEDPCmInlxyHRgKBtErGZwJH43wc59eXNmB3qNCJ8lYLIFmP5TgB65zVDK2ca5il69bLeovkZ9hp8BKLP46Wqn89VA42Yf8bC9Ho2PG+zI3/A0Xh8+y+WZXtPepleFRD2RoCCf7XE0EmQMmCKTSwjIK+2I00f5lOjxdlXYRmyp1/zeHhAtl3xfDDB0TVblOo/Olp2wNx8vBrCrApt2NtzmftZZdI7/fa0CaERXM5HGsRprprp0+xLGaW+eSu+FOK28Nk5bNaJmyDfLSQMsmBHBDi+t8ZZDLhQ6XNzbEQYZX5edJMpL5Resc6ZX+hld7KL78Grfll0NR+S6KT2+gJWVlcX8AKq5H4rD5KSRpLffl1Klu2RsXI/YquMKI5xrEa1fuPG4gadpUHrSEXXdX1llR7uA42tkJLRJuBLJ+nZD5lkguqNrdj4toHXFSvct3lbVUCRM23BsHLiNUfqu03l8nF9Bj4XmzMrUMvoyJMb7rIFRxtTdy3N7xgsEIRuMr91aF6ZT+qD1/97Do7urYspJNlXophAhasn4mYx+VEePyxVSgZJwuxjJcM3ldLC95skZsLffv/Kh6RQfFOJyYNlA7CiyNcofLLxraZK91Yce+x3vC0Ba09UKZe/askQ3+S2FKdZP+MKUBHwhaOyrEFzMSMzWdb3kUW4lZX0/wzGsdQnQ0QxSBCBSfvUYAKxE4YX9TguZg4AiLv3jR5Vndc3nTRUEbtZgknNqGDUN9O1epgj+x/v5q4AAzh4nu88Ymjiwrfvk30VcWf1REkT2O88iFk+zFIs+6J+pp+gLd3W2/UzBRVRBT35LMNIXApyR8SH4Wp7TUXI2pV+pNGz/7CZS4rF03V63/7BL5a/yDs3hH5Znlj/SzmT4weWVmwYfSKXTxxrmhnGnlU4ZMyqzqa+Jpwrk/8sSNnXiMWi0I+LbWgMls4otBfoyrrVzcwbnwDzf7gwdNCkLPyVTEkmAOS48ZRDiuh0+BaE+duFoCfXDbplS1efB/cv1WwdWpNGtOaBZyd+r7kKsP6Xmu4NM40qqh2T9sXXuFwWKJbA1DDEEtGvcXFMEosBrj2RFllsBvtvijVAziCKg24QyLPP2dqN8gA=';const _IH='f03452b382edc6eec874b2c2e47750b2f7dafc0c57f1733814aeb778e41d5720';let _src;

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
