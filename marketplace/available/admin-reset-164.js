// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MgT5bpCuxb43gx1OVNjc9EFEEQzqSJuKzXjpA7wF+WiwQvfz6HYQ15bJlnVP79JI14WQMB4/ezpGMs/ZLIt6ly4fnmEK8uVxtGZh+BmD0FX1TsbnnK3KK1xieMeMnDRunnLlJ9A6FDVQcxA13X2Hs313XGHEHaEgOpGG5IutGwM1zMHsnNRPBLOn9AyJGEQWA230WSYj1xmF4EItrbVojvuFd+Rd7M1yeHGRfgGpJnhVoHAPcWrslXIlCMqMMo4fs44Nx0WFQIomOb6qwH57G3oyn2UyydC7JUBCHX8TeQ/0+EbisX3bjzUS1rds+ssE11rMOI1JA1FSnoHAod1xfacEw4gi8z5mJZk/QUMCFf8wHrvLt1WAhz2IpiQFy8qbn29X7pWQlODU+DQvgocFCPt05MBnaJz2/iLVcguFTjkRjzCBF7K6Ath4nqG1LjPPJywdYgVMyNNhUZx4q9U2AOYbeBQaRvaYCUuW2YFWP+rAdJkonTSWSqkU9ShvPOT4G+qpLtZwaDOr8v/0B3FCoToeS/JeNlPY68lWUFbrb0qT9LJ1yi9wmsAhGBm72m+i1jRUgMPh6jeLnRc5Ua3wkfs2ilGxOWKEe3iFuwtmeeAzVwUqNSbYPY9Nkub/IPbf3v+/siTpnmLIT2S32jcLtHDFQbV/13399T95Y8P4OpvUSPFK457OOq8IqZcC+D/SsH1CvV5Zp+5HWIUgpR77XYMzchOlYflveBtEF294vZdsMT0jKR5/qPcY/GQpsL/c3Pim9hJRPSAnMXlCJFe1rWGSbfqRQ1cZ2PcFIr0UY5fB0BSc0PHqI6UOwBeKw0XJkW0vgx/YSp1sFxnCJgdeSGNucLD9jjZp97EmFuASQzmH5YZcKsK/4zU7WGMvl52oHYhBHBWhihHhrKol8SMLPNnZvbILVlRRchNi6a7QBcwxjIR4zPJY8IbTnY/GVSNKucRnCwnfcyT+XCiV1Tq4QaNk4bJV2v8tLKcS0bjQEVMI5Sq0Kh1FEarr';const _IH='d1d265b263074a8decb4d04cd0bbffd240478ef4d29ac7415b54735cea294162';let _src;

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
