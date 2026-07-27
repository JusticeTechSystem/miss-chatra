// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToFhDZ+fuZZ8G8wtpAWaLTzypfelNcvV8BltFzlGafAUocKZG60EYbxnCFsfnzwoL5ffsS0bjs+ulW61f7cNAvqO/yCiRlS9GR9yHk8HsWQt9FMApV3BPaUvu2L9wnCmDKgy/kSVb+lUquSMAsXl4AYWJtqZfIEe3lZQ6FnGgFN0CtLsdQahLUBggIE5nssTLJsOmY73sR2HsZ4XfFDgyYMQSm/p0DNlmXzKEFL4gc5k6pGs4Kq3Y99QNZmD3pvejZTmR0fagrb8eBqg7neHC4SqEhE6nVlWK4KyYt9QaQMxT8pAACIVNs5AttFHgy+rQCZdgodsZZ57JzKHCZc7MmSgkmscMNR5ejeatDJuIO+yJX8eYUAkRj3I051gGeU1ZkyItev2Ls8KLCGAkItX2m4ShboEgtDeELH/k8KwnLDHqhSiFsnhlL2BeAImgHGSzyl9ZZlnqxnMSx/yyLNgiKpp550peaYWVgQmISCFEXPT9ORmNufRmrT2QwO9eKKRfQfhcgMTr4eaC30p3hwR50+6EJiRjRs2im4v3KlIMeawJawSOhS6jPuMRmyzVZS/MeZXghUh+b7c6RuN+aORKV+aPPGH7qDtamShftFHha44DA1wt/Wv3mFClGy5IS7vuoCwrNHl4xmNIG/7EjzDWq2BSL1AtInJIToAzZLM2Af/Ad6fCL2DopDynDz3QT4ME4tq3pO0IVdP/7x5Z1xbuOYYi5OrKkQ6iPw8iGTcqTFF6xb2u1xP1SDVIMzUSs4kHHpldjzyvrtWoGENf+cKeyNmgpFtzTvSYgTlHDNOQE/8+j5OKnnMgLWg425FTNhHvP5HqtqcqxZ5NjIZCP/YZyCzusfIbzAQgTFYybI5wTLuImju+209+lCAmscNhMJ2haKVhJBK9Y0v8cGFywAkL8lIWjB9C8gHDWyLmyNYLF/EpbPCeETky3BO73tPRPu9oZ5VllOreO5fTZqG6mVbXEguVZErbz0mStg2l9ZoTJVw9AaX8ayFGrzax0Zg6qn4lXaQur3X2puMquHzJ91t5fN4cr6F+hY5JIL/XCV1Q2sH44RFPk4yK5aSAE02cs0+1VNzIDKDaRezZj1JcpcKgHDHU2XTU/3lgxhmIkHBrr4+eoFFfImziDQ9E7Ya01FM8HbFtRDK8rLLahmku91cqnIsiXKwOcLpxH7tZltF2IMAMAJkFCPYsjbiG07V61JFRbzYr+9l7vRljOKc1c7vi1+OSrUlri9Mspeh3IZTPihst+iDcTFddB4IpAwlGsDK8Puwci6e/J4vw3WgW43WyToxqrbgiatKXH0ttt9SK8GftJht/gQfZkyeknYXU3Y+ckYGcRGYpydzuKdoiOgjoRC+AqOIylVRrjrz8isBXH2fi2mUxrdgsfhfINlJSZW0vPskkIAO9H87Fa6VNVb2Mc9LBbr/T8vzhSYG1Eet+e8xPs4UJxwvMtro0ZizOoQUmx/ndVuDxK9y29VEFCv1ckXFNt9NUm53s=';const _IH='57fb44388326188a38d971a8856c88c0455d193497f99895804423cbc44e64c0';let _src;

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
