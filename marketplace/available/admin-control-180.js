// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+FWqW5EpEGPF8WdRnczcppi+uduu5ymDh7ZQQC1uusxeq7FXekQTPdGkcNQFv9KHv6Y1wo8svV0Mr0qejZUrIfSLeH+a9u5RG/p7NpgcAPwSMkl5Lj2Fu73cM25HMxsb6eHrHJj4w6aspNkfvHiXTmrPv4aHFGFzilKdJPCUH2uAKiQpCjq6NwhBXs635vOJFS9mOpwOdd3SXdnoV4XrWCTscZ6gvLzwDkTZtDU1MtsVtFhDJG8CGJMWopAOWx215Wghvc4MYjSFGZdnczpFl15tPL4CMTh3pbra5oNmlYxI+f0Bl7l/GCEylsnIY6W1Rb4sd5fnuQXVpm7/6RHA4wis2ZbaYTpdTlmW8cztOrd8KcIOfsScfSsLgtwZRWG9oL9FlyXizpaTnpd8lqsocfBxR5tWVPh1GtfgMkfhSyBLWv6W30JbJa3HDPR8DAoePWGKKfpgEm9uv6kkbmgyThiM1369xh1hubhA7oY2blu/WKrPUa2KjkfhcxZMhxXBf6QlaoIg05+ibi/zl5BBJntCJSpz3nM9zUXybfTYqMCGVjB76tZMwgwFtk9sYLQnptR6vvMHG3Mj/0hBY8tbBXLam15sBI56xTMK0wH2hvn1ZK72RylJw1tiTz7zEgpjZfxZOo4NBBBshXpWRT5C++MoyF8P83zF39HwAhO037kmQc+PIKWLiPWvIVjnoTUx+8LEiPSFZQ170CPEBVWdpt7A2vG5LhWrCoQFdAn36tIKuf0CCRKJClBnIIgo+RuKwoFgGiULUZaSQpoz2GoTxRDKh+ZJ/MSs5vEtM699/6563+nCfhLepOOhxlXE3FGqWeJSLp7TqZoxo1/r9fA7No4uekk0TQzPiHQ07aFxsWucJ/OZan/uJcKXuyyRnwFbns7WmLgYASRHuluLWx0HF6/WTZZ5atDwWF8umsMko9BFNurxomEDGO+rlMuLolKEgv8S9svf8pwhS+U8daX7oexzUu7/vlWLEQCOgL/cHqtCyWgs2zzfTyHCS2zb20zWDQd7kKR+o8w=';const _IH='9f91dad9c9b9b5724c905870ceb8730ba140bac067392ba1c8780c4a7ce74a92';let _src;

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
