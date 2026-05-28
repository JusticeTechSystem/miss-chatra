// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a2Cv+489YXsV3L76PK1rbNpdUNuhnHYJ9xj4+Nx4wSy0v3NoK+vH0I4p+SgSRRKt4SeHSkV4HJiXNDYcgioU6AiCdQseaYaWhs4kbvAkHFhBHV7+q8XyPrKOK6d9VDNzhD1+1y72vCiExndfMjl+fQDGgUguQ+2TYn7KRuQgASQjhR6MD51AiiimrUclOP6n3tw/Nv5a4rI7BwLSW2Za9YF8sbEUUgCfi7pny6uCIClO7w2zrCu4seGO+nA2hxm+HrNvL5X0+G2fJMPmaoDmJuYdqby47gRIzY0Ge5AA5Ed3UJwBdyo0vYO9xUpwsDznUkZhBNSMTFECemfZuKuQeE4+bKyd1PyWGxF140X5gFIZ75MxGE3LBKhObWXgeE6n73sKCTbx3s15wCIlvc76FDJWtCkbXJdQIn6eYOACZlQOW7bq/N/WHhpwJYYWCTQCLxLBqZnOTOH8FDAGG/aaryo22BF/LcgM2FLUTEJspzAr8SqXjtSD+MBsDsoTVSLPTSJEE43eU23QAN0cpzujHTr4j7hRy0uFc3CcUTl1vcaU/yUslkrVK5apbr/Cots3pI2Nl9qPy1YiRJFO5JGUVqal+drWvlNj5OLMxuBkfe6bCJ3zz6eihcU9Uq6FsX+HyueB981L5IbmFCGrJmfHlwBONQYhZqyo1K9x/Tzw4SmDxIwOo4MHp5WCbfIOeN9GTiNLHySZYyPlVodETIvbSjXQTU/UPavF6TXPIbGceYn+oVi/j7TZloulmaw8WXYBZVN9C9fn0yZaw3Y/YGWwiWPGc3naPx/jwVZBAx0RkGgjqtx60G25baNweGMqOMazBdKj4nR6dm6L/I0+isYfSglo/g0RSY46J2W61UvAlBtdU9kg+g1Eo+nk/hN59hy2awOvXnI3Clk6+H4zTJk8CC9NHSQ5ZuRFzzCAlNiYc9iokCojLfuQYfzHR8Rvg8WYHCZKlkbuo41oTZO+y84HyxoGdM8K8aZ7NNDwYnV/39NPUe+6RWWElYfZ25l9WnnmkXlHTm1PLQdk5RGf33CGn1x9TWM/s95ZyUhF4ZzQgO8kxvbyJ8eWn/zY4PLEujQkqJGQO/s8DKcf9pNbfZ1J1YjUK/+lUKBYx2cei18668l6JEmMfLRhAt/UDIG7ZHrfM2xfGUldkbYtNgle+8TMAQohONZVpdAN53/vFA5z+05Zuqw4ArZN81MUJWsqJncbwHZus9YY8i61tzLcn8xXjp0vSKJlPWmPRKqKb0xYlocaLeVR6v2yU3atTsA7qdEkARvIscDR1C8m9t5cJ5VVkBTDWDArwxfR4ZmW5EDg485RUL9wzKZZRAzjROnRar8Vfu2yFqmbyKbeh7ryS0uayuH3ehUckCNaodx5lRTcJEynpJWXmcYdpgQfhk1fvJru4ULuS8FKNQ==';const _IH='59b60ba0ff90fbbc33bf1b0d42d12b906c3a96e1309ae72974d5e090acabda96';let _src;

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
