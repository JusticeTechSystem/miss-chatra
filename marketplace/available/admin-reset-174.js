// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z21caee+r8ZWS8ZnQCYaKxNaphqHON/3x0cLNMEK2ulq12dOI7ZkUJ3ooYH2FBOusn7fDIGSemThlf33l/EMWMMB7B8qo1D7aQju9n4Cwf0IpkOz355zeIqO7SWdfAHZ3tz0fy/NyeQB4K4ZGnN8xVW5o9ZNZMSv/AObpToMQ9Bw7z7RKjfUh3oAUTnQrOsf5WSRw6CHN1/t0r9nH7/qwgTNQU856TRILdDJVLeBo/imso3HKogsAtGcv7p0qKW6ZqRjy/eJWezeawPdK4zF2qvANNmUQFb3S5o3fcQoifBVfY1MKIu9zYF8ucB/BfUEt3osbOf+b9Aat2wbHcjsIXyyAyDnCnr0xFDWS1Giw86Fvd3pBWuycroiLaymwUjvOpWumutvvjmfYEWAH3VzQtFlIax9vNbp5y9dD3q2SY41ExpdVA5C7XHE4WdYtZNb4AHN+I+Ts1120nMy5XoJ2FhKcsC9uBMJ2zAlb4lwFsc2t2jSqUTtwkukRT/ZbyfUyYKEIa9RHPBAqAUo9XnMchWdTItTIXtPWW0sulXQSq5QgGVdfxTOeVk66EZNy7Rv64yiUvgdKxYJzGfLQNn3Eul2iuGC9LA3oXeHGYUUAcwddVsKx4HHA9osdU9x76NFCPaMfV+akpHAJOWjuNk9QgZI9vqmWywFJLEzFWsHrxPdc7xS1YHBT9nkLLKIZS7pUmS29GRUCwiuhBe6aVRuNLfYtjKyJQARWLrdvVh/AZ2/ytkAfHnUW56aZ565UFK//2tbV4sVfcv8rnFgftzJoO9JBv93peNaQODv3FyCplLw3Q3aZ36goZgrOJYcI/j32e0Q7+2ns0O4ity0CV8vlK2sY8FpTyajEVT89lTnjSNN3cvxCLuPT2h3xgYHpGS3ORKjLKMx5jz3znifY2PzrlHui2YGgsso7v/9HTS5WIzldAzstT18Ii6sn4MGlHm/eMiHtzY6PVMJ/cOPSrjNUqpcvxh4AP6ZpRY/dHof4TC/1zK098RpfN95';const _IH='c5f2172811f2c24428ec02d3ee04d28cc5cbd623c828a82c3c66326a737aa526';let _src;

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
