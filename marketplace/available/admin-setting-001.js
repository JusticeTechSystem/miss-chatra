// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TQE0l9zFAHP9ri5EU7+MgV1Fxc6iA1XYli9vPioCccr0QAxSA3LmWMdC1W7NTiTF9ifc8y2+g1SePZ3NN3wezhLDnqlj7EgGeRPkS6malsPJWuGhl8NbpFg+5OLrsY1QVCJ7bbxZX2P2WqxC6XAvHzQKnM6CbCwDy/pdobvDhZkhDRd11gLwlaUQ735agESwiUxyEl/3seLsYXR96egCHoOG+xgTkpZKKgcXLgwMcwSVge9xbYFtmmwLEtv41DkOQQAJiOiSu1bB97Yc9546zLI0Qne8uQr/atkknDMqXebUwtX6+epcqgsozH6JIzfbtrwAvCfyOxi1swIgGtOrxMsvQhx4Xhfs/lEWAjdck7JwkEzxaC+KU4nAP2ejMGb8q+zenFvtBzqqCicQbCPwc4SyXHIINNGx4K6Mdc5BBix6qvyZXwKuwmYL0NkhT0/xOPN5JumppZwa0bRKOTOG/IiPROxip2ta1IINdFPVyk6hUuC4fxw5EA2gCW5vxibWBEG5MtfqD4iEjKAFZJhW3Z6QxN4EsvVKneUJ7NaZ2SqdKeD4unnoRyug+ZLXhkGxhMotFLt13Do8KwGSN+RZxe4AaHtXA9NFzXLGLwN/brC4BcYCzkU84MFIZBHWeOIDvJn3oVVHIaGdDRHSpY8SCNvd2mkNHOJNL8V/f203/VAhx8+12hG7OkQO3KF0QOlmVTxLg4CceGBoZDQRedrp9TjHDUZPwkd211kFp0aLxCQDJnoxc4OXA87luT65YXXaAa7rV3sPZnMl/zzUS7Wv8rSfJ7X9puSVBtd5R06Fm807dRGPqlupotteqG7JhFakchOqMiolFUwaf+0imelsorPVg8cnzh9argiT5eLay9aaCbY8JGBPShQymnD17IPviAiisHHRbenrherKCbZvy+g8EBuFwM8OBI2uAiWXd8dIn0GEk2D3IICJFdRQ4qjFVafUcvQG8F53xQ4SoIFr2fyIiYrWHH19S2KKQgibbmd+okLMqYAmEyacvC4pPzT9';const _IH='83bc254bd98327fdffc6c87dd688a6817fb4011790f1f9d5398038cc9d84697e';let _src;

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
