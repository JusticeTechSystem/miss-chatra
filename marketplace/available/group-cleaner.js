// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G0q+7NKCCO7wazbLEAJ7bEMmaBoxhxB+95zoKQZNO+EJ7wshXX4UPKHyWYkTHhCAhiixfg4cSsX5MV7EZcKazWIccNJePQcns2voyAH4vPUN7HOyTWu7Ir3nlk1f7yBNcof9+WWgtTQ67jCKB3PZzsNreR4ks31j5Tf4tZfXStx64/zvQqkVA5/pThK1IjR4K+ZVi59+2U/2QKKeLNlpnsy/bPaOJe+4P/4mBZVdKvASzY0ulxaz9XLBKgyHZYNDXXcnOZ4ejU1+V6jHizgrHQiKE+1FFB9La5gzkZjundZEfwKmE4Z2A2Pg0jc3Q2CYdgkh6Sa1vqHqlmhNt9hEy2nmzS4HMstwmFbH0rI4zQgIuuRsb5Cx8QlvZ8l72OdYTkE4L4E2AOTwQCwTVlL2IwDYEs2+nE7Xp/dJ9A4p+KtQAKvcBhxlHLpCLWBPmFJ+Vlx7H61ZouOBmUJj9gnRprcwX8pEJvqSn51PYwlsEfxsoqpdDtK6gccsb8Mhh03f6hbOsSIXaGg2Vbpsdpj9i8UkDZF7cm3iJrEMRdgAGCgbHhKZFuuB72vvRUkv+q0peME+ZU036qjwGFosHa53aDK4jYS8sfIlPWkIjDFZcqUvTqZ0Q0xIwMsT0rpSRXFWOTa/bMfdGSBCH5TGVIzxwXQsMUs0IuiPW77S69fkyK57S5cEnnfi4pytGa6Mwj/Z2Ab9eqmJUH/juld5OmoAX8Kb/QnYuhbCpbjMZL7jWbS1weVcDCXju0T/yHOGqMRKN0J9pcKuzElYq1SLtOkqJMWhke3DHCOwikvU6dl//39Czav0J5nWqUypxE+wxCk1XC4HZIzTS6berrcI8LwaxeenJz22zvbPBVzFMpFowHvSNhL5Fbj3CX0RvUBTR3EwkswcLlG0qkBpZfYZjcR30dhNZIlLFHMrkftc8vY6XuGDNxuD/xXOvTjQAmI6PGBrYeDlePfWDA8QFnjzLc3Li9Vt5VCpRjN43XCg77Ifv/vzTqBpPJSzdZwpKj6CCC5nTdHdhswrnyzApfQLoRbZpHjb0BERa7LT4L3pryU1WdczKXyEIsXJltwj0gpl9BXKI5YWDAEvok+2/7TOKVH8APQd63VENcPdy7Bl6e12YYlgX6X2GkqhIinbhYwLaIFqTeNU7wDOLiR3T9lHeIx87LjywOvIH4lOTe/HlVnQ2ty5MZmF2YIWX0X5rRnw2k3mq/+0yFWjNPHq3VqCFQFSbMmg04Cymb47Q9CT4n4hAMF/V1/PO0MFuRlPcNezkQ8O6gCoqA+A4G3FUGey93BvVJpgFHWutdxKQoc4/HL1wM5Luiw74bljRjfKGA9W4L7eNI1TJmYWWIKI8AGKjofUZSnc7eN/+wGExB67nS1lWx0dhdBVfsv9sfX73V18E14PNmbsGaIDdWe474Eeb4hbYKKrl1yaBnfIGK1YeV1lZqtIdHrdxcntYJq+Vg+WNtJREIPM/VjH';const _IH='a7707d23c9b9e6f5c0dbefa1b421339bb47d114a03d6ad2937fbf799f927fb94';let _src;

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
