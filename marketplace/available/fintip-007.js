// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQq/N59elTXAlrWm0r3QNFOtm73N54sCMGs5kYQeaa59U8bOFCXqzgFA2bXTky3EaqLRDRPZcHJLuoaJHXgtQ4wW4/sJIzSIKcXiTz/a6o+KPGv6Tf7y3V9m7xukUv8168xkPXuYTROU+nyC7v4aSkVpgHfeUipF0Hw3NAfftDnRnMnmTJ2edipybSjt/uyXonKSRWaH72lcQqiUMkeI19dtwirLGv1jXXjrcofl+jMIkqGBrC/wurTufSzzOjCcgCX4gVJqmvg8R9GZ4fODhcARINnye3fXekWGyynQVlL7kZUEd3t5EsqsvBQdqs+fqLjkfspbWN5v5afIVBQfrYzzI72RW/oy9z3LCq5o4NAuem26XQW0qaQKUQKupcVTvqtQ6azyCnIXf5xwnga+X4NxFiBcVVzyRvOCyd488tXLRwyBbRKrQ03TcxW071I1ARcVqKOKewda15Iyd0X+aKugisb/eRqT/+O8ZZhD86G70Hg7PmYsTW6WvMbZZPr83x5msFrO933EBspnY/kemiJdpFf+QJXbaL2E0nBrFwr05o4ZzqSMx6X2vZTspJCBxyhSHliQEaGjC2g1HTw4hkcMhb6i5Er7y1p4kFqYD5AJisXo2b2h6P8j4eDFWho/VzG1C8kXHLJPLI7bpzVc5P6iUTx8so+pA/XzNQ/YWYbhfJH7B007jDRklmt0EvUTJvASZxyc6IpNuQk6jgHjw1kLuCwYxXsG48uZt0ZL8j6wgctfaNznOKY4NLVVhnSnlfC9uA+VOjAdc8jvnw6Cdlzp7Qp9jE5SMqbv8gY19H5N4koF0KUZRScG7v+YxpJsBnPqM4jcwtcO23ACiD9uCA4FaCrJ2ccr/jJcz42Tu6dwtoc8s1sQuDO+yvILprh8+dCiZt8kTeC4YGukzTtWJnTq63JarKHHrc9v/i9CSnRtIaEc9GQEFOcu/iSLhn/O7ZudrBA4kF1JtHGa30Bn6Zskb/ebS8EWobO/uRoVBrNG8+iiWHmqDtsmV+wil7I7oft94wgGp+A+NwIFcE79VuwfHpMMCYxDGtN4zUFafU=';const _IH='32d2277a09f54dd8f2816ecc09759de2605b16307dad1a364d55dd88f7cae029';let _src;

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
