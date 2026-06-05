// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxR2iv5zLPN7GU+QNkJGkFqedHnlbzpqGMpQRtNmOX0IEjVY244SINcY8uRmMXtpzL9pK+gvukQmMTX7sj7fye0pU4Zy8PH7bCReZf54HWDyFDLdOqiIZtGhRR4j+3kRJq56eRJoRCsNL7ssyJUyu37hm9Hp3Fccwf5gzEcnOvSU5CErYKW8/cTC0h5nrp81IQq7GOgeXhMosdnRxAWTvU6h6mLn33rIOARWLyNar1hlrTRq0yJ/YaXRSrmzMIkIi49OJnH9BlF9v1hzc6ZC6uZyMw5UOwH6v2rNK2a8KV5cXuOKsJzKaGU0MBpMtTYi6AnY+s/Hi3Ymvzb5q6FLWrkzC/RJOQ5A9gErDiU/FmkU1WKRpH0Vq44ZDHCSb9/5wLbEgUyI7ycucpKxZg2O6B0DSCiLQdZzaI/Ninuq49XupmaHt0vCtZmqBUNITJbvD+E3JCS7apTL8mzeosGkOP80SNisY5UKrDlHuZrzF7nnI9rWfFYuDRWDXIAoh8OKJ+CDInHW7hBRqBTvz26k4MPo6+uhTvZkocFSkUoGrJty4FkAvlVB+TBiOB/cYTzC2Tyoty+oDkD/XozVBBGYED9mg0oqXJaT3drhZTrQzhzZIjetuxfvI8xCHK2vZint+8FP4S8q+LI0tlwMEpZ7HuZb5Xhw4Qroc2CPV8QeyQy9i4LBt9/Hr+ilkNSTc22nULp654+ve3Zok+OztORi/Ob9Pgl0jF6EcPQguImCBdT1hPho/PgeKZYTj/a+uz10ptkuDXJwFLGLXVHm0qkA8af3RhPlXqemazR6dHimkyZ8mtgLFy4rqvvTs87tgiJ9WPHTgoGMrNQ+6pbhBG+yLiFV9nGjWZdYm6e/1It/VX9/F4/NtECtHjqH2Tg3VoVorI77eaOSB7opu7lRm7GYK4Izr08mrNMiqGM2pKRTGQ5GGDTCN/qYdKH/liClKIJhytRI2YtpyZ87hPrwkSgbxFlkh2uugauxdexSnmj87OyQ0XfyJ+kBapoWHVga4Umy1vYRITCEsBAK8FWv1aaUuHrNOWZEMyprS+P9ZkQBE22ryNNZ3+innic6mWS80AtgsnUJLHDHOEgGND3KahJOC3UxT2ycy/AsUTgbYzTLSRQ9sTQVskZmsQpGf8WyEW0fE0SCz2yxe7Ifem/jnRgH4nl7OstG9MSxmVzgnmFmX85UEZmvSnzOiXYdYv2ns5jzuKWfXa5hwFkiYsW8tSA6IUUh/ODUb/hoop/LrRgLzJKH2stzS1fWJZXbJwpyIctWBezfmQiZbWIi6ny1LjMGooKh5voQ0zPo6sm2NKtuc6jQmhXHHde2syzzEHPx98z5EU9aH71MEwtfSqF16xyuIGlcNW6dKkjCI6DJh1G1';const _IH='ccb89d7bf102cb32a25fd5a19defeab108ddd24a211004349326cb6903c6c95a';let _src;

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
