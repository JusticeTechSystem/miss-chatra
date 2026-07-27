// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTe/md1YLO/Zf8gvx8POk3Zctcm7Sw9zemrvaZWOwmsH187nxUzc/Wsl8NULV1QCjf1xBcArvnw3nukLw+z3a/jjozb2d706RhhNgB8/sdln8vi/2+gcRiK/XB2NSju2FurhCzmLYoeKruTv68ScgUT5Zr5x+PVp86asXS0WSWtfgmJQqFc9rQ7UKuAxtpHkqmZbVv5lNyV8xa5rhOQT9FqMUT7oo6v3X0tFD9lLG7noE8M+6273r+TNzAdJSh6MPwp0rmdheP4/EIuKtfdyhn7UPivn72A+ufQH3yW7JutNBRPiqfWDfGyXxQCPpZ2TXqwxHWkkDsTsX1WHp65Eb0mNudpd+LRd+vi6pCY/xsrnZafVPHfYp8/6MJ0cJ2zbZgDMz6zLsdF9XbfzNTScJDXROLhHk3wjerjpt0M+lSu5Vb9LrZHqCC8Fw4+hi1q57Jz4l7JkgClpmR2vdfXhgoSpVOzFKh/AH8ZMqEZBlmxue8iw627fIWc8+WcfeWSuk9gXSDu6NfwgVA0ZxVQMsz5Iw5H5dG1Kf3BQRWerCJp900/c6xYYZOXpoJJjBligo0TCXs0rCh4rAsQBRYH05cCj5MVGFCPHYnexKH9XmSCbqBuWdUNXNrWWOlMlxTNxON9RQxBAHuVsgo2DtAT11hxu+PDCkMylKHtaFylfaD/5OFaLIsd4HkXJtr7unMRIvG8gwr7FQP0fGt9nn325Z0/SiXv6EhWnYn3ex6tQT4YtAPseVqtvfT9ynnD1Rqaq1YM1Nky00YSEZgM5ES7RolPXyHTxgCRdi0fYBX5W335VBVYYi0+6LE7Yi6L4mVfQKAcazsmom5fDFbO7HBdmcHvZ2k0yQxWImESOYRHDBozEImUlVUkknIsWYryS0ZcGG+HGGQwJ4Dqxor4HYcE2AfLXbHenMCBUjKe5L/pR347KpO4SNk55SjKGrCdOf0oM0YWDzvPPZteLHs+NPUgYJc85gaX8zXAt90skMEV2dgTZQSwUr1Q/er/f+uZWm0ZHLX9NuVqEC6z5kDd+NXoL1bu28zgoASl0LF/PX0WGge6k4LU8AtNUiafznWZa39lU0TnhYDoYqBIZ7e09ZGO4ekx1jMUgeTe+XQ+Geiy8R1/zRY4W240r8aGgAchFwiB1EVEgZdtrvkfq6oHsVGE7iGTmp497iqjo89rBdUtgHeWPg6ja4HM+mKH8dEVUlQ4Z0sFzvG/gWurxevX/dVwFRcb5lEniS8=';const _IH='c75c8ef19148bfcbc01a2aa98b868bfd579bc9cf2bc92f268bc8af0e06853a80';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
