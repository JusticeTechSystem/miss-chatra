// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPvW9F3meDMa+PORzs6YLV7iPs5u27YFIlrWgmEsd+zKOgLxjeigDyPGqe6Q77KyrhzQijQagvklCBzTaXLdrkGvj7xaWemV8IO3/ISuYb0UyZQnjFvw/IgBBeJPJqPRb7vvFEXLEYiz+LOgD3MsZZh2/6gR10f8OylLy8NvKrFg1IbkK0SbK9oyArOuE7j1rfMFPUxZBOR4j+TDM/artj23VC29WglEQ8gWJYb6S1mYH2l9YiMTWtgW5iR8hRIoEwPDCGK5EGSTAofCic1kaUrm+/QSst1mm92sH0g3VhkPEOQGV9kS9K1R3bFchRzVkK1dGe9FPshc6sEEF0dRmyWTPm3Kf2WQ/ZMr8jfFh0LBckS9dp7pX6jecW8iVeWvyXwQM/iA2eOPFyXrNrukUR6FmzGQhwKbVW/FpnIZpPRiVprljnP5lIm4wKiaqALLL7SW1Ki30rcPK+/zC9OM2Iu5rHILx4qPl4KbO4xqRHOuCVQQscc0F/t6ScWT3ynPbAwUpEleEt9/81MuFh6IMSWog2cSmtnXc6tH6L5gdjJ3TWI8gOtb3r5Ex4JdEdxKv45269ZSOrvl2QiChb/RkzBYznqO0zB8M8MHPMyVAdcvGDeOIEprvhaBWoq0F1yE644SebuMsq9RRiVv+y2+lwVEk54Qm8c4KLHYNgEfRzrLe2blL7jNgKFW/KuG9XJ4tbpbx+rBJUt+IhEkMUsLk7tFMTWVIRIhVK9z9pWnlwcGOWf81LWOaoVmZhBH2R8bqu6P7WzwkxSSSE9WLO4QGH4gKwNtgyovfveq8DW+ZKN1NL/JtVQYUu3oGabecXNkhnTQ3vWsOO36eW2srHSm5G7XxOmFqewssteC+Cblv1JpV3FPQE3/yPCUzJ67royJMduErZ2KdgHQQuENfS/I+LMQpLDFr2IySZ5ZMy1ykODZ5ggmJiyloXpMUfYtn5Pj6uIzUoEpBwT7GMWnSY367VpQGstgSLLmBYjv/S/ti83JtdC4q0s/J/DEN/ctRecfMxU4SJF+sPnipjOmUrVAfuE9o=';const _IH='7ca330d3d1d0e6b1c52d86b1952d3451b195b8e7553a783007af7e64a782cd8a';let _src;

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
