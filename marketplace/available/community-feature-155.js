// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='igyT9aI6EX6oYkvgJNemgOEL37NMHWp6Ug7BvfvJDFq6VGs3l38vFs6SB+9uGpsAfUxzeZCXDdhROkACIilAqfm0GIjrZjNBQB2IHBoVO+ntKUxYKl9Ki/PMgPrqxA+Buy/DVcwe/KwrLxOv4JcXZ0jrML4tdZ7sBy60N3PzTglagZCy/TZH6ntwEL5wNmb/H/HFKig/lEu8wUt3ETxONcyT11vmmN31F/b054TBAAACUVNU+h9zV5ta71Tg+8tfskgVAq9bpXVTlGgG798Fvu7kfCPg+zjNN9+WkSrDt/AzalqbYncMpXuIYlyXP48Jr0Xtlqmj4OMg92EV//THlqlJRm8j7iMSp7KoqeRVPzFJgaLl0A9IqwXcFPPLZTygECg+nfDN6MOOlrm3CLm1TFUY0QYQxF1q02claljOFhlWiCvE1u91UvhMgTR4ofmLTo9BCRI7sQ3TuP7/evb23Oe4Q38aJLKuGo1sC8nkK6oMpyU5ffZd2ZujcyhE8wBpWCNAYf0cIivJWGrMvtrzduxgJgRuIctJsNpACcpo6tDuXosmsQ9vcYRJfxLJitA+OnOxM9jkegr/yYPIs8sB4pojkamd6LoN07R3iBvMA07mHzsD6U1fb1YQmVH91B2P6r0HawUx+ONipZKgcCZDc+6qpRbHUVS3X30k355tx1Vje13gj8Kj0WoOJst3DDDqefgWoNAJS+ccYTpWIb7W6ESwM3HNfGMd9zZYrK4s1s4tZS0efVD3KBE2';const _IH='744252941e9b8e84212d5cfc07cff6531b64dc5cc7ffa502d3fd4002e492beaf';let _src;

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
