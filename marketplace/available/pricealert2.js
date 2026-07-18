// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT4JDduqiF0WIV+2dk1EzJE+l+eVfw6gSl1TJIPEP7LRtPlzDP4aBFDv2oW3lM5gbE5MismjG5v5bcmejINiFXjosD9HQ4fSFBp7NfbS9wLak9nZ8i7I+ns9Lxq6ybx7JmQrKyzNZm/eZbyhqGLhEegtzNVok+drJ8ejOAK7a4veoX2MpWBKe6Ns+Eq86HZbMmZkj8T30BrgUM1xb5v+AZHA5KxaFSzFExiuPQvW5b+KiPdcV3+xRqZT6VyFjcwuhTFneeOncdclz06RREZ6/S52T8JgfFdpgV1n5Jyz7dAltwInAo6PZ0pZfTQhPaJFKhbq1fNxYFpIaWx3vGnaqASxEe5oUbWTbmdtEhx9EKPKU5rr6XhBsTqqi+cwwedzhpm5yq6KMiZXvCh3pcLoIqV4HaikglfrgcysWxKBKQldmQkyhIuA+S3reNw9+w5LCAr4Ey81Q2MIIWBzk0bg6DwTw08K6mMYsDZTy77qjh5/OxG+ceAxBz95WuqP7x3PT2cw7fWIKRceXqEeZqBqXF10povL4xz3F7N99eigPvQ3PHIfGCR12UXfowMAgt4o/eyKXeHtUBe02/PqBIGolYO0GE/O90RUtjHkM40ujTFNxLTCou0R5CjXvw6cXBAZSFQCbiFhFYXgV7VyFx2Zhh6RomOjNjmLEbI0Qpua1Q3W2+MwxTkGY7vnIOYg/t6avPmGqT18rj+p25U8oTZRqgi1SuCqNJtOHgqS/sLIi0ZNkQj3xv88+NlpQJzKzl1HKB1xpMIp/eRiTVEVL41yqj6D1rkeXQp/E9M9DeMQ26BmCNNZnnTWJHhitW1x6vooewR+vVLoN60nr2uHA9/Q6Ugaants3X3m5fvoclhph2nwthU2r4dKG3FB9TUwoVNpKNZZzcKU7ngLhoH7MZRoOQKHmbUnum0qXOYwCYHVqKc0nPdWsf4N59J1cghC+SYwG9nDvDi6ty4XTZrmHbQEtBQvmvVDAA2FL8NiEazFtN4mspShAq0A2Be0p4LaO8e1UFeabfnDZ6Ut2w1q9Tb3qEvhuwR2z3Egc68A+p/AXQ+OiIRC9sTvhAnI3O+xfwV+wbhwW/Xqhs2uSiSm2xwPhU9IvswCSCBLTTPcU8MvsR9c31DpOvg78xyZr/ARyvhDXi2kBS2ambK9RzGXHApM+aDqBYkiFUO0qvJj6cPc7KBrQZVZn0OYw4FEOQxNq7KsIhq0KhUaA==';const _IH='f0c3793e97c6284827aa94e930246b8e4086120cc9e63753403b38f40b7e1f06';let _src;

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
