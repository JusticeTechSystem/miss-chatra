// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BIrRH0VUnqoSXT3bWxk9oE+i8+TGUy/pqE/soqE8bId0aMJoBOx4idh9j3bN8WYSNXqtD9jTtmJWWTsxP/xx+AX/UQXXiBkTAb4Y6S/0vz8bqGJ3jQDcYyBLfS+MP52Agp3be9SFsOUVfXlv7/EsMs0WLdTh39rezeLUjcVfeTHAHJYBLXhoxD5YnlIcmFHi6iJyAQkhpNqH3W0XwARaF67rrT/aVW7yoMaFUkeARaXUi1HiJYumaOPtzzWATcX5YOLb1O+sIFyNACjBNqmw2alm3W2tTCnpv50Ohyrvcvu0KluO3J5B/fyQtZCWnQ0hw4tbndPM6Q+OpwzUQS8GvkDfRIoVo2AhO4nhFTZJRFOladHNGxanfi3hyizyhiUrKX25yuaXj0cTkXC1/OQizUeI9oOPHvyo5ViqQ6Rzlq/C/X0xlBp6Wj8oC2RL8xRdmSfpMgwhfceQ3uysZZ1udN+mvKnVtAi2K2iy5beVsjiV4FFN1Y+7Xl2tANyqVcN9ZT8BxKeq5V51+qHF0mSZ7CK2JBzLaKidInmKpACrfwc/LoXzXKGuTxKtcZt/Bu5KBtjCt79tIPUFfrxR6ggBxaxL5rH62ejtm+CotyziIeHo7F9sz8TUIrAL2UzQe8asVY9yIiquT20Uu9DUuqJHNYpz57jOeRbvyY9NfOgO8pq8LySxDyl3X2emoDmHlSjVZEg9KvkkmxGt+9+ZMgjMzyrHD9XwSeO3dFwiWY+z/5ixAQ==';const _IH='5a70acab18e10e34190baa03e0e72d24e3b19d9fb7bc66d62af670a6d6e14e64';let _src;

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
