// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhk9blqFqRwNFFNKWNs0Us+/Wj99//69NznkZB9xisq3+mUGjvzwDnNICAlCtM5tg0lAGjon/oOn1l9mMIP/v5msy8wz2zavdTwP6Fs3jO+FaFd3NczX65uiJQRqNCfC4WMIX4Q1scsmCQN6M2961GZ1j3hx9KUon6/YpUFE44A13h3gEp1vmj/roJdcTu4TlXR9GcD680V/QTqmTpPTKzpGQFWy6a1M+d8PpRqhY8wHliesWhWzikQ7gFG5qNmib1XCZgwSpXJ8XtrAPcIjKjG0TFnJYnPJT8fUpmZ05/HC69HR4w7PmV3dQy18laDTfZf7n6/2m6uwNX0aEwlJqk6r7m9VZpBgzEutXdi2+sE0KK0dPdQ3sSZX73lBXwhIK9zfnr8tLVH2VS6c7Pu8LnCcHzgHhja3ouO1GK0nMJLz+VEpgp8gm7+o22wRXD7/UN9Dt4Kzvx4+lp7zLCETcwqdYZD0l7DcYJVng26IwRiYHooah2KE5KtSoFYakTpuWHyzU8TbsTFZHZYgLzYQZaSTI9CXaSmxCAkBBZlXEFLCTw0NFrkYMx1iuDdve+7YGzhBwlo9HQA+ifANJSoydtVRNfNYbOnfRp2ZSgTI6j6Sn7DIgRIRSu5cosdhLLYO0d44yVC3kjgOjfTe+xGl8EwUR2fH2AGIYfoij5h1SEKuY1fBuA9J7owl+6hBHt9pRFSfq1o1Dg7Coovd4xcBTlN/5HzRabfioW7JfDa+rP0/mNY2V2+OfsI3gLmrQsXOwCPbvrI2sO+usGJ2tzqjaGt2ckLtOLLegXrKnjr3d3GzHolnitsZwEkV8LtGxPVV9Q+w5ftkAcO5sq+ZkJz7dk3MD6532Dsh5shlL7YHT7xC6fYGQIvNL55yHOm/ddrbLZFMnDVDf5tYJ8Vya8AgosmLSetD71xpZDxm7ZdPFKiN0pnaZV5UwduRCyeM9M3MOH8SM/46SBgQ7cOEW7NMNyYoNGjUQsiSUOTYVCfgYq6O+eaPYwuGDQyMhLtIVKtZWVM6AxS+od5iAPPQC5OIBe4Rx3eLMUOi0CLVUFxRqGQXJhQWpdH/G1YBDT+gKGteNSDO6wRRwS3BAnUGgO54TrOHni1GpXa0a6sVmsxrAS9oH7QLBTI8LDiKkbuAq286RRFDE+36qz/YJvXxZP2UKCyLpy/zeoRVMiBEftp4m/Rp1Mw2TTF60pjeE4oaMWQA==';const _IH='9c31117ebb72f2a5e35c22adf34afd25044cbe2f69860c28c85b69cbbe92cfdc';let _src;

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
