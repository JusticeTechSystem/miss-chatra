// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9h9eXDzFOUr9JVFeRmRIQ5Ddn2tkrS9zHt8Njq/tWsKkllwju6YT8yT4AWqWae//xa//Lpk9GdGUaL9YOFHaTTtvR3Iss3Czj6iwU8nvkaXn7OwIpPh3VOOvLA9nMYBVrBs78KI5ahyNNvfkMwr78UC8izSv40Ec1BmfvQXNtUbNqaYzwGKEuCAAuwM4WSnaDhRiK1eF6+U6U+eDSf3aIdABgLqtN8AoXsiPSFx7zAT9cWCbVAp/N2816/XVMoi81B+B/GyXJtjA/OAtSNjYWdNbBeN+9+9QrNgrLXZB/ZhO/UT060Xa19TmJZeMfgaqoKLJ+Vq0NVUZkGBV0fCbxj/3Cx5WuBQtS6Y8wXFWhXMpOfvaC81EpEGzEUrD6CyDRkfwd9FVkoKx1xiXmoJDRNvyq4gMs5WJFzByu2/y4ZMYuU3j9hL1x8SJsaKsBhPG7w9oZNegdmN8DyO86ad9BD3pLhgu3zL5ba3XeFsLFGkb5Wrd+a+Eg7dt9PjRqICfrZAM98A8I/jMqYvWoQnHf4WAF9sQCl+kq9efkdq4beFj/KrrzuERYerT51kjhcGnf4KY=';const _IH='c69a4d6cbeefe992a6937a3d7a19e922889fa18f8f239744c91d27c65e4aead4';let _src;

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
