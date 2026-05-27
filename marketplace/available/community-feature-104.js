// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fX2XznSKNckcyz/3nzdcW8zJaOStaEthGCPUe8oR7FEJv8ThcooOAwy4EqHJrsxo3wyzO4Rh2CFm2BtOAE6SUna3HQt7kp20MIndp0vGMMBMqx0DnjMEr0l4V0YE1lbcnf/KirhLzhMPxOEJU4NjkyVyguFu8zpaWTw0fjpm1q/ppOYfZ3HjT6sICWiQye6keFep5Q//kHs1s+Lz6OiCbRuTqbxKSJbWQr5/Kg99QU5aP4gEJ76z4N2bsYAdozjZSVuzxWLSDMn0Emn324FlpH+6QPGsvx2jWAWtDsLkmPBApb9kZhdOAsbKYgvuBAnDunG/uK50J0LcovUxuyeueFO8XZfCffvtVvQ1Ud7hLoqa99EdWe4JT9QlTqWPW7LV+jU4bCs9o/cvPI7yFrIcW5yD4pfEgcWAT9Iq8wZo6UeUdrcX10cPruP9rkHfxwpnX1BPtixL9mwxhBw05BS/XXixleVvIFhRawsKt5cbHGJfsdl9yobzidFutF71hcsZUQhBExac4jtIda98BaBj+GPnqnNm89TlCdN5CJGjgO5gg5vhRjuinRlVvoDzwiy4ZFXmyBHuiUeA5nLqgX34WOEpI94NPiyDmqQU8TLD5alo28/PwIVaaVy5boT8Stz8rLlz9sxl9botJBgWQSJRRDCDK0EaFIXLPsxc7O240hItvXRgr/wJx51Z5ns32/98UgVfKppYrSEqm7WiUSvOrhKglYO+Yv8Sj2DAjAliTs7n/HFK290=';const _IH='04b95b8ed2b1d187f98bfd78157259d0aca319064a3c5cbd3c8874f13541990b';let _src;

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
