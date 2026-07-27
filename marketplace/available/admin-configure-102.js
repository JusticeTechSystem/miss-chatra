// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ/dZSGvctL66Hj2IqxlMAgqmG/lYvRdWLjf6jra8kn40TKo0bIxAJfHDDwuHs0uaqPSZPPRsazalcOgp0a6pdfiJmfhYJ+XInQIrp9+lM0dyziK4ZoZM+ZlaydDvLPfNOcCW1SsXPYrkmgF5Kvqg2Cw5XancurinB3avpAvCxznevTDuOhMYHDMoW7XFmnlwwLHRTrQux+UPq7m4LeuSAMZNTPYJ2VPSXcvnwUfmJtJrMsMc8X5o96f4t7SuFuFdB9lQWghxSr7CxtKUX6mPKiNyYHTJS7Hj/VE/2R2IPxaUZcie39wfGAJfC9APrRTuFM+q4rBdY31MketPRTlbikLBIjWtL55rwCn6SSJV0462OycUaeEmLpmHuCdrAOHVSJT0W6deZ9RvBqAhxpf9dMyJAEbIA06/779bIr+4H598eIbhow6EmtJmxKAPAFmVZYEfkWuB4KmTHT3tgPgOO/BrikZiMkwMc6ILFtH8qyfzz3RJhOAw+ICvTJQA8PcISF6bFcapMOrqveJEs6gaTsewBzTI4ZMBQSF7yhf517/gRe2L+dpnsaI+jfYksIw3QNtGC2Vj9Z8Lw36u0ZWH02UB69FY8C42wbfl313feVqwC7AK/fOKaCWyjSDToCAjxwG3ictOL26Jota39vO8B+wn7q85vdozTVI7x6hVlgWO7dQbpVd6Dje9OVBY7yolo7C6QtWsQHergTU+SoKOq8vW9mt5dvOCx0Sw4lnZEZjEiNDFNFyQmMi+kKxR5+Yv55ibZdRIbh6ZMzwKPJWQH1bR2NwRmwIs2mGTlME6MZBSW3BL58FDBwGE4tg+lIq5gUq32vAjhOHpjLoh5jnEEvY3iBDOIHgINGSeXY48bUxiS47aImzSW6/3FQwzpSPBpySsAh2WghjlAweRlus96wtfVcxYL9EkIXl+gntf2FS66sTsMlqHLGs+I3A0HkeVwLn5hXZFPj/xZqsSBOD4l87tW7eCdXDc7mOtW0ApGrvDvtBuzavwsqmra0QgBO4NYWFuSt6TwfcyFqUQiN+/duUDaMUCvT';const _IH='1c24312fa1e643e23f8cb3c2c14f18ce2b27dfb250e310ab8a7dd9f18cded6a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
