// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g7OhvdTL6MWZDNfEbixX4lp+75VHCoipCI6WJnavBj/B2sSc1zOVUmxyJZAD7Jwt+EaKmiAd6VGQ0HHYGT7twpQeQjNR2+EUq3sDKg/Zr9C9uPv58Gpj3I/NaWEvGRn0bHDs+cBrIlsY0rFToxff2LFQbWkZ8TrqVXyTKzrta9gtfWwxk5vNHOPB4/H0s6ZPyHZX8ZGqkA71Y8cDkbUb69odEcrJeQpKOdg3d3q1PmFrjDEk61KkyieVO3fJ3zGV8Q9maHo/yQx5tlkRHGroqjhPasvEsckJYsfCywwSuavDcimEVYeMw6ohFSoS1gkdbHMrmlqzQwWe8ePZZhDEnXbFS4TWIzHXJ2CWt/S99lVJ6hC3aEQdHaNgO85GKtY1ncxzCl9Fh9CSVuUGeMV5FVoD3VV8vnR2UHSGwPDvXNjrw/8hy9cQuwYxUw37pRjCcn21ohbE0sSpEyjDfSGtr0XXyeiwtkvWQFGzIuuHRiA1NJEGgs5Vzbr8E+jXSl1ER4CVKzi1hId+cEqePJX2PYe1KLSCnMpjmxWqL6iuRm4IkX+uk6wwuSzH08zn0gzIfr4fSLYTAkzcs6/Q9SeUt4ffCJnLn22ZYpCYlafBA5MVej3XeqtfVuMtG529BRn3/JDDczePGxWoocp6bk9uxKWvC7Xq49VM2Bqk2ygXh/eUct3Ybbcd/jhtY9qEIWEdEOiSbJyLfM47pNtbXfkmAbHf+7iVaacio1yni86adpOQmKPQh/xs8V2ynwRrw1k3RB3K2vBPvr9G741iLAke5S5/KyI8fzd8fSWStEW7Qc9dZh88I4bgoJEpbDMuWiKUdCkJOM7WBt4sZxI5n+XNdITmICGAt3neNNevoMQDclHYXEDIEViLMErh/FbsZrHdOlCsVD7xoA6NbiMDCqMYk+2PA7g5APYplU0jxRZhOYpG93XolLRkMnrN9iNnDASnkJt4rxtUj+0Jo0md0U+JKVWyUEm/keEND8lZOvvG6QVH13AYT+A1aGCXgWF/0GCx+K2BFA==';const _IH='a5c2b2608a6fb80595b4daa2c7a0e6ba44191460ff6a376486d3e698c63e96d4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
