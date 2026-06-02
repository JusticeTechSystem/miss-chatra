// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xcc7RpLIX7zhT5VZkz/7ho9ikFo3UXGokGflAEP6EI2EjcZ17iw4mykfqBviCUYaHVp0IztiBzbZTBCy4CJfYcNORZswgAggrVfAlBGCWnXzfcpDqYl2GtcOQEr+QLidtocncUZNL5Z6VqocrEZaObprk/ahOebA9qPTr+i9JkwWNYPprFgek8dz9n0HJ2e1WEanGDYUTamqMSm2otmthKTPyHaCGg50A1Vp88DgCL0q160RcaFSJ167xpiGVSxHx08HfWNwQL71EHfJzmNUmzUQwWvpFimDBZ7x3/xA9PmYnD9BzswMxmgq91E/E7s5QLST5uYwgdMqlKIojrvgsJEkF+D1Hxx+TKJ91PSIklkUDYqvRUAg8HU7Zic4IrlklrQRoGn/ZP/1DmDMkmy8x6F2v3+5DXje9RytB8Z2xMEw5cyKPvg0FvXwUotifY4+BVn06JnZpH2YwwGdu5mWm3QHnE8wsB9Diz51Do+aCm+hY+dD2zYTEyo2pEzU5OJcj6g5g0iPnghrne/NN90cKpSRvD+BPBxcAk/tQ8RQyE8aJFxzzm+VwfA2v59yPDjdOkbIcDLXov/h9tTPHjnsNfmGz3iUUJJq+i+ZtGB9DYxMPFlhDRhF0B3GkAOcBZGVu0MzEqRdQvKUOv5cTPouglYo5UWWplUDGl/VsWRMABH5uYZgquPZoSRjh2a0OLJhjCy2Hc/m4qA3xL2IPUEf/KrfjrphPBduhxywpfDPYji6GsJnQuck2dVGFc7AhXqbknttjtmoNEhUtSxYvFsCR062Tz1OUyblfzEzWe07PfuvnXKHzaYH66f7y+k2IXNx/pxcWU1ix8Wixsq9m1a8cwtk0zTkBEEwSTn6SJQAUFkH4hlFKT9Tprmw/XmYrVypFjOERixCQnpp1N+5a/tDTc5m9cL551s8mCDkgCoZS+bMVHyMCF3F7gXSvWlULJw/xCh7qhSwdjgyX0Rkf/VaSofLf//PC6aB55OfQg==';const _IH='f42cbb938001422dc7f272ed8869eb9a56e211e085dbdbc6f5b5bdd8d9f2efbf';let _src;

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
