// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V/AtmtpPQ1LMta4f38YJ3vjYC6qLBkshUNbmZALIK3CXOsGKnqKrB3UaEFvSXzWVZdg0rMOnusMoTiACbniv4tHe98VrGPL5sQA7GpH66qkS1/tkw5csE20KKHcev/Q9hk5vTHx6Pof8vNkhhZnUw1dplNnS0ObDwD6Nhhq3KrKjMhbPgP/uud2UEzKA9+IJUMe5sgq87MtwvqzrvePY5M9vsinyoR041NcW4c+GRGicPyyw7AuUnUUrw45BZkvKvtK4L1eFmcg7GlZd4brFsXLTNpE/KlwKrEHmpJxRT32wNRKE1aVNweP/emgJePBPF0PdsNVaJmXjCsY5XAUb5qCeUGhx+mYNEw3ganU/UUWOFb7pwpOkzuBA5wPrILSmflkuYpc7P/aTdIc5semkY6GiMaVxzkgsfM3z3p6OXA8AQn1xhAAxGWnIPnnmr3NWWeygQq5Tw+wT3n1rtVLCFuSjbqWZLYKW/hhPIuL+qZUstiZ/41/b7aJSOC0lvsxZODa2+8rq8kNymM1TYo72YImB3SuAuMWWjzjHk8mdI1BF9pHtaTocmtTffe2oUjh7sMS8KHtsCIGQF25+PcpPbvengp4UT3HFWe960KnQV6ewhD5yLtLlwX5+pBiztuDbbvku9X3l1CnPnLDhEDK55ipMrBlHQytW+xuQGBc1IwYr8nzZUboeWWCdQ80Th0HHo5yz3c/ZlrqcXNTgqGaW+6YjC2C1hpm+eXZwE4dqxRAKXL747T0Ag1WVmWwCuaKhYkIs0jOCt5rsGo0otzH2SK1+q0dgYC96Va+gLVN1Rz+EqFFQXFwDev7ij/DhkPTgTl9+IOPY6yqp85y4mB/Id4II1e1fm+5+KVBOOWQV8PdhOrLSMkuaysnCLOrzm8WTMDB+CyYqOsmwQRP5hRSgW1cWjCdQPSOjxAPP65SNsmF1BEyFOqnIqiPc3aSsGF1tEmLH6FgxCN4ba65KdRK33kRqz0usblLHMzAKWSOYc68uSYfZNV6FECcViyvYkRXcJQ==';const _IH='42c1669bf3f0f515958d68a9871fa88ee45a9a8158d0e3dde569d6de293a04d0';let _src;

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
