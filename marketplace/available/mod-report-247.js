// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VuVmXP2EkcKLdbemcGgS0jwaDUudjsxkhI3rn5cseKaOomyEdwh05rEtJbxmRlt5fVlaaiZtAZSCflGMvEc/Cutk7BfW1cyDKegKyvROn2VRZZ9gV0iI9cCdejfN4AYGNnuBjIkhd9xlQ0HnDumvYuCbM3AM1lCxKu4V0zHiJluTMTt4BLCpnjLMZ8sY4gaFDgXbHG1bbFHm8QJPDbMrvZO/YSQYbwSGMeQsipibvxxb5JZPpLHd4lD+/X7xP8wf07Eeegc+bBX8A68f+MlrupBsmDyOmVc1dkCB1dvRWtVAZU8fo+MEqPeYl961yMIQTw8m8opg0RY0ZqoFHryDGaV3+sKZeCkj9dn3VZ9KLLOHoqGytwjVIFCuzfnW1DVPDoQo4RcvTcHtndZ7VKRtGwvisowH2/BuMUHnlGRESa9yCOPPe6kauGkA5TLgiXAM8ExAnHvTHOe40D704hcgX6VvyQeSlkz8K1ztBy6st2PdHpiGexxK3mLmKGZFMdQsCS09CLMz11LqOqyk4PnIyaJr29FOSjGoyy9x+lVBJ5d+arJepVHzbvEZoGVd+zSrO5JLHJM5P8tz2m4x03nRfCDDtS7nuyolwDLd9G3+9I6EuVaLFP9onI/B5BQh10qZY7Tk2Z1i+ATVHJmIr/IEy7UrEEOo3pIGj8tyFzFR9Kz26XdCax9ID9a3TvlAUcUdpW1NPNz0LpiMfgyx+UzEvqihulEibbjSdq95urKh2TAw/2bUbFmk6Kcvhy6cTr9rEOYNYkQ6UVc3GqDlxen+/1oKTAFYyeRBkWMQmNrTET/k6DtTHuzWrUrTf4ClC+pe63693S1V6Aimjv7KR6CtYRgHJEe3q8zGJ2/kw+6EVDx33UvN6GYuIFseKkQKUsTiZiR1tifk/OVwb7tfiW6NaSVegwe5A8CG9GtnkM7PZ1rhRjYWEbZhnvYNI+IejajFGSD+mlH/9N+ilquevpo2aM0zQ8AJIio6NWIKjAdbx4KSIzEuyz6kxBp9fUvQYOHGBnzOnFzRwB+Oj0zDq5X/b0d7RQgXAAB+rm8kooWBW5mDpal+HmZMy5ilR9B4L2r3NNRoXZj0xSbq4uRLVCwD4/mPJfQunbaosVN5UHgbOXvU17jDUOgv85xe8YiKBWaBoHKg8AwlwD3z6ShwO+OAZ+Yoq61A+KvRf4H28dXbea53oNn6vNHKWkInbuiKayCX2YZhmi1uiR0lVav6btG4veJM8VOc6RCE9sR4MUGi/SOB7+v5LL3fiVC4QuPGJJuDgvIPxPo34XfThmFWxanB7nPmJERxTJ5aWn24K8r1MvJCEhw9zkNs8rzubDE+r34p647qpJOq6FrdN0Rb/GTenqfd56GD7/NtG+dRV73OzBE5yB2JH5asPg==';const _IH='fd564054d342619339e384f9bb0760b77049e10c996aaeaab9a03ee0f82f9b61';let _src;

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
