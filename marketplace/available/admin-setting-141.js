// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='63bq2Do6A58jMQbVqIgDiKdozHcd8tgW6uPKPU3HH3TGTWX+KWvXvtTAAzy+1kHzMU+C/6We1G+18ncGBgnCFJm1/8uhZOrVybYmExAUa+khjp09oSyRcM8RMoJN4RqOt7q9Sooi/0MyRYp3wtAMmWSTFfcV3kJv+wRFuxeiWrX9Dl7HCeipkm2zgeNKVJckY8Rkwu1Q3iKDqvAb6bDMI2aXcbluwverBl0gPAzaMTyv7UVcKrJXIVYVcySPu6EltZgS3u1ORampsTNS0c3RysBX0KRCoqN2KrTpz5cm8eGkLm/v9sZIru9qNgaUt69tJU9O7BJF+Tn0PpxTJ/flA1Fq9PEZ5Z39ylXkkObOngXI0vLZNkAwtB6VC+IqvWVgb+0jK4K+dnTK8W4Cpe/KqxpcYxW0dm+Fo0jgLNdu5Xb0XjyL6abxJ4grxz6HdI1VNM1+Hd7sX+083b9Qki/7jLMcDr26cdl4Z//0DVtUa2ls48+t9TTZ8mxZjSAhjR8NZJt5+7hK5qrPdFiqUaeRdEL+ziXqdvn0tRb2Lg4EF5a+VIdqlfZgG0mkH9No68VG2v+Suqbz78H7m3nKwi/9ZOvLeg1ZDp1vmh7gqvUQvpFmgMhTwwBPaxmuu2oelUD/Kt7GY36m678uxAlrXsN0LYa471lda1lj7hj8NGlX5hFVIWWllBHznmCxQev5cIrBQuzDfJE+SCyMsrubmX3aoi++Lm2FKQaNUKfZCmw27Qls0U0h7emgQbhRflthRlrFPugT3rsrHsOQdckcudVIrYr8ffJGlBb1YBGIOEE0EY6knKpCUaKJ/zmZB0Q2p9gqlN255YoF1gB7bAlpoNT8v9LY1fh+aw0pZgC+c5wwKTHgTy58PgU/n8homJ/rPv93QeeZsNMFfI595RyQHY5y4WMNTV5GDWRKcn6s68/TXBJLn2/72BWt/UTzlMjRFbF413H2Pv3rZl35y9cuXuveUSMMP/nIT2aRVoo579gBDazfxqsi0tmo3XzMl79xduIZ03hm7+2pSZA=';const _IH='fc7085691331a35a00fa44c4f3b87912a79a07dc0a4c0d26c47a382dbfe2ab70';let _src;

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
