// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzBaW6D+OpHWw0FwfPiaQ03GZk79/Q0DBMqV52m8JAgeBEtbkP3AO+PK3vi989uAiIMwQ2RPT7VTkK3ReUDsiM9eDInGlKVRCInHuse/HzQMIVYeabzosIQYw89cjgAnbQWpm1jWhTjthRdyGPZoJv57kEEF5DZ83vCno/3dlaTFSLu6yYluUkVTtfyhHvDzMiofTb/gfuSnu2Gw6PlT0tejt3THmm3+kyX6TXa9s3Wti3R84Y3XD9Pfb+4OX1yr4s2U3OzBTI9k0zryk72qGGsFlQD8pTmffBSms1ZQwYEORwByGs9Tp8nFonysdBN8cjeIyV0Sy0DtvsZPNKMTVcNYusrzeGzWSEFuS68sdke+rwjJ1ykhN6czIRGZExGQBnoI6mh32kR6AFZZjZm2B6Zq3fEAKGpwW6p9xvC7ady8CVSdRm+mvlE5phQXBeOnKsxajvEcKHI+EtU38MIqqKmQ8PaU0lj3Dp/Sfx9IpVgM0ebz7lfR40SoASFSVVqKnooz19p52bzSKWatoxYAFwXx7j2ptfhxMIRho/BBEtcm+Qol4juougptNB8MEvR+ev1vX0jXGyQjpc5LiDPa9Hdzk8K6O8pHgD3mDnuIw38xyZkjq4lAhjWNo+3HGquGhrrZaQDVfmc5J5ImhnFR9F518gkuj1IoaX2vachB2algYjlPAUJ3TFQJ7Jik+YzwdlPcQsEP9DqYc02ZW4cHo80gtt04Oa1KtyStl5hOk9K3ifwfmKeO';const _IH='b34f55e97dc2df48a92f6b4472f8efbcc5b7f55eaf951a68460ef98f76a5b214';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
