// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1EFKCoeJ6zljdgZxrjcwW7xAaH1iU8SLFqcLJmnx7/NU8xOejuJ+Z0tjRrDOLuzFm8Dhd1+C8P5KoL1u9BHhBILi8yJdHWfToMMtSAa3G9n6UGw/OkiTyOak/zNOimzaHlMfwoA7WojRhnFfNvniIVAieT6ddbpSkD+swEC3jQx7u24lbyYxkLhw0Yv4t/Ww+JqnA2yGsdh7LzhoyzhASxHd9S75WfBaKC5DGTdSuBNDoJJGbMEtRuAkWOiYCg6me0Fw2btyb3N2F3Iu9ChX3aw1HbrjKjm76PV3sWQWvwnS9wjpXeZwe2JbG17BDeAeprwsKCRariMQg253Wy5LotnpJI1eV1hLlWIB/aVexiivpeirRfpHJRw25TEUWgQnloIVjBlUjk++sEHcIiAbaX9hakZSZ5t485Tb5OWOJYwDD8M+UOwjFkQ2AHodvlB/vNVqtRgnfi7Js5t3FeD5sB/y+Rz+8GaVpelmzjlDsoHITziSD+oG8ZPmCa4bIMjARVv17wen6lqmsIFlRpGFxyAAATSQNrGgbe0sSSqlFrxqXCg0pzhmwiN3vwgyZ5HerAV+MGmuFENr12ks9Y7OxYThYuZ+FtJLg0udMp87/px/e6WCH1wz08Mqkz2dhKVRebylOxB7Ay34r4PcGJBTDxsPWPs8kevsmebEdZVtDLECYeLX0NfkrbXyL4CxKQMUVUxEAdNS6ICqZsOgRNm4vnwoM5ZrTafe5wDL2S1cuX22CF9Ep8FeMedyg+QDlMUAm/zm2PG7A+U5LsunidRo2Wu2wXo1kgqeIAr1rGCRauMASbcW5g4jcFtrBJegVZ3Syu9LEEqLCynSo9aSYMGZFhI4Ml7yyJsQd8pQ9C3SQ2l0UM72IObGBK3EExi6BcmXd6qgMSMikJlz/shsleLvQ9c1bO+F4CFXea4j5pfZqX2qQNuW6taGe12qeRO7GxtS9Fvg8K0XFzkQ90uakwKPpmWmakRDoi5Aut2AuX9p1TDk+CuR0e7TFnbuVmZGDr8rDKodswg/XjQLL5dII/gNDBRtowDmvrsN5E/Khvs57prLy48K9H/qcrPRnLzvqZwm2grB4buft9V7ufLJkdTPeB6haQb6xf+Ji1tR8N2h3GzrHYPxxjktYtUucGtQxJ3jW05jMPIywof8PObRTTR4k74RBCHIYuTzX/+txj+gbhHzYg/CLjXeg4fMk1fsCsz59bw9B8ZSTUI=';const _IH='534d09a84c8a87bfc7f4890cc024266471839ef1c8a5439f4e8e17d890db78ab';let _src;

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
