// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDXCkHK7gm72zF/6gRptzg7pb/JgSjn9qgMrRhSjm+o8rziwvO1Loin0YCZGk5Pi9Egk+OGqPhiUBCZauUDWH1hIJGeZ4eDgQTBzbs4sWlRd9U4c/SzW2Xpu48B3Nx4Dqoj5IM8QpMlNIpF5rYl63/LMKDTAIjoq2eJdDbNvUX8spk687xstoXzRPfBsp5xzbfhWXHDz+N5D5bM5HvV9vIRFu+ymaIo0wijtOaZGesO2kf8EpUcbmU9Gv+yKCgt0EPkCygdV+xBBa8wEtRMU2A4RBnamA2g0Yt4mwvMloG46SBFyc0aBvOR79P4fPnWbQIoqZvG5R9a/0JvOg2u8EoJiaIyWNYpIXtkSxO421ZsvWvob5+sUaMXERyHsY/mF0+WTGImev8NXFoshH0cGkZ27u8NR0lDkBMPlMtW0insSn4M7+4B0bGqgF4u5LOQY0FUjbquV4JJyzZ8xrJXHBtIYbgbCfl7nXnMUAUGAxePtxrcMeochOXEu1BMEYUQLGv4fTWo8rtvd1M9T0jCYh4VDqcxhphb3FHjTeOQnPBMAoKvGTEOUbZ/9DBbSlmk8XMibhopmqVFwAKTs8st/uvmFq23KYQ1Ft2UwPWHCxm+JZ1JbXCUPZUmaSW7h+n52e7GMEK6WP4MUuTsS1c9Z3NB6HjEW7/nc4pVS0ZaTJsFl45lH3VvoktiNumngTX+51zA9eSy7bjedw/4+g5DpzvvPSwHnBW+S1ziAHfQL+78+skBct/4=';const _IH='81752bfeaea87680d219354f2e8fb8be537bfc3a1c971161ee005718576dc8eb';let _src;

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
