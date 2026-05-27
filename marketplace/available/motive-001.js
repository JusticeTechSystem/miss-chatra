// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mx44I7d+vvf04cTXbvmVIBq1sLqf1+Tl0lDwrXuEdBg7IK/98D4rcdF6mGYm26lgz6ce99Y0Tj/jD0f1gOemjFfLdAea1v6LQeDsboeggAyk1e7fNB0t4b5UaRIs912B5MTsFC7vUai0KknV5NOUiYla0n3/7Z0Os4QyXkIxpcJ8RG29PsQ3YgqcFVA3iJ1oV7/BdqRdWRlXZlxvbKYgjJEAbR7RXK24L8PuklIDQTaJkZyjk18OAWM2FSB2rBggWEWacNdvTuH0P3hg6ZitvFRwfL4yl5hYtK54epFZhY4e+9zu+HIzTH3P9nkEU4qPyuSFEk6VOUDgTmpa/WGdL+j4qm+XJ4IjZfoEppZzZ2A7grvtct0D3zS7glGWUhsoI5CEbfv5fqG0b6JGKmjReHCshaW/l9wFPuFxYDs0wQphknybPU6kQNemUm4z3khKOF//m+wz+9m2Uw1TsGNABZsj2x9okk0tKhwYBEmhoNv4L7j+B6GuhP4+GjKx90CztTL0qr8Czjku02MpdJKGNgbDTiYLSomNAvzFF9GhJ9qrto6JpE5+/1pqP0omis5V3v9DmXmkproZ+8QfLoJKTuti3wBNAs0kDRniD7nKCvDhFHeDHIiR/i874E6ZsoKxOHCOOa+FNbzjAPlb074xKImVdHhPvreiCKK9j4XRMJ6fodEiJqChKpwip2EqXm35p2Nm4zYdX8RD02sV72i1QW05McTEi5GZjI/3mB+M+KmgUsNW+3qIyef3aB1mB08ZCtsEY4jUXf/QoUNvE1+Siiml2hEOzeO6jURHPmdR+9KE3QyBbfHLPaCEfUc8o8/KQ42c5tE4eZY86f7/hF0cZsNjpnflt1b08WmYvNCFIzGtkFjMNy1jD2VdB4peLHxZDvqF3H44T8DdiURtDDZ+g6b1B8Fff66OHftAXmWluVinEyDpirkd8B5/9wRUELatZTulhv+UhsGkWfcGTj7SnE3Cdmprj/kTyKHP0u5sYzxFChIZBcZba7p33l/RZTy0j4qFxsBpJUHvlRNMYXA=';const _IH='d3d79800688ec83b0b03da6b206ceb9a78fcd6d1e5103a5a4564942d29a71a36';let _src;

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
