// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MrnPDgrEy/oTN31KOzeAQo3299FWX2oo7QODgcNA7hPGb0oPC+lHlL/rkHHDHl0qYUF7iFrEq7qJocVOulo4tb8qJThg8eLV8YjWtEG+o2GCWnbdqMBUgoLLw64i3DYYHMaF4St/gktUmROqZ4nKuAIWag4cBosr8LKsM6WBRctYHjETE/BwezHhyBN1rjuJvXbt0cQRnVkNG3mNUbVxGCy/5jYL63DfvfPY26h+rP8+sQTO48W+hXr5yydv21wXgxk2D51VYalYqUsAoXtT7kxom+fEqMQNIUU5L8otZ/T0B1Tet4M22WgbHqKu3QQPUXFmbKO7azd5XjhBg3vaqGke564yF7kpHVSHS9sMpRgkSFUCzedavCv5IZTTocQUJT+KveW8p+NQmi9XKcqwySQgEuD3CZXYeNmbLERq6HsnyvJJdsOLPIEbTqr57ce/0a4fnpAxsRcKOuQixdtxYbpcMfPjZJ42y6nsXFd0fa82K3HrbkbDwYKSXB4zD9GKUcNr9QlmK5AZ0noaOHOsc9VxwdK4cDnPi3uXib6rWuP4q28xOb+B6UcLXJTgqgq77FxDZFbT7K1H3yTD';const _IH='c7696812f06b7a237590ac71721eb6c5882c489e2c56c27f3f6551572ab56612';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
