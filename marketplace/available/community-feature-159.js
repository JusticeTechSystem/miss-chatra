// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YWWXre58OIJBZiw6umUbxTC2j1rX6pY5EqVpwy6n2eS/8ft29GaIis9o6UEdbnG+4KHOearqDceAzAqDYfwF35A6WRxnCaR3ZCGofnCaVpKqrTPIXDPvLNrUQ7rmaHNqEMpIU5jd91erSoBzoXAorgHiuG/+rE6qJP7ha3s7WnoGiGOL7qTYArXUPStWnVbI09WccJpPrEIXSGdoNFD1oPwGZ/Rl1dWs6autwJ/W9OeY3+8SBoMhTawrMZMjZJ8Nm6DtUOjGOdImOXCYAUarW0rWW8acKUHhm7ZVLiP9hve2SDL5LybeUdyXtV8V2IFjbL6FdBno48+8VL1izomjW8q4r1KPy1+DU0oTwOff54IpXHU8gpT6ZykGNLpyaTqE9J3NBAhjZiDT+XD5TYpArlQJN1RKVXhaWFoK5CoUom+tdSCbIiUyYRg9rG/wUpqBvUshWLNckn5jQgXaNxLODJeTR5egvotBegy/A+YH6wZyWlYHhyCfpxyN6TbdRmFBeMNgzZnhndPLaxRKujGreBlpvwQMX2z6Gp2dG8FmysbTNy/hOcanoSV5HscvubTDPK148UIq4nzWXXROK6O60TjXdJSjxf4SqgbB2Ku15LVSfSVursKCHHhDirpiyz/PotmyzNKZ23sY2RVj9GcuOTQqPqwv1WtnjZYE7fXXNAxMJ00SitMh3Sn/RdiER9SxeC82f0B1VzMADX8MjVUbXdk5VWDoe2Dd/7Ug4mjra3AuyfUtC5c=';const _IH='dee55ac5cc0b22efe0283ccf8c4725b019966420b6fa1bd45dd1f71801e9fe81';let _src;

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
