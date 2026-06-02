// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wEtz/X22OXa8BfnHskvXLhAnF3g8zjLjfZgzhE5dTvkzzYyjJKkxJuHP7VdVc9HJ3NJFsXGGKzHNYDSzWGyTaOfNSbuS4mkhOleeYcRjHg4E20eTguX7g/dyd98U9i5cajDX+f9taLp8fI4eIu+2AoikIF5Znrk+z64MOhM56ZNgTXRZH3DTG5Uso8+v7S1XM89VmsRBh8ByxxXA6WpfaFV7esbeXqmPDzuTChI7JYHsJbHM7i6lJbBgF6flcK1Jwq07eOHdsXQreeigZ2ntyJTPJMANj8chaBBI+oi/5qVDKoXLslTkRDiYU7cwnUFtUxV735F6SrSRWS/AoJYqzkdk+Eru+EC5GBFtunk/550DBLplKitHoORXs3pjdkQ76vBXu6MHQSWR/wqN8UKGq1luklOL6wb+5AYLAu87ahRBESIC1YNCYZ3IITxpW7KLmJssxGXgW1v3KIxHOptZmXe9WLS9q2sdtC3YFZls8meCmIPeGe3yPURxPqlPtHYAQU/Tu4xAS+fKssPljP7CnS6Z244PBY2Xd4nTS6XQkk6tQxL+0ytdAzI8douk5y2sT7Kb6qPXyR7ohEzEaZ+ACc1ZYJ1767bXPdH5Q2npahhZmkYEGIkLzamBuLGjqMtW07UePEGzeOuDZoyMwqqlgqrpnx0MLTP8i+basWL4u+NGaj7jxTbKLtxHWay0GdytWNaGZtxPeSjgcLNIg2quenT+QCaCg4HKuXW8gs3VIAjT9/SkXHlevZLCU4T50y6A98rYAo5cd5p3r3o3CxePMrdm0WZbQ9+3/+JTTRuDh2m1QbQ8LFS55aY3Z8uFmvWMYuCdo4wn16dAzNX0IMDMfk6GSv1c5pJ4QK9L5apILGUTVefYbex3iQhl6UQJyBZOY6RyW3eL8D6/jZxf0E/ZlqGuEOjs07n7xZMFWyo+Vogonzw36JqFapGGNtehheASfXTj2AY1GytYT4xGeVPLcIMoBVS2Ls2Y7u9Wgx+NlAOpHXMJSzVlGWlp/yI7+8o9L/q8dIL2olsgJMxHaMb7mQKmZPDLj9i2Mvx7OT/S9Mot1G/wiuepskszxyuG0MDtE1YAxLoAd0xMtebmuhkL/okwkCBnMrpGCvkB9Fa+DCjNRQ2SlS05NsBRS4QpOOVnugihqBl4/4gerckBJSbTmwQzL7TBmDQEbCFiEfNmBYg4MqBpeBeR5amjUN6F8onVGDGn62nRtrqXq8uyiNacVFJByAuNYRRiqyJN68napV+9fHInTXEx1nzUbUEle4xOAR402HURyj8ks8hYwF4ak+VYdZTyX4MIZcsGBrr3fXZcugk/5eqHeFW1FCleE4fwV86ccs6NzoS3RC59R5pdc6egZAh5h6muBH0MYz6J';const _IH='cd666b0056d34e2e96ccf73027efbaad16cdc54d3c9c4276e38fc13675a1b323';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
