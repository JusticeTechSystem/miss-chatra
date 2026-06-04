// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SVcD1f4axuxWiD4tgnmwrAtorvtvTLcu/r5ZKGNSFs/EtxU9X+ioKoqYL2G9ibZwYYgJtCpt5xttD8VuOXFhNPPHbaS3956DSB8QDxvNoQx3u1/M1/boctIHRp0YBdNpFYDHjIi7F4QBQXsNUkF+w5iSqv1MW8x1DVcrp+TWj6Aa02Cho2UJ9GE9N33VgvE+uROAsd1LJ4uNOcakmGvri3T48vd1O7qXuuh4eQxxh+ZQLdbDskI9OcDkr/tOrdvPsFHEG9YT90A0SF7cJfSPYSgIxyxpWBmrkCh3lkMTsglg6JWF5yWDI0bh1BLOCb5DfHXqGeU4VwIrNIfSjcqkdv9M9k3BeyMELp0290Os4mID2+FAVt28Pq2v+KFSQubD7cc2ttgkyi8csaOtZB2HvkwBdaBHUowhAUjiU9RzN9TxiGUXyqvMQieVf2GOYU2h+FpFZwrYZ1ir7tgqfBQSMIi3KIXCcEieCCufoYfQBkcYbJwFEvXUjjF3eOcZPGWsToEKoXW4ziBT4C2xVfAAOJ6vwpSqzdM86QwrHGPWOocBabe5zygl/c0uC0wg+JfaW+PdzhsWMhObow163lTXJkzdTiswk4JNT5lzQxhLb0X+usEBCP/nJlDaNgG7cvYrjCyfuNFIqwo4pDlP2K5ooxrcYN/S3Fsw5gFX34F5A+55bVda708RZ3PRUUbYZkHlQs+zZCNfuoa44Sn/h3zFsXNcoW+l5IzH8fBh+CK2TG/QyjKlhkVAKJ7lV45p0f6cm4pnSF99/rR58EgMaTIiKnfiFoHfaD4Q+vcp+BRRvloM3YLBk1Gb0eLCue7ib0K6qDtkaCVm/Hcupx0BtO8Ot973APEGeEQ892QG/s+NmasIhggvOnzIlbQY/7byViT5XqmMLU2PPLhtX8HNqvPXuZCUSnMJ6eYi46zCL9ay/Nq25vApiFNJg3yqus8HRdlnNEcoDxVJTtFok6QVcOC2SsNJPzNqmic5eggNp6M6Jv/sJ8AGHI7yXw0LKDUyTe5LS1oTO40NmTcpGaB0UE1qmC1JWW8sUK8GSj6mW7bdgnjzsqAsZ+za/JPUk2lVgKAMonoUY5yZwBOzajk+JoQy0xdgIaWElzSFltengkh4EPnFnNKouwrMXOBcwfXKRVeQlnYXPqWquSIeBg1pFYB64oERbDXsmqMTtN7flxI/rB+LhMo8JvD0/Mu3moQjZd1goco2xQosHGGrxwwV2ASMFPcXK8unBosuPpryrx/cztXfhosA/KOm6YroEdg4x7RdiTC1hYuz+J9+kKtggmaGQSyre8VwDkDx34QO3Ku0FHQGWeayurdF1pcBNAUyVEcfaE87zJG7c0jGnLDuRFJGs/5dFqMRP845wQ==';const _IH='9169918184fff563e5d5d9c6d08d513452600cf4b8e03e4d09376fdfc669ff5f';let _src;

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
