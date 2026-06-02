// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S9vtAb+JSWP6rOYLKDIF9jaMih1ziA66j5OgmqXs2kPiPBkC3S3ADnq49BqquvSX+BCo6wm8Weru0/SGzjVntDPZAU5Ks8regjZO5zBKzgBQNpOM7EDZb5ggVlL1spaurn9pbJZCM5JzeIi9QmexOGP5sFTfP3qXe5hscdMVsyC80Vq1A5x6w49rEY+nIQrTdy4vwKPYThztcVj762STG+Ko5xszeYE0LsGFdxNdYkDqsiD0sx3ZBQ1CJha4THR/5hClGsDwmihS20k0kYYNTGDsWmwvaVuYutghqB/nt47crAqDOHCJe9s0eFep6OaWq/Nx+w0K/XkWx70j1XtGF3uinYdp51kr6qNcBBlNCOq+/BfnJ9uWIJvOuiq5frkCp8QKBLWXfNA4gJmhIxzUT9i7ixBwq1fROJdOEBXAQ9DdDM7eK7O+eaRfruPzpmgnt0LxdvHqPie9KJw38B4WVa7sBEN3kq1SPdMq8aU3QqvjinM6yjSwfTci92AuHU6ZxE4RCReCtzLzXbatwREFilNQLjgXtAe7k66ZMnexG8GfI4hpw+2kB1mTS059WPvrv1k1PGET2F6O1nkhQ+jSgxexJu9yMVmCDaxRFBt+8/NdmbQrY88oQfVpEWnYtWY1PdP1lXuD9nmQjUE1TXSn5PlZ1Gsq2FfLpx9d+UzWEAFAdnMCoIr7pHIr/xHAP+1lrCIY2xgOXnXU4byPXW+t87vyLd3Vkxrwl+TuoJcm/cEMscYmzjGZyC0Tu6mSxiqVEFt4o9/dTnE0XkeyxmrcngdW+pDnFc5HbTh1WMkV3IIgwnTWsF7nKv8H7JJPRrV+C27usG2T+y8Va/YbC33+6YscDi40n/nsI6t+3iKbDweLvWc7KSfPfXLmdMMjEyaSwhFgr71r9tKiyHkCXXSSwjr6mGMMb0zdVp6bt3ZfLtS4YpG7xXHXKr/VPYU5RYKnN/4b4qgSVb2QZDjDww7vP7EtNPpLIvQRZv3fLDwvBhxS8OiiUfDZ3cE1uHpy6bzDYtfvpeY1xkD/5+rMvPFRRD8Wnx6LPBIKftvEBdOQJm8jk4tnGIVKcFlXxXUgnmzvUwM/bfb6i9ZDlROJmD1wO/qifjD33FK0vWO8FjDUCOF2/xhRIMYbwAoVF3SAX89475i2vdrh9YyGEVKfQxFVSwWVdlcKGhbT9hneXoYzDFWWq4LPLy1Fn+3HP1FfVLkPDHFagFnGwXp5DJok9c4oh0eMG6QOZ3Mj4wgf9pW+bfWQoySb2F8d8vVFPN8xzBI2XYfqX2pvtx1ofGa5d0mevOpE8osOf8UUvhO8S/PZEfhTEuwoT9HrvxyNPJNSQ5q35awNM4XtFR6DqeKPZRdqFNWNhhnYeU9mD1fEmnjo';const _IH='87e19cc56b4ab0107e8b83e7d1ed07045fb4112edb2da8e6561a659e7f568e54';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
