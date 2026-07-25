// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBeIIv/3Bl6lMY8qTV6sVjaGiYQAhRrEIUZuYloodVWK5INgCJtP//PHa3PorDDTAfOLbcWpB/QgQKuoD1moI34yESNLabBwNv1O0vFYmJb+tZajp1b1oHHPw+l7NMS6zYwb5tKO60IMlAwzukgnj49ZxV/BJu/Wa/VKwXlryaIdTwGi7yi9CbPFYXcIoHR7kUTk/GxBSX8/f1G9gKoNRlj8KpO5rmxSzFjSgV11WCQlc/HLRtQbVftgNk4kd388huI/EXisbmu2hQrYxAxx7EK34YQmRA7w40feEXQr1boBFyTakllERAFMai6BF2Opa62lsRFsg8JnvwwNiRgptxkrkBzf5KVF/KdQVmnumi34dwuN2vM+YXEudPT7G7SKPvZNprZatuYzsPpN6Ki9zQf7I8jJmazL+OXy7wkmac91FwVsRCIs7ioNUE5FuPJbqYMeRlkIfPDSazF+SI2bCybra6fyqoVJzhZYmNZ7TdPqKV+ABNGGNIPlHDNJxFj5/sSRHPH7GSl80l0aMxZUmpWh9P6gk/nAuNquCr9vJIV56bZBaCw/UvyqwdRz8VIU6ufYrqHV/RusrweOMZ991+c7eUs4rZoY/GlnxVkQ2d8IotelzPK0EpYhZnT4bGKe17/G5UIkN0eFFiY+ChIWSvAPxY0Yg53qyVz6zwdeCrdvQrX5c4BGKzjw63hlBnEwvxGgkSHBDSyCwFIoCcBxWrh4AoJgCIXo3kUJhZeFcOdlz/5vcO5SHq/2EOR2jHfJ8VnaoMTJb7yZSVZVxdxx4BowGkDg/GRSmA0rK9MycAHY98R2e/KPQmQBt3a9kYsQ+V829IQS1JQ/nSPDHs56UaXeKP48tnXFJOQwphQmksmZ5VM4znt5ZmCgjqZlHTLfGDNG1m5cVug0sLlIb2gIvECV++fJtLq+CKR9pNfkMCjRopjd6MWi8tw0OKOOMYtFVzgshufzvTpH9L8R+a8mHkzKcg9LL6kzg2bmxxv/1Z0fRcdbtaExPhRG75NELYBzqhKkF5s7XjpebDzi4RWpz4No4w7d0qasidiuVbLyrHHpGy0RTn5O+jlj0gZZSn7gOLSi7JdYg14Ij4hE/JLW4z9Qqpm0LCbLsBnc5XNOPAT9Gtk2+3y7KWWmcatUT9UJaKbYkkQamY9xLS4dJyqeA9sRWXZPECpVEkiX7+h2lzzHX1iSC2HhKKBBh2qFlY6fyNSeG/o/gcbilrOc2A0no3yqHLRXI7x8lBCF5I93VBa/yP6+dBFsvfp9M77zPp9q4Rx2CcBjLQbVEYys9TNrPUn3zkxXZN69WOoBgoKNz8ml1J7Iygtw98aWy7JLQkgpqXgq24qaQfJH6Q0MgrRFCmlcAm34BV7/WAEJvc5Og=';const _IH='c809299396fbf80305a6a34fe04f19667418dd879b336d5dcb7df80a0c252ee7';let _src;

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
