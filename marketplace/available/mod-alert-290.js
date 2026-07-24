// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUWym6xYFDy2AWuXQIXWMRCqUV9sAw8wotXhuv4OZrehf2f1Wo/qM/V8JjRiyOiwlzDKRpVSGmhukje8X+LKStrnTuAno0zg2UBdq0Ou77PIt/navazJQtBSvNon7aPbS1X2f+Yuhob2R9FdcYoqrLoDTo/o9WBLTI30MdkF/QNDTn/h0xUKT2cCvlgTqEXxFfIitbMQdZ+bPh0xJZtPTzS3ZKWKDjSYYYLsVy3FVnzInk2bB4wUfip6apiZUY6bW9CallMx1RFmJc17YK8CrExXUBvrw4kgRZy3q1bjYbJL5C+AWLhGyqGgyD87AgMQ6FMtVGvC63wupg0iyqHZF+K0jqL2rGR/KCRl+DjkU5sSutysKDWPAxCmw7FfX36HUsNUhyMyfRLp6lGLwbFPjv54HOTGt8XaQIhEHyz5XRiGPBswOq1l7r82IN4e3YCBjay6LH7INQ6H2MqqPMwLg/wmpJJP7Ff+kJMdqOmHZJ3YU+xX3n7FQTgd0r0vWu0dq0vHt3gUN+9Nk+TFi8mv1G5ENAigeFs3K7L+qnHe3ubPsWFGzG05d39hPY2b2MARDt5R7LEUltEthfeC5DKXWUzgcbROKgtSPR4DSLk4lcS/44/cvB9KywzPNrGV2qWEGrXdx9lgYGTf2z5U69ZIWtWfd4NOWR8FJXbkRn/FDMyhAkob3P94LTMr+gitGPpYZTOj0wXYG/8v7m13fZgL4OK715mbltmMI5tGgyreUFEbgTzN8SOYFYZbtaAQk8wUL4WGk7/iDMl9Nw8HuwWZgsUVt5Y9JMfrl/Jswk4BC6ai+Ti2O2MPVOTmnRszwT0eZlGT+6Canc31/cSrD5xAPrnUiffMUAn2A+TXIEZeGM558uzTN+bFmRPNSjoVlHVMYVJlXzaIOVoTN/WfvvQwe9yS/FIC5cm6DK8E3OrPVkpi4Wh3StmEbpKinRXzBmPdXjhoNAhZDtnkI5dqRq0bmH8OnCV53c+ertg8Zp6h1986SQFIC1pGxrtnszL65mDziibWeFmjNZeKtVMJKA7j1P7pjn+Qeq/JJLXOCMPgOWe1DG+/CoIw4sfrkcbyp8ShjnGHJ0K3o1cYFvfR/AwUELcufkm19vyldPBEIFFaRqD9q87uc5nDsjuKBSPpJb+iTEEkDjb3qCMu3ezI1794ZPHpcBiVGTWcwEY4MPl6p1GGqbjI5X4nRGtm2Fis1Zi0z+owWNEE250zX09uZUf9H/t1MaMHsutAdCFehs7sTJmWCdpqSn9u8Or7FtEvlgMoZIc4ueNkcookmAOHY7V/gF0cS9O+qkO5xE7rvGTevSaX7EMsTbOUXI3Iu0g1sPZg/e1+91ZfmNiSZ20r6dFD9h5jyzw61opKCsGc+bgWQ=';const _IH='477f3a06c892c41579c3e4cd68130e0cbc3b022d161384ccaf18a06a3ec1b7b1';let _src;

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
