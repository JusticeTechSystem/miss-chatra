// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDTN//SwpBw588HeEeRs+tFfGoG/iVn5UGan2rpdg70lG9MQ+4j4j1QRKH6bcj+dv+57NOBz19xc17LCL63qqJmG5A+L2xr05Lz47J6b0lYKPYnQepKATk9ZEYFy3wUMpOVwNmEYFaSs+VH+2tX7+Pg0ON4T4+Kxr4wqKX7Kbztmr39KmXNblGiB+6QoJjSh6OAtU9LLEJAVn1L/RsK1eaa1zflcq0HwWBswIPgmbpKwq7I9wuUzxDQNWM91qiCW0vQ1JRm0v25fPhF8UNASuKakzg7remXT6s7Zuj59cQCurmQ6rCs/LU+++ara85Cg9XS/a/Mnc3nHErSgVNfsU7o+oI2UPQqYTFshDheIya1A6HMsjvyGz96E+IRBBTG7e6PsGieu0+VAhcHFXTKKCyVHPYqZOa6rfZ0er1mF4XqmxJ19ixPUUjrzG6sCBLsqNsp4Uw/Wcftc2TMoxmw6L0NrGWjUrsFGxBDo7utWB4Bl4XRKFZkPeRNJiUqutx55t3p6DYhNU0OGPQPuZdrdCR3oIv8dnT0vLee4Z5g3KMvkAdlxz0D2124oU2R61s0DQRze6gXwVfGdFZaJYcj9SNJuMEO7IrS+J6gomoiMpMjP3m4NK/+anpGYy3gzrjtbOeDGthda2B74tS0Bxv2E9eUvSwiV8eQRsExjM+mYNDioRYKZY8fL5kzy6luMCKI5nU9EL4BNImYhsovCKSNk0Am676QOEenA0hDnFXx5eXIs/iyHILWC4rxKUynVSZRu5+zxLOkEbhyKnVG8f4AtrfFevxeCGlXwtKI5FF03CPoCqqJFbzE4BDmbrGJSlptZm/2sfZyBhzp/Vx7CbxfhLPQabQg00zSXQ2iCzUElDVjiogp+HwaTFrnz6W4hLgbbXfd+wGnZdqETVThN8Ul71s5OlPb69WtwwQdNcBmat95k/BNm929f5CMe9ZCNGGaU9M0vBJ4eQT0bPYvU1MEESgxIelkyr1qT1D+dZu+tMu0DtSfE3m6sarvD9z9B0PTxD2UPLQVNiC5iKfRbczKOc/fnEKWBnEIWG5x1a4r/BoWnn/ujK+5oWvMQ6jrfO5bDP29FLxbl4sjXd1Jk4cBlkIl+x8apPl1xtfP8CIiTGUXgzuIsxiULIYeu5DbzXEe9Zz6Rf55QqV2/hIa04EMKTkmwItdPPdk7fuPXK6Sn6N+kUaTH0NS87OhkV1M3EMZif3xAy+8fAOncxqhq+LqQinDK4pu6GU0N356fetTBw/InBob26Qgd1h20tD3Scv9x0wMaffBL10hZvWcVTTHvHMJLMOYR9JB8Jbf15n9zLywYHJYkwDphLXFPSc1vRRUdxDO3TLWT7bfBww6uUf9dUs7xWrvHdPIwRztsz+6uYURdIpsin6dAO0a7bWieCyi9wXekAbxcufaYQzzjY3JerUs88j0QV9LKiXLCSzL31yvtoNIJiTrcsA==';const _IH='a055a4481f7f28530f063f28d9c76ade887ea08b7178b08b72c311d38767ec9c';let _src;

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
