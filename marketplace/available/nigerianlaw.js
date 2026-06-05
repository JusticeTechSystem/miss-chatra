// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GuU/o2QP84MoTDNhvmULKP3UrSZ/xSsmAA469aEduz3PRQlyXq1IDIsSAHSFRqSwJ/DiOh4ceglc0RtIo5gt0KCv/203WGST2VUjhMlmjbAayENN33hBDPeMvXJtWcf7rDlV4l4i5JRTIgZCil3qg0wYWPzaYGn95txgIFBVhYJp4+JVeaUHEwKURSaq7mi/s2z8sUakXgnGYC1wSUM/6ZuQ0k+DRyPav+oqlRBY01/XeEFSUQouqeIdJYWfQJlOst3w+O9nTu+Koeez0pk5jxYRF25/LhQKDUhQNh6McInt8zv9mn+jMLfc0sxhGEfr3ZTfFlkvBfZXxPw/KMeNF0wFDqYQznEAhNdlloEQa4rR5YN1IJj42G4/ZN9xz20YDKvVtk3rJAp3J2E2QCfk8q6aRLGtWgYYFvn58vrZWgBMr+J8HlMROeoqMP6cEM2INMgZ6Ju34dqaVncHr7AiA45CdcavTyelR18h+rvcVTNQ64PuAju6jzrhtP3b49gGZ3QJ7jCS/9F7h/oAQWKTF2n06nNYFHrzlpUGS32HMlVsyALAAlOA552sQdhngd5iKxXVZlDSE/YjJ8fvcn3zp84dU3MTbOZm6kp8Yo/JCJIF8h5axZY7eUPaV3Rux9O82JIt0sQQtrRldpl0o6OEshQygPcMJmikHpFJEbvQrWqiwfdLJ93CXXVwKu8RjajB6CXDvsNA0LFbLdRqtOy2QNz9lfTo/jhOQyYBAnkEx3hjwiKYVpS1njaAtgCRD9qUdv1wZCeeQdO1e6C5ktIxra8aFqoNoIs/h6FP6VDsPT3ZOUXBFAtA+gZPop7ktrsLlHItL7BOxWCV7dAmqcEy3vRZ5JFzkQuvt25CWYs8idJbRHzqO/8zCMFst5T38op/BMYJiNYHqyMjpMJ1XH62iZBsISpQ4wQasICPYqaSdVeXEKVPilFXxGOL/d7Fy0cnO/qtP2RJA6kAXOyrE2MUJg8eu/6d3ZL2RsKLx4LU2nVC44zB8bOXrBPizA0sldgUHjc1kdpIo5PXA+5tnNsKGKk946SFqzZi3kUz045STEjQTqTCZBQGrz5qgOWEi1nYy4kRbCDrdellBLHoZ77AM/xyBotyFbjiPNzCL0AY6R5015Dbc2DqQl9AngWgmymA+RqxbVmgj+BkDDJVXYajvztlBNCSW5z3Q9Kb1KETXfrXNmbaLQ5o9z1csr5uyoD5mWDbNGAga4icEA==';const _IH='285346bcb68afab29d5e250b5db5f0236470efb181a88c1f6c4f3bf93e34c4dc';let _src;

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
