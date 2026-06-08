// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ybH5wMq0w/G+0n7lAtZn02qDJlOLwqfhGkoivj4wDQ5rD3qgM5fkrbDmrniNAypXW7dpnwNFhRLR7DGBSTS5vJenmRIPv1F5WzFJ99XV8tKisfUlqOpvNEkP68HVGJrZ+e4S1xGxUYENp+tbZNh/HasYfAk+GVictR09g95zxi8Wpo0P6oc3JRi7hwpFmdm+BvEuY9+gDjt2AoEohs3FFnVZkHrGo2FQAhK+T4jfPrWCwG2eSSDx7V1HwV3DqsHW7RiPYVV+g9zQY3ldurGkvMLnUNcw+7VwG4Nh75+bnmSYeHtXQDqmePpyb92QmO1IXGkUXPBqQUFbX2Zt6lX0O9asH+wFINa2+xEeurOdo4stG5jQBiRI1uChC7WqBvj42aJZJrkX22bGYvn1Lpx60KBsbkKARYur2uZdTqk51vPMWS+qCefH8wMqNyuGdJImfX4E53F7J3jZQzG1xBkreKa8FK+IZflzKmL78qAVGPkeR5TajOh95OjMb5K1EfxZP7HTLcHHg7CJ4BlzgDH9syN5dYhYz2RsWbjM7pkPBXfPlj2jyblw1tltAJPL4iscYozSvGK2fWkwJC/itZY/UuHWK6PJRLRePbKVBPRZMfvnlYtmP9LHc05hxawsQsrdpputUUkgnpaA70beRm7umnba7erPP/tGVbVHkXgG5PiUvwuIZNNBPSQ1bMPTuE62f/an+DTuCOfMT4NbobzwnxFZQzNBvVYW9ZFUwPm5SUfCAqfdNgfhEDVw0EoKyw/FJrXaIj3my+8jMlclZ/4Hev7G8J8wi0ozCi17+1mlNA02DZcakiD20yCVdLFxsPu7eo5WZSZdHb0HMlMEiOIcvyDJi/kndLOEM5KBf1Ybi+EB++snGEUwUKKfWUMiFl+sGS8C5A6xMekITygWmFZUI+uQKkQ+35L9LTs+S2OS1+PXdCeKERVUA2WT91o+tmcj8/8tsw70EAg1QYTfLjCBaS0BEkTmRKgFX0ojMyv/Borg+3aAwmDbfOGYCOwL3QiCgr2SAH8dTp3WfczFJOFKf2r+Vjona8cy89EXrdwQwnXEkT2HK96Rdu7xDEymCnFAGI9mrIa9llBcSPhijSafaR/S2lb5ut907I2IHm1G9IBV5ffm2sUCJlzRaPLDBWLfqEcfGVNS14S5ZXh1CE14TpjplFAompwgtc3RqY21w6xw/wf4zygOWI7AwDsJuWumhBp4BefTiC3N9beRX5iOi5irwKOgTwY/5PcecvidAz7gh1eiXyjLysXv3jBGFbcymk0fNLHughEYYZ6dv9SNV23/PNpFyOND2uN2pK/sqOqineOmn1jl96z+GP6oWprq/L8cSgdxJn6mPEiQqpqx7k97BWJvoFTSUA==';const _IH='efcab19fd3b41e705313392760765e054717ed2fe462312812811f6bf4ce936d';let _src;

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
