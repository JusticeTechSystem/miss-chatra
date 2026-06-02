// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sBVSiUGrVk0vlXpV55gEBzQijGcJKzchQZZuFT64yEi1V4V7COmMXkI+5YsfpWIUS8L5JmxkypjOBkSSl4PkrLmcbBt0rw+7en44MCX8PB/5Q3jUItCzjWitkFSEaS53Rc92zVjF0ajXFJfEDKF7J4mqENYHaYrT2/11Mt9HLRG8tibRxHOl7cO3qaX2GycTrKMDdUsnTM9yGiDj8ixjTtnAuoWzyJ+AOF80wVCA4NkK/ccU3wRPk6PpLKkC/41xVzv7SwGUXTMi/qZG1yV7RIEpLz83CxQAYgTua1ofAMcirnE7AyUPDHNuRoc/zebx+hBcY1+FWh3M3cwTTUQbSdNl+lYrLNka8/UWKbdTrrnCEt3WXqHfKgeAid+CMSk+vnO/8oOK7dBo3XjSrFTe8z3h6okjtgJKuWb6rEdbF1RkhauMIN/Mpp7M70mZAAqxvLUdjbUjGVp7TsCMBvMoX9qM4e+EeEjOeU+5SDZQ3WrhYxxkWyfjJy9HPdfdUqy/ei5e0MQ27GalkrUDazEDEMB36B0tpCKByQNKCt5ZyCMdQ/SgJ96h+H/IVdTsgmLGztBOU3bh2/qUCo4hRC73TsQN8ilAbzJW+jhWSQ1uGCcNXonEwfrxv0C6skFEUS6AApjn89nu5gVYOZZhYMRC3/On9M4R341M/0BJGdIqu2nQ78OK1CuD7FSzxIoC5omIZG8VDeE6nIW3dE4SILaeggkQF3JBwj/L3kLtG+XXc6OaNscdvQhAd2+DL+1AxorSGeSmkDOSo5JmZ5vi8q2nSuFLezOsDdPVrTpc+xP4sJQ6ClIxv4PwAIqEUWViQhlJkespCUoD1Kpz/QXDVJk6/oP0y1hpypVAPA4DElAiU9w+LPqDO3TJ4o9xWIsUERiqclC51aveFVl31K+Vnawf8fXEx34wwEuVTSc0/fSH4FIQETZBKCn3JsFeGvs1LAgQ1YC7aWRJ8K0xgQbm6o6fOk1lUtBhOygjYO9cne0xq6hkiYrj4S3PH3PTalffrUZzQe38jJFCPJWIZNy2tDSUVX0LpAkFJjauPMxIA0q6I94G1K0Fj1kgPlNAg/q2AWGonDs16oaY4/XVQs5I09JGEU0xxgaSSWIYT6NHYo+VCOxv/DuwbDnKIMUb2GCjUvujN3M2D215S8ePH7Ke8Hua+tjD1Ty0hsk67O+1Q1ErkkfFuLhXpE9nGA29uuxXJP3ZmKyjSf1V8jBTtdDX9t7ybU1Ec2gIiBKS2URaQyfuhbwfkVE7WEqLJL9P6S7aLK1HJJJOvq3ot+HqojjvinoI5jsjGcfDqRExTSTPVpsNX6eA0HGBI+hhlh4S73wnuC93UZI24Bkq57RT2roige1J408VfqhdiLzhWCFeQIyq8a7irtPXBGbzJfp8mwvIjXC5oRE=';const _IH='0deb7eb5c3befe87660cbfd61602776e5538ce91a3e35084e3db031f19f95b87';let _src;

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
