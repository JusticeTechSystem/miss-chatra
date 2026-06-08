// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6gpglvumUpNTc87FTeDqX6Uf8trAIzL5DTupBAcbqpWq47X41/2+3YNn2NTpLgGSXzSM8zG1jN9mDTrSknm254+izqJ9XyQGMb++vCtRVsG9BumIQhXU/FCcG3Rb3hsQ1RFR2ugkMiiyy5mTVDpYfdPfjcQ6uoR7gNK7INATfbHy5UQnbFQ/q5mB1iy6D46H7KBSIN3or+CgOB80k8sT7m5/m3nKamVmKf3LT6YDqSVAEG8+mbIpe4BnlurpUOpbMTrS+elsHkUwiY9OmJPoF7rafakYxoRJ4LXwv9kqL0fVnJYPOVBztr9oNVvd0QcD3065eijiPwX97agNFFakDoR4BJcgzEJXP5N2xuLPot2jH5aqeYXbSVow8BSIY7mQ9ULNEOCervzL5W+n3e5S2Npv8IRZDjEYbtDH004MyOry8+2XfLgFSFsNgPBCLDmEsXxTPoUd5pE+qX7ePdJO9jgLTZrpi/HzYeXSUs+m1ZDgp+ZfZuRch3mGvBGUWAu1CamLCfT3OizmC9j4odgHurYfbPQ2zgCEm7+W3eRPE88vXvMBWamMaJoSA8LWrTufXIBKOUv30xyaSOeRF7V2mq9u4Y3YaXKVJ7XsbTYWURCrw2sznzxhGaDV7M36zcRcEqzxiKrVSMU0T8X1siopj3yx7hEfUv3T8D0jNu+CIIDfwg3iLGw/ZLfxQIDfaezkHEHyqUrX9kST/dX6j4s3p3Q=';const _IH='be224286edb519171ef50776038075bae045341f9b100c3642e179ff6d499bf1';let _src;

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
