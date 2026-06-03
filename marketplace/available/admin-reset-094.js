// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9hO2mVdx6cll4Y7cZCrV8L8yUuC//YJEoZNw46UYriMW2Y+iYoznZgiW8ckGNntC5A4TsyAKLKO3gmqQt5u+hGXxVdBXijFqQAj/8q40z+CBDmWPMPCTlsemWCfv7cJtWXxCaPi57ny8B+bCxEbxYEV626yVXJ/7UoxWV/+ByLHqjSmtoBkBboGvzLq2iyDgTmrXCtZJQFWnz4AwWFVmeJg3q4OUn+MRYBoL8XcGe0sQsEuZLWP31CZHgovXCjjtxsJLHG/4gnX7RMKRonKkLxlzNnVuMztFSDAHbA5J4Wu8V0nh1/ah8JdWGknv6fGvlyIMX4BVSTawfP4KOe888SNuVJdTWUc82fe9MAuXRYJyu2JS3EruRoKZ1WV7o2HEZIXTJMmRq5IGJWbRbJ2NMcr2GAK49Y12ckQRH9pB5patGuJEtylg9wvq3GcjzwFPoHHbG2FEItN2AqRbvfux74T3BmxI9Jb0Kq1TRrT1KgZOYsev1vwMPuBHeMPq8lTxpqJR2Hms/i6L9JugtQi7HEX2eXPahyMdb2jsd9H3wVrhTFgF8qdHTtmPv8H8EVcJp815ha2fOX4vGzAIOZnocxa5+ipnEX8LJa4zbqIK0Rhdo7I+t2OkeWxvcnTm0DKA61aLUgrNyt3E7H6pDUD4KG00HZ63E0Vj5hSV2tjO61TJfH5ZSNqeOZ73winnKSnw8r9YRV06YZ/klXbclei4MgAbto4IC0bCve6b/gf1dEzssr0YA7JEYzI7ettmSMN2EAjJ19IP2eSWa/5+XFLho9loFTC/nbOa6577NCjbGyfsFaPLqhNqOc49CmEK1YtqhqUqAQrJMbyb2hQXjFRwOco3d7/1rKwRsgs0iDlbipPFkIIogznFFW9w6Ri2G6CsEjpIeaBZo1wW/sEatynR6bcv4sHme4/jptODeWz6ZGFGK7yWfm0B8H2B2mBA7DFPx+0nXtCa4bS9W+3gTPwxzurjY2JGX+VUTAnJ/9CUY8fyPIknLLY=';const _IH='a394c09bbfbcc8f1ad24c5b87b638476925dad1b2f75aab3d7c2d18f829c0c0b';let _src;

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
