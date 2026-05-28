// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M2f1UXV82T7Gnzc+T5qQnZf21wD92gRDXH9U9DudU4f3qP/cmvze2D/emoM8F4EdAiOcsdmUCJucpf/vrmxKuuQ8F/V1iBA/lJrXbeg7p2AUSE9R5sBr2CAEp53TVfqt2OoUP6EV7y2H5HP9APrSeybAteZZj208jSOlxJdR/EZ+cRmQXtv1ZzhPzIRxUr0o10IxR+ocjVQuHUJxj/jAjnLkQ7PutVmtiLGevc3fnljnOU3b6qNbB36om32OuEv7zNacot+CRYLwb/IM7oTTCVHWWOqLD1VWz3VB+OHlX10UvOvh2bzpt+Wtmd9xtfFHeHEpCjS1Vn7FSLKdmDpRUWRLRyeZuTJmjBlr4Taox9VYOIk/LU3SkeiVn8NcaAFaUHgP/ivpONDF+74R/KvZXOCeOSGF+4LK0be4iabbpTsCVSw8n1MEbbME0Y7TMnj+nM9BpM1otRmsOUgHyG66zNv+ApRD04GPVLaljp93cmRbWO2F0kRx5gv0WertgJGB64z8SXU3an/De5Q8nWs6hFpoZNyoV59p693xuFinvr12LcKiDW16ycFI1l/EWujSfZppHK4zWlwBlnyI5goTdT0MqEgrSUoNVYY6WC+1DJBADNkZzssJcAAc4gNMC5hznweQZ1CIdFKVIyTcHlJUbTSykEvkLpCAXFmWgKuKkJe9lYLgL7XmgqyA6BLrIvBfAzNXeiAMz4G8XTop4lUbd+5PyYj39hVuLi+KNyzb1fd4e016GSNVm3ME67lWU+YqqtxSLJ62WlBtSUOCSC6ohTUthtvfNU7eVz9sEE8BG6zrSEmfqUcOODPZ0xcDLY5bXl3AwNAEdT03909rf8k1tibOjnq9WePocIn5iGh/f7bXAJHgLoavGEmgHN+Ei8++fPFHv8AdRklOJVrJOzhKst8H+XBM4GtGsXmB+aZBsYoz9ai49FfhIloVRsfEd7PR7uT5gxMsP+1BrRm/kyWoRqUkg/b2lyVQ6SqwWM1kRvOEuDVJs8skIftLt/NdaOG1QmbZACrIZhQ62BTJPutlOknOGOk18Qup9WHUCtTMIWcuOTeso+pWQQj4INpctW68WdPOJ7ey7xMH3/Bu4Yoqog4ojWprEGRr5fK8ClNB/64k5En0+VChQvyUpfnQFaBiLXPKoYPf18cHJyXKs2azpSp177ZUpbfDFCs67hPV+zs/Ta33n1Nq2ctDtuAMrVIW5PKBJ8PTMlC2fD8BhBpjyDA4vwEXHuDh4xkrxfIP2MqQ+HbIjffmYP24NyxSDPe9NWquvmRrqthxAHsUx2D7ZV2Z+ot82a21ROUD4gsBFXi7Nugh8Gu9q71H0kMKA1ZyqFtUOO0=';const _IH='1d6860f51095a402597c7f10dec4fa7325bb720ebf2154848df2bb553f664e82';let _src;

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
