// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LLa1HIesFaLvKKGqmhO3igbWLrWe+KdbDqqZ8nJNIjiANW+l6whAPIYvbFkvd20q19+3nwVwU7KI3Vohl+8r2yxbZgt/judWP1D7At1fAR9ItMG2pIB9niS25ooK4skDBGmEQF9Jozv2gcvVjcMeSj17tamd/YcpLMWWcNs6w/SOvt9sSHkCZFKaew1WdBBUrKlK12W43ARfvwC+esdoT4tRDCv8+3gV3+SrZSQB50hvpwH4WZGjkkOJBi2tG57yA149evIsW8sMSPnZ6eJJmf24eUOKwqgBBl4mXg+vdKluyAyoItyPpVESEP0unGwLELsBxeRE6zj24WE3ZKcwy7Ef1FcASSaP1uvptSUf7EdKkSmIPe0qswpygCP8B6FM+UVPCrSvv6MSh04L6q/HTu09+rxyNBqpjN3Apbj7RXn8dwbsYg4X4g5DATr3OGYT4LR2f7CoIMFaU6tjDlqOvShk7gPScFuaRXTr4D3Fn/dtWtY1qee9vIMyhBiippy1Bh9npYzW0L1XTY8qtAMOHJNi9UCg5yZCVW7rVPUVTtDZxdCh5CJpPpQmzqil6Jt0WNwo0a2eQFuUeJKSu4MCGFha8D6J5cBfox41P8nNvTfI8+PtoCmrj8CT7xG2/F7GZtg2+FHAqN43nJHIDtQzZDeEHRygf2HTRYHGQ6edgPw7eaOuxn/+Oe5DBhwRlgFl62/yYweuj7uhAjPfio4aR0VXWzGRv86ppupACmstvaQwcLLrJS3YxwlniKe/8IHcC18U2AFNnFmVBYuk1QjrEu0EiSFwhE7An2tXX5c3JOhKnjaMhCdlRjvR//NWoFH89ZCe8TMZqyQKUDdBGVtd7eQjMZReOMHaUlbqRcF51NgNsDoNm0gUA2192viJ0UGDugPe4n5im72wrnT8LmiqJkVUUZ3GIcivz2qNxPa7Xa7tRh78KkEUadukGZE+SfmfezBMJ2kJBHA8KN1bQob6KV3Ku38Sd0wlPzjDNccWSD3vnyJX+GQzukcUy9aEULKN83xVCEaKCcjbBxpeWCQiHBAVCORiWhtr1yDGMDtXlkbZsCJgQaIl1Df3akGqIWd6KJxvSUQM8e1O5qtlQHDPrR2HAPu0yHaPC3ibq8wsHwvONlZ+nIiTzf4yMNhG/+22LL/zbvieSA0tCr5w1u2wpAgXhf2yBc5BA3rYaTrLuVvbdJllSPYEPUhV2Q2+iNqJYobZSf0Y/JbNGknuNQQovixtviWGZpVzEVxxzh1SR4LgGvDSJlCc/iIer+G/+H2GFOivVaHymp2zpLHXMBVzDgjUkPwXQ5rOTqAa5W7AhLm1X40b5pTe4ANlIx6lfqk1AZn4JfC32UAHBhJP4fCYrL4UCJSjI+uTi4oOsswLa31evOEAIttAuy0s63ZkOeMbpOI=';const _IH='f04e70e4d10fef45032d8b8e160fdbb543e52e110be6831538affe44baf143fe';let _src;

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
