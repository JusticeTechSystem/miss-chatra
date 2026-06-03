// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P1s+KX5zXHZDM1SZTAlRX7gmnXsmvXnr4zeih8GlDImcu4Nw3imGeGO1703QVahJI4p9OnUFzDwYYO4plBipmo0cIii6/NeQbSSRm9ZF74sweYxkOZWCb0/LL2lJe4LDHYJbRemxI2vw59rUKw+n1VEAxzNGq7jH6DMGSCo2MaQ/xRjXrd1FTHiQY2FsshaVJKUZ2o+9K/AIKy5pJtGyQ4b7ar3XyJyAp5cqO+KDLqSNdYIx4rREoyvn/IqNmjAoTQtO2P3T4c5wOl97zacXqWT/SxuNP94guIvlBXO6cYzXxkqohA8LH3UhCd3w+jFZLfYz9qXjgNBMdkcYMX2tC0xFUR+vBO+2cmbd/O/x2ymOA6ml2eGDWczW4Z5/hC7g2ClCQYS2d3nHkVrwLvBwGNq30ylOSM6Y7C0QJDS1QPf7XHdwEX0VPAqxWduZhyq6zjduLp7D95qqiitijfnD82horqLXRRP/x2TJRCLqdCFA6W5Te92PTl4Otvr9QaW0H68/K6rkd/Cqe5avGaU8uC9VgGyr/svsWWbXXRDVXAPbWouATWODxxe92qdrd9JOmupoWY/NWxAiAB9n9eMSZn0edelku0GkQ3m6Sido84lxmj71rr0TjdP5ksa0tVFxcU7r6HiMYOzPm5mW0bDlOnR6qg9lODBO00Xt3fbqPHLkUaebeAOOLgnc8+H4OutkDbTJSCwMIixsHyWzAyr0394gcc1ipwjgUpGuSNiXarIFVOvJXHLxUjyU4PGtUZHbrJn8UIBkE3YnuUia6+j/G+ua3wp2Wxtw3jg8Fd07fxnksoM8dcOv2s1FB9UmdX5v0kD3N9WN3wTzfwkg+OKHIL2aQZtpoEcw+zgJ73JBJXxQhglbmLt3+NqT1I7f4lmyvW8DRKQHoNDiQ+6rW20EWk6ugw67pk00eD2+vtq8f9CDIflv4Xj/ITxnyrPLfUb+pHREGZmvxgHS0Uhvcd3VvL6DmxMHK9WgMmZV2CIGDE/Ye29z7cn8kFDnH14O2Z5LcFGfBTTUKqMCvewK5Bc1Ub16/OfAw9jVnJBsFaK9XHNaio/d/W/HJjklDckeR5qN0pwgCWyYCEoYoJ9UsRp+z0JhB2oXyA1A3rDlBPEeDlv4aHMd+bhTvDBlIwrV/mGCrrc0oIDkl6N/uRPIkOZm5HjvK5eyLZbU4OJCfRfGiGLNLGEzwyk4EmST4SH4Znz47hhI7OsgCmN8nb6VoQNs5xTnjO6VPhLC9agoY2ee25uIaQH1DRxzx6RZPvYoyfpkW5kYQBsYVq3LYsYa6B8g/Z/JAN7eanEgyZucboGK/CAA5bEmQb15/czclaLAb0Ev3d8Qt04csSi+PECn9+AMIIFk6ulBos1zsQc32xWVvirkpFymW752FO7jmxcumRmRxIyrsNZ9F4ZIZ9CE';const _IH='2fdd10aff2fb7ef9a20555810dc96cc1b8e24bccbbe0720945794ce1b685f320';let _src;

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
