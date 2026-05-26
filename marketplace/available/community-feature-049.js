// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ffhATFRwDVCkP9KO20oIR/DPeGNcVNva71WifRqrEi5a4XpG5nc20he8jU+cwmqZBg7u5daJvZPvOMjewXwclH2lQ4ThQ6LEy2nbZG5NHmRxpZrK5PKOf2uJd7D6sjocjRrC0BQ33H0PKdapF9tD0pz5ydTcGnlHuaS+GUMO6OA673lxWR4JaD0dp66fXvX7k7AspBBwhvvmLrUIPdNig68wGGCD1TE7dlqZ4bUx3nG1wsXP7UCvvfV152KW2WE6Y/QNVRBuaEuXLJpPntdAsEWNRM77eFO72Uzbtflyq1JkfKzBYor4XuEkGJvZqPBBWhrvMFE39smQc6idSOaI5KYrw2XfGF/oD+udSnSDm+cP+WOms8Hgw77CeV7jrfbvON3rOSBqwdVPu/gMBBMLs3MNWwE02pHhF5wd6vPcm0W0ci5kHk0UCx1Mdtl8mMgsGgd8N2/92D8jyAXfQb5YwsMxFjwRShA2pyPgTL2YNmB8s4GiHkC5xH7DnxUeaHEuK4+kub3xoIhb8etSQKv18KpCDXJFfySRZ+fvgUrGej/Hq8nvs3Xh7C/Sz4zU1Kf2Rx6t9svG1iEtuk5z2MgqB/i0h6c1/uKcJE8nPK6oaAF6gPgFCvcZNZCPXQKZbzMA504fM3xBREqelpXTChYR/RFmCWZQun55yedc/bj7VF+wm/FTNplLSTmD/RoXk6AjIptTD7lP8Qj6VrciOtianELB966Zn5wQ3uvnLj8CrrtWFw==';const _IH='605464da3645267395e90599aa88c707b691d22738b6959dcfca65a56f4c46c3';let _src;

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
