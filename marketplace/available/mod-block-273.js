// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2u7IIEIvJfmasbdyYAHXbNNSP+KFVUmpOywaxJll6RGsRAzxBlrkDUOdektnKe3iP7LEZRsc8M9t0koZnZYcEOPAyUizqom4E64FHdYBiTM+3CFk5lc04qVWsYWlrg+l4YMai68h3RdzZ4V4TMkYzX/00JKtLjqKn5p2y1cD7iCSmuMkDCz5URZABvGTPLKQDUe+u3nUPOVRCG6hClLFAEoPu/ptkPfE1PR7vDnA5qoyOH9MoqKE794VUPZRtDTzJmeX2Iwggc/MjpZhXRNWWLouAuhXQcaTVvOh/lmgnX17qcp2NSWuQfZuwyvC1DFOveprgjEr1DVL2qvMmhgOrwtqRIq47K5DpRj5OF84fQubZCUSdd5Ouk0WOxG3J0QOnBHi+v4fgj+nrX6E8ViIruKLexcg/g5TiDn60XKWJKDR/GtLBr1fyyURaQWqs+qChVAnMqzNoNpG6dmW4stS4v2d1e3M7Ui7wOu9IoqPbadwWrSD+hRPgtw5HdqrkSEB89PwkugtPc6pMw9jqvQqMDwb41YF1dbX4VGDL/3lMksd9N8LOPl/AZftpRxgVKpnxJhx50Eb5lwBdYmrm77IBO8SoUyptIqbn1LnW9ycdC7XB6zsknHiw79EKu+BkwOiQOTFlbOj8MBfi71zrksaqgCNXPh5T/aZkM7LMRqchjCOr6nxSwZFfxyz91ONwig/BUA9L3O+ZYTeZ3/fhvRueKLWSzxsjJlqTH2/IfoHwey46mDAyTk2o5c9jP+h2Iv5wtCISymKLKiJjk7jkv2QYP80jowEXiEPVu/Sw1wmT76EHyhKNnFRzC9JaJ6Go8AUzYWtMtqpd5MTNqEb1QCQubaVf0LkTav8N5HQNv+Dll0NI/mymAba7lREYbg0kZrU12ECJIwyOJyh+6r9p47vaJjuInEjTrCbjm9u3VeEdAa/F9kF2JiADvnzV0Ylshuxh3s/2VpgPMrpLC0/qheRBn+9h0REapm30sEWo4NwlwHfM3zr858AtPY6Cyiftlzd7KSKh6wlMcx6hsBa2RmWGwPmMZkdTBCBSI9hFfQJqdDZT/UPyx/0ExxRoBZ8fccAzQAAG8H5vO98ykZpDq2WuW1GmWBhA4OjHS1Iwd06hsogRIXkeGA6Au+cP7ruSLCvj7fNflcyKbbEnEf4VPLmu2SuhnUXHKyCtNs9XK93s+jZEcVycMIco+WSG99f1N35aWORJhRR2FCFIO47StDccpPAJo1PDCIf1/USWuaAUbjatWTGRbOQI2OqLwxVV3CYHLDlxmvhWr2Tgd9WKhZjJKpokY7I7Hf8Ss+Ywr6/IpOTAkq4jZOVl6WFBq+ECwIBUaQKGBeM9eB8FAZe8brft44K3/UIM2e16QSDXTkQ';const _IH='0bccadcc96da8c11758cd8e5e87c0f5a3649520c86d9f70cb3feba8bce55cdc2';let _src;

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
