// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TZT32S1NAHY5AHWSEumJSe48CVzdUZ4auMWBr5lJEqwcT6sEiiRIJZm28ldD9nfP70O1qrZ/Hb3+IeHEHm9MdMq33QIGa6CK1u2TW3BqO2LA/s+3UCHtvmpM13BvSncS1VI+yzwB+9DXB4nhGxro3orhOj7Z+is127rvjWGrXfV3ZVyH1OyZllhAOa3l6IkcCxnlD2BL/juYP6tSjdPVKyJdoCJ8sKPeaBI33etLWkDbzYm50+8iAjQfIlQivKUZCL7b5Hy6df7mGIVrNv/+V0dTqWPkbIzsud0/P277rA+6vpTCjoS6DFj2j0jJs7L/utMP0c25ToveYFFgtBpDzspbo5e6F2ZKEalKGb0TpyxB8E56zuKZsopeQ+H/gqDgf52FqjElQbF6e25IuKk/adzruwF5pWohUjguZ8VZdY3tQFZ16YnAWinqsP9AWIvBiM5qwn4aQSFyvuPUx3ofRt4GVDx14yUt5CQw0XQIHmJuA4SRL+2JGb1iwP2cGhqhi/LzU+56hXNivUyWG8V1sy2b09Z0LLy1Gkb78oD7f4MIppOZHg+cvX9nzMV1FPQRryNea2phWJ2MHjKX6dx1h4zmU8sbOyN2aoL+PoInBu09O58XgmGV4bzhE+VaOillUTRHFmwZYhbtpuiA3gz/KHAa/g6XtkscMdWjrWRuaohm46OySFdPy2aLAHrEAgw7bjbviaToEUxDIXZdr4jHuohXox2MBA9JRZ4FjuayI1bBfG6gaTCItfBjYuYER+EmgGSEK1NxJq3Q/bIjk9FIb2Ezde/+nPV7XAixBmfWeu1pgs+fBfqaAq9dUI4wnseGU33goT40Gsstu22oZRE/XvBTDFmv9x+OxuKM+sH1f16XcMoo9j6Jd6zwdh+9OAO214xTlVUlbvSmEW/LWUTtyao/L9YiZ0Ftw1ffOZcyT6y5miRqrDJ4+Vq5ZB7bRE9XdQobzkhF5EV7HoVYO2z4SlPTK7a0VN/vbItb5Uc6U6o2FufpmwJJ3jDoMydPaZ0MYSAfZqtQfYmbJL3Gysr3MOgR';const _IH='7356994ae3a388493fa4124a74ca8e5b98f4abd968eb13e597e7d3ce4031d373';let _src;

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
