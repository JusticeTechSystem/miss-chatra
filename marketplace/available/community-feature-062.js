// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yUuQzpNsBA1ILPYZkuuaKilOYv0M6xXnUXgdF6A1hFpIL8850KabKrqeZK/hq2dBg5oyM662HOxswm80lyJFnogmXAqLbkc+FMj/lI5N8W19wxiSJUj3DcJU3jIcEmL8DlnpBJVUfWWx7DqJdY3JJYy8TsLGju+bizipEflZjg8QjeOeQi/28OzJagI3l+m9B3LfUKtky078WXXzvkwBm9kSit+BhEIe/4nK3/tz9k2uVNAfteLwMWtxGJ4qrnaw/5RGgxg3NUXzylR5ZV419AyN1SAkGfzUTCNb9+sCsDhkXK+zEp1yPJU0wCsHHB+vs9lUZI63aJPI0muHaL6WngjYtsMOz/Y7RX/YyX2E+2PSQTMPGHWctm1fFBIw4dleuKrKs8ErkCL7Fvi4lq/QubSg3VbzhnuYPuGTIzAG0X4iBcZGTNXaWkgPbYP8r3cnVPCDg2fcStGqaV0sXaKGZ56JNKvflbDUMasZY3bJteJwM1RSKXl9oLYOGDjUi2RZNJ5K2ht22YMfLL1EzlofAAYvgIRMcepdXMdRV4ikcPMnytRYDOQDYo2bXu8Fak+PMPBvEqY8EmG64CO+1gYLFdkNNP0tMT5FpAo4KpuSa8JNWMK1q+5VsIQfyWb13JazX9DlcyAsBCV9gaFOjAIqmwkKLKU1q+JsVcf07sprJB2PKK1OzmrmgwKDCIHUVBDvIlK5KlWqSvydtS27LyegdxqxZ5JpOlfm1YK0zzCfSw==';const _IH='e39a75690561b21dfbf648d5c7e90709eef23c8c89629b075fee1fbeb234140c';let _src;

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
