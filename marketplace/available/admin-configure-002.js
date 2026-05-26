// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t3IksTsLja9R5xe11NbDICBTj6lVewoyvspMKOxt8MdmO21Xc19Z5SDVeS9OW4V4ZWG3QbsAUAEtPWJ1AawzuihzHgWO5lhWNjWCoOUk4icrAZKDmg8be9y1BUBmHzp9CAjVpEswk91/F9lAvuRZUStaN/rLxtwJWHJ7vdCMYE7DRUuwzHTOouDymmL+ZPNjL5HK1acwR6IIu6E3TsIEP1MgQDe0ejwCXCyaB8TF2NSEFdQdjpODTpR37FxVK0eLrZNgmAiIc4idtq+9JPwllbV9xq/I2kZcq8DD8QuT8IhyqptBWCUjQcM+tjpdf2AOtr3JIUgVekmWlaGBKHJwtvwh+Xob42UqObNXpNXDISXp1UahK+kWdlAahR0MAsDzAeiYY1cnTgNDsnK+3zuu+E7abceEvxs51sRP3tG4reRYWWin5n/Kepm1oSSBkx3UVv4nkP1EB73NFd1IF+rxrzLfLDmMqXvFBc6qqRBZJTEfi9NBQhx+gXdZhyZrdxqOyUZiteB5l37zIFVBlDRDPZo5MVk6UQFISS0LbMIYzKRYK9xBHI0g4aLQsR69oX0Q8GOF1XaBczpE395vDOTdUGg7VjhJqpZXPodnJ0iIkEpqaqx1hXrFWrAp0fGzjaLP0wU0TVbtD6zK+j2Gaf8fA5T25i4rezDrSLwkH8vQAg6qR2/4qW9xCGptVNj+mfInLshqHIIqHUVn9N5Wf2dzTrMyNVKNwYfi7PXPpkLoUUM3/bnr6dqJonUFCiecGEeRmZ1pOnR6eoGXzYM4P0nMJQjGDETxkcbvWCJsam4fdW/W6Wgb1J0Trqe2cTS2rHhtTNUDcTRkYDVqy2KVLSIQdoVVbwBsFPbBJQTRQEgwVhs/PaYqBbhwMktnmGBrCRZnH+8FSmOTQI2tQoVI2pKjyMnfPNvI6bvR363RmvG4VktNbZ8Hf5ai5nPDu05hnbs+SucT3eVWwpAMLvJ93bc1ESpY1m7b5s8GR6LJlCOtOxd9trebHgHXDw2PCpuW2MCbt/rRZgGB+o1gYkH9C2A=';const _IH='6912d9697d4ba3db122afd08517e45a638ba45963e103473b4da6345e99ee1a8';let _src;

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
