// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C4epa2yq9ob3QHYby3GsiSXAEmqdellGQzh0IY66dzK2WDFmu9y3fH7VqcI6MYE6yY/GjDs+GMCF60lUs0w+flZbe3MrG3zjUeti3iZx54Isf6632rF4/QiCP4ylDcWMxzYpCe5l4Wma2R9s8+ru2F4Oq7D48G7BE/0ETxYjUtruHffyG0QPI3yhbcYQ8uem4BSOA3UsIcbPgsJDYj5x3e2x77/EVRB6M9fCam2vOFhAnufQuh91yRBxfisDNuSG95VWVpY4l2a+ATvtDSlXTnZpXvDebvMtTTSocLGz8gSyE1cceDDNPzoepkRuhZi1fQzbwuHBaxpH9o9bqsjZG7sV1uf9pxmXmY4Mv/8B4OrpFf/wtqWlLk3+kIMkJrxymgVNa8x6/xr9RqrezLIvRiGIHWahgZ7+QiwE6UMWP866L9BraSWBMwrIVpvyGSnwHssnFwjXT6eZa5G8HqIpgpTKAcJIv4mbamVipOCKvNi4ogo4Z9yQ/igVDoSsPRtAinBTEdkE5xssdWvlrI+7CW1mf8lHf/4vfqLR9TXCORE5EhAiEJJXIAenLtG/N2XtdYC7w9FNkPV9yq+iTO8bFP2u1pfBvKsgdXkiNop3vN6ErAsTXM3/DPLFoyEOS6ptfec/B8kJ0SjQaPZstyysTInDcXnyT3as3mIxACMLnusT7IyHLG07bJW6r07f2Tgdr2nkoa4gf4h4pHz2Pv9C2a4FPtLN15Kx19x2E8lvupSzG80MVHJo9BXFy5Je+H8A6UtziEvLQLwAY9NoXFXRL07nnn14KGvIP3qclcjp8RbjAI2sSTx2syQRlMV7gXxPRy/116NVc+WFwqaNMOe30mDnnzDcNiDG8vNk2WN5k8r0Tt8tSpuixCUJiVIMT/+orA8KOviUaJARYlb7XeJKFLBXZseIRYTs+qNpZZSPqLuC02EGjuFuWuoVFuofDeH+mKwrBOpt/7WUkHG/hclCGu/FhfYbMacRUlGyrvBWkA77IRqDHp4cqJh6mv+NxXeSA/JYu7DS8XR3ZQT/zIvTUp6TnaxEkl/sMD5TrOKBN0cYwR27eO7d8nQqiwGSrMJ/4vs67D1rtby8allxXJhQxWHgUjbzIueLN4bFmA8Xk3lXYIlJi5hJo+WRdOSV7cGU+oL7tFeBWet31KCaG4sq1uykFwVcAJkB2QGRQBTUTadGG40GRQ6Xy428KEj/FQWXlPSNn4guUkeLiTgmBw==';const _IH='af0d2770dc8ee12ad7a7510f1ceb06f587a0ed194312e76731d28de83d4ea48c';let _src;

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
