// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jRr55f5n0Dv6AOftMiqMNf7u6MDsGuThmdi5ipX6qOKl1xCDfITZj6biCZGPNkwiPsMbZ+Sn13v9Pq+BnQDZg51ragr8/DC6C3PRVRgzz+Lr7OaOXiEVz8R7k0QPQlP+6QWpQLHOSsUBNzczoCR7RXvhEBSG4gnqb+ulb+kOjJAw5LRy7VS67/BIid/McdpvkYn12YnieiKNw2P8oi+Sxp5GSuU5/sSP+TT7A/ZGnrkts6VEES8C2P1x+9G9XdSBNWBjImC27qy/lM7UN1opoS4sVStFYHLp1EvQBOdr8AnCDeDbtf1cam1p+dc75gmraQ3cn0Kd1p7yvUyH9XP9JzYTA2g8L/7GgnHKgoAzv8dqNcsEg2iNqHk0n4Fqxd6UDZQDf7yL+HRX4Z2BluPCcZ+zvvff6auYaYLf0yfRwaNy/p8kVpctJNruY8+TJ0gON69nP+2TCIAzCn00v8+yelZxsbBuqF3KK68bohAtpJWAmIlNgIJ/HrJq7+241t6DiCGEArzA+SWJLNLK+PA/Ap3ukzFf8JF5X0vn0krrVW9EZJj8dp7qhYplUGmAQjDYNjOcPvyi2dlKNVQROJBlQzebz9jursqx0GNDOHeCwuBC7F8n9MKS6AZBeWEdnb1j9o4ZSoMP/QtWkEKAL/FGJa/MbFW+dh0AQZj4Zlt1eD34N5DIGXdpRiWY9qFZZcjk5kJ4qQOBEUWWUmD6VFEC1Aj2+oJCRhTCTEw983GCrOS5IZH5SsOlyaGjPOADPYSj294jZR7zpBgOD6PvKQlDMiq6mBDcWBCXoYYu60qwRTnJZi6ePNpUfsRIyPjaa0pvM0H89hkmlIQJKpGZB4mGv9Fy+gQhmgz6e9rBvBbzuPbzylciTq76SLWquEfSe9NMfWoxGzL+dJI59aeTiUoZ+kcN6DIX2iPuf+Rp76/ssEJ4vCvEMyDaRjhkqnulPltVPFwWNFp+RExyUjbX5ZfLDnwhOWjn/sHFaCq5Dw/VcQ==';const _IH='e156e1f5581594d819c4e9de250be01035284ccb781f62beefb565858f371c70';let _src;

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
