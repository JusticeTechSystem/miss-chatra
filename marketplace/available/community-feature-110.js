// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eOt/KIT77mpvT5KP/NpChXRKmRzuKHD41AvLLrdxoi8PREtnJvyH+9fHMOnY3MR6kFUjex5XlbDJaAAchCigJFWZ1QFE3DJfrPalNjMPHuREABUQ1iTiISdyCwEHcJjWmwrTF7hgBxI21wYCe++agSQaGqUGsPWXQHNs12GCIVXnMy+WAloEXBVdY09Ic6qTCwxa+y3RqKSvvXyCJTrCunhuk6b194x4RleAVfUlVmFV3E/a9DbfyeSWQjxG6ZxsWV1HZlEcAv1aiEjpiRw69iEFfcC4HHnTpLkxKeEmlHqzkeNyYWxgkz4ka/JXVZrkNC8yWGxRBQ5zI7ckGVPtUw9+AOKO45KrXgOpERotbAxDV/BvI0zF3T3sMp/TxP+NMasA3iH+GI3DuhC2UeYXufspFx3hS4ZZCDi8ddereAWcqtiK7+TyTCEu3agDBUiGAerjn96lHOkKbUhLgrSYN/GG98bOYW2yklvJMl+4yY2nZjIxRn6HmCE9SEtKtuBJL+lsDQQj+rD7L8gvQ6YeZEa0S+NOJDUMTWW0fOqJwkL+om4ELKnUpvIs8KTHJzR/XkZvvYkJ7YE8XtO1RMqNZ6dMoCKuKEHXYO505owDPVJqdqBGvztNU+axC/gzOpjAWBb8HcAStqwxJBmDPEdjlSRwq61nLnMOLkW4vFbKMT2cCeZjEGc5qsANDrSHC9G55o5Xn/EexVMgQe8ErX0b9mjjSOvwiTxu+/608ACxuPCQ18hrEW7FZ3bv';const _IH='b5e77c783ba32c39213ef3fc726c62078b008600c6e2dcc8e72a2d87b7516a7e';let _src;

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
