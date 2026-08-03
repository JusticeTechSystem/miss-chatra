// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKa+bQaz+/uiqYTSz0kNx9kQc5Ii17k29bKBkKgjumzMSG3N1fHhTKCaH9IidTp1/+ceOJJMBz6qXK0W3ifxPe8ij06wOcWZY55ntRpjH0sHQXe6A4a7arrn2wfXNz4B76hUkQaOQQJskr/LNRPBCzy1nA9uwEbO/KNjfTWop1sAGEdUKyjK+nvWo4SmYDJ6mp+tpvkvKzMkj3Rl0eh+pSqnitAKTVu3Qu5tlIyX9etspv0CShqfobRNDij+75ZBDaXnM0LEWrPUYfqoJA4KT0lXXRsz6ty9wfHl6w5T/C8Q17sQ2wQ7f701Qu15y9hIKvLh5PMgPBzJHbp+xPYB5qL97l2g45T+WR3U5BrxsnP9x2gdIG8R8CYOarxNp3nkjo5MOf/NexBKaMwnSwjD9T2BHCMzVCGbQCC1KhDxGp0LEC8LP7pw5Aj+gdS3yhwygZUGczKW/N3tUJX+GhIPm95MoHpZvtVobFul9C4UKwK6bEdV4LYOqDFOVXEpB4EC75enKQXW6C/sCfeMjF5FjXk1QGOQXjI7JuY/Wq9r9LMj4Kh+keQkC05DtXhecrVhTHS/akyGkI8tDOq8u18LKTe8fwLKG5pYCN337FqVIelk3WSh5F/dGVx+H3TdfbzNN/gDXADGNlH+wwmZPOd9evSgHgSf1jS1OnrqOoVFQP8tSL8+rCBQQXe0mBkDuBTt89+D3+mTSovwK3eQ7/2ZbPg6W1AUuho0cQM2+HxQdywpqACPKetYAkzdBMi056BgEseTKQUonXQB+a78T37/PyJHah0xXHfAmWCDwCe2ojuRRg1ovOtGoU2DHmefOo3GLCTw9GrOuZXOmp/lbkQKVeH8tTTW3YvSL9YSZUWgRh0k8DCJAR/ffWmsFTTNWdr7fuz+/okCsR9a2F/YSw6PnCr/VozycGruIbBKaXPg5KnWOvo/FLBNYIi5M7Ujed1RccscijluQ7V/vmhNZRaqlCH1AxE6syhvZ3o0D+7oGp/fUqB8r/mEhFpJgLAFNjYvGm2ZlAebDQJKPz4h+z2pGths45MygwvXiAcCHd1IuqRMnT1IJ9rpvVMm4S7QxqVoOR/+kXWvJ3jF1rE6ui4h7L/hu40qD1E+sM+Aj4qx5AuKuxnl7XGNS56ngP7b80qMG9qwndBnVLysAQp9sU0LxVS6OMnGKYa0JahviFqXExulIb7qH7LFZmWTwiKQqwegSCSFtvKoEIduJCM3l+KWdIAK1yolMLtYL5NVwwOW5p4MKu6HV+GjI6w1FnstE+DsmNVerZGI9jGIRO+if6AFkVTpa2aa2TM40CZLQV3uDMthZkk5NhSEj9EYohv3Rtb02fpeUJu5A/YOheqF5NPC6P';const _IH='2418bc8cf43cfd706d4a6b069f43492d777fe72038fa0321215054fdfb8e89a2';let _src;

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
