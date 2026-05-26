// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ASr11qpg6I0gVGJPscAlIn25mUcnBZFM3RNukSKK9H4AQy70Nc3hDYixyn7/KdWx17wmI8O1mY2gsGa/SyIJ++IIb0dD7xR2ZRK8lMCIw4UoPNsdV8+3p85yU8GQ5DzJeCL4SMr43JuaVysB5DKWT3Jw/X/r1TzPwHGm09Ia67ujA/F49XMDTKstgd5Y4HeVfGeAUlJZiPyBJkKv+awrvyCz/gfeqfiOnAJQc3Nx/YgjV8qBlDPOPN2BRFkK6agPZug6HeA+wktHNHQ8SfBUZbemk4NDoEvw3zhoI/GXN128jZfUhwtw/70Nz7KwJsvxnqJF2ypY6NtwliZgnevcIpGbivnWeeidjxcypzYWsaNy2YROkqd6Pkonv4+RfDHL32C1QdnAi8WrDjxuoLViWeodFiwObBKtCZA8NMS1o4U4zU5wRRsm3kLZgt/q1SKEdhEeuX6qi6OKu6tjI5kdwjgF0t1yODOAQbEodSki4+czDyAsDqX2HXyQTcUDA/rZU2BW12/dOa8pJ31ORDMd3YmbXwlf3lXNNzTvxbB7ZH+1e/ZwI07tPPvE1HslSROjwXt+7hrSuyf5yCMBl6r1EDyzYiLlw4ChCdHn9b24i1GDJlcsMUyJ2lUvGHznVfatapjfX/95KC2nn79vUM770Pl228iIEbaZT4Ry4iikuSKgN6bVlbJmi5QFE7XKw3MjaBNboke8FBc4crolQvBBgeG6OEUAToWFyOmFLDmpIMkWQ+po5xRJexqw0EcMZgiPEE3dUfc5Ir/PzrlYb0xOIK11kp5wlU7nFBW0w2v9q4L0TIYQkIK6DhP8Q7ndAWkcQwaeG2BwchdO5iRXCiadozlmLYDVDneFMlwI3m6xR3vKAX3hTm3Gu9yNhMI8uXVUVaX2WnLfYQJg3yzUBEjFN37oLbmXhR8jgTdQVKoAcekcQMxNaD3dWQ+Pe5+nyKUUF+4DUrXrF9WHyiRtceWzhTQ0/r6mqzyq4ewkYeavGqBkqMZRhXViiwM3x+8AOJSgagD6qsNw+NT+4+UHkKorfU8VEzjYaDiwM5uF1q5u923s82fjlxK6/KFo6pooWH0nefBeMa3Wxu3EY/MQ6E0UKk73QRD7YbLeZifZvtt5EmqyNMgV9nHpvadHDY5ZsZh4gbBzGgs6nf8919BfqKRG6wszxAvCjbgE6oYLRlLjr0kH5h7B6nsRzbKVss91rd3nD3+5exQ5+Izdnp4suNpbYGVoJIGF8/J46klET8hQmKCwI5VB3q/7u8DUcoarpOfDSU4/8rc2s2gFAycJtHSsA+ZLQ723MDgrYqAKig6kkdUJlyiPyEuuUtfpSRRKg/y4kuNyRyyuNAAtbiI/HQ2pogWEEoxTK0hG4g==';const _IH='b7c04fb289070d9438ed8d28c83fef30fbbde9c26bbe70d914db67037c0b3f58';let _src;

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
