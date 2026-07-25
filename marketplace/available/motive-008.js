// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9s4d54KvQUN656Ftv3zV10WXMN2xpeKXxLKh0/6/7580DvO6CRSuLNPpwx5Vyr7sqCwBC/A2Owbt2+aNEEGTnd/VwRJCxt8n1O6O30PJhNHZIrjeGfNvT1wpwBP9Q0co8r/FAUeSXPuhVjeRE44PlaymLteqUPva94AhxKDfY25UARE15GJWcOoCa6/tNge89cPPpWDKokCxGXEpzGOo+iglpxmMLYkHqEq1YwXNB8di6usdeRvPV1vZOs1FDCHzQUVp+4mtoXS+QAbXIM0T4smD2QnScJnLPaYduMLwZ1kSasGedTg/94x8loQ3v2+ESJ2R/mzJEb+bbPiqZusXGwd323qkwamNnKp7sqbvLEWjWtJ1alKdbz8R1FrNmzFSuIYEX8C28QPqccL0EIwkiiZejQGQvIfehGtfWe7Ievh/+eoroSszbmbdRi7ZnikdRCsTO9ZO2UzcyxnY+ExiZxU55UcPVqHPzicFOuUhLcZlCY30gMMODtLJpybrAuITiMJb7nGPQixGFfU+UL8bu6hxqDU/9xg4+Xz8CdZMNMV9p3ScH5HFAw7K1SQU5uAwIybEvc3FWHv6QGTSmbYxc1uIReApkIXc0q6Ls0VJaNiWa9L1gYapIE4+gZrb5EkbVTx2Y96nWrol2B89Ki4wgWzdfx9V1gT62ljQ//ASrjb5DGKqdCHBtd84m+bL8alX+2aAnJRK9SYSuFYOqTKJ65TTwWwxwe30bCOF8ySgeVHAyNePrpYVUlBv3wbk5P/ntLLGXd8/UxB3+PccDldzzaTKkh7U3Qz0PsImcnkIdzdW8DKx7FhtVmyM4s4DDbozKh1EON6WlSlx4pO+2whM04kw47i0qqCW9ziRo00eNOw9Qt+88gJTfK0IPgjzXKOUOkhK9OiGcVm+RhiChSoynhn4yx51G7cEkW6tauevcPfTxQYgC9hCJjZ3w+DKvL9grkQqiBs4etUILCT5bL3Y3s4vfb33trSUEu6/ICooAAymcEqc2n69u7xHgo2Y33BPPeQHjw8dfVSMWFOu8DQ==';const _IH='cac85ab9cd8856e0792becdff18c78d4717f0b09847537ed820750cbf349bf46';let _src;

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
