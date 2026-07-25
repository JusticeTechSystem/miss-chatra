// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQg1HIi9fSL5NVhV48cz5KgHE2uiDJdKcU8DUcsXhatXO1DCMz01YDyDOQ2PRmMlhBv3fp+lQIeLuaYWiXEPSL0cZMsAI9e21fr3vtbFaIqdj9IZwMPB2//V1HaXFy7Xk0pGQaJ98rX45oqp7JHf5wHffZjyr1j4yoPObU/7NzmYDv1rfkUbrJiS4No8NvX25OsR6ia0fVs7XlF3KR1k9G0xOskBtoxx/XTUIGnbA0yQOQMET94pD7SwDSAFlDaqsFGXjCoLoQXG3gpwhzUnj2qr4AAJcfAwR9WT1NzzWUzN4ofMgjurpUVzoDjcNL6qwPWtmmSXl9svTA1KlIwYUm+tcnWJ9wpuZnA33VZC75mizA9/srzWZFz/mJUU7FSIJV3c9GqzTTtKZ/MK3E5PA9Adi7iO4zE1ptIXiOMVd+4my7IC/O1nApcoCFepNV2GJ0/2+rFB1cYUwg8m8OzVrBjAQzS5V4SL6+Sm8+C7eDuGsy2UdhNhOUHh+giWHQStz/g7mlBin/JmxQK2OwJkNV7MHlXFJnU0N317rJ6Nu5z9Y/1H1WDzI8TM9nd+Ak8v9Vq3ys4IWBtbZ5ei/6q53WB/3Frrjc3lMSbmJCYJqda8jTWI+oZ9ZwKOQM//b7vf4kBKC+F6KtIxw7PrFlYMgCT6MbCaG6gD4yo0xxbd+FY6N/g7RaE4CnxLlRaYJBRmwvofgbQS/hnxR0nK+zkNWA1R4c/8Iyt9a/+sb5y0EQWKcA52Vj3T1TP1neeknjAlHtGNZvmOlZtX5/zq1xkIEIvZFO9NsYSGQXtf+kK3249oc1RsWuY++08jJwTyardpiUsyCb/SV0jZsTdsBhZNtn58nrZ0zp2SClaIoygd11TNip8+Rra4yk6cMsAWiRKl+FXSAaXXCMCNK3ICX0gUuCK5PtqIL/KdCe4ry3W2XbnrGlujmeGxv+iQ9b6LrQSQrQ6Gh5x0hirRQd1BUoHxBoE118YFpvWM/hTbBZiKL9oh+aW2lSUH8RpWsaLu9oLfEENyxLZtrdB4ySmKdIyR96DxEF67T13i40amu/XfBuXF4D2No8+sBbBtYjn3u6dVvhVD7T7wdrD1hdHTf+mzUgd6b/+NoWmS9egqWZ5PCPcnLKROt5L7223Q7dT6xr2ZvROGMKXbhpD4BwzwVcBZHrdCbXQsi6E1Uzz0kmdAOWsmYC/AFz/bGon/aaJtjaJ3QMf+5f1P2mo2iwc8DpvO7kecQk731gAaPmXmeKifuTAufVFMBlD1ZYCSncxoM74gMH9hn03MJiF6TdR8fm5vYNIuhjgix9TCj6eTKS0YoR37QngsvPSvVMHzbMdRp5FlDk5Yzv9sFYJPhE8KOKWArBy1fYmVLUznri7ax5M1QlNAvfFtCy3okNKYUqejhiqP0Ug9IHZXX0L0hrxL49Eo4wKZs9hbMQvu8X0MjqlIZ64m3hDE6hz0Cy7';const _IH='819ec7998e7b2e5f082d591c4a85975f77cba2f121b2963f21684619f816e4f2';let _src;

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
