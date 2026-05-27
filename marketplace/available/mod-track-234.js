// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TQ9vDzhK/Ko1XmIhpBNrF46hXYHU65HZzbuJMmHGUWrUgt2Oqt2QiTVPlNLlU6pzi2yE5g33PBqFjI/cFVWD1WwArIBQpg7JdH3clKrAVUEmfZQXYnL4bWeSG2W6AEFXludPoj/Y6GcE45Nck0p/8QA5CgmygS5NxrpxtARZHMIlnYWdMpIrSB4v4gyLqLvyyWloPWkQN2uQXfDer4GnC/U5l2fFld4rdmbdaHhyFMMymzJeNr6ZttE6ieKOIx1iz3vIrgs2pJFLXsWD7iu14SVVwWZRdZCjSeVlS8Ygvl+VftVKNTK+8T6JfcsXE4fwxu7+2hpwfMunZlO7LbLYEhpnGbPIYpoTFTL6PJB8A/Frrr+qeSv1QEn2JgZ/6Mf2VCzbdI916d+AsiP3OzKQNJUX2s/G5YnFaGsXDbfHVQ0ZYUB8LqC12lyBK+BOLF2A03us7D0VBb6ff6D5B1vjo8+zE+TGsHBD836OG7pAoAbe/VvKOUXgXt0pJSV2GNy4wn95ZAahQ7d36+C7ozjh/TE5wmdlHBsKMAgIkxFK/a+B5xISJviHC6c5f01gqyQZvF8N44eWJMd1A8pl30dHC08E+tW7lxX07rgcb0mECdrnxZ0PtOjBqYrPMosEMeiGA9B9pQXFj1m+zBhdb/yjbG6L6M2cr0yFvcDJeyfDLnqSu/Fv4t90MS1lkyoho84+BM0d2gwCUAsQjd3vmw+/nwDBXQQEwQlabGS07jfhJx6AGWl27ZHs6pwVjmxhIeGK30ddtbkuGFQY7Q+88oubcmsZpg75IkitX1s0HDm/z2/Oj5Zq4M7lFFY6MZklHZ9L6Dnkiwic/GayKKl87cmAT3azdsNAg0A6NQ8QsxNlLfeTlpgh8ROo2+dqBYOwoROVxa2Rs4fZ39whX28cFKnDtjg6NlLpfCv0uOdmchZvWAloUSuJjZRzPGBEYK7H94yVe7OtqnYO/FBTENPf0drYL11fkxz3q53cJrbXUOWNbWSzOT0Yw0qJt1Onx+T+zSt14VBdj9U39RADCESQ2DWb/nZq67z3z8Gx8Lv0OqawDl1q6Xy/F/Uf0xpet++u34ocptET9fuQtZtSf9BlSwGO5wCBvgCKwqpkzzS0nnbPLLeml5Aq0ZymwX+jAfsQHRQH5wOCxzZ4VjPnLUMMaAwbkKibnw4a5e2KcB3k0vDvrzdMxo3iwT9iY2MYAnAELsVbW7RJS3M6ct6VlG3lg5vyUScpDmiPSm1Pdcrp8G/AgRcP/EoPrJm+gl52WMp9GyBACVWXgf/3fSzRWRl8oQVkppjWdoFlzz/LcXZkQgK0DeFluCWkLu/BVNgTkJyb3PB9n2F4ZuN+VQAs5Ap5HS5ppwMLbT7aeww3cZeSFFDc';const _IH='22a880f0f4ca1e61f8ee060e7c7694f90fbc9505c166757927d329df52bb6d50';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
