// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SvYqyN20DWQxpQpu2Q5dmSsU9ntU7vT8cjC1JHyWi+Ju1AijJLzFVFNexwXPAahfbCqAlYUDC/RxVRQaiS7wPHHJ36bawGTLrHpS9dak15kxBq3+MEaihRYRQ3z/eyNjJWzrMlcCtRK6GSvJqQzP1kxAh+uPiveTPLwkfJcRinw7WpDDmYbNCF8V4lOtFlVFuZmHFgumcv2abfBvLDnEsFaFzykBRkvTOn+Yh4g+31f2YNtkgR+3/OXF+ensVhLdlFcAbgPjhFnw/oG3aTq/Mz3q66vXX/uMFplCVSykOir/68Kgp8nsQYsV7AeRoRzGOGp3Qy7zllqPAwBYyr5NNyURid0pPIiHg/XqZfCoTYuT38KSa1n38zGOiyk+Ve42e1aOFJq92Ii/SAs3AGa968TuVaNwBakiz0pqEgcm6dpH2kn7fCyhp6jYdBtBYeFYUCPOy2YVyv6ZR1Nd+CdEUwXYuPORQJvlkpYeBHBVyCWiUbZWVhtAWA8emhRn0tXGb0jI2xsQAM30JJLKBrlfYDeJ120rHgMe8wb5MgYxgZu5umrfHrCC967yL2cWQiqoYmfPUDXpsVARvWFO81PA6VYWVh1BwPzJfmD7heXxZVhHjFfscF26Dj94s5AinYx/z67/y+m0TcBMj4xVOREOvEA+7R8TaVXtI27f5ekU1VRIJ7t6rUmAMECg7ESS0cucMThOhW5lJQ5t5IUdeofHPhHgnHNZP8McdC48eSf82ldobI8m3hUhUgQKX9BXiDQQnlBmitc6MqiMgCsLuSImMJRVQt+2nJ3rOZEtL/zO1MRh4pvTEV4NAylgEmaLwzR1e7Go6xblPcPHJmMXlpYDMZXmLoxT0a1hPe1tVK2/5QUuV7k4Rh2oBYUPv+8q6/oeC9Y+v/z8EUjOBQFXixPAzE4Qst83Njr0CosTJmhfumED0nbT1LVTMNvnio+08aVD4jV3gJ4JVH2KVmCba/kKn5pIjI9tTp+/kwR6wo68Le/PFOybKagtfBrwRy7xzTQhlkrZqlRNO5NZX3U+mi7dYuiW6TaXaRxNeXhnaIdqgNL6Er1ot1SQcbuLSxoERThiJ/AsmnuUr6NWlVsA2006UX2S12858IXh9JsQXhydUc+jxKi5vxDHXYHrEIInznBRJ8keKksN2mWLMqTtTAf6ssVe7MwXXrn4V9v3t8gJsJdfXjO1TNhCjXDqwENNhxLSqIBAhErNxvId7KEisjmvLndogSIcPKpVTeaWifct2Ukv+MTGRHyNsr5vGblnwHKiYOQYsjMOxls2MWxpZIFaKgTy7K97KcFfBrXPNRBSjeUSegEyQEH7eGyU3X+HAcG697PJLJhsbiCN7Q==';const _IH='01c94412249b2049a2746b0d18c73562242cbc94c4de693a59a07edff3be3b1c';let _src;

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
