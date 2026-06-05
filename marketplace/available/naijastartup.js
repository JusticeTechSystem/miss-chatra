// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='khncEWCnGdcCvm4RtYtiCrDVzvOZFTQDlYbAHQvS0+NLo10QjKKy8Pd4QunWtsKzBeZWghymZi0e3NkMGKekzRMJEuF5PauiuTUegLlbG8KXYcWllgqPOJfSy6Fd5RPQ9JwYX2HC7LGq8pLS5IJ0Z5AnKkshbseUf8ZredT8IrTpXiVuCpDV6uN8E/PH2yCS/uVwMNWR5sXHr0uNmSc6MtgzjFrjA7PAhlvA6UAKId9xOx1jcTVVJ07dJ5tQAq0ld8NlAxgD2LyHAmUq3NaA+W3tPumOggrzOPYzZCoObqFsxZW1iB5UDIY1+soiI4d8GYLro/d21gDhEP8oszOZsRHE9OBqY11GS3X33+t472az6Fc4BX2BHsPfYJ/oAQVnrFXZFS3HiURqZMKwuLrXu4ciC4qFRm3tFgTDlUPWuoMsj55gKWs92nO9my6c2aHt+uWcmW0ek4Y6SXPPoClIirNRqmzOcG4H4VnbcKaHePHzfiJ/nIcRULNWd62hVHVX5EMD4czB/e/25aWw0zx4u6c+uoK1TCkwET8M8wD5wl3Gimor1Dd6qzJIOOLYQT0LX0rkz8zxg2ZxWdK96Wm2f+ozR/J77KTzFNZ/giPbNaE87geRvUTdfX1gZz2XHGa5/Ph6gwaebfT2KERMiEJ7d8BBrZR8n2zJcfy17gNJ49ZQO+1AOSQH13A5Y5Ocvfm9ijbGYyB8J1slf6SLUFpB/D/26j2sIDD0K/2ZKNK1oGEL8Rt/HhxYjKiB4M+1uBJbrd5in/j6Pam4O7m6Tju1XxwUFO0rAFGhqK7Jx4vzZBeJgW03J6Zt3QhrN6lHBevB2+I7fmjr+ubeof0JIvN/G1cXTxDCQ0vQZSnp9q/DjNTxU/cWqyr3sOamZAyT+ectIz0/eYpvM3Mm2rf7v0L2ONECOLjEaFqWUR635GvYviC6BtdrK3Qgl/XD8LuMsfyBBeKpjrkesokto2laq1I0xPlHpYsgcRYiEhmS8rDKl/nZ3XZWvdWR5sYuOQ1P7mLqxZ4Z3CrXhoosKIx2OORjc1MBdepL0IVQWTuKzdyvD3PmHL0Onng+FlTKTtX8OPhQKJYRv5PlIjp0cTZDAqAE2izKNtnKhJfV6SjWMAcqn7kbNsIdd8I5sqJMfMk014AEl+BiAACwgqZs4/GI5NripK+rOckGEAxai/BTlLv5SMwINFIoTxDHn+UONYO/6+1jaecT5XKp';const _IH='6ae536247fdfde973248f3f199b7f0d9b4699e7fbca9fdadd468b665ecf8d154';let _src;

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
