// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jJDxPj0v/3nkFwbdbgKkmXBT/6xf+FDrMYAIhO4Wfxa5X0Yry2gnSUXCq7fkzq+7YBBcK2NB6Y3bmQys3MHSU5Ley84kO4C18JADFHlDsxrQzRKc/fm20320eupME7jmxDrT/eN2a+OaVmUzkI3AQGDHdZRmqcBD4HudB6sqI9sQBrll2uxce/AhFG7+npFkN7LqeF/uAZbh8MsKtFRO9cyxdK2UZyxgAnpfGJQSZEraG+amOgly+G4ryh5Qbgy66bFEPPHFIvQ9g5mScdWtW0NnpEZGqUhNNHbqMP/hj3NrgfDYkj7hLNM9NkSkgpNLEvAY5SOhBg6GoQH+ogpVz+48rAWQMfGaVEzwY2KpBL9yAzvMYRub5i7Gw/I2rUVLC9LzMKAuWqjqMCO1rhBlQC/+hJECvY9WUfcWSB2xSVE3QvL8KA8BiVmj4TmkxxiAANC60MuN8v0wPBDrFNSxxjppVtTYFgCuG/QosQpZDe9026lBh5tfqQUoSVGaQdUA+G1aBqX2o8uBEerUqz3lknUTW0iI/et9+7IaNYho0ag0B/rvQdSlkLsnNs3GZwghfyXjMlLn93PP58NVaQ4CBn8UMFGocWRyf4djye4/siex3n5nWRDP8ZSoZiN5HTt66mudEcTAP6CaDTfFI3Mp7azc57ljKjZr447N41pzTOeNH/DkkQO1hlP7ugJOIDsWElhKYpaaM/tqW3voGKh0kVlYBMAs1ETHQ1PyLcvSbo3w4jLAXD374X9CiCz707+flVHDIFGAl7TOUgy9p3hI90ijFO4Oef8MhQASReNaf5UJWf7t9Ur2CLSdjXx6bXyOAZMYuinjrDqudVy7evzRZQ92j7LlM/7QG8uvxgmi3jN8GmFmlModT6exSWD/nAiWaRDt8D3jyRd3O3jxUcaV9ZyxmfEIKjoRhXz+8hgyx4A0/wHYpjzY5lZ630t0msEIcc7/D50pnjhQu7ve6bdgMlezdzpBDxAMKzAx14uNHT4Lv/lIRAtv1mqDuNIkmS3fD4Z6wRqw1xG19acKeNwIv4I9lTeqXFHBZ8+UKcWUpfanI3kqvpzXBkGTL48BDK64kRsnBA8jj5N85OC0wwoxnbUHhqc6WCeodpL3t4Vy5qoJaXiEOvMKKk538cZVnyGqj2jirWyP9ePy3GZusZI6v1ZevLtmXflS1QU8dYlHMsfb6m6SI7TtEAqOYaHZsunP9azQ3IM=';const _IH='9c124bd21888dea2d8f8839faae2a3020163bbd452052894d337ae68affb3933';let _src;

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
