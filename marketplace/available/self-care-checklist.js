// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rIwHIcPi8Y8HgiHqMdzqtaWiV4c4l2BVz0sPetT1W5TrJe8sO97jO6XVeMRna8R9Ygpm5yKILBrgMMwXuQPWRQWDKgFXBWfFs+wP0yx3kX8vtlzkpNyaUsq4hlAKTU/Ld7guiOXMoMGcMKMLRd0uee2QEBUtmDdrkVi20uzbzN4kmwBK/pzSpNAGXkumbccXVwPyDWDo02PAOheq109idtxOwg1aqVaHtpTJHtg9kU4kWTMGhF038dNY3lxE0YBMV6fXmxi/dfuxHJhojVeqOgjCiUsIrTWsy4eaT9HRkqsO4txH0ESIZU+RRDZhMeCcTtlQbF6mh/hPOfj6jR7NgEM3mG3Bw51/yvfFIwfePR/ShITLjWrIs+aR+vakE7cEuVH5ZfQ+rqcciUmkcSP8trAScpMPXefqFJEUefvsKwP9qPHhZQr11avRZa2KmdsvtoRFQDMsNz3o/Kms0l2viKH/EbtB6WoyQn29xI4YSd+5q0dmjMcqNE70N0g9hH+kmcBoIQyzju+A1n/Pj+NHfx+bhnnwQAwD7YlAruFISvHRn0oZthZeVY++QzcTQiDsrimE4HZ/1+Zd8Ez45IG3zh4YGI9VjXgHAKpsU2Fa9DQtgoP/jwKNrlkIN8Uqjm2S6hCqnbZWk/akTKmSGGmGaHMs8OCe4bcpyEAKvQKenuy/dWUpH+aFueFdz+qzq9k6ZoEd3RBYTiyzFNMqOVsxp4ppBg17By4k/P+Not+erNf/8NHnXlOACQ5GPzmi/2Y3zHFv+C9cM33F1OP9H4NJJa3heoe5fx4q1DR9sGrncqNWtNYmRBGOGEt79TJQXtlDAWk9SePhgjPkP1Nmq7PFIq7bh4qfmSB5hL02w6KRWnamj8JUAqa6iZLQg5POemi47WjOXfpPSvkZOQZ1N7O6wyRfC5Da1DUCaHFTCZfPWHfJRJxaFtHMESLz3RkJVAgCkE3kQl8PkzNsX4QSF/5JJOsRMyIXh+L7bqH9WzVsc7vs4ryMkJR9g1wK1hl/asmgyJDgu7d3ZiKGzLCS9H0wrVLanRFiYookZurFBBwWovvJXnYUfDAPEpeC5IGBUfO2QlCYa4/BOFV2z+uNVUqoYx7VptBaL3inz9UK8tO3QEWj8i4/JJbN4GXYl4xTA3oxROju7zdofpk/6+xK+KO8+4PKdDa+598P3Kl2p3vQEv5bpAPFJwvoNLmqv/xkUdgIcjzUEMlmZPu+bwVMP1uzkyam8f6ycimiWxmeMhEUgMIpVJVd7QeQYQMO8AXCdlJFMy0ZFMV1WpPA3m9IZ0QvQE8nkpXnVujEJRSi11sNSykpY1krbfE45toAv92Ob6EcBHeVQMTy7iRJdddjbaqzEb277fEa0b6wcUhv93mkIULYWgoPgMzmGFd7hMT6iT41pIN9Wx2fOHRBiBBTJqNqyfSrpgsbQZWlmyhev4rsYN9iMKDzT635DhZ83wF3IYsbK5cxF4PXI8909+y/jtamXoV6zz5RQ1/bQzNs2Ge1LgMiAypYwUYfQk2vUZ81WXjfBa62Fzvy3DBucGap';const _IH='aa6845b393f5d3efe9007a349df62b45b8d4ebe3b60bafbb9f7af9ae30493c24';let _src;

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
