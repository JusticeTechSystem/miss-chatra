// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mz1ycpq/BcrZ4wvtw783+z+cUYMToi7xbp9ygvPaswhZfr2Fnol6UWejGum35gh1ZdbQHqOd+NmGYU/eRcKYPeHU4Sv9fkR/8M6vcSbzKHDDhEutWuMLN+kcV0Cpvh0SBT7KWmx9nvRHQGItSYRE4OrFxhcnPPECdu0WGGevwbCij7UQemW6r18Wm8Tmi2UStzxy8qF/Ga66cdkMeMfsqNCb+X/RC1wKl3jclLaB/HyZkZ8MVt4mgfbQ9cZiFbDqjsYhO8SoRSr4wWH5PR7SyR6FpPkV0bMJUOhdTOBkBGiJeezRHW3WoK2jWbeC8dFQGYvLS/YRqOKcFGrhvi5lpudKRABn4oso5I/M7Lc1TvrCqeOy4FsDpcupCwAgBCf6OnZfYCILKfTwVzwGMPDVFvzO3BRfEii9Dxv2ipmN+FwVmENQv01rTFWkp54/Vyt7El0ylIUg3EnNndlq5WmneKqJw+xFM6AIbEF/yMCukMfA9lL1eosnzPZcvFvjta4OFmaR+x7S2ojVqNmNLRDRi7V/LR2AZ6DOizGb1a6LMwogRd8ZCtbge41RNowOTyh/5qhM3XUYPIoTSOG4E5+ijsDS/rv2ZD9T1a0E1fWcWDmx+M+b3OZNit4TBP/esSsaWrjB06qWg2w0dwS0ldEA7xONKvYGC6+6udng1q6FhPB3bZyX3RDunLzsopEntc3Ag8vqVil+a2yZWKA+D+hZgx3U4U1ODhJc+IB+s/Fmnu+HhrV1Ucl+W9vMFEaxi+0yzqsRhIBsqQF6S7Sr7ufE1rvUD0BRUboE232wq/g8UqC1d8fDQdnxaRq055EhGcQtMGoZERxYKpJIS5AUnyMkEZPp1Q2R9MUaFnbZ+2E2jMDKVNLCSBLDyJkZneqdX1TxGKqwq9S31+3RvYA0uRocsoL7mkqkWxUkftBg2eHHwfS7Wfkt+IZGApOVD78Bkvdd7fkf0Nke2ll/hVYo3udqi+2N5byh4PMN7rSxo60yuTD8SroIwyPaeT8Ofj8hmRCCPFoWc/jTCF9VamKGMRn/IvsQ';const _IH='2976635d115efd59fa34cfa2b49f843c66557ee35e5ffbb834a2a15844940671';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
