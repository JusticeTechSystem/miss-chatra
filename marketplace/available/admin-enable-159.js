// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QqJgPStNbTSnULVqzJLM6brM/tkZLnRj5VmgTbPDfxZSE/7iEXaBqWLDMgaJierIDUDQeIHnYVCvIx+J/sGhAZFKJ7+kU6kuB4LZrN28tiz4CYlUBBKMDc5Yu6A5mmFyC8jS/OArY9qaHgxPKkNaoE5owTG4MDSSB14v5G5sK10sjE1DRx6H640z5CmiqkeBayc31csyGHaxLUqV9+RPFQ/44cwWe1VZo4ubBDUW9ED6pTUwZFNb4YuqN9w8YF2Ca+/Ba5nRZ4W3aL6IaM75DT+E6C7blT7DG6pPQv4iahlyXP/vTA5cmQBwz/RdhMc/SHMtK21ThH9IuBEbFOGYGGZasm0x7oXWGp9ZfMVckTmnAMBBuBgAdIk41kEz26jqgY74bZRhVFUDBucRJuDuDc9Yf0WQANCAzHZyR84Oy8VOjspGOT0MipVamEBvhA+UyNXgoLL7MQzMcIxxyb3DoYHYtOPlb5gdiiSAzyfwHasnSZoRBy9/wM6aYLk3+p2sNHAij8dR9gT0h4pTNZz2TJ/4FJe6gGS8BTmOemSU3v5gtdTXBtkhXiw2vQbpfaD/4Q/fnHo8U/NxTT67CEcuNwF4+LshWfP4q67G0bRScWjFLGrSN0m3mR2ZNJzTQxJ/WzvxTG5xbqkx+3G2XxkNiRZPL83rQMCHvOcqp5Mwet0iQj6iYfNpIr3gMwPe+HQKDqguBXENsLkKnmfBv4K2ybOnLOEgf7aHDb/MRRNE+Jc8gOMWyaycuVc4kZ4mR+vqLkv48gvNwZSdz9dS03ie2V1I8kKEtT6FZ2zO8JOWobR+bq3fiScffSw3DFVUbg2Tep9sA4bxg0ttES3XAEnkWlBsvLUyr9DPmlQNIzFTYzviJZoi0eeWbn/UzXLrM9wv5V+DPjSKEtB97zRR0JKEe0W/fAc3LjqCwsxPd16h4bjA2mXbvYAGlXPNMdzgmrkH1aESpNVt1OPTS2YTcLSK8Q1zSnVtowOUNnj/4PYxiGSzttRah+Ryq9tPJH0lGtG3ng==';const _IH='0fb4a024742d558404878a9ef33fdc86650b6d45df533dc67ee11bc7c1281e32';let _src;

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
