// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='itZ4cddyo1al3ieKzhqwVzPK/VS9BNehSBFZ9JkFLeslU3UFwrhB3GHtQlDPqxTBcykwF8+x+7CwoUjZxT1lKD954ABFJfSD4SPR/4PQJVLzaRuNWj2/Iu9gYuJ0mDwzBhHI1/rMCNCoajjeWewEw2DmbnhP7siCHvsuIIty/k7dQLxDNGfHVNVfiLWc/dDucAsp4ghjVbES3mouEqQWddscVnWTqNDWVHlZXm2/TVElsf4HKbyyHbE2Ek9k37/TWWAi980q5bj8gcTh5Zy42krbukHTj8T2OWXay9yFu9dsXgl6/5rWiPmwM2vcXSn3CqMZA9Jl2h5IY6/52gxLzn8/EfSBiWCrpk1m7ErCsrYYcIEfkATb+w6szYDI4IRdde9YH077m6Y2D4np89Io6uSLX4ksrpVHpa6YunAaKwQg5bjhBsfrSRwxO52meFnBuwu11R6EVgstnJ/3Z1/g7gJeJxPahA/WBIHpSVDuWwd0mte2LNBlh7ltRU1edQf3tyPo2v24sndUTaCQ/URgmR4hlxauAu47rpFiY0nCQ8ZEWvD0Pc0FW30EMd+iySGFYya53rD7lSAToX83XIVtXiwbpN/IRjrPKl1jmj2G/CisXXFBF+wBAJbSR9JoeIhMggLTAOGKgTXiMCfhncJZ0M4DF2WVMv4Mal+L0vWHnogppN/eZJbewDFDR5j1NCD9ZgwBx04E3J6F1hgsa7/FZIxpFmi5wKr3YNuuxYRLVAoZLFvPTUmxeSfV0lhdkLC/r2NTCKaVfParoVwpMWb3sQNsJ7uYGnlGVxoSNyRolT+N0WB67fE8OAnuEjYWgyC1Z6kTjcIkLGF1iFQuQr3ofyWOt4VTG2qELq8RFYghhJvJSngyk1P8t+CNn7oW8qe2pIh1hToE1OgAAkt1MnKBQzksS/AOxYv/7Yvq3DMz2XnAYA3sXBBmGyNDPsw4IFqdxnRmr6O/en2HsLqLltCzg0OwkHdBcnJZkCrqJJgKs09tFrm8LqDaz5pLMXl2umQ4eeFqMszVF7flZzxZHeQ6eE7PJRZ0AgWFDvdgQpwi1Li4Q+assyBjhgs/0QiAxb0SExFrmgC1T656my2lpPVApXerOaFP/vBvJ6KW8StSXP1KnFP2K+DOc3OwioR/3OVA4KZ9b8WBz7PoCQCMjBMZQdm9a2hMc2p8BYjDws/njyYLCwed2JpOx9ykWOTH4Txj/Z4N1Ei55g==';const _IH='7134d54fe702a0777db3e96a7fea920751d7bfa3996579dfd0f4d51fc68397e3';let _src;

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
