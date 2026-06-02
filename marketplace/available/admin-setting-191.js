// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0i6nNkTk9pSDFGOeRa0dmZcb2wgQ4xqBi/c/oVVqPjh80YGMGbyXQJShPV4VxdnyYjcdJQGAVmkxK/TtQ9Ps/K3V6gl4C+ghRasnS2w0fK+grn23e8K8os9Hsjd2LPHhZ8VaERJMuTNCH7s0C/0DyWaQXx3Gf7qUvXIE+qNseyeLyA3pu0RrbhVJaLdMKlKz6AyX1QoxWejuslecr93xYJZYw/dFHCDqw3TRWRYH9BdAzMhPx3KFZgsrmoVCp5qSRnsRVcIIMTNTqvIcUe9zFiK42latr7r1DzQmMlEJrp1h0Zzv0tMVlMIatZ6uJMuRuIjnaYvATumwFcIHkM91pHL92GNtOr9ZkkUhfLo7OU8IaJoVU2O3/gXFjhsNqpNMWXTodtBOxzlQnjw3xQZxNp2mji13lNGram/HUxH1SOWeAJNoo1cP504lpu+lO6Ky/B9tiqQ2X2Or8Y8cx97vBYp7Q244p1wAuzK2UImdvi554KoW0ilgFzx+MS2PYctxJA3uwi/Ny3YepuP908K9qfjAzTDrCiLXondmfytUKRU2BqmZRCMEcA7TSAQw/nsVXwm7li2O8o87t9YeN7fFZxm/oKeBotiVWMLI2jc5OYwVUTe5g2XnFtZitWMzkyEk3/qKCTEi0zHZcblY5jVzrL5QslhjqikA6WAnMOHxnMKdpvrxy7WNHf17vkdqFwBj+LPgVyZf1aVNDsKsR1j0dTWBr9XJ1BHIH5k5yLgMBD44pmhYuuRX/cGmoFWHs9NK+E4vvFWk018ly3bu/jWNiaE7nQRUFM8PIjkrh5aRFJ+RLEtTaLV8yo6WL17QSgLOOgO7rJL5cXJDjhdqfX35Et93WJSGuApQKJ4+REaymM3wF+4Xp3ikN32pwViXE8bQocJs8ewBZZ9uqByqF0KgDhF6fyXX5mOD2j4Jz/V3oClUsy8Cm9HbhWhzsRfMvXFSEvZiiGd2Zc+IphqA/2Nt746t582IxPC0+/dbsmdpgXjBYQbkvMlMLl/waUJ6DbvjEiIOoe+0CEI=';const _IH='eb66e166238718d9b326de0c51f65ba1cda1b3306297e72780e0328458c6fdf7';let _src;

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
