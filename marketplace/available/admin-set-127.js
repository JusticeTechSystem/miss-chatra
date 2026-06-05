// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xokUMJcGdweG4oYFmF2qZWPcbZSqw7+ne4b/5jtPVxVnnVuLdjSPHpix0q6eK9OXQnfXTrR+1p/W58q7vJgvynnEGFBzfFXilrciSpL3rq5ENVm1WhgANuYtzDnl5kFR8MspVByUtsbe4KOv8bd0MkO5gpm0p12npCE6We+wKa32gW1nj4uOhofWAN1iSEkuWebuXlBkuL0RYjsVrH6Mz9Xoi2rLF0/cchiyAER9vBXk7acMuBYQz+wdfBLhCunywKrsmklHc7r6021QRj1NGh5BPON0fq3Egsc74jdpX5+jIPx63vTySFkVA/YhpWXg1edr6/PwwfJZjRWn7leVtx90pV48X6Mu6AQ30GNT2uWwz/MFsF3wLVG5s4gIvCBo9x0uKCm446yCMJiGJeIzty/9jpspC+Ua3LgTeYdCH8xaELY4CxoJrAmxKcxVDGejw+bf42rMVDCVekex8u/GBLDI5NiFi21o2RC1unPMW0xCcmedKXjieu+lbG6JBoN352FWRWb6+9Y9mmzqa+W/Id640aKqDNLMNVOOsXA9SMJLBi7D1D3LUunYgTSOpSplJ0dPv8vYlQRP271A/ZJAYEbnAfm/o/dHgSatKNuWQRBhuuEmY442xOJTQnYAP/18jSKDoL0di1fX0NanlemLJWt3RQt7IQPyOJrAQHQj452LWIawAxOGY3XfwyFkwrMz/jNpmpz1NHLmFTkB5UsqRpEXrLcK1KRcNaH6qpTbLP2DdKfpBS7LRw2aGndN3GPuy8nU6pVny6rOZCBkgWtnzKs5vGx7FfR7TOIwhu8x7t96QKDZfVz5aQGpAW3o/GFhgmG+v0y588d99r5PF4YkLLm5EpYYbLWbIXdLZSNe+C9vHbMaRWgLEJbbqQa6k+O4/BClkX2A/iTck3kUndGB31bltUgavzBc39h8I6fcznCNlnQHQN5pEZWk1ZokEYF6yZe30naOlh/aaKz3xr9qCfZyDauto0zdxdngRQ==';const _IH='2498ae433dd028badadc013c1e9accfcb30af1af6a2ce47e8744bc6d2dd7d1e8';let _src;

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
