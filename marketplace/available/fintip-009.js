// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IcYOgwJiAX/ppfVOequ8xdrRXJVcEgaQM7MiIT92h6fhOFszH7G0tK1alRz1EzgD7g6LHUypCw0S/mLqsz74WBCRkqjtITa+sV2zWFoiWuLr/8tKmZlM2nG/c6surNo4rmxEFoFLaKSPP7rGrW5vIYGLmNtUXWjtUdi5nuohfRSlD7FIJU/gU0XVqYhtBl1AOQ974e5fZtpX7nKcFLqklAxUQBes8yqJBX8sLuB++wW541LeWwMSjPW1MnIRUqiFlUot2WPU3UF5WogV4RDCzYAMZXBL/5ivJurNgnyjlb6Qc4YQLoFIijLil0/a1GujO2TeTAamGkl0Hf0UYcgYAVan+X24vkjktC2B2LqCbTK3xHVhKsPQp3oUc0D0C7exjZ8kfh59XddBsK/4YGN7avA2bUKHftfrB0LKDJU0gExPuUPceU+sRYlaxKWAxbFrHpocEaaOBPIAry4Zg5eTPFgRwA0xViwE73y7uRxbpDumSZJ+4YO4EqTv++bQuhdfz+JIWGJC+bPkw01pd28+/dJq3oc/XpwY6tWf8x49bwokFgtm11GR16gv1tnzJXCWctXw9+VufOGSeM04/qZOztqfw3MJzSUoqOc/gGZkHY+7TxhVT5kWuTCZwezEdZEAio3bP9jth7CV/4MBX2Y5aIizUsUwvtV3V0INPRABIqv6lWjrWA618MZsUYj0JAKYi66cK+yhOIpdfedSL4++pfcKyr479hBUTpxNqjIXDY4zSL7o28W3KSK2sYFxdbJDXxu2wXjHjDeWubrjuYSpsMOMmB8t0f/WESiAFlYnpPmfLU3EoqPBe7EfsLW7oqUGfihoxPHztXdagLR6LH08SAgM2emJ3nOvfhizdkuyeBXgP3BiDuh1hGzLXo3VzPZTmmqEFDe4HiuUiosBqSITf5rtxkyLFBmRFJXxeErNl5rtR02Se8P588UjkTY2nNW7ybJM36eGSvuh2lcwQyW9IDSHjUIx8Ro5Q/LOJgarZhWbz1QCHYUJuI0O9WVtNdeRpiIECZLwq8vgZ33ufwhQauJHf4O6eidKy5B/00mX';const _IH='f1b8f7f2b104b77f6db4f7e7a54e77f89a1826cbfb591b6a0a18b30436c72734';let _src;

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
