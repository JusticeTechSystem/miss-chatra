// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dAwm5yNM9rogheZDT2hg2/fEzf6CHppTK+mIfPMJ+3z9618vh83Jmhz7ZlPGcH0CDsivIkZ0ZZhhQP4hwA87EifJ17bj04N2K+NGCGcxThdqgTXnQkOHp1t8NFPup+A4TMV9erVUW64b3wogxJk3pA+dFD2crt33+vSb3IosrfXMz/DgL6JMDNRahMcKKporLrX8rIabMk/H4lPKwcfDMpQi7DJ9Vl+HGX/9d8a8MbYZQWq1Hg7sfevU4T/V0T0WvB9DhFZnCFK6h9iDO8lLqoPw//CCxCc7pOEQ7oaXakaNl//1seamKaWxiMZI8fdZIuy6YsCiXfalzujj9ur/lJFubUiF99UUsTTUutzgFNTQ+rFV4U27Rqg81AhsQx1U86DrFvVQvoFY1M29jeMxEFZc2PbRQoUam8MwipMnv1kkMT4KsPctBenXL5M7dzidqHJ/HZ4ZikXsbhRJj01MUpdOOm/PD3LEI/gzgY+nxAUy8u71xWsqWPAdCDKOwEtgi7QKvQsCwJ0khdlsVwttzSQHTVNUqz/9Ed67NTAvOwjHJPXipPIMuGDtmv9Qr2fS+oY8cSaLY/xzwnLC4WeLmIfB/9DDPJwlgoy9eAWDmcDpRhh5kaldfxMMNV+55XiNXvcTNx8/9VlETq3tUmi9TrV9zFiwJ0ag4jD08faObP7qHHTc6j6wCEogrNHcYCKjkg==';const _IH='b16b5247a162006a9ef06e8374bcc29d14bcae923eb4b0a42fad6d4b3ae6054a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
