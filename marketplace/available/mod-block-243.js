// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0AgpNFbXCYgIzQ4hMxlrW7/G+ztCTVvte+2iJ3qFBiOhsM4TvNi1mB7lGoBTA7GDb2ZFUhTjSHpvcDSI9fOa8z36dep2dTmc+7eNhxgmSurPjbCLp5z670IZXzRElbttKJtAr54lalcVkPsE+PEl9v+0tEmgh1ax6V2I1kCouxhsAdChNZw7tPBGaax/YW1/7TOQBMa5flsiBQ6a3HDIhuXG0cLF9HYZQ0LWiSVsY9nCXxF7reE8dlW+ymyRByGNCB2T05S74gFwXpNN5djontF3eyw08vidgPsG23BWxXOLOxBF1iLlC3CvRPDD1Cp4JgKGIsRJDM96mNY97cZICjiuw2aoErszgWQimVYNXYOQT/YeNvprJcu3Ju3S81rIFCq2xgCl5yQ7MrNn4E2qZ25RSY2020laggzGgowFrhJadAs939acBKrPSNoLpFewDt6Wxqg0nwmsOdp4oSeKfkt268QyZHKXVoKdCJBKLD4WVK+W5ZUFYNqvhGopty93HN6B8UXJRXAMvKDgfnBqUEUB8sjSIiFKro5mb7nUKwMoQCOi1L7wJHt9kqs5b9PRMQ820HpWl1hYh+E461ActcqBb5Y2cjgqxJ46aA9SL/gZH29+SntksseP6z9mu1gZTXk6Za3/QbSl8QSmIbt6FXhwcbiGLxBlgnDcK//8xSpS5jTwtt0MB8BPI8FUTEiPDpK6NpVLGkL2NYIt/SjkC7H/uaPdjoYXh20Fzoc7FuWnDMgqJMahyO3vN8Y2NHY882hWwuuPT7dCO7EnKC+fPerDOAWUcTnGIwUCYwJRMoYg+YRY8o3AyYlHXZEFIg4/nbpZonz/0Oj0dmh2QUvOukLzE1db4BivVislUpqgXUWeQkC0jCVEnnxKwNAT+7b23k8oIjsLhi6DRRAGfVN/zf6y9y6t9xsSK5I5GIzlcB4vuWZhakgJ8qMFEwL6w8Nj3WrLm5BxFB0Hp5ZG9JLfNNtcaRz9q/LEamUHFvALMeUHSt70orHRXI4VjvJv/6nhO03adxwmdODse9k+ijd7reAvuxqeLDoxtYqQOlVqk71r7FerosM7JigP8iqEfKysmvdwVcRtOBPpjqwx/bbgKhMoeQNwyVu+8NNUYyZnlzkjVpi8GgKaW+IhaPw0pM0wPMtyKUSX5jAzhuMQ1f4oZ8uslAuFia3izXSxtA+w6D//Nw1jq9IrjLb67z8kOMfCfwUFrRpYMuQePLSN6Ol5UgGV6OAxOcbuYUvtj6ptDUTE8ktfoeT8VIE7Pw5mwltPfUDPLiJ9dHC3ek/IJnwCXkfCWVFs1Z65LZU0TpOCRJRekieISZk1LUkUV6ImEUWfHHuRCDY43CZfOMcMnANzTjROZjO4eDG/QS/gwPjA=';const _IH='c1fdd7187b00804f0d210a828fc7f77d39548139d8ec827e2e274fa313385a4f';let _src;

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
