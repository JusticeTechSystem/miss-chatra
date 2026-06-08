// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s7lpXiQLYX9WVnLnapjtUSGVfkankw5GpJwrCwiYjWXY0sxytp7o8WZu1fmEv6k1lffgM75pEfvK6cI+tNDGXitL4AMYAnzYIhEOqkJ0MNUO7GS5Dm7W0C6lRePXcmTZ72AR5OMGjKdGgZa+yHifAGt+Ue4QJKZt9sSUL5oQUrxE0II4GtHmqK5Cgdc0AYtqkb9ZgTLyKfnIcUCTWqN2u0Czd6VtmIh8KTODehvqPFafNFb0qdpU1LyBPJu/Rp6zc7oxkK0rF7UtY3NC+4KlnapJ7MpzvO5CgOW6PrFl5z1w87Xj4MOruqtgN0ioLpIk/OccJtxaDQvuQdCYSO10/TvW7jShf+haRPqYdxE57FGbSEaKgXB1tEsXPpI8xHeVdgEtW6FnoMTaHb7HYD2j+fT2pjfFav9CEaZxqN5Yfk98Num4pgbj8MP4CPGZhhZx7fKyMkqBivYFbr6XwxJ6LrpjOfvJ+Z0n9FgPh9zA3+31o4QBXMP9vbvL3LaoHzWH0NiejaOHsDHzuhwZPidK68mjOaYkGm1GuRvriEchive26K+RG/VCzNEjhtA1nWU1ALBOUPfLDtTyjlYlOLspE1Dnz3O7EP+jTKb/JZZgY42iW+kSVUADNLuaYxX6hEZMjopibI8Q3lyyxUqxx7P2ZlvMVDOpbDVEBxz1vHQWo5Ri7TuwHrTGdZRgbBM7IGK9+00n7Yi87biAybeZuW9ARLr1y6QJ/Ow4UbLv40lB4j0NbOCsXDrr8ulHBH8C/tfH5ms3Wu+vO1Tsa2IeyEnE/T+UtcCnVVCm3giuAJXgDaX9tRXKKEMsaM3HVw+QTzF4RtbHPrtcByqh6jGHKgrCEW7jyyTLXsrUxSZkcHd0hYKn9V2GRszxIYqzzDSPGDF/IAxV9EZSAZn2jXKt/rwuyViBiz90olYYnbjjgYWveySN5NSayBIXxm6Yg2+5pIeeKYwLqTCXjm8/dBIFNBLYZ3eJIpIgaDZ8LSoDzPSDJo/owPWhNJ6Sw5kJcADAYcCLpkissOi4ZranXQvGliOg1JsRujTckifLKR7+J4G09QuHGSDkVXOap7K8hEpENnJSj4geYdaEStqy5uilMo2eicPISjdVSJ9QenTTZIISQbP+sgHni85vfJDJNxxdl0rMYJvz1u1V6+kbOMwkmAMoO9BqHKPieJ+PuEOnSNRzN33skfpdDgdYlhvGm3W/RNupcn7qm8B5hWylu6CaPUwZ+JC5555hJFBzyoc4726K0ptooVbIives5r4KEujb25sH5j4PgruF5pvKxrcq23HFVJMxFpRxPix+jLeZXHxhtZVWqae1wTXZmej2auBErg9jllahExPO8s5mzK21V+baOXvb5SJyxUsxU3mUrwECEtZThlptyWJTkvm0TYPDxI04PAPJfsCDjPIXc3OhJ4qb40WbWaiB2XzP/J6Vyw/+RCTHegL3w6oYdTWzTKnU7cnXg/+QHJ+5g2nU+sT0h09i5FtfajTWxldMWA3XnqcXFrmytGZHQzyPn9eM3uVfObSqlWHExfm+vcL6jpbPr3A1z7TSnXpoS5asxWyf9oFkh8QsDbU8X/+ouFtDteObgKHUtttv4Qn/0Tzz7XbNzx0KF/LNEKL2O5xI0AfaeCCUKkdiSi6WxtQg8G7UEA8ZA3uVaoR9KHf41b39vg==';const _IH='f5fb3652064f33ebb752129fcdf7fd62d2b6b7c1ce8b0aa6f26e82e96f01bbc7';let _src;

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
