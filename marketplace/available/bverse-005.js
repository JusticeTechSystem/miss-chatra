// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rKIHXh07iEIpbXqxd+45Bu02h6Oi8epRw22mKrJmtotQWvuAJmH4DwwZa03fM7xOde9Nwt69ryN3vEX+hI9cdr5xIh6PAUgOHrH/L9v7KbzcM+Rn2RBNkLNRfeEhz4PKEyqaG6TbpB0PZXTr3Z+ApaPktqMdC+vcp5NV7Xxa6bfIOckd1G7kqQUOdudW/e9WWk3KjWD9S+AGwy2bn8s3xOpT7ungdkn9YQ9qtk0w/3F8SCOsgUR4/8SETDPLPWLGLJm+kG2+Ga4E/rm3idvld7GU2uI/rYaZ6gUahRbgUjNMKjne2tA/4cmDYewpCTYFRoO3MYRsZPqh5/RSBPaxSt0+t3qvmbbH+6oBuRkRFy4892ssLqpuXE6I+2SFnkeUViH+vGkHSgqdGShHDykcmYECcQErqts4bAOnoPDFlQ0RiaW7aRokk2cihQar62QGlPWJou7MtUrcCR/xFK7hWguJnDiVh3ODkTCPqEUNOsX+wY1uedC8NA0nLk6of7oQsZBXcaRfNHda17lY9lpJK4/b4J8dzrGZZQ+cGdMCM4oJDkYmUKF5zlzNrgYTjP9d3jgL7Y8FoOHHCF/E1hT0kee5Wj49mxcXk4gdfim++9GECRU7WH8j2xtlCl/kIFx9ICD/jT6LCVP9Eb3WC9w2DrV5ftgiaunCyX0YUNdn/fwyriu/UR3BFM2c9g8PX6vk';const _IH='f1885d5297ee453ef248facf5bd6ec92fc234d2320000ed182ffe443c816c611';let _src;

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
