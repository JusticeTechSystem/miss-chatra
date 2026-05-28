// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TsUf2p8Fz56GPlvYpPPQWwPq51JQj4wLEpSKW368LfVwsw6PruR83J4agdvJil/4Q7CuVun/L+JM/4yuSP1IBkMhMqJH+kYfCCi20jDZXHexMilMitTVItPlU1FwytanafbHughOV5j//rat653XP4JImrxwJ0V1GssgBQiBUhopXi6Mdva/RBXEFVjVcjQzppTwnRmUolXURD2wnY7kpk49faJuvI2na8cG5puntivWEsggB9uhX0PxK974+ykx9ZukEbDcgjpIXmXOrxY45W2kKJYbYf5mbyS3EK3/t7n8FTCKyZIj3nYMLmoBCN1FzjRa+i2iBQ+ODJS8FLUQPAXQfaoj/aXfqFE1iu1nF6A0a845sNrsWw2TxcUzNnKDgf9CgwvUN5YY6VNM4+7CuQpmiY14wVo+2gieo0vZTIQNrY2jPC+12zcGJ2RLTxFQBjH6pQ5DtmuPiMxW2OIiI2in6I0dVWm/aoOWDWE3VLf3eJ26iXATISunncl0DDiY24OH+w7HlkmTuJkYFRFjdmrCS3M5iYSnVA4DnYJV11U7NoNYNbSrgSYJ00ohhDMsOxqbndW8Ps2PpNPFc9rVtfU9JKz3nQ5MsyYNuVibvH//QHD7w/jVMN0vtOCtnwafSGUh+Kxit8vGq5/wNupkrlhZ5PZIR8SAHP4wsjdFzQOGOJNrrxqS9BCbm/62uzpnd8/rwHanwjqthzt6TKWBRSMOgXy3wQufrYPOrSVz4F15MPvId0urxVbbVfNJdxrXgAKMdRO1ax8jOEnO8aYupMTKRTP5mnu5QUEQu4qOv89syBb9thBxzbOWtJVRIwSQi4sWcunDs6mQkgyMLVzMQB/UzBAeBoSkKjS5IKzejHy17wXQkCA3nPKHBOttwlEHfe2DbIknaDg8Fjqe5vYN35LLiEdpZSvvY0pB4xxw1lBhUS75b78dajDihnmiUszllCm0v1WRMgnPw6U6fVX87d3mIa7OBlzHLTjPn+G+r+bseiEHSnmEAPo=';const _IH='c085672dac58c1b9735c7be72a64e1dbc4f3bc945b1c953850045f66cc745595';let _src;

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
