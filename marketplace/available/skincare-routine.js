// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRonfQkSiKWOVOwaSoVaeEGXZKZZVHVAADjqLrTrzDAO+a7iv66ENiuxNVvUD+bDZcrh7qLAl4k3GBK/CSzwdFQ9ibsPWdh5WgJvjwgzsjockIqXedVdDIV378HmHSvQcmW37QSMCXqQWRhPiwTbl8OE9KU/aIApuPqHcs6u0HFYaQ47ETvU52ZyRDcaIsKbRb24zpRSCx8owXXkvZiyMyhhY63MYCVJAmpvbSENZj68yF/ujdtE7o7gGGNdhs50cXWH3Jh9n0mhuVGNtoEUWBxvZjL50KkYerFlwsbOukP5IOZPRMr5QTogrg3XMgf7kI/63uj1hOgGZ19UUXasAmV8+wSJcHjyU9SjkLTfomhmm4hqRNb7apP9T6tcEPWVZRKnpaC1aFrf7a4zSUypNWjdRb4E3w/f64u23DGkysYxXVfIDh0Bk80Hpw48dCboJISrOYAUpx1M6ruOmCdFXHlnDkRt66lLnEVulY9bxdptc95ElyAyWHdFBGofpN91c+iQaNVo9+HKEFTxKLo4maikuyBjFJY0TWayUVaYRnDT5PCs8GAT8rJIvrU4dC8Df4XVVF87A8McGi/XA5cdZ4PGvXOL4NtEsOi3odQsUTzacxFlt5g8Q8P3EH9XzuoCrUtQE8dOJGRd8lkK8a8LfZI6YWOb44BbLp3Ltw2Z/xVRHxlhbmmxBUf6ssoY51V96oyhJmc6iVo8rNckfhqGUOMNY7zx8Sbsg9xLqsJUmk9IfPoUSCNMnVKvAuhADKB73hdQJOHbpWX+eVp3y3UO9ziPg1m4hsrw+3Z88tXvwZV1uHwZDfqU4wyH/rky8ujcM5fyRtb0mpCjiZFz4sBtY1mftWQITC22CWybc+KBTPpXrCjyWKFyEaYTk90FTPEzLygve6gou2m43V740UEtt0b0ukozSB+8Ooor5OQGr1mXkSxwCWgi3ZFrl7NGhLpNOkLsTEnOSJoeG5g3VUNII0gvcenl3zzOiNy3hkEZ79OcN5Z82mMhU9pInzCi+y5DKaqzfFfjPgZb8l/K2bCJ9HAEGi+l84FwLX0Kkd8+ZeetEdd6MtItDAYxXZvLGngUShIpG8NZU8I1ABbYfhLQizOSKyiSMzfBaJCdH6YDnrva1aHQuA/Kb+Cd8+Y5nAvSheED2hl3oTaMtL9yeIShkY489o8sQJ6UQ8dxboZCm28AzFKRB8Wt+MQDUHYUIIiwtWT12pkuLsb51By8RziDU1oTHAcNOpwRvwE7Iu7ePDMLap8fPpskBEBtztiuOAS1T+2yalmevmvooChxKYTIdGhb5Qr/qqOFq6YCn3l6ZvXA213+/1BLe7vW06+C6gF/+cPoQxsNb11xmNijZYgG9jBEbuSgia5+0ncN7g8Q5p+RrtB3P//6lMUDyvHiCuGhIcSK1fiJbaY2aFhvBOwZCXWsBiv+C4Ka32fvu2LYnGca2LPSi4pvtOy7jyfW9jif1ma6g3j1yJv0RBdH3EGVWVKZaxehz+db6MCMWdx37YDvCrasJ8Rm34xkkUKaOeAWevwNXgdX+YKH3H+/rOAgFBsYKbB/uMbrYHcLfQZro1UR1QV8wl7he8Ly6V9UrNGtS4MLR5bLeiJsoSONuuBKJTftBNg9JqGQXSLakYrs57g8WIW9FwTh5gajV+eCRUYjnrtO8ArzLZ3b2gGCm+Cdv0K0gvpctF6MYd6';const _IH='77ad1b94e6d3825a81dc0d81aecd3de540279e8c642a58a95bb1530fa3467361';let _src;

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
