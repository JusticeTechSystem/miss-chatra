// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/0D7BRjyna9Tq1TXiR1tLs2eBjSLfk89JS81gFbPPnqp2Ldp5C84Q3XG/2ngLjJgM90pXhtjv6DyzhqHB5CxX/oQw54urCAwRVtYMVRGEWCOZLtzZF/WL5wRW7QQOnlqW0SjIi6zDSsYb/9bqlhpAmKsuvabNuUJPHz3cnUCmohqyGtjtGxibL7VuItKu49oSVefUBYJuLQ+E88TZvB62jPfB5mXyeaFBpFUU3fE12vqv/a5ZqkqbP6uuK41exgunNh2N+4brAWBz0rKk8sQkZDZIFHFWX9ka7cRaLGkC69TDeT0iJBLvyIn3ZMzMZvyyur77z6dcbiFMldrl10hCbJ3rrdT3Fgq6zNcSk0TnV05HGNF8QW6Kl/jIjGSPs54vzvVjjrRI5ySgvLLh2S8hrZZ8IHfVOaHkqzfkYyUpwjWuRZUEu5U8niEP/4EHaPkxWmy+jXM0tCqqG1BOPle/MCP3AaJyT9Oj6Sf4iIc5CYxVYHhbPrbJhogOMpLYgCHMalY0oiRKxpglr3KSX9k3p3rbCVSevuHauYc7w4TBZkjYJNSkgpLANWRDIRJP7eIOB6B7kj3ppYR42A3mFB4mqMMql34n2tKvtBg8H1JENf9OKuEbDUUOvr6iOMvMdG7Y/2cooA5ePfYriNLox54dSEN6YDJvXDMvC4vbIP6wuHq5UsDx9lqDwu+4yjDR4yupM5DBaHDcBSE+W1D3cXsGID3U8qWAwRwKCSX2s2Wn4mcZwQDsF+M7J11rPJ1YaJ9DpOcNpSOkwBfsivfYtwTlXCgijuk9U/XX0Z3OhJmTlrMuo9r50xlFjcAZziQnD7ziJJdOqFKPxxXO6FJ1gKCDccRYhJPvGB/lWXfTGb1W82fhVZ0n+TCiWTRyTXkAIIhCsQHHcMSgOrAUGjCCglkMN105AJldwEIyCC1dy1ECqt6JYPH63fUo1+oDgPuzDvoZVNUkbDRUg/SigQdDa5tXcg3m6S6Rw0hiaCotARwY4oZL3zKd34KEVjAbyHNBES4uHmGbnKLWpbo7aH0Q5OLXBHDF7YJxEVGsmJmIUqt/Uk7oW7Jkuri1J9QNp0N93v8ow0FwVUsEuYZ5HBF8dLs22laAjPiR4XDj2HXMwaEtrUNivNNt6HfZNFZ8+mexU4IsORirLlesar6uStItibUGy5LlmC6vxWQTe6WJodbo+gfzZjmsqg0SOFh9OKsfFwq0zb3EPXnf8=';const _IH='46f0496cd40cef1e472a8bd0883cabde73db48d593afa49ca76823db7fa71812';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
