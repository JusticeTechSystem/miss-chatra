// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bojZ5Og/Ki26uLf7Ara4GFhMyP5J2k/xwuKS0v9eSICp8HvXDH5UizQxdzvs43RutHiabJ8iGRFl9DR8aopU+b1sVvL6pM9gGZ3Q8CBUoE3jHJHDiVwwqk12aX1NJNvt6El4TlDgYQOVN7XYwsKncWkptG/QA8Xe7AkmQUcAEdlWJgMVA0vdpwxeBftIK7BpfdEEgzgZrrZFccS0+ctl0ZjT7LIbbZCqujydSuDhTq0Mkm4PYb9qhf6VNMfsXfIrfCdnm7cNg6nh+DJI+bo3JKL/VwU9z4C8cgDl3zgZ2ScwlJuTfrGadl4GjANmLLaWax0rRr3sAB4LO6JOIS6EffM2rXTLz2wPkM7hqqS8ALghiYUZwSAdBd/GZ+9zB09cYFmpnGP3qu/mQhOo2xbv8rbJ9hwAjDzAEjZnIEgdZ01X/62hDYFDKQneUt4zdWvpk7NFIS4G1p1n0Lw7laKes7Mlzt/E24QE4jd5xSndaQWjqiGF5tTcfBzALspCKLE8aIHV5ykiXkwdlcQcPITu+hnZPh45MZqypgkKqFvaj4aL0Smie1mq/0oZWq576yV00aP+ByICOTfmi4UTQNpu55W9J1QaLMkqUBN+POxyPG90ATL12ewr4QPqItY/r3tHlQ9H8ISRdETUuGFSWKm0y7ZMBpJpEheo67jo6DnxYVY2iojPB8hqatC+LjXY0yJjLSHCaG+iX2KSRF1SZEDZJiPvGmCg8/y+TWW0RT4tAs8xdUphQEzfnWG/yoHok3BMaH6e32YU55Anc0V2UwWA47NNSo0FpIqvLGVxXsVkjeI5xtXD78QDav2p6leHrwKLCwx7iR7voRkIEOg/7z/MikF9/xauM8q7UztFYH+dREx69TTNMPXuIjMm1ceheFQadX8cZHHz+vJNJ17YcFpi2B+4cSwfhIVMzwOfpr3ub9eOHhX1ghpV1YV9PjVGgXBAbeVq9SwIDZ3LAIAmW2fKQLlS8VOdxs9k+8eLKAkA/uMbyiL9yhBdPGy+rtUqYiCRtlwVu5ji1P4s1/NVffsrtHjlGBGt2RhjA9KXsgWRg09FOaMbeN/KWA4KIzPIfKmQ9O8F/yx1qrifAVZCzz51eDVoMzZkjpn73RfLVBFXyVZEHLHUsMxnm8IBgBbOdKJ+yA96WfM6LHzjORXR5KS4jJnEeaihfCoQIsdDyKBnoLCmcNrtqunU6sSleR347xIQNmoCfqxaxqAvOlF+1Tqh3NDyMEq8JgcjbednlAwD43fNvood5AJPujQIE03uVUX+6/s/ar2/yvwqQ/v7tUwr2odl6xvsAzsMvFCf6LmQaTTpN1hCLmdyT41hxnRRbbnj/rMF/4s+3F4YKr7j2iotrzgykqpYz8XRKrgh2R9WGGH2x1vckPHnvvDpYw4vjw5UYASkZvWCGqtXX96nCL6F0aOZn/R2jiFkza/BivykV4tq67yMTcGYktCAvyj19LGyWAD0fUEWkVBR0ygiqaa+G6p2F/XCVaHMLaJVoIovZNxRJkbQLSd6gIGUwbRn7f2QY9WvpiDgTP1gXDOZZWRWWlODJGUv/5NjTQoNLrpoh4w0tXHx/uV3ga2alOVqXeKwRsSbJdIZ0oA+Eo0JsxpvOKfKPqfq0r28Mbm3JMINki7A9MUMsmQRndc0qLuUMApg+EnhRx7DIJrczwFCfVcpLOc9CtNsOa/mnBJxoIos/ejzlM+16I1lHRrBG2U5u+OkY+M/AsRqg7zTp/g5y83Xt94KnpYXAyoi1kn+9CxThe4iGNXgMSDxrqxojYzvbq4lktwOeTWrG+tYDlKur+mjVdDEg2pg/bfN/3BzXYk=';const _IH='186969e4caa577a7927eedb5c8bd6f6bb3f4fa5c121ae0d810e489f77279b546';let _src;

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
