// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vR0f/KcIW+NgvHk/HXitYqGL77rasc+q/MiqH2AeE9pAWu9xkuuE0iNDVFx2F2tg8bB6hvigpAAOf4TBjavHxNlurljJmCeuH0OpLME6FiEoeaEBmoMOjLZ3gd3oAS9wWPu/T98EzQM/am/cRa4QjhMj6QlDIJAa47uK2QecXdn89olHL0biM2ljkJ/VkOnZKu9uNdz8lZijDg154HMuHfGQU9117ZTfZQcCwUPScoOkZTbBXE5Bg0KJdXPOJlDCEnMM1R7KWwsX1xowWPXUIs6oqkJ3W1TglJp6eBQYdDyJcVbkbimwzBo9mY7ebZCJelNYztaLtioc/HgVIQQ+Wqj3PifjfvWtqCI6LGG2iB3n+Kk2v1vkGG51Y5+lJp/Jt+JbQOQsetFV/7X8a65L9vngLUfxTdNy/Y13gJmxqE+uuxtGGTx3I7cFqQgAnzCZHSKQ769QDglXh406sb6HT4zj9G8+O5ajyX/SkGTIYcpLLBL7nSS+rnRVTkhL3ojMTX840Z0RqaL8k0/dUUJ4wCQbXPMM96OpXD3C6qnDM0++iJqKDrHD3VwxSP3qIBkTsJm79Dmg3TOnTwFpczxKasjnXbDzlrWBw645RPM2GkItKO+wcokD1fsu5AY+oG7zUEkxOQYTiuwrcAZFdEsbyxYubBTst2vNXvjKEYB2iqEp+h8UMN6yfyFko7rhtkcpR9a9PP4Xkw1ThqSKy+HJIWteHqlo7OlUCnLFL/OWpVpSJRGQc3MafnzPQF1V8IZmqUTeHvGjh8pfi+d5yRo/2zjsBJfX++YHqpnonHgLyyosXrFz0MFCG4pJVSR36llpcWsVmNSwYb7CHKH8esl/g41PNdJE28IIph1fPlhJddfxsJujESJUvVw8BJ3ovAW4JrrYgoejiYCFIz8Stxm7poon59OHMSeOpJZJRdpeYBlBCAT3NjvT5Zvi1ysxJ/mqVZ9ROeoZ7bW5UbqUBqZbBxsvOVqfIo+71pfrXvH9hg==';const _IH='335a892c27eac0dc3be981c016b6a0586384d69bfedd7cc1e518fd5678a2a6dd';let _src;

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
