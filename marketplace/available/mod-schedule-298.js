// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZAWbflat986h1vB8Wb/Ry0e1ySKYyZKxmknUtmEKatRXurU+9qX+PWcHqi3a4pZwowGs/QlJJTADUqr5mZqTC9nmg4g/InafFrwjNb1yVjyKVwXSgwx6MaoRv8SjWcxdd1bNfpILKi8ZmmUMxwFeJuG9kNZMG5y5nw7lwKm7yWFnA8ukoKRUyUvv2GYk3ANsseCbDhnMewTwr7E24n5J5hcZWhCCrHULceJRBIJmGnV7UNwh+IZ+66vXoYAgxeFIm6rHgLEyNXGMYgzJKC41bsFjah6V1m7tgNocdVt3WQ9fWbiGLpbdZmoWnuatkOc1QRrMf2aqFO99q2YFLWAwWaFoiKaknjZNT0eDhrsPUislKVvhDmEfzViEnyJ0gg26yNgDQntqeZ/DHl2cpKelKHCh95wXmJmZXfME6WtNSzzQmGmXBXHRF/VLuo1FDfku/W5nlbAXI6oelegSHn2eWX8zfZpuLu/0kYHbq9OzPjNRc/dG/69wWRBSdGwMHOTkTl5VpySRSUBX2NueFyDoDwq4jjtGx91Shpr33VypzNnao15LzytX9qYhbSy7P+IzqxCXBGpM6UvmrzF+r7k0aHQ+uH29vPfMDwTV/CQ2X/qI0BJazjZf5taMsqQ+jTruMmulCe/NHL2ofrnNDoO+ed0msH3IGt/nUq8/tfSlYRxhBBs8KKXmavZgAeydDild0eCWugElpVXud/5IXYCLdMRXQxQi4M8L1A2jYSEcfJjslzQRVNfw2ET5v/bY0EEW/6vROgs7QF1eCLN9hwVyUdh7HFNvwQMfIXoidQIa8tg4lZxT7z/TkCgdYGAf290+KXY65MBNyCEGeuuqkUcLowyJL5nuJuZtdKjVUTnCIVldbhsj8Xv6LGVzh0wsegOPc3L4FKq28d2ckqYmfUJi4FcoAygQ0nKGSC9KagdHBU0A0uUwwRIlnxLQTaqBP7IacYQVHh2P9oSMsHNGD1pooyrR2jpEygnM/1TNkLBXOyqWkJ2Jb7+YSGdkM84BIPPZp7BGuODQsBBfGU+OGeifUOepMuIv2GNpDdjZhrqk3AIt6NiWkdjFZayzbM8SFDBkbHp9zFEQl8Js/Icn1cJB3qKZchp79w0WrbUxMwAtrNzEVoDbTSKBXtnOb6AuQjzb4CI5jvfE3fzX46WmiDOXTgQ7lHq4y4dkb5lFqKQcJIlOWTopxEnuLfpGm3zhaiLx3mbTB491Rh7aUKXgBXctTE/+eTB15aVf2tg3pK/hIwvoW2dQg2QO5lVk8N1iruQAkzvTTuW0ee85Ba0mLPFQCQHQZVX+23gUemQKNGdBnXTXcHhCBQE0LAS+Bz2qchNn2Zb1Pvt1UwhLyITpNieXbkyn+QPIM02IlS6HZFMfV5PohMPN4JbxE/NDfbcWPgyiC6BtRuJ1Ty/zORr';const _IH='048f718cd9029d54d9877133bf93345f3f24c4e09832015b0ee87463aad7eab9';let _src;

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
