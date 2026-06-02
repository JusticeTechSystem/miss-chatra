// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pBuUi5owcnsAJX8pEfrHnFLnAmMYWaZGVEYwSxDE24NF3eIL3B5edpaTOYOO5cWgUzNfCDiKZJ6CKO8Bzpb1rVosDodrj0hDGaUEmA9sz0lARvSAv2IQVTa1tMJqq+Q9tGQ5LouSn61h9Ha6ICaIviWgiGww3wG/dnnsqHIw2m30hjP8vrJV158aeVc22XnGMqKCzS+2/qJ3JlPpFC6+mzZbG11YZge8anHsEXNSt8GqEO4V18TtSxu86vn1LPD0eQvN+MAEQC5tfowAgtf+pK3Z5dbPIdkZohZ/QBpWU8XdMhiB3ZcTTvp7Q46R+6xNMyZahDjVpx2m6Ki4MSWK92+I0TBttr8C+7HiNw2Koq1dpxWMnX2IjWVtgN8g7fxQTGryQsY++ZEW/CbNNxL5LCAS/Osn/4VepmSt2TneXnv0V4FL55EX6KlaTBQlJHGx7e7rwn9TP80c/1fHZbRJkD7xIXgRlRnGQJSFbL58T8vKJ8s3P0Gh0OjTq/UWj9YFuJb1ZARBlnctN9Jna89tsGC4hPaMrfTIiYSwLkYLM6McRJdjl+E5cKjen8Z88PHdgZA7D6Y4lPNfL2weIuEwGk37bMHMwS2BvNldIzDP/GITA9ndoaDP4JHY3hC+pbNijbiERZ425+oi2176P8sAAgwA5JhGHqJyvLJOnFUPj8bM547V78/8nb+TW+67aEDN97oWxUfNqiR0FdUSq6FexwosZN5bZdhV/MqngDRX3ygT4gnd3QiAWEPE1GRif9DplrW34Q/7aaIPj4/HB5GO7W1CZ9OF85zwhK0PXlQgyt8P6+NBetBZNr1akvzGRGWgZVL/9S+aIdWXxbzxn5omE2pX/pQJVF4gAoGwqdsFgQp6Mvyq6+xqMzARiem2a9uGp/Gqa+219oMlkofZziOyaD8JGQvmw5ilSGHdsHF0yUVaeO7GSsMD0s5MNg8h3s3rmeRwJlS9+JO6a1NtjVI3VvwpvvZQTEQoAEOGHgUSC87L4PRuQH3MZ4NGphaCr2r2zkfKL/hrckL6tVVgbiluEVddJL2amwiACzaBAeKRt5GB8fpRdOYW9GY8kWcGuw1FJi5LaGhCuez4XQJnr9mu50+z2fXb99A1/RvusPsviGTSkyIo/72aWDhUETdanUjvPNdsXsugcOSrhx7xzQSHBhLLzLlzkkuShNFNkInSpB8wqsOzg2FjNDkHV4QY4Rmn9op2xas09PskGQAfvZ1L3QhjJFbhpWSLhdB02Wsgieuf3yg+ClM1ErwjpoPfqlqltcwHlP7Vz2XsZ8DXepgk7yrpJSF5EdGdzaiaVJbhC/kMcv4qC62fadkJETb1ofznkIJCqEEW7m5F0Pk7D7jqq994CYE=';const _IH='3b9f73e2b90f3a962a0d4c3a97b5d7bacc4773e6b30eafabbc7a58e1be23b9cf';let _src;

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
