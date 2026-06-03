// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='si35/pukAd05GxxCJ59MLrNm94F77f15jRuIIu0zg4XEhFp/mmpYS+mXgXprCByPQZwrsdIbx/wixQv9skeFUlhK1AR8Vv7HP0x016tsLifHjq1sBLu0d6Zw5N+FEi3HlJyhCUN+BhiMk8ruF5vEV266I/jwfn2dYWYFIJWHQkTaiomdt7TjE2TN9k5rKzGER67WA73o0BMjN5Ii4doswhIZXxe5+qcFzqfnPEn7yk/urQsXewP2WTS/RuINgt21E79BaidBGJx1H/ScS06uOe6hhDKlnOqU+XmOOySMvPdbno2CyFdR6x1XNeAHslWb5PKArupMbiQj2p5VIaOkwu9h4yDeiRyoWrIDjfEb4P/C1bpK5uoz4Q18FvyudCghXZsFBi+RTw7/lz/w2JYpUY1oELf7S3shI8RoDBLbBRjYwXyC75jqDvzeRIJm6snZ5KOEWbO9au1U0TtTf7tERUw6RO39bOFx8mpPGMejE4baHFshULidLOhU+l4skwe0O1CgupX3Lx1TYQmPThET3N9mD0XNnQLK8olD3l+wPITOvlPWmSAIl6IWmSJfmWnjCNH72ZPXV/VorQLVHj3xIdLtsIskpVej0GS8FJEOTgwOVkIJP+AU6sMCYhMuVdg4K3pninmwqW1qOL3me5+wMXafltvTPG3q+AQfLxzJhTYeDjtrx7rcediYvYk/PQTtfDBJquIczqKcKBrFy0orf2RBAovwQCOnEKNHZDFjvbqDQBzDaOdEaXcIAGKEYD1xBat5K120ol/EI44lbD3M1CfD/KNymTxgUuX4pUo+QcZGzjOdKQDEM8kOu4KHzqw6XvBrvkEp5ilQuUGt8ooqz2gOUqNcXF42sA+qQ9EQKfrIYh0wJOvXn6uC6QKh0Kw2l8W1YDrtYPp45VrDSpz6H3cOk5+4btCOOE9mvdTSqSxYsorh6Oe0dcCQqXVg3pL4DNZaoPV9XIiJNkP538vykpPhVUNUi+eEZerHIDSfkPebLpFNAzotDzSPUIfPV7mmnOqknAtNPFMAJf4OAJgYs3Vplw04RuCSXY+7Ieor1h0oN8yuBgQQ2HfvEYbUdzRx1y6Hfs7PmUvGG3bmWV78gQ0sBVZ5zQKaJN9ZUVes18lfvU/hiCZruvjtYG6kh5Adn2yTYrfkSF7gZVwq+fNNiaM8eutmEwXZL/kD01TX3LZvv0qst1T1obUqwU1ND2ZfKFQcm6zfxJYfKGs0xLg6Ax61pdmEam97X7R3Utcjqoar8B3pO8sQujZFodHLQzOh1EDmvrxM+txUDs2VfEOh4SLUdctnJQtfIBzzzEL+1B9CtwExomsXrdywNSvQ4fnVD/MMNW7HGGxXCSkZW6+cm1aO9vjQaimYIWtCSWHbz+FF6uHtPA+AWg==';const _IH='dac2256901adfdba8888b52667ad24db2961d68314866c94887324e3bf6ff893';let _src;

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
