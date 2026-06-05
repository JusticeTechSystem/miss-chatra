// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fs3hJKH6bW0XUBlDgCuB6rX1hc4Ig5Nu+S2ua4tM4BjPZ9dfFjXmw/GArpBGjslNqwIxBTDjho/lJo79uaFDzIwWZqUQ2VfrlEApqOCOPQ0L604/TsMR8OxFcw/pPwYdduhy70rcAgE9KUY5QQdKLMM6RLjOSGjXah3N2BUSypOCf/YjmS/jRnkJOdq4x6vC2/eZxHU02DdTjdFN8XLBrobSiQ+TTnptbXbAmFkqi96OY5lAu9bxyOfq1vWWY7OJuLJxie1hfW604/mPLMePTcFUa2oypZU+aX8h+v+RcGDdrjP3D3gIbmPl5PIZVoZGx6ezQA6JnNAxzO98RzTmxSCYDqSBGTzKLhzVP+2kKijLkMS3F48OMyw5nnWZjDsqv813oFD7ii0zDyzHBxyw2+ZeFNsa0geVvSI4uLjOtsXedeXsFtXWF+nd+6BQveq/0+R7WBkqg73wUbnOvbvs/xtgqWm9eEUzkdF92zTxTOUozQIFmQwq9897zyMEnncRnzya2Hpytmx8vf+s9DQtWCJLpT+QeMtuLxHrzhneZy6AYuGs8RU+NsyaNygv6qoBJ8Q9H8iUJnLeQZdh4fhpMaabZ6D2iVJ0JzHtCB8W5JMe2Z3AclOjzANEYPysVNA6rteO5yKdA0H/BkVVGmgAtYlEP6zDDvY+Aif7qsQ78Pz5LnB/xAxSBO+l0E8gJXl18TXfBFDeIGfAxHT0C56ae/utv2j724lIJRGQ73lMpeQf6eFBfHUz0jLEU/j+PbVpDxT9kF4uGjG9a+sKeVKXafb29wqoGGCKnC4Tvu0VQMW1SUtigFQqyQPmL2IDRCVLDNjVskkt4hUF/kdEIrj+/HBgYsHVh2ioRTLlhZ3nnfnoW+QIbgPR6ilfQDoGGKauOCnzapFhF/vWUAVhwV17NKOejvApuxM7ayyoQf5HFiXS8vBNnWqxk4lblOU8ypW87G/C1UujZmrmxRFF+2JxKwCYVrZrNoskJaZMWOgLcz66akHKESI6Qc+sEAVAhJz4YWCoWxOR+JUfLeyDG91Vo7ZKMSkN5XHLbVeIZKvZU2lKal/sXv/1QjdXuv0QIpOcvpeeNBMbgq4MPXBC+5TqcxvCYVv7vAAPcpcJgelbLNJnhYL1cng3yN3Wi3z5E+cU30vnwVq63sKYUQrUJ0UaBpNFQ/eifFbB4hHOJ2HrelrA8wXWzNfoPYyhCcXdFxBY25Pjtm7O/zpsKuK9XIj1fXQli+Onn7S4BFeUi33ahvETXDRCjhrsooBMhv0Etu80wS5IjmnTlo4/q7IlscXyxhUtHu+tVSv+vUoU++ywJZjnOUJNHHOq8kw3fdcDrqKr//UWgPgJTiIsel04sZLFDzxdTw8GbwjWJIC7zK2JB3Fnbo3a5R9jrTKeQypNoWmexas=';const _IH='9a3c077ba4a77d2b176aff14222ff2a004d942e56eeb492f38608cedee56ece3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
