// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1HJkaZMavTwvItds0MAbReOHgCh6CjjoLJiBRYldeTMM5rcjImJw2BsRsCYuINWlXyHyzh5cb9xVnrb7+yKhL0CRwOsAj17+FwxArnRMBjwWi04uOoURknZVqG7gfyjpEvyIOOH7hl5ENqmfa+lj6Cs9PQAJuq9qNq3Pnon45MsBkgAc/++rlniQE+DNOrSY/kQoj0podrxyna+XkXovLzcX6q/ZhPGTaaG7JWvRnCKKMts/PINmZblX4hHftwNJouRBoN7eCCp4DB1m9T4ShZtNWkfeC4YFQgtJ6/qxuPAoq/kCxVaUOf8eBg4I73vamxFN/1SaInq8M6egSAeTNC0bAwKwodxYc6yfBblJPKIVx2KzXIn0Jf6AgbgmchurWbNrrIqZkPLAeqsSWrX1G63pLNoL4ig0XLuVsNub4SWFydLh4JhgfXruqm21lvzqeX2Z780Ds9Qu25E+6vvIjvm54kKkfCAv2fzT9KMlO4gpaY5OTbKULYpfk7wMZ7mk5g8vbOJuUw7JL6haA3V5mv70H446rjGm5pfdfyGhreVdcx+hmPPV2ge0+Wg7U2qciUvrYo3oGxF7GEjQD6Na7GvQr8vjl10k2oA0npcm9G16BJ6mZUSmNc7EFMxwNJmGSfMWpTOkCZHsrsxAWWS+WlMsARI6Oll7QvgszQ7hEvorzkd7kA1Ue8QUeCxtOudcbGY0vZTb5ntDVjno+nflN+dNJ79zVymDpoVu6e/GEy6KuIkzbaRWqg/qgtRfEMoEOiyzJbci37WGbgTk34p8aCmpggHyfZX2URTcKcpkIYZLxPVF8EW83awbmOcyXEBg+PGu7fwVxXBb4JMvL74gIgK3TmKp36zrcX3SuW9VVbXhNBv/FuLDL8pVoucTG5RMyu18Z9g5Yp4PxixCiU2CscZnNZyNNkLw7LSBaa1vwZ1X1ZHHXMHqhjppnxe7hlIkL2z+N25OaeRLhzmarkLsoVJtGZo0t8NxDNGCys6C8+RyIie5r+qaSDKLYpfmAWHUYMwP6bAAGf3urIQuJoL2vRTkDQk6zhV1cBOiRsr/e6xMLw==';const _IH='3f8ee8cd363bea03b42abcb638702b60007021aa7b451cdcea56f7586232603b';let _src;

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
