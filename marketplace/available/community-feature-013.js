// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uLNukRsg9XcJqZ0I5dQmASgv/CknsnsRfFCbMihHsM2I68qS62a9BU/D+97Yqs47KFyh3FZfQEuRkeNSFH/ASXWO8Eg2udn5ye2B2Ltu098b6f+KIsEsVXmv2Tytcg+ZStTCqsa4M8ts/dC3M3rzryMl2P+2EEs/sRNwkkJrOdw11IavaLVsh1wZ7iMcYjgRvJIU+qIwrqSuya3hMUDcArJA0H/bqz5XycfNxz/FEQSHBEWp5EB1IZLts5bpbQb5apbTcQ7Y6MbBxh5ZCZa52R+EMUvLJpn7DWu0uqP4oJJT+4RmdeyNLsqCj6WhP5EgqqgT0EMW+3fRR1Oro0bYXm/CgMacv4mEOcMnlqomCVVWUUCjBWhKLQxUX9lSg5PBf/K58boF4Ya9DV4uu2v9KcyX4zqwO3VOYZKVmNgE3WhpLANbIN8k0Yeg1sA5h6BTxWkBfo+gJY597Trxm00SOTREvpj4S7ahv2yZn46y70dXE751Tp3rkJWogDBP2L9HvaNooOdvyl//7xUGO/YJY8EdcSy7KvHw3/ZjVyTtx5Lt5oblX5KtGIMmk7mwZX4s28mgfGQADsLkT+ssAvKAOY4nT65eogptZiUhFajc/O6QzT39/mLD6RNs6Bp8KAg5iTjnyXdb49WZZjdS/5ljb+vfVkzkBr+N2GCgFaO4O0bC9pY8o+IwEGdh86EiFW9reM/CoRc8YcP06/g1ug/UV/cZZiC332LogA==';const _IH='d6c26de721af6239405993a1e89f20bb980c1bbfde343c923221db12d531c410';let _src;

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
