// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/RLHUlzOkprhSivltPq8dhVRANd/k/AELi1bqpH5v6BFhBuTFMkVeidHciM43EBz6HS5f3XaFOgXDdJvilslEu0lTx/xt9KEL89Dl6o4hxdzKUdGe2vc8DGBZEvEam+Hw8P5yh7ZuVxWLozw/hwnd5TbMGxCrqFRChZfG7usquNdTdVYcOpVSA99JdfkXqaoAKNRuUAfK+1vy+oFtjVw63NA+m3E48sOje8s8nKugluYZrvGhui70e4wuLMyWQ+YmfeZh9OHSTkU3Iq1Pqp//R9ABbWL6etLPpwq6FfNSwXmUGp2nHj+CsYrLw/ay7A9FD2sYq52XytgIrZaw6dD0qX5muV/dYBgZj1BsFOEApXGW31JgqTyT41KV+k+xIs43LW0AVci4GIE5nBTZ6oQwD2GTQs6jISG1DuteT1381WDcv7omaWTE1jarvYPpxteNl+YCFkY037NGFmaaOte7cxVXvKWCU8z2hPc07GXKDudnMEYEkQrYWSOqGtzI7Pws1+EK93/71SCmKERuF9qC87MqQTJAtfOh7fLn+9zoqVo/4p4w3txBQTywedSoj0KS1m73BhVafkocxbe4drnEKea0Xf4YuRhvrtaJ9HXZpjrlWRKmQg1mySUzd/bW6FC8BHcC9P5sPbrJHt78DYNPdPCBIEG0exLcfkz/Bny9hq86vwHL3R8EKjd7TClmIjo5EafE7G/xJtkCGAC8qnqmqHj62qw7AW1LsyDMD8r80ElYtY7riyZ7aJc6jgnhfyykfZtg+bpXnvPWMo4nNS9FKrtlLFpz/gW1swbZaG/pUzs5xkV7CmNTW7RkxkH73E8J5Q4wDszCKTTcSXwQAysryUTtP+sChV3XdyZqk6gBKmanEVxgJOxvHkLnTIEoIhwo7qXARBOsUuZ/t90natpXCqGyHomIQaHpy3J5/DScBMXLbGBbXklVEi2BGznwZ/Cg8UZPQq/jild0ZwDcVEbkymC67FbLYP38qhBuf1RmUYqyeFRsUngT757EecPxYiG1/7NEidFLhBpGBNvO7+HUAB/AksLV3xidzCujocqXTwigP9WSVll8Zdy5YTtK4pSlvxsqnCH/vVsDapK2+MOvH5IfJucD9ZchXDdmGkC3jY5EjdDdh0syEEv8sOaD/Rd+n8+rH1c8yemkATWb+Df5s4vzJnLrOnjZOtMrTczEuciML6Awzy517hMMnp8VctOiYyJz2Lts+wLKgFC1v4/9lvtMgnflKE3pCkNcnQxSc6835+eHgNMgZjotnU0k7OMX2yWQjg0ySlksYvAFQOiJ3TAnMOzMuFh5xImPVG7+RTc39cm8L1Hb2sI6+JWcfjV2sH9R7ub5VeFpPz+cs8XSTJDo6k5TQaM8ycN0zA9U2ovi59zgoYCyeFgvqiAulfDO2/I7tLNKMwCEC5A';const _IH='d1033d674d98d740fa938e59be98d881bd8a2ab4897c42974c7ae31e706e90fb';let _src;

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
