// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xE+BTYiC2Gmk//G/3qYHBg9FNtAQBIauKVHAF9JmDQfnN7lXf1jIgXjt8cTKV9s/yC+IeeFk+L63U7rI3SOQ0oqhW4Qgto3dWHM7r7N7/P0nBKtF96gFjKyuMCmeXC9qsZo5KjCHy4CQrzrNDNq6/qTNa69YwRHrOt42bp1qcebPk6oFV60+OzRIgQPnt1SNeC30da1eLjDGFJMOc5eveet1YVP8yFXl2BndVJDfQfWXUZ37Rl8ID/c7JiMu62wWeMgHw9vOzhpqKRjGMd57qy1kGPgQe20DBrJIRIarrJIwJ6nOrGiCs0Nroae6ediGamNSO6h0pHRbxurifDoF0WgeZEgTpzBEQDDI7v9ny0QA27oUTKegkHNR9FbBOPsaat+htcvMoaoLqKZMnwENMfqNF2mpyKyMjY+MJ63p8Du/hSndUHZF4T8TaZT/sm3EFOSNoyp8ywdZ4puHWJmyFpnbZ3472hEmPJk02n+zGanypCHWr2A//aCqvWOFf4S3K97sh55v6/kyugfrTXOSZET0PxoVzfbopIKIgpPi3xNH1nykd/tPJ4mzt+ToQdQaM28fjYQLisYsVozpXQQV/DfRswO1VgeTJTpsOxHCLA6VTVUVMcSTIzzvKKTMOdZn9VtFsTV+DvjE6XVuOw+v5l/aIsCaWn7dtdAE6ovP+IK5HLZYZF1sIOpXcgk651xgL7CnNKTL5psq7C0DSjSgYRWL+DbiJsL45jMumgIAYZKSYsQ6f37eZqTeYi6XqOI+/7AMt6IMBfQqQcSrVeG3Oup5n9HS82R/+cID5+u4zWXfeH3+tAxcnlBvQVhrRb4xLc4GPfQshZZJfm5x4TgPtoTs8wc83pSB8nEXZR2EbKFnVnJ2ybuK3Ne4+VBH4LqF3qmKWjS+GboHeDRJrYz4RdUP7AQ89LxZiSjRPPL6B82XtZTXPDH4WmiQWnjdbh+Na+l0Tj5+RR+SGKInvO5OMrh2TZdH45B1XcoPfE36ZnuPojg=';const _IH='909ed7edf1bdd0a43fd464e0a3061ba84713f18c0872bffd0ea15a1f025e12aa';let _src;

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
