// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mTd0gypyVVgnSvaDxwmurW22JWTb9g4ax4X5xPUayzVrG415jMMg0oOCJB4sa7w+j4TF3feJ4AOcX3gWVzKX62gm51Xa5D0ud8QFWDmRbIBZLJLyr62TMO3n6O6UzwIbZFhpfDG+e1tR5bbJXJbGd7f4IZOfkCjc1IbyqRS58fyrTkQm3wMAmCA9KOvzeuVsysk2sQXzht9c8V5vRUt4NU8xgKMuvuyR2vVMOSgJ1TyP6x2bnhwoWr7609bkT4PWs/q37Y/z4OdUVwAciBMxyPqQ4cXClIInFfUzd7vqIafsAf4qL3BkyoSeipcUoOhIFtp3c7+Jp/fR2+J4ItbiH+qv9JGxcNTxUB8aiTIOEiEN9ji2GfzxKXbkslKW99PfNjVK+P7+t/nRy3PLvaVMd6NoYEQ7w21E6ZtMOJ8SBolw4EMBu7SvtsEvMl8KYsdQ+QMzjTco49nEXtG28PxHd0E0sp+jdyNC2qe+aL+YawCVGEKN+LoIdEEzptPOgkzbHek3954u+lBT6t6q6kqooHKStUeM9yiRQFY6mSM4qFrGGUbcYgVkxcXBV4kSfpQdJvwm8yeDqEzsa0Ks5YiKbu9ewofEzpg9UfZqjaAuEIgN+O6dECF6ZM/74kvrPEaUg2VeuIo2Ai37eKCIxMzetyb0jyiep3W0ZEkQ9XDDcOXQRqlyPe3FXxeXW776GmZifrsDO4Fuiiwt0RVLI5ZPGaJd6huYmtAln74Sf5Dc5sXi4vrfeTcHRIiSGDAekBtb/wY2ecl8FOIc8N/4v5sjvHlghz/FGgDYs46gZp0ZIAVIWULj6uZF+uzlq5Uj7FdIzih/09wQJvJsW5Ry34vtwIGWAETMqsqOKfK5M5mCLm+GCe9q7t+K8QFp642wxhU4cIdK3nHj+yODyWh2LGF/hSiR+Q4pZ7daAEQSqotfi4LgUX2yErO56v2JrfvoGtc+awkSsDKr+ItZ0x3G6QUUcgW775QEYym38Cgo9XvxTk4b7gzo48iKlYl3xUjcmYbY7bY8DbW525Gt1LUlCKZGNQ/56LCH0sM8B83dpK2YN8OW/2bXi4eEzbId5Nh/MCbpoTs0c/UBoFzOeY+EvllE/9XaTX01nKfkqqWYbWGNG16FWZ1yHY6qHW9dyDbKpYTXuUe+wfUPOSNIq4xo0wu2of/yWr5nqSzGOhjOmTCa3whzPzcqpo61YOsoz0//dMP6y7KN6X83hq8p4rqarJlDNx2F/33ZIiHMzGlq9SR4CLQmy3LVij7sOAbIS3cbXuUnPLlR/cc+BHZ04NB0VGELpVJ3eMGPLRf9QU2/WCt2gaWO3kteInqxme+kpJ3dBMGCmQ4westQ1NIe8Cm2Cu3/NkgHxcOWT0g23g==';const _IH='491d9fe762de80f5a6c2b278b0688829ebd1e01c94bbdc14b37fc77262babfdb';let _src;

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
