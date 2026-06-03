// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SfujdpAkNJIjXKHbUvezhCeaaN7rUvQId3BMODpZnHdExp9TXVZvDAKvRADpeeIWf6GsjeQdSERQDoCmP3wiyzCFNpoFA7C7GWEqZfbBQV9zHBFyo9Y3d9ygPiKdppgD8iYa4gZSdv0Y8B0m02ko3OWRXw61ns2pKVeCrTTZUDGKiqNJGrBThCmeU0qn/E99dU7mHuzPxubBrYwB9gHhZpLyN7kgi7HsAH71K/tvQbIatFnvqsLi95vYq2UeWqFHXtPSv+oPqwBi1Ydo3ghYPE1t3aqYpvyMPG10t7C6ZwhvmYGj66txn0katXJkseUNYmqnNcvEvsjGZm1FtqYQP75wN9m7QZL0szYOxnKc/CkRfjJKEt1GHq17kRrYftZR7bRWcVxM03Y5tXQzmbGgy/ODsxmwfNHGLndgLjjIcYWH1YCC9qImOKz47YQgodeAP2k4AvTeNGRdWR4ju3dsvlvWtlF1OdB55d2HBK4w7zhh+Doe/1lC5UuNsi2vWXal3FH8gnWPAgt40nizjLoBZKVGJO+4ZbRYGrYICfjfFjQ1JMlBf6FeMXzvsvcnLwRnoxzb/eaDQ6SrtV5YsbFAbNNa+hHXfF6980dsNxpNKCZbvEBn0Ixs6N6Z+9UhOHX7b8S7481wbg1ZjDU99HFnMgLEJmUd176zIy0ssOb0I3qUZ622BkdE5NblSbm/ZGIVAMZnkiF+3rLH2yBPz2NgImwKCStyGC/DFuagQC+I3qjqdHb5yESaTRUVL6Wexs5aVm4MOm6qa/5FiHaCnCowNBo+MWBiZr3sIwo1XJh8tyqx8VyoVM+MflDTYqbga6AoKY4dTr7g1EqOq1RV9MVtV7Z7ipMkFdDjRzuoepEjd9HU6DVu5bxGNVVgvonsN3c9N5HfGHBuGj0M1UuzThszvvK+T/DS1M9/yDxopA8T8BiPJpRTHhpUTPnMUMqKnh7ZBwYnQZ331f2UlvnhdipaRHctVyiVDgvpllj/FcLHTA8wBgO2FE6LFK6pvGFHx0TekLRIdwi5K/NWOXPbNolJBQr3yVAjzdfAoZp3rVNpdR5PeQriYbpEiNxFily+BJ6yn9l0DLmWfesCpWJ/Aw25jdQ/s2A6D/dTVAqJ+lYJ9pc6PiHIEP+tBd5UthK6XHy1l8iMGugblJaa/vINrygacI2eUF1bc4q20vX5mpG0MnTEpdl79ZJbU7QcyUVj9+YoZm+PcSDF5bWUreTxDyQ98BoXUhi16keToJwm1EgBAWOzuCVOXQ1glczIViyMCHqMr+1XEMCUUNk9i5zWxiO3JFJpbAshJLd/xjw6a1VxveRbS7iOf7E1e9bXtbl0+QxO8xxPs4e01xmeYbr5pRPRzm3LbOg=';const _IH='081e40c71da8326dc3fece2bcd346d77e323fa63aa7fca1ad614937f43ab9496';let _src;

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
