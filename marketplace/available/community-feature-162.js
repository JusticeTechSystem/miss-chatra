// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3SE8Lir8lh4HG2SutsFfCP6dc+xr7T/PO+jwYlWGjl/LqAvPzzplGQfjteEsdpSuKqUjDJp+sfyd/Eu5ae+FWWgGAY858QEqdp9ZqobZd6xC55dWhZ+QVZIYgIx+XbR+MaaP5teKS4gCHyjz/t1rw+QVm1Xs9Pg9vIpVQ5dimkhP66NFP9jqEv796J1366IZJY6cREwwrdkXymZH7snrjYGtVMRLF+xvgXkycHgq9S1Za2Eb3oMUt2Qo7qQcpP5VyHpTdk/sIvPSJG3Avl1zYsM1JgYYbFXYzM/tcIZQFxjs/c8T5GN5I8PP8OSwGKsMDc94A8oQc3X/NHYincikMggtnFrd2jtXp23yqZiGgTD8a4SClTvnOtkBWxJCKdrS1LK5qRevV9VB0pc7N2aIsh7IItkmSzMEjQFcnwb4uIPWvFozgUjkDsIqPRCjM5kIV/pZxqRP12RN5vAxpWtAeQgSjmJwl6D1peFtCMT/yiLhUliUOw1k7ySC2ioIcCdFPJQj+/yaN22DFiHIs0B6VLq2b+dYRro5g9TOTmMCiNImPbfGndpTmF5QS4MBalmjb3ibDNEtFgkkcKIB2gUXPYrHyZ8j9kVOYpSNr3c1j1K7KjRxpPpt05cNJC3BuiFRkPLr54AzAP0HBuw2ClBvnZ9ascKUp2VVPchaAj00gui592SI9YgTL+BisvwTxaVaslu/TiJCHu1T3PwwMXOW0InaQs8GLMdNeDlPJphj8vpzzPA=';const _IH='fdb629b59c2704ba54ac200fdac94d0e737f48611a1d9e7d2aa8c51d9d1de8d3';let _src;

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
