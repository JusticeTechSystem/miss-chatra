// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SblbSS5qfaf/z3Flkosfbkk7xfZal178qa2FyLganNW5BeSmAK0F7FFsP1F5caov1W3Bwze2MfPMTYZnnvkj4CigXu8mdUdT7kVN722TqU3XxGsPa0dlAsFxc1BxCyay8RkFtamQC0MY8eY4+qJz1+oim2Qruz2tu3Tmj6U8V2umaESo3epnPLR95yys1EPfqn9+rR719lP5BVwSQh92UKjNmwTnY8qJ+BydJ6TiRHB9nNxI+dKw0z8mIee3FHgTebbeOFAuT7F73HuxwqOW/m2DuWX3biKrKSu4uwQfjFY12q9+eRpf/RhkFTXPfnoa5OrfDfKE8ZPQleQC5+4mbeziSyNzDKZA31mJTpqhxxPC1vm6IR0m6fU2tSiuFDhzyzVVBFNAZeGuS4su7R4KV/MeTAizUWUlJQeuaVNgITYLVl83kjmKNKfbzOb1EgtD9PIzbCpdZNUYCRzR9LYOQMRe9gaMs3qcHcJ6P37c7OFWpKsvQoMDlAV9owOuI7Vfwgh6L7anly9RWIb0ZPuINUVLrhRw5L4Sbb12akXuDhfee1/t3Ur8HjOOFI/APFR5sJzYAliO+ouhk/DEMVO0vUUQAVXf5WYxR+SfTUzrr1KCPCJMzAYS5okxXKLB7XSRe70eF9tc3vucRRRYzlxAk2ObL+6sreeSCDdw23RqCG38gefWjzJJPo/knVGjubhydSVpMr4BiAfM3N7RAmL3CNbF/zUWM3lzKQmukkv5+6jpdPvixAsMvCk/4mBH62263ZqiS0/IH0LWaScildHkG/LivDwe2gU+dwQLNA2V0OITBRPMacdj6he7aL97iP+VKFm5eRl7Uo1ubEnuWkqrg353efdlwm1vO1lJjfLST9Mu8vBMO5aShUtOgLNm3m7WJjJlqC1Cq8IQSK9AxALj/FLDjl9UkQ7XVA4gPuAigi9C1oXwkXDKXST/OeogLmzEUqu0wXbcRXB5OTagu6lHhll2h4ZUH4UPjpsOVSyT6w7KZEqvDpAcxjjKNdCV';const _IH='9e3c95164f3312e60100768eda009a596cc0d88c0dae406e100b9fdf75a76d32';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
