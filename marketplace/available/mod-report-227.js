// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSVWwZl1In2NhzOeGiMwYLrQsEfAZ+oN/YworcdlHLiO0HIbbgjsb/tC45SjsRYOBJx7Ls/95W2IyeRalqSs1R8kWZ/E47dO/uE2JZZQgiqh0QFex9oGXJVdz15B1lYG7P2duqOwLtXwNCJLf5oPzopVlG9S5EILPcxSUIFjM3sMToqPxeiP5X0Dygf58hA65kfchMtdMZanuvfij9QZd/+VGvGL2f5AFx99ONuqkO62zzm27RGobuLT8GkqQK9l2EzLD9E3aQOsPTmmtH3LdbO3a/5q7+nwnl12QO3laWC7/Nrb4bVx23HmjsBi7/PPdeuXVYHMrBkswNm/uj7QMyMvGTMCjYGC1voOih3VrsItWp2Q8EqOjc9fyjeS8Ofe/nqLGHEpvS/WoaJKo9Ssy1M2QpviVwOKwBn5oOcApdXxPYMe0jimQiBzWMW1UVcX9P41yu9WmYXO/yips8itX6Q3lpRgIr0UYCkBRJEcdSajD2DXNRqgY1Yx9ADKpaMd2ZODiKITDroPHO+9MebzIY2ry+SLUBauJ0Xig/kTkbFUfpFYfPFkEzWqCXmHTXr+bsC97R3xOT7kWlsEumdOxypSid5t5BVzPYjZP3x+yBV+FVCEAQ0YnWQVqfheg//3yFO8aDHWXvvcXRUiIPytAgafwskmiabZeuUEG/ggYZp/Pr+j/eAhtpqf1jSJtQoQEwWvUOX6Q3R2EHiELhVVj+rpIjdfOUFb3g687a/fCTFiyD9jrxnQlPNfRm1q+a7Nxow+5UKkKYGkjfF7oUlXZUOK6cjuJsvm/D0PWhck6fpqdOja2wcCXITS4NsqjiDSc5uHFa1kQy+qNQN5byNrUvVxT8b02SRsxeU7qOLwBGE6HzerLSU/hh9I7meN9go00xmXT0oBw0IThK6eRcXsHNvHJ9lYVm825BFqqQ3wuoOPA6BPjcY1qf1xU2A/9VXW73ffFR6KOKSoCWRb5mXjqsbrXF/suhG9Y+cLx1GdFhU1ZnnuBoWigoZ40k/paa9YUHICry1hkwEg3AnS7CDryaI8Z4hcWWC0SvkKtrsbgITgKYtXv67V7k9L3fHgNyDFdso188YCBgmcooYpSCHkwT0S6ZPWTCONIHCovT7ZdrOevd/56Upu419oI/sXqy2iPU6vf1nqCc2DtL2NBpKwIx+sUwXFvP1jEebteQ1F7plnXwo57PxNBI2jEo8IMjLTU/1r89RvuFIaPZGxHLVlyePRN26LJQ7FnMIpS+FmkZzWa2hWw9ajlSUL09mwUV4kS+9TSCM9lfOdMUBvRtVunEv9PgXuW1IvAcfOllsRsTe5wJED//oVxdMquZMQx+/czVwHaLfCAzUzjjbgWaBh2t6h2wHtoFq9KVb8zyiR5oCNlgV99m6VpFS';const _IH='15be86686bc26178e95e88d5ba95eea2195790d1288d0855bb39fb51f4421152';let _src;

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
