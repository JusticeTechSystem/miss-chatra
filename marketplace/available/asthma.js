// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dplzp1W7mjjVCCcTok580+vQHT3cSddixYQbrAnCMvR6msLg7IfPj7F81J3HHOwFunDtYKPzMl1mG1Lqyg6ambpaRcsVlG0vf+F6uVM+DSEEZEoc5CAjLSRsf1BmUGf5FktkQBYqZ94w5DUHDsUbG+/TQCpIpmyNIWPh6VTnDntceliOr8a+DgyIFozh7B4PXpXd56HRkrdV7cOdbNKpZACMIBRXEoQDEJSJo5VgqUIblj5jnEG3oaCCol27VJu21sXFmKD9XdYGJtCAxvFRgUWAkIhlCfGpP5biOrwniXfrQpJ83fI7EzSNa34m9QGSMQ/HF+5YlDXGYMRPFvHIq8clus/0S7hYQ7nqCaeI8XWF7sk76jNUbabMTYPI4muhjsqFrcRtgmTfUAuHCa036RrCALnuXNF0D+3PdNivF647PdbBFk8Qyo1lBiwtadW/s19/7EKMdYEZa51XzV9aeXAHe1vijwlKOs03fNdx7v8hSPLMhPmaNWwRLBs2hxXrLunn6zSQVSeQo9ZMzqGLsezvbx2YH0TLug7VRmf7LkJEGOQUdNUcrYUdiPVfONTQBO/DD76Ax64YRw5n6CORnHD+1vYJkRYRDNebyLGUd8kk1uBmz9OvSPFx6uCa4J58dppDG9Ma+0ldl4YEzKPJlgIjal1n7litm3jda9y0Gg1zHr76ONYxbM2EMLGY5IyvE7b1v/mf8JV7MeHazcBzKCOyna9nHDYZQoRzU6yoj2TJS3i2N+SfcA2wXOwZz7KXEsVvV0B0TWdIfvoLpnHEXJvhkLe5ZkWCb4rrQKeI955TYBN8+rWUVFv28m3ZSiv3cZw7qMeA9UEDri9C74TW0jwGmLL8WAikzAUH/fwX2KP/E3fB5nhHOJwCu/JqnNbIuCAQ19Usi3DVfM38el8hiJnADjkA4zwYe8NEaO+LtLJCor3A9v+MAKnGWWInSX5HY0cGcHpMMF9z3nF/NMtzUXLTbUah1M4jI3oCTK+MfKkPn2PzBcWS2pZ4jTKkXZ+de4DjQo8TNumf28z7kL79C3RHBsiV26XKvecY5DjuxvhEbWHUicQKlw9Ktr4oN2zcuuqUS7bo9UOcJPgN+TJGt+C9pfC/tny6pP69IKmCdNal2rtaw2TvvjqYEEeVb1gNkKpMc8o3sbiuL8NvgH0jLEopjqbcxmRbYveH+nLn3TrIbGnYbB8mUrCC6c6178I=';const _IH='52a2b15d0509bbc7a1a7d82ee1f451253669a2103a7ec4bb8a725e817198eac9';let _src;

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
