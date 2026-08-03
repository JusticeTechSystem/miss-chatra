// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1lPNiA77epuzVI5nTygmF9jNJZhcOnPDrQCldyHrz/dUhKArIOsiP95Fp8u5QG4CKwXoVsBR1mZL5p90Ny+vQUV39KrKFqvBsavXGBKy5FeK4OuQSWAB2eOQh5/Wc8iQIDAzGDRTsC63tTHUgMeaXNgsxiRL5DBAab9jP/VC6JNzz2aScg6UrDjNiSEzRfkeoZJk3Fw1d7QQoAA83nT2YWX3EnE8G9PL4uHjeUADN6q9k6h7FZHcGwxNiX12FYw69DAdQsg5pOlCYRAY36739yNqkQpDWLKyBBmcxWuJmgWMfkKhvTdTcZUPzVNHzM7pHssNYoIxF10KqQW9OqS/e2GbBZHX4H9EU6YsHy5fb4fSowSAb5QatPwBA1vcyuTbvFd+CXGHQRV1wwxjeAsF6CuiVQfAy1RYNKNFOQpkUkH1jNqq4xghL/ODqyBTBmIrKEy5tsNTDh6YmplEj5TD9B7EXP30ipq5BOf35l6vaG5GvU5LryQjEeFzPAUwyPvXglilHVZVlT+oe9BRvkQsI7VEG749s3d1DzPziiGmPnBfJoB2c/2HXHZFZuJDPAu49x2O0/mINH2ymv1xoD58zd2JH/8nHlDieeUEwXu7M9Nwryfytou0V0KIfrGDuaQK7vqTugK/muffdrS7053OQvLU38B3Z9Jlg95wJGeHxn7g3yoxkjscuQBX/J06eoXjzAj+NbU2pD4TBCD0KTbOSWliw1/4EkaXf';const _IH='b88bc082653135f4142c1a2f7e0facaa50d6e8bc789245e15d0bbe6ce6785006';let _src;

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
