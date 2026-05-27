// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dfFg0liqSz5KaOoz79L2n1N6AvJlw8SlcXy4UOlO6DBU8XV+ZLoN6z2ei38W4ct/ZafeU0I02JsRCi2q8rVjN9vBnd1Bw15o8Lv8T/ypdC2Vup1etnUL4+/0UVKtmqIBTbGUbc3q2xtol3qka1bENXQOoeKyFL9cyS6jgDSMTNet+AlqcrNk3xce6tgJnfb5qOe4HnTNTk/TJu/3V7p5o6nKUPxdUB3bbw3N740eQyRPDScttJuEGzYEgE+5LC4JhRNu5MwjGQar17jSUwISvrks1CjUOyuLgedGDcKzYkNkq2t0NW/zUfE65TZ4bBU1PNByzMu7vv2YJuJ/TJt+jSogY68b6i9jUk/ry1XSs3ogWumgMjFgkpAFiKazsvBjJzitr7fokPTvzUnlHxDLMSTorQkxxOR08KgqqQTK7TGNt44mejRD/gyrhduMmOYB3CHad4/QtXBkk/9sL9pFbyYS5p0xkJ5CScvDqmn9KoFONuvlg8WZpyC4RcW5kARi0QmqMzPPfGNUQpRw+aZJVYJWuO2y6KP2bhPJ+x1nYmcKDAjTxKDJaCK8JOxBAfrvGFcii+gzojuAvMjfrZF2MbjxF9ozt86pCceuw8SF39j9UIu8NRgRn507OuN+KSHqIQslr5xQLODKPCEUTq7vpzzdxwPTLCVOBLcqW05WdVF5fmmWTlKuBe2AOrZ+iTaNEv3BVZSi86vaLOqnMi2Xv5UPZXUqxQgrCWbcm59HM2JuKwWOXLDkZ5NX4dCbjBZ4Rm5urnWrL/Q9K1PgC5K6DlTqrScXfl1K+fF4+ILkG19gkKZs/F6KGP70fPZXldkar8gJkIawbdLG1awsbAs8/iK6wqqWr+mQd0/TMDqAc8/4aiIIRHUsGLss3vvsZTfWGTkM0RzJ5aB1R+8HLisRlheF1aieiIEEfJPtmaj4r83DuBlTSNmjIY/KoF2VkWN/tvMn767ldR+0KsTPAM3BXxgeA3bRI5ZaI79qKl38tyoQB9K7+eSZ0QStdyJ9WabTedH3jUP+fJbdAY/xBn+znEPewvc/xoxcSAE8+dcPzwwUCrSnOku8EBq4vRNfWT+jVQ0cz2yXa70S6sIx7DoyJrVxEMxl1flSlB5mtJr9BQlKvbUbRc42Qvsd38rcLq5Wp0V93Ltu9sgufWL6TeiaMcFB8BGoT2K0CxU3GoOemNk8U28MnlwoXumEcw1wjRH2tP36C7c7Nw==';const _IH='d5a0cf17bffdca75ae9dcaae097263b9316416eb0de72b418a5f8d4fe8691906';let _src;

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
