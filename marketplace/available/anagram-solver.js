// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2p42TsniNirKUOer21euO/9j0rcpjukHwurYIIOVH8FT+EGM717oCBc1hKAagajLSJqhdnkLdQlDK1/taEkaVFapBIUMBK7QU2+oAtN8gLOwxZibySleE2In2cTc6pagffTd4BmUmLX/89vl9Jw37wIvfnURgw99OIz3LxCDI469l33BGRhImE9BpNpebyLsrrHFQup1TfbBv8FoZNX+BzPYYgJyc3LPZ99+XK9lcFFOZ1JVtqQF4uGrDUcJv0XXjXaUiy7A/DcuOv1BznmOMgJKyFmZznsyhKKEbSInxlBV/HRpcnJfyEKvCVzzWKGF5XCYOwxT/MfcShfJ+O4i0qEyq6lx6qapyPHnNF8TRaGM9r6/4HLHXBhEVoKUvVT6lM4JNNd7TVkb83MmCiceR+WHYeX13AwLkQ9C9EsL/l7QVzf7iUx4pMDsn639GXIPaKEDioiqeCx+dZHHYc4qZ0tDSScCgrjWMX00aHThR5wIESRFwMk8PjlzM8r6JpkB9mNHIAW3/c1b6L4EX9h8nEP8uh31Z3ajF2yy+tPQIyUWl7L+ovS+WukocK80Y+8a7kDn792WeWmkMtXqqBxgExLkzLcuO+EHzdPvEapIuA3tcXQWUsJqd94dCk9V1cGQVdlFNZ29BD0V7jhNZ5c6Z3q1XFzriEc63vZgzTX+UhCWCyQ86oNxz4rYe5fGfVCs8ciOvMc2940V+bhzhtE18HWnt8T1i1CZ3UbRuP6UuWX+nywRWnfbf+YNLBO22RQinODaI/c6b8Nbrl0+KRI2TMA2YcAXIUmN+ha0PrRykzuQYP4pDE+T43+9xYRR5t8QfrG/h3qJA6/MMv0tFbW2G/oOGr9A3WD8XaIzLNWqJM+rbxN14Akqv+Y8UVxXwWYL4c0ZZe5hT+6ARor+DfYBqDQNyAOjVGtA6Wh3MCDCpJ42Qew9wTwincgsh0UP3t/BdOQBsKt7EIhOy2FR0QRqMrWcSXx3YzNe4j6fr4nE=';const _IH='e0a0c96b46b1276fa0e5a1440641dd6cb13192e6e0d7a94ab398c2ae4939d567';let _src;

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
