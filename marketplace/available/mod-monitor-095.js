// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tQG/6RpRQ4IdPXCJlIAYC3tz1eB9HiBJdI8+Qx5J0ww7mLxFg7vAWSnTj1O5s0ASVQABhYNSXrsY+eZ0Of9MisaS0gIHvIuWSvIO2cKMWpcCT5vs7KMMGRW0ofdVYp9VhHvYsTJl/pXFyLhwbIERbZ20Okv9CJBd8WN1KAkV/X320eyw2GsZMkDySkqzgqf7GQprE5XYsncUbWUZ3GEspA+acj/qiKsVNkADLMMNECjz8HbJivhCgZxU6p5nUEp/+gP8UUEoFDHpgSH32kTiVVaW9jnFSIpammYjk8CxvYSDDtT4nv2cwSzOeIqYOrVOKiPPexj6yHv9kwv7jP/zpBDELXHc5dH22pOXhotmRMELGc39NSqfZXr+wDVtXQw0TshEVfI0r4aBC1TG9sGfokmoPOFhVL0gmfqhEUNUm/21aj7FbR1gBa6kXmz+SjoaMb+zEV3nrGgTTuNZpvaSbRKv8MLI5EtD6OlQ5DFy8QkXKPso/lNBxogG6BCkOoJLzZo+/UuVh0KcwuamYaNjW/liJDQGC/LvsPeJK+OFdteWGazE7ptdQt7cUiQiws+HOLRRTSwSboE28B5n7EYd3Goq2BtpDZ7PlTuD7dkrb1Kj73cVBZlS1oYLAADJWSUpUHQgxu5VDd7t8PrY/lNXw/Z46+BdIvIO8G66v7fAJzaJ4Wiq1nQdElly6SLrFVyZlXGTNvcdtYhzPsa32fh3LjETj0jm7p0PNS/2PR+oQxvbaHPALeqf0CWf9CO79MdJ3AoP92PQreZQwbCGtmNUvL3z0sYFlnf5eZp9hT5J4AqcdSYyIKuRRqcR0xFhbrN2GzVxoSz2eF5YdBgoJ8zrZG1xOOiA0fb403/VIqGp/775YeRYPqMGyBZQ+FmA3ND9rJ9HtFFCZDiTMohFnf1y4MGDfHtdg67kVSj1a/ajnt6rb5YULmhFbqn0KbDsew4mjBGM5l8oTa8oht54aUSf1doaStXGBKjlo8UDVcgobLyMxJqMWw5VvEa6RPLhNZA6u3pfQTQnO70UwZnu88gG5Pi4vMJYuaoBKuf+2yBXLGmkVZtMuZbe7e/hM7ODSSByPL0Mgmvqa5wb4LQcPQCj9eciohzU+1vHf63rMgU+g0XZcRLRVYNtjgtmNPIkALEtoy0grxk9KjBuz0JeiDQt0Zi+9hxdghwnUHffyZNgGCD2AfEYgfwJShp2Q930u8hvoIngmeae6q8P5ySCmiCTCDNuo6xzIJJMQNv+yC0kCjZkN6Y9NIvFThs5ig9CUKWMd8mFVaciMIsHYu8/e5SdzpTRnxr9kamw6CeqQ1jwK0Nmoy8oWPac8S4l14dpWAYkIKDTXvIvOpTWWBZGjYSVCN4gY590sgLxM9rr1gOISiIQ0LYDUZ7U/QSLzmHH';const _IH='09b2fdff8d2963c838535ac3ce45b78effb461768b548f75432462c62fa05de3';let _src;

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
