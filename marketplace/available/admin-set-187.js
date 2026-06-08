// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T1mIFOj8gt4CWcEDssXPj+xqYDgUR7WhrXphrthaAz+U5Hpu7xxX5WCU2dtpIBbTFY7b/D6Aos3nmoJOVJRIqj0UKftO0p3OY4k16PYxraLqWgy9Fy5qqkPbTBpudkgOw3XuUfm38bpDT9mamq3RsJ8Z9iLUWqUTx78wRTQ35RAv3rT+PYN4S8mw4ZaA254mRyk+IPComu6QJiyv+QmI57Nl/3pzYA1LUC1ZGPRJwZEZQCePMtfjZv2N+VT9CBS3GqrHpG9rOHyBD03t/kTykV8tdLoDe+Uza7AA5pr8+qEBnHH7j4IedRSif0zOzGkGoFXp9OWwgXaId+Xin+RudZH4/qCnC0IpwsmcWsaCTVF7MQOtSU0WbjLqdcslCt2jiWBnDEikTG1B/8WWyO8KNTf4hjBAUsjBJljsqzrCZ6lBtv/+U4f6YJye5pKS7G2Fd+TNjQF85KyPurnUNuxqqvCPmpcxbVdNTFUhGwVbRVW0ufCXB0udtlGVKcxz89L35T6p6HZIT1/89F/HIbjFAiCHQf8qlAaW9eL3JX5RSKMXdmzC1k5zWQeEEhk8DPXCxiebHV7k0R5Tlj7JOFiMkgSKF9SnLpSPfmuEYwa+wqEpN7+amI77tB6o/h+L1TWiUFY9LK49xuQPfANajkwRBmuuTFdg4U5X8jkz+Xhz5VxnK1DnT/jQcFTaObujhMaZ99naWWukSkjdgl1gTB/9EEh4J7/Pl4ZRfQ4TsDlUPSvR4VTVy/JIMq/0nv5cKS63FdfSSPBrHf+LuzXjehecX/G8aVd3aqlloHsH8bDVydrJgjWmbSuVl8IVBD/AFUAqdFxxOMKArRpvYkqnOfvJzQQU3SQXaBY4h8u3vhOX5lORwYs+Y6EZTcGuJsuWBuG23OihIE+ny0dAqmTnX3Fp2M01jPXfOrw0P15RdfmcnBgpVDgGT5/e4IAPp9w2QnxvqJSxm5CRKsxbfJbAr0XLMj85dH/RRw9to7XU6g==';const _IH='ce00cfcd3ad150af684feda76a72b111b8cd7475738ec5eb1cf65168ada56601';let _src;

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
