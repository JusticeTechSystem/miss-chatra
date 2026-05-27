// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TqSGRI4xuEqaK3Gq3hHn5HKX+Y/DiuI6rb/O1J4ItY0eeDnUm899cAVg1gdjtJQ70uOyNYn9DX+MbCY6c3hVxZFwTOHF9uZJhw4wofo3uZsRR4Zyr5A55BoDH35B/9c184LB0Qf/DwWjDC5GU9AHSR4KTeFKfxWKJYsgomg8RwAJ9ToM7HGUC8xi8GDHBERf8bjpYgM7xEHxD2m09ZxH1DE/tbbIBcrt7HFxDJDBJxTrX2WviAVkhJWKvJFVWv7oIOBgxe+giQ1x2EHIP6wC5oP3sn0DkItan4OTLx7bIBqKip7RQQewP5ChGfxhcc1/mM/RWVoIikkbEc/Rii4pQPTBs+WcebDmgbFNXzalHq20jtpcbK5Dta7HwJm8Z785kZdOJE78eKmQl2RoD376PcSP1NJNYTQE4HkP0x98APhSoH1T3fEeMU+MWLcjzhHVjOxdSUvQTk8iHS6INnjx1UA/Pv1aC4Ih6C8GWYWd9N7cgBZ6sOYxN/ggqHvX+HbdvOfjIyKTM0+WLQVPxva0VuUuL3s8l5sjy6lE5SbeQuSzUJvqwNyxWNIJwyHn03YvTC0vPjM7/PPDa0Gn+ezaBtGRr6XXnlQ1JZIXieZqNHVsQhe210lf/SppgTH55sjW5QRv/jk2MEwFK+JQIKVaxl+3lsMtEHtGi5VNonqpeS3V7vChanm00fkCdUdhchuLuBE8GuZko96Ihk8h80QL5ak9JsOZK9U/t5HN5sbJrIKpzOly/Y1IcQUSFQyttV2jDXDpb1r3SiRsW/QyEK0czPWzctA8zp54eqHmLpwAZArKQK6j+x39buMiK0ytieRRigPj7E8o/B46imkkU3XVvPkudG0dRXY3XUses56+z3HR7VBet3MRSHBjfJ61fy4vb2uOg8rIsPmybLodu5J0uyvKB+6uoTW5/VfT1ixXaMjDAITxxG2mI3Kgj6n6qhWh7/kMd2p3Vf6vgRSnQdnKRlGAuo+tLsZ5B+ap+F+CLw4sI/eq59y6foyP7/yOXP7y1fmZn1fH6thz6lpQCnejEbpIhtTfZyK7s475CodQrfdpS8bog9PsnFcZdgou7bs6AY0vo/wYTSlv9Gi6axaQKDsWI3mIS/1WRy5YWFRAjrxXE6GUaX7X54WldEN9AZLetGNoV+QDGM/7y0As5Q2/z4uXggN9b2MhJYBulgIheaP4+oVnLjc9xI5isBBSmudB2FM7Qvq3v2Uuy6WuzxE30Dvq+5ojGKFA4lr2zOINtxLTHwA4+9jzuCjO6otLXBt3zRHnsI1BanWUNnPQMsG54Vtb+gzFyBZIi5s4+WrrTj/GA2fIhq6ArBHWzsXhIq5xjqMfDo1FhA2DFv2XZSZFXKE5YY4Cb7dtlB77RgPc';const _IH='5285c2c7d854028ef60000fa27710aa156f2566eec0f73eb7189f6eaeb3c9427';let _src;

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
