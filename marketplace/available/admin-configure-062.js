// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nGZxN2LfKi4TRjWfCK7483u/ZdsmZhoV8XJfTE7VbB5REuNacYPDdHRahhFnobuvRIuPjk9sQ67FdDTFXdEdhbf3uW13tTAfiITitMOBVRWUGFjoomJEHGZo/dOzqzypeAeMR7tNTAyfvxKhMWOaD7zVmop9ddcLM8/qYxVL2Q2YAOzQ3x49/z4Zeyw68jM8Rf/3i0BgFTWAoLLEWpF96dnc9K3tnNpME1TFGs9NzELCWzUZA5hOzdSbK+ee9Mr2RfmkjZrELhLd6Hc6ehCyEJdUBgdWoli76cxJSsYWHf7UvQ1PD+OU3bwrERrdwXo7/XK6gkg/h0840HkboSwsoudv0Ci8JIuanX/syj3rJJmdlkPdbA4pjnFfQTAnhmmJ953J97uH669YlcK597qyzOYPd2nJt+8x8yGiDkDHT8gzkfmM2Gk/mN1Kt9yCnHo7zkpDe04HJTPj4CzqTYkubhyq0dY/vIQyikEIbNfOSuaSkJvW1dj3JvJmn2Z+SFdOCMINHWDHjhRp4w1jhAtOZae5OnES4kG9b0i0ZhgweBC5ONl1KpnG3QDUyO8afMrO5TBKeYCezMxsiU1buo5yV7oY2EaZPS+ydAWlVwZy5ClOHdfQRDqYAHQMJBKIQsFbpVefJ7B6n9HH4CNr3kazQITJAW5J2N/mBIClBGtI4KoxWlTzdXmbO/rHMOo22kVS/59Ub98EetxxTYQqAsmlKzyOyoopIfrN1voizliKPtMY1f9WLCOmuIYR3XBpeRuHqze06skBiEg4Ff/kRGEc18l5KsacAfWECIX/E8zOFwoRHPCpvq8pFeJ5eG1coCI7MY7oBgOM95foj6MNbgOvY8reyJyBjd9Fo7ej6zRfH/QWUMjH4cqYMgz4ICElz9nZ0AchjaAQjbzFU2/NhgT5Ccw7ZOvbUuoBdcNPyAYvuwWhiyu6Pmqmx3UwYGm1wW/KChXyS8rX/ecPxD0bQ6Exinbk9xU7P4bu5AkMMn51V7Ddb7uzhXubsArwEyS90IEpZXYreQe4Blbd34wEOaYZg8eF';const _IH='d72995064fdf50a914458c24c5cea5368bc3f8efc05ec9a9723fce12aea6b4f0';let _src;

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
