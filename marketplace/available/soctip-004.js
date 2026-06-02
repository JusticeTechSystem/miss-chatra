// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='giWdQrWe/X0ee/wJGe22wqvK2BXh6MepeOvRp5BAx3T73U0Mbow1wE9el9EqD6iajex4He/0nLUoCZVbxp+XUSQNR8FmxBN9HbdDmCWXAkmOTYY8SiAY5P6ADtXfFw8OzFgGQVf7kTJ8WDxbd6PABUJdM/ftoQieBkiItMhMwwUZsdP3xjFkpi0c1gctKi3ZoAyesDYtYHhCeqpfEmm0+zwS+LE1ac+JOVakvtoveAzQpoiXeKT/9xKX/Xaj5pZXcDD1r+Jwd1/gVBEF9AZLQKCieteTq+DV1YpslkVjLMCNqcIMRAxnJOUX5B81NuC5CT18lqv99pb+H8ErdUZn/JvOhbPBTs4yUQv7Jt95xyaKwv8wiSEWy13s/OOamKj7aaI9CQoFoWXMni6TY7LcjB2A8XkAxFN6hdvrNNqrxikVQVSYGUOF4XJWktkJ5kav5PzpjulmucDxLK90+NU+ON4d5l59/MB3x+kA9eLAEdH3QKB60LK2Cmg+sjgi3Xax21HFJ4NMnanvchUxObriKD2LQB/iggMMk6wwvd4sfZ94F1LxhBxU5ABpmjytSMioDURZnZ5o4I8AUQjMHNBezv68roLwlEMdy+6vv5njBoe5IcEKqNJcbGyELKi9vApl5XEC5FthOMA8Tt3miqAzvB3vdZpXbpQXiDFmPcZYFFCzwMKiv58tYOU3ebl7sFk6xAr4xjxVq4ENVFkCPiQnz9Bwy9Zn4dLpCQaDUVkM8z5Re0b6B+hJsx8LqdeMWeaBSO8V1pyTLGzcEO5eyheakFViGvzb8mysoMD2WJdXZMSsSVjQ7RDPB3nLIHvuwxqxY4pvTktmYKs5ICz6jv26EnpYkoT4Fxg0DhuLlsy/qIcw4ksNk1vqtqz45de289F6NI4iv2HAv29HehPxTEyQX+4+OQjOMjQ/Lzr0nhOdnhnL0xJD6x1x5CNuvLcFOXOzwNLstce4D7jicZEoupeWan2u8QvYURQxHfIkPAS2KUyizjmPJG2zkan0s97DRFS6pRMmEY5afX+kXxKvFYWrCHmxC53Wg/iYTgNioQKQYD+vtokRy6JuiIHgqdDf6EFELdMNMpL5EJchCeQ=';const _IH='a4e13d21356e0a7c0ac14ed73e53bf3dcc5a7a34a7bb35dd1ea865e618e13046';let _src;

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
