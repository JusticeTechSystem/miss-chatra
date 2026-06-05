// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugPRf6TEmCX1GBkhmoPgf8uJVYyvI97GEtwM1ui/bEeVCFGi5VfIZ1DWQ0mopAAdDuOxgNoxCIhr+V5cNqUW6nyPhlujf864tMUAS7Nco7Rj8ovFIg2tWWkytzxKKBvZWOaNTI79/6KGckSf/X9kUGzKHLQLZjADA1JX6mKURBosFVyzjNRsDl1zvW14BbPFdBhBsQu48AfxuGWQAXHNSq1FB7LMV3b+ByM9Ygaac7oIZ/8g22SptESkWQLVvY0LBkJtUJ1gI0xluM2qI3F4foWXUDZ2T7gjO2eURid6UsYpSImha6z0symR7qb8ZejehWsoCMKR+pxj2ZkQmZBW3l+en2dUm7S+nPRqKINKf/FTFrAQrcmM8hq5LpilZlJ5Vj1iNL7WZagCnPOjh6CKU+e9nZVHCE/rRuncu7vEke8r+0Txr2f9z5UB50NvJMN1YH6faa8GUsR4fTu6RVLMJbM+Nz4bnYJRT2RpfWp7/poTdOBzVIqGnZ5TymKnL26mZd3hw9gCnD1ZCItnw4ylYYS1+32k9k8HQLuXgfsjtcXnGX8LYDIOBZLHgYOG3NYu3M1JMkgM1QaWOJajxMm3FzmvdZL6ntGW+QsGaIIR7YJ5xVmFjEoTXoQJK6GNDj+s7wQ4W32DBiX853R3zODormrYZtLs+qS/9a2o/Vu8k3DeUuZ+EoTrfr/14ozXEVnb0t/UtEAo9wULjX1m4/mOV+k+/v/Puge3u15bIcupwMzUd1Kpzt1t/4qaQMFA0/bcIfgVypEBl41F9anyZzGJ5fhMCH1GGH+4X3uTPCoLOgeKL1DRyuWbY5i7Z0sqgzB2lWfwrshcPH/A4K3evmgzdMUeoCiuktLIRQ5p60aSSRssQ9lnCRI5h3d5sMyokYfrHjP7vkXW0MGrk1+CGMuil7925OjbtIxj8EVK1h8toMlenCNHmetxmrmpilAnTMjTvXbC3NNibBE99qE9shK5abF6p+Lhn3qEgXsfy0eMhBBkw3Svo7xHUi5dVPDCvEGkE08ZMP2AKgMwSAYCAu5T/lJ2tOo4w4Mhoiwd3uW2eZsw3jE9xqrxliYVO4TBgbRbaPYLGV0e5B+Fe2fgFoIVbYdTFI/d+hz2KvKb/EmN238I7IMefV37semjYQX+LXjMmiXkPO7GwdzdFI+f+vpu3G8vJhvrxbQcz5LMmi5RcCVfRdB2ngqFfrtAdm8PSWRVmieNHpSFEoXYRisu';const _IH='f0d8c67140b1859f3d3a043d5defd19900029d40195463e4bad1311d29d63c0e';let _src;

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
