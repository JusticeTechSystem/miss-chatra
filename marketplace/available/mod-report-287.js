// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRwO0B5vxG1VcsnmuBacBbJTnCeYM/zTNj+bfU1HJgP0bGB9WBGazJ9Y3xcGH5zalfKmIXiNN7+c7QDiduojP0u6l8cos5rxviNfKcJhNga2Hua0PN1DvgZ4ktTxbOu2I5jcZCkT2QpavnbOgtVsTelDO/S+YC9bGe7u8IO9JKLHbIbzS3AmhyLvSTFi8JjTapYKq8TarUoyftP5c1aQ5OXm/Bi839n1mjwLoygbJpLPE/EXdCl5w4TCer1obMPc+9ryunnIXM3OTsXZvBnppp6NiRYhftuwEv/kHCa8uzQvTEQ7rNIE26S1Sp1wPUzzCN5dQRu69uxdyb/qDJ3FR3nDq83lp0R2Wxa3psktwmIvIQv8PSYCA6SM2SK337aQybvofpdU+x20zf70jO499m+pLwPxP0T+yI8zHvusrOrtbEiNE2UkNtXc/FYH2FLyr93t3eRaY/yf6MvUK403GGVJAmhk0i3XbRUZ1dUTT4wIU6S1ihTXGRLgrdORsuCZ9b6SHqgXcWUguO1mPc/ss236WdsVK86pg23hOh/2Lz7ZH7yQbtg/t5JacTryqf51S5/xN9Pp//WzVZ+yIHPSFWCXS5QkUyu0JXe7rxT4ccq5Y23lKpNTxERSOujDLI7Kxd23U1M41krsFClgUXpBYqtHZ/X44m7dHKEPM7BrDcfmW6qSx50qiZdSlax8VgwcI5e2AI0eOuUsYNA7vLbDN4DH+QGGP5HEtKb3axHnaXOi5RZlql+hXRvfXD/uWjJzXICOQQyTSQCABWiB2Bi7367fePjHTHKT1aI/nfjDvou5F+nIOKxR0XBNfjh0RdiEVGoxv5BYY9Xpt6MdzZ4X+iYbUPU31h2aK12yLALVmFvkK4RplGJQFG/l5Qj2/jUcgngpkLU1LhfvXdZx/H+6HHnyKA09UAUIFE3H0NTRh0jJA2ibjSBjVlaGVEzGpAgSTPhEWzyzpBFZ6aAmgrSpzLyH/uE9xQ6mEyzP1kHuTjqb737RzfV6fW0DL4kGlZj2Htixkttv6OstS6yGcZbU5oTRaBwAWvRu/qW3eZMbHh39DUFS1q17Xzm6DKjc0vWuSIOcpM3JlKj76tQN2xzBxdvNZZuosvkjLW8OJG70i4JY7ET1vMBK3WmKHUUW3eHGJFe5ncCEL8tZpFZ7MVS8maF9/8soUDNezvnvYrhsmzbxnBK8OjYgX5KYlUGLMbra8GoPpc501vB5dJdHXIMkP7HXuSQBX9tXdnbo6bRvxpwOijM0Gy4YUkmCAZrhNnndX7BhmwCqUTh7ClB8KfIP8CxjB62aQNmUP8Lrf9eh9vrkNOhzQgDT5NlOHsL4AEGbA6mHJfXAbnZuKu1pFaWGrtQ81lwVy5o8EkKqxdoRmhUuTrElQlk2uDz';const _IH='f3dce55a34b44cafb74bcf5fced8257f43b12230c9a3e64ffe8d09a1b62b57f3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
