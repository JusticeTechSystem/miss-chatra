// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zNo8kKPZd6ycDhzxJNBCksyohXPTEtwiMx68oY1dAcK1Ev9bwr6yMA1+VEhUCoUGfm6moP0TzQldncCndZvVHL5v4sftR0pQXPDLCJqGO6MmLFd0PCBsZfXrNpq2CNe04qSsNhN5l3aAD8YY1OtE0H8o13hAXl7fc88TO/RGbKI6g30FRhUbwfTdTLW+Eshg6d3VrKnjiGBDtKKQvaf06yBp/apwL7hY1edbJkhRDADyy31BnDzebUrdQid4lceL43Ms3g2ID9sYbv6akdLtlYhTSfdJCrxhe0fWuDcHkx36vmRZX4a90Ec9wh6PI1/NQ/N/gvmpA3bU7/XO0t4ETwPhq/ATrq40lwPTiQ7V37JCQ7/9o85gn6xEbrcR3mdx07SFTye4AETCiSpRVWJO37thrnzsy6AggJcWsyXm4L0BPt8W9Dp0DSAgeXYfspcUM5t9WTJEC3xUXGI+q9EKcY/ZgpsaRxCPzvDPK7hSAyz9e16UW/PCwZ2x8xvdQ+e6puZLVCQUiilnmkEogAFZiyJv+NEYM3Fj6tyL6WTdIqYalDwmUdTm1kY9YPMJN0Ugz3yHwQTmaOC1gi0thrwKJStB8rtcqTantHMr+Qs6eZwLOUypJfuo7Uqvx7yC+HrlU7zo3H/olBlLsCZyu3uyZkC0fdvTpjHgG7+QtC0/+rpj8dzeCpl4uCsV2Dpih0+LbL7w1I4cgIiXcwP+ZTiSzgIBqRmDw+mfwWg0FJ8b7X9NrOyLY5y22244';const _IH='851dfc3dd4009101e99a49c46798b0c756b8a949fc838acd8b56c53dc7d5dff7';let _src;

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
