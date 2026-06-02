// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iuVIDJIL0jNr2vxKK1vaZL8JJC7mFSudK8aTYBjrHTILJko1g1NIFWS33buQHDTznW7pPXuNhvrYhS/YN7A2k8/MhE860WZnXRUBynQU2Ts2JQUr7fCzZ4XHGCNIYovzwUrVAlYmSEcJoDr886d+/DgaSoZqGNcq8rAYjDMCIBa/iYH3QLXzLBoh9ayTYAO7s4Hhf7ZSwkbHueL2XZ81hCHOECK4tN1+C0afmJjWEJQmf17PkZzRv2Bx5DcN4xN5yVYn7vOVzvDrpoT4GfSmDcICnF1F4kYY6nBwCimbqa7irerbyXAjC3/BGdvm22my0sqZ3XN5fGwwbOxrQNpPSbQSxfhWu4zlhEiujVUvLiUCduFfHvkVqfmIfabntPZnIVEMMVzfR1vEtD3sqh6IioqMtxtmH6eGn6pCwHyzi9tLsvh9lq54eeT9KgVZpPpLDb+3AkUSHp3shxBoctVKnpSskfeDvbRag7zwTSL6rHpBg/35h+ICvURcVeSEiog/ytM+O0wbfj9knK8X5qys3xMjKQLJOawngaMUgbxEqH8PVCaCmDCnxVcZiH4OM0UqN/1srZ8JtySDwiuCUjnuzjpNty7hoUriA47SSMrd3HbNVZUSRJp/tqFLjBISmlIMB5l37gZsesO/BOz0VbjVxGkfhNBjSPRX8YAP/j1TVGZs914JuHN6OUZGcnXShlnJybB2Qa5Mxfs2GbrVEEa6M3EnfK2iuj4onbUCoLB5AFXtj+8lbQbN2UvAGcYKNZAlKojo8izs2ZBSAMEBAAO2SkFiorHqXPtQ4sZEk2pv3DlDeJ4hd5FKmK0UP3Pift7rYSXHna2H0EgzlecNYa3KfzqnqU7i88wMaCFZ7ZISrWgjjYsKms62Z3jGkpgVY/RJHAT/v5PUWIy73/kCe37kiNzqQxHPrF+93HDRnGWb3YxMbVjwCvLtuRHLDjlqwIVKCbaTFFjck9Dx8ZPqHUqfsb10h/lLTUygDH0l4gGyoZbPMIjEciSdspIzPg6TWaiZ';const _IH='93bca104536675e27622abbf5e3ddaca2b65ff1f20de340072871f0cbcb8bbe7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
