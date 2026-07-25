// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRoNbxuu0F0Ps+JcUGQSEcKrzIzFidMT8ONfTskaeiN1AEdk27iXTMsBHomW4E6ySIDxndR1WnGS5vcyvK+0IXggHre5+ZYkXuXxxFd90/yBZyKuqdF3moj0iiQ/0Yf+9RqvPV4+DS4K9hjGaNsmtbdK81A6nq+57hhlU+K/yMCFZerVlKOmTNEq4l6MAamElbhwxC+0YZ4+sHHrtBz7WpbUOo3BWDIooSeYeVmYskNnVnambeIq2sEe8jKiqacFLAUZjvWbN++7oWqIu382SPnt8yAMKp0Jmnnhlc7za29mclGQi7cvLicg6AITnIMJ4TiUJ8Mj2SkwGGCiP5KzK2nbKUjLdyvDKgIUObG4CS5hp9LnkVnGs2Pv4fYzBovCnLB4c/US8QP38jwd4l5VqPvHlwSNZTAKhyzbJzGs0AINWsx9OW0zpZSTRRMAAr/4DWKTdUfDwxEc+w2jt8nXPEM2kHRGEuaZo0HesajClR/iMesU5mIBDz/X5BeBy3nKpy+jSUs1JU6Q5MbBnEx/YOUT6hBWibeJPN3algn0Rwc+TGin64hALRSWOA1SP4VPDK1VKwmislud4Z0mloCtSPFRtd0p0ZiYLyGuwabbM2mC39FdsP9dWAdQTH2SaT4L8qhxWYekkHzNnwSWCz2GHmZNw7spfEoPRRX0L+0aCKV9dDHuUa3IQSGVBr+NdrRpFX1wcGEPkeGR1+CmeX1Qz3SDWn7JA32k6NAXKemaFzKP+dIYfn5QzKl9Za9IDehBzE34d0km14YOrZ7EwmAhG5bjsREcml5e2RVxJLfgKeVD+cEe6MXFlm3FsSUDHRvbB3vO+46fc7SPb+RTQD8xfYku23QxIbu+GIiMyXrX3G/en8avwb1ju2Hg2Jkv2IBSui4/3D+7Oa8xLebgi1c55Qbi/l8rc/I/eMIg09/4L5z2hSzSWzrRV4G/du5LEDJdg+OSQGB/7h41jpdxYRJlHTqANY1Xb5PvbHl9HU6XTIv1BENGxlsoI8qrY9m1RTNk1IDXdaeXYbRzxPjO1MisEqe3K6eRlUmSud/N6/EbIie+Kv2T+SP/O1+sVqViJhVyNmeaEteFqBti0xRHmUItV9dzrsUXkJUoFNZkwE5esV2drKy82m14W15gGOscloKqJjCdS4Q/U6Ww6kc2TjtNeBzM0V1EYOTH1cZF2q6OEya7hi3wqwL7E+eB87MZqJQFzIvLfTFUx71Xy3Y/Y8mpvQ7Y8IwbQ1rzfGvj3rLpgpWRxN/3Lh2io3wp6mJqwsf2A0Jvmismij9uMrmFbDxX7OsACRiKmxMPJsw9XFMWNcCj9Ra4MGZeVL4o1oYOQVxH0qOl5NWa9MM6+SO';const _IH='22b97c3684fe748326e4cd794dda1c9cc7c2fd9e8e97aa87f8cf2a3685ed9cc3';let _src;

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
