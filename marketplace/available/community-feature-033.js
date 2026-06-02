// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NQz/ND8mpviHehVhSDDOePOtfAd2GHJW7yFhMFoCA8n+KAcmEW7iQh4lEJD4Cp705ayZAexEEnpTblILbhZjIjDXOukj0WwC2wpTRPwpCqoAy9K7B/vscdusZJEoRy6g2Bq2AyM5OF+kRWj5ipv/GBFh4vI8vJOTs0wK1AM9TNXNHYl03HJXqeeUu4dGA6gN5vdV8SumMMdq+iGExf1HdUc0Yc3Q96FfyunRbZ6+498YO5s2VlhwWMryfB3syqdyyZcehR56/vGrdU100AIPBm4kDJsWuCaIpTJfjeoI+toae1pz3iDHi2vRhrsRmSPw9wcsdnhSSn+E6y7KVG2g4CeLsD4/X1AcCUWXSg2z4Jq6QYQ3EIN9FSYevKVpacoxcCaS0VUOnHvgfD5iF3JlCxtFsR3ILxkh4Dl9NwriuVh9iPqANfgduHu+LhOQNz7bxO+Ui4LC4gHkKWULDc0e/qkG+t/FdWQtnKmALmFR8BkqR8KyS7OqtrEX39nI3IIJ7g/18lcv411loXaJ5oQedHXsP96pUqkkxbJz1CdPoZ0b9LxHMW7BGVhQi+sQkxidPgBE4C6sMToXmW1YH6Oyiy3LfhulvSbnIHknv9Csm0ZzNA37zjdnPTMEelTYkEhy2n2BYMk5Jjsa1X6ah67+oOHxfoZQ6lhsuszaxWnE3IgEBCk7YcdWd9W9WRHDQvH4ZdR8m23gN0MgnU0ADlis47nDwFSY/oqCjQ==';const _IH='0cf351419685c6d70795742f1fb1a3be041d66f3b1aeb9d1afd85c49620eb5d4';let _src;

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
