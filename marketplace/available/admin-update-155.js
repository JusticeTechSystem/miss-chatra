// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WioMEpxMIxWaYb4FIljzUwu0vKhWDlgwbF/m+oON6e9gg/DXakRAiuzvDIbUp+MEkFffNOQkoBsFlTcKk+X/yNXGMMGsUxUjgcsA3iSKYJvIILJh3ApJK0pGz0UmyVgplMk7WDzJOkppYp47H1FnZRFV8TygNR1AUzwNffjuUiwAfPFTxrlPFNaMKY5C2xWUwfoC475FdjG7mmbVGLLT76k+SfiXMdizDYTPsX9+C6op7ZIVLa2MgD1+hRfZFjA3oUYbN5obWw5dcNyeB4rc2GzJ+LnzacasOOmZHVb0Lu1XjPl1mn/xHLNEQiE+tYwQYd9fPfGRoyZkoIm4myZ82USpu4eTDLcXsdDNgmefFSjcoZDylO84sOSkNC93Z3KaZPUHvHTa56lHsA/Cpo3aulTu907vdaPysEeuJDh6zTuTVpBWriCQAT15c50/JJ1eacu2mM9UrO2ZP5fRb0WuWvRYOXCwGerR8rddQWj9LMiRf9waN1DsBeykKnxAvtRWh3PKwTAZuxlE4BCCnbPHW7ztJCLwvJGDZum0rw64EjagBdUPhlUpWS0JPVQxFYDNq6X2uOaMJHicAnFQpR+RAZcPGnHRPYEjb0didn9r/jdqH6EmYsY36lgQQ9vfhv4wlRXXYyDtDB1Ah6X3b/Qqck42DMAfWEeVZqgb33OIJZtvczDPYYFEpU5jKHa1gp8k8NlhXtzTxo1HczwzLMaGx0Cy8tXYEJ0xI1nk3TsmkcxBluUJL/o+q8wYozWGiDpdnFiBy9oI+hlHpQeLCW0GYUWz0nWU2VEC2j6x2LTxYVFfHNimoQfQrC/4AScRh5MaYZ4KZ0R8SdYBwjyt2/87/GIgdlgl4krlhsDZ6E/mWvCyWF17IyJqOhRDVD65MHdabRB/71LTrTaNHcoIHfAHXHm5VFfka0ji4wwQ/g9V2aIpzMQpzonXksggAyf/P/NN7sQXl9jpDXZ+frtGy4xQhYgi0KH/RnGj+5YPSWZKkE4YJP86P+6q1mhFY7GwNRv91w==';const _IH='d00b8cba093f8d5d1c16f6d671b39a892b4adc57075ed65313d99e9e60355937';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
