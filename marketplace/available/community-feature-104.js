// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4+muwysGQkwXQF9tDrcPUFwVmDvpCLQxt46QPC50B8V8+PL/7774F/acl9uiVuryEHEP02w6T+T7N1wB/SFO9L5nijLGc9bfEGs+lcv1fskDRirfgrbg2BWf2vDLaO/6/7lgCXwNwTJEc1E90ECUCloO7q6acBachdl/88y4lQo7gUMHRh2WOAtg782tPoHCq0kma4C5KoVKx7WhpsBH9xvvLFtDDIoFXWVgDqlbvNCInW/c1ThnWXJ0TqvdSlJxaC14bN1EQJUFpn4f/TdpHLs8kw4HmchlF77n8QOc83vpTWfnDT/N+gOzNy2qfDT2ylCTNM2NhXa7w7EwP7jf/aB/yfA1RdBDo09xFQ0tr0kuenbf3awkGUxeYJ25t27MGWT5qrudHNpPaSoFY2mmpQWp8cCRwHoSHG8a6VbQ+FKcIobpaM/VSw4Yzjv35XdK2hRZ7dVvf366zQPDmnXbj5Do+SiB2R/rOuyIHp0HKQFcDWXCjicycjD2E6k8qvbdEIusp0arg7dAIvH0DnYnWGM9eiE+ciSOW6+w1sv0iOhkV5zDOLhkr+zvO8XLn80KLai5CoOilfa5cVj0bDbKbGCnwSn703ON7D7cW/VnhLDo10XNS35LbSJfF2fGDXd91UXXVGCtiCR/gCGoUYUVmzV3FeF5ZM7v/raKoA77JdipcIXSKtqEuaxrIPn0GO/IMOHjtcN18CFbI/BxfSbi4+SMJ6z5o2hMvYktSr5DP0VrPb0p8OA=';const _IH='091b68a0a7afbd3207b32b8a62ce0780b15e52a2e88c60006a0c41c54281bba6';let _src;

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
