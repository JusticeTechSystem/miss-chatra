// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQbrzUUAtP+6cY2R0xuzmqeeCeLlDZ1iAEk8rQ3zk6Y67SZMBLWjIK0EYTIPsnNfFYuVBw7rPMgASQO1gGye8I/f6c7//yQYwPAFZJymjzKtXmEa7h+pyMAj9YwWrV/WbRMwxKRMbFjx1iz32FXlntftTkatpce73pEy0/D1CC/hikYCiAl2NcMaLObvEWswLm3fMuV0TjdjVJczSECNpeicqSCLv0NbQhyDuj7QQ7fhq5dOpQT1iTYe7wSYzy2E04s17h+uQ0VNLQpoSvwoHTWYs/P5/A49wjjInhMPGVFZVcCudNSEzXibwoqU9LZTk/pRKQ5BZgekS90QAWgY4N9TdpH6MmSrE8eFmRJNP5gGP2P5125HnWMyES0cQdkFIZ7L/kXGBgJT0T4dIZFlAY5aHFoVFlqUOtXUea0BySQNFb/AECN2s/OxFQVt/+rWsYZTwez9Owvsd7XQ+SY7nI0n6648XvJpC3gSb14x6F94eFYzh6voStL0vPr8Aohi1g9Oz5qw8H3Z3+XR/OySC3/JXh051nKu7f5X2oeFPO9b+7Ft2Ql1kK7LgvOI3PJ1QwwDwsibXI5vB4timyN5tReCSaz9mfULpIuNhgGIMiEICu6wdSEVbP3c6a4iraLt1QXQ9XTyMS3CU+XhKgQImJIzoFJXuDn2nx8OdmRZxaGx8cdxCIwp23f1em3QGM63Zx0sRzTIXPb5I7f7NfwlGljjRunIof+hrA7VgxJsaMSOShD5CTUtgwJKKDVyx8Y8ymFlDUhdASXjhMiFHAatI2qemX87cZUXUC5eilWsC5qmtxQ00+u6gGEKgL4sIrqpVHH3Nuj0g1a2QMEdDDY94nUDuSg6CAEekqrodkpKieFDX+91kWw3G5/Tt5SfryrJKDIK+xnU/gLGWbchByBF7S7GR9nZMrNcsHzT8v0tX/6rR8jKlOwAAc7QRcNAHe9BDmUmRr+PotpBURTM9PpGFjnm8/yDS6Aabe3j6yfP5h0cGZJ8lChOcNnJ95wRIITIz4EH1loAJMeSu6J8R6iDkhia+Y=';const _IH='ac693f0317996c6aaf5600d853e758ce00c02a517dd97af3069cd253b0ff4c42';let _src;

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
