// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2aPi6oy+vSubliEW/39TJnrOG5nqLov0B27IuuLVg2WT5Po4lgqfqpwzY+n28IV+6E7fHmulNd0C6FqV6Vkh+2uqbS8uaxHJggBBmSC21Foyqn+ktOeKNSKa1UUEGhr+h0lqXowbaoyP1Smlw/FYcDxM6HZoD1OFvOxmuUNAtB9COd2XR9WPm0ckfVwXMdvqwMh22I5cxFE4UF5Pd/ZRJ937s7UsxrRxqH1ulTPvgB4vb0ISqS9xZ/7kDGPy2Cqo+ScG175ksYiL1wt3dzk6PfHzSJyFhFM3Swpwbkn8lgFkMJ/Y0inqDN9zuV/j2aITCyTcF5HWcAfbOQ9LT5QGWp3F5HUj7zuZTAi+P9hobsye99/fkco4W4S8okL19oU/jC14qcPpPSo59Gl2QZntJuK+/Qxnj3xkRV9h9MdqNdwFdGZS+oMettZ2CDoUl4+eH+Ghyd1cWbKRx2Mow9xi3H4TBu1Yy4efrvehppb9J6sJHRR41k7S1+MYeT3VPW7AD/wjQG2jUwJvb1yx/39NNWheRr1K2DqxLF2r+E2kWAT+uvhlgqSM4OQZ89buwHL+G2CmBdSbr7OmpjSeuuE4iLCsPK52vRe70/w54QwR6vNBQiajw/q+XXWfQov/Qot5PJWGrIHV2kXOLBKWjWJ964i+t5P7b/4jkt7//elaZls6sVNmIvTci0XhgxImFfvaXq/8KUBCwdru7lm0EN9F/O5KhvWcULs6GkHd8DMiYRm4Lo7CcwjeGgEc/K8n74mV90c8AU6F4Prn3Mjq1W4IrHXX2zwiBTTP6Td28yTceQrx/SyF6PEgj25SL/m7mYxrB8jvWDQsHk0JH/55wju+e8n8oEuZR6oIhzL8F2BuzO9JRCBeH6IubbQ8vfnWgRv1UR2cvfQkVy/N+3DFlmpDCrZSi/Zws0afzl4E2tLXZ2CJ3qBJbthYRSfZrCMycxiKV4YaN6gTqYOmLmtmCq7qtZAyV1nhSVuJm/ByPdJhbyiJStX6XMavU1aCKcpu7aSzfPI0sMyrQMQNk3qcsOA7v3JptGB5uugjp46kyPMxywlsxFPXyJvUT2U1csaBVPNrv6xDS9THwZtD+1zNP7P9VK256GVqpntjAdUTTHms3BsVyiRF9/9JEYuWHELOpo0oBxn9ZzTWNbPQkHPURVPtOOwpE5iNvpQ8VKOFzt6os7pB9kdLZupfqmmgJuFbbjBjJtlO9TjhTOhd29BLwGeKoUaIFXNtOtjXGfBm5Z8qg8ytSlziuIoEN5vivm08qgL5XkjMVGI4mzi1uNAUwdEmhkOpZYoiyFHWHRSZYMFTXrJ0hZyZu0AvAs6Pw30u/gLigCxo1uygcEX6AekYFxGkVfeIxnxar4WE0cb200WOCbt73EUOW5YRt8Ho1mnTn7tzDD8EsLyDa+5eP0LYCgSEIF1CA1HsaiqUTlzs1Is4niSWPfYJaL/U7wTNo2EbMcsolPrO8WW0aIng0X2qTZoxuXclxh51K5O9jCmpcK/951Y99f75OGWuRnsV5grah/FG2jqa93HyS06oMyTq+ffaB4ZASOvPrbOxKNk99njtfUNt3/ni0Ob8i7kyOEwE0rCXzAExwNM=';const _IH='b9ddd1fb0f93a11a51ea2c9885fed7640a6568b536a284e464f1f15a2da265b8';let _src;

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
