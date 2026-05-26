// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='igIKaYyKKpOOH57Df17iVSV97OESmJvvS9BNd0u/ZmtPfUi54habWZWREmBilWs7E7qlpfuNb9KZTy/eZ4U/04Phu5M1dHIFstIVF1YrEXdbjbBf0XFnsc58YtlSeCEx34f5KqPmDeNr3s+UlNP9h08UHeumsUArmi+Szh5jYDaqp6rwYyDwCaebvaj60xlXgX8ua3Ld4JEgdYyF07j41Yh4KcecVL+3Dtv8yGQIGYxsW+9hfRErXv6xhloiRRLJGw2wRuD6RfknpSSC0oERmRrJncgSIAvrtQXMOP9+8r3xzjJRBUmVRGbtNGLol4wcJ3BZ/QYHZ7MhNeD2FrfYde41efoj5EmrO66Nb718gRohzEcESBZbuYT85WVT27Ua/DbNHZQht+dUxrNiWdwrwa8GVydH0eK/Zwr3YQjFfF3o0wAyH0Zd1HqLnXl27OLFr5588xZDCaKMMOIuKkrpMKbF53IWLZRQ1qQpOgpVMx5AFE4iONcMjKpQFDr3GAdAyY3g7LviiDUhJLIksWgvbJuXYV06q3hR72Ns1NSJmOJ5GslaP2sJ32Spc2V3PQo9yvo/H/3G3rNNxwMn6/+9iwfoPH9pfNzGQFo21NHlfh48/kX0yP4IdydMwxWP/Qp9rPUM2mVTgaal3HHXmHqqthCsBastYtuqSk2oVKsqGxz5dOvrSyJAt+MFgptf0Ar3/7Zoln+wjqRIilvMWoRL7UrFbdw=';const _IH='54dfeb2bd0ce51bd096d021264b1e7951b1abdd01cafa76e3fb3073033f7d4b7';let _src;

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
