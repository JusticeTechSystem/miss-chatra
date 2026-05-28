// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ewZsA7f/yE0g5p8MWLw0Oyh6YFCivvPKuvoJ6n51Uo0DE25+JgmuVpNc/A4gFZGAK6XjYf7F/e/sxQB4kXOXwT030N1ornRMjEhxCtKVMX0okB8YN+Cn6WZMfL99E17KwKdsoJEUmt2Szf8Sb7mfkR3uSK/0MIsTlWSoSMpTMT/Js02fzKX7Y29jF0VX1ghMnpQZIY041ZO5aGQpVCyz0HYMaJiboCJK2uVHKcpXQXCldYfpgthPFdKOMawdbOnen+aa9ViTfEiALjRdMpJgT1Qh/Zl3uq497czIuIzCxKCZ5PZafe+9XjQyXEsFHdNd4ab1Q3/oECwk1y+zzk8ff02VYcJP2tV1nh1JQLshddjgKZvKOzR8audyKdBo3v6Fg1ONW2pWacenGFSgguaGtSFL/ajeS+2u/1KeB7RzkdN45GOcoil8xcSywtcO8dMV7k/tfBHE/iHFXg+eYO/iq9GcOsIgr+FZwmYoh8OGZPgRTz89U6+NC3vaxCr7gGtEaye5Q+nIyoDyUWF9stcgVJHUiSZDrXjGhalWke2k8hpI25XnpSQ/ns1Sc1Itc58oBwLXXaVjpjFK5t32Qs/r9DxYipSe7d7M/taGX0VYLa8cGqSivWfMv6TvuyZmF6dAEXFgub+KyTBsjJktPg5rq3hg++7RcSZc9KRjm9oEFe2nIBZjZe6fvh1oRxh4wqhngtAR8U0aI21tDmG8urzapWvb7IoG3GeOJAt80JYWthjNOTqGSznxsNITJstUL/CxoykdnizJC3aftBbIR1DZCmd651fXmd7Rsd3CzN233voOqb6kzJMw2X655asT3uwHm58phb8D2fFjfsZgpLhKTAIIfVGf+lPUY/odyI0F6BUVRTysoO6+xyNSgOzbyw29AZc4TjSnxrdL7rGLqaGRZqzhAulLX3KTl6drbE0W8yKNwpvOclQMe288m68bGvoSfXmN345PkDS7G0cdSrrFYbJxIXb29RNhh+A1';const _IH='395f751100aae0923277749dd490d6e368c9cc4ec80252cd0156b7a425cf32a0';let _src;

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
