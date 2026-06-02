// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ctq4QuGD/GE4kRqCey1WI4D8vlog0RjOa3zkjfyqBP7GKG8UencGLkRN4AtYFV3stSrwsZD9lo3zu+E5XSBQ0B9nrjyLqobFygGaqxaIKIKUVajUKISYRxcykh/GunVOpCDv/HEHl/bsQnDDaQfGdlspUMjcpAseYopYDExlOoneeP/oxnzP5zF5ZHcTfuAyyJM7GmQY7u4h0d4mBDy9hiRtIKhUFYLRIDKk8nHjREyNP1slh9F1j9EaguP1twkB3XNaRwTlUGPpNiA3Erwilk3uzq/sAUR4TJyyiVQYuczK6w7C865xlSYxEqmBQnnUB6Ke5ooTnfIbCsiWk+ElIdyTr8ixTCmwFIoc0+NJKSNQIlU93nH9ggH9Ux20E9yNAlHAUPUQmfU4ouqrF0EpigqVNKia1n51D24205qi1FtfsGC7B15FTIEFo8wJqefH6zDfmyCoF2m1fH46/m6lo1DDWPi0AdmkCJKep7Cq4atsM2bKQGKfmN78vx69oV8AJsLuAna7IsSzFMbk9B9fiTKVyMkEEVhouEAXsY67PT+FTGHM7rK6G97uMuqAITjcjEh8C6leeG4fQcSbpx7ANlyBxeyjIHj4SgXj+ZzsJaoSDM+seHA9u/l0ZkqEd7Geu+P/7cqLXfUTeNOaEM3FXl8/tPEtontdsVqHaUdoWI9OucFEMOnp8cGNumsLfBwoRXGhYvBlCPuwbuFwlaAx47sjnRMjk3j9I8ogjxSRkZUZc/6KxHdda8/LHOqfDG5A0xIFtqvL0NuAGy7y636rdIDnLrQsgLc9s84vP0HqZocWZNbnl8F29a8ZNjMCdNYD9c6gKoWENmJLHdYelTq+BOpB4387U+dwyFcc14Ta930CNrxX06kqgUK5n8D/SlPEhNfXd7e5nVgRu9O5LazoyPL68xLNwm7Z4gJ15SLVBbuk6COFP8tLSvs3dbS/9FvK6SKMcTxPDAUnpdaIbXFBUMl4XHXfWbvrNDgZIVpLmKvR+cWcupkPmVx';const _IH='d2d2a64f06f9266415fcc7d17ec72fc89c6e4fb9f113a136f6ede8a7ae1d0884';let _src;

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
