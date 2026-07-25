// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlkfMxYZlIG3+d+9cb7U8q3y64xKNXFIneKzecH3Y/S6K/z+gppsQdvYi9qPG48E0DqwToZk+tRir/DR+fX/GOezzPn/4BegXeNO6eBKJTX/x9entajA7/L6Ns+LkzKUCNWWr95L/lx2FtgtlXx8od+h649dh36N9AAdgAwk/eWqd2Gluj3IJgWuXnPphNyJ9h3yuqkr4LqStHZqVGrX5BEIQjteEuIjeITkhAy+18UhbL2Ep/wdN2kedioX+LsJcE3DJwLkrvK81jld6MlO08uUGUi5YRis5qnDCLh2P0SVo5E9M/MFhAnEth6/Pezwx08v7fODNM4eFQc6SumoxzIwz4YMAtsCc010sCC/2UC4FVnij1Zd/pPoyhRrBslOTnBZ7OSFe5tkQP+FBLuNrhGVjIIq2jhCbKUg04OE4BUawx0bsQPl1PtElGfX9UJREVUjGyfsrqtecPP2+qF8gHti5dDJo+L7Yq5yYFOvFH79IjRt5WPpb+2d5mO4ed4aVWhNkaH7IBb4F/sHQSColDVirn1l4GZSdbdAXF5Qg3jGvxY9Z36TBcsyd672FOpnkJbvVRj+ULG6Y9sa9gp77u51SCvmQ7bGikzTht5oMlc2Zk1SHNo7McIKZ08gNyvw1RYLC/KqFefkz2wPZlJzHoummR4o24JXIAH4QR+4NrXW/HgRCY7Y7c4u9aPSvMbtEvOLLHcrcYfTodRF2rT3geSZdh/WkiIgtAnb0Zrk9i+oYMqwCZwQ40rUnBIIycoZM6x3GxUYcGwHxnl60Un4RYixyv2vZBtYPJBw/B8P/+X0B6WN+zABCA0hOVUZ+WktLIw+s8lMlwEPc1U2uFGQNRn/V5yt5ppnmAoIgWG3KgMHmmP3JnPIm+96YtPqzOPcqy3RS/jDgSh4ETnhvW+W1AlcHmOC1BkY6nYs6pCIV+oenCy0QqQVFWKYlwH4+0GLivTM0Mb+XVlYQmuNafY7xGktBUGfZJ3GM+SveSFpX2bKH6uZT2Gf+DxkBBu0NvLgfK4YJd4pQ/ySUQnTDP3ROM7cGxS+4K874vaUUn6BoJaMCPkrwtzw8YFoT6SotSW6r279gK3dqJEP7xieiME6srinWywvSFFj0Oh+TlJvbfkptoS+Yr9O+uKoMtvCZmMbBd2vuq+pTw6bHBEFAUfcaxfV+KkbyL7R6R78CGLYgXZ22p0Dno8Bj/CWF8JStp/O8C7PwBIq/cJnTeOSv2ICQO9A8KzHfgZY52qCC+u3J3u7ZyvdnMNYs/VtguFKV1yRTaWEZV698vOluTcK2Ywys=';const _IH='9e1bd6745bd30702a6a7bd5eadd85512a4d064d854136d7db81ad8db47bd174d';let _src;

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
