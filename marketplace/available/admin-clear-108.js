// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K8NkbnGnwo/VF0Kl4Wge8PIOjI8MW/Hz5fk6IGuC5QzWYl3vPub59DE6Kr4wSRPYOzDnxxNdYTVqyxvAH9yxELnUG0puXbHyBafmIHXcOJTkiEafw25UuSKMXa4+lZTuhxUBAEd+dPqIFoqZsdg/2Kuo82cbwV44O6i66ISbkIntxS4C6Yu8n9PiKgp2i/0/j6bpMNwCl7j06TV4gplND+5N38z4e6a3PjwjjWEjBZePvOgK8hPuAlkb++GyhjwwdfEEd/8QCoSm/nW2GyOnQPvBVXngtJi6Dpg2hcjbiUhZo4/WpbHq9Dxue3s9gPbdFWJ7kZ/MYvdFUQF7XKYZp9LEkJxrI4dwbJZvMlBiFnAPLEpWB758avl9zGueU/Ix0UIvryiKqomGmoq7IaPg2Q5ABoQRy4JJ8+SxWrMU335SDham+mw7dp/qUwSJ02Wg4PF5ivX04iYOt8E97e2ybtwoCOWe+aIg+obk7mQGDLOpZlWXgM9Z/Z/9chYUhR0NlUXlzaOdQTC9sTYYzydl9HIThuCMY8zwxXczJaMjtf3aNGMJLxmMOrhnRabppKV7GbFS+5wKv4+O8QQIbEYVyPQGmiu1OkT4cAHUx2CDJcEPRUS/0QcmKUKCLGTFrie9ps8CR+qDK1NTcPj72dsvuCqU1WaSyFxBdAYpvP2cStsUzi5R01nvWe5bIXAcIK20xAFi3N7neQsiO1Y2MkJZI4jtpXe2T5Mb0tCfRfHsQGalT8XbLso+RxDf33pGpIFEL8HdhJ0zAVQVyZDIHW7xAOOmGYi4YcXyEa1l4buQVp5f+bHFY7y0SxfqqMewGfOoSGoq6JJvmxhRlFzj+FVVbvmA6Woav6C/7uupgGPvQMOhl0XAaPhbqcZjRcCzAPM80Bs3PsHvv7wc/n85d3wSIcV07eU39fgu5Ts/swTk1ZhO40AHZWE1g/Titx7JXWYkQP5YxqkdlvYHijlbSGmjDQ+FGppskANcG6+SvHnL0N69lUjSWqckD2YP';const _IH='f0f5f5cca601f7e6eae4c953d55d7e7bce2d5aa85e815e75ca3adbbeb29a1db3';let _src;

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
