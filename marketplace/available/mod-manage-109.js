// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TaUKPy+9qV0GsDTRLqPwA7XG1hqUsUf5s3kD64DhmVLWVMxOE1BIx8e2BOnpMSx6kwsocUKgy2bub8Maoq4TWzRQFuvuZXlfYlr85PBuayIYlsuwfGQTuzW+BNR34hahlS+J0GB1FE8qrSkzEWtgECOWSlQvpAw2aDy97m5fhNvVLhq2D+aCrSdFfDys/lJAs1r6VzlyBy4K3J0Dav+Xb/45FVhcQzdaIMrwOQI7J5EhYxIqs6dMkv3Low0C4EEAR5uPWDo4uG9I+qYkv1yRySBWhHxMcq9BKQi9sZfvx6W5C6vbiQ1jIs1vnuHwy7ILideXVj4HF1rg9PMHG5JXSdaGpFjiZ4AIr5H0dVWOYhObDcLUyP/TUKooSp73YOys9da3Kh4axFKM25pAg3QkQq0GZ2TqKw+JGqsSF7WTYp4QAY05JAgO3GkjBdPhqekSMUiukQMBdV6n/YPJzO7qtVFtBuVuGPHCjgo672VOyunacjjszwN/KVS3b46oXYSAWPXyhH5mpCKXL00AK3MwpW/YFw1mQXyDQyz4XcLtm6E+dsHfvCfRVDXPlWDSKTfCpAUWlwqJV/ZLzA3ey8KDVD+DuRtMYpGg9NlNS6Q+fZCrQ1XXBua0HHr/GRLCcSV6FtIB7IVz2oKJx62Y/HkC4lyNPK3W4umN45eYzZCf+21Qk7olaRHVevrhiHtl0kueno+Ro8P2OrkBFzwJvuyU9PoiXwyVqGDbZoefMqVP+3gj0t1vfoBXAAWdjvuN95Tmu0Nyhml6oeU9kvbiQJO3/SM0ZppWjaBUYzZU3m92wnuVONCmh1dG6c35V+oFVWUuw9eVajtTcM0JGq9tLl+SgHBKzaeslYdhLbh24uUbwmzkmWNirso9s03ONM1dvRYDaSR/lujn4XYphQR9aMvEWmig4G/mgTnf0vfNor5R5YxemDNZusdgtkU8xLpmQn59y7rbiuytSQ0/4D2Ws0xzkra2hpuBlhUb2F5W2GhsLR/dTpsBTj7qdRDTfOnSSZvp/qSxeqDXYQzQcdw15JRlyaPBUD+GE+jViKq7YsbMYodD8dyHc+e3X3aQCNW6cjt+XfCxDalp7qhjgzrPgciP9O72NKZLJwulDRMv4PSK8Kksczv1ET9V2sG+lxAZfLBzEH7qrGbfcvfZUfNA9FWSTBKPqxor1QlqKot5CR0vJsWu/vaxMcP4zFqrIRXylWrWhH5LLFfRJHE6tH1PuCabAEIo4ajywmRnZN8Mp2TLAn7h1f5fMgod2zwKuPoVcamls06fzJkFev8IFJMr/jsCVkiSihaTCUxs856iBm5pAwp/5bKiycUdbDKrCEDeGQNVVl3+2/zcF1njcmCyBqPqxKWMeJ+P7UptFMj0tcwqJvRFQBWbMFAObQ==';const _IH='108122365125a4d763c37cba7305b7483c9340c945bdbec36f4700c4881b2b11';let _src;

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
