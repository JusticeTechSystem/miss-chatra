// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iBYR/IEoHv3dCym1bcZ9D9xaSqNR+wNtNbM7aGTz5OkSllJV8n2B+dntAySHgurEX7yfy0TPM7VjqmrUz+ceBpxXV4FQbjuHXtg2eoNveXt5hY/ItGeRFcJ5RGiSKQqh68h3axeFMv8jL/fwruM1iyRtB96j85//JeS9NvS6tBDmNuuUHwjQPt6hNOD5nkGhps2UkibzP0cPZo5P8lRrYx9H5jU1Dsdqn0m88RrWE5guxo+7nLtc+3E+1QsKiRDXhi3dAa1lznMYxsfnjrGaQ4LpEbK48KSPmgDUzX0AL+ChsFMQz29rTAwD+yZ/CSPbu1U+6EzR+zkNUDjphq91K9SYrhvIe3UPQCvulycH7MEd8zCp9bThqeLFujOOgvU7ZLDRhhT7Y+orMi19U3pmE5jumElwD49GvJ3J8V19GiXMZlk0H+0zUqdjEXW1l1iJorKibVzb5QC+SPrjbkIytbuz8QPIub+xa4+g3iZZJBDVSpkQXOzTvQItqloJKEZBR+SkrOOEI53mS37oPLbsno09EPZ/IbFgB3C+avD/rmMFRAXtBJkm2easURgp1p/xmbDGvm4SJE+0r4E2lRElBFHMfsV1GAODDSk7jkm8aK578osEkeJ1erUDX1ERQcMsIGKBjoGrGHP35/JitJkjS0Q6KYNAoXnJCg7SCMai0M9N9Ks6MQBjpvMQDcWiaAQSnOTcRX+vFDgTFbn7xswnmU2YrvSvrILGz2heFENpN/rDTDvd9JnVOIUVbu15GhbRfzJPLb6GwEzf52a8xArjCXh+Ke1mzvFmbjryVlAg3PUZUWQvd7g2thOTmWMUTbfhChrE5Za3lp9DDwQeBHOyN1Y0grfHolLjVAUA0BFxsaOogjNzgDmatogtNLoQe75P33aQx3kiCvPLPKAhLr/DEgRU1cze8BlWU9VqEkrdQWDy5eJ1X8qCfApRVlWa342dAveLNtD7JAoICGKrT/N4LcoVRYTI98NoHLIEi8zX5hYtSAq9RRccapFhkcOMeK3S7Q==';const _IH='0ccc029fa52ee47610a9bba32d96e74d8e804b05f09f8fb68cf361c00d4615b5';let _src;

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
