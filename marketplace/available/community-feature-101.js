// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ckcnX3whd831ecX66JMLBsiBK+0PsboBC0j9ELIBSvwhwc9W2UGWOP3L6KrRTO0Te9DwnWcl8iRiEKhrvcu9OIHfJhgwG5K+wksZRf3pZJRD0LBpVgqoNmSvyifWu55ZgHPOWgD6j0DTbJ1wVGtsJS7hxAoB5K3toqu7Gu4uX2iV6czsc30c9UdNI4kuCK3h/fVK7jk/8uhK5raJEtDGvBRJSjdn4/wjw7neEyIKxd/Awuf+U0box5J17Rkq+3Uerm92dGuSwxT6RZlRxLomntZ3nkEsZC0t2+fWlrYcYDTgQZTh42pGvyADfHQCCs7+fdKJAyMSEXoJDhxhnBR2Rj4VR/x+SOW38bzJRREgwCS1yVAX0iCeryq/+RzUPI0t7jARhJKAzHVRk9jAVmnm8fpd3/1un0OpphzeWyfNs4vj9q4vsGXaWC0E7rwpfReKj15fn4Dh8xmw6vBSv1WpW9QmmyU/Jjgs3exVsp8FvY5xM0Yx32Wi2Fq3ruWbbFa7Bv9T4tSXsJp3ZOk0JflqN2/U7UrpV7LyPp23OfJjMBbbKoeIXHp3PaQG4v18cpZM9YlL1FqQuP3o2l1C2tufnp1LH3aN01IewrUWi/c8pqk+6YlyaHC2amEg/SO/ls8Cdk+NRnd8Cinrt2uw8ru3Cn3pViKCa2xtjxuBw5vnerm+cMZ73ozaf/Coyxt00iEjQLELctCFf1YVPcPONRM1jFTrnQfJcZo';const _IH='6571ae98d856055e0fa8138928507e8e78fab346fc28c335a85ae8c2f2387f34';let _src;

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
