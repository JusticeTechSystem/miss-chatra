// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X1OS5Sed9t/5F3XsDsoitAnGpoA5ghNRdiXyrePuhAeG55p2duc0Wym61tkscgdHDgzqsQ5HJswdSRZ5JoMQvVglaksvPv1QVWLG/KFGR8b4dXS/v5ERzTvZd3R0cmi32tAFRMsvI7U0Bd+7GjfBISQroh0qpIA9p8NBsG/TU/4wXSw4+bzACpKcWe73jyO1gVbcJNbpQ16Ystvk0W3lhzL1scjk1EhpTQkAvZ5NQpqC/bSq+s1PEt70qr7TPAFakteu15TUKAk2/cF+cwEKREFfw1y0rAXv/JHNJL0F5umMgVOicgMVNucXtVau0/Z+eFyFduLBI2eWiKCvCwWyhH9+vtRFG6bIvRYZEqgZmHXOMRxlzqVTBdLcUvWGY4vqo6YW1fGQ+UnzwVh1do2ZFHd24tWx8JGybj6ZRBB+Op/FtAgKEb/Bbb0rJThdgRhd9Cvl8yDaoHs0cVOYEa9TepmG2///9br2cnH/z/dJ8Gx9CHEwAYHgHjciU3EY+QdGO+EHPsnMc05gMcbgoDRs2GqWZXaZdfCJPVEzpDw5P3Vgc8C7WSrz2uNoGE6C3WAy810SgxMEgzscPfI9PwAmlzlYJQzDKbXJz0KKsLKOJS7Kw80a5G7wUcqEwvzyGwgnd/O5Sf3WVMFmsx3QUTF/mJdfiuy0pxCAIhQlpxH1O8wd5a5j515jr9L9GJ8iPVhY82U/tUeguBWpEXt2+83m8y14j1l89Mj++dj+tX/4dSyzSAxyTkjsTHvo03bFCzI1y5IGoQ/TzlLcanuM96/ligJfjoX/hxbD7L/PMPyxjcMRPC3zDKUv/G5MsGvTe/s7kQQ+pl6IUPnnte2bctDiczKL+0rq0nFBmvm4xn8Zg+AdsKDRkk1Fmn7T6o1uzhrsTabBp2T24dT2msObTtRK94nl0ria4hzvapvZLdBxnmRFenhZ0yF7we68AvzKXxUWkUgnvweYkKCWAKThd4UQ3UeyRoxt4PgMP+ZExxUxv9y4p9sGLitvU+64OuHsDWjwAwL0Xz+ZwNcsINpiB0ttm8qQizaUrS2bz2YMieTOZAN9L7iqC6ELtm8uOiWyKx/zwl5KMbVdheEij5fNPYOv0X93YCSlwMoPtIl8xF4YaaAEWeeQqcVBwohWS+JnATbkqVWYf8b7nXRz1hNdzYf3RrBiYaxi+ulM+BkBWNsTS5uT1l+TEqkKRdhcEVP4YACceZck2iXkszzwfbUE7OHpToj4P55+tjkbn5YjT+nO70ZlEJ2ifh4nrY5QWPWFwJxuJdsJV8/XTwuvN4gctZBEHiRz2YzFHLdOwdsAw5iJGuU6jkHYGMEmS8iHB/QCSoUwtOEyqotQnKLo+9iTgrFKORyHS+FSlM+QnqGIBd6D7nXRHOjRJxGmvwSH++S1vC9cbXD/9EXHDn2sFJ3nLfSHG55Mer3KufiUMwM8eHL0LWgf7flFOApmVVEDOP1n7+mDzP5HXWsWz9wocIgKLp+08+z8Gp8XNEp16lxvquYTgImC22Vu4zRYXal/V8LCHO8f2wpS15ILAMiep+GuQKc58ypBlGdtqJUiKaCsq110HK+tKnuTVU63GIu2ddTGsQUc4QhTYGvjoQ+HJyxop/zpFVqHlmAruADEt0mMlgijiA1IXIszPyyki1/EjUVSjnkKn1a3fr2BmHLEy3WoHRH28M7iQndErhjr5ukOtbhue6jfwlRnXQ==';const _IH='ff077b054b53ba1a430efe8edd3605a7645a6c8fe229ea8678b1f887f008cbf3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
