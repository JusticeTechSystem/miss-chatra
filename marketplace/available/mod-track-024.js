// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tFU7vi3ZvhMnyo24n06ZlyN7s+cxJ0/ZRGTxC4wSL1IfJKzQBsm33Fl45atIsqArN0KhY4l/IT9SbnWb1BYkLccJMTCEd9z/5JL5b+nG47VYz9pUA/aBtcXqHt1joR/bbo4KkzMygRo+boJiZRmojPM15+wv7OYlxrDe5Y7J9qi+rrbuP6MSW+Z5tVfusFoX5HOFc1i8GzgjKCHmRbDtYuAxVjxahhEzsR/IHyGUmdENGdaCtK/W64syvyoMFFvalNd0Do/k6z7rtP9vFvGiJQQRNneRu7E+JTDIM9edvVPshphKo4mrxFvT/kNnu1ttN/OibN3M0nNHli9WU9R5rAxlzaem3jCWLb21nyBWASka+XwwvhJpx/y6DI0jh4VpGySAfSB3onBmMLvZCFDIps+0elMnErem5ZtvDtHDiLAHLcJaRoxv7p0e6AMGvuVXUGUo1FA1f+U4hEqGgt0xf0rYp+7y8V1NhtdEQdMD4fFdvB49LRJ1agYRdSDQZ+4VqXqDV+gkYGt2mG3VVfECNpKm4WS97xgJqkSoSul6uwJ14AZX0SCOnIUfjfdi+PcuAR76V5YdzVynAv+P5fO6oNcrKdpucmqeFAhkpf7jcnqS7zZQsDhVIdzzlhYA15jP9z91+cxGoNWfpeZCo+1iJb9RT9Ou/orBBkYv9TpPtfgXUViex03yd2/WUXUzhYSp/WdAqEYizv28blvyGDnRkU0d+pF69E4EJlGHLvizYx0asD9Z3uJDo/3lEVez0NygCTeeiioSzrz0tFhKpbvmaYJXCzwhM86hOy5p05HAujV448gAX0o+JB32XoUA8RWOHoXQ9a2J29bgTAVtrtcn/krUR7/jj7GsrgcbCAjr1ELIz5FNPTAdJssTOYWdo4JHoVQ7yFgkllr9A0BWNnu+ao9UDYP7PjZ6sPnaRGFdXHTEZZ5Sg7gA19K4HSTQa7rVezVcOgbqLIfrGswAxLAT1IaOqELesj6YIDvDWr8dQ4yBBU01+H4X8cYUYfmOcMJYN9jJC7N90DapcCFA405t1XJeT/ENj6h5sE2eBrOqhVTFWjjvzpenT+PRYNjmeC+KNyX4bZ5CwBjml46UV7QFIGU19WepBD7PDWtAGOEfpfZmYEOhXkXN6rErpN+KoJtJqiRSnyNWlw1jTJB9HogriGxf0Bm4Bt/jEOfVpzc3k6xDFbm5EHvsj632Y2MzAspuVUTqKWfAfgHXQ60531UnsfXwp/iiecvrHq+9CQNzLapNE1OLFEjLyksNfjyvd1PAKj9LJDzi7xWS1A6odN6FTJIoDraqhiSPVkvIIv1kXTnQK5aLRKxv2xtaBEEEMZrdu6wEFfeflKicZrQeHgcdWloL+j9irrF5DQ==';const _IH='50313cefba958920da95f02d2966054960d689392afe11876e6e0bccc2ab46a8';let _src;

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
