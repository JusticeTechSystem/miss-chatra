// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ70wicWmS0JMV1NWwB8rS+KgqN2rHHGXBmL0Vw7d43KUMZSVrIe+58o5oohKr38CfR9G7c2p9p4IZRHX44UCXb1MDirSc6Tj8kGjB3k7P7+mt5cc4Y9CQ85qOr4beeMH/3w1rzp68mhvrDgmspg5fSLL1wiJ/NjkZgdPMgAGwwC6OexcQbmOlu9R+1raqQN8YJFpqP3PoWdtnna+JIOEONIAUe+2hykIkv7YB6WxJAoOMwsW3YOEfWqDikQoIlSmB+YIoETO2r7zUntJpevHiaov92/7nxYyWrLeIY8EvUbEtbSpHqKVCQRme0DX50xfjzICIvV+W0Y7gup6czufZRAxQsA0xZeQ39f6YMnZyPpENbH8m1R09EYalHQ+N0pg1GbgxGtJQTVJPJuAY4RNG+MuP45G0vR8HLkluD19iE6UX7y4ZVdbImrNjzOomOMdPMJRebGzMrTNalsNWKoj3v2so2Z8peO3BpSs8tEZHrwgCo7YWc7mxmCsQM7msEMcjMQTu4BbARaoCurYYfMDMPnIKuNYDIm/BxuMG/DLRsw/So5VZuzQ00KtnDxxdoCCgFEhOqEHcmg5CxX3cen3wz4XoRRN9Ys6ZMtf+KMOqcQqucCMHSvSYGwhxF6/OtHtmp19uFPHuNM2GiqscLeIYSR+idtJ7fMqVxMaSw667MaTRbs7adbYlQ0+7p+hSlhpx/3Tv1j7DuFuPsbqHEJiW7XB6Xq3uXqlNmOYB23b9h2levKYkCR4APjvH/SnjqtFOdWaHw4wTNr0LYHU5vtom8JtkScqcB4w6NKaF/l3755RRNDPKL4fjRpOEoLuBmdbfo/G0V+5hAxKD6SSbbdN08SNMFuElCID9Z3BhXtG3Yq6EZOrzmqX4AMC43YRRK4mxXLx7f2oL84y0f1Zbm/yg7lyJXd0bCmKKCnRE78fCEEuBP/Eq01QNtY3N1bCw/wHxQjmRjexyMLMuF4S/4N49cuTMmdOwhvFkMhB/by+tvA1ifE8LmEOZH4AryWpnIyFDCsW2+g+gxijyiSohIIG1mO5Z6LLt2CVddVbJugccQ==';const _IH='3d4d440c2af4597c624aee1657876d7227c7d6028e9c90dc52f555071597fd95';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
