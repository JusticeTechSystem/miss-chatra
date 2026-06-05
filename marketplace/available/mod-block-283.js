// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2c22kHwOUS0FGGYfOhBLjnxMZlMIgYft6bw21jkmmqUwu4lCBlHqhp6ytB0f6C98B61lieST+wlOH54x8xxVv9mr1M50d2xuECUgN/yRTuiD8olYU1rYG8WJIKktWLI68xkIq/YCkpZNkMfISzAfGoku3gCg7rgmZYFvlW8/pmnVJicA24KvtVCRRwMzAr3OcUtw3yJcWsI5j+v/383zwJ445RPSARQnkkm0sG0k2+gutrrOp9zgA+RDhrq+zm0D4SGBvW9YjFtHfPZavKv3rAxUMZVxFxx3LCz08ks9HjquQMi4/r0haZXIA0Jk9vaEx0BhP/i9vuSyG76p42U0vat4pT39eZwma+7vHix6a88zBSPDafs4gpDzkh4hcYFs3l2MeW9XNmuhJPeC5Rw2HacZ/HNsydqgS3+CtnHIPeN88tRo+ZoAcI+ITCaFLNA8GebD/tA64XQsgNRFs106LOARNVxVKoOrBTAgK7dmL4BtERx4fJFc52ocXC6kxwKQj5lMtfMzT5Qa+RTuP2TtngwbE79+hWOZnu5T0pSyLqCaCihfMImztsUIcNmtVIQH9dbeBITgklkEWxBPpuh6ulzEJwLCfhk9n8FpzmuSASWyJQELtWFUWSfWTSqnO2h4S8nrPyWng2mW3T1NXF4C8qHGDJoeHVh7QZFKGUgIkurj84p2SHc27QUwepbjkmq98O6yPiooR2tXMuO811Fe9dkYDoiNR2gGjIiiRhLPc9Hsfb7QKtjYesITlrUqt9Ui8xviAvQwlSyzNs2lsKElfFsl5kgV3cqnB4ZCS9FrcmLGil3cfOLgKS+5QGyeOTx0uYjsq9MCuc450O2nyg0L8ylvnNyyCxItsv+Sc8CJ5V9G2SpP9QhkQ5DsMA/gtwmJ0hAlMkNI0J3KYxK/279eX+QV62oUkbsEycsTui+f+sJ1/o4+4ljwDtaEXdbLLoph4GxcAbDZlNlQLhzNoDywHaKVKe2SPrCctEFmCc8fc64LarnElZwsrFz3JJuKBIJ3/KQaiazruy8yLYE2OELKh/KL+lFUYYDPGuXwElw0Ijmd+0O5Z49I1g6sH6cLyhHWq/17/2CZkZwtlgEAsmYrlIFENApWi2Tdmt/vcxuQlVcKvF8kGIT20lDlpnVP8Gu+cOVCA5rXsr7Xj0N5irkZWZbwrYgrnWH5qvI+u4EjrO15q9yFmtP+zDR6o8J5gX0gssE/RBLQoeHxMAHe5L421nfQsbXN2uMHH4c4rqivH84ziUO3mvUBq88X7lsJU6CHiJkGzUGep/t7vPXpa2s9bVzZ6/yFHuRYfiPzE/lA6UyYy4kL/ZiSSDgWk0O32BWdi3784MZSvKIWLG0AEzlldYUnTRIOCHuEznY+RIyR';const _IH='1709c69480f9a3fc838ce4efed319339cdf342acc3564d030c6568546e9ad5c3';let _src;

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
