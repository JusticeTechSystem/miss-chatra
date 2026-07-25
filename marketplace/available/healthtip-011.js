// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgWsOoPu568U9QDq31dEEKlCDpF5jg2CjL28SiECy8yLcIF45vE6INebrSP4NXhrgKQlo6mLR4B0N3N54qCKT3Gp+oKGD3hYDiAqelSTbAhAUvediY+T70cHVcX1OvUvNwdjR27es4fOJ9ZqhoXrxrCas/ZDfdb5O8eM0bogCec1q8sPQjs2Rv+2oyK3rfxYXhiVVVlpYvmtMo93u1iJ5DQVXLxPNC2XtJYZfYxq75af6Y3lNF7iSftxFvozo2+2rWG9zogr2X/pjfbfYdSISz9AmAqfubTp5H2qupJ23+VenzdJtw2O++tUGr/CKfGLcvWCGYgGHFCY3UgLsG/vaSL/4TbAW284eol7eYFBNRSb79fDcHCj9dndSTTkCObPAxtOQV7TB22jnBC4w0JJ2f1YGQdNA/SFJrO45EKPWwt3FIv+1X/M5FJ19hxyHoyyqW14v2UV2dlT2leS5aXzYp4/Z7o7E2VGuS30vmQBgoz0v1YeMleo+xFYWyTGgygnFKBbAh9hSMWF79RVIpe+cxkl5qPpLw9gnnhcGgyMuiujYcuRjmAOkXU/y8R73WFDcpX75CaiyyerCP+3FfUWKWUUWXGZO9Jkpoi46MUbeYau6Zo8qCq324r9E9xkiByZ+sCB8+bSK7aEHvBLU0feDQuMgJCn7V+BqnHkxFonJczqAFczX8T7sbFhFwEntA3GvSk1ghuQlhajxb1v9CfyWR/zRpg7hF7U1wodVoHJbPyDHNmM/jMmAYDn5adVP2T2egvFYNlF+a5cUsQ+SibFxdxIeh9NgcEu4k5cS1NNEON0IMR7EE8s0ANQc16x4PuvizU4nAt6fTorJzney8odC8J//d9IQDLOEW9obssXOyLvABXpH9MptII1uCoju+5jiI6CQYwKsSqs16cx8POyaL9bmSngpUWe1YRcTtJ4L2YCjZ6GpCGWoJaWmTcA==';const _IH='8d9f9eb6155a5335b3bd29e91bc83245cb5e2dec4796bce0ac135af60546698a';let _src;

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
