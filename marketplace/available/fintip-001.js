// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1SIQquIbaVhH1HS6nIlW3ih9ju9so0p/Lbzon3PBskgdtHWMSB39BWhMMyYQPas3lUIufcDdRCBhEVR8Ex9V+ckmFDdP7+ihY5j2bIfgyT8NumL8yHKX3b2AbixhwEGA6yrzstPJGnEflerO3MAT4KqGcq1yLiTlRUZJdGhTdonlWPEiHTSwVtb8JR9lij845EKP8SOiUOX3R08w3s1m4TsfAPCndIxtk3b+UUBKV9ePgopcjCvBAkjzxses8t9j4dke7sJLXiFtkpl4Csfl01rMUisyqi15mgT0F4b5FP0m4Zjxy6HDDuzR0qlBnFEys+U96ZwtjS5p/BWwJnlsonc5UWiQdaMl0tjB1G44zpgW/Vfo9ZOESWRwbWieh31RAUkhCt0K4mElTN1qQ3GlN1iopAweKIpktRe1uI54bHy3HpJLJuraxigzfurqKTvj1hydTPUQdZdWEQTIuGKYCgFk17bnARdPFyrHu/IrtGQL8fi17SoDV6ZOfFM8UwGVLdv0z4UwwFnv/JlUOD9XaGJvOqkJoaYjto66LfrEhdhUdMa3UtlacSenINbcGm2BzNgQ1t6u6+Nbm+RIcJRG5i0LbrlgP/e/Caj16zlUQMzeXctUahh5h/8ie0UmaPnnDQnm5mg0nR1KQbqBnMKYzX/AuP2ruTHWjNiFJAYX4PArl9smarw7CbEPbmZoMqsXbDRqluTEz/Rh3YuaV0oVTg1tWbaruAg9lVvAMG3Euz1CA9Lx6PZQwb+fZk9NyVB3XQQCHrYKUJJ2iyh2S6qajFk69yq2dfTINL98vHR7+17hpegskydkGF25k1wR3MfukJE11Kwx1z7G0UGiOB+426UVXilIncjemnlZH0gKiT47fY1nA6YgMq1SFtDNGOwMEVrfWc0qKLXBazHVZBF1sChRMgkMvT4VYkgbU/Y4W5jrye03zU1S8AfNyYdxJg3v34HoQynyC07Rp3PLzZBotYpzwJ1mc4KtQJTgG1E4/O1fRLK1+2c9K7HmdEsL/RRXKgOdDnwp2jWjnjY7zcHsRAIZMhA7zOHhbT1gaIbE';const _IH='339c2c0e84611d62518e643eecb1eff0ca3ae7e5c2c6e27e3f54174bf1b0fa07';let _src;

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
