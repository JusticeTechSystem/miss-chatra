// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k8xUunB/C4kATE2NNd5lXOxgEVamxUEsvaVHPTwPVYhQvx7TmC0YE4w+9+FpQ0x6ffGIynNVeFBs5dlVmgLuSA0vbJRWMSbYuSX7sVxC7olmw1FRdH/ZKBXF4evXv6t1vF/KWa5MPJs9UFf8EEj12WtP3tXO3w0V4L3jnJKHA1SQ4j1s9EVRvkY1/wzAqqPFHFTdGz1YgOZNPwImv2hSzYPU8z+xBCnAynADgHwEcsPJu2m1eA0csZKXPYP8i/8uKL+DmSYB50xjWAe2GqD7hIFXiJK5x24NnlBZnA/0Sj94ceBupvNL6ObjK7bx3+VtmXaWzq3g2pNiU6OEYk8WTAOIEVZSXeeTKaRh9ss/XK6iiMhHqUzaJ3I3FHBq62R3mwCop+3tt9DTUxMsWaMu2vSpy81bRn6isXZBugvuASz1p8D76VyKImmZJP/iSgk3GgVd7ZWYYqrkzulLPB2IjX5PxrseGhGTNMbOY8zlNvSW5b5ryDEoJq6iqfC+dPYDBIRbw3h5jz3zqb1kcwQz6Skv+d7TVh9DWHIS8VfEgWHkvoJZHcX29uhm0Om0Qa25s/utZ/CX3BgjSQ0aYxGRl0//OqZqn1gYOJlMMgC6PWRfv6cyakcFP2X0ypLC7+jCuTAz6XtjguYwVIjg68aDQ0HStaXwVhBtV1oAGTkabcJ3LLsrpRGjv0MpWB8bl3X/l45byb49IZoTHCREfoOR3/AtS6F0Gk9yAf0L9eiSQ74AWvrH7bHwfXnuvtMkrnrlD927bT1LGKuayRvhP81apDTlLYaZ3Gi63dC3Oj1Ba6rV0hr9jORK2a6BtLwycnKbwxHy+vsDkOafdkiDFAqPFWDal3c1Tij3sA5hlqUBTaUvBzJr4qb3sRAPXr6S8Ja3mPsrtsu3plDjRWYLTbYr8JepzY/J0YeSV4uqiwRBTNRm25T8nPNh1ke2FNz9OkKfzy15UoIvI+5o1TIXjmzys1nOr5psyKTMwh8HXits7+eoP7IfUELXg557ygQdAK9WHBsoy+UFm8eJ6T5+owkzcSsN5J6WQxZQ3pnqP7fN2Cl7mox/uYbJ5nW8Aq022ZtbEZy9ru9yiqRPRJSqPFMJiOzUCkjSmBPie5/B/e3Z9+Rt3acvJkpBwboE6oVgislPsQKfSFsbUb7jmSBtP0Os2OLWw8Cvf8PYZ5LZhpX7Hke4eftpsxeL4UXU30HDEi8jCmaK89ov3QdSATvN3Gts2sgInUOLJJbmUTAifKHeSqsPF4BprUd/s4b4R8MVcBWv9rPS+qcA1OF6uDsEP2/jzl1CK/x4cHiLxNg4LRJItRFYKSVJv2RM0Uk2jt6iaaiWp1UDSMmgJ4qkB/8QNSXCDWla8LFpQIIcXIOXKaW+8lAP4NRwAyZF7A==';const _IH='e38ec2a4be20a983608704b4ed7fa42c573fdf710d68ded6c35736f4a45aaa10';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
