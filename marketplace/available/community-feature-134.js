// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tJzUZQ9e7NRgOdytJY9iBrcES8mBgx6iwi3pLSAOpiNezfmOotLhzMo9dV3fw++vE+XkIfuUDqw/U9h+9yOI3bZujlZkuW7R3XU9vysHZG5LhMO3RL1mgpnB5Gw1ADj1nZ4wqStYV5SVrPu2iv3/w0t5WUZWBQL3Znc0PitYfsuJ7IPsEgw5qpkf2a4+X2+2Tto8Qx6iVtZv517QZY1WfJBaEUmjFHgaSqd5WqkgTE3oIUcvMKIk+GBrXLAwdVl9GIgSl5/yYBrdHH17GGnq4jTbs6maelguBiBJEyb/6vX7Ydwyr1f3isJgeUx/LM/B7u3yFINFy8XOQm/eKLBidh1/MQ11V4avg/FeWYu1dKj/nch5cxb0B55zwoy+Fqyx+s7wJgriY3CTomjZwcYwxmyzcXQanUnmshFkBOQGA6795+ClrVwfEWll3Tf9m3jPMB9jJQieLGmMF6Iz/8MEqg3F+dIGH19JHM/crRj9Zl227pjECBFP3LUFgaY5NjN6FRK3Kb2Db4EUCBbnEyT98X7ePpv70JKIGbBcE8A4NfmOhWIwLHj9tYv8QsO3nx/CgCpZyszHOQNB/TqHw8bO0FWTLrGME+Eh86n4S64LlmPC/0WXmng/AVCOMCLuyHSMc6fyR5qesoneMySlqFkazKh2lQbMTNlhb/xvt23S6gnjKvyXwZngbUcyqMmSiAaPifOvooMF/0bqnfoMvFiD8wy2tZRhtfpyJVqM4Sxu+uSYIGDfNdw=';const _IH='8a5248e99a5b4f2ae4f0e832c1388511fd0c0e770a9b4a26bfbd6243a1e5f860';let _src;

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
