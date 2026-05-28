// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='83n+rwyr5dpu1p/z7r/sayWuwsjkMubXqraKqLRI00GhuzU0XlvvNMtkzaqhQSPhkMkP8QbUAezj/hoRR0wTVhYoYcAxRDbWb0kKNu4DBXWIv8jRFMyJ44Jl/PNZkPmGP8NVX9fwulLMxdh6ionWHgbAhWUFyRUwVPZhzoxW8LbXft9GzvzO/dCxZyeQ4N0vBy3nWeKBG6WPNroXe2tPlmCE8chweZrpu58Oo3reV3IVRU+iHMhrgnHLiyxWeY9oLzwWPq5YaJTFu16s8xzvkZyFrHg2pCf/9wz5v6i4GsD3tFQS5aXsLAlwMbZjuljLlv7qECZh9IUur/+/x264g21hXkoLuXXOUiioEW984UVQ/4LWlZnGYOSahDvfikXUOLiKd7RZmHEHFotHxcb2uRngHGGblp8ca0nOKNRArl1mN6p7fxdqQpmGvsvKy641R58jeFUXs/BYjTxR87IhBfFSYdxhbfEE8eMdVYxCua3g5UF//wJmZ9WKyb3of3phtq+uA8eITaVzrHi3jOtdM5T1mdVQqGgamYc0M8iPiOPkbhd3URWwY9HL8XjTrc7WcU5J3BcJyfisaWTqUGALRyshWkq6yqJOfr2n2ujLyWN0XmH3A3aFrD95Si8yQLN+VQAVdzRYHK3QAkh/eTqXLbPbGfKaj7QvKHpo2HU5RrLlAe16UnHZhBeHwV7pw4R2VkM3dh1gUDef3mNXYjj5Dz+SRrbmtdE7';const _IH='3d307688a44456a51e9d37aa9a433d76273387b5b700e952502ec4bb55ea5c3f';let _src;

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
