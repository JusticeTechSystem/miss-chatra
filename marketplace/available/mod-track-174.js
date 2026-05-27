// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p2nOsyNJQxv9LDqut+SRmu7ZtS7bv1dmQLgnat1cEax2gw6byD4D1egbb3hOYny7LJoQHy5xoXzLIou4dGNtcQEh5iiJ+HUQPrpUnqBbCRvRKbaVMqCAxldR9CMCvMs4bKlfmTtS2IJqY2DW1uL5TPJhCLmlfSlRrqXB/4j3/VJa6bDK8xJfYAN78i8EJimhIC5jtbVoUb8kBmHKMlMw7Uwvxtj8JTxIa9pk30l2x+HQ82/wtc2eNtwZwQAmG1+b4D9xukiekWcILap4CssS02OOzexw3k4p0i0tHiqr+KsveVm0zUb2LpjYNsuwq70jv6ycEbw4tt3c8b784Rkaj0ZhEvubWYAGvqZR9MkAbqzkPhwGimgMyYCcReTGBz+FtufhcMLSesgXru6Amo6ArElizjyBbKXwH+R1fk5RrRGquv/xMjQnbxaAVr2azDC89o8+r54Z+d1KW9oOzQd7iK6lT/udizWJ4vFFQLrNGRwjBDc5FSI0YrDV6pbO1ZgUrprpC2RkF3SWtA52qB+osYNv44gNV40WQxT9+fUsQlFRzJzH/q1rvHYKoMpx+Hy1nFNqf3zDZmW2wQBKeb4tw9eFb1RZ6mbc1tqr9bZM9HNrpw8TmWhth+TuepaAEdHK1/sv9q/iGHqdpY8F3G0ovC4C69z36bazinREwzGYE4wgRL+kBSsP1NOamlNS5Vz4wawLQmxPizn0hTYEWr1uj1MZ3QnATLyXfdmTt4E68OfU76PVB6GxvzFalyt0IAR5iaLx1m7v2Y3bsZH2iTVShtaf6m/5S3OQlYnZbSJtvs8i5ruGc32n02gey+Rwt0NJ8w6RZJYaXDFsceqQ/EHiVSQaFzBRmX7BT8rOSd2WyH2wjusKWdR7fbsO2kH98L/jGr/cWHYXTn2X2B+Gf/X6th5KS1LVKeI7HnQ9wckMpR0P8zWrmg8Kycc+UrdDVbszDWXa3Z6JSrUIg8OZ09uXjJlN6hKC9EjKpNKN+AVwoLqGNTK4uF8VK4Jzmo5DS607NoKddA3p+oriysIPIIhPc9R1vmg04bFFj7xHlzgsTN4hktH3KMHriP/1GJ8gd7vb2Jrg+5CDtSfZqPeGFU8d0x1JS5tNpMsMRi5l/dku1cH3Wss9tK9pStJ6fQXdvoDvUiUvfJSgcleWfauntdF8X/SrjBQWRJG9Wp8WvaVtbrKRcsmeNvKS+FgWlnyVY6XAkPY8uXCgxj5h521D/4Qn8d3TnmGVf6KgVGm6snwxTirU7svxy2ffreKpL8gZ/qhGxX9VlRrSEA+we7bWd4NIJp+AZ4zwIgI+URU+U+d7+71SPxhwefHwW45h48Vt6qPpGou+MF2/ZaFlTpMCZ2sHD0d7q4Yw8hEcg4NmP3ul';const _IH='84900a7649f2b6ae81490510ef5815b0afd420b2d0e56e9011a9e82e03c36612';let _src;

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
