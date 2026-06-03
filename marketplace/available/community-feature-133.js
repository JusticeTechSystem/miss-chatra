// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2uCqeSwRFONU3AL6yNR64/OzCi4oXkBsi0eNZzjXnPE+JjKRGocihUUOyhwhVVRXN1Eo0XilHqrG6clXwDKEDKtyWe/fjGvqaicSdpGjeniQy0bxQ1n41CctQbzYFLVsaz843TPEk+E/WDTtGL3+7LK2VCLZokAG0i90xH0c3e9F8U/48J9vXFSLJtwOtWRvodCNAPqvbQBDdajWgsDSxgObNe8KFzJ58/9gvEQigqZqkacrT+jzwjzXbn4/ZH/0YBRYDmled5c5NBTPX7f836CR35gmi/37cwDvu5HZrVV5SF1ZpdfaJpAAsAYG3q7eofwPiAk9oEVRc/J7skKewJWcHrZbZJB7uz1YmtN9WDVduu1iP02ke4MGEWMURN73koLURIUxYGnIpys257r82oAZhbgqyrw+g7XMwIvl9LP56wjeppbqvAGUMc5Zcxz3zkJBUFcu6pR3kPcD9M0IT5bV9xhJJWOIqOV40YGk7BBBJiKSH3XTEUYJ5Kl9zSX+wXV4/QxJAlUdJi285RS1DXAv0gmTvlCy9Qut/WVrIleT8VKthofy72HdL/orHWAruuwQOGU6vryn7bEyJmjJyx5rId/P0m2+Jphw+y+3SoqtU45sKl4Bi1Htdj8cOLCjtxBx6z/s7Tq9iNWQJWHBOnYQBYnI+qqifSxtY1bCeaZLgBPwfs3b6AIOGSqfzmi62N+HfYoMQjnoSfx1exZc6UweTxAAeXdCeAg6aFs=';const _IH='2bec8003a701007b5ec86ac6a3d7d045bd9c977cf691c35c3ebe7442b90393c6';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
