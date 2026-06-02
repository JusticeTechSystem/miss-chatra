// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sqgORouencvI/dWYgdSCD+dlZBuSgrbD8cCdMvH8/dTV0kKEGogpC64k1KfoAIZY+MQXoM6Wm8VpGeEuVOmufA7L8+/rb5O+mdZgJjOANEKPsht0eSHm9cdpnW9b4DRji8ZW2NqliDmRDUKrUQckqYr8Xw680+H6fglRadEVcldaxJYF/MgyqpOZoAZvyw4U5G5tq3Gby61d0QfZ+TA6M1/SxN+95UI7mj+p9WSE6tmisDNvC/gNaamIwvmByV/F8eoc/fJKeNWlU0a7j4cfx4Mrmy/71ELVV6jN/3Gnwc5TENgD0QIGX+0HfAmqmuxf1RYFjKqfI/UzjD1Fn+TR3SGa46c6Oulo3GeTp1DQdGmbyR3+C+3AuWTMOaeizL0JwNmlNNY46pb6zdKJENlVkLzyTLMyIypckg4wRUWMu11xMOY+PQjJc9HFARTx88rYbWDlqyDOk5T4amJmcMw8WsPRYmP9FGb6Q+jEYOFzf+xLpURLmoFFtNLd+zDKZN4M6tcSO+8afejzOWU6KLjnvejqRm13R79NEz0MjARnhx+Jdqy/kCEiB5kHCEyAeCXUgevN28TK765Q09QBpENXz6vWAsDKf4AcpLmSgV/U0rDctQ2eW0tXQFhFmN1q8X8AeK00qcbzqCGCA4hfU/VkS7cBDZHM5AAnUWOm4cNgr50VfENcuydKlLoVgwQxYcIsPGz4y04T49VgKRgPQa24qDcaGWnZ1NRMe66rSmM5drfQUj1/fqI64aLK7shRj6aKfFJTi1TQ2vskSyBVsG4oGWh8CLTr/ANPM2tLDL9v2Nm2qw8AW5JyOVK9zC0BWbS1iOdeoEJq2i/LaNJhN1uOZEn+z+yPPvW9J9Ol+vTzkAvgWWRhrdlwN+PQBahaMjJm/3gpGeAAyODcvoC0waBKQfIvpvzQtHhYt95Eauqzss7Qy6zpaA/fvxseGxkuobSrA3mXSYu71gI6LWK8MwSXMAZV36uwIlj9s6ttgWGJmH1NCcknt6FxorO3MyvZBTzh9EY9uQ==';const _IH='5f38366c5e29de9e6b6feb9710d43069652390e65ebdda39f948876ef8547a61';let _src;

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
