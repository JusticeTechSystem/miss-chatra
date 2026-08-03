// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToMPUv/mg0IUnFBW4DNLZhXtgK2rq+4mTJD/hcQhQNjF8FzxzdMNEmUPcCGziJS/ya9W84CazCgM1pQhnjOvvy+XCeq3jLiP0E9d4hTky6CVXID5eA56N7E0PvzpTeW4WymNFOoKUQ/yINgJHnjt3sKTicJiQZmbWYZasa4s7iVFOFri1NjO56cqz4XoE+1zvIsAZipe6G9D2/qpFm4cQWxnZ8YnUEWCu3zRJ1oxwsrm1CEPqt30o4hF9jh6f4pPII1IUE1oNNzGrZa8vQSVvgHAMkEQY8cF3cyDOx2y6QORm1A+qleoxBMrc7CUINsow0Jrq3ED6D9M7Objq10S0tbEXsCnSHnwLG7Z3ehWic5LVZRVrNuGR3mwFWlj90cnQSCycqybcFwHOdVpvyqzl0z2NWwxZDD4d5v2aJEgIqqj6OgRKDJ9Rk111DQ2s3nDXRWaRU0voYiE+QYZpKp9VjeXE5681zlnRLrtDwmQs+GfgzybJqrAK44ahmYgLIYU2JVz9jyXb57Iu/29xjsFR2rGy89lYLkRm4lrIpK2lkcm7mRpoyrjoIA1tM79dw5ZlldCgkcXHrnKh9o3jf/kR4AdLcPI3raYM3dm8B4yaKiVtBG8Zzd+1bN1djDY0iPK+6AvzXLQFB9t2viLT9fqx4duf2q/Ow6rlukG1A22VqzqpehEu8i0apsv74MwFpmhv9I+xQLiBZUnSxR6K5QnmSaiZiMl3QMZgwOHZp2rT3lzBScaSC5TbfuC9OYt0lu2L0q0syllkb1gr4Ro8BtcvTsgCHXWzXJWHiaTdjroScw0NuVvtXE5lyxbXHpGy3aA6lkCXiaZfDHGnSLBBJtGeJXyw42BPd2x37NM/JPS9jhs8cUvbjloqoKd9ciNYoxPBEaZfcGW0PE0/DrI0Z2ypRlktR1uou9qvjv13AqlskWf09YGMBLZuKswYMx1GnZnwwSKq5iWyIzuAR193RLc33/KrTtczE4rt/hvNliG/pOwt5mzu9p8H1kjPs+04M8gga9yIdAGkw1PlcoHKJOV5Jn0ZPNjeL/CG4GGCvJYIVxw==';const _IH='5dbca88c5d625f11f20f38fa1cb5c9ab8d9cd915d346ea032025bd6405c738ba';let _src;

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
