// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uKF3uebzW81I8gtmNvkxQBNMctKTH4xER9WhpFUIDSXH7HGHwC1tXWbO2cvqgCdLRFTMAqYzAfujPYjjiHu49vkBQUA0OZWNTU8V96ttU1QOwcsSC6xS9Gb3EWMIu3hwT0H/TKy4dIfq+JPp1hkfwvjiJ7abdWywiuWywKjNnHGZtVI3g/dPW8LFQPgbnIIkhh6JBf3fKtGk+r1bEgvjTrtqHUPJU1exX2yajWtzxt/8uT7mhRU+hVCkZZ1Ral+caHhXiMgz3D8bvJj4OqmdPNpoc99rrE8P9L9Hg8oPAzJFOeetA4Z6o+SQjX8czmgIpdab72RSCuWpcRZuYm62W4+MdbAMrOVPDZpYr6Bq3+MDzWMGJaWkwcgutEMDeTPInqLsYK7KnP1oFjUGVp33jRVyANKSpNoYzuni0cW4OqIaqTJSFZn4lv9WGFHn2Ue3Vc62zv4KQu33RIcq5piK0ZRHUJotGKY3iX3LDy83zQQg+PrChV2DtLUSheOwIXQf/OjgaL0tfDIXMZVCVhVTOv+qwWBBcTaMoCZfLqGWSmsi0BNKm+uPLQ0ozHr3y5/OMe5kHKl8BD+cdyELPsYwdHvVAjtRt644PZSsPE6DzVeCu89t2Kx9CIT9WFD0kvNfsDmxrmfZFTszZBKAPczFuCfNwOi3NMGZLJe/nc68XereY/oiWNP7gFlFh142SIgklgKn6QtsP09pBax166DxhiLY0ogh8431PGFiTYa6WFSoE4TNmdo0R8ubnp0BxgYRpxkAwaKTLldvRkOBGdHH2msWvB7ii6wO2Ijz6R0jzuIsUypeNaLghZRyVl6BGafFs8R/9LU5kdsxTwVSqH/7tn/zS2zeE9fRzVv3COBFpOmAb8g4E2WndXb6RES36FKb25+coE3Cjl1UbpGtAyyWTaEXWJZgixRLzl4CFwvs5tAa5cJU6nTNgrnZiGMVqUoTX0KRjFm7+ooNNwjT8XZfLZvivTaZelfYE52nzf1Knk9EMmcNkrkOcRvofXDSVoOU5+23Wfg9fsi3yGmWT3c=';const _IH='55e5425de5a528c8ab9631ada364ae3d0b3c6127f65107f7878e4aecf23462ae';let _src;

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
