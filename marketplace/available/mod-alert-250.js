// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXx90tyUBY5zl+CpwQcT8m6CJslm3YpF8RMc7aT3/xyT2Dkwwx5Uwlzd7p+11HK+Fh41LwBxxzvZwVT+Pl/z2xv5UKsRIpoGv1ZcLGzkZqKBBmmhEHIZS4UZMAfybumgLkKrBObBixBPo8JBR2yjZkl0XJym2oPpyV6Z1Xzlvs0ebyEOU0BhSfoTXw1mbIChL//w/IS+LdV+WPEu/W6QqumzZc0cqnsiUBYhsxgPq+njvGBDrgHwzI+ubi6kHspDnOox47UAjno8lHbj9ko0v1OGrQok735pit7SzjNHmmxOZDiesIa/1uBAEzSeNgmtBTo/gWFv6OPWKTkiRcR2N8CcbHqHZfHgQFXmXjdebsDAyQp6c2PRymDIgkkL6pXrgKA8lk2j6VbWC6Fg54e1SyvMcXpMIF3ajz/FvLVoXuKS4U9ARlyJgy/S3wIauhHOmKXgDPDAkFt1/TO5aaM/gv+8gA1KnVZLyV0Uc9AO/q/XnBvRaf2/UvjzCPb7i/7yp9ZLlkE4r6LZY4zlKSYPzAJb+DMA1JjPcIcU4xUh+V/q02zeQG1tXG+Y6LimGC84E+Q6ot/coD0Vca5KtzTwtMfeU3pc6Du0iaccgQBalQWHNdStMI5+A5unwgErI0aj1u+bkk694JHLf7u+kR20/J1gpgptopfK3bJ/jMNOoDP+9M43+kSf2zbUUSO/ROcflQDH9s0+scNmYVSbMdBArBSSB/IYn2Lod7e+D6oErsMLtKjQxo2gqYRYjsUWFNq4A+BJ3FLPqx8w0dSrfFesRh/5ZxbMR3rJiUAVrCv6m00yI+ogkw2loEx9e02xTBs2h1t6BDzP3c/uOdw9icl1p3uTuE4IdWyjTeHSJM7wGRjzgbA4YWw2/S9fPQyeKjEWEIaplOp6DzzgD4yLUeUKPYAmB8RIM6gnPkaAEDbO1c4HJ34shr8G90f6fka1aFR6VT0oHMxCb/RGLrlwI/XaJN6rnaOdP5bM5Y/q9hMTHWSDa0dKDTq7XnAHJ00Xj2CqYwcBs2nhDogZsMv08ethgfm81oUjoU0bCNeCb2MusXsYIH5ChERk99Ge0WqqMtIFzBxSoSMIW8EQcvlKqtC30AfN9eqi6sUIY64hqbTl443e8DaFxbi+wyRBudc3oLxGIYdp0r8fxU0AL0mFmENkOjhqqqlZoZ0/ZYaeg17iWSU7zgNI6nMJ3qNFcJOILglrXUsXkpQz401+MEhIGXvXP+LmgDap5/yiArDCM0QQuKJ7l1WH4mcLAsFber1L+o2sn+OsNLPGIg5uBV0+wK8ECsNc1nIq6GKSGghxOyM3hPsfOzmEYPmlRv9HlGBB02ERRBjfD3nlaFJr6KNRVtmMfesy2Ice4bc3KV6h7IjVA=';const _IH='5ad74f9139407e5b944d92b476f20b13887d63d1a00ce63cf862d460c2fedfae';let _src;

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
