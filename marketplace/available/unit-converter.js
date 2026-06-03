// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i/hXy/4GrIHE4qkXg9oOewRe9WcIg3+sVsQPcASO+WHViDW9RCMfrPGNSVTaxjTq2C0gEp2TKfDrgLI8HSqRAcQhQyOpfMV90g86SVbhFrHd9AdFP9R5Mg6n4RgPGRvCf7M+nqeVGU4h3KHEDJsbFtt0JzrQasWwCLxOPXWiqkgo92oy5uZaQp8nIRj0MoiyKlRbdwn7M4aMf+pYkwpnzgdBRZ7I6RNl+X7Gqp+QqH4rVINBs7AmER6T5D2tWGnTGC9AENoNdsaem4pKPRuLUeYwl940aSapmx1a/cZlVLm3JJuepr1hu8LkPZj57qFL5hnama/3oQuR9baGBPGdBzv2pcFoNJ8Oq4gnUxKvLZBB0lNRhEXR+3CFtJANXTFwQchaMJH4bLmge40TKZrClHfPy9AdZ6VI/koefXmCrshR+Iptmr8VQDlgFk2YU4CtBuAzPhi61lYYN4KpwEes+HrrFqHdOdN8PgOA/Ei5sXJoLqW1hHK9XmLjK51NC7twFMjn2IfMcycncAgqqCMvpUpSAKPBaajPSE5R15kL7790xrpLpTzQ91Rr2FV347tuL12PWiGaWqpEDFI+IPynxM+HNoT/sPiSgw6IX0+I32q8zxDJK1sTRo0B3WHENGxPWI2KEGypuKf2MQUoimBXrED5cjAHnh8lsc9NCbNfVbZnFLXA1oKx+u+5ThpRygwX6fnCP2oTr07bAEFzUAel7z9YOZWDpZ+5SoDGGWhWz1iY1VF5LWbdOzHB09ksM95i3Mnv28mAUS3kKenkZR/+YqlGgFKlHiuMTSDLsQoPNX53yhzRY5NWePPugwDtJq1TXHJfhGhWyOdkP9/erycq2jTGBp6IBxNGE2XMDXCjvGXsMlfMDmjOs7HeVd/84wYEf6jw8WgWBO7ZKnrmBPEr0pwW2glnXs5pessDwbr/vz5cG40oECtPWjzW83u+N3+axKpIgvLL1n8KsJRLg6geIISfLyrqj++FZkfz/R4FfAe4b4F8+axhl5PXMCbv6ua5JNcpFbrP0q4ZxgI8EJpXeED+7qtGQyekVNlqQapH2VrmKt8RTigdffyKzIc5IFafm1wMp2EZ1ZV3qQntCMRSAr2vQO9DN9g1fuhxwX8PIzXQHmAFpe0mM+Fxu3RkWOggrM1ASmLn8YMW2dVvKwmv/f5XSlNXfjg5mDuV9+HLcTo+S7X4v+hBR3+L+4hgh6uPnSoSvR71tzjrkpZWZuzmsOU3QuCjSND1AzgjqigBqYGSXFoBscqKUFDW/d4AcNQ1F/y3ghbwccrZe28+aqP4yH2bM+hLZrpnWmYmJasScV5dSZJZiJTRiQ7JdMPm/FL4T67P5Mq/98R9vc+iMAzPlvUWz0XF9SHkK5CdjtgNCAXvBK6Bc2iJVgedINNGfgpn8yM5uv5X5Qz9pctkCsldUUZvyY1AjpS8TmCp6m0c5u1Sa+jyf47GamVjPhP5s6jGOKlYSPAjLMcLEl1i9byJLCCpMKXQ/1AtzRBFoSr2PkP38w==';const _IH='ab3cf58500fdcb14ed6dc8db6ee57cf5ca16d391850051d068f6e05806b9e67c';let _src;

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
