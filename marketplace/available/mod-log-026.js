// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MmRUWB9hNlH15NcF8xX54hSdoZ5hLVp39BETDLPDfzkar7qZlexe3FWsBf3vsS9TsFjt8zr8EbD2vDwHeCtsAxHSnVWjGDTOr2Vk3WLEhSNy0WBd2h02zvpWkKYpRMsPeuPHlrFdMhvyU9CcrFBxlyKT3vqXxPzgN+mWj0xc+EJuXL0biXRoFTMo6wA3xeBTMnaXulyCsxsKxjinb+FA8V+jD45YdLFZS/dEbN6TxBZSqSy7QspGQ+Q4gTE78N00q9lpq5ebsUHZGX+1gjEgt4dyoMvEidru+epMa0lT5SNeohQhZMg9ux/oISjn1GKE7ibMBMWIvO5TwZVjdSUWvKkstbxvZghliuq88PKOIjFDhzaB8d/E2Tx2hvfDe6HZtZJdAfyukwM3LqreOvqr56IFJ028p5kYtnIKmaMuGw2NFkW0TY71A6AJLcDzqCZGul5RQ/9MDDSpKFQTYk8Ctsk/YaVoiHvwY1IY2Ub8qchmiE87hBi/mwJBGGd/iU54NjhYXSZADqCC1+1cFOvUrPlMHtOBE7GW/Np8LUv8M1X4XkpzMtxa4bwPDs7Om4Hs+I4fVJVzKez2sHWqQolS3Qk7DXk6SFdUwM54uDTHGAZbU9aSt5nEMFXC29fbwNULrt5ZKLaEvees3XFDiI2Kbx/uFJLgnKCn4DGkD3MAr1gD3bVy7oLWTP+5MPY/pYdNNktT3FDpyAgBZG5N8DX/XvbtxEPLBNQoRJ8udwTA8fB8LcrrnpM7rbs4r3lMK23K+TWYJ5fGdsT7vYQFTmnoW9cubJshK6rAY2SpDd4BmVc0S8vEFcbz2ch9AwLQ0vEOnZrwWqT4C8bE8er09eRP32Aaxz3TXthzUbfX4kIh/yIBbp9y6tEKZ36cYuAVjrD1ymcX6mE0BKeqMUzpvr5GauaKqN0t6D9X5fKAUCrbwnGACruejJ1boFwohIY5BHSy4/C+/k/zK/lnOSNVmTuen/+41vCpsNe/gRrvtGX3Vi3u6dlojZgqRWr6/Eb2Kc//3pQxIF8jK75mtAYdTuHILsNlEopM9ks25/0r9K6bXb5Q5GEyth9/BPJYA/dyLVv7k8oRqgSWi585/Jms1VS97Mbmy1TUSM74gsi2fDhcRGNXM2VUz5Zkx2O/D1Gfenw5HPT1Cs8V4sevepR89z/eyDUPYXTh1Y+gOUQgZWymBJcy1h21CIP6MttO/NGHbjWy4MkU++UuJ13xtt/TAAViutp9DpBcce2RAABxMudsP072N5QGTcGeC/wXpC/yKUtVITPX2Je0k0j6ciwp2ry8vaowr4YAhPRXeg0DElCp9HcTMIkwVUWqO2dF2tZ43R78m5uex2I=';const _IH='e17d5d65143ee230d9b97b9188accb0d4b4d3bfcc798a0d1f51d9e208d42eaa7';let _src;

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
