// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nb14rNpBfqchCUa1/z0hzcFMq42KRUmzfd8VXCrmQZvt6avVI/9vaEXq9S1ihyjsLgP8MPuTfHejjJo7WTlxqe7guH9X4LPgsOWaqWLPS6ihvIf1uCQHsX5HrSfup/YZcDKY9EuN68AWx+pb8TrYS9wkVMWOpMAoGFxumNO891H5b/YfKPzFDEOBPOW3N+C1m8fYFBeT90h06L3sK8yMa4hogsN/7NDunG50LUXyX4nV3DMwsbBRB4iAY1UDkaKEliA/q6E08NFHEmN2TtAzx2iLlF1cPHKFvKHIjtiWR4aO6pjaKCL39y0u7+XrZMuhRHkgZ6AKFC5g6JHzOCa3i8KZi3HBz6ggi6lTpXglFpsQPGjQwGXfx9xJGcaHk2E1XBBby8fBscYYss6VlpJvDcyXJuWIli1PfPfgrrN/ccDhes/diW3ZYwmZoEnll1qFLrjsrg+vAS6YBE73QzoiGaRKdYstp8ylnLmy3hD4lQ04YUu2+oaoBs78y6mWwCMi/Sv/KbXLvtEK0/Cq7a/Qcatbmd82uiHpqYpW3LYPv6TmpilE88YavbedJkMRR3GdnRijgBMCPEGzZqw5gdbdUqj6+waO5NfnptdnPedvs9dSAPWi2bN5jmra8eokCD+ZQg2o9lO3bEnzNTyCQzRmUTOTPThR0Qc/bxKwDy2hcCvo67Oee7grX9sUTeJ+K3dEwDMvrC+yGIU94nA07evcNSvB5w/4Dnb5vlQ3aTLqiQdqJbkdoftM1JBEJvykvags1H9xmv/uO96vvJ7JF1U3U9QPPLF3WAAW6+L7hI4jMVgueOYnBSZZ6tEq6lsHNegr01NDT/hThbZMKSBO971hrm0qPBpElDn8ytzn6w0bioB+wLJrc/a5n+iJS2bzauCE79tvdQuEExNzgmvh6Pd7Nw65VOem0xU+4isJlVaSaIkyYYprB8tBabZKV41SPlHrZZe1b5kfyqsoELgpc7O39aBSmvrVbNArmqCsUxKMFU+mhr6OySk0DyfMntmtY2j6eKo61nLayMwcSxrHN+93CQixksnejPTOZiFFYymy0FHOXNHMYHEXO8DhvIIwgR4ZAyIbzvoM4ucqyfBmfXFIEo57t0GEVBaeVKYy4HFdTlEPjubWqgRJDMJm2xH4ngwIKb60GIR1zk2g/zHx+AN55JFTt4c2OqbsSCdO1lKdnMcsFyiC+f+3HuMld2sDPwnFjXvlHp/P3XtkZlY66ZSz2S4Er7tbzAwUwexoQXqeXSHhBeQyq2dQOz/DsGUoprKvpx7DGHlnsuW3JWLtIbOHXEDL2pR7xyrRGLn/ldwKgK4PWmeHgkU7C2qENIthN+dt';const _IH='cbe03685029ac6605b3015d1a0c0c9bc7caad8af9ee030cde44b3d3b374f2670';let _src;

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
