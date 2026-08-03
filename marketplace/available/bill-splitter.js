// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgA47OKd6a7RiTSepH/QduoodzEHn8qr6xa9TJU9yn3hOWLgRITwmdLb1U4iXzbH1b/5b2LWJk6Y2Q/IoXhWuVgMapTrJAL+0irrwdldBwNMYe3OTfofQPolK6Z58VLn+uCGKh5VHCindlNJOvj43JyqncfiIzcbZh0ph66Fq/s8z7XITCdCaBYJCctBTq4KZ1e3xlny/AD4OCZYhGBwR5VOOt4Brwy/D7A8bSqc52NWRlTPw1gFKWS/+QLPuUkrMM64seKT8a507hoxZFq5Opf0mqAv36ePJCb1ZpHj3FA2Y1D6XJ92IfYIxR6LKoOCegbd2tO+uum/dBqpmAIoWY1Q8m0cB4xwCZQ61MisKNcCnE5QnQDctSM1IvYeOmyCk8bXOW4ZvewrLVadBaFZoV4s2HMSwfX1BqzRc1ENyzdRy3NgWGvq22hn2cjUOWvOGFV7O4xAv5VBKsAvimUw41hii1LpZonPwNH791EoeIupPbjCeHWaRRmNMnak01k8fLG1fa/3c06+nbCtU44ZbxUUjkQrJErt2yNcu6EukytkYrSwOpCf3x/F7CMPlCNPrHKB7iJeka9aBXHVdE79wBY6qTs7KBPsBMukMcRa3rL/HpKMoEeb8L/c61hoq8ytz6LmNzi3FXDMl14zZY7D2ucA6JsdvfmPH5Jq0swVRKjyQsADhO64AwxYjGGLVRap50hnBDGyC4BMkHf81yGBo1I2UablMjyEitaWdyY8ZJbEqUVo0U8ACAYjCF6hxLZL8mvNFyk1qUIvAevIZuCShBCGTq39ON3JJ7p7MahPM5PiCE4ycTTcbFtw7lUeP75+lpSaQ0tDbnzQEuBpw9g3Tp224pCyKLutwypn9d4YzCtozaz2sU57hpS70kRq85FoykbVfZtrZIrPALaGECjVWP3Z+16BS9hEMbBFEtT/w1NQwj3Mmzf+U5Bhz9isyHcj9wPLw85Eo+1Kfopml7gtEyw8saHpnmbIhssz3+CKv9hFVwJjsCYFcGJueRuArSZ+SznhCewdWebMaVeFJGj9nr7DKMX01iqtgI72GpH6z2eBUA+P+bXdiKL5HzCLMw+1QfGqECZOoG2sXvtt5dlI43YoyELK9iI1e4ihQXVXZwPGGDfQdnMIdVooo1txMq033RMPNzflvyVML3C3qvFZI7FmJZP/NLrYhanQvn1Sx6gxYiIND5S2iMFwqfXx28pX1kiGI2XnbVmZZJO01crKHBa7XY7evlXJBzpBMCnHmIidbxBi0KPVkNTQOqrMLl6Pb8KRUqmCydO1Li6HANH3u4VbaVJk12XqJtDU/P8wLVAtzDCodzgkq+p3saWNURVjO8E0boKQoO1ZdsR5m5eiSiLNYsyqepYeYq3vBeF4IjV51w+yTqNGwKGbRGZ42BmARpkKnOMR91DFcHzedDhOmighyzpK7trSc4/09Tj+QEKW/htPfigxx3vCgINFHM+CyobzCUaZP7jbqw7XfWxi8cMF2I8KqrMMt8z+nys/CyV1lscZo3fNx7MKgdNs2yAFBrkn4jNE025LPupLe8cZiaATnGxKE1DvKjYzQyL1UPDbuBrKvlyAiTuL7gLyTr0ekJKtbr+4//gGwJoZ6Ay6MbKhXpzTBpHLKEs5lCbjnFvG4laQPejgTYyh2wfxlHfgrcjkCjUErsJErrtnoWrp7KdXRAfghRlVVyVVhBO6v8YXzg0fapLckg0GsGo6MpQ3sBOxAL';const _IH='a3c1309ab52d23b446469e0c7d25e4b34dd849a9cd854700abe78c5466668386';let _src;

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
