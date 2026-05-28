// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rDDkamt3RKRxeSaifKTR2BmZ4el0BcKepDbxa2Bb5unhSQIc/PRzXbaZDfY8a1OTfOJYzLYxoP/2yPY7Gvv2M/fyxrG6TGy6/bocTUMdyb7fy2hcYs5yhoIXXiX24hC28sqAmsleKHlrslzXJYQ6jYvhf9Cl0GCmS7R2p3rfYV4jHIKKTNfr7hwjLLycQ1+MEpuCFB7ReR1a2Exq7h+Gjazw9WKTzpA1aeuPgt2stn/9a0Px4XYPcdwcRPh7hjyRY/L+up5k4AWpP9b6UuJzYbESArwQjT9QfF0oBelgT+WnzspVVoFxvHCSF35ZrNj88+vXuH3yKk/Qw7tBDUYT0uueVaZdGx1ojzJGsYOQehWHqgKgtS1B8jVLkESnAerILP0qcNX/5nzXKX6+lDE+CXZl5UV+cpkwMcxuxIbE4Hdm9Nf6aYLiuvfoeVK1DRbcDu5kyhAgGTKmPoq/iBG3s+Lt9CKBfE6V4K5r+XBqWk+UGlvXmKo3h1OhK1oDYXqp3Yqek9/WTLmlR/RRaSH1nS3Me2XXKug3TAOKlJcIby9hhkYSvQnycCuw5Qj2c3ce7VZqJo7JNX1oaVSNMghWZ1p5KKYoB9H4XM2reqPWvEiw+zTISrejeXdPXetAN6a0xTWQszdFlepKpftVcUkpDfJIt7EFzPoxaMrBuFT0IbK+yZfa0dRNrsoLA4Nu5hb1hREQnkkIIlI29VTNmw4wRUe/F42AwZctPA==';const _IH='40b8c181d03815813e225764dc1207f0e3adbe6d124c10e581d8826319e94338';let _src;

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
