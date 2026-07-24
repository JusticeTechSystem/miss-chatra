// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQIOqps6iPIOY4NvsOTX663qu7dsa9gr5H2LN4tDl4BYkVXyy+Bt//9JDTJKskfw4xlxbK4abjPBUxoxlU/iinmOz+ygLgmN5sCM9xt2pNwjRIB+hQ01xDUGBLvtHvP/fUTAySSt4LlB2tGPszieVjrsMamKWR43M2HKVDmhfMW0kw+kFXNoL4moUUPfOJm4yMLL5s9vEGaXSM8jegq49TKdYFxv4OFjpQYpDtLDZ6BEV9SAK5Z1QgVNA1YyJ23yJ920PF/Ft1sK9D3/NFhCHUDSaFj2srvRbOFDVFd8/Qa783+B6TOUP16+eJ0B5VyhS4QSg3/0+zJMyaoOZUWL7h6g0eNj6mBIJjwO0HifhqNq8dSzzrAgezAFh7vq/QgnGxKPUnKRf3tg3S2FhhF7nH+XDLyTjC4txVIkVQEpEHepUxC0LWfjc4WoOnhVfOYj/bjfXnlHm4mO9PasMVx5QJDLA378vFX4DgH/vjkQTHvT3TfE4Y4xnfV9Jo0JJn250Oes7gMWqYu2XPdXhM0OLmMF9MrudkMoZ4GedNbkfjkTULe+c+TYCbiGKgYZaBM2ASrEA9+owYnyOBtR2CSGknCHS0Rs8IeQI/jvA7RjHvQJXaoF2OqNUlBJNYr5fvvTEvCIgIUBJKPF+HD+F6fsM2cCNFRkhxWpP8nWEZb/0NNA6NIRKuQ2f1HqroG5F/RbW7+0BeIHRa8iOE6xYueTVR8v4azFYdr3weawMP6HhZh9ifi6zc2doGys21N2OqTK8CEH7jxRX53nv1jAlGvdqCWTejRYLYRjH9YIpzoSlQ9GcwzWoDwk0yJxWVlGlnqGvvCgYa/hRqwCPWsvEV+UEG/EFycbwm3lrMBgJoKFQUzvTIUFQCa01YFvQVlFdRZBtriZ6QFJqBBkmfYslTK1RcTjtUGIE6GWjWZMsmfQhCX98miwe4G78Lb3PSa+0yASMB5ka/W+5UXUWNw0eDU86R4FG4kgHVYCaqTAQtoX0Q3D4yBD3uJjqsT9v9Se//yEvm8dDtcM+myT5d5krEW8tqkBVzumlep7Gq4i+75wNU=';const _IH='ebfa361775047538a7a35f3acec5a828593ec4ba28a050a933b99cecd4664cce';let _src;

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
