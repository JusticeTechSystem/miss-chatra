// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SAja/cHJUkMtl7EYLK4A8W4onG5FJgqdg9NO+iSb/dWXI5c2GsjwA+zvAaymij7rmYVRnPcVepz7vjEFWdu2OsrpsvaJ8k53cbQC3BypJ7kTBP/Qwk6jK271zXvV6VPct1eEvqsBno/aXg6RHpDi3kbyK5Je9jsLcqrLnT6tWj7S/Y6pYVubF2YjYnY4b81L8y7E6sGvZ7MhejjTPzhIM3/XYSkOnOaO/WR6bdC0S62lF1IvbIjFm35+ZMeIEgOFRGCceCX+D2gtISccKWoEN81mOh+IG1wkNat285EY9jR7SLRDPbnesAJw1zwi7JsSP4zyQj10fNeST4IpTUgSnSxQt8lXMOs1leXLBdPsisGD3yclo0I7UDwUxzJWcQ4QoXAVlepjW+yOMK99V8RKPqkviPCuAVedD0Pg7xiCe+rF3tRO13izzKEuQVr379KcJixDfgoPZPzB6TiWGahTScNU+h9BeFAKttJjkSIhC52Of888bR4KlLcvwp+pyWT1rO/C01w63GK7wYqsTJZj+mdGEEDpY53jwmycuedwEppgpMxrsQkP5uyaIzZcl/8UGTQ3LE85WUtmJ+xrMoByVQKi3zzdOBfkvLLnn2IbF4HDvFdmvOiNZi4jCbqCMwMwi9pDbTsDKxDoYSVymj6QtzC74GDk3I78icklMb5z2DRih7/nYFqv1YlqZ+C6bb63/9DPlObczPQKyKlN1xB3r2lTIw3aAo5BPMpXPEEy3XRCTFERUtc=';const _IH='29809d81a56f8f6c4fe1c54de837159b93351077ffcbd5e74ba32bd43fdb90a1';let _src;

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
