// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W/Yu89OycxWqvmRQU4q/h0tBHFtxaqGvMTH+VIswBA65utEe7B3mcOYK9seUKoCvGIBpRaTtyRs7AyD02JZcip7R/vY/8RNuZJ1z0/YVz3AhabAvmCl10aJT1NCKHUzA44BFks+MLXiLU2BHE8kVIV2pMlzHGfnRztS2M6v5+JNL6ttCP2Cey7lfzhuYqVedEFgbhn2sT7Xv9dFFabtk4rA6VwOYOLDBaiCONIeloxJngJ7KyX0A2V8U/mfIiim+nk16yGfryPLD2BrYgYNjpovsCpLKWRXK9005JTESecAaVSPzd47XwfBzvsFR5MmWYwT3i0DUOrh9cCQUyxlXpZeJCCGIPOMBURXAKcsdQGKPRlyIMT+O7/JdZfp5ndBg+u5UDx8QvZGOxT6bdN08L1lkDcJmPPTsHSaZ1k9ua2GcioS5dmL0aQtQkNsQhpHKGuB2jDedYOxlBbfekhe7IrO41hxqjr49qpi6+t2Iqq+dQ4CrnPhoNFcnnJUx0Yn8ozCBA66is4aNJLgaMDhyAiUr/hz9k41FhqHIrzeJ4C/L5OdwoBEdq3YxPIpEGZ+Z2bkcGOlgDA9/h5IdRSd3m5GJeCHoyEtYNK24WMuJcRYvdyCWVzVhxsAn5HkIqMbaMMtz+Z+6ldAxyVwuvm65hkbPWogTg8cNKcVHnmQAHD8p9fbZNfdGC4s6xDLey5FMmBNlLO0800qtaH85YdnPid1wjHrp7l0RqBwJzgoY29GyRC8Camiak86bg6MfkR5H7WsuLJqP+UR1AEXi6fvYMcsuXOZfDr5k4TptNToEpxugZ4WarG7ZQ3weo6ScR+5YltlQnAXYkUtEHYIwbPR18asCxj2zEaqQOhd7VgGWwDf2pl9r9Gm1x6BEr2IXrVaDUdqK+ZuuoyyEBtQLONbfT3FtH8+s07Wb6QQ5e7lPwZ5oH6+36IQoSE6sTP+YwNnzBkJ6iYOUiJdCJ5EAEMmHaEbdDYYT4Puyo9tA+8Cif8o16pTVWZtR3RtSNwPU';const _IH='e83ee07a325da0a25cf8612dc95a91cf0dda8d385c2db2eea07ccca4ccc5872c';let _src;

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
