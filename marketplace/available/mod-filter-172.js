// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ac/Q977qS4kE+O4SFR+iwFLDf5bdyW3bYW+J0JRRZIQjVUUijjybN2bqXS8D/h73hTWSTMFhFxF1oN3zujtAj3kpYm0lEd3hiBUc7YTllQrSFMKQdw1QqCPpHIBybVkaRD8O3fY29kJx78VTL6iW3u5sDH9UXCr01vFCJocgvLIkC5qwKjaYdu8xFnWRGHuLGBr04PA9gl60wU0YdzkDjdkMXFFZp0wN6GuUOYDsXWJ6CtrHjLLRgUSIYyF005CuW+oH+OTbI3bV8A6be07xlny+dOguuBF0kNMJjYu/aFM3bjAbbhVwMy1uRxR5NEuew3J7h8PQbWEd+ilM57p8n7kZ4cTi3od6PR/6ifHcbg+gZGTtbYv/xzNkZHv8IZGO5H61tyLFCVUL+vvfkC6vCTkbBKpToHcisZN04G3j78tV8P+/aD44H/HROr31eHEbZkEB7sngVyN7Kjz14Qy0lJ554h1qsVn7EzipWwzbbcUW5gWuZO+RG7KDqhythYXeyqznTDdMKDnyO5OSP26QocjRXzuC/FvduijZD2+413f0+c7jaYE8kdHGLPU5kl1s+EzQGcsn5SCxocdrAUoLFTxeON0O8qg8NA/liKMRy24Savm0T2d4zRybnF8WsqpzVCjmspL8xPX9oIzIvkve/lkSieE7HGjj8ug9G5bFHc/XF/uLUOJl7cLsEZqLoH+uFkN3tjmxk/rd+8gJnV8VMoQXw18JJ9qKAtqrIewLcl3P/8DcmcVFmyRKt0jCJslVBoPfTWa9EcK9/Lj878MrYhVebKnVddWcxTy0aPkah6AMBUpwq2t8otXzOoezKZXaAZ2iIRAt12mPDwC2VIRmO2TcWfZikEzvTryWih6t8sgZ+7sJKz3AAoU/6UrzGynK/mJvYVWhBGCajdQxjofIeqR+3ZrY2gcngydAcA4BHzFCA1hHg/WYEsoTfnMf4DQUhdZwGoLivZaEk8AurXCPmujW3YtzFvFJQLxEVzO9NRUZiB5n8UwybbRH2u1oHLYxp2R+2sVe/jRN7fItPSrZYt1N6lAshRKMoI02z+rYQSr+59nW0GGthWDxzNuAtmXI8ElcF3S/c4kT4xenaGQlgwjewNfEZHs00kqObStzQjoUEr5fhLJEPE9KSrcAph2HpZsBdIwWSU8VaSAQhWORN0OKiT4bNrIAHt/CmA6KIIKmMNzUfCoA38MaXDBZLte9sqdB9Tk2Ni7+NqBgJChRJ0p9wCY893iQsK2JzBV8OBWsX8ubBPA0rV8AUYs1sM9XIHMrCy5ikrsHW2W564b36PsgmJNwjZd4HnKPHkIm3/9obdL19sH3oE7xHsUBOo4uSVQsOTOhrHk7dkLNRMbX5L93LaTVf/FzsBVmJpvfw09wn6PPN0ROQ==';const _IH='a173b2a09b45452098c9762d7933a3aa94d9612f2faf26ffd27e5dc27e36495d';let _src;

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
