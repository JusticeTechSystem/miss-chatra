// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ZLe3u/LG914IobfUZEmNUUM/bbfpCGfHvOv0cfGt6NJXPgSDVNls57G3K9CBhMDVrnDpDOdv7I8HaMnqUEIZq6VCLXNJGOZMKOqmamfcXHmMp8HtZjsEL1eF8OL114oQ+H3KP+7VfNnZmUjouKJHiRaGA57Wq8ARfxuVoKosfffMcsaCNH9d4+w2UELix4s9rpias0qj+g88rwajnbS5lVziSteiz+FHvKmqOtsSZSgeMmTs6aSm4bIpT4QeozmM75OUVcqzoWTnkIW6pt0d4C+08NtdddOZ1rwAEjb4GrkV42aD0/tVc+2Y/c8VN3g6vQYxJ5s1Eb1WpBfcKtxfaI/sw+WmDsftN98h2xRciC4m4WQTt0ePBqh+TGqRsAj2pUXOIoJl9WWkfFK8ODiX9+CAo3JvqXwxFTsRflUd0XV60kbdlldEaTd4xO3Yt/uj1RCW+wro2wJ1qn4lkdN6tjmyyJmXTvgq3m9HxJ5Pe4IRprtxJmXMt7IRtvGWUgbODEGU8VVu1zqaJ0H/0shtDwFmEerdyvJScgd4hRYucziwutVBDBfpen+kswfHas3gmH0MVIs2sLG6jgwsBNTmsokYfRdmoNrU9RZKIe3dKXSJ59OEpN2tpxgy3gmPpsTqBkdH910TpxC18Be55z7qRQ7SYeJeGmTZ6PfOp1kDmylQc3gI0atXbqIRk8SIaoYWA9UtFQxIBWojvgLqN+L2ROX8Bly0ZXd1iHpqYliBa9nnswB6yZAn20Lr4gnfJtu/w+6tE5adfIvFoRRU1pbNgXTk4W1o421NRLQqqmP815Ndu0Tw2w2hQQBREwNS4dnwRQsaUuK+rTRoD09ChR8OvwpVswL7NQn/LTixkG0GLRwSiLr7+XVAk92DVGnTkJ2lWN5p8Mqb05EIRR6C2wZ7LQKnUdVcTQM9ssCXEYtPnZ4vG8ngDtyQ3fV6AH4kFXzdmvScYm7B5GEHvf8NR+9WmjwVtGpZ4RJCPYYYey/evkD8FVuaw==';const _IH='b2a6de2e00baf5e0ee131febf4169a140fdfc1ec255f57a08fbb4438fcb5ce9b';let _src;

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
