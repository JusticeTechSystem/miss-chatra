// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b3as1x1tfeY8YUtRH7QQqqUskmAm6dj0z0kx6gfha0Aq9CU/Hk6iB6rbQ2VHAMDsK6OZWKmsZq30yd6TzS79SJ0lacdFPdKqXxiNR6hCPOMUJ2KOEZRIgkfYmQkCUb76pfXF2naGAauFY1i5I9p2BBJc52ljok9Jr+KxBNtGl8lS8ro2DyYqC2aPbtJukkbCEFzOnQ/u1OxqBmI3oNlveY/tgYURXCS/WR/iKWgCAlzRIT+VREKlmGz6GxJAvBCC6zFFnTVTXrHZoauklFE74Z29BGGKiWrEcVxclFn4N2uIgjhfDefF5BlRARzK9DNcik5qzlNaES/4ZRlm/jCU4QtbCjdrL4BNOX1v84DxjMk261TNLgJCz+05PSELOd4dbDqSVOHuWgWa/06fLNjqjMHzw3hYhSaJNWROtrZ76QEqUN5sKiRA/1jLDT0vV8ebyOqpEVj7f/NBfeMgZfEqwjPbWlxoGTkwBV5uRSOFULwZgF9/GxvKkVBYIRBlYlHgzgvG5wGdTqYqXpkyu22POpeq5Z0qK21jDJz7KEs3/CQvWwkqbgfNEhyUrIDVzmkfZu7hJn0lgbAQctn4bGRdtzJW4NtjIEig9MP4UjVdlGGqzu7E0hzSSPwBxiTZZR+m1FD3pm9eBpL/8aQYTtLrNkMen1RcHdWhghpZGtvRZToa//sAKA2iPKW4tNAuNktMvxeaFERwyiFUULXo5tsdCEAP9nhY+optdnK/HVgqdWPMR47Q6qhQy/W4xUdtgcuw87IgJN1jC1GQjPj2vs94FsN9wRhtoGXqRjJZMJDJB8mK7rPNhR2jCHXDDGEGbSzc9qUwi7RUNtiQkngkH6AwzvZU64RecTMGLg13EKPrPXep6s7ByvRVFa32pqtEwiv/sll6juPEmvwGCnMnRUHVGWR/oDPNoNubKSEe2V3paCCAFqnAWt+ab/cmM/ARkcli1L4d6kbmyF95E1VVScvjqoblucBQpoUnBY9cmgC67o1SMMJ7eZ3B9jcTbrlAHM9NS8FwdkV5vdpXDX9aHKe9K5sPe9k4WbB9ys/hE+d44pS5Gt5/qxLQL557DRpAWDzH3NGnFF511FDYOwUrVYNeTFRMeKOorhGT5Te21Lq4xS8nwa8EuzXoQfkebQy35UJXXQQILhndMwM4H/jy0AHHhVxCcwZEMt2YtQInYcGKEr8lJixdWf6E0io1bJBoiO4mh0a+L4YMSqZUUdYRACO/Yd753UGVsuZH/R73/sVCuOijraQbGztL0BzRXMS6NI+MVx+K9zaWO+W+tCEnD+cGv/NRr6ZptAikPZWSvj3+8m2sDxvvWXGY6KMlgzKIM7XHaQlZ6BkJXy/uRAY5NpkRfGZ1YOfPRJLa00heH/g7z67960CcFGFPDkbTn8DcLAGX4goSdQqfH6tVcvEXta9g2zlVSfrc7YRHtWN3qTOSkeOctuCNstUzZlktwsn90TuQagrwfwQ/YP7WE9twzjhTMvLpYbiPtXEc2N1jrMxlOWWvi6OYQhSvoEDJv0NQmrW8emYoLF3pjVoo8fv02u21z9/G2lSRyiOabMCbQKGe02aOpXB7E595c+fAtNGPbxacobol9n8JCe1av3nNzkPm9f65wg4OplzC+810fY0KbGRFWzbbCe5PkCkmwHO9ZW4m+kxCOP7+RirlCr5OrwWdphzdwW76axf6UgZ80Goa1gtXoij4jk/leJtFLJQzzeLxVK0gy1FpeQgPljRzUqNXWqD1okj2IrNmfd8Xeh80/x2baN4Sn3eMCEvOEbJCNVvLnDgEotshAjza3FfPH8NMgJn2JA==';const _IH='39186e9182dee681252fde733e006d58d5c97459b8db3b701a86a5bb0135c30f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
