// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0TH/+G7UDoNpkyZx18BlnXS8j9P+RUGdUTsoGjQpN7ljZlwvXLUAUakb1piBujPKCu7KceJZnbQ719CLoW3UULUnrnJQd97m2aIHwTWtkH48UACBstvwpXTgaxUbefHt5so2w7GUnPeKKlKcdAWJ3wKVbB8rBQ8oen0P4dm/B98bk49UpsDlnm7jTRU4Dm5onlp67cj8e5/imsXEK8HjzlmI11CkxSlLoqbUz/rGu0p7mQDyKqItw+gajj0n4it47a1NYazsoT80rBnxuLzEQ/0x/+SqcnqWxwUBurnsdIZQshmhJztFI8af/Rb3v3DmSx8mvuvbdv2l1BwiV/pc90K5IZ8R1BBjQRCVBmpijj2GQDg+yEq9MabKrhMhA/jQEe8enKYJxQQguCKEogQ6T37b9tBKRUMbgAWAZmmsGOTqgRdTPmkCRQAqBlrANcJXbxJhif6irEFyEdRYRrXzCfO8uCY6urFwpTwy+enRpIiVZdfN28xE9SjW17ii2WaHh4N68scNV2/26WYwPNrcC4GjHnGkCbmdwiWm2wqjoBQsPysItZkchJjNtdPtlvXBN7kQWyLstlPfHg5hloHkhg291fhpUxzckOljoT4IxcN9MvXjqb3A2lXiN0rXJdyTEkalsv0vZv0rijvTwJpPoSNMWbEwG/qUzeHi7I5ObGFn8wzSB06KuUJQrW7N1fefFamfDvtiArwLtr/kYYDdn0/unl2jQmX/q5KR2LBsNOTfhDHbuQMQezT0Yu3VwjsWGPRsfmPB2PAcFdhg7UucBehdHI0ZwvlYHzxCMlqbCUe7HUN048mBtpQ36hibrOQxb6KWDVsPjQzUzasb7Y9/DVO+pdU9D1dbR3Eh8LJwzhlzs8WY1rawz2SvbPnoe/J3/3A60ibvxqngjTdRqCqQkow2k8YgvuPz3UeuOB3uKzcK66zaQU1OlU/DTnTtMTp+jezlNuPyD7qq4A+l7kk5HU3SQlPBEPg/FTFnV7pvBR1JwaC/YH7lh/oVfUfiOI2wzzBLepzAhZJSQFCKcm5jR21/h7Wo/N+oABK6H/jQgguQ+BAJDRs0tbgMVXJGsROOsYAkUSAm76yYmdDW2AWSKvbu9iDz4j8UPZJKBwtLjRXHgrAUsf+07QNK5diRdTUYHc8Up/Zghi/GoIZTMCnoNPMoBC9Fxi87TxvNnEhkZOtDCHNYcuNyZTYTctw/5TkvaV0J5onRR9E7fOEarf3+GWaQd2DLUtYxGkjW4DmKQ4kcZ1BbT7oO3i5W/WgFUXdtmSgPRSCukdTdjJcW1rSQ5TLgO7kMsKP8vLMJPH2jcW1+4A+EWahmvQuQSwWvs3nRb+VESgKy0nA5R47+bqOfRP8RV+3Aph1q3vbhLOV3jSGkhSH0XWSSGqF/EQ8lVgHXcCnPG4HHytoUUSMlYBb4GOyTRLe1fDp+6EdtQ9UZaDCuQRIFoBHcfpOUBGnIIhtzzR/JsycbbdEIPq4NM/KGtARo/kCm3I+6uijl0OtGj4ZBRv9xZn2mXVZAAYGPRfg/K7BPivt/YBL0WwBJZrEjvjCH0kEBUZvx2+pKmTw6lwYwlnOp7Zs0WaHyoWJ2xOOn9BuVRCtdY+k+7lG5dTZUhrsDxdPudYXIOSCrWaXxQDQLNd/QYtEJcwN4SFnPcWfjRobSzzngI3gcMFtgUiBOn8eWIBPhyb4Q7ySk3lt6wJucBqiIazLrAjPerv+iVAtChvFFsnryfMYfe1bf4mnHR9SMmQjfn6j6CJrBouJMpn7tWxzcHv22P1dG+Po619ijswxLM+MctCeOwknzP4250QMbmlmSGUiw3yxqiEmwtlXnvk6OXHe/tLO/4EPeLGnnLT8uLGjUgHn3AZ0WUSnWLxYPgGPnrRFAC+nQkvRcURsE5C2Pd';const _IH='2c05837c82a3b131ae804cc36857e1328e0fb156dd7585ffc5b229039dec405e';let _src;

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
