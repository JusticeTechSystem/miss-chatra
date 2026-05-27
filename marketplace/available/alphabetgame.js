// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WsJu//v1eMUx2kTfbxr7hW4f3ccAqzciey5wPKOksNdvbDrSnDunJRSmP58Z005wjFeb4qnbU/3F2OwuopfNuXDOq7j+khnBmfRDaTFrqGy+dzr5g6EIoQt2TDaayRDYBPU9dQOVAcsYpRTWWdZ3swGBHWbQnekMJNN/lOuYNZnNY27JPOf/dcKhlRw1Ju1witb27bMIuBZCIMQUC5kha1oc07yFNG9GPr194LfWG8UyVWgx9FnXvQlSBYGm9QnpZe3faXqhKfIjZjA1Clz4ZQFGf+8FxE3iB8M57S3ezdvU061n9CeaFS+AgDvg5VfImm9i9dhnM0/AXb1eDh5dFkPajGMNuQ+SZ9KaDoUie30Xy2Svidj2vKaLtPZszmST9k73nVZhowEFfSQcwRDarf2azNSe8nY687Sltde2qmFVvkMvp/Ci5wH8B2v9oa6d2wNGlSkI/vgzhf1DQi2g2RyzTL+ilXvpfdvlhwZqgzQ8npPfu0F9HX4pf1VkJUhg3EoG+e8sApt9MJIgNlWNeytiZNEURDp6PNmEsbsh4Z76XptauR/6fgawaVThv+WkOtUhr7QkLtRpgQMCrxnTzXOVxs0XT3LmQJgv/Inn5VG2VlxShmv48FT0hQKsIHdOUmbVTty2tHUhuuq8KoXWtJmPtBIFBv9+EHxgzrfXi8z11/gw5DykJkPLHTOxVCtn3+GCh8r/RQ0G8iX8n53g2qfejjPi+aN5uiz2g/zGibAeh2osIcpVaWLCz57GmkdKbGuKImFU6euJrlODrEYu3XZhJvwOphSvHJKA+PvvxrrGXZQLm043jCRJ65qlPTcr0cx0/Dil+8usp9AVE67+OagPqJx3weT5ZNS0gvSTwZihXP6tW9ExjdgNsPAelBLTLFMOQiravxeyYloXk9W5CzdPNXkiOO4n8sZK7Xg/66rtTY5cup8dvjUe2L2Zi5Kaq/M0HfGI1zIpe2OK41+FgJDbEdH9YLbRCFYhfqyYWf7dy2OwuGyOZTRQJYxcoCIR8Z2yeXe18yieH/qmxb2LZluJiHYPQIg62QxcbKVps5WJwNBqC89Y9gImbwfQWA2m6S3ews07Fgs557napnqhxGtfe9PbTfzTxrTgCX15l9Bj8I8qQJ64OSSdZRscuONRKbXrm523QRRTo/uCqv4RpF5m4a07rvkmuFQ+bPmRrUhwhiora45Cn+BOgymQeMNiqIPulw==';const _IH='d298a4b13223b0182b0ab2ce47c757f94eaebe52ef98e6711e16e510e03aea42';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
