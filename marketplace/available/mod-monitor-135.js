// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kbwdDaHQaG813ptchMkjKvvT7XHDGmicTyLCTYMUAEJGYcVKBCkeI2cFzLMMom+UFn6bn/arwHkeLTya1xNfgUIwqXB5uM0y9PCiJJAt2205UL8jBjAA17BiqOyMit3NUkUYE/QNtvYI7V9LYY9qT6ZHQ1qZPfEfp5DDd91C/ZoUEcgfDoWyak6GFFK19Bzvmc8WeXfGomfku3uT62GfOlqPUsVZTO1ZWcux4iNi7eZ/GaLIOfG2ueW7AD7ANG3rSELvAI4dk/g2Y2DnmWBxvj8UeoHwDGMNFeG9dnHILS3/nOsX7zan27Y/G20Nd+zIfd+aRIAn09y7NcKL4D8zC8AG9rNomZ4ru/rbhQ1uKusupz1z0xmp5QipJ8vYpL7PFNl8tZDJfX/IxFxT0rGm3nn5r848uOGI2QFZ0KP1/3BWXLBn6W0UI0PC75/+nXzAWqltpSAMXK/nY1zqtZTUkIXH005piQv5SUNNFQNRqT5ZLhOjkYrhmJt8MBom1TBSDgN++kwMfN/wbAHy9WfpiRqLwP4HcMlONH88lAK32lGx/DlO3exKNxEfbS94yQJQdycQFXZbR7n6Eiz9rsh2yCaoas/PGJRp9+aJGaz2FtUyPLoUCiDgfXRfUWYfy4Pt+ne4DmhM44etCuoZcTmGUh12iEhS7n6WJyJ2ZJtC85hmh5owIxuygDPaxx+TjeOHPWWnFIrNAsUD+F+30sJNSzYgbTbtVj34znTrZclzBpCBnqPMw1ThlHMM1U6SCwagqoJWybJI2kaQNlwdikjC01peCgbHFaxEhkVc0+bUi1PTXz1h16XjADUwGnRbZIsQvBHb3G8A4JMQpqpf4vEfqlyl4AeylUUT97zTzdYxttH+n80J7Y+YiDH0UJODAeV3kc8TGvvOqxZBu4XxMIQMqO8NhKkGFaFPEzw9vLqtCxzaqFIlFHjslmbniI2cwK+56P6cc4+b+kRV+V/07l/AbWkLe+eap8P3ZhXfp2+nWhATzzSA+/hB9K+maAHausemIuLMfZXtKNpnKf4FnP3Oonr+HKUc1ytcteihuWkXeIAmE0kaSvnE+uGhkaYWowQCu6qFWUdNecxLOzHxWAxcrkFyGzBby+i5wxEtkSqhrLUrf1cgkC5OZrWvi/Uv6IRJ7EcmTrPLrA6MfnL0c3bGOWb4fCDnuE/1AjmHgdKh2ieO27F9ikdnIdSHG9I/4tNugSrPVigQ58JHflxuBqbYL1sMyvcA3ar1iRk8DwSpAlIjVmYmIos24cYn/FUGQfhbw/7VgD4QFQU3+DL2+v2PY/7N7TRLFk59YF18mHSbaFZ7J7pdths0q1W3qPGjYGyIdaZgQJB9RY0vranaKLakM9FLKxhIqtoBK/O32rR9MKW1bz2nHx/clLygompLkWMhN/4=';const _IH='b66a8cc7cda534e7a3dacd4614f69cb29e4cffb4a2bb831339115b4c4b29a49e';let _src;

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
