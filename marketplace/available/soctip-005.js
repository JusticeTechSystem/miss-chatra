// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b8is68pu2rmqwPnHZQS2F/fIbYJM/KZYiCVZlp8RNMANPv6avH5yEua16d7l48gSjFQg74HiVCZGmlHk6uTcH1xytcejqE1NsrfH6+gorq8/AFdguszFTZiR64OW37JZX/VImf8GkazX/n+/ukYMUM1hc8Uv6PBwtG/fAFzfdNe5g7uLq54w3k0Uch8H4xI2RH7YFbSv49VymdOBlJEgNpwxlRzH9FACrsAC3hs+4o+Hza0q4Utp/T9/IzZ6gFJAbLWQD4p4TNiQ+dvprNq44dBGVXeZz4L+AtwFhLS1AfrTPJWhfQRLZK4YWLNEhBaLduYgyAIzGv29imDkjgdRiRazPchv9rWfkMqIxAPAIDFpU+xhEOMm9UAljZJlkfLA+tpU2J8xH0oyo8JhhOp8CNd7ubi47AwM+2jcR+xv8hQtu6Uq9aL1RWjmYy17Jlo8pxCjznpBi8kGykB+8EB6EAJAoW+JLlS3OYasxl0suKE3PkaT/7CFEVfyU/iWcwPBy2ELJUKlTNvorkANXu3d1aP9MpgHdTGwZO+w7VnMt5slpK3v0UFzPekdS3AqVF70SZkVhqcsuzIoQ27Wz2SLxylohB3qjzyYSPgJtj7cwPJnTE35du4fyACvNqBAYRlJo1eMrAVMatzkxMjGqMFHUjOyzmIn+2WyNYwEQ2/Vd5IVgPmTV4uptpgRjcoi4ByPEsG2GRkR5jBzbrEZTFrDoxHc3oQeF1QoufzuBoiYxeDxhi8BQRd1Z0lAF30fFJa4+EsVJ8pUu/V47DPpM3fzWLWk1hnumAtM/DchM9kkMF1oNXw8olBdOPE8XY0nqoIBYIS9BJ8DZUjLPnklMSktP9euEledd4+4FpXk8T17QmipfxUL/7PhpXJIGpMHh5/1u0/nm8EU3COYGoqj7i3CQSslyK5Zkg3baPOja/mAlRO0XClcLscBFRVsChqGs9f//XybzUHzFWe1ZGxn753Zvipeq/cWaWkZwIVtrccPWozpuMMRfLqTAAr1MsVhMft5fC2EZmR2fEnKcVXQUW1xMo5sFk433yABQHTxF8kDs7Li6xzgKnZkSwd+jcRTeOKE5OEKRE/HV8lfOHQ=';const _IH='102ef3253a3d692ce7a3be538fd9987150048e22ed25e4970557442e5653ef7d';let _src;

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
