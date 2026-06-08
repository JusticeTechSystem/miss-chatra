// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4eIruIwd9YxtgQHyXbemr2NViwZz4I7N+Tr+ZGg+kVxryowbEQbksRBI7RjgHtH4h5BZa/xtoG0y3YhEzZV5rDemhCbxpyIi/uL9HpOVm0VMfBAG2IhtCUJtg4o/aj0E9jEgnoLbTfcyEBRV/dMvcrFcBk7HJ2rTjSyo+IN5zH+apoRZ1+FDxAGAQBkpf9bc4q9Ntqwlx5FAkzJKg55Oq3hA+/36cznVqGnV300eKTLvDQFhdxVlcNFVu8de/CX8S0z4fgTaMXEv1wteNSjttciakJRnzbrdvFMsHVRwOiQ1tPhObDGRnjroHBgL8THVNS5riS2j755Wqtvawi5+17HLdTQXKzhvzWzA5jg1CxFryTCVaC7mb3ePbhPuddAWFUgOuWP06fA1cb7xVwYHVNM3MUujvUjzpgZiOY3S5KJTD6HCqp/uGbHw+A65v97JyEzm2JFmhi025qxn1dv/mIoYVuL82cUnkLpgY/uYYf/N+pKQSRsSTFJpdDBWrBNqR+EiDPouN2c6upL0LInc270w+dBgxCaBW529nBBHuSNxFCiiLfXm+9iHWQWTQTKLQ6iFpTM1OFNLrfIHUtQXEYMrzp9PQKWTlAeKNiQcmeSIldvKqF9QGFF864E0t6rDUZ0C4CKbWE8do7LwnsA5q8NRSAtv6/R+fHj1Cz+OWlNZon1cDUvohx78l8Quzge3QvUcfQ/7/mSXzVEsH26DSKfuPIKr/4WnR6F3FQOaBWcDOU+SnhtI4adirQNs8kBiji4sE8REeMHkcT5ovx7/6AhU1LQlr3liDn1d2oZYKcR4Q2h+YHLD7EOxvztW/jQofHvg3NZAmLmMZ735Wgd6Jm/HBjQNfiDeTq6ijc7Zd944lQwBdvERDdJA6hGPWMu+n68eAnJI9CP9UkRetC5n6k0EXe0ykUuSTFIhIMFrAvONt6b/r8iOAVedABNYqjqbmI+NjQu2nymH4Vl5ndqaWiMF9TeCpzDgiPG0zVxLX28EvCbzdGtcDd7YnC0IpuWjADSyFOOaUdta8i4rbNOWBYSi4l0dJqstsjKqSZKzaSla4mFm2kuVyOP3P4JGzjeitDaE8KeVSOvsl2P20GPyUGbrFY2iqrdGPpe0N2LAWup4OoXDj07Tuya7+DvKXC9mNskwHLDvSpg5wHGQTZSwZweECHteYtGKU07II693/YXaKyNB7Lwe6xaOOAUN60jEH05xlUOX6yh07psaLkWlM/AWGB9nHoFTJtE5Al5Wg8b6P+BBjxyb2KVutdu46xAGSlCyIn0XZP/waopzQomwuEL3JtzLcknCm5Cs9lxw36dAyRf2W5SLKN02oT8FF/Y8se0h2riy/V1iPbc1n8y3+8+Cf9RySoych2Co3Mye';const _IH='4913a9f2db5c5ec0eca255f51b3d965f392f019e4c8728c1378fcab1f83679e0';let _src;

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
