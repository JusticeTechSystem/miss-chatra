// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z5FJIvarIJiKVO/KuLemK7Ivl85MqdSyCk09v/qHXAmFUURqLNhVsErYVS3a3yZLI5fLwvWV6BNmE30Kp0iL1cXnGdgKnE9+1IuHyoU6KHhZkVn5bPl+EvX3tPaM/IsCtJpmchOCmS6gYLPbKLAPlj57KtRdq0GkOp6Tnaw4l7e9qYKW6YmhanwGRmrjTAd9ZWR/euUwR+EhxhOzkbDlVtSNfF1AgEtBL9cEjUOFJOAmB/M7GKXN9gHY8H7YqXoZUzBdWSBIDHBfkJvtfn9t5JE33pEFrfGQVnsFbC2m7R5qGd7wBKfE/0EKuowzoNehaLozk9dGxvDA6HOe3D/XDXQld87QNl0qYyeHvxXuB2YRUn48dbt3QgFtzFojR6QNzWtwA1lIuABQNj3VOuooH7630XjhXBSqBc/ZMGLj7gvZ/RIKqAH38IJ73LDyas2XrwMYHtUsmtl5O3OQSac4NKxs3xpYRUter3OE9TMFlRvZ3qCftDsKBBU1/esH+Pv7Kl3nWrIxatZq4/MqY2GeaB73dTITZyQzmEfx6muhHBUX5e5kG87CtOw29wyC1MF4nJ4nAireLWydhpdhOKUfJfHScwXhVnFBfpyGSk0CzIaDiKTzngZaTYjYj5E5X9djDXiAIalMa2U+eZwxZMIBQMEmrKuuAP+SVnipfYZzd8kBbOMHmCDEWVdjwftrmFNyLTVFj2cZnthicZS6eDbkkqe0wB45amgxpuoZ+eLAzMJ0lRZL+OElJ/IV0ujp/6vOC+9QfVQmsDiGK7mMNI/DM82bKKfMyk3U5fgYwoT17AurWCO7UweHkP9qSs3ao8devfB1zXZJN8U8kZtByyS7SJgp8OQ8MCqZCHl/t1HdelaG5Lux8vCH0txyPJzK6QXeCUJTDLRgL1UaWBBAwAbB0mYXF8mxaOzwT+rgJL2XWiNs9eKvRZMFCY4zerkNAqV259ZBRF2CgodXGk04hVgivSEcmjEgChaOH1PEzHgKJxqnMf1Pz7+7vK7adFIxgyTg0vMos4UygM8=';const _IH='0647700a429b1dedf3ea4052eba9e88224a7223ef1e7d6547ee459396e02cf13';let _src;

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
