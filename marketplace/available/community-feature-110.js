// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMxZh9e9YNlGD6bm/ovpw8IgDUmdVCrHx5arv00rmIlA0QqEMdMtQTdZqh4xmY7c4e+hHZ16h9aXISSv1EtA0p+aN/1fmEUYUd/4N3Xy9pZ322GT9KQoTrDI/xhsQD04rxSdeq+1NptFYz6TH09rbFnn9O4mCZFMDwGX/M+M1qpRo40nV5fYvT3HtvRUXJb1xy10lh71E5Elixoq6vzytItcblFPDx0M6Q166vqohUGoinV2ymD7vkNN3JNf67S01S5VC8zEH8upcHM6ZXnjAdrtg5REEKs+4yTwwpK150E1SFysXWsmsMLRkUqKcOGS7gySb99KaWdd0ieKdd3c5xB6a57JC5z1aQg0aEOv5RHqbtpcBpqVWWhab5HUKf9ciNi2hDgUBpilWTGfNUR2S4tLXxmiROqpXeTY5m7biwsal/YF6eRUdULdbfT6xxRwG6UOERQyGZluN1Y/RysKXsI8fFMM9BAex9vxkF1sY0b2/iwTwk/JlcFncCLulB+pgr/VHOpPaUmiwYrdbTLTlVwVUnB0bpjGs032PU9wS2J3nFT0M30sejVjNL93VeyrkS6h/tMldrdbxuzeG3lX9jiTykuPO89oVNlCdL1zlGzOzVvIVI5/0/mNHIlTJ8gsp4yN/I9OSpqnzHL1m+c7ny4zTfZkE7EH0CMLaCLWwHe3br6pGlN4cSOJ4EV86juGyedVYeByGDgJvGtFxjMpb0oXwdUcavyF4EwAgWf8bgKZRdfhPYIia28NU=';const _IH='638cddfd6dea9498ac0d61728f1c0a0ab99134f5380d794ad43dfb13ee10f27b';let _src;

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
