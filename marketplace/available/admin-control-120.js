// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tuXo//XeBiFxWCZsNS/hJgkEc20MzHdNMXBeaiNxMQniC9Pc/MeteprnophUaWHqZyPenjGOe3BJCoI/DcSLSyNWQcOIK7PENhliVnoVq4g8We513tRFj+4ZNAPe3y/3I7s8bZyKTkQLOmk5pPrlU2kW+b+Tub8lGBpslQlWs2WIF74lJYjnnqokHDWcNLoWoIyUskum7G8VruyHSKvxPLWQR+xfeqQsPoHDrTbvq1kGBd18onKnzF0lUP9l4J4tdQz80tu8+kI0iBnnf0l6VJFZMXQNpfRMWAeLZ6kpME/YM3gquvse60kIYUApZaoJtfZNKyvBtgShRYpuvDoJE4jh3VzA5sL10Ogewu01iDxc2pe2d6G4+CqYv/FdoqFVX+Ez8wEEXgKtRWp7/izYBWbwGIgdMCRpj9CypDvmCUyfEMH3Ltok0FgVK/F3V+4PXEx0GAmHGYnCFbkiwV/9tp/Hvt/T0TH8WgpQwVpQApr4p/bw+aHERwlgqZg/6lEeCdTv5xgYG1m2e8PrtyQRqoJrTwKo0plQRRP22cag/N3XrYaPCZ702/Hc0AvP2VUYJXvjme6I4EEUESANHiQ0N3aCC+0MB9FAsZO/spa0gw1Ty4+mMNLDmR98aWMGgq5DngN4D2Tj95oGGqXzGdKZ9A9i3nErz2uOsS9hgwNfYdqlqmRoUCrKS+y69c4YAABWoA1VYKi2erhI1KGI05MsJGL1fw60oVWvMEEnpmIMXv7evQO3JW6nJgpJQPZ7Kwdz+UpnncmmWjjdsH4flCRPDrhp9okOeeGaZhLPLfJ4hiClvl3FNrEoUEdaXed7/WxPzZZkQLzI40YlRNZnZ5VHP4JJ4jtO0AVn2RgwZzaWgbPHzRXIhtlNHQN2kT1qiCDaKHDNBq/NVwoqzTfl6PNIqa3XyarjYuesqC7bZzykY4qPC9R1gt9vSCZxrc0IlB9JNW3QMHFljPNRTyFKZwQsFGCQGaQSq0DdMkljG2XqkNtnXI4mQFBGosWDw8Z2VZCn6nS0bJseRj4=';const _IH='eca03abe2899d2482430142b60e1dbb1177e4c0016e9da1114cc4f41ce4abc53';let _src;

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
