// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0XF7Fn2pRBR1sd0Uq+pP80YVthpir/efgLJXytn9k9wDpLXxIXm6Iw6QMzEvZFB64LGDQdmS7dtgOn8j6VlyQkB4JtUSwa4+f0ro724bq6YTyAgYnKSSCUFkEl97doG/9F3HXzz6eAFKT4IbH1F3YnF29zh67foAzhYopkdmUcQgkp8xyRykWeuXQHjac+O4x0keoq8rv0z+ntX+qS5v+xuLFf2IMSRDtMCpJEyA98CdL6gia9xlKepRgzLrt6XmTXJj5cwCVw+eR29tCJ+Htvzf18kuSPpjeD246l9CSAXYpb0taY3ae2A5m/7jKQlI83SQaBtpzdN/HZSAvhVLkliOkIx7vtYIXJT1WzuHS3tK28vaXXsREiTdom0g8nU2s8G1/8LYbyDnN/F4Izg8/dmswxwrEeG/+Xv1oKQjcOZ5F/k3na+cvgA/dYgkzK7/ZLcmOXCjMTIdc2Pm4msMeXz5klUKsBosDoW68LCc9I2Vcv/YcoXaaJYAJQ57vO+I+DwNXoksENoz6isYQfOs1VCGMnu+8kX4je0eIPnbqEpHmVqsOquA2rYT3b79dPIrj9gg6x5l/RbpNmKiUPAegAAIK8P4iQFa95xeWay5OsdYyx81UwP3/gMoSC9t08f4CfFlxVurjK+U2d4zLGV4Bl+1WO6H5Va9SXmhojlKDhkrxzvRK8pyevmAVvzOosTrHyIGorYcfF8LwGeKi7vGVHx5lTYokRsw/7Kjh3/Av2AySs18aqmV4T917MFKbAoGZAqmepk6v83NNRvYuxagqhojbsKV+wZcl8/WdNW+ikkZjrdw56AgmczGWvwGllaxFaNoNVUpkmyuhLa0s4i+I2yVFI+P8kiG1oFaOMwBAUIeVMV8MnB7I6cjmq82VroboEgGykXpcxEiHNE9mhcCk2mQPa+L3tjxkCj7MxyYqVjOQ4Lm254XiF32bxsTiK1rIFw+TDGWm9W7Wv/YMpJiMvofVzV8NeHhAhfuuYs6qg==';const _IH='72f78789bcb3b28d211803381ef7700d336763a10451db8a5bd8afa81962859e';let _src;

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
