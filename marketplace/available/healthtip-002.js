// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PZBQPBmN7mp3DqE3/VFqnIMGKs1bSy2QkO2CYcYkPvWvTRT8CHfdP22b+tPwVANsh2hyljAo9paQzx/HImCcGghDoNW7tsh3yqPV7E3qT9fIc6n6hivVJBeHTXnJOm+6o97malXw+AER3uWeNL9+i7J7hqV/xppQKQBW2PpbJDJaBE0jz1wLWhPnzTxxDzTMooHZ2FSS4VKYhFs2nA/8Sjr/T80I96r1wjkLrMgkMWaXLiD5nKyb7WXrNBvmELwEeD19aeH3MbjfFdAdsgkBCcmEwHqyaXa4UEAfDtdz00PdqgyyVSa6+E4Zm7UlotkB5KGkBfSTkdn2vt7J9UY8VPKHTrQGecE4ET0+TTYc6hlkCc2Go2HDVG3stpMnTjcDOEqU4nYydFFUutsScEFgO5HiRBLcSLxT/AWRnmAKSPj614K24hCEpAEa2ib6q5/ikUPFd7094g+2tNBWhUwo6g4Wn77PlfB3HNnJmhUrvKZF6BZ9M5Z/IzS7YC5F85Alc2+7ANjmi1deXJ7C3zHzR6X0Irj3SOvOssk7G9CalnKr2hDsNwp+YBjE4Sx15ldFNnVo1OfhdQU7IR83Lc0KmwlJ8C+k1PYyhRDe0GOOQsBUXfPYKYuMPjHoUQLvG3JhUWl/hAt1WV//Qv7Fpmos+VJIhgjM0FUwzu4DfxkfmURyAWVfpNnGJFmC65U40jZdTo17/lxhSeAy50kqERBv1ssu6JSFw7lbL1HBrcW6x/5tMgkfl8LX1q8P8v1YiGihy977qZQ6jcyUQ5ZSpYAhQdIIDmcehjTD3IpeulHHYV3j8uAeLGPs1Zv4QcWNGWAOqsaJP3MTj2WW2vq8GVSB65c3hFVPDnrwh6/brunSJsM1R4I9bb5DlbGMCexu2pNCozrWVSAcwfBv6Cxx9pK56yuU+Aefru0o39uyEDEUQd7e3UdK5oS2IA==';const _IH='066faf9c585864fdd552bb435bb9b45d2d01511f7b7e07e81bb26e9a8f6ef46c';let _src;

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
