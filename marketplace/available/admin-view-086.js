// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dSJlGH05LvBpC3DxgnIev6EHtuTCL/EyvCJFRvGRgCcdvTlRtLUIX3x5S2C+lRV11MSawkmNThmnLViRfwR4JNn2AWy3sZWuQNHKGr2PUr7T3KtdBLllbPbMASWXP1ZjwVDSEHcU5zwxwKlVjQcU7VgaV3LnwHstCbPPv7zKORi6bFp9uhxpvPRkVhvLUH3BdwQUw/+ooCd28BHiiRKGT+dSvyqigAsjXHnEmCIRW2EejoZhJFoP5oXm4VXVtbFikL/D1zNVKcKFuRsY25R+nskhsq6YRGW1VC6vWWSKg9uQ54Aet2Lx5SL9roNSZOIgT2JqKgC81LCGGgqDhT7pRoUH3IChlTFwkU3b6r1bsVkRqbzoBx01spttG6LYVcfzZ6VxzaWyLxMGJnG4fAHf56xhlE6IX1048YACqZL7M7FUokuVABk/fVvW+B2m6I0qvmcnh8D/2TBFhVuglyhB3dS+3FCxX62R8xRBk0v7Ym6D3CcJOJVjgXJVD3sUL6RW9JP6flQM89f5w/PiK5mo6Hou9AXMZIjBV+MiDt7emjeY0kLcMsdsSKS7Z6kXwp/Z8XOv5XYmArHuuWRAVO/MPdoPiDTvgadr8ng8A1BmenGhPUeQPo5xGpwTvfoAyDiJmECMvlWvafXGuCiFacqVmc5gaqoXx7I9lDWTPEdsV1GvvnuRact5HQ4CBNHDlL513l0IwDouNNJo8hmKHnL9lIjNTupHua5wZ81WMZqMfZqTWZPdpMMRNik+GoTaT8h4o/o+rju6NTlJ9NtQ8ooan3u4uAki+/tLjpoyOb5Y+tSz6sKzL2TtSig4kI4xBjAauUq5a0RaI3V8ANwMudBlNz8LYsHJdJbrXpDeDEQfchoYpA+TM2L/SIbVg8dOJzG7kCNW+omvzDFRgydsIJxPkghk0OwOAea/c639qVv8ZQo6vta23peQu1iz7QT+7iXwaSdon5T20pwyHSGpFhuv+3rpL7UOi3PTej2w31Zaxw==';const _IH='0abd327b2d7f7c82411b3bfd87a4de976b826e416f21fe676498dac37f1c09c1';let _src;

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
