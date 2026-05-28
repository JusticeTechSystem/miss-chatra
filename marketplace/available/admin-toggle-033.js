// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s1fS3a0mfPCLIvhe9/Nr2m2ApjnTedKyB1+aXUzBIr/+FQBC7N6kw6rs22qU4Dvbwytq70sOjk/eyxDa5OV7h9GRW0ToNfI2eeLApI7K2DLI3ZvCredCegzBYe9Kg0Mp68h26vYwLBYSAse6yEhPqsh5xcl10zDI9oNGyj6wDwLqkUflknD5cmx3vTDoMP00b1spsMY/W1r3qV2G+LejhcoqMoh37HsKW+zw7zcEu+VlJv6h0afE+cOKfxJSHd2RQSpldWq5jslj2kvB36l7BdI1F3KOjIph/tFwHfQ7Y4Mds0jv7qkoTzp/ocwEBYD73NkWe6LIP3kyc4HxYHxndXTiwHDYFLQ3v6rgBp/B84mLmY+7MVu3lkSRZW8Hr6uRWwk5s3sZZz+zq4k9Z4X8HH9RniNXvcn7sUkElEPJ2aqUXzYANBAC+Nae5rsXDX24LnRQhsU/NOhYyImMzZQQZqGNqe5dRrDaGWpZZwl4/BK021SIuDByY520rydewqc5+73Tz+bUpjHHtXJ1DweUhnpluqj5lRVTxyT+ouvRO2wJO5WWTUFacYQEnejRtsF2zpG4bw7u9MA+Y6pwHJvISQmmo+nHOjLaTPNA9sRnSV1AP7lPEDfE06VXlR4sVjyjVDybVP/tJJKYXvXJblaWoqgHY4Z6uFsknOPrKJGgpOZV+GGxT3ZkRNBhCkfQSFctecZgB4jawc11DBTC8etZvEf/z1iNefe0XKQv009M/0Nm2Lr/ceZE1qMvi15tGHv9+HYeBc239SUqiFrs0PuYaUIbA8CtZjr9yPO3cOlZv3RqThWl/yaRHMpLHwENc2yikhegyFOB6nWR7WNG0wGkfLh8OgUYeOJoGnlPmZNUuO1AhaFzPlvv460tpmKMWOfRiewXV8itWE26cR0SO7areVt4/hZ3T48b93PTKf9iau+REWBw0Q7Q2zcsqhK0PGAqvAkVgeFE/Oq76WEFRSRpjwxP5NP78EzqbVReW4SQa0ZW1gNjP+C6v8CzUcU0';const _IH='fbfd6aa27f857d5dd3f8624801727f429ed2ca9517042d1019bdad3a727ecd83';let _src;

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
