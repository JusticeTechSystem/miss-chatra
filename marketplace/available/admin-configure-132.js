// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gA9FWzb+o3RGKGxv62Ynvh8nNYkCArm7nTzlIol7+MOnwZBllo02I8M8pVh7XSpfwYIq2zgIPeZPEzjLhbPdbRKJFhQESx5t8DlnqwXPLOhjAmgt1uqiyZyY1nzxVdzMQQ4fU4U1EUfBwNIGMJpt7gBck+6Zo5U9etdqu6MD3+TstTCHUjrOKhqwNu1eaJ/jUl+Upx/xFPtjrMQCMYXqlCJ3pQrouhJJJ7Z5mbxbwrrL/JPRuPZPyAHqTovaEEgejkfN8J9BON7UgtpqI/l7L8mJcgwZNEwylhLhWZspB+PYUeIha4Nn+puMXo46KUDctf3Zj/Sg9UZSgWB6kZR5SsBfL+AgF71DM3UpVeOOFLLqmgsjugWYexn/KPxtv0YhjJ9qCL/dnihYKQXK0G9e1gh9NOfCKuyV6xy4sWK4LSg6Ipay5eh9UxGB5nWFdJIu+aAZNejBF1CG1//+8bsaxDPI9X/ME28P3QCOwYOUUsFBqQ5UZXhNyDUm+7LWmZ/y/l83g+3WoY3kUBQCr0t9FRetypW86Vz0cCaMN2dbWQXNY3bBUU+2RW3yRCSXZMw5OCgEtkL66DuKZrQc2SkE5a7FpBgsjFun12ecefZLI9myuro5MGdglZm/0ibMUDfxud32ZQvGHb186fsYz6Lfm5ZQuieDhWbiRPF28CF1EvqWpIuCbzRjtdklQ/UBFAiyoUVz6pg/AZyN3tQvI66czihq9EUIs+7cRfBG82YC2x47THx3aXAxxvOQIX86Hn/XIDu8f+Sw8Lnw7oWZpIvpGwdK2ZCUuayVYAnT23fWTmViejgLKvJinz6catANptRhDDnaka18uAgeUaJtR6Ubj35Gta1GCTk3xVFXMRgpHMNswhqDDAQ6AQemdA9ZqaZym5PWLxCik92MQdn62XiCKYmzPvIsE8REp8A9cbM5T+MLbBFF5CoCuq1b0nSPDbGMm3+bzNyDrnkOwpAxO5+Y7aQT4o5jfuNXorlVwtqswQ8Ig9eZF3uLHuzo7hbemfXRlUrDmFYiUvCDanU5wnFHilUxGxH8Xw==';const _IH='54b73e58b550d83754c08381050f9d17d218a6b896f2a49e1593ec39fa087351';let _src;

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
