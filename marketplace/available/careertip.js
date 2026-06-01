// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzxH8N2i1lh/AzYxFhWXzky7Wf9KuImBtoTkRIvBM67t/y5CfWmJnMw6z5Qd1NX8vrGs8zgnCvGi4suThLsSZbS7s72KNjVIjA987QPlgVew8o409j/cRfReVEv4shiDYwE/hXDK14tiTX7m+qq/KxUQ3LRbD/FaLIxETSpXfqsEur9L4W4xwh6T4acY+f5kmXI8e1ONaZxxFH9gOk92M6EwJ7zqJV2UtZn8l2WXnZ5uNvXPLQaeXUFstzMEdDhofcLtoMh0itTKZg7fNmG/ZoPBxGPMw1E3p3NL/CQ+g2aYQa3bu/Y8Mh/Ed5kNueBWPipjsULfhKKsHjUnOsaisqg+rrYia9x74xUHNR02Em5/oDaQWUf3p+X8z2iGqQ7HAKVAzxU4XDA077MuZkVixHo8s9oAoV1xTcMgbxQZuDTQBWjsywe+vJDmOxbTS8iNvbRB9DJvlitHVOGbyn9yYyg3XkUs907sKHfMiTRlhxn4YDdjYQRhAu0HCoer3pPG6RxBNSFizaXlSYY4xV5ZMlvk7u1hFoyGxKMZ1KtjWKCa1qB1+SPoZHNkCYv5ii5ZlYNfjLwleWOi9TQZ2DRGcXCR4oc1AZhHnsQtQ9udzL8txn+bvRqjc0HcO3wy1C+8CUpTDsN11gSOKsq0ihWmw0/DyuXCAonC/EP+NcEeK69FaySccTq9d6rIzNQnGR93dg5iNo//QyhS978/HSuDP+js8ZtKEFpM7VwXYcBjQxw+YD4wREn5Z5mhYnlhuXHqahL+zw6jhnh1GR67Y3NHQ29A342x1utYNT44rXhWBTQU1VGVfhtSzv94fXRfIJT0/gfVNtWN9uogqDzEwsb/tfLhuhHCeQGVQgYTlpz4lW0o+HmrfOR82UOn+T7gKbQ+pnuXsOdpRzQjSCpnpFARKNnt8hFHlhFq5L6mBXMjIn10gdFEh4FPNZ9ycmuPN7euQY8pXkYzFawAYuQLQswBRiZGEISu1LoHxPf68FMsPXiRAkuxoXE5MN3mcz8LNtIZzgIxdOX2T98COxTZ3ETARukuF9T+DNQeAd90k4lWxIJ3Iw2fE1pc7M0C5F5l1ebIv2yOLnhXh4PnNVoE89KiBZRrohJYSDkTuTKpYCQG8XF7RBuLKB8FMR1lVEHJugJpt0lAC/90agZ/afNxAs6FNqqAuvcscBX67CcfL8kJNB8SEaykexV4Ad8mzUyCec+g1PQrtTY6MWn1';const _IH='ee532b88a66f70ef6d206cca0d1df278c5d1ff8af9ea6897024a2751657dd81a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
