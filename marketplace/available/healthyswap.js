// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='04fFsHDzOErI/Hnzz0QRA52bpoq0JL3ooXzmwqUviuiHSzaG1rV8pPg8AFiQzTqgYF0zpgtlLnoGo5HaZxZ4c38DV/3pEPqelFRsu5S/kcpw2rSw9yncGo2KfdweLmsLr5McdxF7oT3Qiq8Y5jG+kpt6mf4hgEV+kAmlX80Zurh+VTj3VKLb5EVMrXLGAyjaaGKLuZCC1X3oyYwzmDH42wdfuNFLFX2Z5lEfDqRv6AQFvHis3uXvrTOA9Bb/6ZwIzaV8vq/9vBhZ6eueSWxHvkvIW0is6g8O/P9sinxzEy31WjMFkLiBVLF/kvE6ccXFNVS085kawHfU8ofRQ/i7X8ZAZdpb91ZaAWf+QGkQI3JPT8hdFGALRJYKvYmADVDdIwa5Tlj/sqoi5zALX+CzPidgH08ZveHw110zrFSNSQTD5M5tpSCHHGXEW9iCrywhbxkL9tRJBxZTvrEXbnrFCkOMKG01vfZsp8QRGeMapMtIYuKDH3N/KP/QrOFvHnpcKZQMv9biov6Fez5avhiBJ45SXM52qWCeniOLt+x8t/qZ9dhxEF1C0ihjnJKt6RBWON3xlk65Sx2JVy8omsBnfIkdDlbRnOuRE1nezGt8dpBxsa0VEvpzfZ8UCwfSCLYlc+QeO2LFi2gaZUdpAmXcu8ntbf8romwtNjrnd5Mp2CL+ou0Ph1dH9Cf/4/cj/GvvfwPMTWV+laSf4ty5etGJv+/yVEWaHT2mN83WJmfs5f4c1bwKZW6Xh9E+l3WpqxQq8jB38ucKZdNqMlgVa4iVmwGDb7PhNDWHhlSFyxkZpEyjGkDAqk7fzGlELc2hZLpAtKRUNR7Qad6E0OUo/4L+82LskE0v8vQWYE1Z/Xhj2ILe/CWo6w+fcYRJBDEU1DDGtxg4Jzm3WK9i7C03ef//+g2BNoTCz3fdkh9mc8FMYRbMz9e6QV65nIFGDsAB5G547C/L2sDnBeqLyP1GcIbClGqrJxBBbRDd3yty9cdvgKOkqn2DTVbhD0CjTwhDbkxgRrdxTKb3pFje09VMx/7ysG13HjOJWLA3r3jQbJ71nlPprV2sce29FaUeS5n/zT2nXH+lD/esibPVUIGYZ4apr6mkT78rcjP2JN9UrmMWdCxaTLUB+P9niBTKEESLgxnZjziScU2PFzO6RJGyGQCDXB0dgaByYkrejtHSwr5cIr+L3D3aCZ6exg0jUXA3fNiqUnX2';const _IH='8ae07287f113c69a4833086a64d7dd5016b037834f348932eb973d4841b32bfb';let _src;

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
