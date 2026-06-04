// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDIJx4abalCU7tNeuHgeTBfxfWUAclvpENWGBbd4LzxdOUXAjGRu+afFxJsIr3qaBXfzfX1J8GeZXIN69ECSQSMPASqkeIl6t5wZH71a1x5nbIHsioAeXtzD6RzupIzienGJzOCktCY/QbCGuE5x6J8Tpp2xtNB9hBFzrlTqhbgj4lLhGkrnIvjRPQK7cyqHA4t17Kj3zG9PFiuzLoOMg3vk0l4MGoDolZ0iTkWkQIikjTUsZuL35hgxheRn0/DQD4ExC5o0t1ZyXsRZ2rBgFaNQVz702MZnP88nDZ/OBZJZUu9vpu/OddI2JGXr3iZwL3sK/NRr0WgiRRUudQAKaQG9ds8+YZPjd13cMT5l/QzhPetI2T1Lfpw5/lGMmiX+OCdZ7bDa9CdhkRC8SlbpfX1C/kgqt7CcCtqkfqj0iKA9pqOysM0dGsnV0kwSNXuQ2Gd76FWz+y2D+Jt24gnEo1/6hWmI2yA3mIC/g4Xo5MwQph3TeiqwwNsEbijrny5sXuAKDbF2AQ19GyQ8es2MWkkCeadDYZWHNtH9y0Bo5cMi5Zp8cM0WmPRCrXneOPCTtjZ5fIg/qoud6jL26GWzm4b3pRKDyEJpYuotB48L6jj88N87/ArV2blvFxmTF7SURJAi3nWdgsFDr4etsWJZSvdRVlMDC6HLIsQwiZ8C0LhyrlTaIczg9mYQXtb5wxarvGT8fig/QVkCiSZNhRyya+xyCOk=';const _IH='2217e99b0c8490f430236c07925d04fb6e29f6303050ad28ed4037da5bbe5ac0';let _src;

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
