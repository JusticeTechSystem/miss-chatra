// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DoCFVStceof3gw+BP03mgTJLv7RYPMysJQFSEIdO7zrOoPFbtAkxoLi20xtRD72DROuAoULWvNit33l5/BoZNIVLwX3F0PA6oKCwyiTEsXlOqubnfk8JSq24iBMaG8egvfhpKHhnw+yt+lO9gWkj/MgYpH2cIkrEGY52yzy8+s1mvNDtu0QQ8ENW2bZCGgqm/iDHpRRWWmmgrhVDrttddg1UGLiBO3DOP1nDQOuePh3xDEeWl9owINas3AJLhX/ODIQlgA7+phBJtnIvoQV8AMEdaIgYG41WGrJLWnZqlhfmeUyn3vrgx7fKq+iPBCSil/1A+IgnPwC1k1DA4PkAqb/Z8NjCelpdYQpGLRqdBgxYjTeuLFzPQxBqtal3HmDm6BYn0GQ56aWViNAgxC/sioV0W1k4U+28LIEh64B0to1uqqrJyrnwsieysz4Jtn4lnbwhU6AGyp3ODmSawHgkixW+E1DsYXDXZRbppOM4h4CzaPPxmOca71yTv/e+h2nWnPa5SBh1VYiHCWTf+ClJzMu+NNAYUSBlTOqm8+V2VlsyeXCvxWmuKd0kuXuhm+kl6gdeUNRBo9LZ+xEZm0+pIZPkj40/X453qdkDffJn4eHPQh9U9xuwXEz6kf3qSEeeoJJ7gUH3iADHHU43lg/S2oFVOlB9Eu48sa/xzUlkJYcZlMty7TAvCorpFZnGLya5LWEcRaflwgarnelMxSxQ1k2KoAIE0SYcAsoEIdUPxlrCNwwvyiaeC7oMSrTsPRmqMh16Ry2BpJU2SbhJlgqKt5aqgM1DOG9lU36Th1KKnU+zNSOileXTSBT15tZd2nDcnygpXmczyeZX7dcuQJHLi7lAL53kzcfNM2do6npmDvPx2rLmV8kIZ5vNNnAAJDqEcuoL+3dWSCN5ebVWOWnj5V5Ubs15DJvvfaoL1ssdYidR/qNz6B0ngbxKViMaHcpAV0kr2/b4/LMM0b9HEs1sqyqceNd6/onbk6+b7oi9GgKXnjLrEfEAT7WsbExbhvLzM96lF3367cPd3PF2obL40OfG92fZOHmZDBQJ5mmUsxXm3W3nUolI5Py3Zo68Vq6cGWuRzh+MDHeKTkeRvD72xcOM6roBRJcSPHUlU9v8OT0i3u3PpTTE8VuHy1uRB2Jfditkh+sOKrgXpRuVIpjyTObLUPtbs3hQ9Vq6h3I0t07xcI5FAsWkruqPpzJlOWdUdBEe1dAEpC1awyaCdNjannzA0H6g3Jih4HM8YFz40PpvqOGTcOpxgM4dIHsoRkkpY4pSkZw3ZddbGmWrDnbooLFD+5SlU+t+HubjdEvRFq926v601QPpfjtpscqqdAHr5pgna+Zk1MPbZBLMLI7IXhVrn6s+b25zVdm9uk6R';const _IH='54697bb5a3e333b966cce1441d695006efd51df71cf5a208e983d9273b7875cc';let _src;

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
