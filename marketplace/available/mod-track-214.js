// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wd9Kwrg6o9iEJ2vdojeYKpphPTrxf+ht2huCGkeo2I+iXQ1yAJByPsoH7bZOnyREgD/GoDD7JNXjBw7NarVnOHIW+O1S7VjXIKT5WCxBNYB6L6q30uwfktA6bWkGbWRD1gMdKjeGWV8GOs7RxDsEBQes3UpX3F8pBWmKxgrdKvsLGy1svIOvC7FBL747FLNIRShu37es3gW3ExB3eI3R6PCyHZxyp8SA0kIBcEZMr4MiLJNmtoPo5a/bUBUZyk3EOyrv9kUdqaffrewenjM4KKi1VMZUaw8f2EPo/VluPrPYtKrJYlw1MqN4Ia+CR7KF3qNfFXCHXFrLE/dK8oTt9Kad4XnP4RGkKAEGFTzuW7xYvD9m0OhAKlOicQRPWatHW+fqKzl2Mxm4QNBlVPoCG4s7ViuEO0UREWoDkbsvs4XLsyXIyQFBXCSPMKKgTJ3On21F+cvu/f93UGMWMuC7o+TrdJyPK+9snwqrhO0UHGjJyuvYg1mz6d5osUlxjiFf2DkrVTiyto2fEcRndGy7/L17eNa7n94jcb4R5erfk4wxxIsFcvj37gZVY0bxGQW5TPbG7S1qV/ofo61AQnLRoyKnGWh0uPq0oENCAo4iCWh4o2qSci4M2ZkgQt0qVB8NsUeMJdVMqNku8KOX2OzN0EQI7trOG3/dQ7kIDzBwaE8oNZ2ocIot/n/tmtUbXFCEvn7kbGhGFf7wfRZuFKdQ5lGtcaMLJ+4ctLUqOeDjipBYyY839auRSPK5AUZIX0csHlTjqZDCbepcZJWcXMu7QF+T0XNbpLgUAponPHk6E0Q7roPPmJ6al6JhqSHUKG+iMa46a3dcHUFvOwvTIXfD8ihKLV9URQ64mFINlE0ZeOwQUnZNWDqNCm5X+917N/U7cgGjW2zDBnaVJ9CQFA43EV/xoYzJbhp6nUVce6Lpccor4YIBhnj05ZithRJIcREy/vhLbcojUyZAXNL7saQvKocoqy2mV0C8fpRl3N5TuwBrcIHibIDfiY5jeGM850YiEQ0SxgOfnl7OA9gqpIiikPlO09i2i5HP9bb7IAjjkZFhTacGvctU6ctznIM9XIXq7mUFIchinRRCJe1syjFE4Drp0K61oXXeSrfJkuACMUc/a0vXFfug3UrTnZ4dsB3A2FiMeh3mAzQPUsAaxofpvT7cZJWlZEqrMA35Sj748465ATIRXXpflp1aLC8jHaG+xs5P8OzvaOV4ykRCljkvwN5LjjtLszsUh7CVVi/uFUVe6xmzRqPznJs1ISdFqtYLM6lzjloAfHTUdYlA1ymzn2y0lRGtnCu8CyQXIlJKKqYPqHtvOpemUHQ3YVzKM7QcC2eEZWDyGTOh72ecBeqU7M2xoHKWyWBKbQb9CbrA';const _IH='8a6ca1d918db08d95ef86af8bc04ed8ca4b7e36feb7cf9843b7e85e0eaa22c6e';let _src;

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
