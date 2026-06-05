// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sPq4VEIui687rbzADu9DhnJGlcPjjAVVtU7Ehpd65SShafZZWrXwrD5fK5WtST23iwJx7NeMzqhnsityg9rE2zpGdM3Yw8wTTVtYa90yeQdg9kPu1GgMy0bHfQ5gFXLxN8PoMl2FiU6H5ZNVmZbsc3mDFtYBndxxlkpghwEskg5cLgCj3nOMzsiRcc0xNsGaBUXkEEvo5K2oULQ6aNr72V8p2KKzNoxl71yMfPZxCp+deLUX10b99OLVKYo6Snj27VjV9F6vvJExxAjgXd80L1Qp0TUmhFHoE/V5pyh45gnfZE3TSGgzSvh9YWtzJ289R+LifIoA/p208quQwvpDCw0D/Br8mWXXsU43H/prMXDoeUIg7jbDQECyAHzCMDkq0rcMfGqbqT7j+PD8yoxEeL4SbWoO+b32r/S89MxKI8OVDXsdiIJrIPZJPKbOzDnM4iwDfdoLvbM2KECZJxtuW9kSJze0ixE3IV8UtLmt0zU3hwCR5tw3ckzEQNNeAFUInh84mpim64YpbdWM4jnahyxzjSb7xX/NWfWjy9ZDUjWW81MGc5bg5pQa8+09OoUN/zi2zyZ+Riv3pdy2ddV13SbvQiVsaQWw+iuVhRxnnwd+M+yqeRYQSYHHBowtBjoulbhtPT2OAA9qIxehHxepLzBu4fgE9vQ2uX6s0MoKppnwfX7TmGuAN9PEnLw/Dfkbf65Ys5OfQGw8oWvcvCM1uEF49g0EGnRUQl5ZLr1cI0GVwDENm8/Ou/YPp8gckFMvX/aANPWApoid4FbCy5hXdootEIL6h2LmIBtqC5nvI15P1m57Efk5DeiZ4PXHVPLOi71UgtYJDoHgara5y+X4uS7Zzdref9RhGneSxb25z2KObMyXi3QZyxSQ54IcETdgpaU3MGZFysSZRzMquMVAPbOQr4e3/HvWiSYRwZBZdG0yde/SH9akPeFUUoc9PHWZ3/4KxhsAAhScclqJkgtHEdLvXhsWFGLq';const _IH='10b3a86420f04ce986b62258e57dea138069b35f589723c069fe09eb1e386228';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
