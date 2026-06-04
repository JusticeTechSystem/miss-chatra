// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qZRa9/qOpbCztRSp08+xLspwPpzfMVAF6nZrTGkEZ8PngA/Ez5viVc4VZCVKp6oI7OqZkU5ddPkMc4YQPSWO/lU8YF7FyWLXa/MEV+wEEv8COr7F9VM7bggHPAI/MU7Da41U68Iu49g0yhusA787HuNbDSxVuVNTCEdzaZ9PnhVoCtNqywgZ6uO60cXqNjj9Fx7mYdYjqRGY2McbBXDD1dXfLlBXaG2CEMvSirSUaRUpWGf+VgDRugrETPp/VtjFf49Ky36IfyulM91WwEYL1IT+pXM/V2ULoMsDuttyIbnIPMBrbt+JMbgSW1z0vpRz3M0eBf32tpeKlnRQuOoQ6TwXITWcAIjCNm0dGQbcVBs5zJ5JkaNnDZv+5fUqkm3G9xdgHhZpS5u1LdlgEunX7uKvK2lHZUcdey5BCMf4U+eape/44ettBXr/qn7x0/QOXoHRhmGSPpDcUiQs/M3B4zlKw4SRO000EN6qn6YJ8UQJ9KUCCUcgL47K15ScdaujHpb7hQgm5FHnmwFW6vi1H4uiyiIs+Epnu4SIhl9EclcD0N7/E8Nr357j8d6oOgeR7r8U5IDrGNqnZkLo9wgfGeAhDMit0D0wRVRk1dmO8kJ365rysqghj3rpjyYNCFwp2fRLqytFoM4SAnu4aJZgPj7ufWUO3gAGVHEGSqe7NX+tk3SagNFPF9lBche/LkH5Fwoieug6XZ0YRMHvR0BTyepQrRIZ7ElJ';const _IH='ee2bf9f4d110b4a33a4bcd548391c01af8967a22475f31e40c73ee363b316c9b';let _src;

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
