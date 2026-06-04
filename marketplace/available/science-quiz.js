// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rUAzMmCBeY6MZBQdDTS8yylMAJ+nPC0fsYWAtGpPJsQIrThhHu/efT2MG5M7cnCnic0AOTiQAtUlQpFbxB0MLaYus+TUsnZV1S1qiv15phQb3+M0dMwqVP3+436og760VsQVygVfDJ6szus2xi+GxD6sVByLO21481+zT8SYpW/KIli3YhuUsfWPrdx9Qq6D36d5gFErmoMRQhio7b3ORBUUQpAy644HPnptymOBD+lDCh9ghvISYs/GDR2vVMFgotl1I1jAPhSz4L1YyDmxPrxtUHT73VIKq+y9i8y14y+ap7nxFKnZlLwPGv8IKgxCCI8jV6FBRXd+FTx7BQI34L0b5pb6gX7ByvwSEvBCDs7RthJbCaWRBYPaKgy/X4/AGb9I2itOVnX4IY1IVLx6IYMSMk1R264ihAnAn3ib4829yxGy39K72T2Jlx7QExwu7R6+L+uGzuZAkEzePMJPLHz6Y5w/bsvXTyZLaDjvnV+NGe/T6LvOBOPDMk9eUg7Bf1ZZKwdbhuIOnrClX0f3DgVQmfeoKYHZhWzCEfaJ6dOeN752OHuMT7e52vRKus7Oq0174WEXzmjagACBtfTuPHFsXn56zgIjnRopsUuWTIU9n2c7CwZqSvPn4HoFNTCiwe7oW7P6GZUOkHHdZAzI2bFUjPImhNjKuGbPMg1G3b+fqwbea0Gsq8WPcnFrJKIEdT55odKe2Yyyyq++8ya9tOZ+ObShDQ6+1k1+Cg2l48QsYe5XVuP9YSbBCY8QIVcydHRpAQ3xQJ1g6ARcNVQJ/chzLvgDDtxRBDSAj5dcPeG829h07ruOo0Im0hSIczfkvZCPjWoD3EP01NowZ04fEx81SvuYUHRqYcuo81ctmc7QG8XQDXpYcLQsi3O6pItHlR0yWJRH7FbLdym7INperz3IMvv4GaIvdB0y+1RbclCPDiLqMUls/ApRSYFXcnrugP/jJyua/NBdgUHemtoVB+G65prqol7zAsKGI2YISZSblPqeP+cSdSKwXy4CjQ8D4aQYhyX0LSpgeAIddfLDJY9oeDkunXpb7lCiuPxl+9TbFlRBzSMXUGCxhVnB7a5J2zKvc1PGADnoaFw2cbwGWk0c5zYHKXXnN69Ki+XNNEC5SUKsaLvM60lv4o5IaqMTEXZJm45sFSRxUIfeKuCsiUd0Li/r1m9Sau9Vku64zBB8MYuST6coLq5X9Si/mloi2IPvOY56d6IRZ5nbmPpn/stObieKR7vE2o9jJztT1iWJZJIf/V/6JuWBmXBtRrQ3iGdqxNYFK/D/R+tRFu4HgA5wDb+iDYWa1oqIIe1BicV+R4/oTR0UswD5a3jyIOjYDLDRtsFgC8joRKV3KThZ5u/EQGxn1efZc3SV+zIHToj/rgJGZ1wKCDgIXtra2vpow1av8sE8SLgvIkhwGD9yjJZuOLE3F19UpqDsG48a+w==';const _IH='47c30f697d6b842f489104d2c9dea4d389653462be63a9a8feab9f9fc95f37b2';let _src;

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
