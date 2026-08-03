// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTDuhP6umFRwXEJQ7fj/Dhk4gaSGISC8G+WixJBBwh79CGDS/AmF1f3zeD7WZtkFEnVX2RIPQHUgDD55/2jij2+P/e3uhvumbykmrlRfUTIf0tTlVVpYwWGCF4DwH8ryPp4SYg7VccWNaS2En5mj6cX3frAMkcsxigqb+PF3pZnEp0Xvr8G03LTAxe8wBSjrBcbnXeBXuwAf7nl3n0/y4Q/xGIlhhCBJwrN2N8hD6ovZ+Mx2SpVIPVhIhYSgMHPFwiBIj/4qWFv8lOBqzjIuYI1o3yvQW9TjbEfPkPnmvmDPgY1hlPSzwc1VWraJacvGtgoOxnw2mJlPesnEIys3cFr9naArpOOQlixXVF7Ih82N8kaWH50G7y9mzx2OhJQQfrN7n2Brr/4J27H8GntmKvAluhLG60WI1i5i4s2N8TPhyy0AbhWO3P16LO27Cc+JpJYqquxW75omC+L4jxcj/2qGTDNuFTPfDYli+hxNlEh101yBGggPT2bDem92uC4lXt3uh7mnr87w55QerxEriJF0HWXpvN4oggoRb3LL98G30J4kA33eCSm2jMm9cDwzHB7Z2eC3X8/96teShtUrceLjM8hrnD/DPgGjoRgq7LPcvmorjzzolbOQlsLx/8iZ8k05PxNZyZka1ELc1a52A1Tt9ZcT+DZtDyIrS0bj+0cRfIXxW6w/mL07R8UgeMO94mWDzfoK62rSviIka7eri80iY81LchMTe427ieCCh6EAQm9vlPGvx9TFMWExRrfQVdZQdudyXc2E8RPe7z6XKan0y0MMwhx2eAE1odwHT2v9LBzbiwdMUOh86AMm9EI3xhlYFFoHlg+PjdSrC9LZDWYz/RNTJF7h4sqrn02a7urpemk3GnN4N1gI+ZjzSx0fDitmw1mar9jZ6dzX8Uiz43j2EFN2oKKXVDwF0nGpmCo+iFYlxlJ6IF2qiUH50eTJLTHm9QbSBTk3toM9JVVZgQaetl0H4bo56dbS8tHsBRH6v45YVnVmR8P';const _IH='647754dce49e563304d270c245fe9a8daf536830e7b6c23ea17eeb0bb040c766';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
