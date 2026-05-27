// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tkMPHFCdy3ptvYB85EbE96Q40r+bzZhNboGOolQmAXfG6byzL2xrGlyDarcRCs75/5YAvzORh322WVPGzpxMz593xLna8Ozwo3VjdfsjugicZNbZmJB26TvETa18vT5oSFBgVO7L0Aj2AQYvyM7hlRaLd//qCunP9Upx/4qrXNtlk62ol9vq+qIZA1DdcUvFKCtSQAX9BpxEcSHZPbVcF1iXj7ujUzeXZMcgNfkO3LLQ1CUrLinwH8CuN83m41nQaiLL/CIgqT4F1Gi2UQdgd+B8SsgWOnG0nBDbWmSuqv64AckAB62oWp7tSRkq1LxP1kacGz+SDtwb8FcJd991sF+Mio6L4F5sGeF8fsbqMHE6XIEzFw6bvtpyYtmKiEHkJQcUEbK64xGLO4y3xBIG9NMCeAHnlGbTG305iiv3+KaGhJKTfH+7T+RkrFY9mRJfokfybsNqeIHSn1+THyQAIGis01DY77cDNeh5JAQntjG+USGCNTzE4Js5g5G5P5UPvdjC6AXqnnykdjE/HaUTI0KREFbWmWCyo7mmNmlk3VMwQDotAHIPeYvm7asTjNv54Y+0wyLyHSd7vxovPNU3c7ql+xVK0XxPHDNugHrBzN65vi4Bq9aIhmwk90Au2PL1RuwNaFUVdfa/0RUeo2PXRnmhbBaanVjXs5zbWV8s5onOEybMS2uMTmVmasqg1qoJn30MWZJiNV8MG1TcA3K8OCE6892AD68wGIX6kWo=';const _IH='81b3ddbd869a1c681ee6a0bdfa82e25c6258f0cb8545dae57a18d98b495e4f55';let _src;

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
