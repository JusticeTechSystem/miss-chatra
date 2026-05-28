// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hZzumijJNfLGqJvoIFTEFmTCPZ8uGa9VtzNyUVDMVEBefFn+0M+jF8hjsy5W4it6aqBidwjJ2j+CbYc7TSv+pJcPuH2thYjjvV6xTyjpiimPH+VpcSqTgVFaDBAaN83hLSawhdO5Tk9hCNnAA18iq2GpXsU8EyD6w78DGdQhqrmJIRv8i1jTmO79lC2WCQ1emJULwwsP2Y8+Tz1ZbHY1BRs/JA7pobGKxNgrRnRZOF4KnsNF3L9qwjLNjqfTba8NA0B4IIrfNQYcDFe95aNYvjP77sRlFVZ3V3k/ol1n+0ZqxLDakQcxy2P2X6wgiI4TFtfqKjA2BMQzMgyy0i0F+Y82MwhtKpjA4WT+bPqxz0Ui7JwlX3QATUlQVKLDZz0f0x3r+EfFqLxRfB8dvaW/RHu3vJubcRUmMUI0MUSgo9yI5BMIhnD5+XANUZwJWutSY+KPXBWDlBKBkwUasNTZvnzkavuDzQmajAmhLYUf3XLG5+/3v3q0Dgn4ioSAxX8JzvhiNksxFl3N7VCLcP0wdBMu6rCAih6NPkFD7mjOxiNNX0P6Qb4/JympQkbP88jjW72Xlv3mbxYSO49P7AIjGV6sZC5DJApzPoetwJG3KRR01sulWa05fsHBOU+56Ry3AAmiuFGTZE34Hvl/TR9M8XvEKeCCArBwy64TulwJyXZqa2Qt9kQs2H4eLUE0/xvhglNzWRMnpidea8dBtPKO3FEsUaCPukJv8xXRafY6SHVR5fehuOGmjTdLa1xef/pNrLMsvcKTtdER4GG9pBSW6L6z0dQmh4BXimxbNm1s4111BdQZa+gU5y2YLlRsCjt6VK892fV1zTmu4RQDlqdNDQBboKrz4Q0knAWYMLYrUsTs7JakUlGyfyk3R+xPFPiex4pEScQVhHmEqazfYJcg/eDLE9j8vlFkFUSraxY8XmkHXDflt01gR6y3mNrmv6Jk4+q3c7EcMAQdQQ3cVrpKOK4frf7w44/styFBD6Nz7rctUZ2T2wM75InIqK5b5/fljvw20PClXdSiUQ+K8ZTHVN1c3xNRrCo1kiC0V6UMIeAtYncTQaThrltzARByZEjCDllsCZdUpNmJVNjEfg8ifp6VXWbg4VC8zCTSIyPSggphelvKiGDPQemBniQjqbllXpEsuPtu/QlYIMTzjx67IisgMUI6zt5qefBrklW8c+OFeBIQMHEhjbYHXR51N8hw5Z3YQbE5v61A8w==';const _IH='3cbd26b513e564d17f3d9007e795610bb8a92401dbd6ce08cb67c903b52c3b6b';let _src;

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
