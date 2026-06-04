// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fPkHi70kPPm+dFYtCS++EH21ifMwDOxhZsq3Xi+5lveD1G3WrzQyrgozL8KjfXzOhmlYejJ+lnMsVW/kYFdgqDVZDeYo0R524etMu2ztW6hMkVQjXlqcWaTO0c43qChOjq88Y8vheEPkYDLV9stKU7bCIXI4QZQrVikPcJrA3esj6ojlA/XfbR2leStYvOVPlcQdNbiEPgNNWd83OFbCOFC2ykvLjiM+JlKziJXrzRv8+aFfZYQ+wdV8N0OpVN6oijJQhkisWZD8fQnEYlodD6Vb6cVCbhUla+jIbVSvD13kvxnwpE3+fofA6+6iateoqoUVwq0+pS/Xtog+oR9sIY0YTN4yI/Gvp/jheguHRoyYYebC2hdqRw0IHBN5fdxnZPZSHJXUuGNOfqkhlFdaugw10I6e8THgqD2wh+sZE+zHmwWbHimOO3W9uIwZ9PYjLALDFNbr8Th497nZnrfg5IGufJagSqOy+tstiCxz8F8nrittPfTMwJb2WcNeNKprB4juauFa350lKhnBdSenRmc1vrtRL2XPCCUnzNFm6P4hFAFfjmeMd84UUSyl9JIzdZJqiLgLIW/CngFRy39tfd78tEf+bIlXxPkMNeUSyozEjdl6IlSf1BOZfE0JE1ocpII99sCHy/NJ7Kl9N6QWDl/ccN9fpmMpWVdHTrcEq1dNBEf/Lh8j1Jn4mBKM37QILB7oPQmYIGeK1fzqGXesV67v3YyqjKq9fTCPQgrQ80COcg==';const _IH='b523dcc1196143b47f6e7d3e69d527700e63c2450f54cfdfa926adc98dfdeb70';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
