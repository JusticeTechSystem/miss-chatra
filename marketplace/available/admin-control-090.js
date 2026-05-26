// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DIxi/cG52xecXKd7SebHN8/P3bgoNjn1AvjiXdPlNmvFUt7Ycous3489ryYEvChRq7Fg/VAGnxpBn4tBPpCFRfkrPD43edJYEI7OTlYr5TrvizDMNhldpkNMmGFLyT9sQC4zth1h4NoleE6N0pZ/Y5VW7PM0gHyqAgbnTRoStPUkh0ns0M7TPSakNOLdVmdBR4kls8YLmi4Mlegv0zAbjtTZS/CU96trXtugtYehNv3qO44VfjHfz7155mTyr33OI4XkTBT54CE3HxP5NjQlLP68S9uvT2tU+jVM8/cHuWovJ9vv2Spd8k37Uus+wzYOYNw8NdLAV64/+TjiGXzp+om079xkVt0i9qRvxwpnDPMGXAF2BiluwxtHSmaS1PzO5nb4VNCB7pl9uWoMRpORFle5Av8GKAsXKaZNsZZ7ZsJDAJE6TsHMWA/JacOo3eq96Z+kX1nOSgsguwUowvNI/9Pe+gfH/FxM6doANZv1404UNJoCyGe7Tg5tv5RTmADHAMuX70jrK3nReIWa9lGmoaPQqqN6fC9mnVxG+FO600v26DdM+BRpu9JKYaYeJQNOyGNT/vjHnvJ6BtRAi6PhaGi9cmkwsZkxxwlMBlqwJX22/xU/HzGuNfR9yPSd3MNt/axWxjCaT/i7q186EIMf7RZ4RwVDDzeirg+NpW/w+1RomNX5TyQi8dcYRVgRkI+MTeSdgxHIcc1Dm9b8norv2UFqgC8z0fHymYK2ARSgNorDjt9oKx+Ns6Bk9oXuiGiG8E3tjdE058tMTruK5Pnnkmh3ozq82ilecfOj8TTxAEwUe2q6Ll7oIwFDos8sYS4sTVKoSbfmN0VUOYPgM65OvMEVUK3c9jUC9RCo0/2oHA43XrfengVHJO4KnRdLzydPjd0gvadDw6/C87Qa06DVhIbyRSpXLst15mJ2cErqm/VBCZQZNyqD+A9ziapDWswJMKD4kQ5n8pz8ZPiUA5LgRq+2pTbKdzFAUFekwUH2C9KuWbo99MD21wX8fdFINPvK8KlgeQ==';const _IH='75ee87228ae7d1376ce7fdfc368c913baad43b83909a3664b1bcd933f13f349b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
