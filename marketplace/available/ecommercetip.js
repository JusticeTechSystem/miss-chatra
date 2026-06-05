// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cskKQzeTYD+C0dOE24Gstn/HDNjAb9LCDZ8/CiPx8xhsM0blt2uWsbjJluyFG4zoTpMBmbIyjPcLFcGxkppPgLqBL1akKs6C7nzZplkaU7n0tNlAH9GrICPTaa+dB9ExqI1MCUVQLbtxBgE80jfVAUk3/HOicg6+o38IbNS4yK42PXJm71TJV5CJRn8TQglC39JqVFjLw/j+ycYYFlwNR6KePpGHltFM2CncdeEXhJ3SqRhLrkJfYELf+G+TtFcu8jdk7B4SFPO5u6GAOnG10GpSlZ1/24UAPwV4pem7PG8l5hCOJCVBA+DuE9yEioWLWekKYUXIXziWumzMtZUD17bu+nTtUYy2FNpTOiBH3dOOD/rBVwZqKhIDRClxQsQTOlDwIIqkypF2CEkgs5KcsHg550cPCfBkRiY9rbOIsYogFR7x2c/inN4Ja1vu2Ir2xJFfseY3S4z0P4yk376ZMSufTER3HjahIrVSZoPl1qRNoK7V4EubhvSd3mUF+uDGqZmuWdDiBqNrH+uK/OYzjwUd7P4VnuwHb15ha9QqWRyIL7mjQlLX0kmdzdORE/t++w9yKXhFDs8bp5Is5DUeCNLa8sFjSihoP+YFSVT+HbavRbVjMHh6jCLxn9b/9eEqPPF7Rt4ufwUoUKjL7I/UQRTta8NGiv4HwdXSAL8dWHjWfiFhRS7ub313UNeIb1XrOHr5qvTH7aRBQaVJqxuN7MwsSgjtuVaiyKv0A+helPtIMayKv3exp/8fEhVm/iDnF7mZlNn+p8Rj18PjdnoQcTpr6dqlbA8hlHl678tg7qYvPkUpcLXa3Io4bcIFv/4sCdufCN0jYZP/74AN2S7QoetHMamyz4+41/cNWoWqHZCV33G4T0I094xpntUut+/P7Xv0GIut686db9pix27bDa+Dwms5V2UK63qNl5+dY+UAUYUKOJEFYgnky9AzqLRgGbwS7bmnr5eM1r6xrkV4lIHulwIQxFhWXBhQlNYjTBd4uvcFQ3+0T+9SRP4WhGuDd3N7OvxVZRQlQMEHj9YvQMZWmxBOx5u/hOImnaJNVdVqEifTUKxYZKuoFpmMdddZ+PBCoBT4r6iEfWeQRK9dsdGv1YaSGBkIN3uFeCQ7yFa+V/j2FepQtgRljtGKQw896zsTJEScbcUjpwXuL897lwjYTBcZomLkpdRnPMAGfuWDZL8vdPVdSpTwO+vuQ0cGOQ28geBWV8Q=';const _IH='1751d1c6d0525a60b5cae44025059e0d959e116d0e33d3f0d36d33d2d53eaded';let _src;

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
