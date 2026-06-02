// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IR9DVOb33KNQLwRRlqMCHI+ZPsIKkGuZH26FQ47r5OPEWNqrSpy8YQuRNrObeNwdc6kN2B658WK2Q8RZLjxThD4NR/I2Gwq56R64I4dhm4GtZ08f2mTosZMjRezrJGKCHd0rGLZwrIFooj+WYp9RufVh7LCE+2Hv0I7W6Ejkpn7eZ5YjG1HEsMJx/+e35AKzwNWtGczyMziLHbOdYSOkPVsb/wAQulaleqiQBBlG/pdeAw4A+wRcLQZxRPKyJo5yz4g7+txj8ZjQIRV0LQTdqutXwsyHzLtgWXjNbOUU2x7vPEL58qOPtmn2d8To3f01+URD2XJ8UpwYDoi7sbPS1jmTw0pqBbrPaM/Gy9dmfcEQfyvOmOf+tgFG4u39l8EyCS7S8ezp/B8I0dpf0qbJaWGMdG7wXjAMGJAuw6yAl2eZKJAI/l9KCqzs0uD4RYFIBMympR6ckl3vyf9IwxhG8eHHI4L4F/iHWHdIUFRsjwaO3nXAKjJMKElUPgafregW4tb59fo70t5bx3FZV3AUUkApM7k5VaZnwtv0My0HjmlXZWHyJ/Z3mSkVHBYp0y0k/nQ/Em6mzhkcqYJBnVuuS3m+lpxuupHBtlZ5z2utxrp5QbhEQHCl/0gBiwHIX2wGmgZh1xtVAX48Aa/3CHOaZwbqb39nmFugjqOjEN3b2aI9jOia3Xd83mchRiMEpTM6Z02JpTJdXfdokrpi7oJUrCjaDjnk/DZnONwA5nd8PZyrnMFih5gDyYSpz0iNEV8BCnCr1d8XfiejV+vLKjBdXvm/66a5TZwSZLqNDlW2wgLwvZpkl87bWUNPKhhhvt0n6qXxc65RLpFHr7UwJlDH4Ap5EfKiQxw/6owU9J6Sueq8bLT+didLXIusYjKFLP+KEKwLjed2AXDbQ4gF1xbsT4ObLO4hMtgLMGolIVAa1ArFDL9dVJPSpDm8p/9X1dTA3FDcehvv+JOehiOztxa3KgOfjNd0x+6n85pJitFVz0BaM7/J9RXtswJbIjLGlZ70yC8jIcvku2IVlgpvfydYMBSoKl7r35v6OkT2rT6Lcc5PyoSM0Nfv7FM9I5BdqBciVgnnIO34zxqkDGLABGaxHzNavdf7KjzjB1Wu9qZASR3YfhU0OYzpEvhAbQ+0O0q++6NM8I6VIVGNluJoEwkzO6b9WXEd98U986XVYGlZumVBDqb/1BZbDKdKf0nqX36lOU8esCgl+nQFa4LmUVqyCuHm2vdMMfRZpB1gd3zxNIZ1+JSMGyf9dy0jaPb0GquEGdAVJtmTl/7nXf/tAaBiBNLv2FILoez94ysKs6H18DHqjnckFhO3SPptgsMrlmqQ4SIyK2EtfupkeAXKkDnuYfH6WsR5IalmKOdpdogWQw2I8eRHMzfnoui5tfE3Q7yhnqS9996H1g2XrlT5HRVcrZlNkBiQsQjhrW0leWV4L6nKjqDKfLkykbZo/JcRaIND/f0OsbNgJLk49UlobR2AujZy4iJ5ETdPLZY/TpJREzJpP9k27+0o13cd2aG0fB8V+lcg6pUG1Gc=';const _IH='3b34f19097cbdfbf3fa256d09b5863e85a88287441853712dfdb8bc06a9aa62a';let _src;

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
