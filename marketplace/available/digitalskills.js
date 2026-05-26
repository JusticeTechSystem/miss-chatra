// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ks5qnID2JZvBdspbQdNV3K7MC2UgWKKNS4zDyHlf0rqR0NkmIM/l1922eDuLPPo0AYA9Ta+hDnDEkk3TFihNJZgwNVM4ZcMhb2coHaicf4CiNqoIvbAQqQhm2PmVZ2/nFNCerO0LiVbg0PL4R4KVZOJSN1br3FJvj3HSgK0HF5He4KzQ95DiPSRoCbI0YxZo66Oyk59hPGYFTlTXqr5UGTalLRqz6LsFYjA7Txzy7LyygBeBHgaqTnLec+5AC6TUKbgEok7aB5P1jcQWiRUqUu3X1xFM9mw6eWRJYk+4Nolt+GErUXDVCnmbRheD6rXkBoObNdhv/plXH5Qde1ntgOc7Br4mo30cYpJtvHFwbJb24QzAbayN7oCAnM8tcncUewBoyJdDklZjVY45pCO6tgMTPKivq+hejcp+ZSJkS3oqcjgWFfJ4app5ogX5THXmB/Nh7Yw4FRmiij6xlINzocXAECElUpgH/SAqrS5Jrkv+3x5DMBZwY0oj4uljOgpCArsHAKZH63V+mbDYUfGklGkZUWPcxAR0boDOPUdLZCOR9XzGEZphoaJ7o+KU7Km9GtXn+aHFdDL4w1rofgNUpPkuzXpt81FcUsJ7YbqRIIVREH6Xb8g4tjVZqJEqH3gAcB7Ff+w94rU0G0EieZZBlQdp9Q7JLppBqu2VoWU/v19Kbpk+4IeeIRxfd5MSW6hiEtojtxXcv0El7nHWBKoTu0i/O9VqGpD1+G9Fi9BAkBzm3zr/HLe6EFmxkm/b4S2YcEsj+4L4ipQApket064opAcvQoLTzZyByhI1D1SMytfFaLYHePeJSgQGy1MquQW2eMPJjrr1RMC19OwIoWIT4sQI/EwbrgyBbLDKwlUMOhMiO0sbyq9FQs4U/EEStRIxqHP3ifcjxw9n06HuR48+qizGwKL8owDoAyT64ivCpuglZoV9FtvLGjVlpmvDkkCcVKD7MjbQeT88R3HqiC02UnXtuKZClLbeMCtnZC4Hv2vNSIAWQU08MszxLxXz8kBqY1Fmr/8VCijJNmrP1Ow209at1nScN497AaaWsNgS6qMrYzMmmRH7cXJOL7BUe/u54JpzsNY6m0WVUDIEav7vgfXGvd7zrbjE26eTauraRs5BJKSM9iUjxdIfcAdDp7jh5gza3nikFaxwQLWb64DO0bO7pN0HnTgIQqjgxQG9Q9bSFuQP+sxbLC/fmU6B69Gw+migqBimtQAuZBXN//c=';const _IH='42dfff45cc0e658e221e3c875a078f2b71dfdeae5643a9bd1706079325f77bea';let _src;

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
