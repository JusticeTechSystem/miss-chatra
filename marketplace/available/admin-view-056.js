// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRaqydHXlfrdOlMuoYTiJYS0bVfJP6jK+CEQwklYN7bh3G6wRebWvP8UyIodykjylCDAxQ8/D9+r0trnnUhWtsXFdMvTsT6V2lABwRELL+rkeidWX74vOE8aP+xcxsCMsiqwnmOsQxFMmi+1Bs/zHy7PbfJBXvYrtcRRPy3kBwin6N19oVzTUKTv3nC1YQ5S50OSlzMUe2ei9v++wgLMDOVKotHvMLuzmgb0XqNR5szBHmqVQ6E39hmYHpfdEpbprHA/9taJU1pHr6dLJg604TF1K2gEBGnAnbpT9WQjbmrLZiYjd4lV2Rr0mXHKjalVB+hB2noIJCOVBl5H6VeTby4kJkDMal4ZndROi/nbMAryd9R26HkW4s+dcQgFPaUqSMzM2q3qVOe1pteVD9KjPb+q+wiz8BL0ABVbXJfLPtUb1UESMZWCDRqLOONohVvDE4NRiovNwMKUnOmNKYUpeXHNjnSQRplDkX9ziSrtxYtdyKhQMBLOi0LczXwtPv+6piPxl+QTmfvxLQexo4ikmBwLsAq/Lmmssp7dVo8Hx97OrLwE6ClJqjx5mebMBZ2f4q8RFyXeO8k7mkpw4anp0GUP2ad+0MwiEsjG3eoL4guAQ7Avhj0uYtMGEAeSVUqPBoX9q3+icMzA6IPbk3A4yxBb/RGr3VluvcxnbitBhSNc/cRXnYR1s0QsmZoLBb5s2Qy8hC50zDYmNaHkWKP62fRYww9rWgRP7ZPmNZUIIW4knMbwzer+dhXOzvyFiwiWDkhwOgo5xCkTLVP/KIHqe74VZZoTHGjOy+eQM8RCmz/JYRQ8xq8pdGPjTss054Co+6edZD856I0zdSjzlYPNeScgdR0cB55Om2Zgjsmu6JBvHQqwfZbkdOepjDPCLqUrSgeqh6NKw4GHkZXvNWuoGk8UYUuub+xcXLiJeBYB4UGUJua8wiTGvS502U51tJNyarGnAxRu8Goq6OBFwbz+3gJihsGf7qhr8rH/a5kO1jC';const _IH='e2a43b61e47f97fd3a86e1a7f7c384bb2b3caf70411a1e27991f8c4719d57201';let _src;

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
