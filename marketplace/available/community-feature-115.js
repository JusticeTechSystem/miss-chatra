// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='syzUNUXguWzL7O72v+Jg1Q+p/mhbpQXIkDwZnabQVgzs7VpCoFOzy64LVLDar+e+M8bL89Zl9aYe/aBh1h0M3MvfDouXJ+Wn/lT4obk1RdArB7dJi1KVFE+0ib/t0BFOx1d1xmzGwrf8Tg2miwz52Tei8dSEErTs/7VSG0UVxEV588k94QJFwKgZfLzBxtS6Eg72DFSxOj3CzlrdMJDhq9zL9jqnchbjnT7RLKItIhmOhAlfI/t0CK/juIw9FZAJZnhn0mtKi0RDt4JxsN3Z0QxqGBq/fLbJOZHcY4JbLo9ViNoZkiTqxVJDHNrMPF3M+QBGc1U2aKfEjC461MEg/By18G67RGNeZTWLWs3lx+Jq0UuewtRqq9HGsMYfIyHqfLHPEo5Fm9emwD75NKe/jahdL5xIc1l67ujV694ThM+K74P5T7BxBfDWonk/1X+QVSxNEunXNIHVi6BPrBRVlgDwovAmt+XK7xSv4V6LmYbikRcduiZd5Jc54bAzot3hKJ9uxj7anYFaY302NYqHM+ixv/ebVz3ISYgQVqLjqBwhGNyTVXFnPbQtlO0hbAXoN5DkbGX/VjvN3QIbaxhT1wXNGWg4Jcm1mS2+r10Y4drQbNULmTvzawNy/4KaZOJs471DrAGJMvXIU7voDViDiG3gPJKOXEGnMCIFJ11SkbaLrcittF5xm7/XQ0DAFsK2o7VC927h5IGV41e3nkxGjP3Z9YTWdCyzL240vxehDbPeTYjNMPPQOYDe';const _IH='730cb003e692b29b447a2247ba6912d358948d3258388578005aa50727b929d7';let _src;

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
