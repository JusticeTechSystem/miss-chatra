// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS9A0pBTVqLioU21jx9IpzThcisr7tmqnAP2+EEeE+cGPb2jBabgdBIRqBmzRFaM9W5yN6mT2/FSm8fq0Od5W4zK7GqLRgfahGBX6fnMAi+HP/5wr85cHMBE3uZjbuHP2FOPvsekfuIgrRYJFKsxkuhAj2v7L7A1uIZzkckAjCZgI9ifQEcup0IPdf/nsbtGFOeLdHvahiICfyHwL1BtF5tAisQeSsOaD/8Q16AhofivsdijqMUFNsw1Cca4uY2lEGZICLvZJJ4SvPcNJboswNZZ1itJKdBnUHsOKCMLCY8fb3dg6PW+09T31Dy77Mjl7X+LglVUPCJ739oW0kUTsfkQ6h87Sg91FWRVHf+tP0iL0CzIE7scqD++76wMnhjeAh8vaNetqGnuVCnminWihxM9jBT9dDyrb5M270iiivZuJ18HONc/RFOfcBZ8ZaQEbN/bfOxq8AWdMGahv2Rv5GpkAa6fE96LuY8yE4S7ayk+AljrKBiBFouiFXYRX9JDrr5ESMrk5DDm4F0fPTB6hc979rrDOZ2QJyf31c4xeBvFpvl2Xdv2jKC5EjAa/QujSEorFsYPNVv1ffHH5Tis5jBfpLllyunkSoKpdiweU8jDwfPS28Os2occ55bSOq04fAVWRRYQVCMaORXd/cbUcYdkOpij+rwM2Zn/p/zi4UcLq/VoFcGgN6POy4ZI0KZcQ3A48ua+E5jNvyGYmBds7vywd6vseewEgK2ud6FAAc3WxsPzPQLnT76LyHRpZ8Hl/LdXrVWE80/v3nH8M0VfeZgw4TIWd/rsskqQYn+Kqai0De98vjLMPyg0Sj3ppveCjYc8u9rBV2gC27zco1PyNXmmwR0BWQfd+eSPhtM+NTXfx2tWkGZ7s4OKiVMwntutpwGAMIeE/eyh5kpjjBnPEKp6NF9RUF9mGgW/GVhEQUknO4kkzIeafWUyhqeAxxVwrSw3xEdRSDVTo9z/955xFdSxX+2prLXmr3oqEfY3zWmm+6rveHE9tzKITjNHiNTS0Qn0Mi3p7uEyofkczZsjlEpeIIZ+JLnUVVfAtx1q5ggegaopQm7tJC8lzB20UKCywcyjjAzv8/rw9CDttPxtu5ziU8UefbgMZsEiEEtkowE2dcMmlkMKMar8xIQyUnpMfSTfuBuDkg4jo64eHMLpI9jK3Wvnoc+x3DqVKFonq1DWvDIgz+DcuZPhw==';const _IH='23cd46485db43ac3600739df907ce96035ad4b4642146f8ba37c321da686fc93';let _src;

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
