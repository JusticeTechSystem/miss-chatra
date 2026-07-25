// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqxKnsu1/0gjvbGqi1SszNaq/Y0medkhxbMwKxbeIyIJwJ7+cZVnRbb3uOK2c/3IBc2i9uK54LvLLKedogiHMkc3rG3htUwkhXH5AQObidVgNCHCeQM6R+66ecfap48IaHcoyFLbaropk44zgQ5Ws6fymMtgRRNs9m5GUVNfMRQiwabJYGqD2lRg2J6AWqrXeBcZj1eoAaBvB9GcuN1INWcipmJaaDQQFghWx223vYOaJIOGlR6j1iPLfmy+U7k/gK+3HFjahay+zB+knoi+4WqHk2IzlRcBnDL7q+1s/u4Ccf0mTz+Lf+bzAf239ET9/xeysgaQrZ+WpqgKhyhAROxhMsAAv6Zkun/wnodWLO7OIql0U2e4CvTnlhIIxDVrXGzrc09cp8R7yxWazBDY1DSxI0/nepYtLRV4pRSAwLkOGB0NNv5tZO3GVU2O6nVOLn0X2qUcfXh4rp7lNkmmoDsGi2q+c52tkw8mxjbvrW6vgPlF653lbolvUJlCE/gl3nacmWpsLLx/9nUPfWryzZmJjsgNZI/6q5pod2xQsq/S4RkeBditk3DeE+0++s1HTbz6e6krllyGQDiejqHAvjYzg4nd/NdVkV7RilLrXtOOtief/uqj0GCm+4dgLpY5D/azjUjnBz0a/SMyK5vShD4hL86y1GHKy0XsptyCYEDRhJ2mmdBKINQ39ENKMCqJDv31Vp8fdB4ZyRzNxWl8yPgWmY1o56b83F1fwnQvaTixZ+AFUS4IUsuqR30araN8lzI0YcjrkvAJQ24Bpnz0K7owgEhQRExm/I8NkKHFYDK/8DFkWnXo+N5rACdbGquOKTqIFzySG9dNHtv8cs1QPTt7Blk34GcleX3Zi1DmV2p/pU+y9c02CDpW+QVlQpAfKni1/uJMe2Zsakqp1FF74QxaQqV5Tqx3NXKudFHMiettTF+oiO3M61VBqwlQle29n6YyUiI7oW2CVSDx28cUFANa9EBgXDsqoQDyIKnTPIykZ3TQyEW4x5kI5Ic5A=';const _IH='d4393a6280a66bd492942da359485b43e0c2d4713f1ccc78e183ce7ce874efc5';let _src;

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
