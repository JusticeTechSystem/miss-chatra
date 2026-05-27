// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+9KP+X2j+znGEnFyDIpJDT9GgUcD8xQxA4CfT6kZj2W6fHsGdOqzz0OX+b1S09S3oPjLlkmihcJ6LaVaChXWVRPdtVQHwvl0X39bg5c1f10InL9P4VMKuNRiw1LRuppYmpb+fjB3450sYp6pDEuIIMXFQWK0/N6fCUbV4VoXjviEiryxvxLg7THxru/ii4QEczfN1znXOOr9UNfgfEt2ehYDjQiAYlP4bllRXLRmftZiplyp8oV8SimQ9+cdwJMRxsu2UgLFgclc/t1oqctNqVs/SbyiSg3bpp6Qi4BS1jZIzP5F/GhPa0BQq56i3/SJdRx6IABWqmBXe93Ad9JNpMKLhQJ11WLoqn2WtEQgvJlYGbDvjkKCPtnG/oLXsCEt0zxK7Mny49Jd/GsFWIb7v8nlGmG2dplrk5ZstbZJwNuJf0FYu3GqZvRbdhiFrKyPE6bZk09tsJvSDvQnf/6s4f5oLNq5BDCEqVwFWVa6s8JzbzZBtfso286Z+2yv0xEZUY4pvQpF/fxjp9FdkurZbm8xYep2skZJtJtcPajzBjBhkhSvyidvwhoUR+M52gKbyOEYA9IS0MANhRtWN3DypYGKUs179Bj3qs3PHqaAnRyhMR8rtLfTDiNvr2VOv2zirr1NJXpzozju1BQCxxnWAHKwWbeacdnk9qy7lsK0AI8sH91tdj0I3VMEAd/0lPbUdbjbEdLiAShr+GE17ccsIAX8BDAPhEP+25O1EszZgQTCvdGRaUq6dP/zKigJi3AOcMj7RxL+HvaBYs+3gitpZKSnlJVbgJhLYk1ZkkdYjxjYB32b95l1gnM5XlVVpS7vR7YGnR7FTEBxzuUSFrek7HLGFiEqt3fkkSMwLDyOmJMsg54mlERr642GIShoYBm18/DdU95ZDyJJCcZzB/VCGWdeuPnrPDuYvEUbLKA2utLih/HS4xb35vcvd3Jn3reGDPoxxIz01Uac4CKyig6Ivuqh4DV8H3EaRfJkiUcf9BJMEIzxYTcIbsTwHb7TiH98b5P/hxMuV/A=';const _IH='b0da25893a8fc34e98d7b647ca7c063c99c452bfdf3d56210a8face31d15b31b';let _src;

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
