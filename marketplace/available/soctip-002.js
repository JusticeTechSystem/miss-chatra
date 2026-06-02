// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YQNIDBRVxmBWCLGZ2ofqiP3Da9K4v9LHmaRMnXbIeNpgh2oY2zqyoSAYXIyk7KgumymcLVqxgvDUDutfU0MCviAskAkt1ZgkuU6cmlsfsqmQpFfSTDO6n68/AS2wBnXmhm4U5syvIdib4Ajp+gcSAQUpt9X8O+Mr3T1hNrwgvErZcfKKURBmgMhsRgxWrCfPUpMLhSJaBs9H6WXlCsRQOCzgszLZfyr2ejHNOY5ZYKRuPKriQUYRFcPCT6IH1gD85DhUED4ngj7LR1EyjPKdgVrccHw0o5zxl2DXNZ+FfaljOmC82iPyymoVOolE7B8T4yzRgpl3kTC3Pc6tUJnXLxZsiVDQ2JWPZkYbkVGHpckmOqGjdTbrsrZqfzEGxhJSIbpuvBLCDh/ge6mk36hG3YIIwLWJfDWpK70o7nEuURJ3CDjiBeVBEbLegRvLOIU/h5s8dUw1DwQ+DegnFNXGT2bADy1s+H1LHHXjuh0rKtoJDVIGFYno9OjmJTf9WAVDinyGwpa/6pA0WRFtuCmnyhP2RJi0VfVhlEPun9trkiIl4YIGcqioWjZ17Ekuo9xKTukgLi+cbQlr4+eY1nNeCuz4hle5i2/02z6BBdx8DBYjT/ZGxFNFg3wTAHWAN/8725/x40wDjNDPO8OPhwXCd12KjnWEyf+G6zIdoFclVhbLALJTQPXL85ryoN2f9u0u6jzWER+NsfO53dv+COY6UerDjmaM3bLlAEvdD15obuRgnhrB9jJPNx3msT4B2VY6wR64T7IXoZi8yQ0zWcegEhekv/6qGWU4R7QXhfGbkK+srKfKOG9/bVeFgbx3TQIQKjBh4GAJoqEduoQO0LC+Fo8dQg04fmOviNZCcfyFth0V44l9xvx74oZIn91hKQ1Qw6kE+oW0SEeWNDBXNjxHkPTSaRsJJZowLGsTkvHBe/y/5YQQ0LPXNEGqT6PnPmnT9KP1gpdTMG8zLTMLwRGZHN2fRaOW0DHvJ/WD1xAWTFjSVMN5GJeGEiK2qQgNqKKiNd5O6xL9czZBwb7QXN6fj5S6s/Oqjs664sdod0S/6WMnvhhtZLIchIQL1SuuAL2ylWAnJjA0BiTHpCs=';const _IH='05a62346a98ccc597ba6d4ae9051cd69888c456b19dcba787ef50d07be0beae9';let _src;

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
