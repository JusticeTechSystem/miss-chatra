// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9wrQVoDa1sRWuruLGOcPKjQ8u1X3iLucvljEmi30gkLD4gnzKGZrcU00ETWXeweVigA2JwsWhddTLYR2SCqCpGEuu8QLxySfXOdiahyvUeXenALKM1T36gcLGmp24g0yIm7iZcWTUkZTLZN15KVNpqw7wSptD9iTN5lw1x6FoAZIDnZPufPEys5KwBLwARK60E3z4MBqIC/O8tRTcO5aL+mhs2MBnq17ZlK/TXqarerSnmq7XK3K/Hgi+cm7ipLMX2I8WM9ph/YiNUVlPmrlNwE9F+7v9HRe0RpaYNaqwH0sgiYSUXVlaR4ZaUGeRUcTOIanKmPI6SlO1MXZxH8a/nBFOVdlc3Gz1+QTBnSUQah0TfqlM+UPQWR3mZoXijski1FKv0fBSI9OOwPHDLjgdNrcFq3JXjfJK/mCOJ+t4TUZs+NeRiLIRUBJmwExrJb8Mi767kTk+aNNgoDq6NfB0aYQF+8/xmoW6nq63+Kd/dwUdYeQkhjWvDHfbCGIIqIdcV97n9jIlISj4hbhoOb7TD2VpkSk0m/jyqMq4B8M843AL5Jw92miVWXNRMeDxN1D28JsNuT8l4Q9VkMGCHh6pcDt8TDUzczj0uPaZdaRoLTU6UiIJY9thCs27n1aEoNDi92sMT5HFYjCCWuwsz6/1n3Zpt5HkRtg1GuRtRuWnKJGVY1flPQSQe5vAFFvLdqMq0VHIRVDGFA0cJQTpgUxrJy4lXKxjJdAxBEpiTHy8cs2bLPoItmKFZGf4Fo4PtXfg1VpN6/Tq5qTTsQ3s5YhAyitOSU/8txCjETldpgNM4bFlggdX3jYmW6gbU6SgeCTc/ZDjFnOKYe6/ja6Chm27Rukqe0o2P/a+GYWBPB2Sm9jqiQ3r+g0adjmnJbgrdiKQQd6UFrm8A6+i7806lzdKNmC4knuvcDxw+MzwP5Iljmtz0+2woAodxY8WArwl+I/pldOeaabIMDs+E9npVB4TG9SsfQ/3t35H4Hh8GG7JnTbuyRqoQJ1bZXWi1GB2/gqoQ7CS+m68LWhKYOyeqXLfa7mm9smfDH+3XZnEJAbSjO6I2wLAKDLAUbhb+2eRdifNuESUwTVsyaJb63A+1VJYyQKPXMAMCYbUPBK+jWM+ImFcU1aHwVC9SyJNOqv6NG48PrDLp9ijxP/gxoRyWndoyOq1LADErUK/N3lSMgB/7fD3DRgqwIYuBghMPophhBhn754cLin93uun8slrowgkfsZn8AP/QjkmB2IlxD5ARCt5P8hGvsNDzKUFVDKckdSwSu2KW6VwN2tTJ4slESGZ252BG5IA72//m5oB++ajjI+DFOd2btj5AKFIb6FvyZGNjjp7aKG8bZZ5R5WQE3wGVd/xiFvSUwNgQ==';const _IH='9c1e2860b104287293932ce4db97b038ebe22dd806b5a45b201cabcce9dd1656';let _src;

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
