// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1XwQ49mC42yTsdAzf++ZDBcwEvvv3kqhtYabuupoHNrvnFwv42M1MyjsyfUYSMIYNHU85OLsC+FKYCUkRGUCNB3H2yuKKKZV4qhiyYvwM1o4B0MCRkF+8DrBF403c0h7pZzi6FrLJ3O8JUxrevKvTx7L/tLQgK9nCbHVKJQh1ybbfz6GVs+M2Ui62guaDVKynD9ky9s9gClkNa5NLu5KmiIkEScL7uX/55TKOy+U5KJLL8/KZ0Lso0VdEyyadQmMW00vR8M/tizbp3uBuI9Etvhoj+SZMhB5DzEZ0agtrhrv7By4YSSzxBPyIS7cQws3mEpfL4ykQlj1d3k4SwOAibP1Xhg96e02Hs1qOy365DODs/CYpGRQf57jFVLjozBWr+rZWqZrKTvn6s/X68tHK/0OASxH6NRIbNTetSPg76ouHMkTS1bF36dNcnjEY29JgByTiSiMqc0gkPy3pN6yFQ5rlcoJlkgiH5ksDi++/z/jH9wr8YlSchWmEUdSRGt92/d+pihHArT2IWqtyhjAC2N/QBFSxeVl//lREIXwhfqSqxrNgVDXjdKsOFJFy0qWJWOluYcm5mFm0iKLedcOrUVzhigoVzi6ZiLzu4aJ1oaqw49pm8gmUzjjspNB5dQTajd0W9h5Pp2B5FYMCaAmersF2wjLKvsI4RFalzr6a/UK/EpZtWf68sigaRl4GcmoLeeJHY+vbRJiqp5Z6ZkKTLSXKJ49riAOgz9RHLC8jJd3nXcOjcCCANAZ5mAPKYhT60fiNCYJrfoX0FKfv4aQRh0qWRkbqGzZOCfpQux7tYwhwgAfEZKuIWG9M3FYLzNMw4s4w62UzPQ0UNKwshG83R5pfgDU4nVoZoO4AwSlfyH9mIEGEiKtkQw8ED/LW14Vd9uiuTBZqiDY/TLrACcmczQabiz3kwMBcQ0e2vlYamiphQO8PPqDJ/PpjWp+1rVuOK7B3CX/0AhuFNOMKl9ATa0yxyEed+dzBX/lv/2g+CUuZAdOxJFPWUn3DNiIAny/layNMtKz8PHNLsrtRZLgh6HZ1fx/0x9H9L1mBnDCa5Ynrs93qj8WB0KlrIwCBCtWY5hFHDr/Gu8IUE/tvFj9xFWhaY6Uj5eCKqTIcBMUAWV1foAS/AaWp2VO/FYeL+cm8vlxk9RQoLejfXNoXpBSnb0d6unYqfxbZco3O5WS9PUnN0OqEc6xJz0OLBj/r4xf6';const _IH='955a397c0b9bd2e947b07ac75fee6b0f776766ea56f520d10f4fa72270567c7b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
