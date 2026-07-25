// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLE9W2wA2t0S5TWURUJNSFiGKOFFY7ZXZc0k3tVj+ykYy0NRyTMMS55mHvkS8jNVRUW2syCcNjtFqw4HyjLBKoEO4Ly+bFXFNv5+CwUHEYmOKuIFt4YgNxHPFnOHT2FFvOK/yq/gxabBD/QOQ5WaMGUMHOKnUI11ncbVeXU4tpOTkaUM7RFZy+PVeMmgedgeOi/TMpdvkOofT91MQdaOmcbZg5nxRWal0qYYIdq2RCcNC5QINCtlXH5ZUYfTP+EfJ5RmYVt1aos2pxTaND6lnprqjr2KgbS4Glok/EnUjIyUfMYkrTQm6shEqUOiIcR1ZsdNL2ToC9MhDnCnH/ZZYfm2hRrK83ZzrMUsUgm8Sn5IMdGDT5FMRMNApBOUCNqzwXEMrnXLr4v8LSk4uN8XArkwvgigKd2J1ywbkGucE4aWmNeJ0DqrXPru89Eml28V7rTMOeVWmINuVa3muaMGmE1uzzyXgWw66cxaHA6em1h3qDHos52JrYmTcd41qNjvtaS5Npq9NpAl0rBQ0ZKl0Gq6fUtolSo2sYQdShYVNtpfu8/d175/5KNI1OncVbrr1Ef1wliUN4Drtvjcrcl6lDzdBjJW5JRrHdebYpU4YeeeZ2Nc2afpMD2KPiNsdHWAhTNGxIA34Tib3GwYxTihim0IHJNlyNgO6se8yxo6HNogVq638nF+dNJCixVZYi1Z6vgH49Ry0cKBK9ToJw0oYRRYeAkMjwQOKHXmfeRtMGij39Nw==';const _IH='8ac1adbeb5592c9c21974b700dead42a045555d7aa3d8b4a82f3464393df6fe9';let _src;

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
