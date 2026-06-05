// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Ha8WYUzaF4k7dedtB9a6WksNkuMNpThNrnIsO00fVMNHPH4LMTrMTEVth4GQGeXpyrpX7A2NH/HJoCR6wXjvA4fMRprvItPfXxp0nxXDVY+y7RiUV/vA6Eu52c9Sg+ul3bmasf/GVwYKM/3H9/hMtzytoLnE1XLC9O+bZirwSKRsRKbu+JT1wuz+4nwxPH9CA5QGPQHGCPD1vSvKcyaumLccDNxC4nSKJidnTyLqpV5m/C+i7XWX8NlxrsHouR8+dpOGe3XXhv7Vn+iPVGP0nvTxOmuNm7yncdRijIc4+wQnMMf7dAQyhHBo5t5k161ixELtn+tU5xI+Ez1l4K8FNuNsl6+yIuaYbMDSGDX+Yj33zUKAIZRmhyjWaHewf5qjgK2v4NWEtWOKWg/T4nmRsjZKGQlRH2BeNOg+EWgeijSGhB0Dh5N7W257oLQxjcDaSmnmUWp9mcEIodBeTFHwHqKD4DRgmaYDui9pooxCL9HzjmJG6n2BAdxYw/4C/WkYGvuYkZm287Nbv/v/pwe4822CMA4nM4kUT4685l2VTeSJeovf3nTTLwmJwcaRyWnOaEb244FEgKnQUP+lEXOc/+iq85a9Aj4hTQfOyUgGparS92mAfx1wAPX1WbT1hNtd2PU36L0PuB44mFsvNHi+unGDyvwwjncjwXfBepbP+d+RRKJ5ODNoY6QdUbIQfCGtFEgyxDSu4eN6xyBxEvdcbZdVHHabZWZvUzUKwANNmsX+pNeHaa+UJkYxPBBdulBPbZJbGAnKB+LcRQLcCQNk9iWe1XWKrtiFXYcynzWRaZ4cHm/XGmoYEnf1lwhHzfjw98PuRKbhmUw0SXJNQNHk93hxcRO0HtATQiwuMfyYqbQdHLgi4fBGuIFdNxYDZzqa8Tti7GAA4cn+1qSeycpydURn0LnveD8ANQEQwJweUROC20XHUxh007bHtlO1NWZnFlNXQJexpnhNcTIPkqCmCRhsudVqUUvsYsUNspmu0mG06eo7ya5F280URuwHYR59/uqb8Rp1Ax1m/eMnBbtoZTqWHe7IhkMBhvu/WAsEXcmBA==';const _IH='87d5f9b1b331673f369e3f1a322cbd14de0844dc501079b14a6eec097fbbeed2';let _src;

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
