// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTltd88zMkCaXG4ixDK/VhkYDuxYTSddxbOi0Opg94EnTC3DnbvVdMAZ5+TFOAq1DLLvzte1Pzs3ipETklAbK+agB84Wus/MDbZ3eclo/irqp/85qKilSGJVJVHtfno/sumg5HMsn4WjZ9vXrHiQWKiMyPxnKA/57BgP6WI6km0LIrBJxrVkHxpubw1RZ2VQgWmXxdAhtWQoyKGQiAp5JP4q+vxMsij6SZntK6Fv8FNzDUasOMEY2nlfXcI9hV9iCBre33gVNsRYyc72TV2V9hylOnDLCetRHX3VjXuOI5xzdXSrIvGthjetcDbYUto2AwkNJatQToQ0pOPESWgExiZbyR+6oLBtgVooKQXdoeUEf36ryrbYsngOzGe7kjHV4HdbpqlpHGVsrofePcGxQgCio+Oj/cd/9Iffyg/WG4oZhKPHV98FPE5QbadDF10Gnmn2D2TrnPwKZ+wa/nw/fKlRnAs0VVIAL85lb8qWVlh9xgi/Id7PCNOyMgM413Z+EWpAhrZ5OEzS0odbhOJ6IY5nhV0uCD184maD0zIieQ0/5uUQLOgAI+4fGDG9T+gVyeAzCyT1gwrDIw6azZ8qFlGbXxyWfYyZ57nNJM6m7Q2X3W3BM4NI27qo2GC+YWHutHFOGCsJF0ZBvBU5QPnvG6AlUIv4m7NafPfJKfvda2JAFIe6A1J5e4zTExCZNXi2QyTa+mRvY0tHmNsdMS7Uq4BmLWo/CmtPw0xPhhccRgO/M1QdsQYPIxWARLVk22WHzE73t9NxDHI8mGdAMXnuH8eKxrj6hmGUwkrIuuuPL+W1HSyGvZJa9X9B6S6e+9BM5uaCLBybkkZiuDqr6tpX8wEqWsMoTf6qqH4S+Nd/gHMzL40iPBPX9O+770qtDVuxeP3dSpvlMvoUHYakgHulQNxEVCPNt+fFWxBnVGU/KsvJa5RFqsSSeX0bCHqMX0xmEoQRGxcqewVGtpa0yRusHYazEIOk+YNSjVMqYiaaqbREEMq3smbW1+BeOp6p/6jLGqWs3F4iGSaOdSp2BS6n7xkU8XiWjo5x2PU9ut8WPo1NsvBSnjPsO332IGhQB35JjwxE4ntB4VLGjSP4mhDzfCDnEnWEAE4sTu8s1F/dwmuj+33LqUxkYRSKcoWqg4IcLWfhWpNNNBmEokmPTtoBreNp/2FLxX5eHkJs0ehtOvHpDOTIrC7kryvAva+tokDOU7xZ/vgtCpe8c7i2P+NhQSils+H79RnsJiI47EILFPeoUo50oqaou2D+1eXArfADFraLHgPbKACZ7nEG2EQ5Wx5tESLBzjCE1PXznZwtEMOcpRtSna8xzpDjlwRbyKRX1H4Elq7H/XTdkRaxqJGDj4+nSmOgnU7vzHo88ahdOQ=';const _IH='6cab6e1cdfab7600e64f0e2f4776aac94c4dd344c96f2aa229f4186e013f8787';let _src;

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
