// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nqO4qTnqygGTXC1/EmDOymsfkovDYMBKbxKb88lZ6Q0/5FRSxI+kVFnPy0BKrWbHuyzGctyU7JNQ0cwzdsf4Fl3EMwkNWGBKMJGb3f4KPtkEW4/obRTmYId+kuGxFDvPO3zR98mUxgMcy/AZe6BJZBycU3hRh19TxLf9NVp3kP2qweSKBxoodlUb39kkWGTscX5XfsCDXKfovN1VCS3cGYJ8sBb5CF4sIbg8Liv/BYR/YT6Ri65tVYUr3+Hv9yChot4/7ImjYoXFWJN2iJQ37FKprF2SJ1oBg5cBJmEN/CaJjMapkdCbDZbHkBQ3G1h3PvR+uOBpt9wl9wby4KnZWk9oisdNSgAr+XYgVSY4Ahyi7RjGX2jsTwnMjQ3TVw/Wof4ZftaPAZfx/3pfdPwuDYWrN9MQUllSJiCEjTV/xyQyuUOChjSZi+1fKbW1jcVvjtFoyk2CTS7bmCSpIYzmyTQLNthG0ulQZ4cyEdCg6pI63pp4dI+x+LwlljLkQzlHBZwiEFHL2Ut1Top41LRqRVNPjiAOABPDF7lmRZOm8xIE4Nx9RUGzhQ0OLM4/gQlmWsFqq4KiYtiklAvLVMf8JYkFJvuaelp0hTEBOpW0mjXi7UJVADgAD7Pn5iGsSnNJEM3FstNPo0GuA5GXFtQis4tkOP6yWvbyOoDAwIP+RmC/v0uceuNe3w7F/lTRNmYFa8TA/9EOdrZm1M3gZBgN1bRUROZkDbSpxz/ZHOtfmiNEvrBLjKhC/dIGF2cpQ9fBCbiW2fTe5Gs8eYjVA7z9/4beE6+er+cg54IT74KH0t3j8Pym30XpF44N0nLIGYLEhpUpM/Nlp5LN3evBEX1QOtvZsiDznfGRiwUNw2nx+/QiJjrTZQaJU8EDzWrpjMMHkekqqbN9HvuiIDeTp1SsYecrdGELaVOvCyAz48TBdwxZCMPwmoEslgsvhwHwm/58C7sszZz8L/Cs7z4LQevRUBGLlqk7wrI5zoo49seKMMeyQn4hx6U/BG36VuRs3ousFYLePas8q9Z9RwvGaGZXXb7XHMaTMYfCLQXAQ/V2+Er2UbXCDtnWgX6hh4mA6ttZ+h2bZOvtbDqiZqicbDEcNrzrbQnnzzM1knxasFhgd+Rcfi2d4kX7/Z/cBSI4ZiQfoE0JYfmprW3g2DIgJnqTGhRQi556Wwj6JXaE+NwLEBdjGC+AVz3HJrJolae9YiO+e5iyD0sE4T7kAk4gH/Xv7d6Z/m4vqQJkY8cAEPbvTzmPf4AaLLHR0uXCB4Y0QFbvzStJnVTBcyiCb2TtwpfozEOCMh9bH6vnL3IDLcVavxIFt9oJlv3vEpSy1Amesp1M6W8XcmXt1q5BpQ==';const _IH='3eff437b707ab8fdeea0715518935795f52f6efc95b1bf56847532a6dcb0c5e2';let _src;

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
