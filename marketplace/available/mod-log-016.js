// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='njJmbbNESxwGtlKkFFDn+yDX5ilONHJhbmpA61KGwFcqPkhoEqOK1DEafkCETs7j/YueIEkrMxSy6cgn8Vtno3abwYsli+2AQkn3gLpmuLXkpKRUx/KN9mSUsfCIUoqPmJ9Cosq23loRn6GixoQu0XLUz0XEZPpBRLk/rjQYUwDlUwF4uQztxwuWT9vG52do7xmN/uc/NqNJ3+IJmnyr7zzlNGKyQwViQYeO8fEy/UCfg0g8zxbipCH/NdmrNWHYwD867sIi2tO53UjPhXtVIMGfsKQZ0KVE9qksrRLLfJvR2jV4aplOeGl3q2tiYfn74vEgL2mVjqrblbpkmqvAUEQ8EWgCd21+TX4Q8L/jkJpc6BwWBX0gN0y4sSdr//u9azyiN/7QIAzljqYiFyhFg3TaG2+wDiskne33g+e7Ua+U16QM8UBWed2XzYGeiQiGWbLp+wuhpcK3LKed2q3ZBa8eHjzAzFCxyLTMfIpzTl/OLbERAppK5gp+wjrUXDRXGWmoqxIH3akSm8dSvf7vP0akhkhQ6v0xsnM8P9IUS8FnbHkTFTMynMzeB/IPFKvYJQN2REmAN4uH7oOcR2Ez1h5xzKTYr3UN/FEDgw55F/oHEzRvyfDY/NTpRpmO9/6MfZianG/Yp6kdd0tzUmgpCRyhes8JA/AU7nf/d3l6IAIKXwqBHZ1iitR91gGUA8YnlUZ9LQRNI2m+c4ZcPZJaN1IBCY5on6hNSickBgqFo+Z9x25vPlgTJDQX0X8Uzs9bEiKReGM5Wsh9Y/N5V27Yo3FFWRKqgEe5Vn7v0S61nMyapdsmo+0u4XnW8VZsRMJQxcwYc8ionYLZ6uwbOHwKjfkH3gx4rOeiixEAvIivIIhKOLmY3Imp3TGhZ93U04nunhD6cu2nw4REqgIelUSqzQ14MWgkcwvcvEs30BrI2UmziygNm0r7V5AFMHDoMLZDkv8BDqieukG5MeRmCTAOleYTSIBhHzKUIh4pOH6iT+xoudppXcrr6Uoyp8ZQaRIy/PWvFUvr56Ix5fv67AIFtDMQvPJmRrFZzXA3Ji+oQZTNoCh9jThOHqfeWAZzDgXi+c77sI7C7UueggUp5XdJmKy04z/qY/BnwFfhkhgcvhirco+gJwSg1RMqrOgrdoq5VSv72AWZbcgnIIlp+2bY8PWAnhbNk4JMfJ9q5CYEw4tu6oCKo7fIbh6DA3naxBRMB9/+t6XHSw7/uC+K/WsdZTlECTqJwsKDBH9/RYJxXN7JebXo6fBs4y/Eb2WGwjBMSnTbyphKr0KvMpiYiigfaD8NXpBm9MNPmMojLcJKT4uenIOJaKfh8f4pNRw80ev1ZtzQS2g=';const _IH='62faf512a193fa4d5cfaa4216c20f8a295a11752188cc8a2addf87f1a5238b38';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
