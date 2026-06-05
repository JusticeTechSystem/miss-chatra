// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='54Gmi0IOk38LCUmiIKqGPG6OAb70OEYogk+dbSPgKu5KhXDGYsYEPOZ3YH24l0mpv9HGk46eih2i5evafuvmcd9qLriRWLm6RzzqQ2gXBFhJN10NREGBYcblpXEf2jdj47p/eERY2RBL//QU/TxD5GjT4nZNzNRYkQ7odCKroYdGndq8Y4IGHgOr/HQbZzhOcdjt0qv2eMBIMdGqiLWvFVQ9DdZP9N/VR5usBNYye4px3rr97AELIto/av4CkBl+/7oE+fGDI6gICKVLQOcH5ZxsCdk0zMTxG0LikkTlLgU3za5bWVp2/BieaLNgajfCocJtUSkObMsn1Q6deY1lWQ8ss/SVvUEzZ30EB5G3b4PpVyisYUORdqU7IIJWLqOpmUlpUtpNnczw6zco7FTH4m90nKllEduqVXbi0qkAk8IQdZwAmwsDdxp6Xr4/Y59r3tNTcF7xfMb2b2lFEhryGJSnXVECyLHHsqVzfUAnMx6Y1gW1OxUxYFXEdCvGjnuuY5QoxlpzuAcngoffvExs0ghzsiYY193NFVCNvkNBc8f/MVriSbVaMapLWU24fNGBiBGZ9h418rZT5ZlL+2Lf+AHSNXM8hExvVl4a9rNSct/+WGeSgjwpFQpBZ4uRR5agl9+0wksIIbY5UeILMA2TA/FMjfe1dCtPVGws+AKMrs04a6VNyQgx3ZH77g505agMglzytpuVZow6yFBz3MtlLTBKWv0ypQJV8yTMaDbP51SGgqmgks7Ap4sortbSfEPqir+yoC0Ep0of0xdxwnEZlEEOJW9r3OOsAfX0EBqeFbd0QIM3gKCOyiDBXSxFbyoBZtMZvfqD5KDFcX2XDNAm/2wB0niGjLu900GcFMF5LJ/v/bYb9g/whTh1gDkevG6rpSXt1QeX33cJUUJeXe0esbnGq082Um+QQkVTQ3LRe6Hu6TJMv6klSDYfB2dVLqSvH889hJdOy6QIDkGdziLz/Sdkk+N7kin37uKYlF8OkdxDCjh5ohUjf2h+gBGbsgzXnzSDQ5XIadIWn/B9mx3/3B6MdqvqSZmcwD0FwhXG0vVvPlLWEoDjg4m5KsB9BDC6sgBbKtHGlhKEvctw1Kaw6x7guf1DNjfaE8FjgNWsMRj5pDe/OLeJPKIC4EIQXGRrwqEERNmMs5prisd/ljVrzZwdLAoNPTPUxMbpkQzajf7qnTQJl222IK1u0+kU1Pasq+AB99QhHhNpUcoN2UNY31sJQ6fPwLN5uoLU9jrGNAN66eyv7OOyRwLOM524KWoOMfqbfPP/cDr1+YLlA6/4F5hHmof5xtDOe/2OzNVQVYvDzA9eyroQO+ntRG89lD5hwwfXBgNUTeXnW06ATwkttbXFF4fYRPCaIy7yjuFDQZIbqyTyroRB7aXPB1YbqXe2mN5sJMPLUrgWr44/';const _IH='830014c4d21ab14f36651c2ec1e5aa28f7b7ea7a45ab5f0d878a59434ce293e6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
