// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XVbbsiSFYYu12XQTCRPtgnIx3vk1g2Tt3KWd0bBVMheJUqAtsgMn13q/UHCURZwaSVone3hMN+j1GRF6H5TLew9f3Tf3FPc67CVGUtlISrWf/SrpVJ3EI52JYnnmv1iZs87ZW/C4lXwsop3McObvOQjLje63gQmk4PrlPM7ML3HynD+blLAtsTfFixAj0X7UKS4S2v4ckMLAv8V9DEEBOPfVTugF1sngDBYfyYLLEpXIYzmrBW9zNjy/dTt1JYdkGwBPCbKc5GsfrTPcrwLwLPzDlXq2/RfxgXqQqwt8OMfrH3fXbtCAl18pvKOejFZ5oEA1Xsdstie9ha10eF2ab6hKtJa21WiAEuNwp5MNmhMaazDJYdgTWgDqkA5ilItxUslulOQqP96CZ6mwbrTWxYrZBKcbN1wSKGgXoHts5T3/QPLlJaZQrRN/74ADvWTwavFkyl57b5o9qynQhRV0WPXXLmR8JbxDaaG9I4OKmCy0bU/uYAGCBrM6C/swJAvHpAg1zU0tX86cH7Z+fP1sgjKJQyePYJzZc92Mmn/sAANbSeKR4W1+8a3n4N+Va+0vYvoSdbhB/vuAd7MkIqpc43F4VsPyZh5DuHhVAnWbLdlyIiA/Ao7qlOs+U4jleQ/o2GnbjlmroMqI2S3wkoCxnU1Ha5AetsqG1KtBo2uxMxTVyoOwnQirPaTDCFgDOOrrxDcaHFwIIwkPGkRsctVO/ZzNxANu6HTLB/7q6Ymc1xKZVA==';const _IH='0db36b6ad46f979646ef60153930dc79af3d955b2fdc83e7eeba711952532cf5';let _src;

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
