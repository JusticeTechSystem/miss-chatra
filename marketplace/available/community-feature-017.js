// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qUXqiOR4y8pburEAByfemUJqQqe45VQJiyHQ98qPsBgE4ZcGqiXe8A3LrqGlZi1ey/oNxDC/mHs3lMBGhDmc7mjesP/ePJoYpqB5tZGsVNDAxnUaOY4hLzPN9+fM3XI8alZRUqgkakZ550+hG1E8DcJQONNAxpbPRrcjYnu62ygE+4XEYq+xMF8pyh9kI8C/3V2Ri/QO9dIkPGe01ABgAsadwD/AFJeKnV5R3hDFriuPvSDiQJ+4AEL5UrFvaILnUucHhdvAANAHngyB2busazqW7CebLOJ+3pxnqI3peVjWzBR236a+hbmz9l4x7PuGeTIVMJzkXYvXlXIGrUWGMkDgXpSLg40HWwdT+osgEkbOvocFUI0K4Zsf/OBnh152wy914o6V1alaQO+2xvJckxrr4fMF7CIDib1TEh3Ncb/qCP9AUCvomWk+v1c5oGEedrRD0YfFICCGb0sdK7Pf0+bSd8j/VtxuSLoBytyQPr1dXos4do1fy+6WrZ592n5gQX1T6kkPZhYoW5GlBG7zCAikvhO0rfQUgrxSOayJ3lzrqVO0UUHa3Hxam0lh3s3mS0r3A9IEBPCBftOQDBX399rQBV7LWrcfQgwrxo5SklzxUXiuDNf/nSQwjW0Q9/ZBRKLszwNuVmOeZ/UjCwxE8fqZ8kh3Hv/ebsJHp5TkH5Q6hQXUmDBrkhccdn/w/QwSij6qYAy+yJo4MzRKtBE2v5QwTHFUwbg70pw03UHE1w==';const _IH='c4834adbc0e014c20a6cf6b0e5f3183afa277d7f78d23c3dd4ee2ac49918c12d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
