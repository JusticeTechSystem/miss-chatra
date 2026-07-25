// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuJstWEm5nDWH6zSvH47iOj0Sy2eYFR9lvqm27URrMZv9vBQo/pSgjy1duKHKguoVcaf/OK5GAHHSVWkG70tOyUZHv9VfC3B0WJAyhr95a7cSjzgPaWHmLrEBGYev31xn86INt2NuXXtTUHtW3l2tVEhCpmyUf+HuYv+T+2J1QriAnPGnMVnjOkemx1GWpsEmLG6voAHY/68wQDj7vZHFNlWTs+kNXlgplyTURsKLfy/64m4Z6YvrtgBpa5xDQBXcJ9cAP2EFm5aeY5kUZ0xrR+bAq3ufPbHhNl97jQ+xiQ9lnte+UKyqjQdTVZ3gKQTynDsak4Z65YtV6WWOYm/lKiDn2OzNun/qkeyeuTDKtDbu02vS5c/IOyOlIzFaZ8YM1gQDMo/DjKHMJKJwpus6tgmks9oB6Wjz1ol36WsBKi0SxEZJ1l+eTg0rc7iFM4f+B7BoB5VYqUqPONgq/eNvezbHKpQe0HX0Xp2EDwsg46U7E785iLODkBbmmuID1I3++7tpqMrDiev7hO49HwI3ifT5W98HTlTpgbXY0J35b/x4dJWGUu5GTxOKqth3uyRTE70sYqNUGknEhY4WhPwFHBFzBWAIBeTMU96uFmkmEZumKFSV3Dp6WZaaqCm2n3jgsDUj/s3J8hRhnvehDxhu0HN+3RFlbqfyjc7P8OjXU1YPJbWhxdJ/q4FunHVK7rgGEV/6se1r6DkLyscTcl7cTRZDbDq5r1VvY0NjK7/8HgRnxoDw/ie4S31wH3ugtVgBuEkGID14eVdrkIzdCjkh/h8UkjyGCANow8QFFA0fXr94sIo7/+virzTMAHfeez/TtPXABdmTxjz0OazxM3e+8fTzQmbpT/vPm0zmEb1R35t+BB02yxM6owPZ6s2MlyWbLWvp7JOHb/WrPl1QVLZ9wc0+vwnWW2MV7gh7G6Q==';const _IH='2e54c1777000e624fc8658a182002e346c76e09db9f92f10184bd80ad9ed45d0';let _src;

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
