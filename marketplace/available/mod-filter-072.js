// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3mHS7kom3GW3LXhYBFLMGpoaCgKCIXyiVis/WtAS89nqw1bdn20DDB34vDcSt1tkWJILDHRJ6/gDg8+t0wu+g2/tLKM3/OMvMnjf8y2pq8YaizveAuCqwgqwx4Sj0fwlnQh4uDP/VJ1Kpsw2+/Ih/XcXnRIaD7nsK98kJGM9Yy/qPmVGXUtpU6c1wztiPixpTsaqDpocUW6YGozBsHHzdiaBmhOo7Juh49y+5yPAhuL/xjGm9gF+v/i44C777dwprL5Ue/AT8G93D/ThjzlgpLS2yBBDxak6hhStQNbZmcoScJEoKPbx8WhWWJTvqHkzpV5Hne6keoDc2bIx9cfyzLCEYfkE/Nvj4tOa7nzpZSfO5HkbnPKDtWK6QD54zPQxAMkP9o2mMypkhbJE/g8pdLKjRjPzvqc/JDWTFwdlvS6THs2CRGDPIJpp/MdNuVAYeiX8t1Aj8YFHG6WfPqaIZrWlxpdTkCqymyNRReke+4wrxNjzHEeYorMb6MKxbWGXWh1XDFcX7dKrKMIo6/ehaerDiJZasHSDslBzZ+kZaf+bmUAtSyNvvE7t6tz2qsdZXH/ZaxHspIw9rxe0NjvNaI+qjhAUwVQgV0CpKZoV3XAUtuUKuCDe6p3f8SCFFF42/Ia1hUmwY2tqSzlQbmyvOEdj4oMV5eUraK25ZTpoZ+bYNSvuT7wxze44zTYuGOWUZn9E4xQr4Mioheb//g5kJheNwIJk6RqKjzDlKhuB0glRcQK2JZ64GcCvfj/eZNK8tLruLr9AIJU5YAqPQvPCZdoKq0iYnJqKPecLoFuscIvqfSrANnR+dVgAtQhwZ9X1RURf9J8EBaC3YIMaEYn4vUVJglcloLaswwTjaX9yuXX5PYMvrtHgyHY8eNxK4tuRdLNak9JaCuBvkfKEn+9Wc3jqqQ8bDLeZ7P8kwJGerfAn8PNHsWTgoeKUVx9Mj+hew+5MDfyaDLYRGmCq4mCjn3OskNF9fMU2mxNZmlx9BhvAdgpuoOyB6vsbNckAof5OsYyOsnAn7PIAjAIxy4YhgRQDGKA6T3o47tebhA1s8X/ktQmwaAsIzzMtumHav2eU0Fwl57y4GnujG+D8SMKrH1CkNWsIjgogPDvgbcfQYM6melNsenEXHInpHiIVIRIFHltWhh1sV4KV690s7sHnCuqtA9fButKsDMl6IpjbIUthih46T3enOe9Hw2BN+4Xij7wf/PWREPZj3CDxqnOt/gRCkvVDT4QTyFleQdQZkckCGS02KWC/kjh/wUelpNsDud/bOkd5Zy3fnQt2ssYT7bOy9lPn//gwTTG/6lKH5jSPeEssAD0O6bu3Vh+3TFjyxle8RLbX7VKHgI8B0Uuojec7iykMPuCJnArl8mUhT6NVk6J';const _IH='a6cc2f6c35611645f6532a2a3edb8bfcf0cba2420a5a683839063bcb1d3774be';let _src;

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
