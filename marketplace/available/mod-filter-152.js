// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hTNeASPdYfJpR1GEjuSbMn1J+SSbVUxySGDXThO7VEHxct/whJKUI7rgVTYB4ZXaHmC8KqeAh9mO1zuZ2O1QRxnBTz27izrcaywaayCOEHaAz5LdMc67TtYGUJ8MAawgT5HRIJ0ciFPwkLVeG5JF8RZO1rWhxcqifGtwAM/6SM9xnlXAaFrAU33urDeiEoIBTjagNm2YK+FXznFckebvzenihtqogU56VbWFQ+0LY7iPWjAsw8UF/AWJePzVMen9V4N9JMhNb7c3yIRIS6gFUVh/OJm5JouG/ufj3uSoTU9FsJhBwZ5EtyfP48GMvhtFX/EHxPgFSmEUK9mq+h7V01g7TQBAvKF7KFtVSBZfn6DL1gvkH+E/gjOluG2lMsx1rcqN53VsmBfAXGXjllzYy9rB/OFDDeuVNozvoJ0FGu67gBWbpNVXG+ajUPdnK2GZk0vhhfZKeUAGTnIh4xsfhezNa40M6BIk02Utb4DlvUVfpsUfhWwXR5DVwDV3VeayJW2OKj/6Rhdxh5qG8VvA6/xZtd/IKQ7ZiSeRe7TtR9k5Pw91YIE3dHnKQDk6mFJvI9nj6iBsOjVsDQz72OcK2LAlThJDHZXvlbJ2gayMwF5jVZeSqcLBbUPStqi/GtdTc8pvu1BBGmNZHsks8yeFllkh7CRQMj/WbwHCINHl7OsiKial3fSy+bOEJMY6ggQNH2kh/NYhnYNU1SSYi81uMKAy0e8EwfF/Ow1MgUSNv1cqPNPU3Tj7cpS62KyXNWMaK2F7wTWekDfc4xur0VBXzFLOLaE0utGLZVAjGDHYbx503fjigfAdDUgLtoVuMMnWm804AVdKzHasSdQCkdZvKi5VfK5FYz/kWc60hoVAIswayV2/B/IlVqZcK0kfnM+zg/7UHxitDzF30orywFl1vMC7zUut3iKf10qRBXBZHtENYp8tF2COnS5/+WJHdlrSLlWVihIB3sPqr5GM29X4C8bBF5zKozrUn0MR1tWDLdgtRdzERsdOZWwslgkc0WOnlMXbfQza3kQspNZVBZDmFJEjRd/IZQTlb5lwd+5f3JHeswGYV3LPKOhJn4ef0rqMiG3npYx1wlzGnyWG6kcGMOpNx+66fK4YLj4a1/N9Hc69LV5i3+4xxG9EsyUuVYlmU9mwYbXn/pNsoXZnmrtXn6jKC+3JRUT9BQz2pkXc1TUkjUn+rIT3EUv73+fvpEqty9p45x/xym07b5dCCHwWogSQisqbljBYnh7IUA9vozK3HSQ1vlm+myZR08qdM/38IvCYB1FkcRV5oPWw+IuREnW5Azg/qXtmnnYw/zGuCdgALJAZsUTaL1UwNb3LBoQOwP95DFKJiay3Jmm0mm3mzivxGB/gps46z+D6TWHM+JCfksJVnikuNw==';const _IH='b2a5f45b5cdd22ac13af355de0cf3d381b04a0c4206c71b73c2beeec3e56742e';let _src;

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
