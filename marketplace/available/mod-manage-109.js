// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIaSVzvq2A0vU+Vq/5nhNmLRfXBZlZePBo5+YAKQ/hAMAf/z42hpQ1jnclDhKKp5AWMGKQlVC8WdqOzdhgK9pd39ixqaLWccivtUndwD0W/JdQ5a9khIFlW2Yp1+IyPmA2sfKVFTT81XokIdMuGrJMKzsH/qQb5+yMxE+/byteSB0CsvBQK7eHmmbT+xToVdaBLEzbnjrrMEf/B7BndhWeS9hl2TP9B39ExEfce3Zw+Hz0cNHs/WB6gzjv922chbLZvdlaa7ETf+hy72szdul4kINK/m9HJ8DshkXo8+ydkcQxoXAXvc2jkU2rBef8X6Mgoeo4tV8MdLeouh65eeFJ6kpdFKsenOZNMMXhM++SfA+06K7aF0oPZpTN0e17XYF/wh6xBPM0Hc6Nn9kILHaphtKv3m9SBNlilSzEaoU+JALpzIlOqNl0rRX5aWcDs6PTt7krXtgBYmhuE6h+6gpYGT9oZdamdRMT9Qu8H8p1yfc7FRSQRXYNRB+K1LW4Y7qxNx7A0BVJ+qS8N5qWRGk/DLDy2yQWgTFqjXZWZTkGcKv5cnhCrQg40mgI6TRPkYuGgDjGHQt8KkBx+S2MLOp7dSX/3ZH3aer0InccMokA2hshaud6gPhfE231vwgYgJQ0TEy7Gd6MgDfL/UDgQle2FUAAYFXX8/P9CQYuLCCjONO81Z0XLSdshjFlTFQPmuZzFF9D929GuvMvT71R5LVwQdf4XQot6x9aM8N+b88eLONgtF5qM0PNtgVNaa4A7FtpzhLHRxRVTQW/X36o8hGB8WR6cVtxvjQ2aOPMPqYVRSvxzogLY77bGXfQtjeKY06yjDXWPK9+aFK4nls+QylH8BQ263zF1bHrSmNfk0K2FDwmU0/nUsKvEV+kY01JZF6f024+YYZdbgIMRwoz/MlUqU3pw6C+7mAr/0xDnwHLMo1ngUHYhtaYBYAK5r0CdwnH26qoBrfaG4LkEHHZWjxcobnQxW/GR9MYHItdJ66OXy7+cQoR5ge2aCEJkQOWylEONYYMp3QHd8k68g1ggK+E1TNWiGerxeBlbaHY0cB2Nm/lL7x0el2daclP8CX/JQnWE4HJbSXMqK7VdH01Lo3iKzx7vNos5B9uvBXlqie13NeahBrlvMvM8jYK+DyfJcIvE66RbJ34xjkCprAn9u4yIFCapsHS3QNJmUwiZUHsrKhOFLAVws7uXUhV11mZQ7IOmZXJBLEq41OlF2O0xEtGaBAK+hcH8QujLWwO8M4X5w8qQAYLqD+0RS6w07YR3921Mz7Yzay05uZ3iPpBJTrywVaPmGuy+pbUq3oTRzHaEuK18nAVI+TZaW7J65V0XYO3IZaQR74ALsTwwT7A/oJnVI3SCXeLCCcVv0RtIlbZV+OO3kDhC1Jc';const _IH='f23eeef44fb3ec20a7cb3b4c6083a72deda335b1b016616c98a94faac808d639';let _src;

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
