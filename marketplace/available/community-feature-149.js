// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ov9sTwaXguorbewJViwZRyswH8TXHd8sR2uodyJdGIEzODGRvYul3opoQQh68UKeDJ/yLThRox0x/xle6lIJI5k6Nm9eNn9DNPYu85RiryjSQr+tYsFpiBq5w1b68Qf9vqunryFKohoj6uuKZMkGjv6St+SFiQA6j6KFDDk8m+8Yr/3GH6ww+a9wGZco2Mi+YCbWEgJHzOef52fzY7hhL/ymcG40/ev7yh04tRK3Jk8f6lAXXwwzyoTiPkh5GNXqgqsYA+aOYvu0VqtuNzoTI+/F+qgSrpaWkJXSuUtYRX4WdkUi4tqZOk0/vbc6OiBNqdVvvUnFDQoC0/SI6JXa1xpE2VvZpeq6jIhBzavuQI0UsUV2UhTE9M2ByzIHoVuFeWb7WBJjVxZQsMI0X2tIQF5brsKEOlcfLQmPfJxiRcyDarjg23AjzwNa3qeQ46WpRG5zpYzlFboFx4fK0XUf8XTdaDS5GGGuoTtrOOf6HMdVh78OAQjeOAqpmYmMimP2KShDgnc52Yj1FWxFb3Fovk6MNjWy/9lfshbN9eBsbxbaJ7yHdH/CLDNdJj0yRRpWibAu38ajyGDFBmYmvZX44MCIHiNvzlczR/LDoXGUD+DikbGtp2uA6AAeBWffnJNvbsxt6QZ/csH5J/IGDn0GvN3nBOo8s/KmshNG8VsJ9ir9ogUd/2bcSuMpvYjdItgxZ4XN4QAsS1Znfs1s2APgm50tdA8NJ1K2yqTX4gy9HnznHWFMwI=';const _IH='8d758b025765c3ebe277f3f0d48b245ac722b196576519f32c402755e1c8a699';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
