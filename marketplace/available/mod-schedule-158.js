// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hc1UwRFv9LT3+Bs7gxUrSXyQAClWe4lpnd8QZC8lZk0dBeZZCgV6CwJMzIhkWFjh+t+VgLo0Uc5WY2cU9+L58YDtiTmh4lPcvorJLjfsbxjHGczRHCZHjM/kHowR/N/vJK504y7KOE5k2qXXBU5LEb8kc2mrOKVDRi+HVquIOorgrzA9y4XYYcJEUqPcjWztbPuEwbofl4pgKOL2MzEdcM2TYBciBOqeXeY0WPjCnjqqtUhOZNV3vDYBc98Q+G5twzfTfhE9PEnHgwfrHYrRDiRdVG4rTAH7ypNVGp7omh5VxHq2y1/b9IDybKvX0Cp/v5LJMwMBqOLemtrMmwjAMzCtrMOxhnIofjvooxQsVMJHjukL0tKt1UzwawZdODLTjPafsc/HD1uDF21rrXAUJPsIfZVEWE6GJf9j13y138xR6iQ1UtMyTLyZwCsOfThq/S4gA7X8FC3dbcGCL52KRE1Vg0V2zjGcnD0HkIoLGWTe2b1CuIs8xYdNO3beER1nru0BeuQuJdh3l2uGdPRqe/jqQmTi8xj1nKgJOge+p7do56RWR9RVjxmmrpvpGPQZrwtr7NHBRdCFJ+oSR1+lbdsfC5r7KgjdF9tT7ml+w6okW+ymTCSD+qKGf7SP1E5LBAguV2SbrULxYcygYHuTW62JguXokAXeW8t0lO2d8fuMd+oDeLnvHXGpL1+NpJENqOvqdUyHLCCa8d2KyAfsOcehMrGDM9X3v+LGVNECPHjx4LFOcpORoP5/fC6/IVsP/1A0aIyAGL7Uh9VpXt5orfDDc5dVFhJ0j11CG23hEQPnL+ucuwchwqSV+kTuQE+zSJKRboXs0Id6msQKsnZRHUzuZgT51kifi3VJAYWbfWP5UQYolPWWoRTidtAx5p9XB72QzGUxtrVW+68oVONUj89CcO2Yejt7E6zj/C1WlkrhOXA+M+MhpzV+irI3rtqyPL8TtTyhvSQV9XWYuZc522iZR9U/unC66IWA+6w8wX6lMNe1BrMhGJf6EHXdsVeBJFhQ9DoMEFlg6fLck1McC9iKK+BW1g/k56gfPIngMnLVC2aWCcFMdvXq8SnG3f7obVyKbJnx6YXmLWJZLVUHcCDyeZwxw12i3PJRCJeQGcFz7JjXc+IiXZgjgt/vFiEY8E75QEWBP2G5C1+qyc5ffRH2azOU0ci53EewsuLF1OahNe18w0N59YrzfSSHTirLXB9UT+jTeiW1fe54gpyzdBlkefiqCoP5eUQUctJqKGZNbsNHU4t8AdwB7CEOldiCPKk5xntwEp3k08p47PbaKkjq187b7OKd65If6Xp3gjJ1EA3uP+aEPC/0vDCwb1j975DgtfvbFudkKi2VLncBV1Ax1/4j6ZnneV/axijuQduLXP8MHQx1GcAvxSn51T7damwELTwVrOrkd+HO';const _IH='c739329eee04c0a45eeb16a4b462a0f4a7b7657c01a28ba81f164280ed20c5be';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
