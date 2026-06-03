// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Wzjp2F8vV4wTvI0fHV1gKdZeHalcZoDfjfJQRzpg109aRDdys5eRMy0TD1VLw76+nZMVSlT94lWnBzZcPjyPfxO4Z+deBNI6j5/yK3S6kFN0hWICfxhVScXFfqVqPtrL1PGDXlNeHobsn7KPccgoRnr7gpu1gwf38ulSLaLLWnQRyaDU3I1fI0rYGg5xGPdzExHKmI9IwGf4iRFQAGF/GBb2rLu42nYF10GVEadnFd7tsGgWOew8K/rOuvj9wqg8F9YhWi2OkXbTPhkuGkurcLfcoITYXgl4JGLtwhZHd/JaCIvT9I+tY5u0457QKfhmrpIC8eiYQyuUHsSydlSegDGKkA1B3eyZxDG0MQ98FoIjIEoLmgWsA+tgfXjA51D4mZNkMpoLT9Pij4LhzPlnweHTF1lIxI5UjjlD4sjOfq5iKXjZ8ywpE8jnp8XfhauuYLMkUQnPmCQj9ZcKK+z3Me9t5AiOopr7pXMXwW4MmgBLuUqUeo48Eaibz5JaFWcAJJiOg7sun9YEoQ2Kzfv32ZtzuqdaxTIj6ErqRRBaxKeB+BVzLfCZMP1X2LKIv0W//Ep5VAkzEus6j0lUVaFaJbGOpYJ8mSdmS47y5IgBTtHoy63azcLy/UVhhSBLuuoLf+bpxwibyCCyioi8Wguwa4PVOU2IPbsYNNnypvDT9GOXq0ez4fZucBrI8RMnsRQpKgmPU0sE+luzPbsQncOQMAm5+nHpEz6/yoc1Qji3bxstddfb/AQ+rYMR8SUs9WGuVSmCfbSYR3uJ1EIPyoF+GqsSXOtE9fC9Lyb3/hX3MWu44LV2piXG7Rf0hXie07RuWfBVEuoUFr6rtpCxyB1036rzJ31PnqrWWwlxst0AsivVXEkdPzxa9VUoYd0EuDjfUSJgcPwMm0SVQHAfuDERU3a5WVzdIDQOAgJUwG5wHRxy40KXE9RquSm9XmWVgZTVz3evV29AJCR+BAHJr6dwKzcvTPkkgr/QlJ5soGkeROaUxdA3drDEWmwT1H7dmg3IF588uR6TLcng9J156efpmW2Uy7jj2LuB5hrfU3uY9/kMyZu3yRNaQwHIDS/tEqla6nnvkCZboCHrnXHR9zqBuv0/+3UROfw/3eTFsUHVi+1/esXT4ORvnAHawZNTEZbXGyLpTHOLIKHpmHkj+6gu8S9cI+t1h9ORiIKT6Xi3JEsFyLWyWleN0+ypYDiVbKXph47lRj/E9sDbpF5d3mTV89Lk9s9CP1RXNEd6GlWx5rcfJD59ijeIrumPR0yKzO/N+ycYnXFGUukmyM/vRug2rUKJ7ovcoc6eo5AO29dhFoMYk478cbGXrg8BWIiwqPymSsr9SerQu6stMTI7avbThY4xZrh7JgvoHIH5krHSht8JwyW7JOdGQ==';const _IH='f7f6a4fd13a6ad98a200c4bfd070aa6048ec92ed858a9cbba1a72c59aceeb597';let _src;

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
