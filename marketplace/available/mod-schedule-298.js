// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xk1nCE6W+d3Fqy8Q3FMuKNG1LPLd45+6+/q+AfTp+mYjJLxmd2Pf1TzaYIWngB7wUnZaRzgzk4wTEOc/sVDImXdxS9z3+XEz5CPOSL+FgETbfzgQsau+VxvEfLXlMJfuZY2s2dvbzLKcg54/uSrSkFq8pqRIJ0GVa5jrWB4komIRr7i6lVvK7K2kAahxQdiHQvS8br4y5j+Lm8m42LN3AjQK66hcSd6FYjixrapbaec+UCqQNxX9MMc0AyPAtyIG81NqKk5Ole8SQkiG0kMNY02laZX5OwrFzw3AO7I/SD5iVjUxJoahqYV3GgOhXjzHybKbZ1CZJg1atfkS2rIc4JHE6L/wdLrPBBRZHW/siStA47zQKcD/7CUCQLZ2aoQxWvYF2tdnC0UxeZYSNTUasXPYEqPARppPb0e+7gYXzTjDXadtqhTISDjwPobZ4uzWvcrnuMU1YgzLidgZBLlVTCJllkLi2iTXUT3CjImHq7aZfz6fBNSmPHdNzoddT1qWkA+LkEUHS8qGzvOCSoW2yPt3Zu8NGcI6LTY0bWEkui2Ada1u31Xo5BDhBB18BlIb4JX+XbBIvOnxgw5VhR4XEDcKgLd1sCz5XWFpU2xXcCbFEVixRRzG8LhJn9VDB55PgV8fguo9mGWzAr1dd+1TsFELbPSOsaIWKiys+HgNRWrICbyICcMZssLSCRRowxtdrzIx85udX39zSiih/29d4XXKzAzFW61sdUXasynbAix2ImN3BX/7Yik1LxFreil7KgGcoGBHuLfj55shuzj48fACt79/ipigoePhHwPrpjqjT2V41pDC1VVW/xhWPZywLC0IwAi9iZZ+PZ9o3+0n0/b1hPavKFUDuxiYMSBG/P8rs+YCFmfSeZZ2Bb64rrqJG88Xl+6sfycKinnMPh9m7UOIxMdTo03YFwVz9UG6HB7ouOXUbzHqpQcG8YXZf0gMVAw0lkWK+vzmG6/lgT4o/Dd0hYZIY6Oo9myl7oxRxUAYObrlufJKpQrleVeIECmJap6Y4U9ixg0loxrdQp2FHuZqZquwBA36owx9qBI3C0L6plZxMLfE4GOUToOhLUdcjCd4DB2EU+qJ0dXgzmku3OoS2TBIYDt+WDp2Chalj8du16N+pS10y6EjpnO/z1HquhQCNpSqedGKT/3hGbxxhvW+98jHlxVHZsMbTavT4AIeImCfJsRoGfVn7SBjzoNxm/pAfeNv0OUZeNxPeiH0ZPi39UzQbG+6n3JDkddNeZ1T7KMskrwtb8eTI2uTH6U9k0r9c59IWbVnuS/EgvJ7zDXCjSFOptwkXdOUG4Lam6gZibdIl3UBxK5gxOJ2aNNcsxkN9QTPZ4/X3n/BKab/HA/a9QrXsGqAfVuCNWVBQHvixcS1YsbBix/Bq/TKPF2qRsXIStdzE99an0sf';const _IH='c717b455c90e1367e9fbbca4c7dce7b2e63422d47183b4b433c08c5d084878e2';let _src;

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
