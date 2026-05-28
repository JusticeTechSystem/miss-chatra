// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qtNEvvfxEroUekYBcS+HnWmRonZgIQpaGbwYReLTvIXyl94yMnvMz2tFrHidV55LKCpJ80F1Ek51+Ne2/CaV5bhp6pQX9fIINZl2vIMOqekyr4Kk+5M+C1gI+JVrQeHZpr0lEngS1HlVGWwepj/tEQmP7cGvPk2/GRv4nzn1eb/DfRyE4kiujdQYEYfXVieo3aj/qeLkIp+8P1utX/FOYSi43mnkF6Tt+/O2nCt5m6PfaweMc06a5wuKGL1DMHNUMFDUbXSKl9dCvctCuXmdjr/yk0tp6lwY88io97xxgkSlCDj9RZSEi9Cpd3Ppqqq6ObaArF2eskh4EU7adfk8Tq6o4vEurSKAUK2R7gX73LDJHiIYHpf+wQImGEg+PT9kTi31KsEEPbPMYBqWZTijXYHKhj4sM646+7burBLh3ApG+aXqPs7Y3iL4epyIekuW5u7LM1clmApIyauo9fYes1IbrrZqZCK2pmD9VEtmDjMe7CtDzSCegTv2JkaJVFW87axjVzmBZVlYQMGiSGLk61kcgZX1hnU7Orj2ArYqBhcgH32s+5K4ddmpzJoWHrYwv0zdwvfDBfGTtIcmXiQQz/PZFhAYe+Z8uZCHv0N7AabcwqmMWBP59o4WVqCWlnvBGgmtQ5JvGxzjzhZYJAwP/6kvY+a4JytJQpVtDFUxDANMieR6mRNdFAtJj+0tgiBF8YVhbj76k5BQFF3HMfRzwFfct06bMHRw7lRYOxZDWvudm77KPUaTJCGmOFtFtjVy/Yv9ZDwNMKf0Gg3fojd0yQJ8S6k34kCYTYAo58OSSMMbHMnxDeGBkJrcran4StRQRVlbnDdWOeQw1moWyjfyGy2wWp8n9qhj18oB2kky4+BQTE9WWXKPocj8PMPt6FG8rtRfZfAmw+JObEY6CgdOo5vde/TF+j46rrOa7iWv72BbNXzL3ofS4rR2D1+KDF7bb9LNcS+5hLnTOZBBpEc1q2bCUYOBobaS';const _IH='8aad74c1c3c7cb383f46d4c7f13cbab4d8017e257e33f6d2d5e379c79d2fa7f1';let _src;

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
