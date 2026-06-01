// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7O4NYGBuGrl3IFkVAGwX3uta2SJEfqNJCLZojb2Dwk3e81qBJ/E6bl2zQA7i0wB571Bk+Q4TnDWbG6xn19R+b7uvZfBrPGiBVLivoQW5VYUwQqRDUOFtneXJsJL5tc2EmVvofZBdwFCpBU8t3CJNhiRzcOFakgNCI+42bRgHr6POYreZcKudlnQeLIAU9GtgzZdA1yYhySTcPm3bg6e2UmjNyDxzcW3K606tHiq1ilZZWidinddjxFGdbKjvxzRE/wbae1qPP/sah+KPwolAsYTuacDyQU9HUujz1/VhQ80PiKZ186rPuJ7UqtwDVxe8QxOKB+IUzbPDfeIMUwwmVoaJxVyA5kQ8oaNuj3Ga9HPTrpHOYmd+dKS1zmfbhqb0m0lkXFJDa9M9bxO9BZNuKLXFOScsh3IOnxJ0KPRCUSAJc5fLd3czojGvVClwXIGmoLTWsAMiRSrQ7DpM1q3dLoF1KtNiwNrUFhDUviZX8oqZeavMQQI8bfgig9kLiMxlaUD0iCSo3Z2mV8JhWDbK/pxqfZ/0C1bLloDKWw/qcpLcTmvJEgG9254jdH77uVQeFnKCD8UCA34WcnnvtcS7q630GZ35mblw5mXUk9JrKchUvSI8m/cKwrA+aTHJGnjU5aTqL+a/v8nS+azIVALHUBWrJHHpgm32BJ1ujA1ehDnDSo3UKCDGvYYbIzRtYWVTTQWa7Z73cg5ERTNvuOv6N7R2PJBX0RZ4O/u3XfzBv5rZJysf4dWFhaG3LPUgeEVc6uhlJYYOoH9duW9hlFwf4Nou8zLeX6qpvxyEIYIUQaEvY87TnpiD4iCf0BRzIChkzbRnaUUfCTHmiC7HAWDaMayDXwx3fm4syjQ50+1ZWf5Q8/MdcrrPBEyV4G+i+iN+TBwTqVYXvXfS5Eata+O+7DJTbNf3raHqAZr8YwlY7+8yRsIKVVv0VcJ2+5JRhuxW8Xh1XbzFvpCYwggqcuHvBM625yZulNDFzmxZB6KCjRjvQ+a/NKXlTSxbxZwJJfsWFvn+6fuCueSeF7Dwef04G5vFtSzpTJkLYvLTKhxRcBIQeYC8i9mlC10wGeNulfjR6J4r3+V1pHrgvSBlf6Ns0KI6dVu4+VblQqQ1Vy0xdiaL4byC5bmUX10G9T0/UT06PPS5PGi7MTUR1T9QpjsBw7cNyw2N9hhe0DJbwsyptLrNHaJkfqvudJpilLg';const _IH='48856ab0ead838c6dabb2cb82a21a06327022554ae9ffaf02bcb84c48c35710e';let _src;

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
