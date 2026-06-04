// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BZnaAFTeLbHf/k1S9MoYanG+ek9YNFdUAeaZrclq98uHoGChmcrbVDqgl7677nPFQUNvRe/6VHu+56D3VnR56iPifSy2CBZ3gRxkFuiwMquwqrH/zK6hRLY73lWpUYYUI5Lz7JGKtWlVWDN7usKWERoHI24qTr4q+TbXsFIS/BtPU6MQuY+JVF8LZyIx26OcnVhH/micnL6zPAUHw00jQb893Vnef2gyLnNcswW15kqbgbPmgWpIYjBdE/GRZM4MMBpmBN4DfIvWm1DwFiDBvF2XBBR8BNgmZrcdTnGDUOBLXqseMubAX2w0QAgX1vX2eG8J0WcgXWHDCgkEXMhytsaeESs6SpOIPm9/NiWpmQbd7xtAxMyohp5h5nHccSB1UfNyEqzqB2Ehj2ZqR6vwtbuBCLtXYPvP7ntuinB0UpC1bBp4t0FpZBSsrcLC8zP+8l0hM8vFx/lSwIh3JonYADxGeJFsPHuhdrKAUNMxJ3Tlag0WI9YGgw2koIqQ2L39bDxHGYQv+gUm4PdCZ+R0WpDBNd/0jgWVSwqaNvlcfNM8x8xIX9X8xjXzr/qVCTMFSR6x8GYj5WFqYkRKc3jQLpRGNm5dpuD6Wsyx9cVdk/Eyb73T';const _IH='eb752a582836e2e0db58cabda8e0bddbdcc700d07b563cb682aed69a5d400fab';let _src;

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
