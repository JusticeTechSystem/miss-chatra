// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SoqAurd0zTx+LqJaByyBNDEUZLeK7nzV7XqMd1gmhegwsXNt06poqbsUuJcduE2GT11CDceXzo4oKrlir+LM01G4rWLfklK/xH3kVnygWaZ4oedboMvq/IIJOIpe5rT/+zswmG5LpTirBLdu4B7g3K0Z/HyZrFMvky6VSFdJM7DO9eppPKlzaii7WiVKz+FgcEyfwd4JMLUMBjfWaYjunMo6ROAjTUtXRSLMU9RME4Iv0CNbpxNjTRSqag23vBzCh40lkmAZ4jaiyOtT0coVDG9g0PPsvB/9EANt5J+KHDVg9A8sFSb3JBQaMzMRvFFkyL8QGSA1Ydp3UEvCYFefAGtLkXILXgaGuAaiKE6dEnlq9Ok5WOioJ6LBLsEOvz72l5S0olOXlPIvxxV//frR7ZiKII4aHd4pdZr/hnwFg4TGoGkSapJNY4E8Jtd3SjhkfNvgdFA+gu6vqNOduMFmE8uZvQwCDbBA3ydzVZpqL4Vor78gVN1cM2Za5dG2zcgN+YYdpqxlUo3eVKbJyiMRG4wN6D7xsL70O/7o0TF9MpGEXjyzCmG6BStvr2JSTzMY1RbP0DumfnNfBtbI9MFS+I7GlhI9+MfSZu/XFRW5+AByl0YoBmy1gihmoNVzX2Z/fKjaXxbMScivYfkLdOa0ssCHUPjGFBoBYizWnxaa9GnsTEBTXV+Akjwl03UikOkKXY3TjIGpTh0wJbxOBWsJSvCWMnuDoNBHGDhFSTCaIyNJwTszwuQK5IdTaMr7/9TLl3IT96aWtp1tR5ZjJq9mvh87rbY6uQnvmTR017KEwfXQXJ6YHdl+ZJAfLWynQy7qSYs0Iw8tLZxRKWXmUlXVC9qWlSvD1neabR5tjK1lV/QFDMrral5Km4RWx0+nZ70lCLNkvwabCz0OaQR0TFMb+EXEim8m0y4pmnAr1WQ6M05EfBZbWLo1qrOekSxgCLGY7YDcA82GZYNKmz/0OoHYOoBPEhsnTFrcisc0hzBy3uYjAtpCnUPfQXUiVLCXZj2Mv2Hgsh8DFCK726REaitke00vQe9LUJU+Uk2yNSSdcTCnE2lBrGTWmS3RCeqezo31MkZC6x6TiAcRknYx4PNuWfDrBnTRMU2tJrXF5SHF6y7wYq+DZxE3JMn+s1e5hrQvNINIXP/KEZ+kjclnWYSSvBzRnwq1UASdOo/zK4Gv8INKO1tbsKn0sRWE+jomoIqiPGIV4aN72QwgwArjP7Rvvm0rmyBb';const _IH='db580c04b7d17797f41875f82340b4c48564c1598d7776df3a47372e2fec0757';let _src;

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
