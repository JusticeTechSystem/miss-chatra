// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SpVNsVbJlVT1CUeHNNhKxqNpck5Rc4mGxJ6OEnH6ksJnTzX2rR0GokqxDZmFAMvIpjvrK9OWgVizQ4ma/VbGVFo8BbPyF5+DoEsNJvTE7XLw/y+710NVMD3NaYwnOi1m/hT7SbUfeYMze8zlJGsrVlo5AoFiqFTRarhSW75ZgMCMjGQ8qt3gMnThhjGG4B7bkaYAkDvcmucxjB7TkNr041qRSfQgM4WdfPAf0u8ycjz2v5rnzIfiSC1YhZVPBTvCFWbhfj9CTWkfO+x6FQQ06dZE1/TkcFUSOzGaQYcXzt2sFufoqEwCr1aqKZKRD0zvwKFcRxyNCMp9Z8GpZnFbeAd0xlyCUMTbx2v2QOnWMp97bpMnrmKS+dctZaPWJMvbS4IL1xeFvaq8C1bA+yOJKjprYfpdzUDGFl4iv8LJ521E5dQni6Yb52dqRHnWvuC1/jZ4Lb6BHnfZCOSkpvtdsji6UVS7li+VUED0POeqG2AGrTTCEVsbWcwuzZH+rEtk6/Y/432IabKipUwnMyDSOygDzrrqCQS+/ZoMrxjWnB2w0ICi7rt2PdEep37j6G/LsUX+cSdzOBOLWerdcaApMVtRXfE5wD7dlf3i0F793SrDYINcex9s8LSeo3vi9C9sRnL0uwY/KPmGbDN+wAZZ4O43OKGNqXm1LBzQCo8/XloNHX9t2GmO5NpRs6/EbtPeXcTr5afd5HDCGm54nLr6jVWW05E6sRu7oSLs6hbeRD3YeoErvVZ/+QlrYwKu1rfJAUGTZnsjvgqAGdBT/T+kljtJwhImSfI1ya6aHC/xTclMUbA4pZ0PsdbjPZogqgbYlCMpJBBoWxaxjGGL6l7aEUlbxH0Utynz9rZcF5lWERXYYUR6YbzMrJZpugqcOj9Q/pAMHqeKr2MZ28PdH3rQZbh+L4xmwF7RbH1c5bM5ZefPJAxiKW8APQwWxqal9KNMGK/0LjRtIrQSukcRSTMuw81YZVYb8Cc244jin8fhy9ukD8C0NsdCo0/OQHjVFs/B/z/S1O/AZaO9sOUz8c/Sq1spj7/R+37600llWdj/JQdALLsveO3PfA3LYnI/YTR71HRIp3HcA5qJy3QV4tJFurhSrASsfUpKEegrK0kfWdUzv+ZxTNVu9YarBSocSDwk1JXBWkA7UcAH35fO1O1Myn47LtP1t7gkLgqhCwaf7lvpoM9r4QeuQ8XY3PcgdEMH4k91DH1mrdzX';const _IH='f8b8e75f118495638194b3e894492ddc94727335c7a9222e2b0724856316fbe5';let _src;

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
