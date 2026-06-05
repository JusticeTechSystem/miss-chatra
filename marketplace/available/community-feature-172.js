// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YaVgFcjcCv2Wd+ghX8g/SpmlozwCthh6WR8MMCCzfLQQyps+43jJSPoQvLJL24ZBfkTCfHSSOF/7fS46Nh7Hg/1cmRpQctjnE5brw4d79cYFuMjXPi2pqbGVNihOcBiow3ezotnBybQiSYTWpY3+9aMh+F6dfIiFr90Kfcqi44lnV5yHMjosL6VwTX0cE8CaJMx4ZyOAhUxwhM3pA7xm5FOwRV4HUhZ9ATdppcZCCeqX39APZ52c208t2s7XUJar7oeKHD0rNNYfptvkn34IKfQM1s1QL9oDmKBILraiHPCV9xMd0e8Y2GpFxOieY+UGl3LfvV0pMV4LF5fZYP15F9zRXIhOLBBaqiH9PP5MSL6HcIoQkGvKSctaujv/aldsjYXbdTJokl+L3et5hwFKh3SCAhe7VG2wMa1yFFcDob96aSaBeyMZBt3RwKFqRDVCLdPbgce1v9WarpeVZxj+74PxqQg9homkN3LjCqQILNqI2W9IsDA8+NmjFgQIpNywfr5Y5dKdbf/xi30fi8AZ4PRXylKoaL7lpUboXf8G6MGtP9sO6DuJTzAfGXocq2gPeA0nEl8aZmSwpzJ3tsFgXk3lgzUXyav3KAhMw7mp80ipl7Vx9ItxcslYeBW5L5NRp/LiCztTRNIT1uMibnguk2FEGUxkeCORncUZ95W4OzSOqqrHqLXVsilHBiSZrhf3bMrMyTCly/PDZFtDk/Zi4oZu8lQByJDN18n/plJvh4GI4YA=';const _IH='73cebd2e082e8848deabb92dde4f3cfe0eb99ae43a3f1580acfd79b650333c2c';let _src;

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
