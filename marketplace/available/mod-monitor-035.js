// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2PJZOXuLU6UJc+QF08UFd8qIxbZfbLuHj1X2G92y5pZhGQEmEZsocP6IPDnQuGA1s4725nlMR1cQMuMdin4691HRYanHMHuHiDI8m6q4LgNS0WDvun73Nx+wfxgY9JGtqq3kn/jNK8QO1+XjYB8YaewQWqe7p6fbVrDre1nvU5Xhz/T2plwj6KP5XcgRux39r6dYked187xgZiBeQAZVFegyAigOIDArhi76TOyVfMWuK116iEwe/9y1DSmKaY3I+es3bvHxfQtHLQ62mVgeNIvrA7n8YeUG7GI5ojnCOBX/+YgeuE3iuVbRlLgiSmNcG06ZPa2zgFLF2t5sgQXX72gDIrqS04pAeeZoSfM5V1Ik+Fn7XDGo6mA3BN0dkt3Zf7dUphgmDiZzrWiXtsLWYHERJW6pywIGDkuRRce9b0+RHXhIpeYoaNiGlctRz16K740H1SrKiASQkfGRcyiQVI7Ma+1kjUxc+1sY8PI2P5SfDf78Auo9y38P/HjF9yOnVc4lc4wHO3KWZcZ1W5BWey5QZF5EwePZJx6i7wwyShpRrUnhuVNsVj2mXdYV6ofRv3rHwnbPgsQF1N3WeXv3iGBj/I29XkNe6dQL0bOs9B+UQFQ0DcqRYvCnrL9Dz2puvCYzQjPxWCPQBeBxewOvfO7802W4B6oU8viRdNJTRVDXIuF/WoROyEDFHZ122Sy3GplHsPs3nRSH1fRqYyv3lJ23OatXfaOkbdP3O2sDhd+Vi4f2Vzh+DOqo4wLrHznqXzcfBr2crq6Zw3z8y2EPYL/ipcaXpCL6xLxOmP8pxmPMDgc3tvWV7/gPt5YRRMNZndUBHYi62e3hkMeZT8KCLzf8YCOOyo7SM6CI0JC/fKY6Q1Q9U3X34lLPoHt76iysbjf6l35rBK4Bex9asG+1z4hdxBMEWWGx+o9xgINIFx3INgNy35ATTJ3u8TSYf/9pFfbo8x7gxs8NKn4FVJWVA7luKUXjvkBXPMAmWu2itTpsm5MfY9XbklIRETAMIwQS5X656NcLg2F478w7lHonphwTYn0hG19J9fwbDTJsEN6UXV+Fep/w/aydAZpHherMyGrpoAaENtw54OXarwNyduoFlNCSspp5G1Zk8vFW9qwDfeQTXzB4NNJ/6cwQ4u3+mDpJasPDPqT0iX7+9v60rTe8oJeru18c0CuyDwW4nuMBVCeG0ee9XGnZpgb/hsxAuYPtOQ2tmP42Tp3lQr5/TaECgexQ/SX72CJpTjx+QaCHN9SDCqWcVTq7fynWQPaghykR63ITBjttaMJFezqFKGBMs1droSN2MO8Jy6sHKtmOdzuEDlM+9Oatz5i3l8HRsVckk1vrm7o9pYUTstuVfVgkIJIE3DYa1M8Ko1QL14h29VayFvDMMH0dmhHx';const _IH='248612ce84fc4ebde3eb2625425c27ad052e7516cfd7ceca2ba113280f0866b0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
