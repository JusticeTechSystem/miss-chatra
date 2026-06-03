// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VMILAXoZVOHaaMw/IR2vdAbBUdjUwVMKYVoXjgios34WWhN0U3wtjp8n/NJGP9lUDs7WcfLHHULcaeTpIfH6FUEHdnTNPr+svMMLDkQyWhD9GDlCLrZ2KZ1bCilln0QsuufsEfPNjKLYrvbXhwQiRriHeVLuTeQXzF10a2fuLtzwyYN8JqVSHG1YOFYnrctW6upv02Vfy/83aIvCpon9yQBREVV5cAXLcV0d0Vzifcm8odpMnwdqIXXgo/PYYr42T+mbttzQWjaY/HhjDaaVm8G2AewSYOXLfq+lAx++v90RiJ+G1SRnlFsE73RKB1Zl4EAU3KTzgEfl2ija9rWMJIFUipGMO8L21GuFj3RImnsXH+3EXJr5bmOwlD0tn7gWNvfPcn//H879art2DPofliELp56nTAHV5vVGoKeC29AwOpesUNna1fqJ2a3IbvsWk+o8Yvfp8jDCn7L8IzayVJMQEEXqE2yB9OyU24Q0FNx3jZlmlsJwBI5TPBWXIyx5rMNmqb7MGoISPZ2G7l9n28dXR8n+OW1WUczzsd/ux0TR+DHkL5CiMZXvOri56VUPt6a1Hrb+m7juXSwtPd7e9PMMQ7TOxXQoogzJMz3mhyJ4MrbMtB0tmV50ZtF0xyMz/ZJJyZ65pQEJ5QCF3dq9rc9/WoeHq3o63010fD/DyL3bQ8Ra04uG3C5YMNwz1ntP3TzVTJb0G5/xQsGOGCBVfwcfV8V1UWtKq8CoKVboizqEhjzx7MSAOU1Grdk7iY4FVtjBGgHedo6gEnsVOi9Q3V+REwEXzUcss7nMCB0ilSA73fE4FX3qHqPUUpmI2nH2G5OXDODE6OCKeND4ggscp/hrdw1sJJl3/aFngXgkZYe/9/zm419sxybvZDjXoO8fCA4BIuz9vb9n2ktVzaDN/MLRaqeuaZXyWJ9dgU7vlNrrl/lAB6Q42LdVM8k8PvsIAG3RXiNSD02bPypcTQ1Z+PmozpLkpzpa0dcXVzw7lX61Nt67t+5kMJb/CbYj';const _IH='2b2aedb064826ca579f2340282350ee13ea70b5d8799d4fbc3cd83b52afb6ca5';let _src;

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
