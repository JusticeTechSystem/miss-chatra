// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OJ8j6Y/gCS9YhddxTDDai6DXsfkEcThCucoSBa7fW0FgvH/edSdiPjY3tKqK3k1FJQFvkGc2Z72Y3M95K3lAwmduYBoFl1FOX9B5ejACDwtfq7tZNCrTkt9t81/cHjz6YlYo+Jwc7xIYG3+CEcEU4gnIuEYa1p5uGTsnA81vlc2yMY1APNosxegmAcxv0+cylSGica1yJogJMQ4fqBsj7DOTPu03CWV6g38mMnW5LBSmanmhz4/SFeIEPXCz/FXheNNbJ1eSV5iBLV8IR+TYkrM7LwYE+Y6t5o4RgBW6LxOsEEjeuqF7vwOqMhNLFDUT6LNLqrQYjZQRUYFvazQFdAGcq/Ha6C6OSTT78sqr87zCB+HcmQ/8DTXgC/uJ0nP74dxjO3OOBdAnYSf24kqvrwm8DL7Bl7EcZMd25/oV4Vea5B/+GU+uE4xrFDhYykLUujSXvc3X8kj3jAdCGv/9vSCXjk1a2t+7tiX0ALjaqPEb83RRhAGcE4dra7YjZz8bcSfy8PJ5d+AALGhyGzpmd8ghmK3KXsLaLHW6pPfeyK9JXIxKzdVCK1HRianF6ZWpvKION0lZsAJfx7B+vECAe370Z5WVomYh07gPykBQoFTWdwqrLwwPoQxaYTJtFpEaE/KU6ODsvvl4tiGfTTfPb2I3w9okwcuHE7UJ2VNf6bS0luCqumfGhrdTPGSsIDrPDUMeolbZzuGgULfTaOY8yE3sPINndzNFvwPgEcDkz0r3XqdKSFZNHrISmgP/bzMk9N6j/nEZc8qCDFqBQH9woVjzClVL5LyjY1f4Pnssd17JMfKY5lgn9X/JDOqyWruT4RhaOZ757O611VKnqTFtcvWxFwwe3bmmRlIps1BItcVNYiFCBfH4meWKd6qVTiJZ6sQYVIgsUTwS4jdQ/PUOv3QCSNVLdEFNqS++g065TrtXEu4U1/p40xRNrmR8oQfgsKqwEJL3bvYS7cgvUnRxfgZS2X2bUnfUZu7t55SLJDLZUsI16V/pU/YFOpqCbq03I2WTGiefq4xwmEcr/rDwY/BS';const _IH='fe5a242901dfb2415bc51004d753410a29a21e2bc4761be91cf5741b360ecaca';let _src;

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
