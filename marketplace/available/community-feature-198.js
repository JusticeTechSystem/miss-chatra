// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2kdq9NJc4LgLPTuZy5jkukeupEBNJ6spVQtDr388tisO4sSFIfsVoN7X5MmEfYQ/euEiIFuc0IjhpJey8LI/w8FCm4R3KozbPInvwIgoPz9a3x8L1C2NG11KfMN6295RfIxt1YgXmLB29w1FLwNjM2UxvFO9TDv1JyUtpKYrnc4RPo38B38KruRktH/SAxBezni4MtxEh3G8IRW98LVVRQUeWR7Qk3c9oqZ2qjGGb+GF56DdK+XeFh7M32iR9C/BTkoMwfow0lnr0q//9vFuBrfcyqnbhdPO++eE2VUcr87jYYLh/dp9ZbG/6bqrygxjJDvsqX4uGM8y1uvCl/WHwWA+YTU+r4b85OhrgzWLJX6fNSTRXbjJJi6QSKkHSvAOSjkNUvIDF5j7Yrew4FEQPZluvrAg+MEXbIE07eiW0hMj/fUiK7DFbrJiCLTu7K+uBMMrSFzNhizSIwgDeaFhtfsO4fIni7Q7lYN6cZQNZ86vUuTNbTz/Z++KQJK7q3muGpt2UAmYBRiCpQxJy2laTkPiCFK49cSXfytePCk/sBN9pOaWdfFl03fKzgEFADR2d7DcEA2W+JyXBItqiWXM4F08KlXN/PPk9iTRkBk+9a7sL/HSnQO0LVZjmxVa0Dr0lZZlAR2UpgvWYbjIa7oaaaMHlkjrynqT7SmL4rCRIG/Nak/M9M0sZjLvfoUGP6mgNIV+bMVvkp/D40FelLpTTV9FuFws6PIRagrkKGU=';const _IH='5e4b1580c866d6e3cdfa35f45228c5b7d6a94b8d77f89215d08771e8d6b97206';let _src;

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
