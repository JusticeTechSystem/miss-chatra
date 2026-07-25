// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8rKs/uZukhzJ27ujjmTBbrwvmQbpLPjFBbymXPEik2IaAqPSF3kmXFgQoGMekWmkzOlwVXkxHmqcrCwH9bsN3F7J5YinNHYvcp8epLU+hN7qIXi5CVdUBTcbkNX6wR5P0QcLihsrp/nphgDx1xTkxwkRP+H2QV3G+Y2pj+4XFW0bC43CAJPiIGHE3JQJQ+7FK6rk4J2irKRV/7B1HSW5H6DWaOiJ6Z/+z7WOrXirdAi63EtjjStd0Dy9yw73iFos22F68CgOqWaJL8mPc79YJo8qFOM35qh5APpxgHCiagb1oVEb0UK737eBP6Q7rbolZbRjH+aL/4TpNlkpwR72cPwWfztO7paq0/hoyob6zSFDQsOSEHjI5fxSFC1PO0m7vRcBPq3PLnA4deXlTmrbZV4Ln0Qj+LMK8fdPDNE5J5kyKFca63lEw3/P4mQU8mwutQodMW2pvwkzVuwKLgl89Iq5m3Ew+/JsaCuHK+PaGcWl/9ZDPfSNaFLSXEUQREIP1wSrdU71raL57VkouuFC3UyMelXOibarhlKqI/Lc/iv1Pikb+WG4Rz9ydKlN/h194qnmiy90lKiGp/9kjweujepO9ZzlB40foRPujcEX26I11deK1YuXrB2xpyBpcpSYDawMZUydNt5vQoeFhYTiITdzpxKyFb1n3OjyW9/dDYQOeySNmlsVCARcD6taWhpY4wE+lFnScABhg+U6iQma/dlssOG3TzvtM88uWTe0k7JG41VeD+W1AZtI/oI9sb1erc8vQu8YzaiQpgi87zHvMrb2xCJLPWxa8BnobO3JnMGwg2rYRJDxjraWzZyY/afOP75CUEcGIFVBSEo7pCbdu+GjMubE/pAiR7jNn628f8TuxATShbhVZcM6jqKbN+TQ2TeuV/lGvbRMHntVkTDFZiocOY32yYlQdWMzWqiUzadMkRFiHMzkABJNm6dTOhdBNk31slrR8Ko1VL+LPsBO7hykHcpMIrC6OEamQkmP5JbqzYPg+75SlvW8BEJsw4DvNQAG4rBLr/OLYNXieUzb/qxTY5pr40ZsvUTlWI2iE11yBpztxcrPR4xVCQE7rUktXBpziXsxR9o4Yn4eDUZ1N/gifzzUEm89HpbSmCZJHtBGwXL8b81VF1jQqB+LpL6suHQOqaMhCaa3izuHzJCw9R5R8D8BKpwGKuJFYZpY0eCO122gEKwbsA9d2oMtfJnoNRSD4jaB7fRtxXOJ6x3Kh9SvMOQXQGicfTol3gsQK0rqo7snpJSClnv1i6LqolxBChus/7qLDsPoZ3LwTXeaO/PD2A69mbzB+cBsGqF4dchukkgKudXk1QJu/z865O5aiBZmVRTmmJGFKQGyuHtFA3qH4Lq8MiU9TlRGXDLY=';const _IH='fad1b950f59d20ce50a6e2ae718d8484f5e3d08777699f141b39b94d5c5cf392';let _src;

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
