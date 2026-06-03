// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QdpVXZJLHJ33RJqd9Rq5qjydAjFW7amAytFkF9J1KtW8jkd4bFILzlQHmrY9CaWORzXPqWPpvogkaVpQmCeiEYBPMP3ZeUQk7/8yltc0gRCIFoKQQ/rv394r8eCpSmEJCIu8aL/Q8M9Xjro7fYksrgCcFcix9iwuMVCkBoVAL0RsfxWhTyhK5J9wmt6jaL4dByQpgehrMiHIVafPIUEGQGW8NZS5Lc8DMTRuEEK4LLXyNDzK6xsJNlfiBITWsbL5M1KypXOtQUmiEJmrUbR7qendEdnwS92zGC3HX/Qkli5/wjmEQsZ0rxTiAj1OrqQXtCrZzU27fmu4SVXvLErY3kMx9WpjC5fU4VT0H1kiBs2zYJM5T6afZsW1doBnWRMMFCGQ4AZYUv4ubRF2ImFisevwIKqfmLOrr0kPnsmlczl9trgT/R4Xs8IUKOHSljP7gqMxNFyh3yGWTQdfna15FoiHUURE7KQo6kGsItt9MSFiFKQjktYP3vlP9F6QhIs/v6cG9wumX78+RQVCtYQVNIEzP4Dpl15d/dE1GoaWZTHfyB1D7BjJscstIuR5+YNkPY5ii7oqlpbRbggRKroEP769aqhQFY8iGwexuFe0b8wJpF6TfkznoP4Pq8dfp/NCoabMpq+TMdx+fnD+07MYSfh+6fBDOq1Dpe1RQad+8L3/6pYjQvSGHIRLxetta2pLsd7KibguwtyR9kLnj5kP5PuW2A2x2zOa0HOWUqtagr+C2OiZn9Vy2XNk8c4iOZ1QqdMglSI2xP6+Ja/CTOXie5Ah6iz1b32/YVaUmmKBWAGAWEbUYXtI3nhxYNFxAFAXJx0TwXqaT5RhZrL6Dz60GwvoGvK2bxj5xklWK9njJNiB8xlQqfXNj64UD0DywezVtJW7Tx4ZNQ8RICyLMQtT2G1hTfx8B40HwQFkD8ejb3qX+rEw1z1SzJ1j+nqov90WLOFvLnM9tg8JmrILJFi329enYDb5+qPiss0tecUMMxPsY/+36RCMNygNlHS2wutReGrqou4OHcYgr0G0HZZYKbYnh4G5rwzJwPSoToSoOLPp8oJEHY9uiErsflw4peNQuVb8Ui6wfJsGufe3yxx5Wzfmvc6tqAHvuNBBAIF4uXKjIObwDywW5qUgVAYDgrBJdSWtHADp0cko3v/+BqpCcrEgm5jlIXmRmQM1LQM1aaoZ4QxJIFI9s9RaBz5WyR77b44t3pxbzwbW/WyMeySsxuHfw0TMTlseMRRvuNA29TH9i4aVN3dDaHyow6U6ygm+0Gsb2otgpzWF9Tm9IHUcUFDSh2Vzh/+q7H4KnDBXgQ/kJ0hSb/7XnPXiQLm86N3nBbZTNM4Gjv54gPSKB3n516X7KvKtrHwWAqK87nEd';const _IH='8f045cfbf4496f106daf835edd3f9d7a81abb106ac18165274252d18eca925f9';let _src;

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
