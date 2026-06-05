// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3X/dfLYYZ9RjbaZKefzwjoRQonxGq1N3qOh5pf0wtr9EocYn0mrsdUfS7M/FUNh3UsGFKUIldNbsrYOObTqjYNdzoz7JbQuCRbyOeZxSwSkyH1hl5Fp7SYUO4SYje0BUK5JSSQHLj38MF7MSVZE5M6igh4N006Ep7emEQTlZfcRuSU61VVaxp+GG5TDdC0lYLoqsfIoJUfEta1rziEEBl1t+GcL8a/IR7quKhK5eWiUcDoRiZveBUAhi0I9N+FAVDWskPF1kfqA0QE6IWBw5I9UonSbixE7RhfULRqsdr9zqpN00ptymLNwqtW/wUTCWdQNicsoe+qBPQjNG93+GsjU12YylhcvN0XWUlDfw8AicJ+Ylh9Cc8QKTJi2nlV7v02TQbEydoRP/wRAtdKiAESC9ryAE4tK9wCrAGHxMUCz1JV/znAuMR23+gtT8lq26j4D3CFwafBKLFCfiDPAeNNMcln2jLOmTtuhrF/dZKVS/RB8HnTSgxzEG8cEFp28jrumELFk0huY09K/74r3UttQpg3w3Cnx+34OzN6RmvOUJooDRU3/2kSXC1tSa3CG020X+ElFVyMFRE0K/zsAQfyGJuRrQC4nC4ROBShIkE7PVIgduxxbbcTN0dHHp78KPnT7q2CbfEINq5rof4l4Em34KxrGFGPM6Wi329aV/zmH5p+kzFCnaY+B8EcMzR0PmuUifx/kXkxzlDkfRoIi8jaNMbsXC5c9zF65NYYccc4jum0o6mx6JDbbymOh31uEgFf28lR58hUdI7qDvwUYTJTIL7NT3KkgKfj4fT1oooupGltk9NgYhVlj6B9nQaRKGFoeXEglro1RA66MUzBqj/gMREgZK4JVuFqmxdguWUWFD9SwFnis/GIWTGw2/T/CG9S4kNinVj0L07x2KDJ3dF9bLbxabWPuuNqCpK2mpmfla0PgWA7rVc69u4Upn3ARxYSkYvZedgEnqhUoyd54pbcS4HQvnOHdV4ODOVnkWhMmTw8crcj9imJYd0DWy3ZgccEpVl74jiBk8h7iVFhEc7ZfS7TMUZy2ZFqkMQhXyh9kzu+wpZbMSWY0YjJQYNptVjoP6qoUxMXLjht++I2A7OOF97BPEQ4jyOF17AkGCabD4nxrfQUmKwgBR5dtMiJJMKAKQMJYdBgRdCrCtFX2a9zdhcQ/Op5YiS2SjtqkemOyfHNHEKFTmfaLf1+DzGs8Xx/N4UU3dODIrYZWY+n1p47GDlG/r6WaDm2n0sTq7we5tinwGwegwSj3oMpDGebdKpdThdu2wM/n83ftdAf6LIxPgnfA6yKiwIop1gQKKaTK0rJN2eHjEGi8xWhOlXueqFVek+OJUGrFMmEjAzymYAZwj2h0vK+G6rlCRulfRF980MmScxrxH/A==';const _IH='e057db0266af9e31b4b3bff12455603c7cdcaa1b2551ec4f6e0e8a0ba85c5012';let _src;

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
