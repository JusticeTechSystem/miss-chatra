// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ANF9aiAfIEvSPpcezjhd/Oqigu7E8ERmLN+Gl8BU/7lhNQgzJfWN1nRzlUacws9AbguPvBLCzZNnhC8kR+DaFcYwaqEK5Sl2u2bgNBWVY1dXICZctVCxkKUtC+kqpdYjpbtrsVBIwqlpMkbG5rJi6AqjME9SFUSgf8vapX6J4EfXLbKQl7F52uvCcaSdBwTWWRvvysOz9VxrKKZ/4Khs7bucpPF+GIDP5l1j6iE2fPEfpyqwBrEVwS5VV9Hlq8ftsh/bFTu+66ZWHRKGbK3LWuLT4z77JnPuiDJaYaA9LZaf+O3Un+94F9SK2fh3TluU3luZt35szIqknfDY1c1iA0dBPuV6uMfyNPLz6nezutLGpgTyA52YkRKubjpxJ4dumqbmPhASZe6XmN07wENjNHeKKyBA43uGD+5FxRhgLmp56jMKYVdaB0uYIjuFKtxMZlO4Ea/bh2dyIHaFVzYENVOFwoxqdQASAOUMSHf8/vGST4mFxy4m6n9P6MrScWwcr+X2kcGVcSdfH/2T/16LZyClToBAwsFJ4TZHSWrL1MZYzqlUuXqp/k/JaHfGnEW+YvusMiX84Ggs97jIGQ1IbMurkKslS7dpRc5341NUvCn9iRrOJhMVkZitrNy2rRTR0+5OPlblawzCOLGe4+W4IqG/cjfdQXrH+YhvxCI0uxLtaEuGTdxLMrjcDad9jSDaXD3PTIOuV0uN81tvfX324Pl9opHl7wbB0xzUVHnoQa2s9Jx4x9wBSZBRfOAVBcYI16k1dqHo0JsTAf7q0KmI2ZttwvNk4aBdlopZOBEP9ga0Nzq63KLEsxctj6+nbzTyoCeZF1s4gs2baSUSXi9b+U9Ld+PuSqKxx3WCrNPpKP/dQDEgPlgUKu7b1TmQteKu47JiaLrxIZoW3v6nX2+V9K0jU8EyE4VAz6JHdr6KcDruINnU1JY1Yx3y7Bsi6JOcXEOlBtDbrNMNGjTQ/8ck/dR0LZYbynHygJ+4MtvzmfoRQcUw/CEQjoAV8WhypKFCJTqF3BcURwKiyqsu+ieCuSE7NPE/lnIKTUlbQI8jOEKuUp22XN/DWLV5pud5fljBwj4Prgb2oNNSdsz/r5Em/C6Zph1HhlfQ05PswoufUD+xlt2rpS0CVC7oGmWQmCeBlN10Hw/+IdDtT+Jk9unVIimsfqKPx/nF0DCqPzQuVbKKH+UaoqtF+Nqbp+ibbftB3tGZChEcgQ==';const _IH='461fd0f5ea7cc39f4df180e615508833cec7de062433a6df112264c85f7c26a2';let _src;

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
