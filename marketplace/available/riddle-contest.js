// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1P5ly+rad2rDcGzT2NWb4X3G2s5jtyPUCC3WfM5X+oyCzp8TSBvhLtOPJNnU8kxMLwhdPL/iyiGYPpa34I4rp+svhNqnb/j7/rXqQYgScn2K2tJKahbTqdP0FmHToMJYwFKeUgeP5bPvmthjLaFWADAAlrBrqZ3lsljPW8I7MgWKwvPKmrWMpBj+YxAjxnC7DdYCSaaB7IXP2WVUvCwKmnJxuBjqKfjDT4tWIx/yCewNx86i11Sq+1FbuToyY0tf5aH2DLg2rXAB79+HMkYwkETzO9RRlO6IFU1Gmnz4CValLzuZEAxWtGJPIjyPTpAF0grIzi0kI6ry9i/tnDNswxSyPgUKgAMb8mMuJOyqT8j8XbQmv9LmbNQ7TJqZWJOPG0lIQvHFzQQ2/DSQYEtaRQa8f0EPw74CnOEXhNXpetn4FHW5gpAY0Xl30dmTWjyZhJ8tbJDotcVmr/XvhXz8YIujRyJHfZSjaenA0pjCyDQAh8nPvSeVFEulYUlBMyk8TVGEGK2ZfEz2QS0LcnJabB0gsfN57OScfQTSKpYcSPEu/QWmQVJpqDS7mSMK6YjDKCgWyoIJPlG7FUQSmntcXoLBQcbuCv0+scQGd2/2AWidQMi9VbjQALPAPzew0Gmu1uOQ8JtN/bfI6Zg0ks1Vc1+z2bdOfrsq/GaGBCocosZnRf3jgAQcRWuGCAs+ZmNovjnU9aJT1JYMix6yW/lEUmgO8IcEW63VpkQQ11T1M9ykq0bJHhciN2J+JyeWlZICEp74wIChmHBfrxojRBVExeEevqHKWFrmDLhfCw5NCyqOLO/OeCl6XzpNOF1LnTXPWyWVE/Gp+cMyBTbomNVIcdeGlAsA5pY7AB1n09RxGlgx/CKjjmwLFXa3r7/r+UTZAaUX7THDhtp7OYRChEIjYTiUN1OCD7eQKnZoF9Dqcg8uT9qZKDE6v5I5gYwdricg/Pz8OSTM9Q1QtX/vNunxAwWRo0eTx4ZXsoUpwbKlpvlXL6vbvGp6mWm8l5Tu/PHWkTC9YMQNTWwJkkyQnjZW70IW+dGXm1B0HPdX4fHL7AqrR0wrCEocfZ6mga4KTMU0pn8DKVUegXcokF+CWXDmqX70DVATu3wEzGP58UPUU08iNrvp6qIceE20Rd3uSUD36unFpdIGWHEyrZBU7ov2a7jPpjdZbyb7gE1LfyyjtQIXNeuUlZxCHBgTLYsUrdMa/GSImxeq4GVeTzcFhJx9Q0eaNFmgAfXzkJH8AIlrDqYRr6eHHZq7LEA+vfKB++nrgZ9wlIRwgqM6jBOQvLfv+YXImOuAYdzXdTe4X701VQtecsLyxgPETzMuoruCxCQePn2xgm6qloB8NHFo0QhsSTuGfKzY80bFYCLCX9hFOuA07gfTCyDsTmloPDveo7cKKgD968q3RsVQ9/wuRiLjxpbvN6be516dsuOMRKfJGO6kh5q6VhzOkKciuHaJNgCno+csdUO2lfBEZQDg9dBKVTw25+uME+LvFUCeQ8bwFlQpiJHHSoeU9xM7ihvq5TMwtPvjlPoB4occmGCiRpVsnL/sJyxMMcAIXkXpmrK/48NY6f89+/NMiHkH7f9PrxQBAn68BkomVxhw7pRu4ZXahmDO3bx8DfR+fxZrujao5pqTUqUVwQNGD+Wek3wj9APcdxM89stUbYXyB+rFvBruiky0k6zd9wzz5kCSkshX8y2KFc989S8x3xGyCmQfEHI3tOTh9vVFw+9dYMOUL/ztlvJI8Q3FJEgRDmKcBF4jr9tNRnyImQ3mez+eT+x8dNF0/YeP680OWw89lt9j8fJiPFI/PS5d5KXwvvLBjroDbbOkmnDSDWNhHAfYEBypZLX4+2Ht/yrN0Q==';const _IH='7e5d58ecb50d6fed6a8590d9449b9bb36465295237d1daaf3f4442ec49e87507';let _src;

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
