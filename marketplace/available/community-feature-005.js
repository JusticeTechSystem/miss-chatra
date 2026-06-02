// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n0PwAUZhZoPonYaVjBsceFAjraPmANj2ciNrJQz4YFtTrx5Sm3qkreJU572tcwoZ8xsYy8z4ptOrUEQPqZir9S7ZX3W4KBPC2vIo9eizhBLNSYfUS9a85Hm8d4RZF09h2u6wC8sbnehP+GetfCizKZB5mejIORZteJzdOR/wLcvx2uwMUj/7XK7wtieUbFbYUdYKXPjJEvclCFh8tKCYaVbKm0zShzTSSxoXRvWjqeyKerKnQJdkwFd6YMRLUluwTG+1AC9Z0Ooj2OThWngdaR1ObNjljoLxwZitQF5T3M/B98yhcaLLI7IInZ/ZSow5D+CwJoUMynedAo3UlDWMmd9Iwi+ze62AMBbo6CuugwXB47WKVZN+WYQc20bPT5lTSwxIpnE8PIbBhmcDddmVeCE9/xOrQEbgvRi1JGPYxg3vkoTiTe8h7Enmwdn8MUXFolBsSYo1b0YxHYtFYfqB80M9+B/DkTOd4k+eTTUB/xKQyctoXfLBY3fFcoYgvVMnq139hB74fAPfDEeZ8jNfhLk325F7SskRk5T/1wfzaQX4X/6yCG8q67DFuMBv3rs5ohhneY3Ig8DY+dwpIPVK6VrHD8mpGNXiPrkL+S6nmY5wR+wMmWEH/d0Kf+TXfdrcqVmTrlQsbgDKdy7G2LQNFCl+mohPXMgUsvxVkAiesbQXUwHKekvHPpbfKdUs+cRF4R9+6+xvDmukmLLLwJJB8dXZ4dyuexEMzfIsOYnYIUk7Og==';const _IH='c1a9c7410589c3dbe700ef177dcbe5f47f07a2180a32415e2b922e69ccdc60e8';let _src;

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
