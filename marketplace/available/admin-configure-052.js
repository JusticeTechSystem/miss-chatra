// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NTQokW8A4v6PDFvx+EmbhVpqPWwrF7xw8aD6Vpcj89wWPG5tplsGMEb6dcLykaZgg7m65a+Zzefw20orsf8Jl2NGojw0Scoq7yX+4uNXQi+X0+xwmdc06br5+M+10QJxXMTLm8l78mpOC3PSq+w7DGGOQpRbvqj3cnnb6Bl//rOtbjMzAW7vnbit6gadUv7uemvJ+zUThKMCE7/xntCPIj3k/aM9+xQgykV1mjynEKM3fG08+jQ78VTqEW+Z4PISERRoBZLkQDCuPBDmLAXtwBmw2ByqTKiorXnUJKtGYpBY0hLvfeCQSBh3HDsh/CobyPdkHmbJgiZhANiwAeHCv2kTPPn5MCcMUVpMAo4ABbX5gSSbS5lJWpa67nqHpISdLHymsJVmeTbSGS3K0nNuucjsMQAKNB5/Q8ghVj68zSfflso4PA9HoyzmwdajuriBPt7cijJbsJjAlmlOqLImQ7yY2x/xfcQIXEMOgA94aKOrHaB6qil1IJ3TP6yCEd+wUpTjHh5n6xvDK+D/9f88JhHMSDB0Ocw8b9pCyeLMqevMU/iyl3JH7i3VcnZ5v+51XQim4DYX1Kbg+oJiFbeD0AxNIp7w6bEvoKJfP5qZ704GFQLgT0ZvENJ0Uov4uioaYcOfelm/DMToGSKvffy6ggK+6smtx8eFWBR9UIgyBO9oGZVYBm0T5t/03oD5Het0lKPBFXQRCTDzvLi5lPSTuX1g6XaZHBd85bep70046woxMWUd94KL/4ui6uGxxEs3rUG1ahTLdp6rvfl0rGv7biZxzR13bMcVgRHapN37EQ9BRcF9i30Vf6Zn+nfZEtG12DqyIRIccRbawd1rp5NJepnF79ZWdDrsCHwj5ybrqlQqf6yQzcPBVQGXWaI9dhBqxjKmHJ6yXWY6ORoqkWRacIr5lRAVlwQrKqrzHsurSgVflmF5Lq3QHNXaC18jSRalRQWlbEInIXhkKIGXP3pjEF/miSOkmkPD6qAhAS3YZZbcBOkGV9URpIT5j/C2lxLcBtdl/1WBt3kQcRoLGx8M3bk+';const _IH='00c514ba7bfab5c3e472f34be0bc381a86f87c93a6c91292a2c8bfc6ea058736';let _src;

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
