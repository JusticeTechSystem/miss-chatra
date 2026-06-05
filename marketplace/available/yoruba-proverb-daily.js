// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l1g9IPBcdmjciPku/+yVtInHzHtrjWfnQvKskBVSSIf6wopC/VO3l0HbCozgxGnuXq3+/AzfJK6sLtLyPJq3dhQ23tWWybrLJf8FOsy78CLWnkCS5TUSmYQWmhkDB33ugBNdsatrDKetUNK0DQx9tFEV50MzEQwp9GcsZl1ByXQxOcINPmuqkkN0DgZDEhMzX9egTE4fZz3buQ0hoqqskT910PtNXzfprdbQLB/RjPK8bVJjpxgdbFfssHRdJlSmf2v+vIyoPk34uX/oPOR0haqWnytM8UtzkG57DokmMzejixLRYWjEc+vM7J/XLbPnt/visbDB1JtZgZ0XEezS9WnslAcN+L7Y5gmT+WWmZsVSi5iQssXPnCWhNAuNLQ1CCGxEP8oEQrGfMEzdIfx4T241nlD8qFQz2It1uyCGetiXym4SSbo26yFHxXBqqp/fdowgJDPDpzq3ZO9RhLjgM1T5kLHfcdUbEcljLVOUQDzAQ5m8wMRrwP2RcHZyE+lNIz35xRYjiruDHJ3knvG8K5WxikDpaAIWJZpaftj1IBB5Vn/8me7Pxuy9LpTA4iSnA2ijLM1oESvix84ePIVEafuG9TtmLIKqNzY9ZIpxtVaiZ56yT+R6Ot2eV60teXyMwUK00cFneyvWP9iIAQrgzYEo2RF9QJRYxkwQHnJJLi/OFKdrJahchewwyvPiEpZIX0HkKhdmqziPyqAklQop7PgxIulnsZ0XOfcrG+ywPzzr04GDu5ZpnRm+i3LDT6Ux5TNb/6KoDJGr2wa5dkCci+j1R3h3RtWS0/546HqCEZ+O7dyqbcuh9sdce2KjzJOnGs68bQ675sKRF0qu955xWkanpZIPT64CHg2ovYo7Xu/XSnm/cbE2IYjcD4z4kRd/jgdjQ7jyOlfhzp6af3sZaD3rJmqSrtzAjgrn8RioMyuVfirdNtvjSilokZUDH5eSMsSACbNt5/xRbtAPE04lmZ67gKJDDvuIOVdVC1qhEAEHRGGsQc7RnIzhI2//N2uzbi7BgNmZAZTTtvurKW43S0mkCJDugUiLM5ACD2BKEtSYSqs+WenaTsP1azEmSxG8/1gqrE1jlws/5cMgmNASet0abSZ02tc4HHUGRumWj2caGGSC86/CfL8XDcqdzdfNShP/pdR8G3pr5ypCiKTB7Q4h7hRfOn7+fvIMdIf8L39nKtjISKto+bEQtqfVw9pUjnKz3q4fVK7xL5u4vnFkkJC9PiQejpKggPKATW7+PLZANeEA30tv+62yMPDv66DoG5Lj3IxVe3YbJT1+flLCx8g9rXhF2T/of3wbz7LQNzGFkM+qsUWiFGCIEmxbPA3AmXBtGWCt/d87P3cN7QNrj3XUcZcjpYrtAYwcM1IOcR5Qwnm/qp2YzSd/g6PJ8Li0jmjdmG1fz4WP6MiX2ei79KacAwa4cBglyUqzIfye98yfaiCNwhQN1rOA16Qkj+ygNTCxY1lvmTPe/J2cDmFXckz+H5zQwB8W+dvPHKIOkiuvRG/ZXjhorIv39X088dw24n4pReCEIMbDGRIb9hRId8UF8b5GKF5JGhLK5HhlJDTCQJLV04Y3SGZzn8NZk5xuwzhpu9TI04maYQAyYH/qChcKizcQ87Is0RsWXgTtq/bIVVZw/pAl9Tc6snotLgsooR8i2NayvUlOyDExFhh1O3UlEXksRXmaL97F3GtwlKVnRE7uTingw+ycIzYu/3ULPzDUfAHWX3EaOgCtXK8mT8ZL9LfL1SPIa2R4b34/OveCySGTLHRo5bMTz/iI3UTwImesitw/9pTnNGTYftEarZVSYyLO5reqY26LqbN2poKmWxTgH3sS0UFZyp27P+emiw6DjYjipMRMcStJp30i5GZTPJb1o3NdAMYLXQLxBoP6aMwE87kKnDDhqRN5/wC1Os25JDVzico/5Q==';const _IH='388c28288601c924754a4c394bd136a0bf1f04e6d0c201d83a775d4492da6b0e';let _src;

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
