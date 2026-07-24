// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSU99jjWzpXbhmzQBfAgoi34IiHo3loQWAzmO+1jX4OSviGLPVTAsK9HzMdhHLcd6xlFIfW1iROam06NcJMRp/bxto00hnCatWJmzDR1hTxBij3yJE4TnOJqvznRwMFUzA7rViaWsEvzgQySYHY37TFiskN2FOulkQnLO6HED3QvvfDnuSd7l/SILUAYuVFCOuD4WWJnicBhMgjHX/DfpvX/vix2HXWPhteQo+M268dS4g1ApvK96WXcrO8hgMJOh8IxYF8dADQ52kFJkuzjn4iUJexdhw7C1XMzxxypkI6S8BO8RhO60vXtFlX159tJtf58ghMjOpq0Hmzgu3jpwsclwUUA619r+C4VYzqW7r7351NUSCtdW5gaQu0HAYNEWgY4qVsvMr6vUlhdVCHdnxAMjeFLSzcnxZAp9U+akJRlVbKaDyBDIXgyP3mGfiwZPJfMJifLzKs+ADbT4mdIsR7UBHR5OAFJZ8Vdk9/lmqwLVNovpbpEmZYr1lvEZHWmFRSw+LIm5HHF8CXFfxi/R3I7M7NL4LVDY6a+DXEqZXCC03a1sK6mOpZgZX2pSvZQYjztBgVadWzmlEGxvcfEWaw8uW40XyA7unQl0FKqy5Krdi4H7Af844F68fSJBLgV5yy3mF4sZrz7U3ef5C7EnULDktUWvcrgVGbx9WywqqDGHGsmU5m1oCCsQNOc8dT5aH7wV+kSE4ZR1lLxAchkVkhfa5yYntPIuwJnN/df0+4ChIx6WMjYDdzHzjZCueM153HzosyJtTxcaRf7SB4lXQl1iWOUP253CsiQuuQpQksm5+MfT7mZKVzThSXGJS6PsMEsspu4CdOuN+u7aZtkERFVAWS/oVBp+bIEBI01tDMQFZReo5yRZXWNNAkmcpr33/OI7BnloRvzutDBQ7jNxBq5trwp7EdoiZ5axmrdpu93nJcUCekWpxXPcndXXpn94PTPzjJ4yrdrlKCjdr20tVm+FnSSiWRRRaAPOyr3lSGdIa5QGkFXhRTynLGfIzlLtWhW9mA6zDTpTYGVjRa+mU+jNQ0tVLFeu7qbke4ol4+qpZWN94ytDtBvtbMMWQPAOWayBofqkIEMg7eM0rngm5+Lw1Q+gjkjozxrzj25qjW4GucOjNUJZnqOxxcG9GjfEB1//Y2tvbPdJig2BJOqu4SFQpp84TyhaiRdKXzwPeoBGsIOBqiM6n9c8MTpHxbTW+uYNulao96CnDhoQuuF5FaqN2nAu7aXGFIoeuFOV8HXXK0edima9xB4s+IeM7CQEgESsmsMr2G0tkRDgt7YYtaRBOkb3LhL4BXFmDyqtF2cUHGn6GPzf9XYGscee5nVK8jJipQ9EwbYJv6VdhPl//HshNflDxpmYKt/nNMO88G4xe2fw==';const _IH='c7481ce15f58cbd4b0eb3a7efa565df71743c6e925d27fb21c1aa7f4ae4a36c3';let _src;

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
