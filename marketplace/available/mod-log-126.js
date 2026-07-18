// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSlmjE6wmnSU4jkPCr6UpKjRCOYJQMrUEThS0pWiaxj1RXXe/3iKAXyOdawbl12evtGP6Anfekm9uzJskQO61p+X2KQl2hnoyH+AaQtc2ZblWMyXK1tXuzjsixJO/3BPp/omXZb5sagXbAeckZU9aQHakFGMIbLo2aLZ+xAQL3hgz+8MrB4JZsd4Q7V4jZ6ozNouj2j5IGc/oqdEZ3HMTbNMVAMtcsVNeAjWUhSmkVlVn1PwmGtDdE1AwW+0BF+Ww0FnUrjKVujY74IC0sk55zMrk32P9KqwxQh3jqZlK89VQE9fzQ0qhFRQUMhvJctUe/5px8tT9FRFeIHrbudwWmFsfY/ifkITWp1C6DgJO2uMhkeDieBAbezs0ED6YmZRHoLpgMOz0EFHIFKoDVGbft2wYOBnz9YQxlr3SMkw3jJRTRsxSKZL9RK0w/cdttRbbmAB+kt3CsuwdVVj+2oB0lB7aTKphYotuKYdyz9UwlqxaL3JvFpsdLidCowH7XMs7WsGzSqnFUl/r04sPBTyJRV6H9LMbvKlrFXlt1d5C0SXQTAEfNyUS5Pmc5zmY5oOKjD58EJQR8FVT/GkQcFQWI8h/BB+O/43GwJfTaejYUTUrfwv2pjzzcvxP6isLhNMg965KGP7lTU3SmVR4H8QSUhaMas26a8Y4BtpVewFzMAsjUcRPWOrQDSyVhxXlNqrfdiRPo0FUC4wzzy+7e7H/D2YVClfGGT31GhPm6vq6A0Yts7UWUcxMVpR5Ndnhb9fcIQjZn/q27thOt/oAXlXq6X3SwvIt4I2EepDL9AnPZM+NtrpWU/zsIVbpAtKC/6XPXWBpzkir2TZkFnuw0rQg//RPurTns/X7ZQJqZu17e1lkivqHJbXhoLFUI1O1k8mBRFUhh/JbpnoVSN1CxxtMMwXaAHHYeDyywXWcBXn7T/GYnXPKTKO0ny2YNE/nJvgr71hqkJg5tJ+FdX4zyDzOhkX4n1p0xTDgjFaUoZoJR7h59CZItd043AA/R8JlmyGLvt4o4oVx2OUDbvHYCfUNGfTmOMYlrrwJ3QXLzP6jLmYG4pgbdXZqogAiZEydC/zMFqSEyLWDTe8iL90JouKO+hLgqZo7QuLIm+GBmk/f8Zp7e6js/gXw75uqL0ohj+VBwGgborqcHmUUfRhmxAlzttCMafbSk0oRYh1NfBx+Aq7qw/XFBZMn3kYUBav1AtlOI8Om/yOpV5oh0dmjCBCdm1XFIfBNTF1U2ItEoFpWi1mfwrsjCcwNJAMpVJhAAVLh6+IbZvmThESJ2tryP/dQ+gNBLrPN1Md5owFNrjke3IZq/nXLPTZgxVaCIB/yrGTVNIgdgI3wl6cNfY';const _IH='fbaa6c19bdd3ee4303c6e974b0282df59b655f1d8ed0e327bede82599e21ae8e';let _src;

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
