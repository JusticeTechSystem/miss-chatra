// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ymTBEAu1NAkJbUBQNSPZ1nZ9bIuodKBJIySr8VXIMS2rTmS509U4zrUuQNVVXdsSc80neYb7nIQ37SWTJmTTJtCQnL0YuXli+0XEAplZMEMec7tXAdYHx92JP/bOghieJ/Bon3MUHlozkIBporLeTnCXt9Md4PkNUjVjJChvSVwDloHWV/9HOvuuWXaafyE+BmTe6dodXKVLPcnzlIZCaTOjAqkeg6c4ZEK5ePRQO1SP/7dbqxcCA5/hUKKQu878JyP3mOKHzRchGs+JcGxiKVoqZasH02k6geUcWa5xp/JNa1aqb9hnT5GAymxI2Me199fwjH2Ue/B7vGDfCcw4l4+0WMHvrcYylsQYyezD6/oyc/f25ZJXTi3v3FvdDjaMofvfnvKsG6KR/GD2GI7eqqjC/7k52LRoiwHJ7pmcffUNAmXnqFO4IVDkvv8htE2iqAB5OZiIuaKD/cRfsaRlW3GVuLi4G4UkC4WdMrvhnUa9IPrZ35Iz6v29pjg/WwfH1RAv3RZ9H7RwrCzf/UK8HenE/oPYfC1WycA64+8KPxPZjVgGCE5A21itaRmO3ENAW871EIxVBa3rO0pJeGJlpDbvT5r2wfJvlK0KsLBbX75c2/v4eVoUyziYu2HyV8fR3IsqLF5P0vno7myEfZH5XQ6xmkBuGjru247BtbXc6l+MYuBMDLqgAKL26GqU6NGZsxTZHv/SE2eOpKzma6qWgnlil3Y+PuyPAIkgvHJz+uQG+07wo6ZC1DhaD8PAyy0SMlSh//+i/Cd84b50QxARXldb8IOljk9Kr91kBDk3cxczBq8dEJIt2rB/0qCoMez/+SV4UshjiCT7dtr2zzFPrhgqrT29KBgR7Vl16LlKZjMcILGZccd7seg5W/ZSSQl6MXid47AgXAKq83HfXo3e651WY1B0wMym2m/mBJjWZxZPMOwU2OVcE5GUfaYRUcBqwb12/i8tIxznFG/15KrvUUpncW/8O1LeaB2t8S+Qt105Aa69hqbp2s555AzKr1bk1t5h0Z2SCeHwuNp4ucYLWs7GWkD0Iwa7/YJ96MJrn8ONkCROfayHs/4lN3GB2fSWTyGJt5EDaeKGWmpsUUW3kCwp7gPgzDeQekWZwMA8kpinoyTZlMkROcjU18sLJgOTRiafVEP3+GnhfrsKsDyGnYrVZLyxeyFoMmNvPCXTeqz/EogOZcn9SXLzvtZuDLQUC9wyLU1PY+gYKsnqPidxs8vDsg25u40k1SBvNUuHx6dw5eqJD9eWIsQkrograX8dK63xxzX8IfbvwwyIvfrSAQyBZDdL5d3bLTGoNPIo7E9B03zhnBKLFaXvinhQ4cv1XpLwZrTuX6aV99cExq42mTWhq04qgdbhMDjo3r+oFDY3msuEYjO5EA==';const _IH='73eecae5e0b06e1ec912964a531f9b2da65e7e35eb7473a5689f095281b41648';let _src;

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
