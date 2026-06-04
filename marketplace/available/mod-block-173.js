// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fe4xylUucp7lNtFfY3LznXJi4Uh3FRYUUUmsAakoDP5kVuxu2Gojsd7CoQOXSrCINlKINVWvINb+m1fWMlA7CKiuCNUnWChvUKhpZR4oQVxb2BjawMojvAc6dcL6WRH8Jhl/QQS2YNmNfc6Di8fM/fIA6+fLAQ2CCuZo+U0R81awACbJUmm7CTllgfu8aUBk4uWpEJRhh95NEe4Wz8pVnOfARA2JQK3X8eG5/O2+ja2UQaOxrywGaTJKxS0lmGAFtPW4bZ8b/PfnkIZ8arKJ1IHptrX/ymq2lmQr/I2EuLltN7qU59bY/flKl3By1vXvJDsHIbpNbd6Jv7GAGObn6HuldQcp6FcID+fH7xdCHR5D/gQwxsN2znCRHT6lewOAbvX422D2vuizeh9yoWiswHazvLMfnsUkcSRgr3Gj8tDuI0ST/MYGXeHc+BWOqcaVDFSayMod+m8YHInwwbpWsTAAXJJkKB5EH6qe3Jd6mLfYEZS9BuBDOdll9zVoJJbKb3XqHKE+XXmvbk0SDOEvpItpHQhSrKpZrb1PDamkZ+wUfS+q5YaMSV4F0XK+fhUiEX01GSwqJ0JFcoOmT8LTCYg5g2uoRmhoSLGz0JeBk86V/OIdubtRsx8oeWDufxjZkwoqd/vA6Y2HPHWQadQEt67UTgkwFcDGNHlrTzEKHZTZm8NJKlIvy164DDvXXTXlMEDCvMJ9O0T0ie+Vcwa6PEv4kM+q/lXzwkfSTFz5YBRGNz/YEpyzKahy0vFfDzk+P9Pu8bvUaY08an2W4kq6K/t/FYDlyAGaqAWGkIxdXJtR41qYpGquPL/MBriiNOZroW/v5XFm3PzlwfiqsZwK6IvdyqpF5inl+7o1S4sQqhb7qpRp/Y4EF5nuqJpF/t/clPbQiOya2+fWMrruZGBbJ25qoozZhLve1GlbXOqtBAHmcg7bWaYP+tVnnCfbd/s4zdFlEsPpli9/eDZQVIrCIfhLbRBXx5v2ZeVmD3kzlVH0BAMaG/dxm9u5tcqYcGeOv01lgNPscZUxD2i/FyibEIe0HVcGTf8kqRPF400SkxGYZ5JGoPM1NgC6oU+Zp4CrKylLBswaEPQ41GaCk8Mkgf2JwRxmuqWuWYHUDjBLpHu3djGUxJu1bNgYLlK6FwvlbMgOplyPEzu+doW30XIx/hmp8edysaVGIA8PZ4VtGBEBPqIqDv6pTAeFG6z74cCLaN69cZP/nPviLtDRJ1adQ17dh3rmqoBlwiki8m0Crud4Bs8IcJlHd+a0kS2Q1ef+123XvBaq7gTo17vVlstiEAOyAG4K2S9TU4DaSJH0vbKfWb0vmHh6b0nz3r3K/qUrmx/Sn1StguMjff5LOJ/yesqPqnx0lbMaP71uXkNY';const _IH='1c8d57af65b04326125d42e80190afc3f8c7e85692b31d38f3e229544b7e651d';let _src;

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
