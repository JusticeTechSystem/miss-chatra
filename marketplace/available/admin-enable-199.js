// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X44RN1ekK8HAqeOoELj7FQKeZUrujcvk1HArUuL4bJgVHTz8cpEh0mSNlFqamWGGd6OVuK/tfHSV66XnbAA4z0IHNzPVWvvGeldyoznyTWTS7cdEQlggopjr3p7rTFhjsf1pMs1VdInhgkNqh6aYnX1QxjVeSq92sYev57tftd+x8YI8JSZ9EFnmLmEmf34KhZYezwUYguVbpHzo/va8ZLnRQFGjaywW1suG9YIr3Mvhz/YPt3Epd4DAqZwmhXNCIHPZCwOIin+urtfufDUDIwE4yQm7/GWcTlXOZG2VLHh7qn4H85Ak1FCOmSoFmO+SnWC+uTyn0ztI6B48Gae4PS7og4tHhhU/gupj50GyhSeWA9ALnDQRj/wP18NgK4dGNc5SfcImeqhzQrq49EyppoxobI5PxVg0lQKzUKpIX1OvYHWM5pTIHlp9Jk1AdAgD4BFB07HBa49QeYoPTaa5Y45LQ3Tlf754LhArlVEbaZzEL4bKtu3vWfH6q63hOalbumTD3+F3oaci1sl4/bVcyOM5qS456zonDebARsYOpqugoghT02ZOKDXuA/3cVg4xZ4TbPOo5tYHyf3Kl3a7rpDN22QpnRWyCGLbod9BtPPy0bJGb/Im+O0YiIuW1t32l2xSEa7TRe6HEWGrW8kewoHNxVj2ysjLxQPycdBXv0hTlIvscygOMqDQOIaCc39XCCDS7bhdEBcH96UCMdYDmVIDHvHsQlCLIsWLmmsXcQ0hlWd7Ah19FbZnTePjLYsdA6bCfrcI/p8n7kpPtSGO1m72FMrcNr1Xsq2SstTAIz3E91THZjh8oxQepC6SAA+VDpvdnjmUTskeSVyE6ZUosbhEVs6gHhQe/wOiYztACpe+BYAMFpnZhANnN7XTKSWEy+pt9F16BERMyLjjTJRILxnhygNj9N7u2Re3Q2CZ/P8bv3JKKHEMr/u6dJsGmiyvpUFSddXVNccyzMszcXNkOiZAbGxsuVURXxX6lED6SMxgehHxTe5D9qyYDp+ssDSC4FA==';const _IH='2fb2e81a2f72d36a90fdd54ea9c32575615c807d3c75ef6c87293dc864c7ca86';let _src;

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
