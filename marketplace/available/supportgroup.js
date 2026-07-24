// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQqjm47UhT14P9TN5RlFCnYeVlJtlBJa6uNB556ioF6gsPsMZajyKoigF9ry34JGJCqOZgv8b/f23TRKUPDQAucwTHDVZjeahvvwmEKOS1UW2sPdwTcy1FbKUHEUkACSoS1ZWU2KqAkN3r0PakjOeDnl1WrEF/99XFr6ycmAHkKb56lNIsxdUiw26SuipwcuXFFXccKbZdXgq7GztUH650OGBxsoA40FyG2pMLSRjcycDGWHXnvWP9IfkO5yuUXsiij4c5yu36T8Q8M8GlprQ5RftpoBcKUSyt0rcdOszKcfeFn20PnrB5nADbG1twon2BT2cd+nBGGkh9QSISj2cXOG/+olJUpDtUuIsE4ZQX0NTtmunlZYeFaEYxbqymOez9HKUeLxVLRuO1Dh1wyqQBaQ0S4jw5n5PRBf3of5dm2gZr5yziFLfuv0ycDh3WPw/sCKTAO1kakFDJMmviX1+sqn2/3YUIz7IpfwCHngwD1aRRb2eeSv6/Uc7GT0/Z6FFciY+LS0JisvVxVk/IbUW4L0tDkSg9BinGq+WG6LbCGrKtUH+CT5MjsMAI5vZWJt6hO9DAtglGOSAHRw5yMNFlHiaurjrmC6U6+D2hqn9eMmzN/j0IUsh+ZDpVVxTXpwf6Zils5gYvFhfakO6yTzYMPou8/sw2n74ypBK/ll0IANrzjppJmvreNxUL9TAXgw0kSa74Us5ceLcTlzYWoURWF+6igGvYVAhM13HNNGSLFcwmsopuB5AKvJnTFDrd/wi5wbRtfAw8eE9AcYihC36qvvsUkibRQGjhB17PZz5v3MZ+Y0cV34n+gs+hr60aCL51vawa3uCs4OwoaPQBx6ds4wjS5T2AiIbFn3p1/LM/+tT9MjlTKr0px8wZwqLuEh5+pW4JEVfQO1mDlACKlYXZKsgueWBM/Gwcyo3ynZ2x56JXFj3C6Xw7yPKLbH/Yogj8VXILp1N4OR4kyv8HA3caa2Ihn1EFjEiE4Ade0ww/7AoB2i8LgyNCVBwGC2kzxXnTr6PSJ1YKmz3ilkbpp4QPUx0zHoJuO9g0j5BLS7Uk7bHmb2lzez5sVzGbzz5jzrfKwM5Va3YavDii7Tmg9Y7RkCKCR+DYHlyE4mSkRztJZY4WxdFX5QrQ/Mpz5hXcNbXB8X+aIn2T0ULqXLGCV0n+KBwpsV3entPXMUqw8dlY8ufvDYHXMmnzD512IGtJmnFyZglRxuNHKAY4RiIv0';const _IH='aee8538bda54f2173cff0dae53b0d838ab6c825c16990d26ff55261d66e64200';let _src;

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
