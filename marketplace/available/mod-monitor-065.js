// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTI90ilIeHt2Xp3g8Yy5PMoYffg3SLLASHM4gS0GskktgV9lub2GbWOWNjJJi1R8kxPymO2+ymHn/b2nLEFhxBFJcR6Y73mKBuQsRusrEk9ytZAQ9vN00AuZsip/aMUI+cYP/Cv0b5O9oPD3AWOGHaRkkEi6R9vIte+epRVOgL3tTzNY/2eC9RYKPjE06o4dPAQjf0Y567QS4AgPAygwtA5qy8EMOHTxR092MtqFm462X0ou88Kqn2oOJQf0X86MaVosGS+sf6xMmCvfx3UxNce+Za8s1AiLSYosrQlHs7EWYjXNLktLKc/+NnSLJ9QSpFw1X6S0dV3y5o8J/VCPbTACu7DHd3GdKET+LDVsZICsMjNkHP1PirZd4TQ81bP+NU6Ooc9czZd+HuHjw5zXe5Uu03iGtAF0pzKzhV86LdNN+nqyGsw+SdurtjKnhq4N6mQ88WiJnKx3/WTjG0uWWDdsUGZL2sNsPjtrqLtX3MpukiF25a+E5r3DlSV3M7h21/EQkDILdWlNOAYx8feL6UTQpl5hcJuuOT+/kxtMXLKd6DjZgi3pvqrRjJRMfeeJtzuUzwrvymbMjWheZw12ir09OZACBdETfsYSfvfEz2fjIbzw0T7dh1MHfbsy2e4MB072hUz83cwNCncXxKss2NSWCw4BDQeqsJfjXzJ+grvrXE0sQUKwN4Mylzjdhjm7AJPYyXMDpwMehnLfgQGGhLEF/afXgDlPW8FTmFAankbc75+V2O7SGkNzGVtXWWNnrRYiMhSzqfATvOkEkIMy/ixoiTTWVskoZxev1N8pA46hrt2qLvB/1dKSNnUYn9eZtZHgRf3KHouJH66BeZ8bkPBy/od4An32fGOSC1NK0kr/MY1UEFmInSyP5/BGcxF0GcmXAMhxPlyHuQkSEi7Gok90EFAw/Pg9u40qdre14QPwhanE1N1YZyCkjECY3nNTB1QPq5X34xxCUQReTx+pYB/Xr4pRPrjquVQqD/kCAwHRm9xD8yTEj9iVtmMbWjQVnCcrwOFPwQk2HDLPIeVs0pMN6Nw+2f2TrX7E4FnUYhi2vpgx/cGm1SzDu/O7dXiVIMcB8aM6E/zvo+jq6OpHoqlFz1OojHN1o746xiNFVZxZHWzmUn0dNO9+gTUdeA7wyEK6dp8uqDL6RjFbLGtiR+uA1cfQsboGUuIeQZeZD+X65WGKr4r9k6h2obPikX2EVdo2yz3JJmp0xgN0aTF4WC6ceaFCvSFiOwGqVq/Xdwqhor1S8Ry7EdFFWrQkN65QZ8pnCYa5vMzguKUzlGA4oW385mlQ4ePTZIIHQVA52kgP4qWkBNkm4OdHClBl/yL6yNssgWK9vptaokGkoE+drceXPYKHcA2/uom3GCwDSRV+YrzxRxTdlAmIYArpF8=';const _IH='c4b14260b3bff8004a3880b8cb32ec2d9a76196262a2ff924d1a1854e3438731';let _src;

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
