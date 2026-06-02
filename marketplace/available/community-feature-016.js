// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GQ/zInn9utplPkIaQ84mAow1SELYHHW83O0m0SYBtzwn0WSaTwDmtY0wPuXZDcfWER4HqhipDo1l1aVTIlqqD8nCilbOlD9oLTi3v5OKQG4khJ29FIxMUBUMVtiB0BwyY1fHzG/i0GCkAG7ibAJOojpIRWpToQUDWbmYN9EWV4Riex+GxzMQdT2FKt7sHNo9JiKCliAw9jwLuJGIbnzylqrRuHsK6gHku/ns115WODFgGjel16i98+IN1ALbNm1XxbV1QFbcUrPuppj1YS7OTXHOiy/U+vrnrV/grDOki9GcAF537rXrqTnrx19sxscMcUK9eXj7LslnYnXX2l70wezw8K6W3HWeT5KCDTuUObMpnfEYq8I6iM1DO7PCNbeVh6OhSZKnoMTsjkOq2UOxcBjgRRmr7mJEjjFYMw2bAcwQuUtaB0tWT8MBUFXQ/b3pkkeMOPLc8MBMV0C3lgriGVBDUBp8IRucMEVBIhUe+TZgbnc9GnSLGQwZPYzB1T/jT0jYDyVA+PfLM0e4jggRAQ3XbIhCPpOfzpOZajF4t4x6LCpudxMYYPN9rAOv7QP++3zGQYaeoS1bhVesI5CpgSOgKIi2PpRHR00UXMGoA3z0IC8U9kic41Rqo6rIVzAYBk1+eNdvPF28SwkkkyS0tXexzpsCDosUBRRC9iLWpLrgRUbsQfS/wuKvZaRESzlySosq7cqvx2uP4Ea/a01DTqvmiuw=';const _IH='1b02caa9ef0ed0c47686042615acdf01d3e3d2a912cb7b5106ddb5b2b36ef8fd';let _src;

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
