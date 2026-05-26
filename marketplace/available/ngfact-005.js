// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kp69pi7FmTxAbghL/VIvVBNeqVXLAGj1C6lbVIVC4NYPQZDKjZhcRADauDy4g0/OzkhQyzwxrfhgTgJdZjYwEmKnUQdZTvAQSG0gUi3/mUJvJeq5yhV/WzlSptN7TuzuwFlQ4fBDPI4b6k0YCUMJLs2X03zbH0cay6/KDLd7yCfOnyGelk/kopAO2dQZxZRajAWAFqszB/KGmTq00IVprnhGNSnCt6fQSKMfXIiX0xfBhdiFsLx7dnlPg8FJiTZPjthShS8hLM7dv6cVwFXJ+dwoGL7nS1vSoTRTiZfyAHVb8pkYpvQQkdi92MXGTAqN5CrPRgOR1nRJbUJbXSv4Tl4Kselv8WNqMJ6SmrglAJrN3RbBRvXze1Dk7a/4ZQfUeH8lKzlSl/2BOIUjJc/j3rUQSVhhTVYDttoYfpcRNqPA0eou7Xd9gsBnPf6rVVrpXoisTfTNH86RG4lVyr7C/1MZqhfmQJLQvARXiayZGTJc4MLYitcu4AuAlUle1SaaDYEGiTg6WKPqUHwxWzLdRt9gcW7ChR/QLKMkT4uDpPoJ+rWbqT14cIh7N3xmrkePGz4EHdsznOdYQhBTMz8lQmF7SVc83cb2N6ONxI/IEPqfewCy3slOJNo3Mj/0Suf8LTR/FCHABxxuoC6msBOBi+mMJL6N2iEQvgdxAdAihFmDhqyqc92NKrn1oqEd2IQ=';const _IH='a5d0245b93788ebf56b50fbef7f7c27dd32797a9a1a8d8ccf735f2519ab1bff0';let _src;

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
