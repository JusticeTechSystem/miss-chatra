// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx24PvpOUlW8OzUEIXMj5NOXmirN0GTfthOP9SV5EJPXmcWAj9O+eJ3Mqzt1mOsP2imskVt5QfFeHaaBcS+vFk4s0rWtPLvYOcOLXPENi8hxR75R5WdznzfF/+1cxvWgjspn/OSF4DunhUpjRtBhbwHdcMsELQIY+HQm7Q9jtaGpIZ/WGAw++g2a3XlWp324P6FjdxukrKniGOe3efpEm+WsVHQjhMfenIVOM/7wygG98oDqZAwYTiKs3jBFNGIrbhYaDZb5HAVPK2p+L3tGuizYKXfapBh5ZpCGYxYkKXrG3epBfyH++F5WbXH6VHNmIfNZamhatTwjh1f8aGYUim0mwgCSYZDQVUq+zeJzknmtgAiOnzfOWCHx1creB5L37HK1t8Hj9XbEFsU1zGtrI2bbQvmcPA7WXAQPfUpGac9gguMw8HlmetUn+um4iayNdcxqtA28u2cz6+gyy5rqsqAVhtRZK+ftbYLzyHTdoCIYAhPdwbvnmWPRnc8+k9jovpVwU25nMWBncCm8KQcp47/YgdZ+2Rug8G6IVd/fDrleZfqdBbLlC7E2vrK6Zp3nWgHFdDBjhsdej9T6o+U5HeV8EBqIERy4jHVXbE9SHd0DOpyWBrEB7rVt8bi3AsZw5T20H9FC7g+3n4OXGZcNsvEPurffqKBc+WiBTMZjP+hr9mMgTAIYEU9W5cvmaIg/FRBgHpDMmB+4e5begxSfE+Ie5806YvMoyl93quwBTGucyIPfaRmDdNzzP0OBLakpar8FEH7cL8zTNpp+db+78/bXX54pge2Mmu3EMt2ibq0IM7WWTdJQst/V0/qFIBDz63AFtLKMjAsXoxatY9QssbkZPdJHlbwt+kJi3+rGbXvEnDzaVb5I7KPVmYKqk84uNkuaUbPM0LN96cYYMDYQWCi8x9Ibvig9Jj1quCYrJ/H9kSLCv/n61P71L1VfmDUbMI0k0Z8Yl+aE15s2xfsnHeCl2gteAa0f6gbJDvfs6BosKvDytwjrA1+jMg==';const _IH='70ea9848a23db0d23eccb98077b3143d064586ae1c4730c638343298a2bb4ff6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
