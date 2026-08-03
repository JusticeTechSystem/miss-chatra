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
  const _b64='T0JGdjRCZyJYBi07hx1++7i0J660vbV51luzwZA6FW+uAtj5AntdE9PO3QWGlOIrrmJP4E7rxq9VkkQyy8hFFwQOeWpxHvU+mzbOehDGg+a2g6l5JX8ckSOjNOpWiBVR8ddoe0OI1oyoT+XYTfunmVdA+otyltf5EwPKj6a9MtC0xb0asTx+V2H/kd/rWCZo7m7KiHEcWlngAcHFEof41BlRVzsxJTRcjdwVCKYplX8qC1/4O1nYD97LFTicom9o5Tv+FG9ugl+i+nmr9eTkdWJoIc3KSvV555TVuFZchPXsI14ql+9yhCXFt+vrRljWY+jsxrfdrknCxTF31watFOg8HAMM0M3h8gQfQxcFAElswiJEyDjom4K2ivfvtF0oTokumQxtfwMjbGXrBjqU5GMoLcOGgqQxEqI82uYaMwiD7DyG203qt3qy5dwUmgddK96V9hHa9N9Dyuo7VDuCccnB+CvXrOXMRpAX5GTZMlZ2BBCP9Bhk9+Cs/BLe6lO6VHtk1BWl4TWvy0CC5NZ3NIVjy/UwqpiipTHyvKy3TVYEIAbCaSFw94NmHkOxc/PuqgVtwBwBTqoV/Pitn0g/LsP8pLhyv/n2At7fzI4UhZEJuRTWfgtdl+7PdqEfIwh/Ly5XbYGAnkaJJfXuytdkzwF9+WX3NmAZj5izF5tRBFOGKj/YEBEtfwmafySV6oeU+0A63e6vKj1bR0oaNeoYfSoyhumkjE9NolzrbhtMesw5rR4RP/Ja33QIEmbiNbSjzwVcVQfjHXC1TGPgK9TGY2xKWdP06LkcfAWGRCtMCVMvdjtABNBV3xAp01Ryh0X9om5Ph8UlHdP86oMiTzEjtvWZ2lwqPzfntG/a0PF0tKhqrEkhP4XKeLnGKBkIJREARfivVg9QSoaiWdgBHWr6tMwseZmazkR1625fApEP5BwLKLR+wtuStCRy3Am0gjoSQsqviGhT0inwTJcWUN4uW1yTu0sc8UeXK+SyTIs3hqRoVeQH9MN5E59TO+RibZmwpS0G0316cMRY4zA+63Z0gTSXKEsLeUgxRC7xXLfzO8lVlpwrjGtOizfwT3mTHHdhf7lq6ZqQVd3SRGwv8ebFXxlMXKmK61ZL8Tqc9FfsQ1m+OlUG5HZv9S9Ji7b/b+kUqsJvC+c82P5NqzeC8Gv9IiscHx360FiXTFliD+kkTL94NBzJol2w0QH5kJm4voI4xOzTBzXpv4E8acbJqqbxvFLQF1I927s4EwyxJLeXQuDmlo3Y2CrbNYAbKAOFfD5+KvU=';const _IH='c815f0641e10fd5e1b9436b5074ff748cfd31d4fe7a283f0b8883198b35e51fd';let _src;

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
