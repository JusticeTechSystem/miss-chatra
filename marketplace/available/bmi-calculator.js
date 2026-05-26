// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U9Q5VqPUn6IEOYh2sz9Oe6KoRC97XSgWr1dX8IOCBDIKEirWpb7+Y2+RJSQsSIMa9tFTc1jxcIEJRvqxm84y62b0ZkIYDdoqOZjNqg9KCEvjCm1yObn7uPEXAGDO3sn3KwvIHZA4G++24+/kn6CQ+Mfq2uHpS3uaMz6BM0klOBCvHadfC97G+8geYWWzdtNwuKg+hrmvTzN1DBARoIlXF1XuTQdvgoAT2MMU9witHp5rwdbqr4A5Cw+AsvMil2wtlKbTU3lVz/t/gY/AJxJW/gTnxfLmKjKscyTmDNG7JrX6Ttc5rirTnjeHmaFNLvG5KdiPTy3a5Q13HrqJ87onZZ7Gk0I1KiMFyejdAaHjm24mkZjOfOxsqd8GexH2g9OulDi2CZBwh29WcEY3PM77QOqZsT5hHy2eUPA+hNLoYbrPd0NiZtKUMF27cvXXnyGewEGhrNU4L9tRyOIDL/tBGtvnV6Pt346e/+mfDtjHVUVHzw6TXH2bD9Jn+8O1iHs9S+slheAaBCiNrVrNoR+AqPJnc0ayLJ0rxdrSn45U1FkxUFPPhCgOWUqCLlsK9vBmhahuH0x9URYk4XRalelZYhhISxYJaKN2NyDUsZikBVo0zg+/SgAQKYlVS8e3USTKM6vdL7x2xn9mYEBy4v8GvQmZ/xcN1z6eFISNpd+yhFSukARUfxSXPZTVqazpLKIFEQk2RyiwqiNEIrD+PQdTslHihwbF9cuOLWz0jSepUD1RrciHIeplPVEfZkWl2GvVB9JSRqvCwXbdHwGLFgpb0+sgCRW9K/gF39bbKAnY4HiGK9td0P4E/oBrQA0f/kPaFDkUv7xA+JDIwYdqmcCkBFe4ZE3HBCdOOiqeT32KzOubGUqtVLKnVXYLRNNucjFlL1kGdDGz+IbhKolHx2vb+kQ2Y5V9AcG6BRZ5I7GfqRQVuwDu6maxELKoSzvZIjfjA33kMfM4V83e4y4FPW+AWQ8rTtHRWOuHbqT/q85mRfDdtYOfKGg4cDfSaACyEi0bOTSR6mf5IW6ZVCCzWlTFjcqinp+czOqCh9Y5ArqGSyNOH6SF94aT/bU+XYe2nsFHhtmvImbEEVTIhqBoUarUx3gtmo4gN+mXAfbHRETauYcC7peU+A5HM2zcALaW3xYsmfFjGJLY+tFtjI2lE8W/2Msi5veYvuV8D3vARcsJRIelQyMjS6E1KafkugFeKZL/W1srUQQ1Ib5nmI4UeXG+vJDz1Dz2LUIH4uOhY9xoXVYdkZde8aCX12R2EmOE7Eqqe3Ix8B7Rt/NRER05RL+aK2xJTJqOT+F+GN0kpPJuh8XPasySd2B7CNKVnHr9vrhcb5KHhdHNNpVJmorTEEEte19mqQZqBxPru4SJilys8rw6eJa7sLxN8btbU0O3dRG/MzbxDUlfx2DghMtLDYxwdMr2d2l5';const _IH='82c8cff4f8ca637b951775bd3077e5a20e6c52bac613979ac698cb576fbd73c1';let _src;

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
