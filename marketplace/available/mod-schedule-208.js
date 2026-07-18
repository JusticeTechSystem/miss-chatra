// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpLkWw9d2/7Bnbacw0VHWGjiXFClwrm0R0/bnt4tDtbtT01jg7miq5FrhmyPTzUciJS/q5QbplJCZ3oxQCOd1c0kg+p0xUIaQKjD7iot99pZ/rG5gThNvlSmBcb5TF3eSJcWHsiY2ua1ggejbiGGYqkFac8dVVclteVRdOiSMfveoW9KlA8agtR9ltQUx8g8FLhIjxz1vbf0U4zMeN4hrMDXvc6Yo7QpFfHKRww5Zp65+SaSJlokzSBbHEuGsSZv3kaAMTw6aX1XoIGVB3xvPp18gJG10cdmgAvU6t37I/wtfwHTsic0hjOjzv7zHkSi6yahwNeGuBS88+we1+1KjZBGnEa47UzUHUs+CLf/+6jQJjVJQVsRHSExVG/XxaeMdP5GJQx2vSeP2OHAXNPDVNHMyRAXrXHbXej3jDCOXjh6v8CCG8MoQ/+xgLr+Cik8P1R+z8Y0KWRvc4PDPixbZh4osvH+ltNFzdMiyzYHtZJv3Yz2RiPHnKa//7usTyVbzvii8FcICVOrp1UMZSY5ijC4EmId9WclYj3LIfJ7OBg9AsbCylXl4D+/nmXkRHJf/XAdaqgR8niyebZD7FmRD8wSdKWAjUWFSW/hvTlD8y0H4yz7AhjOvy9IfIf7IAn2V2P8abIJgzCkfVSkWj8hmnuSlciycbpPqvVYC/uxe7rwauaqA/Yyl109QC0E0RE5QrbW5W+H0mUhWEG+vk5Hqosk/SN9H4o9m/S3aB+i9xA5pr8zM8mUtmblrxyE9H6aiYQVptFJVDAs334z1ipvQMvjYxqLllSqG1OsX5s5q7gpZYCRKn+eykcGyq4U9LM31Cr91xsvbm6R5AMgWwLpR2oIqoWdoqcUGVb6evDbD0SucdDBAXErD/2Djo2JNJaRlXJMPuGX3Z1zVIRKPXUwvz78sJPyvKeIoJ8nn0SCDIX7G16c/AfZywvz2suUVgBvT3XkgB7I+DWczV/2Llfpm20YxORVnK/5Jn7oXv8kYfsowIj5D65VHcgMoXTpfWYxNS7A5Qq19NrirIs/Qh4qxurn7/0Ik90ruuQPawPuay/yOQpN438WxZ6VDdexQOQG6KkvPe6VsooaFPYkMhnkll89Iy8wHvDES+unu99wbvWVCbv2tp1UCjiZBm7K+V33/94WwmXpzF7+Co69Jb8ICTKW5adO83MImz17b6vlbaZ+L48G+4PU9lxD4dHzCH35Wwm+EAE0gDhRpTc8DPnsKG5J5HgD+AU0dVwRtMGiA8u4BxOIL8p66wfVBbULk9OUBgcN/pRnUPMyDvCyfRaKGp9dtQRCC6/TRFHVKSiW2sMTbOP8KUf5VWJJsYlyZUK3vkd2zbvo5rkU0l/VCGCYkZ47XMD09v6eCM7p6dQK9cjbZlocQ+x+HQQGuPwML1lo95fEzE1RGetcBr+8I=';const _IH='b7474e6337ff6f779165abec1ac26a3642c8db84655559fbc1c305fa5712dfc4';let _src;

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
